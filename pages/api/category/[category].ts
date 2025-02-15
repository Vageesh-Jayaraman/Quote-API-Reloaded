import { NextApiRequest, NextApiResponse } from "next";
import data from "@/data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category } = req.query;
  const validCategories = ["motivation", "affirmation", "fitness", "relationship", "positivity"];

  if (!category || Array.isArray(category)) {
    return res.status(400).json({ error: "Invalid Category format" });
  }

  if (!validCategories.includes(category)) {
    return res.status(400).json({ error: "Invalid category. Choose from: " + validCategories.join(", ") });
  }

  const filteredQuotes = data.filter((quote) => quote.category === category);
  res.status(200).json(filteredQuotes);
}
