import { ConnectButton } from "@rainbow-me/rainbowkit";
import { divergentLinkButtonCSS } from "./ui/button";

const Account = () => {
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
                return <span onClick={openConnectModal} className={divergentLinkButtonCSS}>Connect Wallet</span>;
              }
              if (chain.unsupported) {
                return <span onClick={openChainModal} className={divergentLinkButtonCSS}>Wrong network</span>;
              }
              return (
                <span style={{ display: "flex", gap: 12 }} className={divergentLinkButtonCSS}>
                  <span>
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
