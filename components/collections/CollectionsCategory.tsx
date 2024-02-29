import CarouselThumbs from "../ui/carouselThumbs";
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const GROUPS = [
  {
    index: 0,
    name: "Optichads",
    bgColor: "#FB0420"
  },
  {
    index: 1,
    name: "Arbibabes",
    bgColor: "#49AAF6"
  },
  {
    index: 2,
    name: "Brigades",
    bgColor: "#80A5F8"
  }
]


const CollectionsCategory = () => {

  return (
    <>
      <div className="block relative w-full h-96">
        <CarouselThumbs groups={GROUPS} options={OPTIONS} />
      </div>
    </>
  );
};

export default CollectionsCategory;
