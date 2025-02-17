import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "@/lib/mongodb";
import client from "@/lib/redis";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { startDate, endDate } = req.query;

  if (!startDate || !endDate || Array.isArray(startDate) || Array.isArray(endDate)) {
    return res.status(400).json({ error: "Invalid date format. Please provide startDate and endDate." });
  }

  const start = new Date(startDate as string);
  const end = new Date(endDate as string);

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return res.status(400).json({ error: "Invalid date values. Use format YYYY-MM-DD." });
  }

  try {
    const cacheKey = `quotes:date-range:${startDate}:${endDate}`;
    const cachedData = await client.get(cacheKey);
    if (cachedData) {
      return res.status(200).json(JSON.parse(cachedData));
    }

    const db = await connectToDatabase();
    if (!db) {
      throw new Error("Database connection failed");
    }

    const quotes = await db
      .collection("quote")
      .find({
        date_added: {
          $gte: start.toISOString(),
          $lte: end.toISOString(),
        },
      })
      .project({ _id: 0 })
      .toArray();

    if (quotes.length === 0) {
      return res.status(404).json({ error: "No quotes found within this date range." });
    }

    await client.set(cacheKey, JSON.stringify(quotes), { EX: 3600 });

    return res.status(200).json(quotes);
  } catch (error) {
    console.error("Error fetching quotes:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
