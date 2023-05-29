import React from "react";
import Image from "next/image";

import babeImg from "../public/images/babe-t.png";
import DisconnectedChadForm from "./DisconnectedChadForm";

export default function DarkBabeSectionClouds() {
  return (
    <div className="relative overflow-hidden">
      <main>
        <div className="bg-gray-900 bg-gradient-to-br from-[#3360d49e] via-transparent to-[#3360d49e] pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                <DisconnectedChadForm />
              </div>
              <div className="mt-12 -mb-16 sm:-mb-28 lg:relative lg:m-0">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  <Image
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={babeImg}
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