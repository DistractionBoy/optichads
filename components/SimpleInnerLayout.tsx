import { ReactNode } from "react";
import { BackgroundBeams } from "./ui/background-beams";

const SimpleInnerLayout = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => (
  <>
    <header className="bg-white shadow z-10 relative">
      <div className="container max-w-7xl px-8 py-6">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
          {title && title}
        </h1>
      </div>
    </header>
    <main>
      <div className="max-w-7xl sm:px-6 lg:px-8 bg-white rounded-xl mx-6 lg:mx-12 xl:mx-auto my-24 md:my-40 py-16 md:py-24 z-10 relative">
        {children}
      </div>
    </main>
  </>
);

export default SimpleInnerLayout;
