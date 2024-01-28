import React from "react";
import { NavLink } from "@/lib/";
import { cn } from "@/lib/utils";

const firstDefaultState: NavLink[] = [
  { name: "Home", href: "/", current: true },
  { name: "Collections", href: "/", current: false },
  { name: "Music", href: "/", current: false },
  { name: "Affiliates", href: "/", current: false },
];

const secondDefaultState: NavLink[] = [
  { name: "Mint", href: "/", current: false },
  { name: "Token", href: "/", current: false },
  { name: "Staking", href: "/", current: false },
];

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
          <div className="flex p-24">
            <div className="flex-1 w-64">
              {firstDefaultState.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    className={cn(
                      item.current
                        ? "text-red-500"
                        : "text-gray-300",
                      "block rounded-md px-3 py-2 text-5xl font-bold hover:text-red-600"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                </a>
              ))}
            </div>
            <div className="flex-1 w-32">
              {secondDefaultState.map((item) => (
                  <a
                      key={item.name}
                      href={item.href}
                      className={cn(
                        item.current
                          ? "text-red-500"
                          : "text-gray-300",
                        "block rounded-md px-3 py-2 text-5xl font-bold hover:text-red-600"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                    {item.name}
                  </a>
                ))}
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
