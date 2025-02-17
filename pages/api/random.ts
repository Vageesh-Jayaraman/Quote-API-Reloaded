import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "@/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const db = await connectToDatabase();
    if (!db) {
      throw new Error("Db not found");
    }

    const data = await db.collection("quote").find({}).project({ _id: 0 }).toArray();
    const len = data.length;
    
    if (len === 0) {
      return res.status(404).json({ error: "No quotes found" });
    }

    const index = Math.floor(Math.random() * len);
    const randomQuote = data[index];

    return res.status(200).json(randomQuote);
  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
