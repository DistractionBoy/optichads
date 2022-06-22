import type { NextPage } from "next";
import DarkHeroSectionClouds from "../components/DarkHeroSectionClouds";
import DarkOverlapShell from "../components/DarkOverlapShell";
import FAQs from "../components/FAQs";
import HeadMeta from "../components/HeadMeta";

const Mint: NextPage = () => {
  return (
    <>
      <HeadMeta />
      <DarkHeroSectionClouds />
      <DarkOverlapShell>
        <FAQs />
      </DarkOverlapShell>
    </>
  );
};

export default Mint;
