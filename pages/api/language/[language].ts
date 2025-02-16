import { NextApiRequest, NextApiResponse } from "next";
import data from "@/data.json";
import client from "@/lib/redis"; // Import Redis client

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { language } = req.query;

  if (!language || Array.isArray(language)) {
    return res.status(400).json({ error: "Invalid Language format" });
  }

  try {
    const cacheKey = `quotes:language:${language}`;
    const cachedData = await client.get(cacheKey);
    if (cachedData) {
      return res.status(200).json(JSON.parse(cachedData)); 
    }

    const filteredQuotes = data.filter((quote) => quote.language === language);
    if (filteredQuotes.length === 0) {
      return res.status(404).json({ error: "No quotes found for this language" });
    }

    await client.set(cacheKey, JSON.stringify(filteredQuotes), "EX", 3600);
    return res.status(200).json(filteredQuotes); 
  } 
  catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
