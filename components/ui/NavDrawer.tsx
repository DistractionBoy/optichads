import React from "react";

export default function NavDrawer({ children, isOpen, setIsOpen } : any) {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen absolute bg-gray-900 shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-y-0 " : " -translate-y-full ")
        }
      >
        <article className="relative w-screen space-y-6 overflow-y-scroll h-full">
          <div className="flex p-20">
            <div className="flex-1 w-64">
              <header className="font-bold text-4xl">Home</header>
              <header className="font-bold text-4xl">Splash</header>
              <header className="font-bold text-4xl">Collections</header>
              <header className="font-bold text-4xl">Music</header>
            </div>

            <div className="flex-1 w-32">
              <header className="font-bold text-4xl">Affiliates</header>
              <header className="font-bold text-4xl">Mint</header>
              <header className="font-bold text-4xl">Token</header>
              <header className="font-bold text-4xl">Staking</header>
            </div>
            <div className="flex-1 w-32">
              
            </div>
          </div>
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
