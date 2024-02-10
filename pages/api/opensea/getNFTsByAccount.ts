import type { NextApiRequest, NextApiResponse } from "next";
import { NFTsBy } from "../types";

const options: RequestInit = {
  method: "GET",
  headers: {
    accept: "application/json",
    "x-api-key": `${process.env.OPENSEA_ANALYTICS_APIKEY}`,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NFTsBy>
) {
  const { address, chain } = req.query;
  if (!chain || !address) {
    throw new Error("undefined params");
  }
  try {
    const url = `https://api.opensea.io/api/v2/chain/${chain}/account/${address}`;

    const response = await fetch(url, options);
    const data: NFTsBy = await response.json();
    res.status(200).json(data);
  } catch (e: any) {
    if (e.message === "undefined params") {
      res.status(500).json(e);
    }
    res.status(e.status).json(e);
  }
}
