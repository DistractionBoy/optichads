import { useState } from "react";
import { toast } from "sonner";
import useSWR from "swr";
import { ExclamationTriangleIcon, LaptopIcon } from "@radix-ui/react-icons";
import { ethers, toBigInt, verifyMessage } from "ethers";
import Pride from "react-canvas-confetti/dist/presets/pride";

import { TypedFetch } from "@/lib/TypedFetch";
import { Claimer } from "@/pages/api/zodSchemas";

import claimAbi from "@/lib/contractABIs/opchadclaim.json";

import { useAccount, useNetwork } from "wagmi";
import { cn } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Button, divergentLinkButtonCSS } from "../ui/button";
import { sign } from "@/lib/helpers";
import Image from "next/image";
import opcSuccess from "@/public/images/opc-success.png";

const proofConst = [
  "0x965d3c8ca6137abce6633e24550ec648d5ef48e3c56ae9b649ecdbe94c1aab63",
  "0x4cb92888ef71b538f61b10ed07a833a0140388389254462600d18500ff06ef4f",
  "0x185fc02cadc465286268755023ac6870e1a399d63a248768e3e410c7d0a34890",
  "0x55858754a0bb2356dbf7c63f0002c013daac5b27dcf41fd3ca58b3d4347188d7",
  "0x5143286fc722f9d674334129634d01b2b8429e3e47f44fb612a04cdd4cac741a",
  "0x2c6ea9b18de5bad1fb55163b74224bb4f690787b1504a105736a489cd1e3a1c0",
];

const amountConst = toBigInt("991700000000000000000000");

const ClaimWithProof = () => {
  const { chains } = useNetwork();
  const { address: userWalletAddress } = useAccount();
  const { data, isLoading, error } = useSWR(
    userWalletAddress !== undefined
      ? `/api/whitelist?address=${userWalletAddress}`
      : undefined,
    TypedFetch(Claimer)
  );

  const [receipt, setReceipt] = useState<ethers.TransactionReceipt | null>(
    null
  );

  const claimBtnClick = async (
    address: string,
    amount: bigint,
    proof: string[]
  ) => {
    try {
      if (window.ethereum === null || window.ethereum === undefined) {
        throw new Error("wallet not connected");
      }
      if (proof === null) {
        throw new Error(`proof not found for user: ${address}`);
      }
      const browserProvider = new ethers.BrowserProvider(
        window.ethereum,
        "optimism-sepolia"
      );

      let chainID = await chains.filter(
        (obj) => obj.name == "Optimism Sepolia"
      );

      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x" + chainID[0].id.toString(16) }],
      });

      const signer: ethers.Signer =
        await browserProvider.getSigner(userWalletAddress);

      const claimRewardsInterface = new ethers.Interface(claimAbi);
      const claimRewardsFragment =
        claimRewardsInterface.getFunction("claimRewards");
      if (claimRewardsFragment === null) {
        throw new Error("function not present");
      } else {
        const encodedData = claimRewardsInterface.encodeFunctionData(
          claimRewardsFragment,
          [amount, proof]
        );
        await sign(signer, "OPChadCoin Token Claim.")
          .then(async (signature) => {
            const result = verifyMessage(
              "OPChadCoin Token Claim.",
              signature as string
            );
            if (result !== userWalletAddress) {
              throw new Error(
                "Singature failed, are you who you say you are bro?"
              );
            }

            const response: ethers.TransactionResponse =
              await signer.sendTransaction({
                to: process.env.NEXT_PUBLIC_OPCHADCLAIM_CONTRACT,
                from: userWalletAddress,
                data: encodedData,
              });
            const TxReceipt = await response.wait();
            setReceipt(TxReceipt);
          })
          .catch((e) => {
            if (e.message === "User rejected the request.") {
              toast.error("Signature Rejected");
            } else {
              toast.error("Execution Revered due to an error", {
                description: e.message ?? "Please try again",
              });
            }
          });
      }
    } catch (e: any) {
      console.log("message: ", e.message);
    }
  };

  if (isLoading) {
    return (
      <Alert variant="default">
        <LaptopIcon className="h-4 w-4" />
        <AlertTitle>Loading...</AlertTitle>
        <AlertDescription>Checking allocations...</AlertDescription>
      </Alert>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>Uh oh,</AlertTitle>
        <AlertDescription>
          We are sorry but it appears that there was an error or you did not
          have any holdings that conributed towards this drop.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    data &&
    userWalletAddress && (
      <div className="flex flex-col">
        <Button
          onClick={() => {
            claimBtnClick(
              userWalletAddress,
              toBigInt(data.amount),
              data.proof
            );
          }}
          className={cn(divergentLinkButtonCSS, "self-start my-6")}
        >
          Claim
        </Button>
        {receipt && (
          <div className="flex flex-col space-y-4 mt-12">
            <div className="prose-xl">
              <h2>NEW PERSONAL MAX!</h2>
              <p>
                Well done, Chad, you are one of the select few, the first one in
                the gym, and the last one to leave.
              </p>
            </div>
            <Image
              className="aspect-[3/2] w-full rounded-2xl object-cover object-top max-w-[720px] self-center"
              src={opcSuccess}
              alt=""
              priority
            />
            <Pride autorun={{ speed: 15 }} />
            <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center w-full py-2 space-y-2">
              <div className="flex min-w-[80px] font-semibold">Tx hash</div>
              <div className="break-all">{receipt.hash}</div>
            </div>
            <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center w-full py-2 space-y-2">
              <div className="flex min-w-[80px] font-semibold">From</div>
              <div className="break-all">{receipt.from}</div>
            </div>
            <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center w-full py-2 space-y-2">
              <div className="flex min-w-[80px] font-semibold">
                Contract Address
              </div>
              <div className="break-all">{receipt.to}</div>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default ClaimWithProof;
