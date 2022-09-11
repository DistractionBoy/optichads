import React from "react";
import useSWR from "swr";
import { OwnerAddressesResponse } from "../pages/api/ownerAddresses";
import TokenomicsLoading from "./TokenomicLoading";

const NumOwners = () => {
  const { data, error, isValidating } = useSWR<OwnerAddressesResponse>(
    `/api/ownerAddresses?contractAddress=${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`
  );
  const loading = !data && !error && isValidating;

  if (loading) {
    return <TokenomicsLoading />;
  }

  if (error) {
    return (
      <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0">
        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-700">
          Minters unsatisfied
        </dt>
        <dd className="order-1 text-5xl font-extrabold text-red-600">0</dd>
      </div>
    );
  }

  return data ? (
    <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0">
      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-700">
        Owners
      </dt>
      <dd className="order-1 text-5xl font-extrabold text-red-600">
        {`${data?.ownerAddresses.length}`}
      </dd>
    </div>
  ) : null;
};

export default NumOwners;
