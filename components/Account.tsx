import { ConnectButton } from "@rainbow-me/rainbowkit";
import { divergentLinkButtonCSS } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { useDisconnect, useAccount } from "wagmi";
import { Avatar, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";
import useSWR from "swr";
import { TypedFetch } from "@/lib/TypedFetch";
import { AlchemyCommonResponse } from "@/pages/api/zodSchemas";

const getTokenBal = (data: AlchemyCommonResponse) => {
  let token = data.result.tokenBalances[0].tokenBalance;
  token = parseFloat((parseInt(token) * 1e-18).toFixed(2));
  return token;
};

const Account = () => {
  const { disconnect } = useDisconnect();
  const { address } = useAccount();

  const { data } = useSWR(
    address !== undefined
      ? `/api/alchemy/getTokenOPC?chain=opt&address=${address}`
      : undefined,
    TypedFetch(AlchemyCommonResponse)
  );

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
                  <DropdownMenuContent className="w-80 rounded-xl absolute -left-20 mt-0.5 font-semibold [&_*]:text-xl [&>div]:py-3 [&>div]:px-4">
                    <DropdownMenuItem>
                      <Link href="/home">Home</Link>
                    </DropdownMenuItem>
                    {data && (
                      <DropdownMenuItem>
                        Balance: {getTokenBal(data)} $OPC
                      </DropdownMenuItem>
                    )}
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
