import { NextApiRequest, NextApiResponse } from "next";
import data from "@/data.json";
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

    const filteredQuotes = data.filter((quote) => quote.author === author);

    if (filteredQuotes.length === 0) {
      return res.status(404).json({ error: "Quotes not found for this author" });
    }

    await client.set(cacheKey, JSON.stringify(filteredQuotes), "EX", 3600); 
    return res.status(200).json(filteredQuotes);
  } 
  catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
