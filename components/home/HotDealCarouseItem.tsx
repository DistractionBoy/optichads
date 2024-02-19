import Image from "next/image";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { useAccount, useSendTransaction } from "wagmi";
import { TransactionRequest, ethers, verifyMessage } from "ethers";
import { toast } from "sonner";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

import { CarouselItem } from "../ui/carousel";
import seaportAbi from "@/lib/contracts/seaport_1_5_abi.json";
import { cn } from "@/lib/utils";
import { serialize, sign } from "@/lib/helpers";
import { NFTExpanded } from "@/pages/api/types";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useState } from "react";
import { GasEstimateResponse } from "@/pages/api/alchemy/getGasEstimate";

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

const titleCss =
  "my-2 md:my-4 text-base md:text-lg lg:text-4xl desktop:text-5xl uppercase px-0 lg:px-8 font-semibold md:font-extrabold truncate";

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
  const [gasEstimate, setGasEstimate] =
    useState<GasEstimateResponse["result"]>(`0x00`);
  const [tx, setTx] = useState<TransactionRequest>();
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
    getFulfillmentTransactionData,
    {
      onSuccess: async (order) => {
        try {
          const orderTransaction = order.fulfillment_data.transaction;
          // const gasEstimateResponse = await fetch(
          //   `/api/alchemy/getGasEstimate?from=${order["fulfillment_data"].transaction.to}&to=${userWalletAddress}&chain=${chain}`
          // );
          // const gasEstimate: GasEstimateResponse =
          //   await gasEstimateResponse.json();
          // const gas = gasEstimate.result;

          const seaportInterface = new ethers.Interface(seaportAbi);
          const fragment = seaportInterface.getFunction(
            orderTransaction.function
          );
          if (fragment === null) {
            throw new Error("fulfill_order function not present");
          } else {
            const encodedData = seaportInterface.encodeFunctionData(
              fragment,
              Object.values(orderTransaction.input_data)
            );
            const txReq: TransactionRequest = {
              to: orderTransaction.to,
              from: userWalletAddress,
              value: orderTransaction.value,
              data: encodedData,
            };
            setTx(txReq);
          }
        } catch (e: any) {
          toast(e.message);
        }
      },
    }
  );
  const { sendTransaction } = useSendTransaction();

  if (isLoading) {
    <div className="flex flex-col">
      <Skeleton className="w-full p-8 bg-gray-300 animate-pulse" />
    </div>;
  }
  if (error || orderError) {
    <div className="flex flex-col">
      <Skeleton className="w-full p-8 bg-gray-300" />
    </div>;
  }

  return (
    data &&
    data.nft && (
      <CarouselItem className={carouselItemCSS(chain)}>
        {data.nft?.name && (
          <h4 className={titleCss}>
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
          <h5 className="flex flex-nowrap text-base md:text-lg lg:text-3xl desktop:text-4xl">
            <span className={gradientFonts(chain)}>
              <FontAwesomeIcon icon={faEthereum} />
              {price.slice(0, 7)}
            </span>
          </h5>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" className="-mr-2">
                Buy Now
              </Button>
            </DialogTrigger>
            <DialogContent
              onLoad={async () => {
                try {
                  if (!userWalletAddress) {
                    throw new Error("You need to connect your wallet");
                  }
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
              </DialogHeader>
              <div className="flex justify-center px-3 py-4">
                <div className="flex flex-1 flex-col justify-start items-center">
                  <h4 className={cn(titleCss, "px-0 lg:px-0 font-lg")}>
                    <span className={gradientFonts(chain)}>
                      {data.nft.name}
                    </span>
                  </h4>
                  <Image
                    className="flex p-3 bg-white max-w-[250px] lg:max-w-[350px]"
                    src={data.nft.image_url}
                    alt={data.nft.description || ""}
                    width={350}
                    height={350}
                  />
                  <h5 className="flex w-full justify-end items-center flex-nowrap text-base md:text-lg lg:text-3xl desktop:text-4xl my-3 pr-3 max-w-[250px] lg:max-w-[350px]">
                    <span className={cn(gradientFonts(chain), "text-white")}>
                      <FontAwesomeIcon icon={faEthereum} />
                      {price.slice(0, 7)}
                    </span>
                  </h5>
                </div>
                <Button
                  disabled={isMutating}
                  onClick={async () => {
                    try {
                      if (
                        window.ethereum === null ||
                        window.ethereum === undefined
                      ) {
                        throw new Error("wallet not connected");
                      }
                      const browserProvider = new ethers.BrowserProvider(
                        window.ethereum,
                        chain
                      );
                      const signer: ethers.Signer =
                        await browserProvider.getSigner(userWalletAddress);

                      sign(signer, "OptiChads Floor Buy").then(
                        async (signature) => {
                          const result = verifyMessage(
                            "OptiChads Floor Buy",
                            signature as string
                          );
                          if (result !== userWalletAddress) {
                            throw new Error(
                              "Singature failed, are you who you say you are bro?"
                            );
                          }
                          if (tx === undefined) {
                            throw new Error(
                              "Failed to get transaction details. Try refreshing the page and try again."
                            );
                          }
                          const receipt: ethers.TransactionResponse =
                            await signer.sendTransaction(tx);
                          toast(
                            `Purchase successful. Tx hash: ${receipt.hash}`
                          );
                        }
                      );
                    } catch (e: any) {
                      toast(e.mesage);
                    }
                  }}
                >
                  BUY NOW BRO
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CarouselItem>
    )
  );
};

export default HotDealCarouselItem;
