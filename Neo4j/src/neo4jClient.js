import { driver as _driver, auth } from "neo4j-driver";
import dotenv from "dotenv";

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