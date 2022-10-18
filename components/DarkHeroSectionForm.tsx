import { ChevronRightIcon } from "@heroicons/react/solid";
import React from "react";
import DailyChadForm from "./DailyChadForm";
import DailyChadTextSection from "./DailyChadTextSection";

export default function DarkHeroSectionForm() {
  return (
    <main className="my-16 sm:my-24">
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
            <DailyChadTextSection />
          </div>
          <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
            <DailyChadForm />
          </div>
        </div>
      </div>
    </main>
  );
}
