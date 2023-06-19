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

import Link from "next/link";

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
];
const bg = gymPics[Math.floor(Math.random() * gymPics.length)];

export default function BabesLicensing() {
  return (
    <div className="from-primary-transparent to-primary-transparent relative -mx-5 -mt-6 rounded-lg bg-hotpink-50 bg-gradient-to-br via-transparent sm:-mx-6 lg:pt-8 lg:pb-14">
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
            <h1 className="text-center text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-6xl">
              <span className="block text-white">Commercial</span>
              <span className="block text-white">Rights</span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-2xl">
              Arbibabe holders are granted the same commercial rights as Yuga
              Labs provided for Bored Ape Yacht Club. The Arbibabe license is{" "}
              <Link
                href="/licenseterms"
                className="text-hotpink-300 transition-all hover:text-hotpink-200"
              >
                here.
              </Link>
            </p>
            <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
              <div className="space-y-4 sm:mx-auto sm:space-y-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
