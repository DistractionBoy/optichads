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
      <div className="flex flex-col text-white mt-32 mb-24 space-y-6">
        <h2 className="text-7xl">Hot Deals</h2>
        <p className="text-3xl">
          From the floor on Opensea, these are the cheapest NFTs currently
          posted from all our collections
        </p>
      </div>
      <Carousel className="w-full">
        <CarouselContent className="ml-6">
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
