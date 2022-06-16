import React from "react";
import Image from "next/image";
import Link from "next/link";

import AlleyCity from "/public/images/alley-city-bg.jpg";

export default function FourOhFour() {
  return (
    <>
      <main className="min-h-full">
        <Image
          src={AlleyCity}
          layout="fill"
          alt="background"
          objectFit="cover"
        />
        <div className="relative lg:absolute bottom-0 right-0 max-w-7xl mx-auto px-4 py-24 text-center sm:px-6 sm:py-24 lg:px-8 lg:pt-48 lg:pb-12">
          <p className="text-sm font-semibold text-white uppercase tracking-wide pb-2">
            404 error
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            Page Not Found
          </h1>
          <p className="mt-2 text-lg font-medium text-white pb-4">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <div className="mt-6">
            <Link href="/" passHref>
              <span className="inline-flex items-center px-4 py-2 border cursor-pointer border-transparent text-sm font-medium rounded-md text-gray-800 sm:text-white text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50">
                Go back home?
              </span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
