import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

const wrapperClass = cn(
  "w-full inline-flex flex-nowrap overflow-hidden",
  "[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
);

const listWrapperClass = cn(
  "flex items-center justify-center md:justify-start [&_img]:max-w-none",
  "animate-none hover:animate-infinite-scroll backdrop-blur-sm hover:backdrop-blur-none",
  "grayscale hover:grayscale-0 hover:cursor-pointer",
  "transition-all ease-in-out duration-150"
);

export type ScrollingBannerProps = {
  src: string | StaticImport;
};

const ScrollingBanner = ({ src }: ScrollingBannerProps) => (
  <div className={wrapperClass}>
    <ul className={listWrapperClass}>
      <li>
        <Image priority src={src} alt="" />
      </li>
    </ul>
    <ul aria-hidden className={listWrapperClass}>
      <li>
        <Image src={src} alt="" />
      </li>
    </ul>
    <ul aria-hidden className={listWrapperClass}>
      <li>
        <Image src={src} alt="" />
      </li>
    </ul>
  </div>
);

export default ScrollingBanner;
