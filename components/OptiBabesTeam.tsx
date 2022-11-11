import React from "react";

import babeOne from "/public/images/optibabe421.png";
import babeTwo from "/public/images/optibabes-hentaimouth.png";
import babeThree from "/public/images/demonbabe.png";
import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    question: "Wen OptiBabes?",
    answer: `Our second collection, OptiBabes, is currently under construction and 
              Livic, the famous Pudgy Penguins artist has joined us as a consultant to help
              us portray a balanced and strong image for our beloved babes. We are taking 
              great care in our designs and will not rush the process. It will be a smaller 
              collection however, and things will run smoothly so we are hoping to launch soon.`,
  },
  {
    question: "What will you donate?",
    answer: `We will be donating 50% of all mint proceeds to the Malala Fund. The Malala Fund 
             "is working for a world where every girl can learn and lead". We will be donating as 
             much as we can to further this necessary cause.`,
  },
  {
    question: "How to get on the Whitelist (Allow List)?",
    answer: `Easy bro, you just gotta hold at least 5 Chads to mint an OptiBabe. Keep checking 
             in because our exact Tokenomics will not be finalized until just a little before 
             launch.`,
  },
  {
    question: "How many babes will there be?",
    answer: `Right now we're thinking a total supply of 3,333 and allowing each person 
            to mint 1 babe for every 5 Chads they own.`,
  },
];

const babes = [
  {
    title: "Shawty",
    subtitle: "Fun and Giggly",
    imageSrc: babeOne,
  },
  {
    title: "Maximum Babe",
    subtitle: "Volumptuous Traits",
    imageSrc: babeTwo,
  },
  {
    title: "Too Hot",
    subtitle: "You want it",
    imageSrc: babeThree,
  },
];

export default function OptiBabesTeam() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              OptiBabes
            </h2>
            <p className="text-xl text-gray-500">
              50% of all proceeds to the{" "}
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://malala.org/donate/cryptocurrency"
                passHref
              >
                <span className="cursor-pointer text-red-700">Malala</span>
              </Link>{" "}
              Fund
            </p>
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
                    layout="responsive"
                  />
                  <div className="space-y-2">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>{babe.title}</h3>
                      <p className="text-red-700">{babe.subtitle}</p>
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
            <h2 className="text-3xl font-extrabold text-gray-900">OptiBabes</h2>
            <p className="mt-4 text-lg text-gray-500">
              Another epic collection to add to the ranks
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
