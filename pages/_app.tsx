import React, { useEffect } from "react";
import { SWRConfig } from "swr";
import type { AppProps } from "next/app";
import { Web3ReactHooks, Web3ReactProvider } from "@web3-react/core";
import "../styles/globals.css";
import { StepperProvider } from "../lib/state/stepper";
import { MintFormProvider } from "../lib/state/mintForm";
import { MetaMask } from "@web3-react/metamask";
import DarkNavbar from "../components/DarkNavbar";
import { DarkBabeNavbar } from "../components";
import { hooks as metaMaskHooks, metaMask } from "../lib/connectors/metaMask";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import { useRouter } from 'next/router';

const connectors: [MetaMask, Web3ReactHooks][] = [[metaMask, metaMaskHooks]];
const arbitrumColor: string =  "#3360d49e";
const optimismColor: string = "#da10109e";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    void metaMask.connectEagerly();
  }, []);
  const router = useRouter();
  const colorLayout = router.asPath === "/babes" ? arbitrumColor : optimismColor
  
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <Web3ReactProvider connectors={connectors}>
        <MintFormProvider>
          <StepperProvider>
            <Layout color={colorLayout}>
              <div>
                {router.asPath === "/babes" ? <DarkBabeNavbar/> : <DarkNavbar />}
                
                <Component {...pageProps} />
              </div>
              <Footer />
            </Layout>
          </StepperProvider>
        </MintFormProvider>
      </Web3ReactProvider>
    </SWRConfig>
  );
}

export default MyApp;
