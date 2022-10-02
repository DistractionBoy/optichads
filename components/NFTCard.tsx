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

  const [image] = useState<string>(getImgUrl(id.toString(), collection));

  if (data || fetchedData) {
    const metadata: ChadMetadata | undefined = data || fetchedData;
    return (
      <div className="group relative mb-10 rounded-md border">
        <div
          className={classNames(
            variant && variant === "noinfo" ? "rounded-b-md" : "",
            "w-full overflow-hidden rounded-t-md bg-gray-200 object-cover object-center group-hover:opacity-75"
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
            <div className="flex flex-1 flex-col space-y-2 p-4">
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
      <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div className="aspect-w-3 aspect-h-4 animate-pulse bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96"></div>
        <div className="flex flex-1 flex-col space-y-2 p-4">
          <h3 className="text-sm font-medium text-gray-900">
            Data could not be loaded
          </h3>
        </div>
      </div>
    );
  }
}
