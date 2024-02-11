import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { cn } from "@/lib/utils";
import { BestListingsResponse, NFTExpanded } from "@/pages/api/types";
import useSWR from "swr";
import { Skeleton } from "@/components/ui/skeleton";
import { serialize } from "@/lib/helpers";
import Image from "next/image";
import { BigNumber } from "alchemy-sdk";

const carouselItemCSS = cn("pl-12 hover:cursor-pointer");

const HotDealCarouselItem = ({
  identifier,
  chain,
  address,
  price,
}: {
  identifier: string;
  chain: string;
  address: string;
  price: string;
}) => {
  const params = serialize({ address, chain, identifier });
  const { data, isLoading, error } = useSWR<NFTExpanded>(
    `/api/opensea/getNFT${params}`
  );
  if (isLoading) {
    <div className="flex flex-col">
      <Skeleton />
    </div>;
  }
  if (error) {
    <div className="flex flex-col">
      <Skeleton />
    </div>;
  }
  return (
    data &&
    data.nft && (
      <CarouselItem className={carouselItemCSS}>
        <div className="flex flex-col flex-1">
          {data.nft?.name && <h4>{data.nft.name}</h4>}
          <Image
            src={data.nft.image_url}
            alt={data.nft.description || ""}
            width={600}
            height={600}
          />
          <div className="flex justify-end space-y-6 w-full">
            <h5>{price}</h5>
          </div>
        </div>
      </CarouselItem>
    )
  );
};

const HotDeals = () => {
  const {
    data: bestChads,
    isLoading: isChadsLoading,
    error: chadError,
  } = useSWR<BestListingsResponse>(
    "/api/opensea/getBestListingsByCollection?collection_slug=optichads&limit=3"
  );
  const {
    data: bestBrigaders,
    isLoading: isBaseBrigadersLoading,
    error: brigadeError,
  } = useSWR<BestListingsResponse>(
    "/api/opensea/getBestListingsByCollection?collection_slug=basebrigade&limit=3"
  );
  const {
    data: bestBabes,
    isLoading: isBabesLoading,
    error: babesError,
  } = useSWR<BestListingsResponse>(
    "/api/opensea/getBestListingsByCollection?collection_slug=arbibabes&limit=3"
  );

  if (isChadsLoading || isBabesLoading || isBaseBrigadersLoading) {
    return (
      <div className="bg-black flex flex-grow desktop:hidden">
        <Carousel className="border-black border-b-2">
          <Skeleton className="h-full w-full animate-pulse" />
        </Carousel>
      </div>
    );
  }

  if (chadError || brigadeError || babesError) {
    return (
      <div className="bg-black flex flex-grow desktop:hidden">
        <Carousel className="border-black border-b-2">
          <Skeleton className="h-full w-full" />
        </Carousel>
      </div>
    );
  }

  return (
    bestChads &&
    bestChads.listings &&
    bestBrigaders &&
    bestBrigaders.listings &&
    bestBabes &&
    bestBabes.listings && (
      <div className="bg-black flex flex-grow desktop:hidden">
        <Carousel className="w-full border-black border-b-2">
          <CarouselContent className="-ml-12">
            {bestChads.listings.map((listing, idx) => (
              <span key={idx}>
                <HotDealCarouselItem
                  identifier={
                    listing.protocol_data.parameters.offer[0]
                      .identifierOrCriteria
                  }
                  chain="optimism"
                  address={`${listing.protocol_data.parameters.offer[0].token}`}
                  price={`${Number(listing.price.current.value)}`}
                />
              </span>
            ))}
            {bestBrigaders.listings.map((listing, idx) => (
              <span key={idx}>
                <HotDealCarouselItem
                  identifier={
                    listing.protocol_data.parameters.offer[0]
                      .identifierOrCriteria
                  }
                  chain="base"
                  address={`${listing.protocol_data.parameters.offer[0].token}`}
                  price={`${BigNumber.from(listing.price.current.value)}`}
                />
              </span>
            ))}
            {bestBabes.listings.map((listing, idx) => (
              <span key={idx}>
                <HotDealCarouselItem
                  identifier={
                    listing.protocol_data.parameters.offer[0]
                      .identifierOrCriteria
                  }
                  chain="arbitrum"
                  address={`${listing.protocol_data.parameters.offer[0].token}`}
                  price={`${BigNumber.from(listing.price.current.value)}`}
                />
              </span>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    )
  );
};

export default HotDeals;
