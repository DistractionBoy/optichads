import React, { useEffect, useState } from "react";
import { SWRConfig } from "swr";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import DarkNavbar from "../components/DarkNavbar";
import { DarkBabeNavbar } from "../components";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { optimism, arbitrum } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [optimism, arbitrum],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Optichads & Arbibabes",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <Layout>
            <div>
              {asPath === "/" ? <DarkNavbar /> : <DarkBabeNavbar /> }
              
              <Component {...pageProps} />
            </div>
            <Footer />
          </Layout>
        </RainbowKitProvider>
      </WagmiConfig>
    </SWRConfig>
  );
}

export default MyApp;
