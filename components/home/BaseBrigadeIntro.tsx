import Image from "next/image";

import brigadimation from "@/public/images/brigader-blink.gif";
import brigadiFrame from "@/public/images/brigader-first-frame.png";
import { useState } from "react";

const BaseBrigadeIntro = () => {
  const [imageSrc, setImageSrc] = useState(brigadiFrame);

  const onLoadingComplete = () => {
    setImageSrc(brigadimation);
  };
  return (
    <>
      <div className="block relative w-full h-0 lg:h-44 desktop:h-64 bg-[#0052FE]" />
      <div className="flex flex-col lg:flex-row justify-end xl:justify-center items-stretch bg-[#0052FE] border-b-8 border-b-white">
        <div className="flex flex-col items-center justify-center space-y-12 md:space-y-28 my-20 px-20">
          <h2 className="text-3xl sm:text-5xl md:text-7xl xl:text-[120px] font-bold xl:font-black leading-8 font-outline-none md:font-outline-2 xl:font-outline-4">
            GLAD <span className="inline-block lg:hidden">UR</span>
          </h2>
          <h2 className="hidden lg:flex text-3xl sm:text-5xl md:text-7xl xl:text-[120px] font-bold xl:font-black leading-8 font-outline-none md:font-outline-2 xl:font-outline-4">
            UR
          </h2>
          <h2 className="text-3xl sm:text-5xl md:text-7xl xl:text-[120px] font-bold xl:font-black leading-8 font-outline-none md:font-outline-2 xl:font-outline-4">
            BASED
          </h2>
        </div>
        <div className="flex justify-center xl:hidden">
          <Image
            alt="a cute soldier with a bag on his head, blinking every so often"
            src={imageSrc}
            width={500}
            height={500}
            onLoad={onLoadingComplete}
          />
        </div>

        <div className="hidden xl:flex min-w-[700px]">
          <Image
            alt="a cute soldier with a bag on his head, blinking every so often"
            src={imageSrc}
            width={1024}
            height={1024}
            onLoad={onLoadingComplete}
          />
        </div>
        <div className="flex lg:hidden desktop:flex flex-col items-center justify-center space-y-12 md:space-y-28 my-20 mb-32 pr-20">
          <h2 className="text-3xl sm:text-5xl md:text-7xl xl:text-[120px] font-bold xl:font-black leading-8 font-outline-none md:font-outline-2 xl:font-outline-4">
            LIKE <span className="inline-block lg:hidden">OUR</span>
          </h2>
          <h2 className="hidden lg:flex text-3xl sm:text-5xl md:text-7xl xl:text-[120px] font-bold xl:font-black leading-8 font-outline-none md:font-outline-2 xl:font-outline-4">
            OUR
          </h2>
          <h2 className="text-3xl sm:text-5xl md:text-7xl xl:text-[120px] font-bold xl:font-black leading-8 font-outline-none md:font-outline-2 xl:font-outline-4">
            BRIGADE
          </h2>
        </div>
      </div>
      <div className="bg-white flex w-screen h-12" />
    </>
  );
};

export default BaseBrigadeIntro;
