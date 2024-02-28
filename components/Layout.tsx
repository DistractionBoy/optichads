import React, { ReactNode } from "react";
import { Rubik } from "next/font/google";

import { cn } from "@/lib/utils";
import { Toaster } from "./ui/sonner";

type Props = {
  children: ReactNode;
  className?: string;
};

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: [
    "arabic",
    "cyrillic",
    "cyrillic-ext",
    "hebrew",
    "latin",
    "latin-ext",
  ],
});

export default function Layout({ children }: Props) {
  return (
    <>
      <main
        className={cn(
          `m-0 flex flex-1 flex-col items-stretch justify-start overflow-x-hidden`,
          rubik.className
        )}
      >
        {children}
      </main>
      <Toaster />
    </>
  );
}
