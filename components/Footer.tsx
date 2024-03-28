import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import coinGeckoLogo from "../public/images/coingecko_logo.png";
import osLogo from "../public/images/os-logo-trans.png";

import React from "react";
import Image from "next/image";

const navigation = {
  main: [
    { name: "Home", href: "/home", current: true },
    { name: "Collections", href: "/collections", current: false },
    // { name: "Music", href: "/", current: false },
    // { name: "Affiliates", href: "/", current: false },
  ],
  second: [
    // { name: "Mint", href: "/", current: false },
    { name: "Token", href: "/token", current: false },
    // { name: "Staking", href: "/", current: false },
  ],
  social: [
    {
      name: "Discord",
      href: "https://discord.gg/optichads",
      icon: (props: any) => <FontAwesomeIcon icon={faDiscord} {...props} />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/optichads",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-800 z-10 relative">
      <div className="mx-auto w-full py-6 px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-row h-auto mt-2 md:mx-12 mx-2">
          <nav className="-mx-5 md:basis-1/5 basis-1/2" aria-label="Footer">
            {navigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <a
                  href={item.href}
                  className="text-md text-white hover:text-gray-200 hover:underline underline-offset-4"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <nav className="-mx-5 flex-1" aria-label="Footer">
            {navigation.second.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <a
                  href={item.href}
                  className="text-md text-white hover:text-gray-200 hover:underline underline-offset-4"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <div className="right-0">
            <p className="text-xl font-bold text-blue-400">Connect with us</p>
            <div className="right-0 flex space-x-2 mt-1">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-gray-200"
                  target="_blank"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
              <div className="flex h-6 w-6 items-center">
                <a
                  href="https://opensea.io/collection/optichads"
                  className="flex items-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    alt="opensea logo"
                    src={osLogo}
                    height={20}
                    width={20}
                  />
                </a>
              </div>
              <div className="flex h-6 w-6 items-center">
                <a
                  href="https://www.coingecko.com/en/nft/optichads"
                  className="flex items-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    alt="coingecko logo"
                    src={coinGeckoLogo}
                    height={20}
                    width={20}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-px my-4 border-0 bg-gray-600" />
        <p className="text-center text-base text-gray-400">
          &copy; 2024 OptiChads. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
