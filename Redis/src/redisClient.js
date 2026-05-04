import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

const client = createClient({
<<<<<<< HEAD
    username: 'default',
    password: 'w5CIyvsv79leioIBfbWIAwNS1xrHIuwx',
    socket: {
        host: 'redis-13394.crce202.eu-west-3-1.ec2.cloud.redislabs.com',
        port: 13394
=======
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT)
>>>>>>> eb989893978ec6e0f2b78d5f812ef7281ce5354f
    }
});

client.on("error", (err) => console.error("Redis error:", err));

(async () => {
  await client.connect();
  console.log("Connected to Redis Cloud");
})();

export default client;
