import React, { useState, Fragment, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";

import { NavLink } from "../lib";
import Account from "./Account";
import { useAccount, useDisconnect } from "wagmi";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { divergentLinkButtonCSS } from "./ui/button";

export default function UserMenu() {
  const [userNavigation, setUserNavigation] = useState<NavLink[]>();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    if (address) {
      setUserNavigation([
        {
          name: `OptiChads`,
          href: `https://opensea.io/collection/optichads`,
        },
      ]);
    }
  }, [address]);

  return (
    <Menu as="div" className={divergentLinkButtonCSS}>
      <Menu.Button>
        <span className="sr-only">open account menu</span>
        <Account />
      </Menu.Button>
      {isConnected ? (
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-red-800 ring-opacity-5 focus:outline-none">
            {userNavigation?.map(({ onClick, name, href }, index) => (
              <Menu.Item key={name}>
                {({ active }) =>
                  onClick ? (
                    <button
                      onClick={onClick}
                      className={cn(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      {name}
                    </button>
                  ) : (
                    <Link
                      href={href as string}
                      className={cn(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      {name}
                    </Link>
                  )
                }
              </Menu.Item>
            ))}
            <div
              onClick={() => disconnect()}
              className="block cursor-pointer px-4 py-2 text-sm text-gray-700"
            >
              Disconnect
            </div>
          </Menu.Items>
        </Transition>
      ) : (
        <></>
      )}
    </Menu>
  );
}
