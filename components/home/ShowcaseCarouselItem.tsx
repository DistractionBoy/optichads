import { serialize } from "@/lib/helpers";
import { CarouselItem } from "../ui/carousel";
import useSWR from "swr";
import { NFTExpanded } from "@/pages/api/types";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";
import { useRef, useState } from "react";
import Link from "next/link";

const carouselItemCSS = cn(
  "flex flex-col basis-full lg:basis-1/2 desktop:basis-1/4 rounded-sm my-3",
  "[&_img]:hover:shadow [&_img]:dark:hover:shadow [&_img]:dark:hover:shadow-white",
  "hover:-translate-y-1 transition-all"
);

export type ShowcaseCarouselItemProps = {
  address: string;
  chain: string;
  identifier: string;
};

const ShowcaseCarouselItem = ({
  address,
  chain,
  identifier,
}: ShowcaseCarouselItemProps) => {
  const params = serialize({ address, chain, identifier });
  const [imageLoading, setImageLoading] = useState<boolean>(true);

  const { data, isLoading, error } = useSWR<NFTExpanded>(
    `/api/opensea/getNFT${params}`
  );

  if (isLoading) {
    <CarouselItem className={carouselItemCSS}>
      <Skeleton className="flex flex-1 max-w-[700px] animate-pulse" />
    </CarouselItem>;
  }

  if (error) {
    <CarouselItem className={carouselItemCSS}>
      <Skeleton className="flex flex-1 max-w-[700px]" />
    </CarouselItem>;
  }

  return (
    data && (
      <CarouselItem className={carouselItemCSS}>
        <Link
          href={`https://opensea.io/assets/${chain}/${address}/${identifier}`}
          target="_blank"
        >
          <Image
            className={cn(
              "rounded-lg cursor-pointer",
              imageLoading && "animate-pulse"
            )}
            src={data.nft.image_url}
            alt={data.nft.description || ""}
            width={700}
            height={700}
            onLoad={() => setImageLoading(false)}
          />
        </Link>
      </CarouselItem>
    )
  );
};

export default ShowcaseCarouselItem;
