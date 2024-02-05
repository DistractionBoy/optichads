import Image from "next/image";

import chadimation from "@/public/images/chadimation.gif";

const WelcomeChad = () => (
  <>
    <div className="flex justify-end lg:justify-start items-stretch inset-0 bg-[#FF0420] border border-b-8 border-b-white">
      <div className="flex justify-center lg:hidden flex-1">
        <Image
          alt="chad flexing his bicep and smiling"
          src={chadimation}
          width={700}
          height={700}
        />
      </div>

      <div className="hidden lg:flex flex-1">
        <Image
          alt="chad flexing his bicep and smiling"
          src={chadimation}
          width={900}
          height={900}
        />
      </div>

      <div className="absolute top-32 md:top-1/4 w-full text-center mx-auto lg:relative lg:flex flex-1 flex-col items-center justify-center space-y-12 md:space-y-28">
        <h2 className="text-3xl sm:text-5xl md:text-7xl xl:text-[120px] font-bold xl:font-black leading-8 font-outline-none md:font-outline-2 xl:font-outline-4">
          WELCOME
        </h2>
        <h2 className="text-3xl sm:text-5xl md:text-7xl xl:text-[120px] font-bold xl:font-black leading-8 font-outline-none md:font-outline-2 xl:font-outline-4">
          CHAD
        </h2>
      </div>
    </div>
    <div className="bg-white flex w-screen h-12" />
  </>
);

export default WelcomeChad;
