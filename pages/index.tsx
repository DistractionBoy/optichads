import type { NextPage } from "next";
import BgImageColorHeroSection from "../components/BgImageColorHeroSection";
import DarkHeroSectionClouds from "../components/DarkHeroSectionClouds";
import DarkOverlapShell from "../components/DarkOverlapShell";
import FAQs from "../components/FAQs";
import HeadMeta from "../components/HeadMeta";

const Home: NextPage = () => {
  return (
    <>
      <HeadMeta />
      <DarkHeroSectionClouds />
      <BgImageColorHeroSection />
      <DarkOverlapShell title="Promoting Health and Charity">
        <div className="bg-white rounded-lg shadow py-6">
          <FAQs />
        </div>
      </DarkOverlapShell>
    </>
  );
};

export default Home;
