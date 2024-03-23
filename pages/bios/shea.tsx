import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeadMeta from "@/components/HeadMeta";
import SimpleInnerLayout from "@/components/SimpleInnerLayout";
import { TracingBeam } from "@/components/ui/tracing-beam";
import shea from "@/public/images/11shea.jpeg";

import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";

const BioShea = () => (
  <>
    <HeadMeta
      title="Shea's Corner"
      description="11 Shea X, a musical talent hailing from Virginia, has been crafting and releasing music for over a decade. Over the past five years, he has delved into the crypto space and, more recently, embarked on his journey in the NFT space."
      img={`${shea.src}`}
    />
    <div className="bg-[#FB0420] flex w-screen h-[86px] z-10" />
    <Navbar />
    <SimpleInnerLayout title="Bios">
      <TracingBeam className="px-0">
        <div className="prose xl:prose-xl prose-slate mx-12 lg:mx-8">
          <h2>Shea</h2>
          <Image
            className="aspect-[3/2] lg:aspect-square w-full rounded-2xl object-cover"
            src={shea}
            alt=""
            priority
          />
          <p>
            11 Shea X, a musical talent hailing from Virginia, has been crafting
            and releasing music for over a decade. Over the past five years, he
            has delved into the crypto space and, more recently, embarked on his
            journey in the NFT space.
          </p>
          <p>
            Teaming up with Optichads, he&apos;s committed to providing musical
            entertainment for the community and beyond, dropping tracks for both
            Arbibabes and Optichads Collections.
          </p>
          <p>
            When he&apos;s not creating music or hosting Twitter spaces,
            he&apos;s dedicated to his family and business pursuits. In his
            downtime, you&apos;ll likely find him honing his skills on the
            basketball court, embracing his inner Chad.
          </p>
        </div>
      </TracingBeam>
    </SimpleInnerLayout>
    <BackgroundBeams />
    <Footer />
  </>
);

export default BioShea;
