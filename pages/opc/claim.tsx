import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeadMeta from "@/components/HeadMeta";
import SimpleInnerLayout from "@/components/SimpleInnerLayout";
import { TracingBeam } from "@/components/ui/tracing-beam";
import opcPromo from "@/public/images/opc-claim-promo.png";

import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { useAccount } from "wagmi";
import CustomConnectBtn from "@/components/CustomConnectBtn";
import ClaimWhitelistTable from "@/components/opc/ClaimWhitelistTable";

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
        <TracingBeam className="px-0">
          <div className="prose xl:prose-xl prose-slate mx-12 lg:mx-8">
            <h2>Claim $OPC</h2>
            <p className="lead">
              Connect below (if not already connected) and claim your $OPC.
            </p>
            <Image
              className="aspect-[3/2] lg:aspect-square w-full rounded-2xl object-cover"
              src={opcPromo}
              alt=""
              priority
            />
            {isConnected ? <ClaimWhitelistTable /> : <CustomConnectBtn />}
          </div>
        </TracingBeam>
      </SimpleInnerLayout>
      <BackgroundBeams />
      <Footer />
    </>
  );
};

export default Claim;
