import { BigNumber, Contract, ContractInterface } from "ethers";
import React, { useEffect, useState } from "react";

import { hooks } from "../lib/connectors/metaMask";
import CV_CONTRACT_ABI from "../lib/contracts/cryptovania.json";
import {
  getNumberHumans,
  getTotalSupply,
  getNumberVampires,
} from "../lib/helpers";

const { useProvider } = hooks;

export default function Tokenomics() {
  const provider = useProvider();
  const [contract, setContract] = useState<Contract>();
  const [totalSupply, setTotalSupply] = useState<BigNumber>();
  const [numberHumans, setNumberHumans] = useState<BigNumber>();
  const [numberVampires, setNumberVampires] = useState<BigNumber>();

  useEffect(() => {
    if (provider && !contract) {
      const abi: ContractInterface = CV_CONTRACT_ABI;

      const cvContract = new Contract(
        process.env.NEXT_PUBLIC_CV_ADDRESS as string,
        abi,
        provider
      );

      setContract(cvContract);

      if (!totalSupply) {
        getTotalSupply(cvContract)
          .then((totalMinted) => setTotalSupply(BigNumber.from(totalMinted)))
          .catch(() => setTotalSupply(undefined));
      }

      if (!numberHumans) {
        getNumberHumans(cvContract)
          .then((totalMinted) => setNumberHumans(BigNumber.from(totalMinted)))
          .catch(() => setNumberHumans(undefined));
      }

      if (!numberVampires) {
        getNumberVampires(cvContract)
          .then((totalMinted) => setNumberVampires(BigNumber.from(totalMinted)))
          .catch(() => setNumberVampires(undefined));
      }
    }
  }, [provider, contract, totalSupply, numberHumans, numberVampires]);

  return (
    <div className="bg-gray-900 pt-12 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-200 sm:text-4xl">
            Cryptovania Tokenomics
          </h2>
          {!provider && (
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              sign the logbook to see what is unseen
            </p>
          )}
        </div>
      </div>
      <div className="mt-10 pb-12 bg-gray-900 sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-900" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-gray-800 shadow-lg sm:grid sm:grid-cols-3">
                {numberHumans ? (
                  <div className="flex flex-col border-gray-800 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-300">
                      Cryptovanians Remain
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-red-600">
                      {numberHumans && numberHumans.toNumber()}
                    </dd>
                  </div>
                ) : (
                  <div className="flex flex-col border-gray-800 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-300">
                      Cryptovanians Created
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-red-600">
                      2794
                    </dd>
                  </div>
                )}

                {numberVampires ? (
                  <div className="flex flex-col border-t border-gray-800 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-300">
                      Claimed Immortality
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-red-600">
                      {numberVampires && numberVampires.toNumber()}
                    </dd>
                  </div>
                ) : (
                  <div className="flex flex-col border-t border-gray-800 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-300">
                      Perished
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-red-600">
                      1003
                    </dd>
                  </div>
                )}

                <div className="flex flex-col border-t border-gray-800 p-6 text-center sm:border-0">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-300">
                    Bounties Claimed
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
