import type { NextPage } from "next";
import Image from "next/image";
import vitalikApproves from "../public/images/vitalik_approves.png";

import {
  BgImageColorBabeSection,
  DarkBabeSectionClouds,
  DarkOverlapShell,
  FAQs,
  FeatureList,
  HeadMeta,
  OptiBabesTeam,
  PricingPlan,
  Team,
} from "../components";

const BabesPage: NextPage = () => {
  return (
    <>
      <HeadMeta />
      <DarkBabeSectionClouds />
      <BgImageColorBabeSection />
      <DarkOverlapShell title="Promoting Health and Charity">
        <div className="rounded-lg bg-white pb-6 shadow">
          <PricingPlan />
          <FeatureList />
          <OptiBabesTeam />
          <Team />
          <Image
            alt="a sick tweet bro"
            src={vitalikApproves}
            height={900}
            width={1255}
            layout="responsive"
          />
          <FAQs />
        </div>
      </DarkOverlapShell>
    </>
  );
};

export default BabesPage;
