import { useRouter } from "next/router";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Layout({ children }: Props) {
  const { pathname } = useRouter();
  return (
    <div className={`m-0 flex flex-1 flex-col items-stretch justify-between overflow-x-hidden`}>
      {children}
    </div>
  );
}
