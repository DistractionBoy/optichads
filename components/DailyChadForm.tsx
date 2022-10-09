import React from "react";
import Script from "next/script";

export default function DailyChadForm() {
  return (
    <>
      <Script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0"
        nonce="QsQXDgfj"
      ></Script>
      <div className="bg-white sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg">
        <div className="px-4 py-8 sm:px-10">
          <div>
            <p className="text-sm font-medium text-gray-700">Share this on:</p>

            {/* <div className="mt-1 grid grid-cols-3 gap-3"> */}
            <div className="mt-1 grid grid-cols-2 gap-3">
              <div>
                <a
                  href={`https://twitter.com/intent/tweet?text=I%20just%20signed%20up%20to%20get%20my%20FREE%20@OptiChads%20at%20https://optichads.art/quests`}
                  className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                >
                  <span className="sr-only">Share on Twitter</span>
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>

              <div data-href="https://optichads.art/quests">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Foptichads.art%2Fquests&amp;src=sdkpreparse"
                  className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                >
                  <span className="sr-only">Share on Facebook</span>
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>

              {/* <div>
              <a
                href="#"
                className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
              >
                <span className="sr-only">Share on Reddit</span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="none"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z" />
                  <path d="M12 8l1 -5l6 1" />
                  <circle cx="19" cy="4" r="1" />
                  <circle cx="9" cy="13" r=".5" fill="currentColor" />
                  <circle cx="15" cy="13" r=".5" fill="currentColor" />
                  <path d="M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5" />
                </svg>
              </a>
            </div> */}
            </div>
          </div>

          <div className="relative mt-6">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">And then</span>
            </div>
          </div>

          <div className="mt-6">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="username" className="sr-only">
                  Twitter / Discord name
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  placeholder="Twitter or Discord username"
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="address" className="sr-only">
                  Wallet Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  autoComplete="address"
                  placeholder="Wallet Address"
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="how-chad" className="sr-only">
                  How you are a Chad
                </label>
                <input
                  id="how-chad"
                  name="how-chad"
                  type="text"
                  placeholder="How you are a Chad"
                  autoComplete="how-chad"
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Enter FREE Raffle
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="border-t-2 border-gray-200 bg-gray-50 px-4 py-6 sm:px-10">
          <p className="text-xs leading-5 text-gray-500">
            By signing up, you agree to our{" "}
            <a href="#" className="font-medium text-gray-900 hover:underline">
              Terms
            </a>
            , and{" "}
            <a href="#" className="font-medium text-gray-900 hover:underline">
              Data Policy
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
