import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "@/lib/mongodb";
import client from "@/lib/redis";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const cacheKey = `quotes`;
    const cachedData = await client.get(cacheKey);
    if (cachedData) {
      return res.status(200).json(JSON.parse(cachedData));
    }

    const db = await connectToDatabase();
    if (!db) {
      throw new Error("Database connection failed");
    }

    const quotes = await db.collection("quote").find({}, { projection: { _id: 0 } }).toArray();

    if (!quotes || quotes.length === 0) {
      return res.status(404).json({ error: "No quotes found" });
    }

    await client.set(cacheKey, JSON.stringify(quotes));
    await client.expire(cacheKey, 3600);

    return res.status(200).json(quotes);
  } catch (error) {
    console.error("Error fetching quotes:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
