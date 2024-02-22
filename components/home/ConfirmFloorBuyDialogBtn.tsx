import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "sonner";
import useSWRMutation from "swr/mutation";
import { TransactionRequest, ethers, verifyMessage } from "ethers";
import { useAccount, useNetwork } from "wagmi";

import seaportAbi from "@/lib/contracts/seaport_1_5_abi.json";
import { Button } from "../ui/button";
import { sign } from "@/lib/helpers";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { BestListingsResponse, NFTExpanded } from "@/pages/api/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { KeyedMutator } from "swr";
import { getNetwork } from "@ethersproject/providers";
import { useRouter } from "next/router";

const traitContainer = (chain: string) =>
  cn(
    "flex w-[220px] lg:w-full flex-col space-y-1 my-1.5 mx-1.5 px-2 py-1.5",
    chain === "optimism"
      ? "bg-red-600/20 text-red-400 border border-red-800 rounded"
      : chain === "base"
        ? "bg-blue-600/20 text-blue-400 border border-blue-800 rounded"
        : "bg-indigo-600/20 text-indigo-400 border border-indigo-800 rounded"
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
  chains: Array<any>,
  setDialogOpen: Dispatch<SetStateAction<boolean>>,
  mutate: KeyedMutator<BestListingsResponse>
) =>  {
  try {

    if (window.ethereum === null || window.ethereum === undefined) {
      throw new Error("wallet not connected");
    }
    const browserProvider = new ethers.BrowserProvider(window.ethereum, chain);

    let chainID = await chains.filter(obj=>obj.network == chain);

    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x'+chainID[0].id.toString(16) }],
    });

    const signer: ethers.Signer =
      await browserProvider.getSigner(userWalletAddress);

    const response = await sign(signer, "OptiChads Floor Buy").then(
      async (signature) => {
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
        mutate();
        return receipt;
      }
    );

    return response;
  } catch (e: any) {
    if (e.message.includes(`user rejected action`)) {
      toast.warning("Signature refused.", {
        action: {
          label: "Try again",
          onClick: () =>
            buyBroBtnClickHandler(
              chain,
              userWalletAddress,
              tx,
              chains,
              setDialogOpen,
              mutate
            ),
        },
      });
    } else {
      if (e.message) {
        toast(e.message);
      }
    }
  }
};

type ConfirmFloorBuyDialogBtnProps = {
  nft: NFTExpanded["nft"];
  hash: string;
  protocol_address: string;
  chain: string;
  price: string;
  mutate: KeyedMutator<BestListingsResponse>;
};

const ConfirmFloorBuyDialogBtn = ({
  nft,
  hash,
  protocol_address,
  chain,
  price,
  mutate,
}: ConfirmFloorBuyDialogBtnProps) => {
  const router = useRouter();
  const { address: userWalletAddress } = useAccount();
  const [tx, setTx] = useState<TransactionRequest>();
  const [dialogOpen, setDialogOpen] = useState(false);
  const { chains } = useNetwork()
  const { trigger, isMutating, error } = useSWRMutation(
    `/api/opensea/fulfillListing`,
    getFulfillmentTransactionData,
    {
      onSuccess: async (order) => {
        try {
          const orderTransaction = order.fulfillment_data.transaction;
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

  if (error) {
    return <></>;
  }

  return (
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
          <div className="flex flex-1 flex-col justify-start items-center lg:items-start">
            <h4 className={cn(titleCss, "px-0 lg:px-0 font-lg")}>
              <span className={gradientFonts(chain)}>{nft.name}</span>
            </h4>
            <Image
              className="flex p-3 bg-white max-w-[250px] lg:max-w-[350px]"
              src={nft.image_url}
              alt={nft.description || ""}
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
            {nft.traits.map((trait) => (
              <div className={traitContainer(chain)} key={trait.trait_type}>
                <div className="text-xs lg:text-sm">{trait.trait_type}</div>
                <div className="text-base lg:text-xl">{trait.value}</div>
              </div>
            ))}
          </div>
        </div>
        <DialogFooter className="flex justify-center items-center lg:mr-4">
          {userWalletAddress && tx ? (
            <>
              <span className="text-sm mr-4 my-2 lg:my-0">
                Make sure your wallet is connected to: {chain}
              </span>
              <Button
                size="lg"
                disabled={isMutating}
                onClick={async () => {
                  if (userWalletAddress && tx) {
                    const receipt = await buyBroBtnClickHandler(
                      chain,
                      userWalletAddress,
                      tx,
                      chains,
                      setDialogOpen,
                      mutate
                    ).catch((e: any) => {
                      toast.error("An Error Occurred. You may try again.");
                    });
                    if (receipt && receipt.hash) {
                      toast.success("Purchase Successful!", {
                        description: `Tx: ${receipt?.hash}
                                        Chain: ${chain}`,
                        descriptionClassName: "leading-8",
                      });
                    }
                  } else {
                    toast(
                      "You need to connect your wallet using the button at the top of the website"
                    );
                  }
                }}
              >
                BUY NOW BRO
              </Button>
            </>
          ) : (
            <div>Please connect your wallet.</div>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmFloorBuyDialogBtn;
