import { NextApiRequest, NextApiResponse } from "next";
import data from "@/data.json";
import client from "@/lib/redis";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category } = req.query;

  const validCategories = ["motivation", "affirmation", "fitness", "relationship", "positivity"];

  if (!category || Array.isArray(category)) {
    return res.status(400).json({ error: "Invalid Category format" });
  }

  if (!validCategories.includes(category)) {
    return res.status(400).json({ error: "Invalid category. Choose from: " + validCategories.join(", ") });
  }

  try {
    const cacheKey = `quotes:${category}`;
    const cachedData = await client.get(cacheKey);
    if (cachedData) {
      return res.status(200).json(JSON.parse(cachedData)); 
    }

    const filteredQuotes = data.filter((quote) => quote.category === category);

    if (filteredQuotes.length === 0) {
      return res.status(404).json({ error: "No quotes found for this category" });
    }

    await client.set(cacheKey, JSON.stringify(filteredQuotes), "EX", 3600); 
    return res.status(200).json(filteredQuotes);
  } 
  catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
