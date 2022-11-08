import type { NextPage } from "next";
import Image from "next/image";
import vitalikApproves from "../public/images/vitalik_approves.png";

import {
  BgImageColorHeroSection,
  DailyChad,
  DarkHeroSectionClouds,
  DarkOverlapShell,
  FAQs,
  FeatureList,
  HeadMeta,
  Partners,
  PricingPlan,
  Team,
  Tokenomics,
} from "../components";

const Home: NextPage = () => {
  return (
    <>
      <HeadMeta />
      <DarkHeroSectionClouds />
      <BgImageColorHeroSection />
      <DarkOverlapShell title="Promoting Health and Charity">
        <div className="rounded-lg bg-white pb-6 shadow">
          <Image
            alt="a sick tweet bro"
            className="rounded-lg"
            src={vitalikApproves}
            height={900}
            width={1255}
            layout="responsive"
          />
          <Tokenomics />
          <Partners />
          <DailyChad />
          <PricingPlan />
          <FeatureList />
          <Team />
        </div>
      </DarkOverlapShell>
    </>
  );
};

export default Home;
