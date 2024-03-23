import Image from "next/image";
import babe from "@/public/images/rainbowhair-babe.png";

const IntroText = () => (
  <div className="flex flex-col justify-center items-center bg-indigo-600">
    <div className="container flex justify-start items-stretch">
      <article className="prose xl:prose-xl my-12 lg:my-16 xl:my-40 md:mx-6 lg:mx-24 md:px-12 [&>p]:leading-relaxed ultrawide:self-center">
        <h2 className="text-2xl md:text-4xl  text-white">
          The Premier L2 NFT Community
        </h2>
        <p className="text-white text-lg sm:text-xl md:text-2xl font-regular md:font-medium desktop:text-3xl">
          Our journey began with a clear vision: to establish a blue-chip NFT
          project on L2. In a landscape flooded with low-quality derivatives,
          OptiChads quickly stormed Optimism as an OG project, with a strong
          community held together with a love for exercise and a shared desire
          for success.
        </p>
        <p className="text-white text-lg sm:text-xl md:text-2xl font-regular md:font-medium desktop:text-3xl">
          What sets us apart? Our projects feature 100% original IPs with
          meticulously hand-drawn traits. We firmly believe that high-quality
          NFT art is pivotal in driving the adoption of Layer 2 solutions.
        </p>
        <p className="block ultrawide:hidden text-white text-lg sm:text-xl md:text-2xl font-regular md:font-medium desktop:text-3xl">
          Looking forward, our objective remains resolute: to strengthen the
          OP-Stack, innovate new tools for L2 NFTs, and emerge as the preferred
          choice for NFT enthusiasts worldwide.
        </p>
        <p className="block ultrawide:hidden text-white text-lg sm:text-xl md:text-2xl font-regular md:font-medium desktop:text-3xl">
          Excitingly, we&apos;re transitioning into a DAO and are thrilled about
          the possibilities with the introduction of our native token, OPC!
        </p>
      </article>
      <div className="hidden xl:flex h-[1050px] desktop:h-[1340px] bg-white w-24" />
      <div className="hidden ultrawide:flex flex-col justify-end">
        <Image
          className="max-w-[900px]"
          alt="a cute soldier with a bag on his head, blinking every so often"
          src={babe}
          width={900}
          height={900}
        />
      </div>
      <div className="hidden desktop:flex ultrawide:hidden flex-col justify-end">
        <Image
          className="max-w-[550px]"
          alt="a cute soldier with a bag on his head, blinking every so often"
          src={babe}
          width={550}
          height={550}
        />
      </div>
      <div className="hidden ultrawide:flex desktop:h-[900px] ultrawide:h-[1220px] bg-white w-24" />
      <div className="hidden ultrawide:flex flex-1">
        <article className="prose my-12 lg:my-16 xl:m-24 px-12 [&>p]:leading-relaxed flex flex-col justify-start ultrawide:justify-center">
          <p className="text-white text-base sm:text-xl md:text-2xl font-medium desktop:text-3xl">
            Looking forward, our objective remains resolute: to strengthen the
            OP-Stack, innovate new tools for L2 NFTs, and emerge as the
            preferred choice for NFT enthusiasts worldwide.
          </p>
          <p className="text-white text-base sm:text-xl md:text-2xl font-medium desktop:text-3xl">
            Excitingly, we&apos;re transitioning into a DAO and are thrilled
            about the possibilities with the introduction of our native token,
            OPC!
          </p>
        </article>
      </div>
    </div>
  </div>
);

export default IntroText;
