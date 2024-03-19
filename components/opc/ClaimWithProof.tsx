import useSWR from "swr";
import { ExclamationTriangleIcon, LaptopIcon } from "@radix-ui/react-icons";

import { TypedFetch } from "@/lib/TypedFetch";
import { Claimer, GasEstimateResponse } from "@/pages/api/zodSchemas";

import claimAbi from "@/lib/contractABIs/opchadclaim.json";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAccount, useNetwork } from "wagmi";
import { shortenHex } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Button } from "../ui/button";
import { TransactionRequest, ethers, verifyMessage } from "ethers";
import { toast } from "sonner";
import { sign } from "@/lib/helpers";

const ClaimWithProof = () => {
  const { chains } = useNetwork();
  const { address: userWalletAddress } = useAccount();
  const { data, isLoading, error } = useSWR(
    userWalletAddress !== undefined
      ? `/api/whitelist?address=${userWalletAddress}`
      : undefined,
    TypedFetch(Claimer)
  );

  const claimBtnClick = async (
    address: string,
    amount: number,
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
      debugger;
      if (claimRewardsFragment === null) {
        throw new Error("function not present");
      } else {
        const encodedData = claimRewardsInterface.encodeFunctionData(
          claimRewardsFragment,
          [BigInt(991700000000000000000000),
            [
              "0x975fa0a80daf8dbb193ef6948391e19edbed218a9e99e417261805afecae1780",
              "0x2f740e9adce1c46632626ac4d478c0503d8721431173f6f7f2fd494dd0d0ff26",
              "0xc328702e65fd6e629071ab4ba12fb6ffa0dd58a7df15c60bb7ebb1da750f8c3b",
            ],
          ]
        );
        debugger;
        await sign(signer, "OPChadCoin Token Claim.").then(
          async (signature) => {
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
                gasPrice: "0x5208",
              });
            const receipt = await response.wait();
            debugger;
            toast(receipt?.toJSON());
          }
        );
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
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Address</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                {userWalletAddress && shortenHex(data.address)}
              </TableCell>
              <TableCell className="text-right">{data.amount} $OPC</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button
          onClick={() => {
            claimBtnClick(userWalletAddress, data.amount, data.proof);
          }}
        >
          Claim
        </Button>
      </div>
    )
  );
};

export default ClaimWithProof;
