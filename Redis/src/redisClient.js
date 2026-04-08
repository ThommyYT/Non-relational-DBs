import { createClient } from "redis";

const client = createClient({
    username: 'default',
    password: 'w5CIyvsv79leioIBfbWIAwNS1xrHIuwx',
    socket: {
        host: 'redis-13394.crce202.eu-west-3-1.ec2.cloud.redislabs.com',
        port: 13394
    }
});

client.on("error", (err) => console.error("Redis error:", err));

(async () => {
  await client.connect();
  console.log("Connected to Redis Cloud");
})();

export default client;
