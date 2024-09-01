import { TypedFetch } from "@/lib/TypedFetch";
import { NFTsBy } from "@/pages/api/zodSchemas";
import { useState } from "react";
import useSWR from "swr";
import NFTData from "./NFTData";

export type RaritiesListProps = {
  collection: "basebrigade" | "optichads" | "arbibabes";
};

const RaritiesList = ({ collection }: RaritiesListProps) => {
  const [nextPageMarker, setNextPageMarker] = useState<string>();

  const { data, error } = useSWR(
    nextPageMarker
      ? `/api/opensea/getNFTsByCollection?collection_slug=${collection}&next=${nextPageMarker}&limit=50`
      : `/api/opensea/getNFTsByCollection?collection_slug=${collection}&limit=50`,
    TypedFetch(NFTsBy),
    { revalidateOnFocus: false, focusThrottleInterval: 20000 }
  );

  return (
    <div>
      {data &&
        data.nfts.map((nft) => (
          <NFTData identifier={nft.identifier} collection_slug={collection} />
        ))}
    </div>
  );
};

export default RaritiesList;
