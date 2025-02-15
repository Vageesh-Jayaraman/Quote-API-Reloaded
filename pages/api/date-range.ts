import { NextApiRequest, NextApiResponse } from "next";
import data from "@/data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { startDate, endDate } = req.query;

  if (!startDate || !endDate || Array.isArray(startDate) || Array.isArray(endDate)) {
    return res.status(400).json({ error: "Invalid date format. Please provide startDate and endDate." });
  }

  const start = new Date(startDate as string);
  const end = new Date(endDate as string);

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return res.status(400).json({ error: "Invalid date values. Use format YYYY-MM-DD." });
  }

  const filteredQuotes = data.filter((quote) => {
    const quoteDate = new Date(quote.date_added); 
    return quoteDate >= start && quoteDate <= end;
  });

  if (filteredQuotes.length === 0) {
    return res.status(404).json({ error: "No quotes found within this date range." });
  }

  res.status(200).json(filteredQuotes);
}
