import React from "react";
import useSWR from "swr";

import { CollectionStatsResponse } from "../pages/api/quixCollectionStats";
import TokenomicsLoading from "./TokenomicLoading";

const TotalSupply = () => {
  const { data, error, isValidating } = useSWR<CollectionStatsResponse>(
    `/api/quixCollectionStats?contractAddress=${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`
  );
  const loading = !data && !error && isValidating;

  if (loading) {
    <TokenomicsLoading />;
  }

  if (error) {
    return (
      <div className="flex flex-col border-gray-100 p-6 text-center sm:border-0 sm:border-r">
        <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-700">
          Minted
        </dt>
        <dd className="order-1 text-5xl font-extrabold text-red-600">10,000</dd>
      </div>
    );
  }

  return data ? (
    <div className="flex flex-col border-gray-100 p-6 text-center sm:border-0 sm:border-r">
      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-700">
        Reps Today
      </dt>
      <dd className="order-1 text-5xl font-extrabold text-red-600">
        {data.stats?.one_day_sales}
      </dd>
    </div>
  ) : null;
};

export default TotalSupply;
