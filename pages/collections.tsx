import type { NextPage } from "next";

import HeadMeta from "@/components/HeadMeta";
import Navbar from "@/components/Navbar";

import Head from "next/head";
import CollectionsCategory from "@/components/collections/CollectionsCategory";

import Footer from "@/components/Footer";

const Collections: NextPage = () => {
  return (
    <>
      <Head>
        <HeadMeta />
      </Head>
      <Navbar />

      <CollectionsCategory />
      
      <Footer />
    </>
  );
};

export default Collections;
