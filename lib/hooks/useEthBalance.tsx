import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useSWR from "swr";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";

function getETHBalance(library: Web3Provider) {
  return async (_: string, address: string) => {
    const balance = await library.getBalance(address);

    return balance;
  };
}

export default function useETHBalance(address: string, suspense = false) {
  const { provider } = useWeb3React();

  const result = useSWR(
    address && provider ? ["ETHBalance", address] : null,
    getETHBalance(provider as Web3Provider),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}
