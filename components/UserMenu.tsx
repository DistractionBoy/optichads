import React, { useState, Fragment, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";

import { NavLink } from "../lib";
import { classNames } from "../lib/helpers";
import Account from "./Account";
import { useAccount, useDisconnect } from 'wagmi'

type Props = {
  color?: string;
  collection?:string;
  collectionName?: string;
};

export default function UserMenu({ color, collection, collectionName }: Props)  {
  const [userNavigation, setUserNavigation] = useState<NavLink[]>();
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()

  useEffect(() => {
    if (address) {
      setUserNavigation([
        { name: `Your ${collectionName}`, href: `https://opensea.io/${address}/${collection}` },
      ]);
    }
  }, [address]);

  return (
    <Menu as="div" className="relative ml-3">
      <Menu.Button className="flex">
        <span className="sr-only">open account menu</span>
        <Account color={color}/>
      </Menu.Button>
      { isConnected ? <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-red-800 ring-opacity-5 focus:outline-none z-10">
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
            <div
              onClick={() => disconnect()}
              className="block px-4 py-2 text-sm text-gray-700 cursor-pointer"
            >
              Disconnect
          </div>
        </Menu.Items>
      </Transition>
      : <></>}
    </Menu>
  );
}
