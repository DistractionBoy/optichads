import type { NextApiRequest, NextApiResponse } from "next";

export type CollectionMetadata = {
  total: {
    volume: number | null;
    sales: number | null;
    average_price: number | null;
    num_owners: number | null;
    market_cap: number | null;
    floor_price: number | null;
    floor_price_symbol: string;
  };
  intervals: {
    interval: "one_day" | "seven_day" | "thirty_day";
    volume: number | null;
    volume_diff: number | null;
    volume_change: number | null;
    sales: number | null;
    sales_diff: number | null;
    average_price: number | null;
  }[];
};

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

// example response:

//   {
//     "total": {
//       "volume": 46.07304008849007,
//       "sales": 2791,
//       "average_price": 0.016507717695625247,
//       "num_owners": 2907,
//       "market_cap": 126.8272276470588,
//       "floor_price": 0.01569,
//       "floor_price_symbol": "ETH"
//     },
//     "intervals": [
//       {
//         "interval": "one_day",
//         "volume": 0.1258,
//         "volume_diff": 0.08981,
//         "volume_change": 2.495415449142456,
//         "sales": 9,
//         "sales_diff": 2,
//         "average_price": 0.013977777777777776
//       },
//       {
//         "interval": "seven_day",
//         "volume": 0.21618999999999997,
//         "volume_diff": -46,
//         "volume_change": -0.7692447271795747,
//         "sales": 17,
//         "sales_diff": 0,
//         "average_price": 0.01271705882352941
//       },
//       {
//         "interval": "thirty_day",
//         "volume": 2.3333400000000015,
//         "volume_diff": -97,
//         "volume_change": -0.47757995750177207,
//         "sales": 189,
//         "sales_diff": 0,
//         "average_price": 0.012345714285714293
//       }
//     ]
//   }
