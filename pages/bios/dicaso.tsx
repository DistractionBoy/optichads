import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeadMeta from "@/components/HeadMeta";
import SimpleInnerLayout from "@/components/SimpleInnerLayout";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { useTranslation } from "react-i18next";
import dicaso from "@/public/images/dicaso.png";

import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["dicaso"])),
    },
  };
}

const BioDicaso = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeadMeta
        title={t("dicaso:meta.0.title")}
        description={t("dicaso:meta.0.decription")}
        img={`${dicaso.src}`}
      />
      <div className="bg-[#FB0420] flex w-screen h-[86px] z-10" />
      <Navbar />
      <SimpleInnerLayout title="Bios">
        <TracingBeam className="px-0">
          <div className="prose xl:prose-xl prose-slate mx-12 lg:mx-8">
            <h2>{t("dicaso:bio.0.name")}</h2>
            <Image
              className="aspect-[3/2] lg:aspect-square w-full rounded-2xl object-cover"
              src={dicaso}
              alt=""
              priority
            />
            <p>{t("dicaso:bio.0.p1")}</p>
            <p>{t("dicaso:bio.0.p2")}</p>
            <p>{t("dicaso:bio.0.p3")}</p>
          </div>
        </TracingBeam>
      </SimpleInnerLayout>
      <BackgroundBeams />
      <Footer />
    </>
  );
};

export default BioDicaso;
