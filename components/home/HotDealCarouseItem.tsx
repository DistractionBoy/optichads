import Image from "next/image";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { useAccount } from "wagmi";
import { TransactionRequest, ethers, verifyMessage } from "ethers";
import { toast } from "sonner";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

import { CarouselItem } from "../ui/carousel";
import seaportAbi from "@/lib/contracts/seaport_1_5_abi.json";
import { cn } from "@/lib/utils";
import { serialize, sign } from "@/lib/helpers";
import { NFTExpanded } from "@/pages/api/types";
import { Skeleton } from "../ui/skeleton";
import { Button, divergentLinkButtonCSS } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Dispatch, SetStateAction, useState } from "react";
import Account from "../Account";
import Link from "next/link";

const carouselItemCSS = (chain: string) =>
  cn(
    "flex flex-col basis-full md:basis-1/2 rounded-sm my-16 xl:my-20 text-slate-800 px-6",
    "drop-shadow-2xl max-w-[700px]"
  );

const gradientFonts = (chain: string) =>
  cn(
    "flex items-center bg-clip-text text-transparent font-semibold bg-gradient-to-r dark:bg-gradient-to-r",
    chain === "optimism"
      ? "from-red-400 to-red-100"
      : chain === "base"
        ? "from-blue-400 to-blue-100"
        : "from-indigo-400 to-indigo-100"
  );

const traitContainer = (chain: string) =>
  cn(
    "flex w-[220px] lg:w-full flex-col space-y-1 my-1.5 mx-1.5 px-2 py-1.5",
    chain === "optimism"
      ? "bg-red-600/20 text-red-400 border border-red-800 rounded"
      : chain === "base"
        ? "bg-blue-600/20 text-blue-400 border border-blue-800 rounded"
        : "bg-indigo-600/20 text-indigo-400 border border-indigo-800 rounded"
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

const buyBroBtnClickHandler = async (
  chain: string,
  userWalletAddress: string,
  tx: TransactionRequest,
  setDialogOpen: Dispatch<SetStateAction<boolean>>
) => {
  try {
    if (window.ethereum === null || window.ethereum === undefined) {
      throw new Error("wallet not connected");
    }
    const browserProvider = new ethers.BrowserProvider(window.ethereum, chain);
    const signer: ethers.Signer =
      await browserProvider.getSigner(userWalletAddress);

    sign(signer, "OptiChads Floor Buy")
      .then(async (signature) => {
        const result = verifyMessage(
          "OptiChads Floor Buy",
          signature as string
        );
        if (result !== userWalletAddress) {
          throw new Error("Singature failed, are you who you say you are bro?");
        }
        if (tx === undefined) {
          throw new Error(
            "Failed to get transaction details. Try refreshing the page and try again."
          );
        }
        const response: ethers.TransactionResponse =
          await signer.sendTransaction(tx);
        const receipt = await response.wait();
        setDialogOpen(false);
        return receipt;
      })
      .catch((e) => toast(e.message));
  } catch (e: any) {
    if (e.message) {
      toast(e.message);
    }
  }
};

const HotDealCarouselItem = ({
  identifier,
  chain,
  address,
  price,
  hash,
  protocol_address,
  date,
}: {
  identifier: string;
  chain: string;
  address: string;
  price: string;
  hash: string;
  protocol_address: string;
  date: number;
}) => {
  const params = serialize({ address, chain, identifier });
  //   const [gasEstimate, setGasEstimate] =
  //     useState<GasEstimateResponse["result"]>(`0x00`);
  const [tx, setTx] = useState<TransactionRequest>();
  const [dialogOpen, setDialogOpen] = useState(false);
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
          //   const gasEstimateResponse = await fetch(
          //     `/api/alchemy/getGasEstimate?from=${
          //       order["fulfillment_data"].transaction.to
          //     }&to=${userWalletAddress}&chain=${
          //       chain === "base" ? chain : chain.substring(0, 3)
          //     }`
          //   );
          //   const gasEstimate: GasEstimateResponse =
          //     await gasEstimateResponse.json();
          //   const gas = gasEstimate.result;

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
              //   gasPrice: BigNumber.from(gas).toString(),
            };
            setTx(txReq);
          }
        } catch (e: any) {
          toast(e.message);
        }
      },
    }
  );

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
          className={cn("flex p-3 lg:p-8 rounded-md object-fill bg-white")}
          src={data.nft.image_url}
          alt={data.nft.description || ""}
          width={700}
          height={700}
        />
        <div className="flex flex-col items-end my-3 px-1 lg:px-8 space-y-2">
          <div className="flex items-center text-base md:text-lg lg:text-3xl desktop:text-4xl space-x-2">
            <FontAwesomeIcon
              icon={faEthereum}
              className="text-gray-100 h-5 leading-none"
            />
            <span className={gradientFonts(chain)}>{price.slice(0, 7)}</span>
          </div>

          {data.nft.rarity && (
            <div className="text-base md:text-lg lg:text-xl desktop:text-2xl text-white">
              Rarity# {data.nft.rarity.rank}
            </div>
          )}

          <div className="text-base md:text-lg lg:text-xl desktop:text-2xl text-white">
            Ends: {new Date(date).toLocaleDateString()}
          </div>

          <div className="flex space-x-2">
            <Link
              href={`https://opensea.io/assets/${chain}/${address}/${identifier}`}
              className="flex items-center"
            >
              <Button variant="ghost" className="text-white">
                View on Opensea
              </Button>
            </Link>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button className="-mr-2">Buy Now</Button>
              </DialogTrigger>
              <DialogContent
                className="max-w-3xl"
                onLoad={async () => {
                  try {
                    if (!userWalletAddress) {
                      throw new Error(
                        "You need to connect your wallet using the button at the top of the website. Close any open dialogs and scroll to top."
                      );
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
                      description: <span>{e.message}</span>,
                    });
                  }
                }}
              >
                <DialogHeader>
                  <DialogTitle>Confirm Order</DialogTitle>
                </DialogHeader>
                <div className="flex flex-row justify-center px-3 py-4">
                  <div className="flex flex-1 flex-col justify-start ">
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

                  <div className="hidden sm:flex flex-1 flex-row flex-wrap lg:flex-col justify-start items-center mx-3">
                    {data.nft.traits.map((trait) => (
                      <div
                        className={traitContainer(chain)}
                        key={trait.trait_type}
                      >
                        <div className="text-xs lg:text-sm">
                          {trait.trait_type}
                        </div>
                        <div className="text-base lg:text-xl">
                          {trait.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <DialogFooter className="flex justify-center lg:mr-4">
                  {userWalletAddress && tx ? (
                    <Button
                      size="lg"
                      disabled={isMutating}
                      onClick={() => {
                        if (userWalletAddress && tx) {
                          buyBroBtnClickHandler(
                            chain,
                            userWalletAddress,
                            tx,
                            setDialogOpen
                          );
                        } else {
                          toast(
                            "You need to connect your wallet using the button at the top of the website"
                          );
                        }
                      }}
                    >
                      BUY NOW BRO
                    </Button>
                  ) : (
                    <div>Please connect your wallet.</div>
                  )}
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CarouselItem>
    )
  );
};

export default HotDealCarouselItem;
