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
      <BaseBrigadeIntro />
      <CollectionsCarousel />

      <div className="bg-white dark:bg-[#090909]">
        <div className="container">
          <HotDeals />
        </div>
      </div>

      <Team />
    </>
  );
};

export default Home;
