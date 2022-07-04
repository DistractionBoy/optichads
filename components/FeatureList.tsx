import { CheckIcon } from "@heroicons/react/outline";
import React from "react";
import { classNames } from "../lib/helpers";

const features = [
  "Biceps",
  "Pecs",
  "Glutes",
  "Lats",
  "Quads",
  "Triceps",
  "Grip",
  "Smile",
  "Abs",
  "Hair",
];

export default function FeatureList() {
  return (
    <div className="rounded-lg pt-6 bg-gradient-to-b from-red-100 via-white to-white">
      {/* Pricing section with single price and feature list */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="pb-16 xl:flex xl:items-center xl:justify-between">
          <div>
            <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
              <span className="text-red-600">#Bulk-Central </span>
              <span className="text-gray-900">wants to hear from </span>
              <span className="text-red-600">you! </span>
            </h1>
            <p className="mt-5 text-xl text-gray-500">
              Stop by our Discord server and post your healthy habits for
              Whitelist entry
            </p>
          </div>
          <a
            href="https://discord.gg/optichads"
            className="mt-8 w-full bg-red-600 border border-transparent rounded-md py-3 px-5 inline-flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 sm:mt-10 sm:w-auto xl:mt-0"
          >
            OptiChads Discord
          </a>
        </div>
        <div className="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-5 xl:gap-x-8">
          <div className="md:grid-cols-1 xl:col-span-3">
            <h2 className="text-base font-semibold text-red-600 uppercase tracking-wide">
              All Muscles Accepted
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">
              What are you waiting for?
            </p>
            <p className="mt-4 text-lg text-gray-500">
              We know that sharing success stories and progress pics is one
              surefire way to inspire others that may need a small but swift
              kick in the glutes to start not sucking, and instead hit the gym
              like a normal person.
            </p>
          </div>
          <div className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2">
            <ul role="list" className="divide-y divide-gray-200">
              {features.slice(0, 5).map((feature, featureIdx) => (
                <li
                  key={feature}
                  className={classNames(
                    featureIdx === 0 ? "md:py-0 md:pb-4" : "",
                    "py-4 flex"
                  )}
                >
                  <CheckIcon
                    className="flex-shrink-0 h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="ml-3 text-base text-gray-500">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <ul
              role="list"
              className="border-t border-gray-200 divide-y divide-gray-200 md:border-t-0"
            >
              {features.slice(5).map((feature, featureIdx) => (
                <li
                  key={feature}
                  className={classNames(
                    featureIdx === 0 ? "md:border-t-0 md:py-0 md:pb-4" : "",
                    "py-4 flex"
                  )}
                >
                  <CheckIcon
                    className="flex-shrink-0 h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="ml-3 text-base text-gray-500">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}