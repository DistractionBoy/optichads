import detectEthereumProvider from "@metamask/detect-provider";
import type MetaMaskOnboarding from "@metamask/onboarding";
import { useEffect, useRef, useState } from "react";

export default function useMetaMaskOnboarding() {
  const onboarding = useRef<MetaMaskOnboarding>();
  const [isWeb3Available, isWeb3AvailableSet] = useState<boolean>();
  const [isMetaMaskInstalled, isMetaMaskInstalledSet] = useState<boolean>();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    } else {
      isWeb3AvailableSet(!!window?.ethereum);
    }

    async function checkForMetaMask() {
      const provider = await detectEthereumProvider({
        mustBeMetaMask: true,
      });

      if (provider) {
        isMetaMaskInstalledSet(true);
      } else {
        isMetaMaskInstalledSet(false);
      }
    }

    checkForMetaMask();
  }, []);

  async function startOnboarding() {
    const MetaMaskOnboarding = await import("@metamask/onboarding").then(
      (m) => m.default
    );

    onboarding.current = new MetaMaskOnboarding();

    onboarding.current?.startOnboarding();
  }

  function stopOnboarding() {
    if (onboarding?.current) {
      onboarding.current.stopOnboarding();
    }
  }

  return {
    startOnboarding,
    stopOnboarding,
    isMetaMaskInstalled,
    isWeb3Available,
  };
}
