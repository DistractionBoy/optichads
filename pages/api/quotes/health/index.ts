import type { NextApiRequest, NextApiResponse } from "next";
import { Quotes } from "../../../../lib/types";
import healthQuotes from "./health-quotes.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const json_data: Array<{ quote: string; name: string }> =
    healthQuotes as Quotes;
  const quote = json_data[Math.floor(Math.random() * json_data.length)];
  res.status(200).json(quote);
}
