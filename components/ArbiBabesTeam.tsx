import React from "react";

import babeOne from "/public/images/athena.png";
import babeTwo from "/public/images/hands.png";
import babeThree from "/public/images/ready.png";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function ArbiBabesTeam() {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t("chads:babes_team.0.question1"),
      answer: t("chads:babes_team.0.answer1"),
    },
    {
      question: t("chads:babes_team.0.question2"),
      answer: t("chads:babes_team.0.answer2"),
    },
    {
      question: t("chads:babes_team.0.question3"),
      answer: t("chads:babes_team.0.answer3"),
    },
  ];

  const babes = [
    {
      title: "Shawty",
      subtitle: t("chads:babes_team.0.subtitle1"),
      imageSrc: babeOne,
    },
    {
      title: "Maximum Babe",
      subtitle: t("chads:babes_team.0.subtitle2"),
      imageSrc: babeTwo,
    },
    {
      title: "Too Hot",
      subtitle: t("chads:babes_team.0.subtitle3"),
      imageSrc: babeThree,
    },
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              ArbiBabes
            </h2>
          </div>
          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3"
          >
            {babes.map((babe) => (
              <li key={babe.title}>
                <div className="space-y-6">
                  <Image
                    className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
                    src={babe.imageSrc}
                    width={500}
                    height={500}
                    alt=""
                    priority
                  />
                  <div className="space-y-2">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>{babe.title}</h3>
                      <p className="text-red-500">{babe.subtitle}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-12 text-center sm:px-6 lg:px-8 lg:pb-24">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="text-left">
            <h2 className="text-3xl font-extrabold text-gray-900">ArbiBabes</h2>
            <p className="mt-4 text-lg text-gray-500">
              {t("chads:babes_team.0.main_title")}
            </p>
          </div>
          <div className="mt-12 lg:col-span-2 lg:mt-0">
            <dl className="space-y-12">
              {faqs &&
                faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="text-left text-lg font-medium leading-6 text-gray-900">
                      {faq.question}
                    </dt>
                    <dd className="mt-2 text-left text-base text-gray-500">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
