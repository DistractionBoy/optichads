import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import HotDealCarouselItemController from "./HotDealCarouselItemController";

const HotDeals = () => {
  return (
    <>
      <div className="flex flex-col z-10 w-full relative text-white mt-16 lg:mt-32 mb-8 lg:mb-8 desktop:mt-32 desktop:mb-12 px-0 lg:px-8 space-y-6">
        <h2 className="text-xl md:text-5xl lg:text-7xl font-bold font-outline-0 lg:font-outline-2">
          Hot Deals
        </h2>
        <p className="text-lg md:text-3xl font-medium">
          From Opensea&apos;s floor, these are the cheapest listings...
        </p>
      </div>

      <Carousel className="mx-6">
        <CarouselContent>
          <HotDealCarouselItemController slug="basebrigade" limit={2} />
          <HotDealCarouselItemController slug="optichads" limit={2} />
          <HotDealCarouselItemController slug="arbibabes" limit={2} />
          <HotDealCarouselItemController slug="optichads-song" limit={1} />
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default HotDeals;
