import { CollectionMetadata } from "@/pages/api/types";
import { NftContract } from "alchemy-sdk";
import useSWR from "swr";

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

  return (
    data &&
    contractMetadata && (
      <div className="bg-white py-24 sm:py-32">
        <div className="container px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {contractMetadata.name}
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Symbol: ${contractMetadata.symbol}
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  Total Volume
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {Number(data.total.volume).toFixed(3)}
                </dd>
              </div>
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  Floor Price
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {Number(data.total.floor_price).toFixed(4)}
                </dd>
              </div>
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  Market Cap
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {Number(data.total.market_cap).toFixed(2)}
                </dd>
              </div>
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  Unique Owners
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {data.total.num_owners}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    )
  );
};

export default CollectionMetadataSection;
