import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

import heroImg from "../public/images/hero-img.png";
import UserMenu from "./UserMenu";
import NavDrawer from "./NavDrawer";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const MenuBtnCss = cn(
  "btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)]",
  "text-white bg-[#FF0420] ease-out hover:translate-y-1 transition-all rounded",
  "py-2 px-4 font-extrabold outline outline-1 outline-hotpink-700"
);

const MenuBtnMobileCss = cn(
  "lg:hidden bg-[#FF0420] absolute bottom-[264px] md:bottom-32 left-1/2 -translate-x-1/2 items-center",
  "-translate-y-1/2 py-6 rounded flex px-8 space-x-4 outline outline-2"
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
                  className={MenuBtnCss}
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
