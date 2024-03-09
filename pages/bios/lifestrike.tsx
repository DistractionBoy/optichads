import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeadMeta from "@/components/HeadMeta";
import SimpleInnerLayout from "@/components/SimpleInnerLayout";
import { TracingBeam } from "@/components/ui/tracing-beam";
import lifestrike from "@/public/images/lifestrike.jpg";

import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Bio = () => (
  <>
    <HeadMeta
      title="Lifestrike's Corner"
      description={`Lifestrike ventured into Web3 in 2021 through the rise of low market
      cap memecoins. Dissatisfied with the gas fees on ETH mainnet, he
      began on a search for cheaper alternatives and came across Layer 2
      solutions such as Optimism and Arbitrum.`}
      img={`${lifestrike.src}`}
    />
    <div className="bg-[#FB0420] flex w-screen h-[86px] z-10" />
    <Navbar />
    <SimpleInnerLayout title="Bios">
      <TracingBeam className="px-0">
        <div className="prose xl:prose-xl prose-slate mx-12 lg:mx-8">
          <h2>Dope</h2>
          <Image
            className="aspect-[3/2] lg:aspect-square w-full rounded-2xl object-cover"
            src={lifestrike}
            alt=""
            priority
          />
          <p>
            Lifestrike ventured into Web3 in 2021 through the rise of low market
            cap memecoins. Dissatisfied with the gas fees on ETH mainnet, he
            began on a search for cheaper alternatives and came across Layer 2
            solutions such as Optimism and Arbitrum. He made a home on Optimism
            in 2021 and got into NFTs in the ecosystem, eventually coming into
            contact with the other admins of Optichads, where they built
            Optichads from the ground up.
          </p>
          <p>
            As an admin in Optichads, Lifestrike aids in discord management,
            role configuration, and overall decision making. Outside of Web3,
            Lifestrike is a fitness and weight-lifting advocate who loves all
            things tech, computer science, and cybersecurity.
          </p>
        </div>
      </TracingBeam>
    </SimpleInnerLayout>
    <BackgroundBeams />
    <Footer />
  </>
);

export default Bio;
