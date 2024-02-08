import type { NextApiRequest, NextApiResponse } from "next";
import { NftMetadata } from "alchemy-sdk";
import { serialize } from "@/lib/helpers";

const options: RequestInit = {
  method: "GET",
  headers: { Accept: "application/json" },
};

/**
 *
 * @param req
 * @chain = 'opt', 'eth', 'base', 'arbi'
 * @param res an array of addresses that are current owners of passed-in collection contract address
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NftMetadata | Error>
) {
  const { chain, contractAddress, tokenId } = req.query;
  if (!chain || !contractAddress || !tokenId) {
    throw new Error("undefined params");
  }
  const params = serialize({ contractAddress, refreshCache: false });
  try {
    const url = `https://${chain}-mainnet.g.alchemy.com/nft/v3/${
      process.env.NEXT_PUBLIC_ALCHEMY_APIKEY
    }/getNFTMetadata?${params && params}`;

    const response = await fetch(url, options);
    const data: NftMetadata = await response.json();
    res.status(200).json(data);
  } catch (e: any) {
    if (e.message === "undefined params") {
      res.status(400).json(e);
    }
    res.status(e.status).json(e);
  }
}
