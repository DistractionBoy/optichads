import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function FAQs() {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t("common:faq_section.0.question1"),
      answer: t("common:faq_section.0.answer1"),
    },
    {
      question: t("common:faq_section.0.question2"),
      answer: t("common:faq_section.0.answer2"),
    },
    {
      question: t("common:faq_section.0.question3"),
      answer: t("common:faq_section.0.answer3"),
    },
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              FAQ&apos;s
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              {t("common:faq_section.0.description")}{" "}
              <Link
                href="/discord"
                className="font-medium text-red-500 hover:text-red-700"
              >
                Discord
              </Link>{" "}
              server.
            </p>
          </div>
          <div className="mt-12 lg:col-span-2 lg:mt-0">
            <dl className="space-y-12">
              {faqs &&
                faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="text-lg font-medium leading-6 text-gray-900">
                      {faq.question}
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
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
