import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeadMeta from "@/components/HeadMeta";
import SimpleInnerLayout from "@/components/SimpleInnerLayout";

import opcPromo from "@/public/images/opc-claim-promo.png";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { useAccount } from "wagmi";
import CustomConnectBtn from "@/components/CustomConnectBtn";
import ClaimTotals from "@/components/opc/ClaimTotals";

const Claim = () => {
  const { isConnected } = useAccount();
  const [connected, setConnected] = useState<boolean>(false);

  useEffect(() => {
    if (isConnected) {
      setConnected(isConnected);
    }
  }, [isConnected]);

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
        <div className="mx-6">
          {connected ? <ClaimTotals /> : <CustomConnectBtn />}
        </div>
      </SimpleInnerLayout>
      <BackgroundBeams />
      <Footer />
    </>
  );
};

export default Claim;
