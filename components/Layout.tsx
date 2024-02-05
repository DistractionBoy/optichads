import React, { ReactNode } from "react";
import { PT_Sans, Rubik } from "next/font/google";

import { cn } from "@/lib/utils";

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
    <div
      className={cn(
        `m-0 flex flex-1 flex-col items-stretch justify-between overflow-x-hidden`,
        rubik.className
      )}
    >
      {children}
    </div>
  );
}
