import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "next-i18next";

import HeadMeta from "@/components/HeadMeta";
import DarkNavbar from "@/components/Navbar";
import Team from "@/components/Team";
import NavDrawer from "@/components/NavDrawer";
import React, { useState } from "react";
import heroImg from "../public/images/hero-img.png";
import Image from "next/image";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["chads", "babes", "common"])),
    },
  };
}

const Home: NextPage = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
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
      <button type="button" className="lg:hidden bg-red-700 absolute bottom-6 left-1/2 -translate-x-1/2 items-center hover:bg-red-900
      -translate-y-1/2 p-4 rounded flex py-2 px-8 text-xl font-bold outline outline-2 font space-x-4"
      onClick={() => {
        setIsOpenDrawer(true);
      }}>
        <Image
          className="rounded-full bg-red-600"
          src={heroImg}
          alt="Workflow"
          width={38}
          height={38}
          priority
        />
        <div>
          MENU
        </div>
      </button>
    </>
  );
};

export default Home;
