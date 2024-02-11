import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import HotDealCarouselItemController from "./HotDealCaouselItemController";

const HotDeals = () => {
  return (
    <>
      <div className="flex flex-col text-white mt-16 lg:mt-32 mb-8 lg:mb-24 px-0 lg:px-8 space-y-6">
        <h2 className="text-xl md:text-5xl lg:text-7xl font-bold font-outline-2">
          Hot Deals
        </h2>
        <p className="text-lg md:text-3xl">
          From Opensea's floor, these are the cheapest NFTs
        </p>
      </div>
      <Carousel className="mx-6">
        <CarouselContent>
          <HotDealCarouselItemController slug="basebrigade" limit={1} />
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
