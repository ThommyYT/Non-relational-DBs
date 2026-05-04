import { Client } from "cassandra-driver";
import dotenv from "dotenv";
import dns from "dns";

dns.setServers(["1.1.1.1"]);
dotenv.config();

const client = new Client({
  cloud: {
    secureConnectBundle: process.env.ASTRA_DB_SECURE_BUNDLE,
  },
  credentials: {
    username: process.env.ASTRA_DB_CLIENT_ID,
    password: process.env.ASTRA_DB_CLIENT_SECRET,
  },
  keyspace: "logger",
});

(async () => {
    await client.connect();
  console.log("Connected to Astra DB");
})();

export default client;
