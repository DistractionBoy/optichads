import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeadMeta from "@/components/HeadMeta";
import SimpleInnerLayout from "@/components/SimpleInnerLayout";
import { TracingBeam } from "@/components/ui/tracing-beam";
import livic from "@/public/images/livixi3.webp";

import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";

const BioLivic = () => (
  <>
    <HeadMeta
      title="LiViXi3's Corner"
      description={`LiViXi3's career trajectory is marked by a progression from diverse creative roles to significant success as an NFT artist. He co-created "Pudgy Penguins," one of the pioneering NFT brands, garnering widespread media attention.`}
      img={`${livic.src}`}
    />
    <div className="bg-[#FB0420] flex w-screen h-[86px] z-10" />
    <Navbar />
    <SimpleInnerLayout title="Bios">
      <TracingBeam className="px-0">
        <div className="prose xl:prose-xl prose-slate mx-12 lg:mx-8">
          <h2>LiViXi3</h2>
          <Image
            className="aspect-[3/2] lg:aspect-square w-full rounded-2xl object-cover"
            src={livic}
            alt=""
            priority
          />
          <p>
            LiViXi3&apos;s career trajectory is marked by a progression from
            diverse creative roles to significant success as an NFT artist. He
            co-created &quot;Pudgy Penguins&quot;, one of the pioneering NFT
            brands, garnering widespread media attention. Prior to this, he
            served as a video editor, developing graphic ads for political
            candidates, and co-founded Sip N Dip Corporation, specializing in
            children&apos;s products.
          </p>
          <p>
            As a freelance creative designer, LiViXi3 maintained a stellar
            reputation on platforms like Upwork. His involvement in the NFT
            space, particularly with &quot;Pudgy Penguins&quot;, catapulted him
            to prominence!
          </p>
          <p>
            Overall, despite controversies within the NFT community,
            LiViXi3&apos;s journey reflects his adaptability and creativity,
            from traditional artistic pursuits to cutting-edge ventures in the
            digital art space, establishing himself as a prominent figure in the
            NFT community.
          </p>
        </div>
      </TracingBeam>
    </SimpleInnerLayout>
    <BackgroundBeams />
    <Footer />
  </>
);

export default BioLivic;
