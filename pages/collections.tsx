import type { NextPage } from "next";

import HeadMeta from "@/components/HeadMeta";
import Navbar from "@/components/Navbar";

import CollectionsCategory from "@/components/collections/CollectionsCategory";

import Footer from "@/components/Footer";
import CollectionsCarousel from "@/components/home/CollectionsCarousel";

const Collections: NextPage = () => {
  return (
    <>
      <HeadMeta
        title="Collections"
        description="Check out some of the best from our collections"
      />
      <div className="bg-[#FB0420] flex w-screen h-[86px] z-10" />
      <Navbar />
      <div className="flex flex-col justify-between">
        <CollectionsCarousel />
        <div className="bg-black flex w-screen h-px" />

        <Footer />
      </div>
    </>
  );
};

export default Collections;
