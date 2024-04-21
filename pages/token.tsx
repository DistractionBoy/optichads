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
import useSWR from "swr";
import { AlchemyCommonResponse } from "@/pages/api/types";


const dexScreener = `
<style>#dexscreener-embed{position:relative;width:100%;padding-bottom:125%;}@media(min-width:1400px)
{#dexscreener-embed{padding-bottom:65%;}}#dexscreener-embed 
iframe{position:absolute;width:100%;height:100%;top:0;left:0;border:0;}</style><div id="dexscreener-embed">
<iframe src="https://dexscreener.com/optimism/0x96AFC6ec69d599bc8Bf3c606a2D72EA89DD4ecbE?embed=1&theme=dark"></iframe></div>
`;

const Token = () => {
  const { isConnected, address } = useAccount();
  const [connected, setConnected] = useState<boolean>(false);

  useEffect(() => {
    if (isConnected) {
      setConnected(isConnected);
    }
  }, [isConnected]);
  
  const {
    data
  } = useSWR<AlchemyCommonResponse>(
    address !== undefined ? `/api/alchemy/getTokenOPC?chain=opt&address=${address}` : undefined
  );

  let token = data?.result.tokenBalances[0].tokenBalance;
  token = parseFloat((parseInt(token) * 1e-18).toFixed(2))
  
  return (
    <>
      <HeadMeta
        title="Claim Page"
        description="Claim your airdrop here! OptiChad holders get the largest claim percentages, but we opened up the drop to many superchain communities to show our love for your support over the years."
        img={`${opcPromo.src}`}
      />
      <div className="bg-[#FB0420] flex w-screen h-[86px] z-10" />
      <Navbar />
      <SimpleInnerLayout title="$OPC - Claim">
      {isConnected && data && <div className="-mt-20 mb-2 text-black">Your token balance: {token} $OPC</div>}
        <div
          className=""
          dangerouslySetInnerHTML={{
            __html: dexScreener.replace(/(<? *script)/gi, "illegalscript"),
          }}
        />

        {/* <div className="mx-6 py-8">
          {connected ? <ClaimTotals /> : <CustomConnectBtn />}
        </div> */}
      </SimpleInnerLayout>
      <BackgroundBeams />
      <Footer />
    </>
  );
};

export default Token;
