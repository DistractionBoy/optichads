import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeadMeta from "@/components/HeadMeta";
import SimpleInnerLayout from "@/components/SimpleInnerLayout";
import { TracingBeam } from "@/components/ui/tracing-beam";
import dope from "@/public/images/dope.jpg";

import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";

const BioDope = () => (
  <>
    <HeadMeta
      title="Dope's Corner"
      description={`Dope started his crypto-venture by navigating his way through a minefield of memecoins alongside Lifestrike...`}
      img={`${dope.src}`}
    />
    <div className="bg-[#FB0420] flex w-screen h-[86px] z-10" />
    <Navbar />
    <SimpleInnerLayout title="Bios">
      <TracingBeam className="px-0">
        <div className="prose xl:prose-xl prose-slate mx-12 lg:mx-8">
          <h2>Dope</h2>
          <Image
            className="aspect-[3/2] lg:aspect-square w-full rounded-2xl object-cover"
            src={dope}
            alt=""
            priority
          />
          <p>
            Dope started his crypto-venture by navigating his way through a
            minefield of memecoins alongside Lifestrike. The two found
            themselves migrating to L2 blockchains and found a permanent home in
            the OptiChads team, where Dope helps to moderate, advise other core
            members and assist in admin tasks.
          </p>
          <p>
            Dope got an opportunity to shine when the team discussed launching
            music NFTs for the Arbibabes and OptiChads collections, and being a
            longtime producer and creator found himself collaborating on 2
            tracks with the extremely talented 11 Shea X.
          </p>
          <p>
            In the real world, Dope (along with many other members of the
            community) is a gym Chad, he&apos;s an avid gamer and
            instrumentalist and works full-time as a neuroscientist.
          </p>
        </div>
      </TracingBeam>
    </SimpleInnerLayout>
    <BackgroundBeams />
    <Footer />
  </>
);

export default BioDope;
