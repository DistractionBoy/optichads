import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useWeb3React } from "@web3-react/core";

import superheroImg from "../public/images/chad-t.png";
import useSWR from "swr";
import { OwnerAddressesResponse } from "../pages/api/ownerAddresses";
import SuggestionChadForm from "./SuggestionChadForm";
import WannabeChadForm from "./WannabeChadForm";
import { getIsHolderOfCollection } from "../lib/helpers";
import DisconnectedChadForm from "./DisconnectedChadForm";

export default function DarkHeroSectionClouds() {
  const { account } = useWeb3React();
  const [statefulAccount, setStatefulAccount] = useState<string>();
  const [isChadBro, setIsChadBro] = useState<boolean>();

  const { data } = useSWR<OwnerAddressesResponse>(
    `/api/ownerAddresses?contractAddress=${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`,
    {
      onSuccess(data) {
        setIsChadBro(account ? data.ownerAddresses.includes(account) : false);
      },
    }
  );

  useEffect(() => {
    if (account) {
      if (
        typeof statefulAccount === "undefined" ||
        statefulAccount !== account
      ) {
        setStatefulAccount(account);
        getIsHolderOfCollection(
          account,
          process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string
        )
          .then(({ isHolderOfCollection }) =>
            setIsChadBro(isHolderOfCollection)
          )
          .catch((e) => console.log(e));
      }
    }
  }, [account, isChadBro, statefulAccount]);

  return (
    <div className="relative overflow-hidden">
      <main>
        <div className="bg-gray-900 bg-gradient-to-br from-[#da10109e] via-transparent to-[#da10109e] pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                {account ? (
                  data && isChadBro ? (
                    <SuggestionChadForm />
                  ) : (
                    <WannabeChadForm />
                  )
                ) : (
                  <DisconnectedChadForm />
                )}
              </div>
              <div className="mt-12 -mb-16 sm:-mb-28 lg:relative lg:m-0">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  <Image
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={superheroImg}
                    width={660}
                    height={660}
                    layout="intrinsic"
                    priority
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
