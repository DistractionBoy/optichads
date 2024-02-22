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

const carouselItemCSS = cn(
  "overflow-hidden basis-1/3 transition-all duration-150 rotate-3 mx-auto blur-sm hover:blur-none [&_img]:-rotate-3",
  "[&_ul]:animate-none [&_ul]:hover:animate-infinite-scroll [&_ul]:blur-sm [&_ul]:hover:blur-none",
  "[&_ul]:grayscale [&_ul]:hover:grayscale-0 hover:cursor-pointer"
);

const CollectionsCarousel = () => {
  return (
    <>
      <div className="bg-black hidden desktop:block">
        <Carousel className="border-black border-b-2">
          <CarouselContent className="flex h-[857px] desktop:h-[900px] ultrawide:h-[1050px] overflow-hidden -mt-20 -mb-8">
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
    </>
  );
};

export default CollectionsCarousel;
