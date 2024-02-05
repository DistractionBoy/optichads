import ScrollingBanner from "@/components/home/ScrollingBanner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import chadBanner from "@/public/images/banners/chad-banner.jpeg";
import babeBanner from "@/public/images/banners/babe-banner.jpeg";
import brigadeBanner from "@/public/images/banners/brigade-banner.jpeg";
import { cn } from "@/lib/utils";
import useSWR from "swr";
import { NftContract } from "alchemy-sdk";
import Image from "next/image";

import chadimation from "@/public/images/chadimation.gif";

const mobileCarouselItemCSS = cn(
  "overflow-hidden pl-4 basis-1/3 [&>div]:h-[380px]",
  "[mask-image:_linear-gradient(to_bottom,transparent_0,_black_128px,_black_calc(100%-256px),transparent_100%)]",
  "[&_ul]:animate-none [&_ul]:hover:animate-infinite-scroll [&_ul]:blur-sm [&_ul]:hover:blur-none",
  "[&_ul]:grayscale [&_ul]:hover:grayscale-0 hover:cursor-pointer"
);

const carouselItemCSS = cn(
  "overflow-hidden basis-1/3 transition-all duration-150 rotate-3 mx-auto blur-sm hover:blur-none [&_img]:-rotate-3",
  "[&_ul]:animate-none [&_ul]:hover:animate-infinite-scroll [&_ul]:blur-sm [&_ul]:hover:blur-none",
  "[&_ul]:grayscale [&_ul]:hover:grayscale-0 hover:cursor-pointer"
);

const CollectionsCarousel = () => {
  const { data, isLoading, error } = useSWR<NftContract>(
    `/api/getContractMetadata?contractAddress=${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`
  );

  return (
    <>
      <div className="ml-12 pb-3">
        <h2 className="text-3xl xl:text-7xl font-black leading-8 p-2 pl-6">
          Collections
        </h2>
      </div>
      <div className="text-xl">Supply: {data?.totalSupply}</div>
      <div className="text-xl">Symbol: ${data?.symbol}</div>
      <div className="text-xl">Type: {`${data?.tokenType}`}</div>
      <div className="bg-black">
        <div className="hidden xl:block">
          <Carousel className="border-black border-b-2">
            <CarouselContent className="flex h-[857px] desktop:h-[900px] overflow-hidden -mt-20 -mb-8">
              <CarouselItem className={carouselItemCSS}>
                <ScrollingBanner src={brigadeBanner} />
              </CarouselItem>
              <CarouselItem className={carouselItemCSS}>
                <ScrollingBanner src={chadBanner} />
              </CarouselItem>
              <CarouselItem className={carouselItemCSS}>
                <ScrollingBanner src={babeBanner} />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>

        <div className="block xl:hidden">
          <Carousel className="border-black border-2" orientation="vertical">
            <CarouselContent className="flex flex-col -ml-4 overflow-hidden -mt-8 -mb-4 h-[578px]">
              <CarouselItem className={mobileCarouselItemCSS}>
                <ScrollingBanner src={chadBanner} />
              </CarouselItem>
              <CarouselItem className={mobileCarouselItemCSS}>
                <ScrollingBanner src={babeBanner} />
              </CarouselItem>
              <CarouselItem className={mobileCarouselItemCSS}>
                <ScrollingBanner src={brigadeBanner} />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default CollectionsCarousel;
