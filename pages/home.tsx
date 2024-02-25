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
import Footer from "@/components/Footer";
import IntroText from "@/components/home/IntroText";
import WeNeedYouChad from "@/components/home/WeNeedYouChad";

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
      <IntroText />
      <div className="bg-white flex w-screen h-20" />
      <BaseBrigadeIntro />
      <div className="flex flex-col justify-center items-center">
        <WeNeedYouChad />
      </div>
      <div className="flex flex-col pb-20 w-full h-full bg-grainy bg-cover bg-opacity-60">
        <div className="container">
          <HotDeals />
        </div>
      </div>
      <div className="bg-white flex w-screen h-20" />
      <CollectionsCarousel />
      <div className="bg-white flex w-screen h-20" />
      <Team />
      <div className="bg-white flex w-screen h-20" />
      <Footer />
    </>
  );
};

export default Home;
