import CarouselThumbs from "../ui/carouselThumbs";
import { EmblaOptionsType } from 'embla-carousel';

import chad1 from "@/public/images/collections/chad1.webp";
import chad2 from "@/public/images/collections/chad2.webp";
import brigader1 from "@/public/images/collections/brigader1.webp";
import brigader2 from "@/public/images/collections/brigader2.webp";
import arbibabe1 from "@/public/images/collections/arbibabe1.webp";
import arbibabe2 from "@/public/images/collections/arbibabe2.webp";


const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const GROUPS = [
  {
    index: 0,
    name: "Armored Chad",
    category: "Optichad",
    bgColor: "bg-[#FB0420]",
    bgDescription: "bg-red-600",
    img: chad1
  },
  {
    index: 1,
    name: "Demon King",
    category: "Optichad",
    bgColor: "bg-[#FB0420]",
    bgDescription: "bg-red-600",
    img: chad2
  },
  {
    index: 2,
    name: "Berserker",
    category: "Arbibabe",
    bgColor: "bg-[#49AAF6]",
    bgDescription: "bg-blue-400",
    img: arbibabe1
  },
  {
    index: 3,
    name: "Succubus",
    category: "Arbibabe",
    bgColor: "bg-[#49AAF6]",
    bgDescription: "bg-blue-400",
    img: arbibabe2
  },
  {
    index: 4,
    name: "Wizard",
    category: "Brigader",
    bgColor: "bg-[#80A5F8]",
    bgDescription: "bg-blue-400",
    img: brigader1
  },
  {
    index: 5,
    name: "Base King",
    category: "Brigader",
    bgColor: "bg-[#80A5F8]",
    bgDescription: "bg-blue-400",
    img: brigader2
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
