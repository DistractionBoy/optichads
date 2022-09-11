import { BigNumberish } from "ethers";
import type { NextApiRequest, NextApiResponse } from "next";

export type FloorPriceResponse = {
  price: BigNumberish;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FloorPriceResponse>
) {
  const { collection } = req.query;
  try {
    const url = `https://opt-mainnet.g.alchemy.com/nft/v2/${process.env.NEXT_PUBLIC_ALCHEMY_APIKEY}/getFloorPrice?contractAddress=${collection}`;

    const response = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    const data: FloorPriceResponse = await response.json();
    res.status(200).json(data);
  } catch (e: any) {
    res.status(e.status).json(e);
  }
}
