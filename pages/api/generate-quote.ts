import type { NextApiRequest, NextApiResponse } from "next";
import { GoogleGenerativeAI } from "@google/generative-ai";
import supabase from "@/lib/supabase";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "Missing GEMINI_API_KEY" });
  }

  const today = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"

  try {
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { data: existing, error: fetchError } = await supabase
      .from("daily_quotes")
      .select("quote")
      .eq("date", today)
      .single();

    if (fetchError && fetchError.code !== "PGRST116") {
      console.error("Fetch error:", fetchError);
      return res.status(500).json({ error: "Failed to fetch quote" });
    }

    if (existing?.quote) {
      return res.status(200).json({ quote: existing.quote });
    }

    const ai = new GoogleGenerativeAI(apiKey);
    const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent(
      "Give me one short inspiring quote for the day. Just the quote, no author."
    );
    const text = result.response.text()?.trim();

    if (!text) {
      return res.status(500).json({ error: "No quote generated" });
    }

    const { error: insertError } = await supabase
      .from("daily_quotes")
      .insert([{ date: today, quote: text }]);

    if (insertError) {
      console.error("Insert error:", insertError);
      return res.status(500).json({ error: "Failed to save quote" });
    }

    return res.status(200).json({ quote: text });
  } catch (err: any) {
    console.error("Unexpected error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
