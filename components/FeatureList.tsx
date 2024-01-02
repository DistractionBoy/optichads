import { CheckIcon } from "@heroicons/react/24/outline";
import React from "react";
import { classNames } from "../lib/helpers";
import { useTranslation } from 'next-i18next'

const features = [
  "Biceps",
  "Pecs",
  "Glutes",
  "Lats",
  "Quads",
  "Triceps",
  "Grip",
  "Smile",
  "Abs",
  "Hair",
];

export default function FeatureList() {
  const { t } = useTranslation()

  return (
    <div className="rounded-lg bg-gradient-to-b from-red-100 via-white to-white pt-6">
      {/* Pricing section with single price and feature list */}
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="pb-16 xl:flex xl:items-center xl:justify-between">
          <div>
            <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
              <span className="text-red-600">{t("chads:feature_section.0.bulk_central")}</span>
              <span className="text-gray-900">{t("chads:feature_section.0.want")}</span>
              <span className="text-red-600">{t("chads:feature_section.0.you")}</span>
            </h1>
            <p className="mt-5 text-xl text-gray-500">
              {t("chads:feature_section.0.description")}
            </p>
          </div>
          <a
            href="https://discord.gg/optichads"
            className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 py-3 px-5 text-base font-medium text-white hover:bg-red-500 sm:mt-10 sm:w-auto xl:mt-0"
          >
            OptiChads Discord
          </a>
        </div>
        <div className="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-5 xl:gap-x-8">
          <div className="md:grid-cols-1 xl:col-span-3">
            <h2 className="text-base font-semibold uppercase tracking-wide text-red-600">
              {t("chads:feature_section.0.title")}
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">
              {t("chads:feature_section.0.sub_desc1")}
            </p>
            <p className="mt-4 text-lg text-gray-500">
              {t("chads:feature_section.0.sub_desc2")}
            </p>
          </div>
          <div className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:col-span-2 xl:mt-0">
            <ul role="list" className="divide-y divide-gray-200">
              {features.slice(0, 5).map((feature, featureIdx) => (
                <li
                  key={feature}
                  className={classNames(
                    featureIdx === 0 ? "md:py-0 md:pb-4" : "",
                    "flex py-4"
                  )}
                >
                  <CheckIcon
                    className="h-6 w-6 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="ml-3 text-base text-gray-500">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <ul
              role="list"
              className="divide-y divide-gray-200 border-t border-gray-200 md:border-t-0"
            >
              {features.slice(5).map((feature, featureIdx) => (
                <li
                  key={feature}
                  className={classNames(
                    featureIdx === 0 ? "md:border-t-0 md:py-0 md:pb-4" : "",
                    "flex py-4"
                  )}
                >
                  <CheckIcon
                    className="h-6 w-6 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="ml-3 text-base text-gray-500">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
