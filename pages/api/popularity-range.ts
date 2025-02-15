import { NextApiRequest, NextApiResponse } from "next";
import data from "@/data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { minPopularity, maxPopularity } = req.query;

  if (!minPopularity || !maxPopularity || Array.isArray(minPopularity) || Array.isArray(maxPopularity)) {
    return res.status(400).json({ error: "Invalid popularity range. Provide minPopularity and maxPopularity." });
  }

  const min = parseFloat(minPopularity as string);
  const max = parseFloat(maxPopularity as string);

  if (isNaN(min) || isNaN(max) || min < 0 || max > 10 || min > max) {
    return res.status(400).json({ error: "Popularity values must be between 0 and 10, with minPopularity ≤ maxPopularity." });
  }

  const filteredQuotes = data.filter((quote) => quote.popularity >= min && quote.popularity <= max);

  if (filteredQuotes.length === 0) {
    return res.status(404).json({ error: "No quotes found within this popularity range." });
  }

  res.status(200).json(filteredQuotes);
}
