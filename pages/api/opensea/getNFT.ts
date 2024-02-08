import type { NextApiRequest, NextApiResponse } from "next";
import { NFTExpanded } from "../types";

const options: RequestInit = {
  method: "GET",
  headers: {
    accept: "application/json",
    "x-api-key": `${process.env.NEXT_PUBLIC_OPENSEA_ANALYTICS_APIKEY}`,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NFTExpanded | Error>
) {
  const { address, chain, identifier } = req.query;
  if (!chain || !address || !identifier) {
    throw new Error("undefined params");
  }
  try {
    const url = `https://api.opensea.io/api/v2/chain/${chain}/contract/${address}/nfts/${identifier}`;

    const response = await fetch(url, options);
    const data: NFTExpanded = await response.json();
    res.status(200).json(data);
  } catch (e: any) {
    if (e.message === "undefined params") {
      res.status(500).json(e);
    }
    res.status(e.status).json(e);
  }
}
