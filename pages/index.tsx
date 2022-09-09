import type { NextPage } from "next";

import {
  BgImageColorHeroSection,
  DarkHeroSectionClouds,
  DarkOverlapShell,
  FAQs,
  FeatureList,
  HeadMeta,
  Proposal,
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
        <div className="bg-white rounded-lg shadow pb-6">
          <Proposal />
          <PricingPlan />
          <FeatureList />
          <Tokenomics />
          <Team />
          <FAQs />
        </div>
      </DarkOverlapShell>
    </>
  );
};

export default Home;
