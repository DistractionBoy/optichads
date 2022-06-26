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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";

const navDefaultState: NavLink[] = [
  { name: "The Pad", href: "/", current: false },
  { name: "Mint", href: "/mint", current: false },
  // { name: "About", href: "/about", current: false },
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
    <Disclosure as="nav" className="bg-red-700 z-10">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="border-b border-gray-50">
              <div className="flex items-center justify-between h-16 px-4 sm:px-0">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Image
                      className="bg-red-600 rounded-sm"
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
                              ? "bg-red-800 text-white"
                              : "text-gray-300 hover:bg-red-700 hover:text-white",
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
                <div className="hidden md:flex">
                  <div className="flex items-center md:ml-6">
                    <a
                      href="https://discord.gg/optichads"
                      className="text-gray-300 hover:text-gray-50"
                    >
                      <FontAwesomeIcon icon={faDiscord} className="h-6 w-6" />
                    </a>
                  </div>
                  <div className="flex items-center md:ml-6">
                    <a
                      href="https://twitter.com/OptiChads"
                      className="text-gray-300 hover:text-gray-50"
                    >
                      <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
                    </a>
                  </div>
                  <div className="ml-4 flex items-center">
                    <UserMenu />
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-red-700 inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-800 focus:ring-white">
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
            <div className="px-2 py-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-red-700 text-white"
                      : "text-gray-300 hover:bg-red-600 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-red-300">
              <span className="text-gray-50 pl-5">
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
