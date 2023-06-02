import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

import heroImg from "../public/images/hero-img.png";
import coinGeckoLogo from "../public/images/coingecko_logo.png";
import osLogo from "../public/images/os-logo-trans.png";
import { NavLink } from "../lib";
import Account from "./Account";
import UserMenu from "./UserMenu";
import UserMenuMobile from "./UserMenuMobile";
import { iNavLink } from "../lib/types";
import { useAccount } from "wagmi";

const navDefaultState: NavLink[] = [
  { name: "The Pad", href: "/", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const colorWallet = "bg-pink-500";
const collection = "arbibabes";
const collectionName = "Babes";

export default function DarkBabeNavbar() {
  const router = useRouter();
  const [navigation, setNavigation] = useState<iNavLink[]>(navDefaultState);

  useEffect(() => {
    if (router.isReady) {
      setNavigation((prevState) => {
        return prevState.map((navLink) => {
          let link = navLink;
          const pathPartToMatch = router.pathname.split("/")[1];
          const linkPartToMatch = link.href?.split("/")[1];
          if (pathPartToMatch === linkPartToMatch) {
            link.current = true;
          }
          return link;
        });
      });
    }
  }, [router]);

  const { address, isConnected } = useAccount();

  return (
    <Disclosure as="nav" className="z-10 bg-blue-500">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="border-b border-blue-500">
              <div className="flex h-16 items-center justify-between px-4 sm:px-0">
                <div className="flex items-center">
                  <div className="-mb-1 flex-shrink-0">
                    <Image
                      className="rounded-full bg-blue-600"
                      src={heroImg}
                      alt="Workflow"
                      width={38}
                      priority
                    />
                  </div>
                  <span className="ml-4 -mr-2 text-base font-semibold text-white">
                    OptiChads
                  </span>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href as string}
                          className={classNames(
                            item.current
                              ? "bg-pink-500 text-white"
                              : "text-gray-300 hover:bg-blue-800 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden items-center md:flex">
                  <div className="flex items-center md:ml-6">
                    <a
                      href="https://opensea.io/collection/optichads"
                      className="flex items-center"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        alt="opensea logo"
                        src={osLogo}
                        height={24}
                        width={24}
                      />
                    </a>
                  </div>
                  <div className="flex items-center md:ml-6">
                    <a
                      href="https://www.coingecko.com/en/nft/optichads"
                      className="flex items-center "
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        alt="coinGecko logo"
                        src={coinGeckoLogo}
                        height={24}
                        width={24}
                      />
                    </a>
                  </div>
                  <div className="ml-4 flex items-center">
                    <UserMenu
                      color={colorWallet}
                      collection={collection}
                      collectionName={collectionName}
                    />
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-blue-700 p-2 text-gray-300 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-800">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="border-b border-gray-50 md:hidden">
            <div className="space-y-1 px-2 py-3 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-blue-700 text-white"
                      : "text-gray-300 hover:bg-blue-600 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-red-300 pt-5 pb-3">
              <div className="pl-5">
                <Account color={colorWallet} />
              </div>
              {address && (
                <UserMenuMobile
                  collection={collection}
                  collectionName={collectionName}
                />
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
