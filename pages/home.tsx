import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "next-i18next";

import HeadMeta from "@/components/HeadMeta";
import DarkNavbar from "@/components/Navbar";
import Team from "@/components/Team";
import CollectionsCarousel from "@/components/home/CollectionsCarousel";
import Head from "next/head";
import WelcomeChad from "@/components/home/WelcomeChad";
import BaseBrigadeIntro from "@/components/home/BaseBrigadeIntro";

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
      <DarkNavbar />

      <WelcomeChad />
      <BaseBrigadeIntro />
      <CollectionsCarousel />

      <div className="container bg-slate-100 rounded-sm shadow-xl prose">
        <h2>Please bear with us</h2>
        <p>
          We are working around the clock to bring this site back up, but better
          than before, with more ways to engage.
        </p>
      </div>
      <div className="container bg-slate-100 shadow-xl prose">
        <Team />
      </div>
    </>
  );
};

export default Home;
