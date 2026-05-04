import { getSession } from "./neo4jClient.js";

export async function createUser(name) {
  const session = getSession();
  await session.run(
    "MERGE (u:User {name: $name}) RETURN u",
    { name }
  );

  await session.close();
}

export async function addFriend(user1, user2) {
  const session = getSession();
  try {
    // Usiamo MERGE per i nodi così, se non esistono, li crea al momento
    await session.run(
      `MERGE (a:User {name: $user1}) 
       MERGE (b:User {name: $user2}) 
       MERGE (a)-[:FRIEND]->(b)`,
      { user1, user2 }
    );
  } finally {
    await session.close();
  }
}

export async function getFriends(name) {
  const session = getSession();
  try {
    const result = await session.run(
      "MATCH (a:User {name: $name})-[:FRIEND]->(f) RETURN f.name AS friendName",
      { name }
    );

    // IMPORTANTE: Trasforma i record di Neo4j in un array di stringhe
    // Altrimenti il frontend riceverà un oggetto vuoto o errato
    return result.records.map(record => record.get("friendName"));
    
  } finally {
    await session.close();
  }
}


export async function deleteUser(name) {
  const session = getSession();
  await session.run(
    "MATCH (u:User {name: $name}) DETACH DELETE u",
    { name }
  );

  await session.close();
}