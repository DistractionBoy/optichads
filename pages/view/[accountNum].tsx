import React, { useEffect, useState } from "react";
import { hooks } from "../../lib/connectors/metaMask";

import BUNNIES_CONTRACT_ABI from "../../lib/contracts/optichads.json";
// import PIXEL_CONTRACT_ABI from "../../lib/contracts/pbunny.json";
// import CITIZENS_CONTRACT_ABI from "../../lib/contracts/citizens.json";
import DarkOverlapShell from "../../components/DarkOverlapShell";
import { Contract, ContractInterface } from "@ethersproject/contracts";
import NFTDetailView from "../../components/NFTDetailView";
import NFTCard from "../../components/NFTCard";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getMyTokenIds } from "../../lib/helpers";
import HeadMeta from "../../components/HeadMeta";

const { useProvider } = hooks;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { accountNum } = context.query;
  return {
    props: {
      accountNum: accountNum as string,
    },
  };
};

export default function View({
  accountNum,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const provider = useProvider();
  const [myBunnies, setMyBunnies] = useState<number[]>([]);
  const [myPixelBunnies, setMyPixelBunnies] = useState<number[]>([]);
  const [myCitizens, setMyCitizens] = useState<number[]>([]);
  const [myBunniesLoading, setMyBunniesLoading] = useState<boolean>(false);

  useEffect(() => {
    if (typeof accountNum !== "undefined" && provider) {
      setMyBunniesLoading(true);
      const opBunnyContract: Contract = new Contract(
        process.env.NEXT_PUBLIC_BUNNY_ADDRESS as string,
        BUNNIES_CONTRACT_ABI as ContractInterface,
        provider
      );
      const pixelBunnyContract: Contract = new Contract(
        process.env.NEXT_PUBLIC_BUNNY_ADDRESS as string,
        BUNNIES_CONTRACT_ABI as ContractInterface,
        provider
      );
      const citizensContract: Contract = new Contract(
        process.env.NEXT_PUBLIC_CITIZEN_ADDRESS as string,
        BUNNIES_CONTRACT_ABI as ContractInterface,
        provider
      );
      getMyTokenIds(opBunnyContract, accountNum).then((tokenIds) => {
        setMyBunniesLoading(false);
        setMyBunnies(tokenIds);
      });
      getMyTokenIds(pixelBunnyContract, accountNum).then((tokenIds) => {
        setMyPixelBunnies(tokenIds);
      });
      getMyTokenIds(citizensContract, accountNum).then((tokenIds) => {
        setMyCitizens(tokenIds);
      });
    }
  }, [accountNum, provider]);

  return (
    <>
      <HeadMeta
        title={`My Optiland NFT's`}
        description={`With a connected wallet, you can use this page to view the Optiland NFT's that you own`}
        keywords={`View, Optiland, Non-Fungible Tokens`}
      />
      <DarkOverlapShell title="My Optiland NFT's">
        <div className="flex flex-col rounded-lg bg-white shadow">
          {myBunniesLoading && myBunnies.length === 0 && (
            <div className="px-4 py-5 sm:mb-16 sm:p-6">
              <h3 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Loading...
              </h3>
            </div>
          )}
          {myBunnies.length > 0 && (
            <div className="px-4 py-5 sm:mb-16 sm:p-6">
              <h3 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Optimistic Bunnies
              </h3>

              {myBunnies.length <= 5 ? (
                <div className="mt-6 flex flex-col">
                  {myBunnies.map((tokenId, idx) => (
                    <NFTDetailView
                      key={idx}
                      id={tokenId}
                      collection="bunny"
                      showBreadcrumbs={false}
                    />
                  ))}
                </div>
              ) : (
                <div className="mt-12 grid grid-cols-1 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 md:gap-y-0 lg:grid-cols-8 lg:gap-x-8 2xl:grid-cols-12">
                  {myBunnies.map((tokenId, idx) => (
                    <NFTCard key={idx} id={tokenId} collection="bunny" />
                  ))}
                </div>
              )}
            </div>
          )}
          {myPixelBunnies.length > 0 && (
            <div className="px-4 py-5 sm:mb-16 sm:p-6">
              <h3 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Pixelated Bunnies
              </h3>

              {myPixelBunnies.length <= 5 ? (
                <div className="mt-6 flex flex-col">
                  {myPixelBunnies.map((tokenId, idx) => (
                    <NFTDetailView
                      key={idx}
                      id={tokenId}
                      collection="pbunny"
                      showBreadcrumbs={false}
                    />
                  ))}
                </div>
              ) : (
                <div className="mt-12 grid grid-cols-1 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 md:gap-y-0 lg:grid-cols-8 lg:gap-x-8 2xl:grid-cols-12">
                  {myPixelBunnies.map((tokenId, idx) => (
                    <NFTCard key={idx} id={tokenId} collection="pbunny" />
                  ))}
                </div>
              )}
            </div>
          )}
          {myCitizens.length > 0 && (
            <div className="px-4 py-5 sm:mb-16 sm:p-6">
              <h3 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Optiland Citizens
              </h3>

              {myCitizens.length <= 5 ? (
                <div className="mt-6 flex flex-col">
                  {myCitizens.map((tokenId, idx) => (
                    <NFTDetailView
                      key={idx}
                      id={tokenId}
                      collection="citizen"
                      showBreadcrumbs={false}
                    />
                  ))}
                </div>
              ) : (
                <div className="mt-12 grid grid-cols-1 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 md:gap-y-0 lg:grid-cols-8 lg:gap-x-8 2xl:grid-cols-12">
                  {myCitizens.map((tokenId, idx) => (
                    <NFTCard key={idx} id={tokenId} collection="citizen" />
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
