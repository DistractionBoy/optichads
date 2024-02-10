import { serialize } from "@/lib/helpers";
import type { NextApiRequest, NextApiResponse } from "next";

const options: RequestInit = {
  method: "GET",
  headers: { Accept: "application/json" },
};

export type isHolderOfContractResponse = {
  isHolderOfContract: true;
};

/**
 *
 * @param req
 * @chain = 'opt', 'eth', 'base', 'arbi'
 * @param res an array of addresses that are current owners of passed-in collection contract address
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<isHolderOfContractResponse | Error>
) {
  const { address, chain } = req.query;
  if (!address || !chain) {
    throw new Error("undefined params");
  }
  const params = serialize({ address, chain, withMetadata: true });
  try {
    const url = `https://${chain}-mainnet.g.alchemy.com/nft/v3/${
      process.env.ALCHEMY_APIKEY
    }/isHolderOfContract${params && params}`;

    const response = await fetch(url, options);
    const data = await response.json();
    res.status(200).json(data);
  } catch (e: any) {
    if (e.message === "undefined params") {
      res.status(500).json(e);
    }
    res.status(e.status).json(e);
  }
}
