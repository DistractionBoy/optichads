import React from "react";
import Image from "next/image";

import babeGymOne from "../public/images/babe-gym-1.jpeg";
import babeGymTwo from "../public/images/babe-gym-2.jpeg";
import babeGymThree from "../public/images/babe-gym-3.jpeg";
import babeGymFour from "../public/images/babe-gym-4.jpeg";
import babeGymFive from "../public/images/babe-gym-5.jpeg";
import babeGymSix from "../public/images/babe-gym-6.jpeg";
import babeGymSeven from "../public/images/babe-gym-7.jpeg";
import babeGymEight from "../public/images/babe-gym-8.jpeg";
import babeGymNine from "../public/images/babe-gym-9.jpeg";
import babeGymTen from "../public/images/babe-gym-10.jpeg";
import babeGymEleven from "../public/images/babe-gym-11.jpeg";
import babeGymTwelve from "../public/images/babe-gym-12.jpeg";

import Link from "next/link";
import { getBaseUrl } from "../lib/helpers";
import useSWR from "swr";

const gymPics = [
  babeGymOne,
  babeGymTwo,
  babeGymThree,
  babeGymFour,
  babeGymFive,
  babeGymSix,
  babeGymSeven,
  babeGymEight,
  babeGymNine,
  babeGymTen,
  babeGymEleven,
  babeGymTwelve,
];

export default function BgImageColorBabeSection() {
  const bg = gymPics[Math.floor(Math.random() * gymPics.length)];
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}/api/quotes/health/`;
  const { data } = useSWR(url);

  return data ? (
    <div className="from-primary-transparent to-primary-transparent relative -mx-5 -mt-6 mb-12 rounded-lg bg-hotpink-50 bg-gradient-to-tr via-transparent sm:-mx-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative shadow-xl sm:overflow-hidden sm:rounded-lg">
          <div className="absolute inset-0 bg-gray-900">
            <Image
              className="h-full w-full object-cover"
              src={bg}
              alt="women are awesome when they are working out"
            />
            <div className="absolute inset-0 bg-pink-500 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="space-y-4 text-center text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
              <span className="block text-white">Daily Health Quote</span>
              <span className="block text-hotpink-100">{data.name}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg px-3 text-center text-2xl text-white sm:max-w-xl">
              {data.quote}
            </p>
            <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
              <div className="space-y-4 sm:mx-auto sm:space-y-0">
                <Link href="https://opensea.io/collection/optichads" passHref>
                  <div className="flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-primary bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-hotpink-300 hover:text-black hover:opacity-75 sm:px-8">
                    Become a Babe!
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="from-primary-transparent to-primary-transparent relative -mx-5 -mt-6 rounded-lg bg-hotpink-50 bg-gradient-to-tr via-transparent sm:-mx-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative shadow-xl sm:overflow-hidden sm:rounded-lg">
          <div className="absolute inset-0 bg-gray-900">
            <Image
              className="h-full w-full object-cover"
              src={bg}
              alt="happy bunnies in jackets and winter clothes making a snowman"
            />
            <div className="absolute inset-0 bg-yellow-200 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
              <span className="block text-white">Daily Health Quote</span>
              <span className="block text-pink-500">be inspired.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-center text-2xl text-pink-300 sm:max-w-2xl">
              The Author
            </p>
            <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
              <div className="space-y-4 sm:mx-auto sm:space-y-0">
                <Link href="https://opensea.io/collection/optichads" passHref>
                  <div className="flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-primary bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-hotpink-300 hover:text-black hover:opacity-75 sm:px-8">
                    Become a Babe!
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
