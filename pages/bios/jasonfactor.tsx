import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeadMeta from "@/components/HeadMeta";
import SimpleInnerLayout from "@/components/SimpleInnerLayout";
import { TracingBeam } from "@/components/ui/tracing-beam";
import jasonFactor from "@/public/images/jasonfactor.webp";

import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";

const BioJasonFactor = () => (
  <>
    <HeadMeta
      title="JasonFactor's Corner"
      description="JasonFactor joined web3 in 2020 from layer 1 defi communities.
      Feeling dissatisfied with high gas fees along with token inflation
      from defi projects, he found another layer 2 solution and started
      supporting nft projects."
      img={`${jasonFactor.src}`}
    />
    <div className="bg-[#FB0420] flex w-screen h-[86px] z-10" />
    <Navbar />
    <SimpleInnerLayout title="Bios">
      <TracingBeam className="px-0">
        <div className="prose xl:prose-xl prose-slate mx-12 lg:mx-8">
          <h2>JasonFactor</h2>
          <Image
            className="aspect-[3/2] lg:aspect-square w-full rounded-2xl object-cover"
            src={jasonFactor}
            alt=""
            priority
          />
          <p>
            JasonFactor joined web3 in 2020 from layer 1 defi communities.
            Feeling dissatisfied with high gas fees along with token inflation
            from defi projects, he found another layer 2 solution and started
            supporting nft projects. Here he is interested in the Optichads
            project - sports, anime combined with cryptocurrency.
          </p>
          <p>
            He contributed the source code with DistractionBoy to build the web
            interface for the project. In addition, he along with Dicaso and
            other team members help build a stronger NFT layer 2 community.
          </p>
          <p>
            In real life, JasonFactor is a developer at a game company on web2 &
            web3 platforms. In his spare time, he works out at the gym, draws
            memes and joins other blockchain communities.
          </p>
        </div>
      </TracingBeam>
    </SimpleInnerLayout>
    <BackgroundBeams />
    <Footer />
  </>
);

export default BioJasonFactor;
