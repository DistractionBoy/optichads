import React from "react";
import useSWR from "swr";
import { ChadMetadata } from "../lib";
import { getBaseUrl } from "../lib/helpers";
import NFTCard from "./NFTCard";

export interface CollectionProps {
  token: string;
  pages: string;
  page: string | undefined;
  pagesize: string;
  title?: string;
}

// for rarity: https://raritytools.medium.com/ranking-rarity-understanding-rarity-calculation-methods-86ceaeb9b98c

export default function Collection({
  token,
  pages,
  page,
  pagesize,
}: CollectionProps) {
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}/api/meta/${token}?pages=${pages}&pagesize=${pagesize}${
    page ? "&page=" + page : ""
  }`;
  const { data }: { data?: ChadMetadata[] } = useSWR(url);

  return (
    <div className="max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="sr-only">Non-Fungible Tokens</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-6 2xl:grid-cols-10 md:gap-y-0 lg:gap-x-8">
        {data?.map((nft, idx) => (
          <NFTCard
            data={nft}
            collection={token}
            id={Number(
              nft.name.slice(nft.name.lastIndexOf("#"), nft.name.length - 1)
            )}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
}
