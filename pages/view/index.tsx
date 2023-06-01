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
import { useAccount } from 'wagmi'

const { useProvider } = hooks;

export default function ViewPage() {
  const { address } = useAccount()
  const provider = useProvider();
  const [myChads, setMyChads] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (typeof address !== "undefined" && provider) {
      setLoading(true);
      const chadtract: Contract = new Contract(
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string,
        CONTRACT_ABI as ContractInterface,
        provider
      );
      getMyTokenIds(chadtract, address).then((tokenIds) => {
        setLoading(false);
        setMyChads(tokenIds);
      });
    }
  }, [address, provider]);

  return (
    <>
      <HeadMeta
        title={`View My OptiChads`}
        description={`With a connected wallet, you can use this page to view the OptiChad NFT's that you own`}
        keywords={`View, OptiChads, Non-Fungible Tokens`}
      />
      <DarkOverlapShell title="My OptiChads">
        <div className="flex flex-col rounded-lg bg-white shadow">
          {loading && (
            <div className="px-4 py-5 sm:mb-16 sm:p-6">
              <h3 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Loading...
              </h3>
            </div>
          )}
          {myChads.length > 0 && (
            <div className="px-4 py-5 sm:mb-16 sm:p-6">
              <h3 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                OptiChads
              </h3>

              {myChads.length <= 5 ? (
                <div className="mt-6 flex flex-col">
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
                <div className="mt-12 grid grid-cols-1 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 md:gap-y-0 lg:grid-cols-8 lg:gap-x-8 2xl:grid-cols-12">
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
