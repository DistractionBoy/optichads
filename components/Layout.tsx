import { useRouter } from "next/router";
import React, { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const arbitrumColor: string = "hotpink-400";
const optimismColor: string = "[#DA10109E]";

export default function Layout({ children }: Props) {
  const { asPath } = useRouter();
  const [color] = useState<string>(
    asPath === "/babes" ? arbitrumColor : optimismColor
  );

  return (
    <div
      className={`m-0 flex flex-1 flex-col items-stretch justify-between overflow-x-hidden bg-hotpink-50 bg-gradient-to-r from-${color}`}
    >
      {children}
    </div>
  );
}
