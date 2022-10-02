import type { NextApiRequest, NextApiResponse } from "next";

export type Collection = {
  address: string;
  name: string;
  symbol: string;
  contract_type: "ERC-721" | "ERC-20";
  external_link?: string | null;
  slug: string;
  image_url?: string | null;
  verified: boolean;
};

export type Trait = {
  trait_type?: string;
  value?: string;
  rarity?: number;
};

export type SingleAssetResponse = {
  token_id: string;
  name: string;
  external_url: null | string;
  description: null | string;
  image_url: null | string;
  animation_url: null | string;
  background_color: null | string;
  collection: Collection;
  owner: {
    address: string;
    username: string;
  };
  traits: Trait[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SingleAssetResponse>
) {
  const { contractAddress, id } = req.query;
  try {
    const url = `https://api.qx.app/api/v1/asset/${contractAddress}:${id}/`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "X-API-KEY": "oe8YSuFX.oPGdhXjy2PBM799AWnN1bccKQIj8RsKn",
      },
    });
    const data: SingleAssetResponse = await response.json();
    res.status(200).json(data);
  } catch (e: any) {
    res.status(e.status).json(e);
  }
}

// https://api.qx.app/api/v1/asset/{contract_address}:{token_id}/

// const mockResponse = {
//     "token_id": "1",
//     "name": "Chad #1",
//     "external_url": null,
//     "description": null,
//     "image_url": "https://quixotic.infura-ipfs.io/ipfs/QmWCjFFupyN1LuqbCgiPvfUFvft48hBWVq1fDbjShZi1W3/1.webp",
//     "animation_url": null,
//     "background_color": null,
//     "collection": {
//       "address": "0x9B9F542456ad12796cCB8EB6644f29E3314e68e1",
//       "name": "OptiChads 🔴✨💪",
//       "symbol": "CHAD",
//       "contract_type": "ERC-721",
//       "external_link": "https://optichads.art/",
//       "slug": "optichads",
//       "image_url": "https://fanbase-1.s3.amazonaws.com/quixotic-collection-profile/promo_bGG7ZAH.gif",
//       "verified": true
//     },
//     "owner": {
//       "address": "0x10850762bAc0dc6660630c1EfFe188A7cbFDdc88",
//       "username": "optichad"
//     },
//     "traits": [
//       {
//         "trait_type": "Outfit",
//         "value": "Pimp",
//         "rarity": 0.0227
//       },
//       {
//         "trait_type": "Background",
//         "value": "Holographic",
//         "rarity": 0.0284
//       },
//       {
//         "trait_type": "Body",
//         "value": "Milk Chocolate",
//         "rarity": 0.2361
//       },
//       {
//         "trait_type": "Mouth",
//         "value": "Drool",
//         "rarity": 0.0318
//       },
//       {
//         "trait_type": "Head",
//         "value": "Icy",
//         "rarity": 0.0266
//       },
//       {
//         "trait_type": "Eyes",
//         "value": "Intense",
//         "rarity": 0.0294
//       }
//     ]
//   }
