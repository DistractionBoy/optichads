import React, { useState, Fragment, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";

import { NavLink } from "../lib";
import { classNames } from "../lib/helpers";
import { useWeb3React } from "@web3-react/core";
import Account from "./Account";

export default function UserMenu() {
  const { account } = useWeb3React();

  const [userNavigation, setUserNavigation] = useState<NavLink[]>();

  useEffect(() => {
    if (account) {
      setUserNavigation([
        { name: "Your Chads", href: `https://opensea.io/${account}/optichads` },
      ]);
    }
  }, [account]);

  if (typeof account !== "string") {
    return (
      <div className="flex max-w-xs cursor-pointer items-center rounded-full bg-red-700 px-3 py-1 text-sm text-gray-100 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-800">
        <Account />
      </div>
    );
  }

  return (
    <Menu as="div" className="relative ml-3">
      <Menu.Button className="flex max-w-xs items-center rounded-full bg-red-700 px-3 py-1 text-sm text-gray-100 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-800">
        <span className="sr-only">open account menu</span>
        <Account />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-red-800 ring-opacity-5 focus:outline-none">
          {userNavigation?.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }) =>
                item.onClick ? (
                  <div
                    onClick={item.onClick}
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    {item.name}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    {item.name}
                  </a>
                )
              }
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
