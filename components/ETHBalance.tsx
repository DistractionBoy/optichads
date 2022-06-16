import useETHBalance from "../lib/hooks/useEthBalance";
import { parseBalance, shortenHex } from "../lib/utils";
import { useWeb3React } from "@web3-react/core";

const ETHBalance = () => {
  const { account, ENSName } = useWeb3React();
  const { data } = useETHBalance(account as string);

  return data ? (
    <>Balance: {parseBalance(data ?? 0)} OΞ</>
  ) : (
    <>{ENSName || (account && `${shortenHex(account, 4)}`)}</>
  );
};

export default ETHBalance;
