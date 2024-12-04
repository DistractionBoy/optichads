import type { NextApiRequest, NextApiResponse } from "next";
import { AlchemyCommonResponse } from "@/pages/api/zodSchemas";
/**
 *
 * @param req
 * @chain = 'opt', 'eth', 'base', 'arbi'
 * @param res an array of addresses that are current owners of passed-in collection contract address
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AlchemyCommonResponse | Error>
) {
  const { chain, address } = req.query;
  if (!chain || !address) {
    throw new Error("undefined params");
  }

  const options: RequestInit = {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json" },
    body: JSON.stringify({ id: "42", jsonrpc: "2.0", method: "alchemy_getTokenBalances",
      "params": [
        `${address}`,
        [
          `${process.env.OPCHAD_CONTRACT}`
        ]
      ]
     }),
  };

  try {
    const url = `https://${chain}-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_APIKEY}/`;
    const response = await fetch(url, options);
    const data: AlchemyCommonResponse = await response.json();
    res.status(200).json(data);
  } catch (e: any) {
    if (e.message === "undefined params") {
      res.status(400).json(e);
    }
    res.status(e.status).json(e);
  }
}
