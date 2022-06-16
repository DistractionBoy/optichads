import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-1 flex-col overflow-x-hidden items-stretch justify-start m-0 bg-gray-100">
      {children}
    </div>
  );
}
