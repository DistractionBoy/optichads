import Image from "next/image";

import brigadimation from "@/public/images/brigader-blink.gif";

const BaseBrigadeIntro = () => (
  <>
    <div className="flex flex-col lg:flex-row justify-end items-stretch inset-0 bg-[#0052FE] border border-b-8 border-b-white">
      <div className="flex flex-col items-center justify-center space-y-12 md:space-y-28 my-20 mx-20">
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
      <div className="flex justify-center lg:hidden">
        <Image
          alt="a cute soldier with a bag on his head, blinking every so often"
          src={brigadimation}
          width={700}
          height={700}
        />
      </div>

      <div className="hidden lg:flex desktop:hidden">
        <Image
          alt="a cute soldier with a bag on his head, blinking every so often"
          src={brigadimation}
          width={900}
          height={900}
        />
      </div>

      <div className="hidden desktop:flex">
        <Image
          alt="a cute soldier with a bag on his head, blinking every so often"
          src={brigadimation}
          width={1024}
          height={1024}
        />
      </div>
      <div className="flex lg:hidden flex-col items-center justify-center space-y-12 md:space-y-28 my-20 mb-32">
        <h2 className="text-3xl sm:text-5xl md:text-7xl xl:text-[120px] font-bold xl:font-black leading-8 font-outline-none md:font-outline-2 xl:font-outline-4">
          LIKE OUR
        </h2>
        <h2 className="text-3xl sm:text-5xl md:text-7xl xl:text-[120px] font-bold xl:font-black leading-8 font-outline-none md:font-outline-2 xl:font-outline-4">
          BRIGADE
        </h2>
      </div>
    </div>
    <div className="bg-white flex w-screen h-12" />
  </>
);

export default BaseBrigadeIntro;
