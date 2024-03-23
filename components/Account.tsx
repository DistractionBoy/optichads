import { ConnectButton } from "@rainbow-me/rainbowkit";
import { divergentLinkButtonCSS } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { useDisconnect } from "wagmi";
import { Avatar, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";

const Account = () => {
  const { disconnect } = useDisconnect();
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <span
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <span
                    onClick={openConnectModal}
                    className={divergentLinkButtonCSS}
                  >
                    Connect Wallet
                  </span>
                );
              }
              if (chain.unsupported) {
                return (
                  <span
                    onClick={openChainModal}
                    className={divergentLinkButtonCSS}
                  >
                    Wrong network
                  </span>
                );
              }
              return (
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className={cn(
                      divergentLinkButtonCSS,
                      "space-x-2 pl-4 pr-6 mx-4"
                    )}
                  >
                    <span className="sr-only">open account menu</span>
                    {account.ensAvatar && (
                      <Avatar className="size-6">
                        <AvatarImage src={`${account.ensAvatar}`} />
                      </Avatar>
                    )}
                    <span>
                      {account.displayName}
                      {account.displayBalance
                        ? ` - ${account.displayBalance}`
                        : ""}
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-60 rounded-xl absolute -left-12 mt-0.5 font-semibold [&_*]:text-xl [&>div]:py-3 [&>div]:px-4">
                    <DropdownMenuItem>
                      <Link href="/home">Home</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => disconnect()}>
                      Disconnect
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            })()}
          </span>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default Account;
