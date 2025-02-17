import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "@/lib/mongodb";
import client from "@/lib/redis";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { author } = req.query;

  if (!author || Array.isArray(author)) {
    return res.status(400).json({ error: "Invalid Author format" });
  }

  try {
    const cacheKey = `quotes:${author}`;
    const cachedData = await client.get(cacheKey);
    if (cachedData) {
      return res.status(200).json(JSON.parse(cachedData)); 
    }

    const db = await connectToDatabase();
    if (!db) {
      throw new Error("Database connection failed");
    }

    const quotes = await db.collection("quote").find({ author }).project({ _id: 0 }).toArray();

    if (quotes.length === 0) {
      return res.status(404).json({ error: "Quotes not found for this author" });
    }

    await client.set(cacheKey, JSON.stringify(quotes), { EX: 3600 });

    return res.status(200).json(quotes);
  } catch (error) {
    console.error("Error fetching quotes:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
