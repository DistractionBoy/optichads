import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "next-i18next";

import HeadMeta from "@/components/HeadMeta";
import DarkNavbar from "@/components/Navbar";
import Team from "@/components/Team";
import ScrollingBanner from "@/components/home/ScrollingBanner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

const Home: NextPage = () => {
  // const { t } = useTranslation();
  return (
    <>
      <HeadMeta />
      <DarkNavbar />
      <Carousel>
        <CarouselContent className="flex -ml-4">
          <CarouselItem className="overflow-hidden pl-4 basis-1/3">
            <ScrollingBanner src={chadBanner} />
          </CarouselItem>
          <CarouselItem className="overflow-hidden pl-4 basis-1/3">
            <ScrollingBanner src={babeBanner} />
          </CarouselItem>
          <CarouselItem className="overflow-hidden pl-4 basis-1/3">
            <ScrollingBanner src={brigadeBanner} />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <div className="container bg-slate-100 rounded-sm shadow-xl">
        <Team />
      </div>
    </>
  );
};

export default Home;
