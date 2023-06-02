import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { NavLink } from "../lib";
import { useAccount, useDisconnect } from 'wagmi'

type Props = {
  collection?:string;
  collectionName?: string;
};

export default function UserMenuMobile({ collection, collectionName }: Props)  {
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const userNavInitialState: NavLink[] = [
    { name: `Your ${collectionName}`, href: `https://opensea.io/${address}/${collection}` },
  ];
  const [userNavigation] = useState<NavLink[]>(userNavInitialState);
  return (
    <>
      <div className="mt-3 px-2 space-y-1">
        {userNavigation.map((item) =>
          item.onClick ? (
            <Disclosure.Panel
              key={item.name}
              as="button"
              onClick={item.onClick}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-red-600"
            >
              {item.name}
            </Disclosure.Panel>
          ) : (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-red-600"
            >
              {item.name}
            </Disclosure.Button>
          )
        )}
        <Disclosure.Button
              onClick={() => disconnect()}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-red-600"
            >
              Disconnect
          </Disclosure.Button>
      </div>
    </>
  );
}
