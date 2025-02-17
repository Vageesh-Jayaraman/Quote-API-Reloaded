import { MongoClient, Db } from "mongodb";

const uri: string = process.env.MONGODB_URI ?? "";
const dbName: string = process.env.MONGODB_DB ?? "";

if (!uri) throw new Error("MONGODB_URI is not defined");
if (!dbName) throw new Error("MONGODB_DB is not defined");

let client: MongoClient | null = null;
let db: Db | null = null;

export default async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    db = client.db(dbName);
    console.log("Connected to MongoDB");
  }
  return db; 
}
