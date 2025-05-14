import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "@/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { minPopularity, maxPopularity } = req.query;

  if (!minPopularity || !maxPopularity || Array.isArray(minPopularity) || Array.isArray(maxPopularity)) {
    return res.status(400).json({ error: "Invalid popularity range. Provide minPopularity and maxPopularity." });
  }

  const min = parseFloat(minPopularity as string);
  const max = parseFloat(maxPopularity as string);

  if (isNaN(min) || isNaN(max) || min < 0 || max > 10 || min > max) {
    return res.status(400).json({ error: "Popularity values must be between 0 and 10, with minPopularity ≤ maxPopularity." });
  }

  try {
    const db = await connectToDatabase();
    if (!db) {
      throw new Error("Database connection failed");
    }

    const quotes = await db
      .collection("quote")
      .find({
        popularity: { $gte: min, $lte: max },
      })
      .project({ _id: 0 })
      .toArray();

    if (quotes.length === 0) {
      return res.status(404).json({ error: "No quotes found within this popularity range." });
    }

    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");

    return res.status(200).json(quotes);
  } catch (error) {
    console.error("Error fetching quotes:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
