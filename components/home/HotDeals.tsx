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
      <div className="flex flex-col w-full relative text-white mt-16 lg:mt-40 mb-8 xl:mt-60 desktop:mt-60 desktop:mb-12 desktop:mt-68 px-0 lg:px-8 space-y-6">
        <h2 className="text-xl md:text-5xl lg:text-7xl font-bold font-outline-0 lg:font-outline-2">
          Hot Deals
        </h2>
        <p className="text-lg md:text-3xl font-medium">
          From Opensea&apos;s floor, these are the cheapest listings...
        </p>
      </div>

      <Carousel className="mx-6 mb-8 md:mb-16 lg:mb-24 xl:mb-36 desktop:mb-52">
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
