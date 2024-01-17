import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { BigNumberish } from "@ethersproject/bignumber";
import { formatUnits } from "@ethersproject/units";

export function shortenHex(hex: string, length = 4) {
  return `${hex.substring(0, length + 2)}…${hex.substring(
    hex.length - length
  )}`;
}

export function formatEtherscanLink(
  type: "Account" | "Transaction",
  data: string
) {
  switch (type) {
    case "Account": {
      const address = data;
      return `${process.env.NEXT_PUBLIC_ETHERSCAN_BASE_URL}/address/${address}`;
    }
    case "Transaction": {
      const hash = data;
      return `${process.env.NEXT_PUBLIC_ETHERSCAN_BASE_URL}/tx/${hash}`;
    }
  }
}

export const parseBalance = (
  value: BigNumberish,
  decimals = 18,
  decimalsToDisplay = 4
) => parseFloat(formatUnits(value, decimals)).toFixed(decimalsToDisplay);

export const getQuixoticTradeHref = (tokenId: string) =>
  `https://quixotic.io/asset/opt/${process.env.NEXT_PUBLIC_CV_ADDRESS}/${tokenId}`;


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
