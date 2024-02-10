export type NFTbase = {
  identifier: string;
  collection: string;
  contract: string;
  token_standard: string;
  name: string;
  description: string;
  image_url: string;
  metadata_url: string;
  opensea_url: string;
  updated_at: string;
  is_disabled: boolean;
  is_nsfw: boolean;
};

export type NFTExpanded = {
  nft: {
    identifier: string;
    collection: string;
    contract: string;
    token_standard: string;
    name: string;
    description: string;
    image_url: string;
    metadata_url: string;
    opensea_url: string;
    updated_at: string;
    is_disabled: boolean;
    is_nsfw: boolean;
    animation_url: string;
    is_suspicious: boolean;
    creator: string;
    traits: [
      {
        trait_type: string;
        display_type: number;
        max_value: string;
        value: number;
      },
    ];
    owners: [
      {
        address: string;
        quantity: number;
      },
    ];
    rarity: {
      strategy_version: string;
      rank: number;
      score: number;
      calculated_at: string;
      max_rank: number;
      total_supply: number;
      ranking_features: {
        unique_attribute_count: number;
      };
    };
  };
};

export type NFTsBy = {
  nfts: NFTbase[];
  next: string;
};

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

export type Consideration =             {
  itemType: number;
  token: string;
  identifierOrCriteria: string;
  startAmount: string;
  endAmount: string;
  recipient: string;
},

export type BestListingsResponse = {
listings: [
  {
    order_hash: string;
    chain?: string,
    type: {} | string;
    price: {
      current: {
        currency: string;
        decimals: number;
        value: string;
      };
    };
    protocol_data: {
      parameters: {
        offerer: string;
        offer: [
          {
            itemType: number;
            token: string;
            identifierOrCriteria: string;
            startAmount: string;
            endAmount: string;
          },
        ];
        consideration: Consideration[
        ];
        startTime: string;
        endTime: string;
        orderType: number;
        zone: string;
        zoneHash: string;
        salt: string;
        conduitKey: string;
        totalOriginalConsiderationItems: number;
        counter: number;
      };
      signature: string | null;
    };
    protocol_address: string;
  },
];
next: string;
};


export type Listing = {
  hash: string;
  chain: "base" | "optimism" | "arbitrum";
  protocol_address: string;
};

export type Fulfiller = {
  address: string;
};
