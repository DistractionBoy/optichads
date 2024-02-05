import type { NextApiRequest, NextApiResponse } from "next";
import { ChadMetadata } from "@/lib";
import allChadsMetadata from "./chads/10000.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { collection, filter, pages, page, pagesize, id } = req.query;
  const json_data: ChadMetadata[] = [allChadsMetadata];

  if (id) {
    const tokenId = Number(id) - 1;
    res.status(200).json(json_data[tokenId]);
  } else {
    const quantity =
      (pagesize ? Number(pagesize) : 50) * (pages ? Number(pages) : 1);
    res.status(200).json(quantity);
  }
}
