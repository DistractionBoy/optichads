import React from "react";
import useSWR from "swr";
import { CollectionStatsResponse } from "../pages/api/quixCollectionStats";
import TokenomicsLoading from "./TokenomicLoading";

const GymFloor = () => {
  const { data, error, isValidating } = useSWR<CollectionStatsResponse>(
    `/api/quixCollectionStats?contractAddress=${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`
  );

  const loading = !data && !error && isValidating;

  if (loading) {
    return <TokenomicsLoading />;
  }

  if (error) {
    return (
      <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-r">
        <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-700">
          Symbol
        </dt>
        <dd className="order-1 text-5xl font-extrabold text-red-600">$CHAD</dd>
      </div>
    );
  }

  return data ? (
    <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-r">
      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-700">
        Gym Floor
      </dt>
      <dd className="order-1 text-5xl font-extrabold text-red-600">{`${data.stats.floor_price.toFixed(
        3
      )}OΞ`}</dd>
    </div>
  ) : null;
};

export default GymFloor;

// const {
//   data: floor,
//   error,
//   isValidating,
// } = useSWR<FloorPriceResponse>(
//   `/api/floorPrice?collection=${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`
// );

// return floor ? (
//   <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-r">
//     <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-700">
//       Gym Floor
//     </dt>
//     <dd className="order-1 text-5xl font-extrabold text-red-600">
//       {`${floor.price}`}
//     </dd>
//   </div>
// ) : contract ? (
//   <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-r">
//     <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-700">
//       Symbol
//     </dt>
//     <dd className="order-1 text-5xl font-extrabold text-red-600">{`$${contract.contractMetadata.symbol}`}</dd>
//   </div>
// ) : null;
// };
