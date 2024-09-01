import { TypedFetch } from "@/lib/TypedFetch";
import { serialize } from "@/lib/helpers";
import { NFTExpanded } from "@/pages/api/zodSchemas";
import useSWR from "swr";

export type NFTDataProps = {
  identifier: string;
  collection_slug: "optichads" | "arbibabes" | "basebrigade";
};

const COLLECTIONS = {
  optichads: {
    address: String(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS),
    chain: "optimism",
    chainAbbr: "opt",
  },
  arbibabes: {
    address: String(process.env.NEXT_PUBLIC_ARBIBABE_CONTRACT),
    chain: "arbitrum",
    chainAbbr: "arb",
  },
  basebrigade: {
    address: String(process.env.NEXT_PUBLIC_BRIGADE_CONTRACT),
    chain: "base",
    chainAbbr: "base",
  },
};

const NFTData = ({ identifier, collection_slug }: NFTDataProps) => {
  const params = serialize({
    address: COLLECTIONS[collection_slug].address,
    chain: COLLECTIONS[collection_slug].chain,
    identifier,
  });

  const { data, isLoading, error } = useSWR(`/api/opensea/getNFT${params}`, {
    focusThrottleInterval: 20000,
  });

  if (isLoading) {
    <div>loading...</div>;
  }

  if (error) {
    <div>errored out, bro</div>;
  }

  return data ? (
    <div>{`${identifier},${data.nft.rarity?.rank.toString()}`}</div>
  ) : (
    <div>no data yet</div>
  );
};

export default NFTData;
