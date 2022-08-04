import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { hooks } from "../lib/connectors/metaMask";
import { useWeb3React } from "@web3-react/core";
import { Contract } from "@ethersproject/contracts";
import { BigNumber } from "@ethersproject/bignumber";
import { MintFormContext } from "../lib/state/mintForm";
import { StepperContext } from "../lib/state/stepper";
import Modal from "./Modal";
import { parseBalance } from "../lib/utils";
import { classNames } from "../lib/helpers";
import { ethers } from "ethers";
import { MerkleTree } from "merkletreejs";
import Script from "next/script";
import whitelist from "../lib/whitelist";
import {
  TransactionReceipt,
  TransactionResponse,
} from "@ethersproject/providers";
import useETHBalance from "../lib/hooks/useEthBalance";

const tempWhitelist = [
  "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
  "0x3ED9d38601748734e94Ee8480077cc8D4C8ffb0C",
];

const padBuffer = (addr: string) => {
  return Buffer.from(addr.substring(2).padStart(32 * 2, "0"), "hex");
};

const leaves = tempWhitelist.map((account) => padBuffer(account));
const tree = new MerkleTree(leaves, ethers.utils.keccak256, { sort: true });

const getPrice = async (contract: Contract) => {
  try {
    return await contract?.PRICE();
  } catch (e) {
    console.error(e);
    return e;
  }
};

const getEarlyPrice = async (contract: Contract) => {
  try {
    return await contract?.EARLY_MINT_PRICE();
  } catch (e) {
    console.error(e);
    return e;
  }
};

const getMintingOpen = async (contract: Contract) => {
  try {
    return await contract?.mintingOpen();
  } catch (e) {
    console.error(e);
  }
};

const onlyAllowlistMode = async (contract: Contract) => {
  try {
    return await contract?.onlyAllowlistMode();
  } catch (e) {
    console.error(e);
  }
};

const canMintAmount = async (
  contract: Contract,
  address: string,
  amount: number
) => {
  try {
    return await contract?.canMintAmount(address, amount);
  } catch (e) {
    console.error(e);
  }
};

const getTotalMinted = async (contract: Contract) => {
  try {
    return await contract?.totalSupply();
  } catch (e) {
    return e;
  }
};

const getNextTokenId = async (contract: Contract) => {
  try {
    return await contract?.totalSupply();
  } catch (e) {
    return e;
  }
};

const earlyMintOwnershipCap = async (contract: Contract) => {
  try {
    return await contract?.earlyMintOwnershipCap();
  } catch (e) {
    return e;
  }
};

const getCanMintAmount = async (
  contract: Contract,
  address: string,
  amount: number
) => {
  try {
    return await contract?.canMintAmount(address, amount);
  } catch (e) {
    return e;
  }
};

const getPriceAndByMode = async (
  mode: "public" | "allowlist",
  contract: Contract
) => (mode === "public" ? await getPrice(contract) : getEarlyPrice(contract));

// const postMsgToMintyBot = async (message: string) => {
//   const msg = { content: message };
//   try {
//     return await fetch(
//       "https://discord.com/api/webhooks/904945097651671041/WHT5o_Did8QLJKUbDPvr1cGGPD988BvzsMrTpMnetYbUwYLyYeTLnX_DE73-E-ZvRnEl",
//       {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify(msg),
//       }
//     );
//   } catch (e) {
//     console.error(e);
//     return e;
//   }
// };

// const updateRabbitHole = (quantity: number, txnLink: string, total: number) => {
//   if (quantity === 1) {
//     postMsgToMintyBot(
//       `Someone just minted one Chad from https://optichads.art/mint (transaction: ${txnLink} )! ${total} have been minted so far.`
//     );
//   } else if (quantity === 2) {
//     postMsgToMintyBot(
//       `Two Chads were just minted from https://optichads.art/mint (transaction: ${txnLink} )! ${total} have been minted so far.`
//     );
//   } else if (quantity === 3) {
//     postMsgToMintyBot(
//       `Woah, bruh. Someone just minted three whole Chads from https://optichads.art/mint (transaction: ${txnLink} )! ${total} have been minted so far.`
//     );
//   } else {
//     postMsgToMintyBot(
//       `Someone just minted some Bunnies! from https://optichads.art/mint (transaction: ${txnLink}). ${total} have been minted so far.`
//     );
//   }
// };

const { useProvider } = hooks;

export default function MintStepTwo() {
  const { account, chainId } = useWeb3React();
  const provider = useProvider();
  const { state: formState, dispatch: formDispatch } =
    useContext(MintFormContext);
  const { dispatch: stepperDispatch } = useContext(StepperContext);
  const [costPerToken, setCostPerToken] = useState<BigNumber>(
    BigNumber.from("150000000000000")
  );
  const [isMintingAvailable, setIsMintingAvailable] = useState<
    boolean | undefined
  >(undefined);
  const [isInOnlyAllowListMode, setIsInOnlyAllowListMode] =
    useState<boolean>(false);
  const [welcomeMessage, setWelcomeMessage] = useState<string>();
  const [quantity, setQuantity] = useState<{ value: string }>({ value: "0" });
  const [isValid, setIsValid] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [canMintAmount, setCanMintAmount] = useState<boolean>(false);
  const [maxNumToMint, setMaxNumToMint] = useState<number | undefined>();
  const [hasEnoughEth, setHasEnoughEth] = useState<boolean>(true);
  const { data: ethBal } = useETHBalance(account as string);

  const numChadChangeHandler = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => {
    const valid =
      Number(value) > 0 && chainId === Number(process.env.NEXT_PUBLIC_CHAIN_ID);
    const quan = BigNumber.from(value);
    const total = costPerToken.mul(quan);
    const hasEnough = ethBal && !ethBal.sub(total).isNegative();
    setQuantity({ value: value });
    formDispatch({
      type: "setMintFormState",
      payload: { ...formState, quantity: Number(value) },
    });
    setIsValid(valid && !!hasEnough);
    setHasEnoughEth(!!hasEnough);
  };

  useEffect(() => {
    if (formState.contract && account && isMintingAvailable === undefined) {
      const chadContract = formState.contract as Contract;
      getMintingOpen(chadContract).then((isAvailable: boolean) => {
        setIsMintingAvailable(isAvailable);
        onlyAllowlistMode(chadContract).then((isInWhitelistMode) => {
          setIsInOnlyAllowListMode(isInWhitelistMode);
          setMaxNumToMint(isInWhitelistMode ? 2 : 5);
          if (isAvailable) {
            getPriceAndByMode(
              isInWhitelistMode ? "allowlist" : "public",
              chadContract
            ).then(
              (cost: BigNumber) => {
                if (cost) {
                  setCostPerToken(BigNumber.from(cost));
                  formDispatch({
                    type: "setMintFormState",
                    payload: {
                      ...formState,
                      pricePerUnit: BigNumber.from(cost),
                    },
                  });
                }
              },
              (error) => console.log(error)
            );
          } else {
            setWelcomeMessage("Minting is not available. Check back soon!");
          }
        });
      });
    }
  }, [
    formState,
    formDispatch,
    isInOnlyAllowListMode,
    account,
    isMintingAvailable,
  ]);

  // const handleSubmit = (e: FormEvent) => async (contract: Contract) => {
  //   e.preventDefault();
  //   const signer = provider && provider.getSigner(account);
  //   const connectedContract = contract.connect(signer as ethers.Signer);
  //   setLoading(true);
  //   if (
  //     account &&
  //     hasEnoughEth &&
  //     chainId === Number(process.env.NEXT_PUBLIC_CHAIN_ID)
  //   ) {
  //     const quan = BigNumber.from(quantity.value);
  //     const total = costPerToken?.mul(quan);
  //     if (isInOnlyAllowListMode) {
  //       try {
  //         const merkleProof = tree.getHexProof(padBuffer(account));
  //         debugger;
  //         const response: TransactionResponse =
  //           await connectedContract.mintToMultipleAL(
  //             account,
  //             quantity.value,
  //             merkleProof
  //           );
  //         const fullReceipt: TransactionReceipt = await response.wait();
  //         return fullReceipt;
  //       } catch (e) {
  //         console.error(e);
  //       }
  //     } else {
  //       try {
  //         const response: TransactionResponse =
  //           await connectedContract.mintToMultiple(quantity.value, {
  //             to: account,
  //             amount: total,
  //           });
  //         const fullReceipt: TransactionReceipt = await response.wait();
  //         return fullReceipt;
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     }
  //   } else {
  //     throw new Error(
  //       "You need to switch to Optimism and/or make sure you have enough Eth"
  //     );
  //   }
  // };

  return (
    <div className="bg-white overflow-hidden sm-rounded-b-lg pt-16">
      <Modal
        open={loading}
        setOpen={setLoading}
        title="Transaction Processing"
        message="Please wait while your transaction is being accepted and verified. Click outside this box to dismiss"
      />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 px-4 py-5 sm:p-6 sm:pb-16">
          {isMintingAvailable ? (
            <div className="text-lg max-w-prose mx-auto">
              <h1>
                <span className="block text-base text-center text-red-600 font-semibold tracking-wide uppercase">
                  Select Quantity
                </span>
              </h1>

              {/* <div className="flex mt-12 justify-between">
                <label htmlFor="quantity" className="text-lg">
                  Quantity (max: {`${maxNumToMint}`} per person)
                </label>
                <input
                  name="quantity"
                  value={quantity.value}
                  type="range"
                  min="0"
                  max={maxNumToMint}
                  step="1"
                  onChange={numChadChangeHandler}
                />
              </div>
              <div className="flex flex-col justify-center items-center text-7xl p-16">
                {quantity.value}
              </div>
              <div className="flex justify-between items-center border-t-2 mt-2 px-2 py-2">
                <div>Cost per Token:</div>
                <div className="flex">
                  <span className="mt-1 mr-2 h-3 w-3">
                    <FontAwesomeIcon icon={faEthereum} />
                  </span>{" "}
                  {parseBalance(costPerToken?.toString())}
                </div>
              </div>
              <div className="flex justify-between items-center border-t-2 border-b-2 mt-2 mb-8 px-2 py-2">
                <div>Total Base Price: </div>
                <div className="flex">
                  <span className="mt-1 mr-2 h-3 w-3">
                    <FontAwesomeIcon icon={faEthereum} />
                  </span>{" "}
                  {parseBalance(
                    costPerToken?.mul(BigNumber.from(quantity.value)).toString()
                  )}
                </div>
              </div>
              <div className="flex justify-end">
                <input
                  className={classNames(
                    isValid
                      ? "cursor-pointer text-white bg-red-600 hover:bg-red-700 focus:ring-red-500"
                      : "cursor-not-allowed text-red-600 bg-gray-50 hover:bg-gray-200 focus:ring-gray-100",
                    " inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 "
                  )}
                  type="submit"
                  value="Purchase"
                  disabled={!isValid}
                ></input> */}
              <div className="flex w-full justify-center items-center p-24 text-sm font-semibold">
                <div
                  id="rampp-minting-container-0be641b2-62dd-42b8-9c49-1f7f57fb409d"
                  className="rampp-minting-container"
                >
                  <button
                    id="rampp-minting-button-0be641b2-62dd-42b8-9c49-1f7f57fb409d"
                    className="rampp-minting-button"
                    style={{ display: "none" }}
                    data-merkle-proof-uri="https://us-central1-nft-rampp.cloudfunctions.net/allowlist/N6ddW3Ynir3TTznZtOTM/merkle/verify"
                    data-styles="eyJvcGVuIjp7InRleHQiOiJNaW50Iiwic3R5bGVzIjoiYm9yZGVyOm5vbmU7d2lkdGg6IDE1cmVtO3BhZGRpbmc6MC41cmVtO2ZvbnQtc2l6ZTogMS4xMjVyZW07bGluZS1oZWlnaHQ6IDEuNzVyZW07dGV4dC1hbGlnbjogY2VudGVyO2N1cnNvcjogcG9pbnRlcjtib3JkZXItcmFkaXVzOjk5OTlweDtjb2xvcjojZmZmZmZmO2JhY2tncm91bmQtY29sb3I6I2E4MDAwMDsifSwicGF1c2VkIjp7InRleHQiOiJNaW50JTIwQ2xvc2VkIiwic3R5bGVzIjoiYm9yZGVyOm5vbmU7d2lkdGg6IDE1cmVtO3BhZGRpbmc6MC41cmVtO2ZvbnQtc2l6ZTogMS4xMjVyZW07bGluZS1oZWlnaHQ6IDEuNzVyZW07dGV4dC1hbGlnbjogY2VudGVyO2N1cnNvcjogcG9pbnRlcjtib3JkZXItcmFkaXVzOjk5OTlweDtjb2xvcjojNjc2NTY1O2JhY2tncm91bmQtY29sb3I6I0NDREJEQztjdXJzb3I6bm90LWFsbG93ZWQ7In0sInN1cHBseVJlYWNoZWQiOnsidGV4dCI6IkFsbCUyMFRva2VucyUyME1pbnRlZCEiLCJzdHlsZXMiOiJib3JkZXI6bm9uZTt3aWR0aDogMTVyZW07cGFkZGluZzowLjVyZW07Zm9udC1zaXplOiAxLjEyNXJlbTtsaW5lLWhlaWdodDogMS43NXJlbTt0ZXh0LWFsaWduOiBjZW50ZXI7Y3Vyc29yOiBwb2ludGVyO2JvcmRlci1yYWRpdXM6OTk5OXB4O2NvbG9yOiMwMDAwMDA7YmFja2dyb3VuZC1jb2xvcjojMDBmZjJhO2N1cnNvcjpub3QtYWxsb3dlZDsifSwiZXJyb3IiOnsidGV4dCI6Ik1pbnRpbmcgVW5hdmFpbGFibGUiLCJzdHlsZXMiOiJib3JkZXI6bm9uZTt3aWR0aDogMTVyZW07cGFkZGluZzowLjVyZW07Zm9udC1zaXplOiAxLjEyNXJlbTtsaW5lLWhlaWdodDogMS43NXJlbTt0ZXh0LWFsaWduOiBjZW50ZXI7Y3Vyc29yOiBwb2ludGVyO2JvcmRlci1yYWRpdXM6OTk5OXB4O2NvbG9yOiNmZjAwMDA7YmFja2dyb3VuZC1jb2xvcjojZmZiOGI4O2N1cnNvcjpub3QtYWxsb3dlZDsifSwiY2xhaW1UZXh0Ijp7InRleHQiOm51bGwsInN0eWxlcyI6ImNvbG9yOiByZ2JhKDE1NiwgMTYzLCAxNzUpO2ZvbnQtc2l6ZTogMC43NXJlbTtsaW5lLWhlaWdodDogMXJlbTt0ZXh0LWFsaWduOiBjZW50ZXI7cGFkZGluZy10b3A6IDAuMjVyZW07cGFkZGluZy1ib3R0b206IDAuMjVyZW07bWFyZ2luOjA7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjsifSwicXVhbnRpdHkiOnsidGV4dCI6bnVsbCwic3R5bGVzIjoid2lkdGg6NDBweDtjb2xvcjojYTgwMDAwO2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1jb2xvcjojYTgwMDAwO2JvcmRlci1yYWRpdXM6OTk5OXB4O2ZvbnQtc2l6ZToxLjNyZW07dGV4dC1hbGlnbjpjZW50ZXI7In19"
                    data-abi-link="https://firebasestorage.googleapis.com/v0/b/nft-rampp.appspot.com/o/solidity_outputs%2FN6ddW3Ynir3TTznZtOTM%2FOptiChadsContract_data-9870ab62-dd7d-451f-a40a-a576d1c969f1.json?alt=media"
                    data-redirect="quixotic.com"
                    data-contract-address="0x9B9F542456ad12796cCB8EB6644f29E3314e68e1"
                    data-show-claim-count="true"
                    data-network="optimism"
                    data-format="multi"
                    data-erc20-payments=""
                    data-use-winter="false"
                    data-winter-project-id="null"
                  ></button>
                </div>
                <Script
                  src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.7.0-rc.0/web3.min.js"
                  crossOrigin="anonymous"
                  referrerPolicy="no-referrer"
                  strategy="lazyOnload"
                ></Script>
                <Script
                  type="text/javascript"
                  src="https://unpkg.com/web3modal@1.9.8/dist/index.js"
                  strategy="lazyOnload"
                ></Script>
                <Script
                  type="text/javascript"
                  src="https://unpkg.com/evm-chains@0.2.0/dist/umd/index.min.js"
                  strategy="lazyOnload"
                ></Script>
                <Script
                  type="text/javascript"
                  src="https://unpkg.com/@walletconnect/web3-provider@1.7.8/dist/umd/index.min.js"
                  strategy="lazyOnload"
                ></Script>
                <Script
                  type="text/javascript"
                  src="https://rampp.xyz/embeds/v2.1/embed.js"
                  data-uuid="85bf34a6-36c5-4972-8365-8e87dd3b8ef9"
                  strategy="lazyOnload"
                ></Script>
              </div>
            </div>
          ) : (
            <div className="text-lg max-w-prose mx-auto">
              <h1>
                <span className="block text-base text-center text-red-600 font-semibold tracking-wide uppercase">
                  Oooohhh, so close, bruh
                </span>
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900">
                  {welcomeMessage}
                </span>
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
