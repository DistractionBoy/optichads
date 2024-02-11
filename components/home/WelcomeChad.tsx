import { useState } from "react";
import Image from "next/image";

import chadimation from "@/public/images/chadimation.gif";
import chadimationFrame from "@/public/images/chadimation-first-frame.png";

const WelcomeChad = () => {
  const [imageSrc, setImageSrc] = useState(chadimationFrame);

  const onLoadingComplete = () => {
    setImageSrc(chadimation);
  };

  return (
    <>
      <div className="block relative w-full h-0 md:h-44 desktop:h-64 bg-[#FB0420]" />
      <div className="flex flex-col-reverse lg:flex-row justify-end lg:justify-center items-center lg:items-end bg-[#FB0420]">
        <div className="flex justify-end desktop:hidden flex-1">
          <Image
            alt="chad flexing his bicep and smiling"
            src={imageSrc}
            width={500}
            height={500}
            onLoad={onLoadingComplete}
          />
        </div>

        <div className="hidden desktop:flex justify-end flex-1">
          <Image
            alt="chad flexing his bicep and smiling"
            src={imageSrc}
            width={1024}
            height={1024}
            onLoad={onLoadingComplete}
          />
        </div>

        <div className="flex flex-1 flex-col items-center justify-center self-center pb-16 pt-32 lg:pt-0 space-y-12 lg:space-y-28">
          <h2 className="text-5xl md:text-7xl xl:text-[120px] font-bold xl:font-black leading-8 font-outline-none md:font-outline-2 xl:font-outline-4">
            WELCOME
          </h2>
          <h2 className="text-5xl md:text-7xl xl:text-[120px] font-bold xl:font-black leading-8 font-outline-none md:font-outline-2 xl:font-outline-4">
            CHAD
          </h2>
        </div>
      </div>
      <div className="bg-white flex w-screen h-20" />
    </>
  );
};

export default WelcomeChad;
