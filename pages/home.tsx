import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "next-i18next";

import HeadMeta from "@/components/HeadMeta";
import DarkNavbar from "@/components/Navbar";
import Team from "@/components/Team";
import ScrollingBanner from "@/components/home/ScrollingBanner";

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
      <ScrollingBanner />

      {/* <Team /> */}
      <div className="flex flex-col h-screen items-center justify-center">
        <h1 className="text-3xl">UNDER CONSTRUCTION BRO</h1>
      </div>
    </>
  );
};

export default Home;
