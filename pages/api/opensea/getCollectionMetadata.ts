import type { NextApiRequest, NextApiResponse } from "next";
import { CollectionMetadata } from "../types";

const options: RequestInit = {
  method: "GET",
  headers: {
    accept: "application/json",
    "x-api-key": `${process.env.NEXT_PUBLIC_OPENSEA_ANALYTICS_APIKEY}`,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CollectionMetadata>
) {
  const { collection_slug } = req.query;
  try {
    const url = `https://api.opensea.io/api/v2/collections/${collection_slug}/stats`;

    const response = await fetch(url, options);
    const data: CollectionMetadata = await response.json();
    res.status(200).json(data);
  } catch (e: any) {
    res.status(e.status).json(e);
  }
}
