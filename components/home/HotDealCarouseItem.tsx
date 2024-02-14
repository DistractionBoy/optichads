import Image from "next/image";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { useAccount, useSendTransaction } from "wagmi";
import { toast } from "sonner";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

import { CarouselItem } from "../ui/carousel";
import { cn } from "@/lib/utils";
import { serialize } from "@/lib/helpers";
import { NFTExpanded } from "@/pages/api/types";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const carouselItemCSS = (chain: string) =>
  cn(
    "flex flex-col basis-full md:basis-1/2 rounded-sm my-16 xl:my-20 text-slate-800 px-6",
    "drop-shadow-2xl max-w-[700px]"
  );

const gradientFonts = (chain: string) =>
  cn(
    "flex items-center bg-clip-text text-transparent font-semibold bg-gradient-to-r dark:bg-gradient-to-l",
    chain === "optimism"
      ? "from-red-200 to-red-50"
      : chain === "base"
        ? "from-blue-200 to-blue-50"
        : "from-indigo-200 to-indigo-50"
  );

const getFulfillmentTransactionData = async (
  url: string,
  {
    arg,
  }: {
    arg: {
      listing: {
        chain: string;
        hash: string;
        protocol_address: string;
      };
      fulfiller: { address: `0x${string}` | undefined };
    };
  }
) => {
  return await fetch(url, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify(arg),
  }).then((res) => res.json());
};

const HotDealCarouselItem = ({
  identifier,
  chain,
  address,
  price,
  hash,
  protocol_address,
}: {
  identifier: string;
  chain: string;
  address: string;
  price: string;
  hash: string;
  protocol_address: string;
}) => {
  const params = serialize({ address, chain, identifier });
  const { data, isLoading, error } = useSWR<NFTExpanded>(
    `/api/opensea/getNFT${params}`
  );
  const { address: userWalletAddress } = useAccount();

  const {
    trigger,
    isMutating,
    data: order,
    error: orderError,
  } = useSWRMutation(
    `/api/opensea/fulfillListing`,
    getFulfillmentTransactionData
  );

  const { sendTransaction } = useSendTransaction();

  if (isLoading) {
    <div className="flex flex-col">
      <Skeleton className="w-full p-8 bg-gray-300 animate-pulse" />
    </div>;
  }
  if (error) {
    <div className="flex flex-col">
      <Skeleton className="w-full p-8 bg-gray-300" />
    </div>;
  }

  return (
    data &&
    data.nft && (
      <CarouselItem className={carouselItemCSS(chain)}>
        {data.nft?.name && (
          <h4 className="my-2 md:my-4 text-base md:text-lg lg:text-3xl desktop:text-5xl uppercase px-0 lg:px-8 font-semibold md:font-extrabold truncate">
            <span className={gradientFonts(chain)}>{data.nft.name}</span>
          </h4>
        )}
        <Image
          className={cn(
            "flex p-1 md:p-3 lg:p-8 rounded-sm object-fill bg-white"
          )}
          src={data.nft.image_url}
          alt={data.nft.description || ""}
          width={700}
          height={700}
        />
        <div className="flex flex-col items-end my-3 px-1 lg:px-8 space-y-2">
          <h5 className="text-base md:text-lg lg:text-3xl desktop:text-4xl">
            <span className={gradientFonts(chain)}>
              <FontAwesomeIcon icon={faEthereum} />
              {price.slice(0, 7)}
            </span>
          </h5>

          <Dialog>
            <DialogTrigger>
              <Button variant="secondary" className="-mr-2">
                Buy Now
              </Button>
            </DialogTrigger>
            <DialogContent
              onLoad={async () => {
                try {
                  await trigger({
                    listing: {
                      hash,
                      chain,
                      protocol_address,
                    },
                    fulfiller: { address: userWalletAddress },
                  });
                } catch (e: any) {
                  toast("Error", {
                    description: e.message,
                  });
                }
              }}
            >
              <DialogHeader>
                <DialogTitle>Confirm Order</DialogTitle>
                <DialogDescription>
                  <div className="flex justify-center">
                    <Image
                      src={data.nft.image_url}
                      alt={data.nft.description || ""}
                      width={200}
                      height={200}
                    />
                    <Button
                      disabled={isMutating}
                      onClick={() => {
                        order &&
                          sendTransaction({
                            ...order["fulfillment_data"].transaction,
                          });
                      }}
                    >
                      BUY NOW BRO
                    </Button>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </CarouselItem>
    )
  );
};

export default HotDealCarouselItem;
