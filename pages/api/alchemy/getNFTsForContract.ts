import { serialize } from "@/lib/helpers";
import type { NextApiRequest, NextApiResponse } from "next";
import { NftContractBaseNftsResponse } from "alchemy-sdk";

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
  res: NextApiResponse<NftContractBaseNftsResponse | Error>
) {
  const { chain, contractAddress, limit } = req.query;
  if (!chain || !contractAddress) {
    throw new Error("undefined params");
  }
  const params = serialize({ contractAddress, limit, withMetadata: true });
  try {
    const url = `https://${chain}-mainnet.g.alchemy.com/nft/v3/${
      process.env.NEXT_PUBLIC_ALCHEMY_APIKEY
    }/getNFTsForContract${params && params}`;

    const response = await fetch(url, options);
    const data: NftContractBaseNftsResponse = await response.json();
    res.status(200).json(data);
  } catch (e: any) {
    if (e.message === "undefined params") {
      res.status(500).json(e);
    }
    res.status(e.status).json(e);
  }
}
