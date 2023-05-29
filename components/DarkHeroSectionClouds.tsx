import React from "react";
import Image from "next/image";

import superheroImg from "../public/images/chad-t.png";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/outline";

export default function DarkHeroSectionClouds() {
  return (
    <div className="relative overflow-hidden">
      <main>
        <div className="bg-gray-900 bg-gradient-to-br from-[#da10109e] via-transparent to-[#da10109e] pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                <div className="lg:py-24">
                  <div className="inline-flex cursor-pointer items-center rounded-full bg-gray-900 p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base">
                    <Link
                      href="https://opensea.io/collection/optichads"
                      passHref
                    >
                      <span className="flex items-center">
                        <span className="rounded-full bg-red-600 px-3 py-0.5 text-xs font-semibold uppercase leading-5 tracking-wide text-white">
                          Minting Closed
                        </span>
                        <span className="ml-4 text-sm">View Cheap Chads</span>
                        <ChevronRightIcon
                          className="ml-2 h-5 w-5 text-gray-500"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </div>

                  <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">OptiChads</span>
                    <span className="block text-red-600">&amp; Arbibabes</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Our first collection (OptiChads) was such a huge success
                    that we are launching another collection, this time on
                    Arbitrum. ArbiBabes will donate large portions of proceeds
                    to the Malala fund, to help women in the Middle East in
                    education. For more, go to the &ldquo;babes&rdquo; page.
                  </p>
                </div>
              </div>
              <div className="mt-12 -mb-16 sm:-mb-28 lg:relative lg:m-0">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  <Image
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={superheroImg}
                    width={660}
                    height={660}
                    layout="intrinsic"
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
