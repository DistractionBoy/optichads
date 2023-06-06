import React from "react";

import { useContractRead } from 'wagmi'
import TokenomicsLoading from "./TokenomicLoading";
import ARBIBABES_CONTRACT_ABI from "../lib/contracts/arbibabes.json";

const BabeTotalSupply = () => {
  const address : any = process.env.NEXT_PUBLIC_ARBIBABE_CONTRACT
  // return data BigInt need to convert to int
  const { data, isError, isLoading } = useContractRead({
    address: address,
    abi: ARBIBABES_CONTRACT_ABI,
    functionName: 'totalSupply',
    chainId: 42161
  })

  if (isLoading) {
    <TokenomicsLoading />;
  }

  if (isError) {
    return (
      <div className="flex flex-col  p-2 text-center">
        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-700">
          Reps
        </dt>
        <dd className="order-1 text-5xl font-extrabold text-red-600">10,000</dd>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-2 text-center">
      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-700">
        Minted
      </dt>
      <dd className="order-1 text-5xl font-extrabold text-red-600">
        {Number(data)}
      </dd>
    </div>
  )
};

export default BabeTotalSupply;
