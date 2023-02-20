import React from "react";
import Image from "next/image";

import chadGymOne from "../public/images/chad-gym-1.jpg";
import chadGymTwo from "../public/images/chad-gym-2.jpeg";
import chadGymThree from "../public/images/chad-gym-3.jpeg";
import chadGymFour from "../public/images/chad-gym-4.jpeg";
import chadGymFive from "../public/images/chad-gym-5.jpeg";
import chadGymSix from "../public/images/chad-gym-6.jpeg";

import Link from "next/link";
import { getBaseUrl } from "../lib/helpers";
import useSWR from "swr";

const gymPics = [
  chadGymOne,
  chadGymTwo,
  chadGymThree,
  chadGymFour,
  chadGymFive,
  chadGymSix,
];
const bg = gymPics[Math.floor(Math.random() * gymPics.length)];

export default function BgImageColorHeroSection() {
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}/api/quotes/health/`;
  const { data } = useSWR(url);

  return data ? (
    <div className="relative -mx-5 -mt-6 mb-12 rounded-lg bg-gray-900 bg-gradient-to-bl from-[#da10109e] via-transparent to-[#da10109e] sm:-mx-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative shadow-xl sm:overflow-hidden sm:rounded-lg">
          <div className="absolute inset-0 bg-gray-900">
            <Image
              className="h-full w-full object-cover"
              src={bg}
              alt="happy bunnies in jackets and winter clothes making a snowman"
            />
            <div className="absolute inset-0 bg-red-700 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="space-y-4 text-center text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
              <span className="block text-white">Daily Health Quote</span>
              <span className="block text-red-200">{data.name}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg px-3 text-center text-2xl text-red-200 sm:max-w-xl">
              {data.quote}
            </p>
            <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
              <div className="space-y-4 sm:mx-auto sm:space-y-0">
                <Link href="https://opensea.io/collection/optichads" passHref>
                  <div className="flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-red-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8">
                    Become a Chad!
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="relative -mx-5 -mt-6 rounded-lg bg-gray-900 bg-gradient-to-bl from-[#da10109e] via-transparent to-[#da10109e] sm:-mx-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative shadow-xl sm:overflow-hidden sm:rounded-lg">
          <div className="absolute inset-0 bg-gray-900">
            <Image
              className="h-full w-full object-cover"
              src={bg}
              alt="happy bunnies in jackets and winter clothes making a snowman"
            />
            <div className="absolute inset-0 bg-red-700 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
              <span className="block text-white">Daily Health Quote</span>
              <span className="block text-red-200">be inspired.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-center text-2xl text-red-200 sm:max-w-2xl">
              The Author
            </p>
            <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
              <div className="space-y-4 sm:mx-auto sm:space-y-0">
                <Link href="https://opensea.io/collection/optichads" passHref>
                  <div className="flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-red-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8">
                    Become a Chad!
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
