import Image from "next/image";
import { CarouselItem } from "../ui/carousel";
import { cn } from "@/lib/utils";
import { serialize } from "@/lib/helpers";
import useSWR from "swr";
import { NFTExpanded } from "@/pages/api/types";
import { Skeleton } from "../ui/skeleton";
import Link from "next/link";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

const carouselItemCSS = (chain: string) =>
  cn(
    "flex flex-col basis-full md:basis-1/2 rounded-sm my-12 xl:my-16 text-slate-800 px-6",
    "drop-shadow-xl max-w-[700px] bg-gradient-to-b bg-clip-text",
    chain === "optimism"
      ? "from-[#FB0420] to-white"
      : chain === "base"
        ? "from-[#0052FE] to-white"
        : "from-indigo-300/30 to-white"
  );

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
      <Skeleton className="w-full p-8 bg-gray-300 animate-pulse" />
    </div>;
  }
  if (error) {
    <div className="flex flex-col">
      <Skeleton className="w-full p-8 bg-gray-300" />
    </div>;
  }

  return (
    data &&
    data.nft && (
      <CarouselItem className={carouselItemCSS(chain)}>
        {data.nft?.name && (
          <h4 className="my-2 md:my-4 text-base md:text-lg lg:text-3xl desktop:text-5xl uppercase px-0 lg:px-8 font-semibold md:font-extrabold truncate">
            <span
              className={cn(
                "bg-clip-text text-transparent font-semibold bg-gradient-to-l",
                chain === "optimism"
                  ? "from-red-500 to-red-800 dark:from-red-600 dark:to-red-300"
                  : chain === "base"
                    ? "from-blue-500 to-blue-800 dark:from-blue-600 dark:to-blue-300"
                    : "from-indigo-500 to-indigo-800 dark:from-indigo-600 dark:to-indigo-300"
              )}
            >
              {data.nft.name}
            </span>
          </h4>
        )}
        <Image
          className={cn(
            "flex p-1 md:p-3 lg:p-8 rounded-sm object-fill bg-white"
          )}
          src={data.nft.image_url}
          alt={data.nft.description || ""}
          width={700}
          height={700}
        />
        <div className="flex flex-col items-end my-3 px-1 lg:px-8 space-y-2">
          <h5 className="text-base md:text-lg lg:text-3xl desktop:text-4xl">
            <span
              className={cn(
                "flex items-center bg-clip-text text-transparent font-semibold bg-gradient-to-r",
                chain === "optimism"
                  ? "from-red-500 to-red-800 dark:from-red-600 dark:to-red-300"
                  : chain === "base"
                    ? "from-blue-500 to-blue-800 dark:from-blue-600 dark:to-blue-300"
                    : "from-indigo-500 to-indigo-800 dark:from-indigo-600 dark:to-indigo-300"
              )}
            >
              <FontAwesomeIcon icon={faEthereum} />
              {price.slice(0, 7)}
            </span>
          </h5>

          <Link
            href={`https://opensea.io/assets/${chain}/${address}/${identifier}`}
            className="flex items-center"
          >
            <Button variant="secondary" className="-mr-2">
              Buy Now
            </Button>
          </Link>
        </div>
      </CarouselItem>
    )
  );
};

export default HotDealCarouselItem;
