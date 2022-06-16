import React, { useEffect } from "react";
import { SWRConfig } from "swr";
import type { AppProps } from "next/app";
import { Web3ReactHooks, Web3ReactProvider } from "@web3-react/core";
import "../styles/globals.css";
import { MetaMask } from "@web3-react/metamask";
import DarkNavbar from "../components/DarkNavbar";
import { hooks as metaMaskHooks, metaMask } from "../lib/connectors/metaMask";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const connectors: [MetaMask, Web3ReactHooks][] = [[metaMask, metaMaskHooks]];

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    void metaMask.connectEagerly();
  }, []);

  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <Web3ReactProvider connectors={connectors}>
        <Layout>
          <DarkNavbar />
          <Component {...pageProps} />
          <Footer />
        </Layout>
      </Web3ReactProvider>
    </SWRConfig>
  );
}

export default MyApp;
