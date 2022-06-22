import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { NavLink } from "../lib";

export default function UserMenuMobile() {
  const userNavInitialState: NavLink[] = [
    { name: "Your Chads", href: "/view" },
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
      </div>
    </>
  );
}
