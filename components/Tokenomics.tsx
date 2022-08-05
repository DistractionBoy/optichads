import { BigNumber, Contract, ContractInterface } from "ethers";
import React, { useEffect, useState } from "react";

import { hooks } from "../lib/connectors/metaMask";
import OPTICHADS_CONTRACT_ABI from "../lib/contracts/optichads.json";
import { getTotalSupply } from "../lib/helpers";

const { useProvider } = hooks;

export default function Tokenomics() {
  const provider = useProvider();
  const [contract, setContract] = useState<Contract>();
  const [totalSupply, setTotalSupply] = useState<BigNumber>();

  useEffect(() => {
    if (provider && !contract) {
      const abi: ContractInterface = OPTICHADS_CONTRACT_ABI;

      const chadContract = new Contract(
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string,
        abi,
        provider
      );

      setContract(chadContract);

      if (!totalSupply) {
        getTotalSupply(chadContract)
          .then((totalMinted) => setTotalSupply(BigNumber.from(totalMinted)))
          .catch(() => setTotalSupply(undefined));
      }
    }
  }, [provider, contract, totalSupply]);

  return (
    <div className="bg-white py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-700 sm:text-4xl">
            OptiChads Tokenomics
          </h2>
          {!provider && (
            <p className="mt-3 text-xl text-gray-600 sm:mt-4">
              Connect wallet to see contract totals
            </p>
          )}
        </div>
      </div>
      <div className="mt-10 pb-12 bg-white sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-white" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-gray-100 shadow-lg sm:grid sm:grid-cols-3">
                {totalSupply ? (
                  <div className="flex flex-col border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-700">
                      Minted
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-red-600">
                      {totalSupply && totalSupply.toNumber()}
                    </dd>
                  </div>
                ) : (
                  <div className="flex flex-col border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-700">
                      Total Supply
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-red-600">
                      10,000 reps
                    </dd>
                  </div>
                )}

                {totalSupply ? (
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-700">
                      Remaining
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-red-600">
                      {totalSupply && `${10000 - totalSupply.toNumber()}`}
                    </dd>
                  </div>
                ) : (
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-700">
                      Symbol
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-red-600">
                      $CHAD
                    </dd>
                  </div>
                )}

                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-700">
                    Minters unsatisfied
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-red-600">
                    0
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
