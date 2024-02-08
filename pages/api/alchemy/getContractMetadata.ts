import type { NextApiRequest, NextApiResponse } from "next";
import { NftContract } from "alchemy-sdk";

const options: RequestInit = {
  method: "GET",
  headers: { Accept: "application/json" },
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NftContract | Error>
) {
  const { chain, contractAddress } = req.query;
  if (!chain || !contractAddress) {
    throw new Error("undefined params");
  }
  try {
    const url = `https://${chain}-mainnet.g.alchemy.com/nft/v3/${process.env.NEXT_PUBLIC_ALCHEMY_APIKEY}/getContractMetadata?contractAddress=${contractAddress}`;

    const response = await fetch(url, options);
    const data: NftContract = await response.json();
    res.status(200).json(data);
  } catch (e: any) {
    if (e.message === "undefined params") {
      res.status(400).json(e);
    }
    res.status(e.status).json(e);
  }
}
