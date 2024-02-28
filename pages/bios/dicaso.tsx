import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeadMeta from "@/components/HeadMeta";
import SimpleInnerLayout from "@/components/SimpleInnerLayout";
import { TracingBeam } from "@/components/ui/tracing-beam";
import dicaso from "@/public/images/dicaso.png";

import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Head from "next/head";

const Bio = () => (
  <>
    <HeadMeta
      title="Dicaso's Corner"
      description="Dicaso is an L2 NFT visionary, ascending from adversity to spearhead
            OptiChads' remarkable journey to becoming the #1 NFT project on
            Optimism."
    />
    <Head key={"dicaso-bio"}>
      <meta property="og:image" content={`${dicaso.src}`} />
    </Head>
    <div className="bg-[#FB0420] flex w-screen h-[86px] z-10" />
    <Navbar />
    <SimpleInnerLayout title="Bios">
      <TracingBeam className="px-0">
        <div className="prose xl:prose-xl prose-slate mx-12 lg:mx-8">
          <h2>Dicaso</h2>
          <Image
            className="aspect-[3/2] lg:aspect-square w-full rounded-2xl object-cover"
            src={dicaso}
            alt=""
            priority
          />
          <p>
            Dicaso is an L2 NFT visionary, ascending from adversity to spearhead
            OptiChads' remarkable journey to becoming the #1 NFT project on
            Optimism. Serving as our benevolent dictator, he bestows upon us
            gifts and a compelling vision of the future.
          </p>
          <p>
            Passionate about fitness and steadfast in his belief in the
            transformative potential of NFTs, Dicaso tirelessly built a
            groundbreaking project that encapsulates the essence of Optimism in
            tokenized form.
          </p>
          <p>
            He ardently maintains that holders of OptiChads, BaseBrigade, and
            ArbiBabes are the vanguard of L2 NFTs, championing decentralization
            every step of the way.
          </p>
        </div>
      </TracingBeam>
    </SimpleInnerLayout>
    <BackgroundBeams />
    <Footer />
  </>
);

export default Bio;
