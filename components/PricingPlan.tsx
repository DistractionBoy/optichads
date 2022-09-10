/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import { CheckIcon } from "@heroicons/react/outline";
import Link from "next/link";

import murderChad from "../public/images/murderChad.jpg";
import eee from "../public/images/eee.png";
import pizza from "../public/images/pizza.png";
import Image from "next/image";

const citizenFeatures = ["Over 150 accessories and traits"];
const pbunnyFeatures = ["CCO License degree of Freedom"];
const bunnyFeatures = [
  "Realistic shading and contour",
  "Chadtastic smile level of detail",
  "Thousands of combinations",
];

export default function PricingPlan() {
  return (
    <div className="bg-red-800 rounded-lg">
      <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
        <div className="text-center">
          <h2 className="text-lg leading-6 font-semibold text-white uppercase tracking-wider">
            Proceeds
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-50 sm:text-4xl lg:text-5xl">
            50% to public goods
          </p>
          <p className="mt-3 max-w-4xl mx-auto text-xl text-white sm:mt-5 sm:text-xl">
            OptiChads comprises of some of the most hardcore Optimism fans from
            other projects who wanted to give something unique back to the
            community and provide a large revenue stream to{" "}
            <a
              className="underline hover:text-red-100"
              href="https://medium.com/ethereum-optimism/retroactive-public-goods-funding-33c9b7d00f0c"
            >
              retroactive public goods
            </a>{" "}
            so we are starting with a free mint, and continuing with half of
            secondary sales going towards that purpose.
          </p>
        </div>
      </div>

      <div className="mt-16 bg-gradient-to-b from-white via-white to-red-100 pb-12 lg:mt-20 lg:pb-20">
        <div className="relative z-0">
          <div className="absolute inset-0 h-5/6 bg-red-800 lg:h-2/3" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
              <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                  <div className="flex-1 flex flex-col">
                    <div className="bg-white px-6 py-10">
                      <div>
                        <h3
                          className="text-center text-2xl font-medium text-gray-900"
                          id="tier-hobby"
                        >
                          Decentralized
                        </h3>
                      </div>
                    </div>
                    <Image
                      src={murderChad}
                      alt="a chad with a huge brain, bro"
                      width={400}
                      height={400}
                      layout="responsive"
                    />
                    <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {pbunnyFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="flex-shrink-0 h-6 w-6 text-green-500"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                <div className="relative z-10 rounded-lg shadow-xl">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-lg border-2 border-red-400"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 top-0 transform translate-y-px z-20">
                    <div className="flex justify-center transform -translate-y-1/2">
                      <span className="inline-flex rounded-full bg-red-600 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                        MAXIMUM CHAD
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-t-lg px-6 py-10">
                    <div>
                      <h3
                        className="text-center text-3xl font-semibold text-gray-900 sm:-mx-6"
                        id="tier-growth"
                      >
                        Health
                      </h3>
                    </div>
                  </div>
                  <div className="rounded-t-lg mx-[2px]">
                    <Image
                      src={eee}
                      alt="a chad with a pizza hanging from his mouth"
                      width={400}
                      height={400}
                      layout="responsive"
                    />
                  </div>
                  <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                    <ul role="list" className="space-y-4">
                      {bunnyFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon
                              className="flex-shrink-0 h-6 w-6 text-green-500"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10">
                      <div className="rounded-lg shadow-md">
                        <Link
                          href="/sales"
                          passHref
                          aria-describedby="tier-growth"
                        >
                          <div className="cursor-pointer block w-full text-center rounded-lg border border-transparent bg-red-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-red-700">
                            View Top Chads
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                  <div className="flex-1 flex flex-col">
                    <div className="bg-white px-6 py-10">
                      <div>
                        <h3
                          className="text-center text-2xl font-medium text-gray-900"
                          id="tier-scale"
                        >
                          Wellness
                        </h3>
                      </div>
                    </div>
                    <Image
                      src={pizza}
                      alt="a chad with a huge brain, bro"
                      width={400}
                      height={400}
                      layout="responsive"
                    />
                    <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {citizenFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="flex-shrink-0 h-6 w-6 text-green-500"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
