import React from "react";
import Image from "next/image";

import quixLogo from "../public/images/Quix.png";
import bluesweepLogo from "../public/images/bluesweep-logo-2.png";
import mintplexLogo from "../public/images/mintplex-logo.png";

export const Partners = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <h2 className="mx-auto max-w-md text-center text-3xl font-bold tracking-tight text-red-800 lg:max-w-xl lg:text-left">
            POWERED by
          </h2>
          <div className="mt-8 flow-root self-center lg:mt-0">
            <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
              <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                <Image
                  className="h-12"
                  src={quixLogo}
                  alt="Workcation"
                  width={148}
                  height={82}
                  layout="intrinsic"
                />
              </div>
              <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                <Image
                  className="h-12"
                  src={bluesweepLogo}
                  alt="Tuple"
                  width={260}
                  height={62}
                  layout="intrinsic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
