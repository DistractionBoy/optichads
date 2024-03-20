import React from "react";

import Account from "./Account";
import { useAccount, useDisconnect } from "wagmi";
import Link from "next/link";
import { divergentLinkButtonCSS } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "./ui/dropdown-menu";

export default function UserMenu() {
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={divergentLinkButtonCSS}>
        <span className="sr-only">open account menu</span>
        <Account />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 mr-0">
        <DropdownMenuItem>
          <Link href="/home">Home</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/collections">Collections</Link>
        </DropdownMenuItem>
        {isConnected && (
          <>
            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
            {/* <DropdownMenuSeparator /> */}
            {/* <DropdownMenuItem>Profile</DropdownMenuItem> */}
            <DropdownMenuItem onClick={() => disconnect()}>
              Disconnect
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
