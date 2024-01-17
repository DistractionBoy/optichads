import type { NextPage } from "next";

import HeadMeta from "@/components/HeadMeta";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["chads", "babes", "common"])),
    },
  };
}
const LicenseTerms: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeadMeta />
      <div className="relative text-black">
        <div className="bg-hotpink-300 pt-10 sm:pt-16 lg:pt-8 lg:pb-14">
          <div className="mx-auto max-w-7xl lg:px-8">
            <h1 className="pb-6 lg:text-2xl lg:font-bold lg:italic">
              {t("babes:license.0.term_conditions")}
            </h1>
            <p>
              {t("babes:license.0.description1")}
            </p>
            <br />
            <p className="pb-6">
              {t("babes:license.0.description2")}
            </p>
            <h1 className="pb-6 lg:text-2xl lg:font-bold lg:italic">{t("babes:license.0.ownership")}</h1>
            <p>
              {t("babes:license.0.description3")}
            </p>
            <br />
            <p className="pb-6">
              {t("babes:license.0.description4")}
            </p>
            <br />
            <p>
              {t("babes:license.0.description5")}
            </p>
          </div>
        </div>
      </div>
    </>
  )
};

export default LicenseTerms;
