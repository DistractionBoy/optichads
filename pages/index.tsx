import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "next-i18next";

import HeadMeta from "@/components/HeadMeta";
import mobile360 from "@/public/images/splash/360_x_800.webp";
import mobile375 from "@/public/images/splash/375_x_667.webp";
import mobile430 from "@/public/images/splash/430_x_932.webp";
import tablet from "@/public/images/splash/1024_x_1366.webp";
import desktop from "@/public/images/splash/1728_x_117.webp";
import ultrawide from "@/public/images/splash/3440_x_1440.webp";
import veryLarge from "@/public/images/splash/3840_x_2160.webp";
import superUltrawide from "@/public/images/splash/5120_x_1440.webp";
import RotatingTitle from "@/components/design-elements/RotatingTitle";

// export async function getStaticProps({ locale }: any) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["chads", "babes", "common"])),
//     },
//   };
// }

const Home: NextPage = () => {
  // const { t } = useTranslation();
  return (
    <>
      <Head>
        <HeadMeta />
      </Head>
      <main>
        <RotatingTitle />
        <div className="inset-0">
          <Image
            alt=""
            src={mobile360}
            fill
            className="block xxs:hidden object-cover"
          />
          <Image
            alt=""
            src={mobile375}
            fill
            className="hidden xxs:block xs:hidden object-cover"
          />
          <Image
            alt=""
            src={mobile430}
            fill
            className="hidden xs:block sm:hidden object-cover"
          />
          <Image
            alt=""
            src={tablet}
            fill
            className="hidden sm:block lg:hidden object-cover"
          />
          <Image
            alt=""
            src={desktop}
            fill
            className="hidden lg:block ultrawide:hidden object-cover"
          />
          <Image
            alt=""
            src={ultrawide}
            fill
            className="hidden ultrawide:block verylarge:hidden object-cover"
          />
          <Image
            alt=""
            src={veryLarge}
            fill
            className="hidden verylarge:block superUltrawide:hidden object-cover"
          />
          <Image
            alt=""
            src={superUltrawide}
            fill
            className="hidden superUltrawide:block object-cover"
          />
        </div>
      </main>
    </>
  );
};

export default Home;
