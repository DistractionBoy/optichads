import { serialize } from "@/lib/helpers";
import type { NextApiRequest, NextApiResponse } from "next";
import { NFTsBy } from "../types";

const options: RequestInit = {
  method: "GET",
  headers: {
    accept: "application/json",
    "x-api-key": `${process.env.OPENSEA_ANALYTICS_APIKEY}`,
  },
};

/**
 *
 * @param req
 * @chain = 'opt', 'eth', 'base', 'arbi'
 * @param res an array of addresses that are current owners of passed-in collection contract address
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NFTsBy>
) {
  const { collection_slug, limit, next } = req.query;
  let params;
  if (!collection_slug) {
    throw new Error("undefined params");
  }
  if (limit) {
    params = serialize({ limit });
  }
  if (next) {
    params += `&next=${next}`;
  }

  try {
    const url = `https://api.opensea.io/api/v2/collection/${collection_slug}/nfts${
      params ? params : ``
    }`;
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
