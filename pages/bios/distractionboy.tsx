import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeadMeta from "@/components/HeadMeta";
import SimpleInnerLayout from "@/components/SimpleInnerLayout";
import { TracingBeam } from "@/components/ui/tracing-beam";
import distraction from "@/public/images/distraction.png";

import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";

import Link from "next/link";
import Script from "next/script";
import { LayoutGrid } from "@/components/ui/photo-layout-grid";

import scott from "@/public/images/portfolios/holiday-party-2019-2.jpg";
import walk from "@/public/images/portfolios/_JMP5424-2.jpeg";
import proposal from "@/public/images/portfolios/_JMP2049.jpg";
import sunset from "@/public/images/portfolios/mila-fam-5.jpg";

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Holiday Parties</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A company I used to work for hires me to take their photos and reconnect
        with old buddies. I always make room for them.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Surprise Proposal</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Capturing the very moment she realizes it is really happening. One of my
        crowning achievements, I waited 3 hours and politely asked hundreds of
        people to move to get this shot.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Love Birds</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        They may have been a little late to the shoot, but did not mind some
        experimentation.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Baby&apos;s First Steps</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Who doesn&apos;t love it when they can walk on their own? Time to hit
        the gym now, bro!
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: scott.src,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1 [&_img]:object-bottom",
    thumbnail: proposal.src,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: walk.src,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: sunset.src,
  },
];

const BioDistractionBoy = () => (
  <>
    <HeadMeta
      title="DistractionBoy's Corner"
      description="DistractionBoy came into web3 website development through Optimistic Bunnies, the
      first major pfp deployed on Optimism in its very early days."
      img={`${distraction.src}`}
    />
    <div className="bg-[#FB0420] flex w-screen h-[86px] z-10" />
    <Navbar />
    <SimpleInnerLayout title="Bios">
      <TracingBeam className="px-0">
        <div className="prose xl:prose-xl prose-slate mx-12 lg:mx-8">
          <h2>DistractionBoy</h2>
          <p className="lead">
            Have the confidence to tackle things on your own but the humility to
            bring out the best in those around you.
          </p>
          <Image
            className="aspect-[3/2] lg:aspect-square w-full rounded-2xl object-cover"
            src={distraction}
            alt=""
            priority
          />
          <p>
            DistractionBoy came into web3 website development through{" "}
            <Link href="https://optiland.xyz">Optimistic Bunnies</Link>, the
            first major pfp deployed on Optimism in its very early days. In
            fact, he helped Collab Land add Optimism as a choice in the client
            of their platform.
          </p>
          <blockquote className="twitter-tweet h-[823px]">
            <p lang="en" dir="ltr">
              🤖Bot Update🤖 Optimism support is LIVE! Thank you to{" "}
              <a href="https://twitter.com/DistractionBoy_?ref_src=twsrc%5Etfw">
                @DistractionBoy_
              </a>{" "}
              for his assistance in making this happen. Please check out{" "}
              <a href="https://twitter.com/OPBunnies?ref_src=twsrc%5Etfw">
                @OPBunnies
              </a>{" "}
              who are the first{" "}
              <a href="https://t.co/kaQO2LirGJ">https://t.co/kaQO2LirGJ</a>{" "}
              Optimism community!{" "}
              <a href="https://t.co/rjEaLGHAuC">pic.twitter.com/rjEaLGHAuC</a>
            </p>
            &mdash; 🦾 Collab.Land 🤖 (@Collab_Land_){" "}
            <a href="https://twitter.com/Collab_Land_/status/1471179844927074306?ref_src=twsrc%5Etfw">
              December 15, 2021
            </a>
          </blockquote>
          <Script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></Script>
          <p>
            Fed up with the monotony of his web2 job and looking for a way to
            contribute to the OP NFT scene, he found Dicaso in the OptiPunks
            discord looking for people to help build a new collection that would
            donate 50% of its mint to Retroactive Public Goods Funding.
          </p>
          <p>
            In the months that followed, DistractionBoy built the website that
            facilitated the OptiChads genesis mint and served as a reference
            point for the Fitness Challenges.
          </p>
          <p>
            Over time DistractionBoy has gotten to know Dicaso, Millynish, and
            some of the other OptiChads staff members in real life and prides
            himself in actually having made new friends in the crypto space. He
            facilitates many of the team&apos;s collaborations with press
            releases and timely updates to the website, reaches out to L1 maxis
            and invites them to the superchain (and I guess Arbitrum), and
            researches new tech.
          </p>
          <blockquote className="twitter-tweet h-[823px]">
            <p lang="en" dir="ltr">
              From our team meating yesterday! It was epic to get to meet some
              of the team members in real life! We have big things planned!{" "}
              <a href="https://twitter.com/DistractionBoy_?ref_src=twsrc%5Etfw">
                @DistractionBoy_
              </a>{" "}
              <a href="https://twitter.com/millynish7?ref_src=twsrc%5Etfw">
                @millynish7
              </a>{" "}
              <a href="https://twitter.com/Dicaso5?ref_src=twsrc%5Etfw">
                @Dicaso5
              </a>{" "}
              <a href="https://t.co/fW2k09FhEC">https://t.co/fW2k09FhEC</a>{" "}
              <a href="https://t.co/sjslSpqYNr">pic.twitter.com/sjslSpqYNr</a>
            </p>
            &mdash; OptiChads on Optimism 🔴✨️💪 (@OptiChads){" "}
            <a href="https://twitter.com/OptiChads/status/1580598260338524160?ref_src=twsrc%5Etfw">
              October 13, 2022
            </a>
          </blockquote>
          <Script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></Script>
          <p>
            Outside of web3, DistractionBoy has an actual life with a family and
            a regular job as a Technical Product Manager for a security company
            that uses DLT to provide MFA for APIs. In his spare time he masters
            slow-cooking big meats with custom rubs, eating them, and taking
            pics at the occasional{" "}
            <span className="font-bold">event photography</span> gig.
          </p>
          <blockquote className="twitter-tweet h-[823px]">
            <p lang="en" dir="ltr">
              hands down{" "}
              <a href="https://t.co/RQjlJNmYMW">pic.twitter.com/RQjlJNmYMW</a>
            </p>
            &mdash; OptiChads on Optimism 🔴✨️💪 (@OptiChads){" "}
            <a href="https://twitter.com/OptiChads/status/1570873388989837313?ref_src=twsrc%5Etfw">
              September 16, 2022
            </a>
          </blockquote>{" "}
          <Script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></Script>
        </div>
      </TracingBeam>
    </SimpleInnerLayout>
    <div className="h-screen w-screen mt-20 mb-40 relative z-10">
      <LayoutGrid cards={cards} />
    </div>
    <BackgroundBeams />
    <Footer />
  </>
);

export default BioDistractionBoy;
