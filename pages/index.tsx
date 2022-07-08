import type { NextPage } from "next";

import {
  BgImageColorHeroSection,
  DarkHeroSectionClouds,
  DarkOverlapShell,
  FAQs,
  FeatureList,
  HeadMeta,
  PricingPlan,
  Team,
} from "../components";

const Home: NextPage = () => {
  return (
    <>
      <HeadMeta />
      <DarkHeroSectionClouds />
      <BgImageColorHeroSection />
      <DarkOverlapShell title="Promoting Health and Charity">
        <div className="bg-white rounded-lg shadow pb-6">
          <PricingPlan />
          <FeatureList />
          <Team />
          <FAQs />
        </div>
      </DarkOverlapShell>
    </>
  );
};

export default Home;
