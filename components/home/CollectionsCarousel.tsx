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
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import CollectionMetadataSection from "./CollectionMetadataSection";
import { isSlug } from "@/lib/helpers";
import CollectionShowcaseCarousel from "./CollectionShowcaseCarousel";
import { LampContainer } from "../ui/lamp";

const carouselItemCSS = cn(
  "overflow-hidden basis-1/3 transition-all duration-150 rotate-3 mx-auto blur-sm hover:blur-none [&_img]:-rotate-3",
  "[&_ul]:animate-none [&_ul]:hover:animate-infinite-scroll [&_ul]:blur-sm [&_ul]:hover:blur-none",
  "[&_ul]:grayscale [&_ul]:hover:grayscale-0 hover:cursor-pointer"
);

const CollectionsCarousel = () => {
  const [collection_slug, setCollection_slug] = useState<
    "optichads" | "arbibabes" | "basebrigade" | "optichads-song"
  >("optichads");
  return (
    <>
      <div className="bg-black hidden xl:block">
        <Carousel className="border-black border-b-2">
          <CarouselContent className="flex h-[857px] desktop:h-[900px] ultrawide:h-[1050px] overflow-hidden -mt-20 -mb-8">
            <CarouselItem
              className={carouselItemCSS}
              onClick={() => {
                setCollection_slug("basebrigade");
              }}
            >
              <ScrollingBanner src={brigadeBanner} />
            </CarouselItem>
            <CarouselItem
              className={carouselItemCSS}
              onClick={() => {
                setCollection_slug("optichads");
              }}
            >
              <ScrollingBanner src={chadBanner} />
            </CarouselItem>
            <CarouselItem
              className={carouselItemCSS}
              onClick={() => {
                setCollection_slug("arbibabes");
              }}
            >
              <ScrollingBanner src={babeBanner} />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      <LampContainer
        chain={
          collection_slug === "optichads"
            ? "optimism"
            : collection_slug === "basebrigade"
              ? "base"
              : "arbitrum"
        }
      >
        <Tabs
          defaultValue="optichads"
          value={collection_slug}
          onValueChange={(value) => isSlug(value) && setCollection_slug(value)}
        >
          <TabsList className="flex space-x-0 sm:space-x-8 h-full bg-transparent mb-40 mt-32 md:mb-52 lg:mb-52 xl:mt-36">
            <TabsTrigger
              value="basebrigade"
              className="text-lg lg:text-2xl xl:text-3xl hover:text-gray-200"
            >
              Base Brigade
            </TabsTrigger>
            <TabsTrigger
              value="optichads"
              className="text-lg lg:text-2xl xl:text-3xl hover:text-gray-200"
            >
              OptiChads
            </TabsTrigger>
            <TabsTrigger
              value="arbibabes"
              className="text-lg lg:text-2xl xl:text-3xl hover:text-gray-200"
            >
              ArbiBabes
            </TabsTrigger>
          </TabsList>
          <TabsContent value="optichads">
            <CollectionMetadataSection collection_slug="optichads" />
            <CollectionShowcaseCarousel collection_slug="optichads" />
          </TabsContent>
          <TabsContent value="basebrigade">
            <CollectionMetadataSection collection_slug="basebrigade" />
            <CollectionShowcaseCarousel collection_slug="basebrigade" />
          </TabsContent>
          <TabsContent value="arbibabes">
            <CollectionMetadataSection collection_slug="arbibabes" />
            <CollectionShowcaseCarousel collection_slug="arbibabes" />
          </TabsContent>
        </Tabs>
      </LampContainer>
    </>
  );
};

export default CollectionsCarousel;
