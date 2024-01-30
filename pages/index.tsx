import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "next-i18next";

import HeadMeta from "@/components/HeadMeta";
import RotatingTitle from "@/components/splash/RotatingTitle";
import SplashBG from "@/components/splash/SplashBG";
import WelcomeCard from "@/components/splash/WelcomeCard";

// export async function getStaticProps({ locale }: any) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["chads", "babes", "common"])),
//     },
//   };
// }

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <HeadMeta />
      </Head>
      <main>
        <SplashBG />
        <RotatingTitle />
        <WelcomeCard />
      </main>
    </>
  );
};

export default Home;
