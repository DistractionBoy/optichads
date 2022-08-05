import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { hooks } from "../../lib/connectors/metaMask";

import CONTRACT_ABI from "../../lib/contracts/optichads.json";
import DarkOverlapShell from "../../components/DarkOverlapShell";
import { Contract, ContractInterface } from "@ethersproject/contracts";
import NFTDetailView from "../../components/NFTDetailView";
import NFTCard from "../../components/NFTCard";
import { getMyTokenIds } from "../../lib/helpers";
import HeadMeta from "../../components/HeadMeta";

const { useProvider } = hooks;

export default function ViewPage() {
  const { account } = useWeb3React();
  const provider = useProvider();
  const [myChads, setMyChads] = useState<number[]>([]);
  const [myChadsLoading, setMyChadsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (typeof account !== "undefined" && provider) {
      setMyChadsLoading(true);
      const chadContract: Contract = new Contract(
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string,
        CONTRACT_ABI as ContractInterface,
        provider
      );
      getMyTokenIds(chadContract, account).then((tokenIds) => {
        setMyChadsLoading(false);
        setMyChads(tokenIds);
      });
    }
  }, [account, provider]);

  return (
    <>
      <HeadMeta
        title={`My OptiChad NFT's`}
        description={`With a connected wallet, you can use this page to view the OptiChad NFT's that you own`}
        keywords={`View, OptiChad, Non-Fungible Tokens`}
      />
      <DarkOverlapShell title="My Optiland NFT's">
        <div className="flex flex-col bg-white rounded-lg shadow">
          {myChadsLoading && myChads.length === 0 && (
            <div className="px-4 py-5 sm:p-6 sm:mb-16">
              <h3 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Loading...
              </h3>
            </div>
          )}
          {myChads.length > 0 && (
            <div className="px-4 py-5 sm:p-6 sm:mb-16">
              <h3 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                OptiChads
              </h3>

              {myChads.length <= 5 ? (
                <div className="flex flex-col mt-6">
                  {myChads.map((tokenId, idx) => (
                    <NFTDetailView
                      key={idx}
                      id={tokenId}
                      collection="chads"
                      showBreadcrumbs={false}
                    />
                  ))}
                </div>
              ) : (
                <div className="mt-12 grid grid-cols-1 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-8 2xl:grid-cols-12 md:gap-y-0 lg:gap-x-8">
                  {myChads.map((tokenId, idx) => (
                    <NFTCard key={idx} id={tokenId} collection="chads" />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </DarkOverlapShell>
    </>
  );
}
