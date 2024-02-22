import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

import heroImg from "../public/images/hero-img.png";
import UserMenu from "./UserMenu";
import NavDrawer from "./NavDrawer";
import { Button, divergentLinkButtonCSS } from "./ui/button";
import { cn } from "@/lib/utils";

const MenuBtnMobileCss = cn(
  "lg:hidden bg-[#FF0420] bg-opacity-100 absolute bottom-12 md:bottom-32 left-1/2 -translate-x-1/2 items-center",
  "-translate-y-1/2 py-6 rounded flex px-8 space-x-4 outline outline-2",
  "shadow-[0_6px_0_rgb(255,255,255)] hover:shadow-[0_2px_0px_rgb(255,255,255)] active:shadow-[0_1px_0px_rgb(0,0,0)] transition-all"
);

export default function Navbar() {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
  const [visibleMobile, setVisibleMobile] = useState(true);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 100) {
        setVisibleMobile(false);
      } else if (scrolled <= 100) {
        setVisibleMobile(true);
      }
    };
    // mobile device
    if (window.innerWidth < 640) {
      window.addEventListener("scroll", toggleVisible);
    }
  }, []);

  return (
    <>
      <Disclosure
        as="nav"
        className="flex flex-col flex-1 w-full items-around bg-transparent z-10 absolute"
      >
        {({ open }) => (
          <div className="flex justify-center items-center h-16 mt-2 mx-12">
            <div className="hidden md:flex items-center grow">
              <div className="flex items-baseline">
                <Button
                  className={divergentLinkButtonCSS}
                  onClick={() => setIsOpenDrawer(true)}
                >
                  Menu
                </Button>
              </div>
            </div>

            <UserMenu />
          </div>
        )}
      </Disclosure>
      <NavDrawer isOpen={isOpenDrawer} setIsOpen={setIsOpenDrawer} />

      <div className="block md:hidden">
        <Button
          id="mobileMenu"
          className={MenuBtnMobileCss}
          style={{ display: visibleMobile ? "flex" : "none" }}
          onClick={() => {
            setIsOpenDrawer(true);
          }}
        >
          <Image
            className="rounded-full bg-red-600"
            src={heroImg}
            alt="Workflow"
            width={38}
            height={38}
            priority
          />
          <div className="text-xl font-bold">MENU</div>
        </Button>
      </div>
    </>
  );
}
