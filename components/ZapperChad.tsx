import Image from "next/image";
import Link from "next/link";

import screenshotOne from "../public/images/screenshot_1.png";
import screenshotTwo from "../public/images/screenshot_2.png";
import screenshotThree from "../public/images/screenshot_3.png";
import screenshotFour from "../public/images/screenshot_4.png";
import screenshotFive from "../public/images/screenshot_5.png";

export default function Proposal() {
  return (
    <div className="relative overflow-hidden rounded-lg bg-white py-16">
      <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
        <div
          className="relative mx-auto h-full max-w-prose text-lg"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-lg">
          <h1>
            <span className="block text-center text-lg font-semibold text-red-600">
              Stats Upgrade
            </span>
            <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              OptiChads Lift With Zapper
            </span>
          </h1>
          <p className="mt-8 text-xl leading-8 text-gray-500">
            Zapper has been sweatin&apos; hard at integrating NFTs on Optimism
            and they are happy to finally launch this feature! You can now see
            your{" "}
            <Link href="https://qx.app/stats">
              <span className="font-semibold text-red-600 underline">
                OptiChads
              </span>
            </Link>{" "}
            in your wallet along with all your other assets!
          </p>
          <figure>
            <Image
              className="w-full rounded-lg"
              src={screenshotOne}
              alt=""
              width={873}
              height={404}
              layout="responsive"
            />
            <figcaption className="flex justify-center">
              <Link href="https://gov.optimism.io/t/draft-gf-phase-1-proposal-optichads-nft-project/3430">
                <span className="mt-3 cursor-pointer font-semibold text-red-600 underline">
                  Easily find top chads with Zapper&apos;s new Dashboard
                </span>
              </Link>
            </figcaption>
          </figure>
        </div>
        <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
          <p>
            For those that haven&apos;t worked out with Zapper before, it&apos;s
            an exploration tool with a killer Dashboard. You can check out NFTs,
            DeFi and DAOs, follow interesting accounts, keep track of your
            assets - All in one place.
          </p>

          <h2>Zapper Dashboard</h2>
          <p>Here is how your assets are displayed in the Dashboard:</p>
          <ul role="list">
            <li>Tokens in your wallet</li>
            <li>NFTs on Optimism AND on Ethereum</li>
            <li>DeFi positions across 14 networks</li>
          </ul>

          <figure>
            <Image
              className="w-full rounded-lg"
              src={screenshotTwo}
              alt=""
              width={873}
              height={404}
              layout="responsive"
            />
            <figcaption className="flex justify-center">
              <Link href="https://gov.optimism.io/t/draft-gf-phase-1-proposal-optichads-nft-project/3430">
                <span className="font-semibold text-red-600 underline">
                  Spot the amazing number of OptiChads of this holder 👀🤖:
                </span>
              </Link>
            </figcaption>
          </figure>

          <h2>OptiChads on Zapper Fi</h2>
          <p>
            While checking out the OptiChads NFTs, you can filter activity by
            TRAITS or by wallet address! This gives you the ability to find
            specific sales that occurred.
          </p>
          <figure>
            <Image
              className="w-full rounded-lg"
              src={screenshotThree}
              alt=""
              width={873}
              height={404}
              layout="responsive"
            />
          </figure>
          <p>
            You can also spy on the biggest whales in the collection 👀. You can
            give them a follow and see everything they are doing on other
            chains, and in other spheres of Web3 (DAOs, DeFi, NFTs).
          </p>
          <figure>
            <Image
              className="w-full rounded-lg"
              src={screenshotFour}
              alt=""
              width={873}
              height={404}
              layout="responsive"
            />
          </figure>
          <figure>
            <Image
              className="w-full rounded-lg"
              src={screenshotFour}
              alt=""
              width={873}
              height={404}
              layout="responsive"
            />
            <figcaption className="flex justify-center">
              <Link href="https://gov.optimism.io/t/draft-gf-phase-1-proposal-optichads-nft-project/3430">
                <span className="cursor-pointer font-semibold text-red-600 underline">
                  Like for example, optichad.eth that holds 645 NFTs �
                </span>
              </Link>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="relative mt-32 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-lg">
          <h1>
            <span className="block text-center text-lg font-semibold text-red-600">
              Web3 Interactivity
            </span>
            <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Connect Your Wallet
            </span>
          </h1>
          <p className="mt-8 text-xl leading-8 text-gray-500">
            You do not need to connect your wallet to see all of this info on
            Zapper! You can use it as a read-only mode.
          </p>
          <p className="mt-8 text-xl leading-8 text-gray-500">
            However, by connecting your wallet, this opens up transactional
            capabilities: like swapping and bridging on Optimism (and on other
            networks as well!)
          </p>
          <p className="mt-8 text-xl leading-8 text-gray-500">
            And one very important and fun one ⚡️💥: setting your avatar to an
            OptiChads NFT. You can now setup your Zapper Avatar (profile
            picture) to represent your favorite OptiChad. This means that anyone
            on Zapper will see your OptiChads avatar when they navigate.
          </p>
          <figure>
            <Image
              className="w-full rounded-lg py-6"
              src={screenshotFive}
              alt=""
              width={873}
              height={404}
              layout="responsive"
            />
            <figcaption className="flex justify-center">
              {/* <span className="cursor-pointer font-semibold text-red-600 underline"> */}
              It&apos;s time to see all those owners turn their avatars into
              OptiChads �{/* </span> */}
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
