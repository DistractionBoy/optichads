import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";
import Account from "./Account";

export const DisconnectedChadForm = () => {
  return (
    <div className="lg:py-24">
      <div className="inline-flex cursor-pointer items-center rounded-full bg-gray-900 p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base">
        <Link href="https://qx.app/collection/optichads" passHref>
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
        <span className="block text-red-600">Sign in, bro?</span>
      </h1>
      <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
        Bro, you are not going to be able to enter the gym without signing in...
        I mean connecting your wallet. You can still take a tour of the gym, but
        if you wanna get those sweet gains I just can&apos;t let you in without
        committing at least a click of a button.
      </p>
      <div className="mt-10 sm:mt-12">
        <div className="sm:flex sm:justify-center lg:justify-start">
          <div className="mt-3 sm:mt-0">
            <div className="block w-full rounded-md bg-red-600 py-3 px-4 font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-900">
              <Account />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisconnectedChadForm;
