import type { NextPage } from "next";
import { useRouter } from "next/router";

import HeadMeta from "@/components/HeadMeta";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RaritiesList from "@/components/rarities/RaritiesList";

const Collections: NextPage = () => {
  const { pathname } = useRouter();
  return (
    <>
      <HeadMeta
        title="Collections"
        description="Check out some of the best from our collections"
      />
      <div className="bg-[#FB0420] flex w-screen h-[86px] z-10" />
      <Navbar />
      <div className="flex flex-col justify-between">
        <RaritiesList collection="basebrigade" />
        <Footer />
      </div>
    </>
  );
};

export default Collections;
