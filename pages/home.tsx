import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "next-i18next";

import HeadMeta from "@/components/HeadMeta";
import DarkNavbar from "@/components/Navbar";
import Team from "@/components/Team";
import banner from "@/public/images/banner.jpeg";
import Image from "next/image";

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
      <div
        x-data="{}"
        x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        <ul
          x-ref="logos"
          className="flex items-center justify-center md:justify-start [&_img]:max-w-none animate-infinite-scroll"
        >
          <li>
            <Image src={banner} alt="" />
          </li>
          <li>
            <Image src={banner} alt="" />
          </li>
        </ul>
      </div>

      {/* <Team /> */}
      <div className="flex flex-col h-screen items-center justify-center">
        <h1 className="text-3xl">UNDER CONSTRUCTION BRO</h1>
      </div>
    </>
  );
};

export default Home;
