import type { NextApiRequest, NextApiResponse } from "next";
import { BestListingsResponse } from "../types";
import { serialize } from "@/lib/helpers";

const options: RequestInit = {
  method: "GET",
  headers: {
    accept: "application/json",
    "x-api-key": `${process.env.OPENSEA_SALES_APIKEY}`,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BestListingsResponse | Error>
) {
  const { collection_slug, limit } = req.query;
  if (!collection_slug) {
    throw new Error("undefined params");
  }
  const params = serialize({ limit });
  try {
    const url = `https://api.opensea.io/api/v2//listings/collection/${collection_slug}/best${
      params && params
    }`;

    const response = await fetch(url, options);
    const data: BestListingsResponse = await response.json();
    res.status(200).json(data);
  } catch (e: any) {
    if (e.message === "undefined params") {
      res.status(500).json(e);
    }
    res.status(e.status).json(e);
  }
}
