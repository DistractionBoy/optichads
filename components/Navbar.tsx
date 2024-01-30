import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";

import heroImg from "../public/images/hero-img.png";
import { NavLink } from "../lib";
import Account from "./Account";
import UserMenu from "./UserMenu";
import UserMenuMobile from "./UserMenuMobile";
import { iNavLink } from "../lib/types";
import { useAccount } from "wagmi";
import { cn } from "@/lib/utils";

const navDefaultState: NavLink[] = [
  { name: "The Pad", href: "/", current: false },
];

const navMobileDefaultState: NavLink[] = [
  { name: "The Pad", href: "/", current: false },
  { name: "English", href: "/", current: false },
  { name: "Vietnamese", href: "/vi", current: false },
];

const colorWallet = "bg-red-500";
const collection = "optichads";
const collectionName = "Chads";

export default function Navbar({setIsOpen} : any) {
  const router = useRouter();
  const [navigation, setNavigation] = useState<iNavLink[]>(navDefaultState);
  const [navigationMobile, setNavigationMobile] = useState<iNavLink[]>(
    navMobileDefaultState
  );
  const { address } = useAccount();

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
      setNavigationMobile((prevState) => {
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

  return (
    <Disclosure as="nav" className="top-0 bg-red-700">
      {({ open }) => (
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="border-b border-gray-50">
              <div className="flex h-16 items-center flex-nowrap px-4 sm:px-0">
                
                <div className="lg:flex items-center grow hidden">
                    <div className="ml-10 flex items-baseline space-x-4">
                      <button className="btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)]
                       text-white bg-red ease-out hover:translate-y-1 transition-all rounded
                        py-2 px-4 font-bold outline outline-1 outline-hotpink-700 font"
                        onClick={() => setIsOpen(true)}
                       >
                        Menu
                       </button>
                    </div>
                </div>

                <div className="flex items-center grow">
                  <div className="-mb-1 flex-shrink-0">
                      <Image
                        className="rounded-full bg-red-600"
                        src={heroImg}
                        alt="Workflow"
                        width={38}
                        height={38}
                        priority
                      />
                    </div>
                    <span className="ml-4 -mr-2 text-base font-semibold text-white">
                      OptiChads
                    </span>
                </div>
                <div className="ml-4 flex items-center">
                    <UserMenu
                      color={colorWallet}
                      collection={collection}
                      collectionName={collectionName}
                    />
                  </div>
              </div>
            </div>
          </div>
      )}
    </Disclosure>
  );
}
