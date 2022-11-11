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
          <Team />
          <Tokenomics />
          <DailyChad />
          <Image
            alt="a sick tweet bro"
            src={vitalikApproves}
            height={900}
            width={1255}
            layout="responsive"
          />
          <PricingPlan />
          <FeatureList />
          <FAQs />
          <Partners />
        </div>
      </DarkOverlapShell>
    </>
  );
};

export default Home;
