import React from "react";
import Image from "next/image";

import babeImg from "../public/images/babe-t.png";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/outline";
import BabeTotalSupply from "./BabeTotalSupply";
import { useTranslation } from "next-i18next";

export default function BabeHeroSectionClouds() {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden">
      <main>
        <div className="from-primary-transparent to-primary-transparent bg-hotpink-50 bg-gradient-to-br via-transparent pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:my-16 lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="lg-justify-center mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                <div className="lg:py-24">
                  <div className="inline-flex cursor-pointer items-center rounded-full bg-gray-900 p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base">
                    <Link
                      href="https://apetimism.com/launchpad/arbibabes"
                      passHref
                    >
                      <span className="flex items-center">
                        <span className="rounded-full bg-primary px-3 py-0.5 text-xs font-semibold uppercase leading-5 tracking-wide text-white">
                          {t("babes:hero_section.0.minting")}
                        </span>
                        <span className="ml-4 text-sm">
                          {t("babes:hero_section.0.go_to")}
                        </span>
                        <ChevronRightIcon
                          className="ml-2 h-5 w-5 text-hotpink-100"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </div>

                  <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">ArbiBabes</span>
                  </h1>
                  <p className="prose mt-3 text-base font-light text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    {t("babes:hero_section.0.description")}
                  </p>
                  <BabeTotalSupply />
                </div>
              </div>
              <div className="mt-12 -mb-16 sm:-mb-28 lg:relative lg:m-0">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  <Image
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={babeImg}
                    width={660}
                    height={660}
                    priority
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
