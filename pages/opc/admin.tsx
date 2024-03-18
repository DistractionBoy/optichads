import React, { useEffect, useState } from "react";
import { useAccount, useNetwork } from "wagmi";

import claimAbi from "@/lib/contractABIs/opchadclaim.json";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeadMeta from "@/components/HeadMeta";
import opcPromo from "@/public/images/opc-claim-promo.png";
import SimpleInnerLayout from "@/components/SimpleInnerLayout";
import CustomConnectBtn from "@/components/CustomConnectBtn";
import { Button } from "@/components/ui/button";
import { ethers } from "ethers";
import { toast } from "sonner";
import { TypedFetch } from "@/lib/TypedFetch";
import { Tree } from "../api/zodSchemas";
import useSWR from "swr";

const adminAddresses = [
  "0xE0767d2B47Ec6A28e97afbf3A626cdfB226065c1",
  "0x56507bF3b34e185596e83F0a8E0400Cbd303270F",
  "0xAc5710816790ABdD55BD2c1aE4551962D19942d0",
];

const Admin = () => {
  const { chains } = useNetwork();
  const { address: userWalletAddress } = useAccount();
  const [adminAddress, setAdminAddress] = useState<string>();
  const { data, isLoading, error } = useSWR(
    userWalletAddress !== undefined
      ? `/api/admin/getTreeRoot?address=${userWalletAddress}`
      : undefined,
    TypedFetch(Tree)
  );

  useEffect(() => {
    if (userWalletAddress) {
      setAdminAddress(userWalletAddress);
    }
  }, [userWalletAddress]);

  const setTreeRoot = async (address: string, root: string) => {
    try {
      if (window.ethereum === null || window.ethereum === undefined) {
        throw new Error("wallet not connected");
      }
      if (root === null) {
        throw new Error(`root not found for user: ${address}`);
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
      const setMerkleRootFragment =
        claimRewardsInterface.getFunction("setMerkleRoot");

      if (setMerkleRootFragment === null) {
        throw new Error("function not present");
      } else {
        const encodedData = claimRewardsInterface.encodeFunctionData(
          setMerkleRootFragment,
          [root]
        );
        debugger;
        const response: ethers.TransactionResponse =
          await signer.sendTransaction({
            to: process.env.NEXT_PUBLIC_OPCHADCLAIM_CONTRACT,
            from: userWalletAddress,
            data: encodedData,
          });
        const receipt = await response.wait();
        debugger;
        toast(receipt?.toJSON());
      }
    } catch (e: any) {
      console.log("message: ", e.message);
    }
  };

  return (
    <>
      <HeadMeta
        title="Admin Page"
        description="For Devs and Dicaso Only"
        img={`${opcPromo.src}`}
      />
      <div className="bg-[#FB0420] flex w-screen h-[86px] z-10" />
      <Navbar />
      <SimpleInnerLayout title="Admin">
        <div className="prose xl:prose-xl desktop:prose-2xl mx-12 text-slate-800">
          <h2>Set Merkle Tree</h2>
          {data &&
          userWalletAddress &&
          adminAddresses.includes(userWalletAddress) ? (
            <Button onClick={() => setTreeRoot(userWalletAddress, data.root)}>
              Set New Tree.
            </Button>
          ) : (
            <CustomConnectBtn />
          )}
        </div>
      </SimpleInnerLayout>
      <Footer />
    </>
  );
};

export default Admin;
