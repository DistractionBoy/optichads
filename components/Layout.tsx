import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  color?: string;
};

export default function Layout({ children, color }: Props) {
  return (
    <div className={`m-0 flex flex-1 flex-col items-stretch justify-between overflow-x-hidden bg-gray-900 bg-gradient-to-r from-[${color}]`}>
      {children}
    </div>
  );
}
