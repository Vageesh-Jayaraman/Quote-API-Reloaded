import { NextApiRequest, NextApiResponse } from "next";
import data from "@/data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const { id } = req.query;
  if (!id || Array.isArray(id)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }

  const quote = data.find((quote) => quote.id === Number(id));

  if (!quote) {
    return res.status(404).json({ error: "Quote not found" });
  }
  res.status(200).json(quote);
}
