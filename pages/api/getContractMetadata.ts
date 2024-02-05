import type { NextApiRequest, NextApiResponse } from "next";
import { NftContract } from "alchemy-sdk";

export type ContractMetadataResponse = {
  contractMetadata: NftContract;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NftContract>
) {
  const { contractAddress } = req.query;
  try {
    const url = `https://opt-mainnet.g.alchemy.com/nft/v3/${process.env.NEXT_PUBLIC_ALCHEMY_APIKEY}/getContractMetadata?contractAddress=${contractAddress}`;

    const response = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    const data: NftContract = await response.json();
    res.status(200).json(data);
  } catch (e: any) {
    res.status(e.status).json(e);
  }
}
