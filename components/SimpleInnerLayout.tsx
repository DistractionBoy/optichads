import { ReactNode } from "react";

const SimpleInnerLayout = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => (
  <>
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
          {title && title}
        </h1>
      </div>
    </header>
    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 bg-white rounded-xl my-28 lg:py-16">
        {children}
      </div>
    </main>
  </>
);

export default SimpleInnerLayout;
