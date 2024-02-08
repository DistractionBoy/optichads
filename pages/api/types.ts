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
