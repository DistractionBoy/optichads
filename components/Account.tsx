import { ConnectButton } from "@rainbow-me/rainbowkit";

type Props = {
  color?: string;
};

const Account = ({ color }: Props) => {
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
                    className={`${color} rounded-full py-2 px-4 font-bold text-white outline outline-1 outline-hotpink-700`}
                  >
                    Connect Wallet
                  </span>
                );
              }
              if (chain.unsupported) {
                return (
                  <span
                    onClick={openChainModal}
                    className={`rounded-full bg-primary py-2 px-4 font-bold text-white`}
                  >
                    Wrong network
                  </span>
                );
              }
              return (
                <span style={{ display: "flex", gap: 12 }}>
                  <span
                    className={`${color} rounded-full py-2 px-4 font-bold text-white`}
                  >
                    {account.displayName}
                    {""}
                    {account.displayBalance
                      ? ` - ${account.displayBalance}`
                      : ""}
                  </span>
                </span>
              );
            })()}
          </span>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default Account;
