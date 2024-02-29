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
import { Button, divergentLinkButtonCSS } from "@/components/ui/button";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Bio = () => {
  const { address, isConnected } = useAccount();

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
              Claim your $OPC Below. Always do your own research, not financial
              advice, yatta yatta, you know the thing.
            </p>
            <Image
              className="aspect-[3/2] lg:aspect-square w-full rounded-2xl object-cover"
              src={opcPromo}
              alt=""
              priority
            />
            {isConnected ? (
              <Button className={divergentLinkButtonCSS}>I am ready</Button>
            ) : (
              <ConnectButton.Custom>
                {({
                  account,
                  chain,
                  openConnectModal,
                  authenticationStatus,
                  mounted,
                }) => {
                  const ready = mounted && authenticationStatus !== "loading";
                  const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                      authenticationStatus === "authenticated");
                  return (
                    <div
                      {...(!ready && {
                        "aria-hidden": true,
                        style: {
                          opacity: 0,
                          pointerEvents: "none",
                          userSelect: "none",
                        },
                      })}
                    >
                      {(() => {
                        if (!connected) {
                          return (
                            <Button
                              className={divergentLinkButtonCSS}
                              onClick={openConnectModal}
                            >
                              Connect
                            </Button>
                          );
                        }
                      })()}
                    </div>
                  );
                }}
              </ConnectButton.Custom>
            )}
          </div>
        </TracingBeam>
      </SimpleInnerLayout>
      <BackgroundBeams />
      <Footer />
    </>
  );
};

export default Bio;
