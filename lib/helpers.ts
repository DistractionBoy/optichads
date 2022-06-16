import { Contract } from "@ethersproject/contracts";
import { CVMetadata } from ".";
import { WindowInstanceWithEthereum } from "./types";

export const getImgUrl = () =>
  `https://distractors-of-dracula.s3.amazonaws.com/library/`;

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const getLocalMetadata = async (token: string, tokenId: number) => {
  try {
    const res: Response = await fetch(`/api/meta/${token}?id=${tokenId}`);
    const data: CVMetadata = await res.json();
    return data;
  } catch (e) {
    console.log(e);
    return new Error(`the error is: ${e}`);
  }
};

export const getTotalMinted = async (contract: Contract) => {
  try {
    return await contract?.totalSupply();
  } catch (e) {
    return e;
  }
};

export const getNumberHumans = async (contract: Contract) => {
  try {
    return await contract?.numberHumans();
  } catch (e) {
    return e;
  }
};

export const getNumberVampires = async (contract: Contract) => {
  try {
    return await contract?.numberVampires();
  } catch (e) {
    return e;
  }
};

export const getTotalSupply = async (contract: Contract) => {
  try {
    return await contract?.totalSupply();
  } catch (e) {
    return e;
  }
};

export const getTokenOfOwnerByIndex = async (
  contract: Contract,
  account: string,
  index: number
) => {
  try {
    return await contract?.tokenOfOwnerByIndex(account, index);
  } catch (e) {
    return new Error("end of array bounds");
  }
};

export const getMyTokenIds = async (contract: Contract, account: string) => {
  let tokenIds: number[] = [];
  let index = 0;
  let hasError;
  while (!hasError) {
    await getTokenOfOwnerByIndex(contract, account, index).then((id) => {
      if (!Number(id)) {
        hasError = true;
      } else {
        tokenIds.push(Number(id));
        index++;
      }
    });
  }

  return tokenIds.sort((a, b) => a - b);
};

interface RequestArguments {
  method: string;
  params?: unknown[] | object;
}

export const networkReqObj: RequestArguments = {
  method: "wallet_addEthereumChain",
  params: [
    {
      chainId: process.env.NEXT_PUBLIC_CHAIN_ID_HEX,
      chainName: process.env.NEXT_PUBLIC_CHAIN_NAME,
      nativeCurrency: {
        name: "Ether",
        symbol: "OE",
        decimals: 18,
      },
      rpcUrls: [process.env.NEXT_PUBLIC_RPC_URL],
      blockExplorerUrls: [process.env.NEXT_PUBLIC_ETHERSCAN_BASE_URL],
    },
  ],
};

export function calcRange(size: number, startAt = 0) {
  return [...Array(size).keys()].map((i) => i + startAt);
}

export const connectToOptimism = () => {
  (window as WindowInstanceWithEthereum).ethereum?.request(networkReqObj);
};

export const getQuixoticTradeHref = (tokenId: string) =>
  `https://quixotic.io/asset/opt/${process.env.NEXT_PUBLIC_CV_ADDRESS?.toUpperCase()}/${tokenId}`;

export const getEtherscanTokenHref = (tokenId: string) =>
  `${process.env.NEXT_PUBLIC_ETHERSCAN_BASE_URL}/token/${process.env.NEXT_PUBLIC_CV_ADDRESS}?a=${tokenId}`;

export const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? `https://www.distractors-of-dracula.vercel.app`
    : process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : process.env.NEXT_PUBLIC_BASEURL;
};

export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGES = 1;
export const DEFAULT_PAGESIZE = 50;
