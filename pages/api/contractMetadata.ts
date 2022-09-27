import type { NextApiRequest, NextApiResponse } from "next";

export type ContractMetadata = {
  name: string;
  symbol: string;
  tokenType: string;
  totalSupply: string;
};

export type ContractMetadataResponse = {
  address: string;
  contractMetadata: ContractMetadata;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContractMetadataResponse>
) {
  const { contractAddress } = req.query;
  try {
    const url = `https://opt-mainnet.g.alchemy.com/nft/v2/${process.env.NEXT_PUBLIC_ALCHEMY_APIKEY}/getContractMetadata?contractAddress=${contractAddress}`;

    const response = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    const data: ContractMetadataResponse = await response.json();
    res.status(200).json(data);
  } catch (e: any) {
    res.status(e.status).json(e);
  }
}
