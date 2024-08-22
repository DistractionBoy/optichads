import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import HeadMeta from "@/components/HeadMeta";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import CollectionsCarousel from "@/components/home/CollectionsCarousel";
import WelcomeChad from "@/components/home/WelcomeChad";
import BaseBrigadeIntro from "@/components/home/BaseBrigadeIntro";
import HotDeals from "@/components/home/HotDeals";
import Footer from "@/components/Footer";
import IntroText from "@/components/home/IntroText";
import WeNeedYouChad from "@/components/home/WeNeedYouChad";
import CollectionsCategory from "@/components/collections/CollectionsCategory";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["chads", "babes", "common"])),
    },
  };
}

const Home: NextPage = () => {
  return (
    <>
      <HeadMeta />
      <div className="bg-[#FB0420] flex w-screen h-[86px] z-10 absolute" />
      <Navbar />
      <WelcomeChad />
      <IntroText />
      <div className="bg-white flex w-screen h-20" />
      <BaseBrigadeIntro />
      <div className="flex flex-col justify-center items-center bg-[#FB0420]">
        <WeNeedYouChad />
      </div>
      <div className="bg-white flex w-screen h-20" />
      <CollectionsCategory />
      <div className="bg-white flex w-screen h-20" />
      <div className="flex flex-col pb-20 w-full h-full bg-grainy bg-cover bg-opacity-60">
        <div className="container">
          <HotDeals />
        </div>
      </div>
      <div className="bg-white flex w-screen h-20" />
      <Team />
      <div className="bg-white flex w-screen h-20" />
      <Footer />
    </>
  );
};

export default Home;