import React from "react";
import { SWRConfig } from "swr";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../styles/globals.css";

import "@rainbow-me/rainbowkit/styles.css";
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  Locale,
} from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import {
  arbitrum,
  arbitrumSepolia,
  base,
  baseSepolia,
  mainnet,
  optimism,
  optimismSepolia,
  polygon,
  sepolia,
  zora,
} from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { appWithTranslation } from "next-i18next";
import Layout from "../components/Layout";
// import ErrorBoundary from "@/components/ErrorBoundary";

const queryClient = new QueryClient();

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    optimismSepolia,
    baseSepolia,
    arbitrumSepolia,
    base,
    zora,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
      ? [sepolia, optimismSepolia, baseSepolia, arbitrumSepolia]
      : []),
  ],
  [publicProvider()]
);

const projectId = `${process.env.RAINBOWKIT_PROJECTID}`;

const { wallets } = getDefaultWallets({
  appName: "OptiChads",
  projectId,
  chains,
});

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const App = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter() as { locale: Locale };
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider
          appInfo={{ appName: "OptiChads" }}
          chains={chains}
          locale={locale}
        >
          <QueryClientProvider client={queryClient}>
            <Layout>
              {/* <ErrorBoundary> */}
              <Component {...pageProps} />
              {/* </ErrorBoundary> */}
            </Layout>
          </QueryClientProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </SWRConfig>
  );
};

export default appWithTranslation(App);
