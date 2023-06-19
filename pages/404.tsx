import React from "react";
import Image from "next/image";
import Link from "next/link";

import AlleyCity from "/public/images/alley-city-bg.jpg";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export async function getStaticProps({locale}:any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['chads', 'babes', 'common']))
    }
  }
}

export default function FourOhFour() {
  const { t } = useTranslation()

  return (
    <>
      <main className="min-h-full">
        <Image src={AlleyCity} alt="background" />
        <div className="relative bottom-0 right-0 mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 sm:py-24 lg:absolute lg:px-8 lg:pt-48 lg:pb-12">
          <p className="pb-2 text-sm font-semibold uppercase tracking-wide text-white">
            404 error
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {t("common:404.0.title")}
          </h1>
          <p className="mt-2 pb-4 text-lg font-medium text-white">
            {t("common:404.0.description")}
          </p>
          <div className="mt-6">
            <Link href="/" passHref>
              <span className="inline-flex cursor-pointer items-center rounded-md border border-transparent bg-white bg-opacity-75 px-4 py-2 text-sm font-medium text-gray-800 text-opacity-75 sm:bg-opacity-25 sm:text-white sm:hover:bg-opacity-50">
                {t("common:404.0.back")}
              </span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
