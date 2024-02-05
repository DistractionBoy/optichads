import type { NextApiRequest, NextApiResponse } from "next";
import { NftContractBaseNftsResponse } from "alchemy-sdk";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NftContractBaseNftsResponse>
) {
  const { contractAddress, limit } = req.query;
  try {
    const url = `https://opt-mainnet.g.alchemy.com/nft/v3/${process.env.NEXT_PUBLIC_ALCHEMY_APIKEY}/getNFTsForContract?contractAddress=${contractAddress}&withMetadata=true&limit=${limit}`;

    const response = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    const data: NftContractBaseNftsResponse = await response.json();
    res.status(200).json(data);
  } catch (e: any) {
    res.status(e.status).json(e);
  }
}
