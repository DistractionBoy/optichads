import { BestListingsResponse } from "@/pages/api/types";
import useSWR from "swr";
import { Skeleton } from "../ui/skeleton";
import HotDealCarouselItem from "./HotDealCarouseItem";

export type HotDealCarouselItemControllerProps = {
  slug: "arbibabes" | "optichads" | "basebrigade" | "optichads-song";
  limit: number;
};

const HotDealCarouselItemController = ({
  slug,
  limit,
}: HotDealCarouselItemControllerProps) => {
  const { data, isLoading, error, mutate } = useSWR<BestListingsResponse>(
    `/api/opensea/getBestListingsByCollection?collection_slug=${slug}&limit=${limit}`
  );
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Skeleton className="w-full h-full" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center">
        <Skeleton className="w-full h-full" />
      </div>
    );
  }
  return (
    data &&
    data.listings &&
    data.listings.map((listing, idx) => (
      <HotDealCarouselItem
        key={idx}
        identifier={
          listing.protocol_data.parameters.offer[0].identifierOrCriteria
        }
        chain={listing.chain || "base"}
        address={`${listing.protocol_data.parameters.offer[0].token}`}
        price={`${
          Number(listing.price.current.value) *
          Math.pow(10, -listing.price.current.decimals)
        }`}
        hash={listing.order_hash}
        protocol_address={listing.protocol_address}
        date={Number(listing.protocol_data.parameters.endTime) * 1000}
        mutate={mutate}
      />
    ))
  );
};

export default HotDealCarouselItemController;

// { listing: { hash, chain, protocol_address }, fulfiller }
