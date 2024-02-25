import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";

import { serialize } from "@/lib/helpers";
import { CarouselItem } from "../ui/carousel";
import { NFTExpanded } from "@/pages/api/types";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

const gradientFonts = (chain: string) =>
  cn(
    "flex items-center bg-clip-text text-transparent font-semibold bg-gradient-to-r dark:bg-gradient-to-r",
    chain === "optimism"
      ? "from-red-400 to-red-100"
      : chain === "base"
        ? "from-blue-400 to-blue-100"
        : "from-indigo-400 to-indigo-100"
  );

const carouselItemCSS = cn(
  "flex flex-col basis-full lg:basis-1/2 desktop:basis-1/4 rounded-sm my-3 px-5",
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
      <Skeleton className="flex flex-1 max-w-[700px] size-64 animate-pulse" />
    </CarouselItem>;
  }

  if (error) {
    <CarouselItem className={carouselItemCSS}>
      <Skeleton className="flex flex-1 max-w-[700px] size-64" />
    </CarouselItem>;
  }

  return (
    data &&
    data.nft && (
      <CarouselItem className={carouselItemCSS}>
        <h3
          className={cn(
            gradientFonts(chain),
            "text-3xl lg:text-2xl desktop:text-4xl mb-4"
          )}
        >
          {data.nft.name && data.nft.name}
        </h3>
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
