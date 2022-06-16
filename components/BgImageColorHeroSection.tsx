import React from "react";
import Image from "next/image";

import bg from "../public/images/castle.webp";
import Link from "next/link";

export default function BgImageColorHeroSection() {
  return (
    <div className="relative -mx-5 -my-6 sm:-mx-6 bg-gray-900 rounded-lg">
      <div className="max-w-7xl mx-auto">
        <div className="relative shadow-xl sm:rounded-lg sm:overflow-hidden">
          <div className="absolute inset-0 bg-gray-900">
            <Image
              className="h-full w-full object-cover"
              src={bg}
              alt="happy bunnies in jackets and winter clothes making a snowman"
            />
            <div className="absolute inset-0 bg-red-700 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">Welcome traveler</span>
              <span className="block text-red-200">take a seat.</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-center text-2xl text-red-200 sm:max-w-2xl">
              The stories contained within this section of the Library of Bran
              are not for the faint of heart. On occasion a historian or a
              drunkard seeking shelter have been known to get lost in its pages.
              You find yourself drawn to a dark brown book at knee height in the
              corner. As you draw it back towards you its cover is soft yet
              rigid, like an ember that has lost its flame. As you open it, you
              feel a sharp cold wind rise up your chest and pass around your
              neck. Should you read it?
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <Link href="/stories" passHref>
                  <div className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-red-700 bg-white hover:bg-red-50 sm:px-8 cursor-pointer">
                    Read on without hesitation
                  </div>
                </Link>
                <Link href="/guild" passHref>
                  <div className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8 cursor-pointer">
                    Nay, Meet the Guild
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
