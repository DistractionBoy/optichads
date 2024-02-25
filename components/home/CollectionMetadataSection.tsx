import { CollectionMetadata } from "@/pages/api/types";
import { NftContract } from "alchemy-sdk";
import useSWR from "swr";
import { Skeleton } from "../ui/skeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

export type CollectionMetadataSectionProps = {
  collection_slug: "optichads" | "arbibabes" | "basebrigade";
};

const CONTRACT = {
  optichads: {
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    chain: "optimism",
    chainAbbr: "opt",
  },
  arbibabes: {
    address: process.env.NEXT_PUBLIC_ARBIBABE_CONTRACT,
    chain: "arbitrum",
    chainAbbr: "arb",
  },
  basebrigade: {
    address: process.env.NEXT_PUBLIC_BRIGADE_CONTRACT,
    chain: "base",
    chainAbbr: "base",
  },
};

const CollectionMetadataSection = ({
  collection_slug,
}: CollectionMetadataSectionProps) => {
  const { data, isLoading, error } = useSWR<CollectionMetadata>(
    collection_slug &&
      `/api/opensea/getCollectionMetadata?collection_slug=${collection_slug}`
  );

  const {
    data: contractMetadata,
    isLoading: contractMetadataLoading,
    error: contractMetadataError,
  } = useSWR<NftContract>(
    `/api/alchemy/getContractMetadata?chain=${CONTRACT[collection_slug].chainAbbr}&contractAddress=${CONTRACT[collection_slug].address}`
  );

  if (isLoading || contractMetadataLoading) {
    return (
      <div className="bg-slate-50 dark:bg-zinc-900 pt-16 sm:pt-24 pb-4 sm:pb-6 rounded-lg">
        <div className="container px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="flex justify-center w-full h-16">
              <Skeleton className="w-40 h-9 bg-gray-900 animate-pulse" />
            </div>
            <div className="mt-4 text-lg leading-8 text-gray-600 flex w-full justify-center text-center items-center">
              Symbol: $
              <Skeleton className="w-12 h-4 bg-gray-700 animate-pulse" />
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">
                  Total Volume
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 flex flex-col w-full justify-center items-center">
                  <Skeleton className="w-20 h-6 bg-gray-900 animate-pulse" />
                </dd>
              </div>
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">
                  Floor Price
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 flex flex-col w-full justify-center items-center">
                  <Skeleton className="w-20 h-6 bg-gray-900 animate-pulse" />
                </dd>
              </div>
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">
                  Market Cap
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 flex flex-col w-full justify-center items-center">
                  <Skeleton className="w-20 h-6 bg-gray-900 animate-pulse" />
                </dd>
              </div>
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">
                  Unique Owners
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 flex flex-col w-full justify-center items-center">
                  <Skeleton className="w-10 h-6 bg-gray-900 animate-pulse" />
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    );
  }

  if (error || contractMetadataError) {
    return (
      <div className="bg-slate-50 dark:bg-zinc-900 pt-16 sm:pt-24 pb-4 sm:pb-6 rounded-lg">
        <div className="container px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="flex w-full">
              <Skeleton className="w-42 h-16 bg-gray-900 dark:bg-gray-100" />
            </div>
            <div className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400 flex w-full justify-center text-center items-center">
              Symbol: $<Skeleton className="w-12 h-4" />
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">
                  Total Volume
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 flex flex-col w-full justify-center items-center">
                  <Skeleton className="w-20 h-8" />
                </dd>
              </div>
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">
                  Floor Price
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 flex flex-col w-full justify-center items-center">
                  <Skeleton className="w-20 h-8" />
                </dd>
              </div>
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">
                  Market Cap
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 flex flex-col w-full justify-center items-center">
                  <Skeleton className="w-20 h-8" />
                </dd>
              </div>
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">
                  Unique Owners
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 flex flex-col w-full justify-center items-center">
                  <Skeleton className="w-10 h-8" />
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    );
  }

  return (
    data &&
    contractMetadata && (
      <div className="pt-16 sm:pt-24 pb-4 sm:pb-6 rounded-lg">
        <div className="mx-auto max-w-screen-desktop px-6 lg:px-8">
          <div className="text-center">
            <h2 className=" text-xl md:text-3xl xl:text-7xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl font-outline-0 lg:font-outline-2">
              {contractMetadata.name}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Symbol: ${contractMetadata.symbol}
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col bg-gray-400/5 dark:bg-gray-600/30 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">
                Total Volume
              </dt>
              <dd className="flex justify-center items-center space-x-1 order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                <FontAwesomeIcon icon={faEthereum} className="h-5" />
                <span>{Number(data.total.volume).toFixed(3)}</span>
              </dd>
            </div>
            <div className="flex flex-col bg-gray-400/5 dark:bg-gray-600/30 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">
                Floor Price
              </dt>
              <dd className="flex justify-center items-center space-x-1 order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                <FontAwesomeIcon icon={faEthereum} className="h-5" />
                <span>{Number(data.total.floor_price).toFixed(4)}</span>
              </dd>
            </div>
            <div className="flex flex-col bg-gray-400/5 dark:bg-gray-600/30 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">
                Market Cap
              </dt>
              <dd className="flex justify-center items-center space-x-1 order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                <FontAwesomeIcon icon={faEthereum} className="h-5" />
                <span>{Number(data.total.market_cap).toFixed(2)}</span>
              </dd>
            </div>
            <div className="flex flex-col bg-gray-400/5 dark:bg-gray-600/30 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">
                Unique Owners
              </dt>
              <dd className="space-x-1 order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                <span>{data.total.num_owners}</span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    )
  );
};

export default CollectionMetadataSection;
