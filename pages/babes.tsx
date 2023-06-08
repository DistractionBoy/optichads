import type { NextPage } from "next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import {
  BabeArtSection,
  BgImageColorBabeSection,
  BabeHeroSectionClouds,
  DarkBabeOverlapShell,
  FAQs,
  HeadMeta,
  OptiBabesTeam,
  Team,
  BabesLicensing,
} from "../components";

export async function getStaticProps({locale}:any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['babes', 'common']))
    }
  }
}

const BabesPage: NextPage = () => (
  <>
    <HeadMeta />
    <BabeHeroSectionClouds />
    <BgImageColorBabeSection />
    <DarkBabeOverlapShell title="Meet our Babes art">
      <BabeArtSection/>
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
