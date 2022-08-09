import type { NextApiRequest, NextApiResponse } from "next";
import rarityChart from "./rarity.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { tokenId } = req.query;
  const json_data = rarityChart;

  const metadata = json_data.filter(
    (entry) => entry.tokenId === Number(tokenId as string)
  );
  res.status(200).json(metadata);
}
