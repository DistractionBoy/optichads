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

export type Consideration = {
  itemType: number;
  token: string;
  identifierOrCriteria: string;
  startAmount: string;
  endAmount: string;
  recipient: string;
};

export type Listing = {
  order_hash: string;
  chain?: "base" | "optimism" | "arbitrum" | string;
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
      consideration: Consideration[];
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
};

export type BestListingsResponse = {
  listings: Listing[];
  next: string;
};

export type Fulfiller = {
  address: string;
};

export type FulfillListingResponse = {
  protocol: string;
  fulfillment_data: {
    transaction: {
      function: string;
      chain: number;
      to: string;
      value: number;
      input_data: {};
    };
    orders: [
      {
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
          consideration: [
            {
              itemType: number;
              token: string;
              identifierOrCriteria: string;
              startAmount: string;
              endAmount: string;
              recipient: string;
            },
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
        signature: string;
      },
    ];
  };
};

/**
 * Raw Response from Neynar
 */
export interface NeynarFrameValidationInternalModel {
  valid: boolean;
  action: {
    object: string;
    interactor: {
      object: string;
      fid: number;
      custody_address: string;
      username: null | string;
      display_name: string;
      pfp_url: string;
      profile: {
        bio: {
          text: string;
          mentioned_profiles?: any[];
        };
      };
      follower_count: number;
      following_count: number;
      verifications: any[];
      active_status: string;
      viewer_context: {
        following: boolean;
        followed_by: boolean;
      };
    };
    tapped_button: {
      index: number;
    };
    input: {
      text: string;
    };
    url: string;
    cast: {
      object: string;
      hash: string;
      thread_hash: string;
      parent_hash: null | string;
      parent_url: string;
      root_parent_url: string;
      parent_author: {
        fid: null | number;
      };
      author: {
        object: string;
        fid: number;
        custody_address: string;
        username: string;
        display_name: string;
        pfp_url: string;
        profile: {
          bio: {
            text: string;
            mentioned_profiles?: any[];
          };
        };
        follower_count: number;
        following_count: number;
        verifications: any[];
        active_status: string;
        viewer_context: {
          liked: boolean;
          recasted: boolean;
        };
      };
      text: string;
      timestamp: string;
      embeds: {
        url: string;
      }[];
      frames: {
        version: string;
        title: string;
        image: string;
        buttons: {
          index: number;
          title: string;
          action_type: string;
        }[];
        post_url: string;
        frames_url: string;
      }[];
      reactions: {
        likes: {
          fid: number;
          fname: string;
        }[];
        recasts: {
          fid: number;
          fname: string;
        }[];
      };
      replies: {
        count: number;
      };
      mentioned_profiles: {
        object: string;
        fid: number;
        custody_address: string;
        username: string;
        display_name: string;
        pfp_url: string;
        profile: {
          bio: {
            text: string;
            mentioned_profiles?: any[];
          };
        };
        follower_count: number;
        following_count: number;
        verifications: any[];
        active_status: string;
      }[];
      viewer_context: {
        liked: boolean;
        recasted: boolean;
      };
    };
  };
}

/**
 * Frame Data
 *
 * Note: exported as public Type
 */
export interface FrameData {
  buttonIndex: number;
  castId: {
    fid: number;
    hash: string;
  };
  inputText: string;
  fid: number;
  messageHash: string;
  network: number;
  timestamp: number;
  url: string;
}

/**
 * Frame Request
 *
 * Note: exported as public Type
 */
export interface FrameRequest {
  untrustedData: FrameData;
  trustedData: {
    messageBytes: string;
  };
}

/**
 * Simplified Object model with the raw Neynar data if-needed.
 */
export interface FrameValidationData {
  button: number; // Number of the button clicked
  following: boolean; // Indicates if the viewer clicking the frame follows the cast author
  input: string; // Text input from the viewer typing in the frame
  interactor: {
    fid: number; // Viewer Farcaster ID
    custody_address: string; // Viewer custody address
    verified_accounts: string[]; // Viewer account addresses
  };
  liked: boolean; // Indicates if the viewer clicking the frame liked the cast
  raw: NeynarFrameValidationInternalModel;
  recasted: boolean; // Indicates if the viewer clicking the frame recasted the cast
  valid: boolean; // Indicates if the frame is valid
}

export type FrameValidationResponse =
  | { isValid: true; message: FrameValidationData }
  | { isValid: false; message: undefined };

export function convertToFrame(json: any) {
  return {
    fid: json.fid,
    url: json.frameActionBody?.url.toString(),
    messageHash: json.messageHash,
    timestamp: json.timestamp,
    network: json.network,
    buttonIndex: json.frameActionBody?.buttonIndex,
    castId: {
      fid: json.frameActionBody?.castId?.fid,
      hash: json.frameActionBody?.castId?.hash,
    },
  };
}

/**
 * Frame Request
 *
 * Note: exported as public Type
 */
export type FrameButtonMetadata =
  | {
      action: "link" | "mint";
      label: string;
      target: string;
    }
  | {
      action?: "post" | "post_redirect";
      label: string;
    };

/**
 * Frame Request
 *
 * Note: exported as public Type
 */
export type FrameInputMetadata = {
  text: string;
};

/**
 * Frame Request
 *
 * Note: exported as public Type
 */
export type FrameImageMetadata = {
  src: string;
  aspectRatio?: "1.91:1" | "1:1";
};

/**
 * Frame Request
 *
 * Note: exported as public Type
 */
export type FrameMetadataType = {
  buttons?: [FrameButtonMetadata, ...FrameButtonMetadata[]];
  image: string | FrameImageMetadata;
  input?: FrameInputMetadata;
  /** @deprecated Prefer `postUrl` */
  post_url?: string;
  postUrl?: string;
  /** @deprecated Prefer `refreshPeriod` */
  refresh_period?: number;
  refreshPeriod?: number;
};

/**
 * Frame Metadata Response
 *
 * Note: exported as public Type
 */
export type FrameMetadataResponse = Record<string, string>;

export type AlchemyCommonResponse = {
  jsonrpc: string;
  id: number;
  result: `0x${string}`;
}