import CarouselThumbs from "../ui/carouselThumbs";
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 6
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const CollectionsCategory = () => {

  return (
    <>
      <div className="block relative w-full h-96 bg-[#FB0420]">
        <CarouselThumbs slides={SLIDES} options={OPTIONS} />
      </div>
    </>
  );
};

export default CollectionsCategory;
