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
      <div className="bg-gray-900 pb-32">
        {title && (
          <header className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-white">{title}</h1>
            </div>
          </header>
        )}
      </div>

      <main className="-mt-32">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </>
  );
}
