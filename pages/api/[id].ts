import { NextApiRequest, NextApiResponse } from "next";
import data from "@/data.json";
import client from "@/lib/redis"; // Import Redis client

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }

  try {
    const cacheKey = `quote:${id}`;
    const cachedData = await client.get(cacheKey);
    if (cachedData) {
      return res.status(200).json(JSON.parse(cachedData)); 
    }
    const quote = data.find((quote) => quote.id === Number(id));

    if (!quote) {
      return res.status(404).json({ error: "Quote not found" });
    }
    await client.set(cacheKey, JSON.stringify(quote), "EX", 3600);

    return res.status(200).json(quote);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
