import type { NextPage } from "next";
import Image from "next/image";
import vitalikApproves from "../public/images/vitalik_approves.png";

import {
  BgImageColorBabeSection,
  DarkBabeSectionClouds,
  DarkBabeOverlapShell,
  FAQs,
  FeatureList,
  HeadMeta,
  OptiBabesTeam,
  PricingPlan,
  Team,
} from "../components";

const BabesPage: NextPage = (props) => {
  return (
    <>
      <HeadMeta />
      <DarkBabeSectionClouds />
      <BgImageColorBabeSection />
      <DarkBabeOverlapShell title="Promoting Health and Charity">
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
          />
          <FAQs />
        </div>
      </DarkBabeOverlapShell>
    </>
  );
};

export default BabesPage;
