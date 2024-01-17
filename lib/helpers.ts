import { Contract } from "@ethersproject/contracts";
import { ChadMetadata } from ".";
import { WindowInstanceWithEthereum } from "./types";

export function calcRange(size: number, startAt = 0) {
  return [...Array(size).keys()].map((i) => i + startAt);
}

export const getLocalMetadata = async (token: string, tokenId: number) => {
  try {
    const res: Response = await fetch(`/api/meta/${token}?id=${tokenId}`);
    const data: ChadMetadata = await res.json();
    return data;
  } catch (e) {
    console.log(e);
    return new Error(`the error is: ${e}`);
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

export const getMyTokenIds = async (
  contract: Contract,
  account: string,
  maxNumToGet?: number
) => {
  let tokenIds: number[] = [];
  let index = 0;
  let hasError;
  while (!hasError) {
    await getTokenOfOwnerByIndex(contract, account, index).then((id) => {
      if (index === (maxNumToGet && maxNumToGet - 1)) {
        hasError = true;
      }
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

export const connectToOptimism = () => {
  (window as WindowInstanceWithEthereum).ethereum?.request(networkReqObj);
};

export const getEtherscanTokenHref = (tokenId: string) =>
  `${process.env.NEXT_PUBLIC_ETHERSCAN_BASE_URL}/token/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}?a=${tokenId}`;

export const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? `https://www.optichads.art/`
    : process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : process.env.NEXT_PUBLIC_BASEURL;
};

export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGES = 1;
export const DEFAULT_PAGESIZE = 50;

export const fetchOwnerAddresses = async (contractAddress: string) => {
  try {
    const url = `https://opt-mainnet.g.alchemy.com/nft/v2/${process.env.NEXT_PUBLIC_ALCHEMY_APIKEY}/getOwnersForCollection?contractAddress=${contractAddress}`;
    const response = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    const { ownerAddresses } = await response.json();
    return ownerAddresses;
  } catch (e) {
    return e;
  }
};

export const getIsHolderOfCollection = async (
  account: string,
  collection: string
) => {
  try {
    const url = `https://opt-mainnet.g.alchemy.com/nft/v2/${process.env.NEXT_PUBLIC_ALCHEMY_APIKEY}/isHolderOfCollection?wallet=${account}&contractAddress=${collection}`;

    const response = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
};

export const summarizeNftAttributes = async (collection: string) => {
  try {
    const url = `https://opt-mainnet.g.alchemy.com/nft/v2/${process.env.NEXT_PUBLIC_ALCHEMY_APIKEY}/summarizeNftAttributes?contractAddress=${collection}`;

    const response = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
};

export const computeRarity = async (collection: string, tokenId: number) => {
  try {
    const url = `https://opt-mainnet.g.alchemy.com/nft/v2/${process.env.NEXT_PUBLIC_ALCHEMY_APIKEY}/computeRarity?contractAddress=${collection}&tokenId=${tokenId}`;

    const response = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
};

export const getNftMetadata = async (collection: string, tokenId: number) => {
  try {
    const url = `https://opt-mainnet.g.alchemy.com/nft/v2/${process.env.NEXT_PUBLIC_ALCHEMY_APIKEY}/getNFTMetadata?contractAddress=${collection}&tokenId=${tokenId}`;

    const response = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
};

export const getContractMetadata = async (collection: string) => {
  try {
    const url = `https://opt-mainnet.g.alchemy.com/nft/v2/${process.env.NEXT_PUBLIC_ALCHEMY_APIKEY}/getContractMetadata?contractAddress=${collection}`;

    const response = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
};

export const getFloorPrice = async (collection: string) => {
  try {
    const url = `https://opt-mainnet.g.alchemy.com/nft/v2/${process.env.NEXT_PUBLIC_ALCHEMY_APIKEY}/getFloorPrice?contractAddress=${collection}`;

    const response = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
};

export const postMsgToSuggestionBot = async (message: string) => {
  const msg = { content: message };
  try {
    return await fetch(`${process.env.NEXT_PUBLIC_GYMBOT}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(msg),
    });
  } catch (e) {
    console.error(e);
    return e;
  }
};

export const postMsgToRaffleBot = async (message: string) => {
  const msg = { content: message };
  try {
    return await fetch(`${process.env.NEXT_PUBLIC_GIVEAWAY_BOT}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(msg),
    });
  } catch (e) {
    console.error(e);
    return e;
  }
};
