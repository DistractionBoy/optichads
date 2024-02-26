import type { NextPage } from "next";

import HeadMeta from "@/components/HeadMeta";
import Navbar from "@/components/Navbar";

import Head from "next/head";
import CollectionsCarouselItemController from "@/components/collections/CollectionsCarouselItemController";

import Footer from "@/components/Footer";


const Collections: NextPage = () => {
  return (
    <>
      <Head>
        <HeadMeta />
      </Head>
      <Navbar />

      <CollectionsCarouselItemController />
      
      <Footer />
    </>
  );
};

export default Collections;
