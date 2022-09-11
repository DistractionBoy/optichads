import type { NextApiRequest, NextApiResponse } from "next";
import { ContractMetadata } from "./contractMetadata";

export type NftMetadataResponse = {
  contract: {
    address: string;
  };
  id: {
    tokenId: string;
    tokenMetadata: {
      tokenType: string;
    };
  };
  title: string;
  description: string;
  tokenUri: {
    raw: string;
    gateway: string;
  };
  media: [{ raw: string; gateway: string }];
  metadata: {
    metadata: string[];
    attributes: string[];
  };
  timeLastUpdated: Date;
  error?: string;
  contractMetadata: ContractMetadata;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NftMetadataResponse>
) {
  const { contractAddress, tokenId } = req.query;
  try {
    const url = `https://opt-mainnet.g.alchemy.com/nft/v2/${process.env.NEXT_PUBLIC_ALCHEMY_APIKEY}/getNFTMetadata?contractAddress=${contractAddress}&tokenId=${tokenId}`;

    const response = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    const data: NftMetadataResponse = await response.json();
    res.status(200).json(data);
  } catch (e: any) {
    res.status(e.status).json(e);
  }
}
