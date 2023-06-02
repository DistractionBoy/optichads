import React, { useState } from "react";
import Image from "next/image";
import QuixoticCircle from "../public/images/quixotic_logo_circle.png";
import OPlogo from "../public/images/optimism-logo.png";
import {
  getBaseUrl,
  getEtherscanTokenHref,
  getImgUrl,
  getQuixoticTradeHref,
} from "../lib/helpers";
import { ChadMetadata } from "../lib";
import Breadcrumbs from "./Breadcrumbs";
import Attributes from "./Attributes";
import useSWR from "swr";

export interface NFTDetailViewProps {
  data?: ChadMetadata;
  id: number;
  collection: string;
  rarity?: { rank: string; tokenId: string; rarityScore: string }[];
  showBreadcrumbs?: boolean;
}

export default function NFTDetailView({
  data,
  collection,
  id,
  showBreadcrumbs,
  rarity,
}: NFTDetailViewProps) {
  console.log("rarity obj: ", rarity);
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}/api/meta/${collection}/${id}`;
  const { data: fetchedData }: { data?: ChadMetadata } = useSWR(
    data ? null : url
  );

  const twitterLink = {
    name: "Twitter",
    href: `https://twitter.com/intent/tweet?text=Check%20out%20my%20NFT%20at%20https%3A//optiland.com/collections/${collection}/${id}`,
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  };
  const QuixoticLink = {
    name: "Quixotic",
    href: getQuixoticTradeHref(id.toString()),
    icon: (props: any) => (
      <div {...props}>
        <Image
          alt="Trade this NFT on Quixotic"
          src={QuixoticCircle}
          height={24}
          width={24}
        />
      </div>
    ),
  };
  const EtherscanLink = {
    name: "Etherscan",
    href: getEtherscanTokenHref(id.toString()),
    icon: (props: any) => (
      <div {...props}>
        <Image
          alt="View this NFT on Etherscan"
          src={OPlogo}
          height={24}
          width={24}
        />
      </div>
    ),
  };
  const pages = [
    { name: "Collections", href: "/collections", current: false },
    {
      name: `${collection}`,
      href: `/collections/${collection}`,
      current: false,
    },
    {
      name: `${collection}${data?.name || fetchedData?.name}`,
      current: true,
    },
  ];
  const [image] = useState<string>(getImgUrl(id.toString(), collection));

  if (data || fetchedData) {
    const metadata: ChadMetadata | undefined = data || fetchedData;
    return (
      <div className="mx-auto max-w-2xl px-0 pt-0 pb-3 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-12">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-start">
          {showBreadcrumbs && (
            <div className="hidden md:flex">
              <Breadcrumbs pages={pages} />
            </div>
          )}

          <section
            aria-labelledby="information-heading"
            className="mt-0 md:mt-4"
          >
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="space-y-8">
              <p className="text-3xl font-bold text-gray-800">
                {metadata && metadata.description}{" "}
                {rarity && `Rank: ${rarity[0].rank}`}
              </p>
            </div>
          </section>
        </div>

        {/* Product image */}
        <div className="mt-4 md:mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className="aspect-square h-full w-full overflow-hidden rounded-t-md">
            <Image
              src={image}
              alt={metadata?.description as string}
              width={680}
              height={680}
              priority
            />
          </div>
          <div className="-mt-px flex divide-x divide-gray-200 rounded-b-md shadow">
            <div className="flex w-0 flex-1">
              <a
                href={twitterLink.href}
                className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                <span className="sr-only">{twitterLink.name}</span>
                Share:
                <twitterLink.icon
                  className="ml-0.5 mt-0.5 h-5 w-5 text-red-600 hover:text-red-700"
                  aria-hidden="true"
                />
              </a>
            </div>
            <div className="-ml-px flex w-0 flex-1">
              <a
                href={QuixoticLink.href}
                className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                <span className="sr-only">{QuixoticLink.name}</span>
                Trade:
                <QuixoticLink.icon
                  className="ml-0.5 mt-0.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </a>
            </div>
            <div className="-ml-px flex w-0 flex-1">
              <a
                href={EtherscanLink.href}
                className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                <span className="sr-only">{EtherscanLink.name}</span>
                View:
                <EtherscanLink.icon
                  className="ml-0.5 mt-0.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Product form */}
        <div className="mt-5 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
          <section aria-labelledby="attributes-heading">
            <h2 id="attributes-heading" className="sr-only">
              Product options
            </h2>

            {metadata && (
              <Attributes
                attributes={metadata.attributes}
                collection={collection}
              />
            )}

            {/* <div className="mt-10">
            <button
              type="submit"
              className="w-full bg-red-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
            >
              Trade on Quixotic
            </button>
          </div> */}
          </section>
        </div>
      </div>
    );
  } else {
    return <div>loading...</div>;
  }
}
