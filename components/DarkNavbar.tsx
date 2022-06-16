import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

import heroImg from "../public/images/hero-img.png";
import { NavLink } from "../lib";
import Account from "./Account";
import { useWeb3React } from "@web3-react/core";
import UserMenu from "./UserMenu";
import UserMenuMobile from "./UserMenuMobile";
import { useEffect } from "react";
import { useState } from "react";
import { iNavLink } from "../lib/types";

const navDefaultState: NavLink[] = [
  { name: "Entrance", href: "/", current: false },
  { name: "Guild", href: "/guild", current: false },
  { name: "Stories", href: "/stories", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
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

  const { account } = useWeb3React();

  return (
    <Disclosure as="nav" className="bg-gray-900 z-10">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="border-b border-gray-700">
              <div className="flex items-center justify-between h-16 px-4 sm:px-0">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Image
                      className="bg-red-600 rounded-full"
                      src={heroImg}
                      alt="Workflow"
                      width={38}
                      height={38}
                      layout="intrinsic"
                      priority
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-800 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <UserMenu />
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
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

          <Disclosure.Panel className="border-b border-gray-700 md:hidden">
            <div className="px-2 py-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-800 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <span className="text-gray-300 pl-5">
                <Account />
              </span>
              {account && <UserMenuMobile />}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
