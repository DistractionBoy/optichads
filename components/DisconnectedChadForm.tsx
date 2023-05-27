import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";
import Account from "./Account";

export const DisconnectedChadForm = () => {
  return (
    <div className="lg:py-24">
      <div className="inline-flex cursor-pointer items-center rounded-full bg-gray-900 p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base">
        <Link href="https://opensea.io/collection/optichads" passHref>
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
        <span className="block">ArbiBabes</span>
        <span className="block text-red-600">Whatcha got?</span>
      </h1>
      <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
        Hey Chads, you&apos;ve been working so hard at the gym lately, and we
        noticed. We cannot wait for our big debut on Arbitrum. Follow us on
        Twitter and Discord to get the latest news on mint and stay{" "}
        <strong>abreast</strong> about what is going on in the community.
      </p>
    </div>
  );
};

export default DisconnectedChadForm;
