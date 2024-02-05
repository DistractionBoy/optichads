import React from "react";
import { SWRConfig } from "swr";
import type { AppProps } from "next/app";
import "../styles/globals.css";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { optimism, arbitrum, base } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { appWithTranslation } from "next-i18next";

import Layout from "../components/Layout";

const { chains, publicClient } = configureChains(
  [optimism, arbitrum, base],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  projectId: "OptiChads",
  appName: "Optichads & Arbibabes",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const App = ({ Component, pageProps }: AppProps) => (
  <SWRConfig
    value={{
      fetcher: (resource, init) =>
        fetch(resource, init).then((res) => res.json()),
    }}
  >
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  </SWRConfig>
);

export default appWithTranslation(App);
