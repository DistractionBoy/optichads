import type { NextApiRequest, NextApiResponse } from "next";
import { GetOwnersForContractResponse } from "alchemy-sdk";

/**
 *
 * @param req
 * @param res an array of addresses that are current owners of passed-in collection contract address
 */

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetOwnersForContractResponse>
) {
  const { contractAddress } = req.query;
  try {
    const url = `https://opt-mainnet.g.alchemy.com/nft/v3/${process.env.NEXT_PUBLIC_ALCHEMY_APIKEY}/getOwnersForContract?contractAddress=${contractAddress}`;

    const response = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    const data: GetOwnersForContractResponse = await response.json();
    res.status(200).json(data);
  } catch (e: any) {
    res.status(e.status).json(e);
  }
}
