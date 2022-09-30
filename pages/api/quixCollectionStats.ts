import type { NextApiRequest, NextApiResponse } from "next";

export type CollectionStatsResponse = {
  stats: {
    one_day_volume: number;
    one_day_change: number;
    one_day_sales: number;
    one_day_average_price: number;
    seven_day_volume: number;
    seven_day_change: number;
    seven_day_sales: number;
    seven_day_average_price: number;
    thirty_day_volume: number;
    thirty_day_change: number;
    thirty_day_sales: number;
    thirty_day_average_price: number;
    total_volume: number;
    total_listed: number;
    total_sales: number;
    total_supply: number;
    count: number;
    num_owners: number;
    average_price: number;
    floor_price: number;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CollectionStatsResponse>
) {
  const { contractAddress } = req.query;
  try {
    const url = `https://api.qx.app/api/v1/collection/${contractAddress}/stats/`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "X-API-KEY": "oe8YSuFX.oPGdhXjy2PBM799AWnN1bccKQIj8RsKn",
      },
    });
    const data: CollectionStatsResponse = await response.json();
    res.status(200).json(data);
  } catch (e: any) {
    res.status(e.status).json(e);
  }
}

// const thing = {
//     stats: {
//       one_day_volume: 0.327399,
//       one_day_change: -0.2187338553148906,
//       one_day_sales: 33,
//       one_day_average_price: 0.009921181818181819,
//       seven_day_volume: 3.772531507,
//       seven_day_change: 1.0337306695042592,
//       seven_day_sales: 491,
//       seven_day_average_price: 0.007683363558044806,
//       thirty_day_volume: 6.992704528,
//       thirty_day_change: -0.6217795132448939,
//       thirty_day_sales: 1199,
//       thirty_day_average_price: 0.00583211386822352,
//       total_volume: 25.481671374,
//       total_listed: 1524,
//       total_sales: 5757,
//       total_supply: 10000,
//       count: 10000,
//       num_owners: 1962,
//       average_price: 0.004426206596143825,
//       floor_price: 0.005
//     }
//   }

// https://api.qx.app/api/v1/collection/{contract_address}/stats/
