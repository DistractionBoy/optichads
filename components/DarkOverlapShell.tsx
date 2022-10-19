import React, { ReactNode } from "react";

export interface DarkOverlapProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export default function DarkOverlapShell({
  children,
  title,
}: DarkOverlapProps) {
  return (
    <>
      <div className="bg-gray-900 bg-gradient-to-r from-[#da10109e] pb-32">
        {title && (
          <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-white">{title}</h1>
            </div>
          </header>
        )}
      </div>

      <main className="-mt-32">
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </>
  );
}
