import React, { useState } from "react";
import Image from "next/image";
import { ChadMetadata } from "../lib";
import { classNames, getBaseUrl, getImgUrl } from "../lib/helpers";
import useSWR from "swr";

export interface NFTCardProps {
  id: number;
  collection: string;
  data?: ChadMetadata;
  width?: number;
  height?: number;
  variant?: "noinfo" | "sideinfo";
}

export default function NFTCard({
  id,
  collection,
  data,
  width,
  height,
  variant,
}: NFTCardProps) {
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}/api/meta/${collection}/${id}`;
  const { data: fetchedData }: { data?: ChadMetadata } = useSWR(
    data ? null : url
  );

  const [image] = useState<string>(getImgUrl(id.toString()));

  if (data || fetchedData) {
    const metadata: ChadMetadata | undefined = data || fetchedData;
    return (
      <div className="group relative mb-10 border rounded-md">
        <div
          className={classNames(
            variant && variant === "noinfo" ? "rounded-b-md" : "",
            "w-full bg-gray-200 rounded-t-md overflow-hidden group-hover:opacity-75 object-center object-cover"
          )}
        >
          <Image
            src={image}
            alt={metadata?.description}
            width={width || 400}
            height={height || 400}
            layout="responsive"
          />
        </div>
        {metadata ? (
          variant && variant === "noinfo" ? (
            <></>
          ) : (
            <div className="flex-1 p-4 space-y-2 flex flex-col">
              <h3 className="text-sm font-medium text-gray-900">
                <a href={`/collections/${collection}/${id}`}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {metadata && metadata.name}
                </a>
              </h3>
            </div>
          )
        ) : (
          <></>
        )}
      </div>
    );
  } else {
    return (
      <div className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden">
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 animate-pulse group-hover:opacity-75 sm:aspect-none sm:h-96"></div>
        <div className="flex-1 p-4 space-y-2 flex flex-col">
          <h3 className="text-sm font-medium text-gray-900">
            Data could not be loaded
          </h3>
        </div>
      </div>
    );
  }
}
