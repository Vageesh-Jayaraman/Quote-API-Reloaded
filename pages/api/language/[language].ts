import { NextApiRequest, NextApiResponse } from "next";
import data from "@/data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { language } = req.query;

  if (!language || Array.isArray(language)) {
    return res.status(400).json({ error: "Invalid Language format" });
  }

  const filteredQuotes = data.filter((quote) => quote.language === language);

  if (filteredQuotes.length === 0) {
    return res.status(404).json({ error: "Quotes not found for this language" });
  }

  res.status(200).json(filteredQuotes);
}
