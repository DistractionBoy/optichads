import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "sonner";
import { Contract, TransactionReceipt, ethers, verifyMessage } from "ethers";
import { useAccount, useNetwork } from "wagmi";

import opchadclaim from "@/lib/contracts/opchadclaim.json";
import { Button, divergentLinkButtonCSS } from "../ui/button";
import { sign } from "@/lib/helpers";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { BestListingsResponse } from "@/pages/api/types";
import { KeyedMutator } from "swr";
import { cn } from "@/lib/utils";
import { BaseContract, ContractInterface } from "@ethersproject/contracts";

const claimTokensClickHandler = async (
  chain: string,
  userWalletAddress: string,
  chains: Array<any>,
  setDialogOpen: Dispatch<SetStateAction<boolean>>
) => {
  try {
    if (window.ethereum === null || window.ethereum === undefined) {
      throw new Error("wallet not connected");
    }
    const browserProvider = new ethers.BrowserProvider(window.ethereum, chain);

    let chainID = await chains.filter((obj) => obj.network == chain);

    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x" + chainID[0].id.toString(16) }],
    });

    const signer: ethers.Signer =
      await browserProvider.getSigner(userWalletAddress);

    const response = await sign(signer, "OPChadCoin Token Claim.").then(
      async (signature) => {
        const result = verifyMessage(
          "OPChadCoin Token Claim.",
          signature as string
        );
        if (result !== userWalletAddress) {
          throw new Error("Singature failed, are you who you say you are bro?");
        }
        const abi: ContractInterface = opchadclaim;

        const claimContract = new Contract(
          process.env.NEXT_PUBLIC_OPCHADCLAIM_CONTRACT as string,
          abi,
          signer
        );

        const connectedContract = claimContract.connect(signer);
        const tx: ethers.TransactionRequest = {
          to: "",
          from: userWalletAddress,
          data: "",
        };
        // connectedContract.runner?.sendTransaction({});
        console.log("contract: ", connectedContract);
        debugger;

        // const res: ethers.FunctionFragment =
        //   connectedContract.interface.getFunction("claimRewards");

        setDialogOpen(false);
        return claimContract;
      }
    );

    return response;
  } catch (e: any) {
    if (e.message.includes(`user rejected action`)) {
      toast.warning("Signature refused.", {
        action: {
          label: "Try again",
          onClick: () =>
            claimTokensClickHandler(
              chain,
              userWalletAddress,
              chains,
              setDialogOpen
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

type OpenClaimDialogBtnProps = {
  chain: string;
};

const OpenClaimDialogBtn = ({ chain }: OpenClaimDialogBtnProps) => {
  const { address: userWalletAddress } = useAccount();
  //   const [tx, setTx] = useState<TransactionRequest>();
  const [dialogOpen, setDialogOpen] = useState(false);
  const { chains } = useNetwork();

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button className={cn(divergentLinkButtonCSS, "-mr-2")}>
          Start Claiming
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Claim Tokens</DialogTitle>
        </DialogHeader>
        <DialogFooter className="flex justify-center items-center lg:mr-4">
          {userWalletAddress ? (
            <>
              <DialogClose asChild>
                <Button type="button" variant="secondary" size="lg">
                  Close
                </Button>
              </DialogClose>
              <Button
                size="lg"
                onClick={async () => {
                  if (userWalletAddress) {
                    const contract = await claimTokensClickHandler(
                      chain,
                      userWalletAddress,
                      chains,
                      setDialogOpen
                    ).catch((e: any) => {
                      toast.error("An Error Occurred. You may try again.");
                    });
                    if (contract) {
                      const connectedContract = contract.connect(
                        contract.runner
                      );
                      console.log("contract: ", connectedContract);
                      debugger;

                      // const res: ethers.FunctionFragment =
                      //   connectedContract.interface.getFunction("claimRewards");

                      debugger;
                    }

                    // const receipt: TransactionReceipt = await response.wait();
                    // if (receipt && receipt.hash) {
                    //   toast.success("Claim Successful!", {
                    //     description: `Tx: ${receipt?.hash}
                    //                     Chain: ${chain}`,
                    //     descriptionClassName: "leading-8",
                    //   });
                    // }
                  } else {
                    toast("You need to connect your wallet");
                  }
                }}
              >
                Claim
              </Button>
            </>
          ) : (
            <>
              <div>Please connect your wallet.</div>
              <DialogClose asChild>
                <Button type="button" variant="secondary" size="lg">
                  Close
                </Button>
              </DialogClose>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OpenClaimDialogBtn;
