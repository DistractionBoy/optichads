import CarouselThumbs from "../ui/carouselThumbs";
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const GROUPS = [
  {
    index: 0,
    name: "Optichads",
    bgColor: "bg-[#FB0420]"
  },
  {
    index: 1,
    name: "Arbibabes",
    bgColor: "bg-[#49AAF6]"
  },
  {
    index: 2,
    name: "Brigades",
    bgColor: "bg-[#80A5F8]"
  }
]


const CollectionsCategory = () => {

  return (
    <>
      <div className="block relative w-full ">
        <CarouselThumbs groups={GROUPS} options={OPTIONS} />
      </div>
    </>
  );
};

export default CollectionsCategory;
