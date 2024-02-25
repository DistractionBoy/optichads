import Image from "next/image";

import weNeedYouImgSrc from "@/public/images/we-need-you.png";
import Link from "next/link";
import { divergentLinkButtonCSS } from "../ui/button";

const WeNeedYouChad = () => (
  <div className="relative rounded-xl mx-6 my-12 md:mx-8 md:my-16 lg:my-32 bg-white/90 shadow-2xl drop-shadow-lg">
    <div className="relative overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-r-none bg-red-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
      <Image
        className="h-full w-full object-cover"
        src={weNeedYouImgSrc}
        alt=""
      />
      <svg
        viewBox="0 0 926 676"
        aria-hidden="true"
        className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
      >
        <path
          fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
          fillOpacity=".4"
          d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
        />
        <defs>
          <linearGradient
            id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
            x1="926.392"
            x2="-109.635"
            y1=".176"
            y2="321.024"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FB0420" />
            <stop offset={1} stopColor="#C11911" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div className="flex flex-col justify-center relative mx-auto max-w-7xl lg:px-8">
      <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-12 lg:w-1/2 lg:pl-16 lg:pr-0 xl:pl-20 md:mt-8 my-8 md:my-4 lg:my-32">
        <h2 className="text-base font-semibold leading-7 text-red-600">
          We Need YOU!
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
          OptiChads Voting DAO
        </p>
        <p className="mt-6 text-base leading-7 text-gray-700">
          As curators of quality collections ourselves, we can often tell which
          collections are fly-by&apos;s and which ones are quality. And we have
          been in the L2 space for a very long time (for the crypto world). We
          know the history of the OP NFT scene through and through, and now we
          are getting involved. Delegate your tokens to us. Let us be your voice
          as a collector, and a creator.
        </p>
        <div className="mt-3 lg:mt-8">
          <Link
            href="https://vote.optimism.io/delegates/0x10850762bAc0dc6660630c1EfFe188A7cbFDdc88"
            target="_blank"
            className={divergentLinkButtonCSS}
          >
            Delegate to OptiChads
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default WeNeedYouChad;
