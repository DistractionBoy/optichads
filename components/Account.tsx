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
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useRouter } from "next/router";

const Account = () => {
  const router = useRouter();
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
                  <DropdownMenuTrigger className={divergentLinkButtonCSS}>
                    <span className="sr-only">open account menu</span>
                    {account.ensAvatar && (
                      <Avatar>
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
                  <DropdownMenuContent className="w-60 absolute left-0 -mt-1.5 font-semibold">
                    <DropdownMenuItem onClick={() => router.push("/home")}>
                      Home
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/collections">Collections</Link>
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
