import type { NextApiRequest, NextApiResponse } from "next";
import { FulfillListingResponse } from "../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FulfillListingResponse | Error>
) {
  const {
    listing: { hash, chain, protocol_address },
    fulfiller: { address },
  } = req.body;

  if (!hash || !chain || !protocol_address || !address) {
    throw new Error("undefined params");
  }

  const options: RequestInit = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "x-api-key": `${process.env.OPENSEA_SALES_APIKEY}`,
    },
    body: JSON.stringify(req.body),
  };

  try {
    const url = `https://api.opensea.io/api/v2/listings/fulfillment_data`;

    const response = await fetch(url, options);
    const data: FulfillListingResponse = await response.json();
    res.status(200).json(data);
  } catch (e: any) {
    if (e.message === "undefined params") {
      res.status(500).json(e);
    }
    res.status(e.status).json(e);
  }
}
