import { useRouter } from "next/router";
import React, { ReactNode, useState } from "react";
import { classNames } from "../lib/helpers";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Layout({ children }: Props) {
  const { pathname } = useRouter();
  return (
    <div
      className={classNames(
        pathname === "/babes"
          ? "bg-hotpink-50 from-hotpink-400"
          : "bg-gray-900 from-[#DA10109E]",
        `m-0 flex flex-1 flex-col items-stretch justify-between overflow-x-hidden bg-gradient-to-r`
      )}
    >
      {children}
    </div>
  );
}
