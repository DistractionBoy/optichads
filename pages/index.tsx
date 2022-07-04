import type { NextPage } from "next";
import BgImageColorHeroSection from "../components/BgImageColorHeroSection";
import DarkHeroSectionClouds from "../components/DarkHeroSectionClouds";
import DarkOverlapShell from "../components/DarkOverlapShell";
import FAQs from "../components/FAQs";
import FeatureList from "../components/FeatureList";
import HeadMeta from "../components/HeadMeta";
import PricingPlan from "../components/PricingPlan";

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
          <FAQs />
        </div>
      </DarkOverlapShell>
    </>
  );
};

export default Home;
