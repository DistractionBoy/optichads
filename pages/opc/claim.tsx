import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeadMeta from "@/components/HeadMeta";
import SimpleInnerLayout from "@/components/SimpleInnerLayout";
import opcPromo from "@/public/images/opc-claim-promo.png";

import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { useAccount } from "wagmi";
import CustomConnectBtn from "@/components/CustomConnectBtn";
import ClaimTotals from "@/components/opc/ClaimTotals";

const Claim = () => {
  const { isConnected } = useAccount();

  return (
    <>
      <HeadMeta
        title="Claim Page"
        description="Claim your airdrop here! OptiChad holders get the largest claim percentages, but we opened up the drop to many L2 communities in hopes we can gain more traction for our NFT-focused OptiChads DAO."
        img={`${opcPromo.src}`}
      />
      <div className="bg-[#FB0420] flex w-screen h-[86px] z-10" />
      <Navbar />
      <SimpleInnerLayout title="$OPC - Claim">
        <div className="prose xl:prose-xl desktop:prose-2xl mx-12 text-slate-800">
          <h2>Claim $OPC</h2>
          <p className="lead">Connect below and claim your $OPC.</p>
          <Image
            className="aspect-[3/2] lg:aspect-square w-full rounded-2xl object-cover"
            src={opcPromo}
            alt=""
            priority
          />
        </div>
        <div className="mx-6">
          {isConnected ? <ClaimTotals /> : <CustomConnectBtn />}
        </div>
      </SimpleInnerLayout>
      <BackgroundBeams />
      <Footer />
    </>
  );
};

export default Claim;
