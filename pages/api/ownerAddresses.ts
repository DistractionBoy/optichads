import type { NextApiRequest, NextApiResponse } from "next";

export type OwnerAddressesResponse = {
  ownerAddresses: string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OwnerAddressesResponse>
) {
  const { contractAddress } = req.query;
  try {
    const url = `https://opt-mainnet.g.alchemy.com/nft/v2/${process.env.NEXT_PUBLIC_ALCHEMY_APIKEY}/getOwnersForCollection?contractAddress=${contractAddress}`;

    const response = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    const data: OwnerAddressesResponse = await response.json();
    res.status(200).json(data);
  } catch (e: any) {
    res.status(e.status).json(e);
  }
}
