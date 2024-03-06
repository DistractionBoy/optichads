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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
              Connect below (if not already connected) and claim your $OPC.
            </p>
            <Image
              className="aspect-[3/2] lg:aspect-square w-full rounded-2xl object-cover"
              src={opcPromo}
              alt=""
              priority
            />
            {isConnected ? (
              <Table>
                <TableCaption>
                  Hop on the scale, bro. Let&apos;s see how shredded you are
                  going to get!
                </TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Group</TableHead>

                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>OptiChads (14000 x 10)</TableCell>
                    <TableCell className="text-right">1400000 $OPC</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Total</TableCell>
                    <TableCell className="text-right">1400000 $OPC</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            ) : (
              <CustomConnectBtn />
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
