import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";

export default function useENSName(address: string) {
  const { provider, account, chainId } = useWeb3React();
  const [ENSName, setENSName] = useState("");

  useEffect(() => {
    if (provider && typeof account === "string") {
      let stale = false;

      provider
        .lookupAddress(account)
        .then((name) => {
          if (!stale && typeof name === "string") {
            setENSName(name);
          }
        })
        .catch(() => {});

      return () => {
        stale = true;
        setENSName("");
      };
    }
  }, [provider, account, chainId]);

  return ENSName;
}
