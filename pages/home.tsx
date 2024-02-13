import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import HeadMeta from "@/components/HeadMeta";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import CollectionsCarousel from "@/components/home/CollectionsCarousel";
import Head from "next/head";
import WelcomeChad from "@/components/home/WelcomeChad";
import BaseBrigadeIntro from "@/components/home/BaseBrigadeIntro";
import HotDeals from "@/components/home/HotDeals";
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
      <Head>
        <HeadMeta />
      </Head>
      <Navbar />

      <WelcomeChad />
      <div className="flex flex-col desktop:hidden">
        <ScrollingBanner src={chadBanner} />
      </div>
      <div className="bg-white flex w-screen h-20" />
      <BaseBrigadeIntro />
      <div className="bg-[#FB0420] dark:bg-zinc-900 pb-20">
        <div className="container">
          <HotDeals />
        </div>
      </div>
      <div className="bg-white flex w-screen h-20" />
      <div className="flex flex-col desktop:hidden">
        <ScrollingBanner src={brigadeBanner} />
      </div>
      <CollectionsCarousel />
      <div className="bg-white flex w-screen h-20" />
      <Team />
      <div className="bg-white flex w-screen h-20" />
      <div className="flex flex-col desktop:hidden">
        <ScrollingBanner src={babeBanner} />
      </div>
    </>
  );
};

export default Home;
