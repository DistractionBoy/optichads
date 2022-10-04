import type { NextPage } from "next";

import {
  BgImageColorHeroSection,
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
          <PricingPlan />
          <FeatureList />
          <Tokenomics />
          <Team />
          <FAQs />
          {/* <Partners /> */}
        </div>
      </DarkOverlapShell>
    </>
  );
};

export default Home;
