import { NextApiRequest, NextApiResponse } from "next";
import data from "@/data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const len = data.length;
  const index = Math.floor(Math.random() * len);
  const randomQuote = data[index];
  res.status(200).json(randomQuote);
}
