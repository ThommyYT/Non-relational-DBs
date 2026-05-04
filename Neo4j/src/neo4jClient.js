import { driver as _driver, auth } from "neo4j-driver";
import dotenv from "dotenv";
import dns from "dns";
dns.setServers(['8.8.8.8', '8.8.4.4'])

dotenv.config();

const driver = _driver(
  process.env.NEO4J_URI,
  auth.basic(
    process.env.NEO4J_USER,
    process.env.NEO4J_PASSWORD
  )
);

export function getSession() {
  return driver.session();
}