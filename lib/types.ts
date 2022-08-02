import { StaticImageData } from "next/image";

export interface iPerson {
  name: string;
  email?: string;
  role?: string;
  imageUrl?: StaticImageData;
  bio?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  quixoticUrl?: string;
}

export interface iNavLink {
  name: string;
  href?: string;
  current?: boolean;
  onClick?: () => void;
}

export interface iChadMetadata {
  name: string;
  description: string;
  external_url: string;
  image: string;
  attributes: iAttribute[];
  properties: {
    files: { uri: string; type: string }[];
    creators: string[];
  };
  compiler: string;
}

export interface iResponse {
  status?: string;
  message?: string;
  result?: iResultEntity[] | null;
}

/**
 * @description the following interfaces are
 *  used for querying Etherscan
 */
export interface iAttribute {
  trait_type: string;
  value: string;
}
export interface iResultEntity {
  blockNumber: string;
  timeStamp: string;
  hash: string;
  nonce: string;
  blockHash: string;
  from: string;
  contractAddress: string;
  to: string;
  tokenID: string;
  tokenName: string;
  tokenSymbol: string;
  tokenDecimal: string;
  transactionIndex: string;
  gas: string;
  gasPrice: string;
  gasUsed: string;
  cumulativeGasUsed: string;
  input: string;
  confirmations: string;
}

export type WindowInstanceWithEthereum = Window &
  typeof globalThis & { ethereum?: any };

export type Quote = { quote: string; name: string };

export type Quotes = Quote[];
