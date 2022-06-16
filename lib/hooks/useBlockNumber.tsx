import type { Web3Provider } from "@ethersproject/providers";
import { hooks } from "../connectors/metaMask";
import useSWR from "swr";

const { useProvider } = hooks;

function getBlockNumber(library: Web3Provider) {
  return async () => {
    return library.getBlockNumber();
  };
}

export default function useBlockNumber() {
  const provider = useProvider();
  const shouldFetch = !!provider?.getSigner();

  return useSWR(
    shouldFetch ? ["BlockNumber"] : null,
    getBlockNumber(provider as Web3Provider),
    {
      refreshInterval: 10 * 1000,
    }
  );
}
