import React from "react";
import { GymFloor, NumOwners } from ".";

import TotalSupply from "./TotalSupply";

export default function Tokenomics() {
  return (
    <div className="bg-white py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-700 sm:text-4xl">
            OptiChads Tokenomics
          </h2>
        </div>
      </div>
      <div className="mt-10 pb-12 bg-white sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-white" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
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
