import type { NextPage } from "next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import {
  BabeArtSection,
  BgImageColorBabeSection,
  BabeHeroSectionClouds,
  DarkBabeOverlapShell,
  FAQs,
  HeadMeta,
  ArbiBabesTeam,
  Team,
  BabesLicensing,
} from "../components";

export async function getStaticProps({locale}:any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['chads', 'babes', 'common']))
    }
  }
}

const BabesPage: NextPage = () => {
  const { t } = useTranslation()
  const promoting: any = t("babes:promoting")
  
  return(
    <>
      <HeadMeta />
      <BabeHeroSectionClouds />
      <BgImageColorBabeSection />
      <DarkBabeOverlapShell title={promoting}>
        <BabeArtSection/>
        <div className="rounded-lg bg-white pb-6 shadow">
          <ArbiBabesTeam />
          <Team />
          <FAQs />
        </div>
      </DarkBabeOverlapShell>
      {/* <BabesLicensing /> */}
    </>
  )
};

export default BabesPage;
