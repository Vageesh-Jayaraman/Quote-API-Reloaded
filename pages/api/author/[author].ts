import { NextApiRequest, NextApiResponse } from "next";
import data from "@/data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { author } = req.query;

  if (!author || Array.isArray(author)) {
    return res.status(400).json({ error: "Invalid Author format" });
  }

  const filteredQuotes = data.filter((quote) => quote.author === author);

  if (filteredQuotes.length === 0) {
    return res.status(404).json({ error: "Quotes not found for this author" });
  }

  res.status(200).json(filteredQuotes);
}
