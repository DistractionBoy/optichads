import type { NextPage } from "next";

import {
  BgImageColorBabeSection,
  BabeHeroSectionClouds,
  DarkBabeOverlapShell,
  FAQs,
  HeadMeta,
  OptiBabesTeam,
  Team,
  BabesLicensing,
} from "../components";

const BabesPage: NextPage = () => (
  <>
    <HeadMeta />
    <BabeHeroSectionClouds />
    <BgImageColorBabeSection />
    <DarkBabeOverlapShell title="A Safe Place to do Squats">
      <div className="rounded-lg bg-white pb-6 shadow">
        <OptiBabesTeam />
        <Team />
        <FAQs />
      </div>
    </DarkBabeOverlapShell>
    {/* <BabesLicensing /> */}
  </>
);

export default BabesPage;
