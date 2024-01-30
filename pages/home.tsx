import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
// import { useTranslation } from "next-i18next";

import HeadMeta from "@/components/HeadMeta";
import DarkNavbar from "@/components/Navbar";
import Team from "@/components/Team";
import CollectionsCarousel from "@/components/home/CollectionsCarousel";
import Head from "next/head";
import { useState } from "react";
import NavDrawer from "@/components/NavDrawer";
import heroImg from "../public/images/hero-img.png";

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
      <Head>
        <HeadMeta />
      </Head>

      <DarkNavbar setIsOpen={setIsOpenDrawer} />
      <NavDrawer isOpen={isOpenDrawer} setIsOpen={setIsOpenDrawer}></NavDrawer>
      <button
        type="button"
        className="lg:hidden bg-red-700 absolute bottom-6 left-1/2 -translate-x-1/2 items-center hover:bg-red-900
      -translate-y-1/2 p-4 rounded flex py-2 px-8 text-xl font-bold outline outline-2 font space-x-4"
        onClick={() => {
          setIsOpenDrawer(true);
        }}
      >
        <Image
          className="rounded-full bg-red-600"
          src={heroImg}
          alt="Workflow"
          width={38}
          height={38}
          priority
        />
        <div>MENU</div>
      </button>

      <CollectionsCarousel />

      <div className="container bg-slate-100 rounded-sm shadow-xl">
        <Team />
      </div>
    </>
  );
};

export default Home;
