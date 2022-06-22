import { CreditCardIcon } from "@heroicons/react/outline";
import { useWeb3React } from "@web3-react/core";
import { metaMask } from "../lib/connectors/metaMask";
import { UserRejectedRequestError } from "@web3-react/injected-connector";
import { useEffect, useState } from "react";
import useMetaMaskOnboarding from "../lib/hooks/useMetaMaskOnboarding";
import ETHBalance from "./ETHBalance";

const Account = () => {
  const { account, error, isActive } = useWeb3React();
  const [connecting, setConnecting] = useState<boolean>(false);

  const {
    isMetaMaskInstalled,
    startOnboarding,
    stopOnboarding,
    isWeb3Available,
  } = useMetaMaskOnboarding();

  const activate = async () => {
    setConnecting(true);
    return await metaMask.activate(Number(process.env.NEXT_PUBLIC_CHAIN_ID));
  };

  useEffect(() => {
    if (isActive || error) {
      setConnecting(false);
      stopOnboarding();
    }
  }, [isActive, error, stopOnboarding]);

  if (typeof account !== "string") {
    return (
      <>
        {isWeb3Available ? (
          <button
            disabled={connecting}
            onClick={() => {
              setConnecting(true);
              activate().catch((error) => {
                if (error instanceof UserRejectedRequestError) {
                  alert(error.message);
                }
              });
            }}
          >
            {isMetaMaskInstalled ? (
              <span className="flex items-center">
                <span className="pr-2">Connect</span>
                <CreditCardIcon className="h-6 w-6" aria-hidden="true" />
              </span>
            ) : (
              "Connect to Wallet"
            )}
          </button>
        ) : (
          <button onClick={startOnboarding}>Install Metamask</button>
        )}
      </>
    );
  }

  return (
    <>
      <ETHBalance />
    </>
  );
};

export default Account;
