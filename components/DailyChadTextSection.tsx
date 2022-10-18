import { ChevronRightIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";

import quixLogoWord from "../public/images/quix_white.png";
import bluesweepLogo from "../public/images/bluesweep-logo.png";
import mintplexLogo from "../public/images/mintplex-logo.png";

export default function DailyChadTextSection() {
  return (
    <div>
      <a
        href="#username"
        className="inline-flex items-center rounded-full bg-gray-900 p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
      >
        <span className="rounded-full bg-red-600 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
          OptiChad Giveaways
        </span>
        <span className="ml-4 text-sm">Fill out the form</span>
        <ChevronRightIcon
          className="ml-2 h-5 w-5 text-gray-500"
          aria-hidden="true"
        />
      </a>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
        Want to become a Chad and earn $OP?
      </h1>
      <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
        Whether you&apos;re new to crypto or new to Optimism (or just to
        OptiChads), we want you to be able to earn $OP just like our current
        holders. Fill out the form bro.
      </p>
      <p className="mt-8 text-base font-semibold text-white sm:mt-10">
        Partnered With
      </p>
      <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
        <div className="flex flex-wrap items-start justify-between">
          <div className="flex justify-center px-1">
            <a
              href="https://qx.app/collection/optichads"
              className="flex items-center"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                alt="quix logo"
                src={quixLogoWord}
                layout="intrinsic"
                height={48}
                width={100}
              />
            </a>
          </div>
          <div className="flex items-center justify-center px-1 pt-2">
            <a
              href="https://mintplex.xyz/"
              className="flex items-center"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                alt="Mintplex logo"
                src={mintplexLogo}
                layout="intrinsic"
                height={36}
                width={155}
              />
            </a>
          </div>
          <div className="flex justify-center px-1">
            <a
              href="https://www.bluesweep.xyz/collections/optichads"
              className="flex items-center"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                alt="Bluesweep logo"
                src={bluesweepLogo}
                layout="intrinsic"
                height={55}
                width={178}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
