import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "next-i18next";

import HeadMeta from "@/components/HeadMeta";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import CollectionsCarousel from "@/components/home/CollectionsCarousel";
import Head from "next/head";
import WelcomeChad from "@/components/home/WelcomeChad";
import BaseBrigadeIntro from "@/components/home/BaseBrigadeIntro";
import useSWR from "swr";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["chads", "babes", "common"])),
    },
  };
}

const Home: NextPage = () => {
  // const { t } = useTranslation();
  // const { data, error } = useSWR(
  //   `/api/alchemy/getContractMetadata?contractAddress=${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}&chain=opt`
  // );
  return (
    <>
      <Head>
        <HeadMeta />
      </Head>
      <Navbar />

      <WelcomeChad />
      <BaseBrigadeIntro />
      <CollectionsCarousel />

      <div className="container bg-slate-100 rounded-sm shadow-xl">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24 prose">
          <h2>Please bear with us</h2>
          <p>
            We are working around the clock to bring this site back up, but
            better than before, with more ways to engage.
          </p>
        </div>

        <Team />
      </div>
    </>
  );
};

export default Home;
