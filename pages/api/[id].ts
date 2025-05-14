import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "@/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }

  try {
    const db = await connectToDatabase();
    if (!db) {
      throw new Error("Database connection failed");
    }

    const quote = await db.collection("quote").findOne(
      { id: Number(id) }, 
      { projection: { _id: 0 } }
    );

    if (!quote) {
      return res.status(404).json({ error: "Quote not found" });
    }

    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");

    return res.status(200).json(quote);
  } catch (error) {
    console.error("Error fetching quote:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
