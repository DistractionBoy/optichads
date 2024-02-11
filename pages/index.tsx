import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "next-i18next";

import HeadMeta from "@/components/HeadMeta";
import RotatingTitle from "@/components/splash/RotatingTitle";
import SplashBG from "@/components/splash/SplashBG";
import WelcomeCard from "@/components/splash/WelcomeCard";
import chadimationFrame from "@/public/images/chadimation-first-frame.png";
import brigadiFrame from "@/public/images/brigader-first-frame.png";
import Image from "next/image";

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
        <Image src={chadimationFrame} alt="" width={30} height={30} />
        <Image src={brigadiFrame} alt="" width={30} height={30} />
      </main>
    </>
  );
};

export default Home;
