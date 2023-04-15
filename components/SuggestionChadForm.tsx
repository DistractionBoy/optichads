import { ChevronRightIcon } from "@heroicons/react/solid";
import { useWeb3React } from "@web3-react/core";
import Link from "next/link";
import React from "react";
import { shortenHex } from "../lib/utils";
import { hooks } from "../lib/connectors/metaMask";
import { ethers } from "ethers";
import { postMsgToSuggestionBot } from "../lib/helpers";

const { useProvider } = hooks;

const suggestionChad = (message: string, account: string) => {
  const post = `--------------------------------------------------------------
  A Chad from the internet says:\`\`\`${message}\`\`\`
  Account#: ${shortenHex(account, 4)}
  --------------------------------------------------------------`;
  postMsgToSuggestionBot(post);
};

export const SuggestionChadForm = () => {
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
            suggestionChad(message, account);
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
    <div className="lg:py-24">
      <div className="inline-flex cursor-pointer items-center rounded-full bg-gray-900 p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base">
        <Link
          href="https://opensea.io/collection/optichads?search[sortAscending]=true&search[sortBy]=RARITY_RANK"
          passHref
        >
          <span className="flex items-center">
            <span className="rounded-full bg-red-600 px-3 py-0.5 text-xs font-semibold uppercase leading-5 tracking-wide text-white">
              Minting Closed
            </span>
            <span className="ml-4 text-sm">View Top Chads</span>
            <ChevronRightIcon
              className="ml-2 h-5 w-5 text-gray-500"
              aria-hidden="true"
            />
          </span>
        </Link>
      </div>

      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
        <span className="block">OptiChads</span>
        <span className="block text-red-600">Have a healthy day!</span>
      </h1>
      {/* <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
        Hey, sup. Pull up a bench and see what makes us great.
      </p> */}
    </div>
  );
};

export default SuggestionChadForm;
