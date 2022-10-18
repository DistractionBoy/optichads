import { ChevronRightIcon } from "@heroicons/react/solid";
import { useWeb3React } from "@web3-react/core";
import Link from "next/link";
import React from "react";
import { hooks } from "../lib/connectors/metaMask";
import { ethers } from "ethers";
import { postMsgToRaffleBot } from "../lib/helpers";

const { useProvider } = hooks;

const suggestionChad = (message: string, account: string) => {
  const post = `--------------------------------------------------------------
  A wannabe Chad gives this reason:\`\`\`${message}\`\`\`
  Account#: ${account}
  --------------------------------------------------------------`;
  postMsgToRaffleBot(post);
};

export const WannabeChadForm = () => {
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
          href="https://qx.app/collection/optichads?sort=rank%3Aasc&query="
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
        <span className="block text-red-600">Become a Chad!</span>
      </h1>
      <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
        Sup bro, did you know we are offering free chads each week we are
        conducting challenges through Quest3? Oh, you did? Then, in a few words,
        tell us how you live the Chad life.
      </p>
      <div className="mt-10 sm:mt-12">
        <form
          onSubmit={handleSubmit}
          className="sm:mx-auto sm:max-w-xl lg:mx-0"
        >
          <div className="sm:flex">
            <div className="min-w-0 flex-1">
              <label htmlFor="email" className="sr-only">
                How&apos;re you a Chad?
              </label>
              <input
                name="message"
                type="text"
                maxLength={240}
                minLength={12}
                placeholder="How're you a Chad?"
                className="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 invalid:ring-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              />
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <button
                type="submit"
                className="block w-full rounded-md bg-red-600 py-3 px-4 font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Submit my wallet address
              </button>
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-300 sm:mt-4">
            By becoming a Chad you can enter into our weekly challenges. Good
            luck! (starts late 2022)
          </p>
        </form>
      </div>
    </div>
  );
};

export default WannabeChadForm;
