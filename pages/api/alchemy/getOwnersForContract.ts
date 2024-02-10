import type { NextApiRequest, NextApiResponse } from "next";
import { GetOwnersForContractResponse } from "alchemy-sdk";

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
  res: NextApiResponse<GetOwnersForContractResponse>
) {
  const { contractAddress, chain } = req.query;
  if (!contractAddress || !chain) {
    throw new Error("undefined params");
  }
  try {
    const url = `https://${chain}-mainnet.g.alchemy.com/nft/v3/${process.env.ALCHEMY_APIKEY}/getOwnersForContract?contractAddress=${contractAddress}`;

    const response = await fetch(url, options);
    const data: GetOwnersForContractResponse = await response.json();
    res.status(200).json(data);
  } catch (e: any) {
    if (e.message === "undefined params") {
      res.status(500).json(e);
    }
    res.status(e.status).json(e);
  }
}
