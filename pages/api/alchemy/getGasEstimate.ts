import type { NextApiRequest, NextApiResponse } from "next";
import { GasEstimateResponse } from "../zodSchemas";

/**
 *
 * @param req
 * @chain = 'opt', 'eth', 'base', 'arbi'
 * @param res an array of addresses that are current owners of passed-in collection contract address
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GasEstimateResponse | Error>
) {
  const { chain, to, from, value } = req.query;
  if (!chain) {
    throw new Error("undefined params");
  }
  const options: RequestInit = {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json" },
    body: JSON.stringify({
      id: 1,
      jsonrpc: "2.0",
      method: "eth_estimateGas",
      params: [
        {
          to,
          value,
          from,
        },
      ],
    }),
  };

  try {
    const gasPriceUrl = `https://${chain}-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_APIKEY}/`;

    const response = await fetch(gasPriceUrl, options);
    const data: GasEstimateResponse = await response.json();
    res.status(200).json(data);
  } catch (e: any) {
    if (e.message === "undefined params") {
      res.status(400).json(e);
    }
    res.status(e.status).json(e);
  }
}
