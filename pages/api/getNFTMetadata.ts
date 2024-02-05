import type { NextApiRequest, NextApiResponse } from "next";
import { NftMetadata } from "alchemy-sdk";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NftMetadata>
) {
  const { contractAddress, tokenId } = req.query;
  try {
    const url = `https://opt-mainnet.g.alchemy.com/nft/v3/${process.env.NEXT_PUBLIC_ALCHEMY_APIKEY}/getNFTMetadata?contractAddress=${contractAddress}&tokenId=${tokenId}&refreshCache=false`;

    const response = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    const data: NftMetadata = await response.json();
    res.status(200).json(data);
  } catch (e: any) {
    res.status(e.status).json(e);
  }
}
