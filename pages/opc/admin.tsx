import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeadMeta from "@/components/HeadMeta";
import opcPromo from "@/public/images/opc-claim-promo.png";
import SimpleInnerLayout from "@/components/SimpleInnerLayout";
import CustomConnectBtn from "@/components/CustomConnectBtn";
import { Button } from "@/components/ui/button";

const Admin = () => {
  const adminAddresses = [
    "0xE0767d2B47Ec6A28e97afbf3A626cdfB226065c1",
    "0x56507bF3b34e185596e83F0a8E0400Cbd303270F",
    "0xAc5710816790ABdD55BD2c1aE4551962D19942d0",
  ];
  const { address } = useAccount();
  const [adminAddress, setAdminAddress] = useState<string>();

  useEffect(() => {
    if (address) {
      setAdminAddress(address);
    }
  }, [address]);

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
          {address && adminAddresses.includes(address) ? (
            <Button onClick={() => console.log("hi")}>Set New Tree.</Button>
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
