import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeadMeta from "@/components/HeadMeta";
import SimpleInnerLayout from "@/components/SimpleInnerLayout";
import { TracingBeam } from "@/components/ui/tracing-beam";
import beeps from "@/public/images/beeps.png";

import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Bio = () => (
  <>
    <HeadMeta
      title="Young Beeps's Corner"
      description={`Young Beeps embarked on his crypto journey in 2020 under the guidance of his close friends MillyNish and Dicaso, who introduced him to the dynamic realm of Web3.`}
      img={`${beeps.src}`}
    />
    <div className="bg-[#FB0420] flex w-screen h-[86px] z-10" />
    <Navbar />
    <SimpleInnerLayout title="Bios">
      <TracingBeam className="px-0">
        <div className="prose xl:prose-xl prose-slate mx-12 lg:mx-8">
          <h2>Young Beeps</h2>
          <Image
            className="aspect-[3/2] lg:aspect-square w-full rounded-2xl object-cover"
            src={beeps}
            alt=""
            priority
          />
          <p>
            Young Beeps embarked on his crypto journey in 2020 under the
            guidance of his close friends MillyNish and Dicaso, who introduced
            him to the dynamic realm of Web3. Collaborating closely with
            MillyNish, Young Beeps delved into the intricacies of cryptocurrency
            and altcoins, eventually venturing into the world of NFTs under the
            mentorship of LiViXi3. This foundational exploration paved the way
            for Young Beeps, MillyNish, and Dicaso to embark on their NFT
            journey, with LiViXi3 serving as an invaluable advisor, providing
            insights and expertise crucial to shaping their endeavors.
          </p>
          <p>
            Armed with the knowledge gleaned from their experiences in Layer 1
            NFTs on Ethereum and a deep understanding of NFT collections and
            community dynamics, the trio, alongside their trusted advisor
            LiViXi3, laid the groundwork for what would evolve into the
            illustrious OptiChads empire. The seamless / organic integration of
            talented leaders (Distraction Boy, Lifestrike, Dope, JasonFactor,
            and 11 Shea X) further fortified their ranks, culminating in the
            birth of the OptiChads empire, comprising OptiChads, ArbiBabes, and
            Base Brigade collections, firmly establishing their presence in
            Layer 2.
          </p>
          <p>
            Prior to their presence in Web3, Young Beeps and MillyNish shared a
            deep bond forged through their mutual passion for basketball and
            commitment to fitness, which transcended into a real-life friendship
            and are brothers for life. They continue to nurture their shared
            interests by playing basketball and lifting together in fitness
            establishments like One Life and LA Fitness. Furthermore, their
            dedication extends beyond the court as they actively contribute to
            their local community by spearheading a non-profit basketball
            foundation (Gurkha Foundation), inspiring and empowering the younger
            generation.
          </p>
          <p>
            In the real world, Young Beeps has spent over a decade as a
            government consultant and continues to be a senior subject matter
            expert for implementing various government initiatives for the
            General Services Administration agency. Additionally, Young Beeps
            cherishes quality time with his real-life ArbiBabe (his best-friend
            / girlfriend / love of his life), embodying the essence of a
            romantic Chad. In his spare time, Young Beeps also loves to inspire
            people with motivational quotes and is an avid hip-hop music lover.
          </p>
        </div>
      </TracingBeam>
    </SimpleInnerLayout>
    <BackgroundBeams />
    <Footer />
  </>
);

export default Bio;
