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
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
// import { Alchemy, Network } from "alchemy-sdk";

const activities = [
  "not%20skipping%20leg%20day",
  "maxing%20out%20on%20curls",
  "shooting%20hoops",
  "touching%20grass",
  "doing%20crunches%20for%20the%20lols",
  "doing%20a%20handstand%20like%20blooh",
  "being%20my%20true%20self%20a%20chisled%20statue",
  "lifting",
  "running",
  "racing%20with%20my%20bros%20pulling%20tree%20stumps.",
  "smiling",
  "checking%20out%20my%20own%20glutes",
];

const tweetPrimer = (amount: string | number) =>
  `https://twitter.com/intent/tweet?text=I%20Just%20Claimed%20${amount}%20%24OPC%20at%20https%3A%2F%2Foptichads.art%2Ftoken%20while%20${activities[Math.floor(Math.random() * activities.length)]}.%20I%27m%20not%20telling%20you%20for%20my%20health%20tho%20bro%2C%20you%20should%20totally%20see%20if%20you%20are%20eligible.&hashtags=OptiChads`;

const ClaimWithProof = () => {
  const { chains } = useNetwork();
  const { address: userWalletAddress } = useAccount();
  const [wrongWallet, setWrongWallet] = useState<boolean>(false);
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
        throw new Error("no browser wallet detected");
      }
      if (proof === null) {
        throw new Error(`proof not found for user: ${address}`);
      }
      setWrongWallet(false);
      const browserProvider = new ethers.BrowserProvider(
        window.ethereum,
        "optimism"
      );
      let chainID = await chains.filter((obj) => obj.id === 10);
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
        await sign(signer, "$OPC Token Claim.")
          .then(async (signature) => {
            const result = verifyMessage(
              "$OPC Token Claim.",
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
            if (
              e.message === "Singature failed, are you who you say you are bro?"
            ) {
              toast.error("Signature Failed");
            } else {
              toast.error("Execution Revered due to an error", {
                description: "Please try again",
              });
            }
          });
      }
    } catch (e: any) {
      if (e.message === "no browser wallet detected") {
        // const settings = {
        //   apiKey: process.env.ALCHEMY_SEPOLIA_APIKEY, // Replace with your Alchemy API Key.
        //   network: Network.OPT_SEPOLIA, // Replace with your network.
        // };
        // const alchemy = new Alchemy(settings);
        setWrongWallet(true);
      }

      console.log("message: ", e.message);
    }
  };

  if (isLoading) {
    return (
      <Alert variant="default" className="my-20">
        <LaptopIcon className="h-4 w-4" />
        <AlertTitle>Loading...</AlertTitle>
        <AlertDescription>Checking allocations...</AlertDescription>
      </Alert>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="my-20">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>Uh oh,</AlertTitle>
        <AlertDescription>
          We are sorry but it appears that there was an error getting your
          records or you did not have any holdings that conributed towards this
          drop.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    data &&
    userWalletAddress && (
      <div className="flex flex-col">
        {wrongWallet && (
          <div className="prose prose-xl my-2 mx-6">
            <p>
              The wallet you have currently connected will{" "}
              <span className="font-bold">not work </span>. What works
              consistently on mobile are any wallets like the Coinbase Wallet
              App and MetaMask that have a{" "}
              <span className="font-bold">built-in</span> browser.
            </p>
          </div>
        )}
        {!receipt && (
          <div className="prose prose-lg xl:prose-xl my-2 mx-6">
            <p>
              Wallets that do not make a direct connection with the browser like{" "}
              <span className="font-bold">Rainbow Wallet </span>are currently{" "}
              <span className="font-bold">not supported</span>. What works
              consistently on mobile are any wallets like the Coinbase Wallet
              App and MetaMask that have a{" "}
              <span className="font-bold">built-in</span> browser. Same goes for
              laptop/desktop. We are working on adding this functionality but
              did not want you to have to wait for this drop.
            </p>
            <p>
              Do not forget to fully disconnect one wallet if you have another
              wallet that you would like to try, and refresh this page. You will
              need a very small amount of ETH on the Optimism Network to claim.
              Please wait a few moments after sending the Transaction to see
              confirmation.
            </p>
          </div>
        )}

        {!receipt && (
          <Button
            onClick={() => {
              claimBtnClick(
                userWalletAddress,
                toBigInt(data.amount),
                data.proof
              );
            }}
            className={cn(divergentLinkButtonCSS, "self-start my-6 mx-6")}
          >
            Claim
          </Button>
        )}
        {receipt && (
          <div className="flex flex-col space-y-4 mt-12">
            <div className="prose prose-lg xl:prose-xl mt-2 mb-6 mx-6">
              <h2>NEW PERSONAL MAX!</h2>
              <h3>
                {(Number(data.amount) * 1) / 1000000000000000000} $OPC Claimed
              </h3>
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
            <div className="flex flex-col py-20">
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
                <div className="break-all">
                  0x48a9f8b4b65a55CC46eA557a610acf227454Ab09
                </div>
              </div>
            </div>
            <Link
              target="_blank"
              className={cn(
                divergentLinkButtonCSS,
                "flex self-center text-xl w-80"
              )}
              href={tweetPrimer(
                (Number(data.amount) * 1) / 1000000000000000000
              )}
            >
              <>
                <span className="mr-4 size-6">
                  <FontAwesomeIcon icon={faDumbbell} />
                </span>
                Send it
                <span className="ml-4 size-6">
                  <FontAwesomeIcon icon={faDumbbell} />
                </span>
              </>
            </Link>
          </div>
        )}
      </div>
    )
  );
};

export default ClaimWithProof;
