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
      <div className="bg-white w-full">
        <Tabs
          defaultValue="optichads"
          className="container"
          value={collection_slug}
          onValueChange={(value) => isSlug(value) && setCollection_slug(value)}
        >
          <TabsList className="flex xl:hidden">
            <TabsTrigger value="optichads">OptiChads</TabsTrigger>
            <TabsTrigger value="arbibabes">ArbiBabes</TabsTrigger>
            <TabsTrigger value="basebrigade">Base Brigade</TabsTrigger>
          </TabsList>
          <TabsContent value="optichads">
            <CollectionMetadataSection collection_slug="optichads" />
          </TabsContent>
          <TabsContent value="basebrigade">
            <CollectionMetadataSection collection_slug="basebrigade" />
          </TabsContent>
          <TabsContent value="arbibabes">
            <CollectionMetadataSection collection_slug="arbibabes" />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default CollectionsCarousel;
