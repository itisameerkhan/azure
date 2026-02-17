import { CosmosClient } from "@azure/cosmos";
import dotenv from "dotenv";

dotenv.config();

const endpoint = process.env.COSMOS_URI;
const key = process.env.COSMOS_KEY;

const client = new CosmosClient({ endpoint, key });

const databaseId = "demo-database";
const containerId = "demo-container";
// const paritionKey = { kind: "Hash", paths: ["/demopartition"] };

const database = client.database(databaseId);
export const container = database.container(containerId);