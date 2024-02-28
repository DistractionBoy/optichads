import React from "react";
import { NavLink } from "@/lib/";
import { cn } from "@/lib/utils";
import Image from "next/image";

import closeButton from "/public/images/close-button.png";
import twitter from "/public/images/twitter.png";
import discord from "/public/images/discord.png";
import coingecko from "/public/images/coingecko.png";
import opensea from "/public/images/os-logo-blue.png";

import SwitchLanguage from "./SwitchLanguage";

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

export default function NavDrawer({ children, isOpen, setIsOpen }: any) {
  return (
    <main
      className={
        " fixed overflow-hidden z-20 bg- bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          "  w-screen max-w-full absolute bg-gray-900 shadow-xl delay-400 duration-500 ease-in-out transition-all transform border-solid border-b-8 border-red-600 rounded-b-3xl " +
          (isOpen ? " translate-y-0 " : " -translate-y-full ")
        }
      >
        <article className="relative space-y-6 h-full">
          <div className="flex xl:p-16 xl:px-48 lg:px-24 lg:p-20 p-4 pt-20">
            <div className="flex-1 w-64">
              {firstDefaultState.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    item.current ? "text-red-500" : "text-white",
                    "block rounded-md px-3 py-2 2xl:text-6xl xl:text-5xl lg:text-4xl text-3xl font-bold hover:text-red-600 "
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
                    item.current ? "text-red-500" : "text-white",
                    "block rounded-md px-3 py-2 2xl:text-6xl xl:text-5xl lg:text-4xl text-3xl font-bold hover:text-red-600"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
            {/* Social media desktop & tablet */}
            <div
              className={
                "hidden lg:block flex-1 w-48 " +
                (isOpen ? " animate-[spin_1s] duration-1000 delay-400 " : "   ")
              }
            >
              <header className="2xl:text-4xl xl:text-2xl lg:text-xl font-bold text-blue-400">
                Connect with us
              </header>
              <div className="flex mt-1 space-x-8">
                <a
                  href="https://twitter.com/OptiChads"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    className="rounded-lg shadow-lg"
                    src={twitter}
                    alt=""
                    priority
                  />
                </a>
                <a
                  href="https://discord.gg/optichads"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    className="rounded-lg shadow-lg"
                    src={discord}
                    alt=""
                    priority
                  />
                </a>
              </div>
              <div className="flex mt-2 space-x-14 px-3">
                <a
                  href="https://www.coingecko.com/en/nft/optichads"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    className="rounded-lg shadow-lg"
                    src={coingecko}
                    alt=""
                    priority
                  />
                </a>
                <a
                  href="https://opensea.io/collection/optichads"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    className="rounded-lg shadow-lg"
                    src={opensea}
                    alt=""
                    priority
                  />
                </a>
              </div>
            </div>
            {/* Close button */}
            <div className="flex w-48 absolute right-0 top-0 py-4 lg:mx-12">
              <SwitchLanguage />
              <Image
                className="ml-14 rounded-lg shadow-lg hover:rotate-180 duration-700 cursor-pointer"
                src={closeButton}
                alt=""
                priority
                onClick={() => {
                  setIsOpen(false);
                }}
              />
            </div>
          </div>
          {/* Social media mobile */}
          <div
            className={
              "lg:hidden px-8 pb-10 w-full " +
              (isOpen ? " animate-[spin_1s] duration-1000 delay-400 " : "   ")
            }
          >
            <header className="text-3xl font-bold text-blue-400">
              Connect with us
            </header>
            <div className="flex mt-1 space-x-8">
              <a
                href="https://twitter.com/OptiChads"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="rounded-lg shadow-lg"
                  src={twitter}
                  alt=""
                  priority
                />
              </a>
              <a
                href="https://discord.gg/optichads"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="rounded-lg shadow-lg"
                  src={discord}
                  alt=""
                  priority
                />
              </a>
            </div>
            <div className="flex mt-2 space-x-14 px-3">
              <a
                href="https://www.coingecko.com/en/nft/optichads"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="rounded-lg shadow-lg"
                  src={coingecko}
                  alt=""
                  priority
                />
              </a>
              <a
                href="https://opensea.io/collection/optichads"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="rounded-lg shadow-lg"
                  src={opensea}
                  alt=""
                  priority
                />
              </a>
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
