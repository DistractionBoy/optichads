import Link from "next/link";
import React from "react";

export default function QuestsClosingSection() {
  return (
    <div className="relative overflow-hidden rounded-lg bg-white py-16">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-lg">
          <h2>
            <span className="block text-center text-lg font-semibold text-red-600">
              Quests
            </span>
            <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-3xl">
              A Disclaimer
            </span>
          </h2>
          <p className="mt-8 text-xl leading-8 text-gray-500">
            While our mission is to promote health, we do not want anyone
            getting injured in completing a weekly challenge, so if you would
            like to participate in a challenge but cannot that week, please
            refrain from causing any harm to yourself or others. Reach out to us
            if you want to complete the weekly quest but cannot for that week.
            Consult a physician before performing any exercise as needed.
          </p>
          <p className="mt-8 text-xl leading-8 text-gray-500">
            The person who associated a work with this deed has dedicated the
            work to the public domain by waiving all of his or her rights to the
            work worldwide under copyright law, including all related and
            neighboring rights, to the extent allowed by law.
          </p>
          <p className="mt-8 text-xl leading-8 text-gray-500">
            You can copy, modify, distribute and perform the work, even for
            commercial purposes, all without asking permission. The blockchain
            proves ownership and you are your own Chad.
          </p>
        </div>
        <div className="prose prose-lg prose-indigo mx-auto my-12 text-gray-500">
          <h3>Get Active</h3>
          <p>
            Tell your friends, family, anyone and everyone you know about this
            campaign and give them a way to earn some extra dough in these tough
            times. If they are new the Web3, that is even better! Have them
            enter the raffle or be a true Chad and give them one of your extras.
            You know you have it. Come on, you know you do.
          </p>
          <p>
            We&apos;ve partnered with{" "}
            <Link href="https://quest3.xyz">
              <span className="cursor-pointer font-semibold text-red-600 underline">
                Quest3
              </span>
            </Link>{" "}
            a Web3 Quest and event platform, and will use their service as a
            starting point for Chads to go to and make sure they submit
            everything they need to get an $OP distribution.
          </p>
          <p>
            Stay tuned for more updates and we will be updating this page as the
            time draws near.
          </p>
        </div>
      </div>
    </div>
  );
}
