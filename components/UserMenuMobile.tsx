import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { NavLink } from "../lib";

export default function UserMenuMobile() {
  const userNavInitialState: NavLink[] = [
    { name: "Your Optiland NFT's", href: "/view" },
  ];
  const [userNavigation] = useState<NavLink[]>(userNavInitialState);
  return (
    <>
      {/**
       * add the following back, when we get info about user. goes in mobile version of navbar
       */}
      {/* <div className="flex items-center px-5">
    <div className="flex-shrink-0">
      <Image
        className="h-10 w-10 rounded-full"
        src={user.imageUrl}
        alt=""
      />
    </div>
    <div className="ml-3">
      <div className="text-base font-medium leading-none text-white">
        {user.name}
      </div>
      <div className="text-sm font-medium leading-none text-gray-400">
        {user.email}
      </div>
    </div>
    <button
      type="button"
      className="ml-auto bg-gray-800 flex-shrink-0 p-1 text-gray-400 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
    >
      <span className="sr-only">View notifications</span>
      <BellIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  </div> */}

      <div className="mt-3 px-2 space-y-1">
        {userNavigation.map((item) =>
          item.onClick ? (
            <Disclosure.Panel
              key={item.name}
              as="button"
              onClick={item.onClick}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
            >
              {item.name}
            </Disclosure.Panel>
          ) : (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
            >
              {item.name}
            </Disclosure.Button>
          )
        )}
      </div>
    </>
  );
}
