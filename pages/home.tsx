import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "next-i18next";

import HeadMeta from "@/components/HeadMeta";
import DarkNavbar from "@/components/Navbar";
import Team from "@/components/Team";
import ScrollingBanner from "@/components/home/ScrollingBanner";

import chadBanner from "@/public/images/banners/chad-banner.jpeg";
import babeBanner from "@/public/images/banners/babe-banner.jpeg";
import brigadeBanner from "@/public/images/banners/brigade-banner.jpeg";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["chads", "babes", "common"])),
    },
  };
}

const Home: NextPage = () => {
  // const { t } = useTranslation();
  return (
    <>
      <HeadMeta />
      <DarkNavbar />
      <ScrollingBanner src={chadBanner} />
      <ScrollingBanner src={babeBanner} />
      <ScrollingBanner src={brigadeBanner} />

      {/* <Team /> */}
    </>
  );
};

export default Home;
