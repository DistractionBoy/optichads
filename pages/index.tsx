import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "next-i18next";

import HeadMeta from "@/components/HeadMeta";
import DarkNavbar from "@/components/Navbar";
import Team from "@/components/Team";
import NavDrawer from "@/components/NavDrawer";
import React, { useState } from "react";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["chads", "babes", "common"])),
    },
  };
}

const Home: NextPage = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  // const { t } = useTranslation();
  return (
    <>
      <HeadMeta />
      <DarkNavbar setIsOpen={setIsOpenDrawer}/>
      {/* <Team /> */}
      <div className="flex flex-col h-screen items-center justify-center">
        <h1 className="text-3xl">UNDER CONSTRUCTION BRO</h1>
      </div>
      <NavDrawer isOpen={isOpenDrawer} setIsOpen={setIsOpenDrawer}>
      </NavDrawer>
    </>
  );
};

export default Home;
