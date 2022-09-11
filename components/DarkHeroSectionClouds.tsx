import React from "react";
import Image from "next/image";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { hooks } from "../lib/connectors/metaMask";
import { ChevronRightIcon } from "@heroicons/react/solid";

import superheroImg from "../public/images/chad-t.png";
import Link from "next/link";
import { shortenHex } from "../lib/utils";

const { useProvider } = hooks;

const postMsgToSuggestionBot = async (message: string) => {
  const msg = { content: message };
  try {
    return await fetch(`${process.env.NEXT_PUBLIC_GYMBOT}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(msg),
    });
  } catch (e) {
    console.error(e);
    return e;
  }
};

const updateDiscord = (message: string, account: string) => {
  const post = `--------------------------------------------------------------
A Chad from the internet says:\`\`\`${message}\`\`\`
Account#: ${shortenHex(account, 4)}
--------------------------------------------------------------`;
  postMsgToSuggestionBot(post);
};

export default function DarkHeroSectionClouds() {
  const { account, chainId } = useWeb3React();
  const provider = useProvider();

  const addBoxEntry = async (
    signer: ethers.Signer,
    message: string
  ): Promise<string | Error> => await signer.signMessage(message);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const message = e && e.target.message.value;
    if (account && chainId === Number(process.env.NEXT_PUBLIC_CHAIN_ID)) {
      try {
        const signer = provider && provider.getSigner(account);
        addBoxEntry(
          signer as ethers.Signer,
          `${process.env.NEXT_PUBLIC_GYMBOOK_KEY}`
        ).then((signature) => {
          const result = ethers.utils.verifyMessage(
            `${process.env.NEXT_PUBLIC_GYMBOOK_KEY}`,
            signature as string
          );
          if (result === account) {
            updateDiscord(message, account);
          }
        });
        e.target.message.value = "";
      } catch (e) {
        console.log(e);
      }
    } else {
      throw new Error(
        "You need to switch to Optimism and/or make sure you have enough Eth"
      );
    }
  };

  return (
    <div className="relative overflow-hidden">
      <main>
        <div className="pt-10 bg-gray-900 bg-gradient-to-br from-[#da10109e] via-transparent to-[#da10109e] sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  <div className="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200 cursor-pointer">
                    <Link
                      href="https://qx.app/collection/optichads?sort=rank%3Aasc&query="
                      passHref
                    >
                      <span className="flex items-center">
                        <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-red-600 rounded-full">
                          Minting Closed
                        </span>
                        <span className="ml-4 text-sm">View Top Chads</span>
                        <ChevronRightIcon
                          className="ml-2 w-5 h-5 text-gray-500"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </div>

                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">OptiChads</span>
                    <span className="block text-red-600">
                      Have a healthy day!
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Hey, how is it going? Have you gone for a walk or eaten a
                    healthy meal today? Let us know how we can help you make
                    your life like ours. - The Chads
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <form
                      onSubmit={handleSubmit}
                      className="sm:max-w-xl sm:mx-auto lg:mx-0"
                    >
                      <div className="sm:flex">
                        <div className="min-w-0 flex-1">
                          <label htmlFor="email" className="sr-only">
                            Suggestion Box
                          </label>
                          <input
                            name="message"
                            type="text"
                            maxLength={240}
                            minLength={12}
                            placeholder="Suggestion Box"
                            className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 focus:ring-offset-gray-900 invalid:ring-red-600"
                          />
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <button
                            type="submit"
                            className="block w-full py-3 px-4 rounded-md shadow bg-red-600 text-white font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 focus:ring-offset-gray-900"
                          >
                            Tell us why we&apos;re great
                          </button>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                        by hitting us up, you totally send a message with your
                        wallet address to our{" "}
                        <a
                          href="https://discord.gg/optichads"
                          className="font-medium text-white hover:text-red-600"
                        >
                          Discord
                        </a>
                        . Sweet, huh?
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-12 -mb-16 sm:-mb-28 lg:m-0 lg:relative">
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
