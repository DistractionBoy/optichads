import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Image, { StaticImageData } from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "next-i18next";
// import useSWR from "swr";

import HeadMeta from "@/components/HeadMeta";
import Navbar from "@/components/Navbar";
import chadBanner from "@/public/images/banners/chad-banner.jpeg";
import babeBanner from "@/public/images/banners/babe-banner.jpeg";
import brigadeBanner from "@/public/images/banners/brigade-banner.jpeg";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["chads", "babes", "common"])),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      "/collections/optichads",
      { params: { slug: "optichads" } },
      "/collections/basebrigade",
      { params: { slug: "basebrigade" } },
      "/collections/arbibabes",
      { params: { slug: "arbibabes" } },
    ],
    fallback: true,
  };
}

const pickPic = (
  slug: "optichads" | "basebrigade" | "arbibabes"
): StaticImageData =>
  slug === "optichads"
    ? chadBanner
    : slug === "basebrigade"
      ? brigadeBanner
      : babeBanner;

const Home: NextPage = () => {
  // const { t } = useTranslation();
  const {
    query: { slug },
  } = useRouter();
  // const { data, error } = useSWR(
  //   `/api/alchemy/getContractMetadata?contractAddress=${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}&chain=opt`
  // );
  return (
    <>
      <Head>
        <HeadMeta />
      </Head>
      <Navbar />

      <Image
        priority
        src={pickPic(slug as "optichads" | "basebrigade" | "arbibabes")}
        alt=""
      />

      <div className="container bg-slate-100 rounded-sm shadow-xl">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24 prose"></div>
      </div>
    </>
  );
};

export default Home;
