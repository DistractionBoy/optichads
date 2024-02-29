import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeadMeta from "@/components/HeadMeta";
import SimpleInnerLayout from "@/components/SimpleInnerLayout";
import { TracingBeam } from "@/components/ui/tracing-beam";
import millynish from "@/public/images/millynish.jpeg";
import millynishBefore from "@/public/images/millynish-before.jpeg";
import millynishAfter from "@/public/images/millynishAfter.jpeg";

import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/three-d-card";
import Head from "next/head";

const Bio = () => (
  <>
    <HeadMeta
      title="Millynish's Corner"
      description="Meet Millynish, the living embodiment of Web3 innovation! After
            Dicaso unleashed Layer 2, there was no turning back for this digital
            dynamo."
      img={`${millynish.src}`}
    />
    <div className="bg-[#FB0420] flex w-screen h-[86px] z-10" />
    <Navbar />
    <SimpleInnerLayout title="Bios">
      <TracingBeam className="px-0">
        <div className="prose xl:prose-xl prose-slate mx-12 lg:mx-8">
          <h2>Millynish</h2>
          <p className="lead">
            Meet Millynish, the living embodiment of Web3 innovation! After
            Dicaso unleashed Layer 2, there was no turning back for this digital
            dynamo.
          </p>
          <Image
            className="aspect-[3/2] w-full rounded-2xl object-cover"
            src={millynish}
            alt=""
            priority
          />
          <p>
            Drawing inspiration from Optichads Art and community, Millynish
            embarked on a quest to become the ultimate Chad, blending fitness
            and crypto culture with finesse.
          </p>
          <p>
            In the digital realm, Millynish is the jack-of-all-trades for
            Optichads, from managing Discord servers to orchestrating IRL
            meetups, marketing endeavors, talent scouting, and leading metaverse
            workouts. But when he is not busy revolutionizing Web3, he will be
            on Fortnite getting busy with DistractionBoy or you will find him
            pumping iron at the gym, sculpting his physique to perfection.
          </p>
          <p>
            Teaming up with YoungBeeps, Millynish also co-pilots the Gurkha
            Foundation, a non-profit basketball initiative that champions
            Optichad holders and spreads joy both on and off the blockchain. And
            let&apos;s not forget his role as a dedicated nurse to his grandpa,
            the OG CHAD, where he finds solace and purpose in caring for family
            while cracking jokes in the downtime.
          </p>
        </div>
      </TracingBeam>
    </SimpleInnerLayout>
    <BackgroundBeams />
    <div className="flex flex-col lg:flex-row container mx-auto justify-center space-x-4 md:space-x-8 mb-60">
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto md:w-[30rem] h-auto rounded-xl p-6 border ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Before
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Millynish was a puny man with puny bags.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={millynishBefore}
              className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Your Fitness Journey →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Become a Chad
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto md:w-[30rem] h-auto rounded-xl p-6 border mx-4">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            After
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Millynish carries both.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={millynishAfter}
              className="md:aspect-[1/1] w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
              width={900}
              height={900}
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Your Fitness Journey →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Become a Chad
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
    <Footer />
  </>
);

export default Bio;
