import React from "react";
import { GymFloor, NumOwners, TotalSupply } from ".";

export default function Tokenomics() {
  return (
    <div className="bg-white py-4 sm:py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-700 sm:text-4xl">
            OptiChads Tokenomics
          </h2>
        </div>
      </div>
      <div className="mt-10 bg-white pb-12 sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-white" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <dl className="rounded-lg bg-gray-100 shadow-lg sm:grid sm:grid-cols-3">
                <TotalSupply />
                <GymFloor />
                <NumOwners />
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
