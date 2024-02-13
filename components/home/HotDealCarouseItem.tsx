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
    "flex flex-col basis-full md:basis-1/2 rounded-sm my-16 xl:my-20 text-slate-800 px-6",
    "drop-shadow-2xl max-w-[700px]"
  );

const gradientFonts = (chain: string) =>
  cn(
    "flex items-center bg-clip-text text-transparent font-semibold bg-gradient-to-r dark:bg-gradient-to-l",
    chain === "optimism"
      ? "from-red-200 to-red-50"
      : chain === "base"
        ? "from-blue-200 to-blue-50"
        : "from-indigo-200 to-indigo-50"
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
            <span className={gradientFonts(chain)}>{data.nft.name}</span>
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
            <span className={gradientFonts(chain)}>
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
