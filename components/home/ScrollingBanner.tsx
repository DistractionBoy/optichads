import banner from "@/public/images/banner.jpeg";
import Image from "next/image";

const wrapperClass =
  "w-full inline-flex flex-nowrap overflow-hidden" +
  "[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]";

const ScrollingBanner = () => (
  <div className={wrapperClass}>
    <ul className="flex items-center justify-center md:justify-start [&_img]:max-w-none animate-infinite-scroll">
      <li>
        <Image priority src={banner} alt="" />
      </li>
    </ul>
    <ul
      aria-hidden
      className="flex items-center justify-center md:justify-start [&_img]:max-w-none animate-infinite-scroll"
    >
      <li>
        <Image src={banner} alt="" />
      </li>
    </ul>
    <ul
      aria-hidden
      className="flex items-center justify-center md:justify-start [&_img]:max-w-none animate-infinite-scroll"
    >
      <li>
        <Image src={banner} alt="" />
      </li>
    </ul>
  </div>
);

export default ScrollingBanner;
