import { CreditCardIcon } from "@heroicons/react/outline";
import { metaMask } from "../lib/connectors/metaMask";
import { UserRejectedRequestError } from "@web3-react/injected-connector";
import { useEffect, useState } from "react";
import useMetaMaskOnboarding from "../lib/hooks/useMetaMaskOnboarding";
import ETHBalance from "./ETHBalance";
import { useAccount } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit';

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
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {              
              if (!connected) {
                return (
                  <button onClick={openConnectModal} type="button" className={`${color} text-white font-bold py-2 px-4 rounded-full`}>
                    Connect Wallet
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button" className={`bg-red-500 text-white font-bold py-2 px-4 rounded-full`}>
                    Wrong network
                  </button>
                );
              }
              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <button type="button" className={`${color} text-white font-bold py-2 px-4 rounded-full`}>
                    {account.displayName}
                    {account.displayBalance
                      ? ` - ${account.displayBalance}`
                      : ''}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  )
};

export default Account;
