import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "@/lib/mongodb";
import client from "@/lib/redis";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { language } = req.query;
  const validLanguages = ["english", "sanskrit"];

  if (!language || Array.isArray(language)) {
    return res.status(400).json({ error: "Invalid Language format" });
  }

  if (!validLanguages.includes(language.toLowerCase())) {
    return res.status(400).json({ error: `Invalid language. Choose from: ${validLanguages.join(", ")}` });
  }

  try {
    const cacheKey = `quotes:language:${language}`;
    
    const cachedData = await client.get(cacheKey);
    if (cachedData) {
      return res.status(200).json(JSON.parse(cachedData));
    }

    const db = await connectToDatabase();
    if (!db) {
      throw new Error("Database connection failed");
    }

    const quotes = await db.collection("quote").find({ language }).project({ _id: 0 }).toArray();

    if (quotes.length === 0) {
      return res.status(404).json({ error: "No quotes found for this language" });
    }

    await client.set(cacheKey, JSON.stringify(quotes), { EX: 3600 });

    return res.status(200).json(quotes);
  } catch (error) {
    console.error("Error fetching quotes:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
