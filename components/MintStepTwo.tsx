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
import {
  TransactionReceipt,
  TransactionResponse,
} from "@ethersproject/providers";
import useETHBalance from "../lib/hooks/useEthBalance";

const getPrice = async (contract: Contract) => {
  try {
    return await contract?.PRICE();
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

const onlyAllowListMode = async (contract: Contract) => {
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
  const [isMintingAvailable, setIsMintingAvailable] = useState<boolean>(false);
  const [welcomeMessage, setWelcomeMessage] = useState<string>();
  const [quantity, setQuantity] = useState<{ value: string }>({ value: "0" });
  const [isValid, setIsValid] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
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
    if (formState.contract && formState.pricePerUnit.eq(BigNumber.from("0"))) {
      getMintingOpen(formState.contract).then((isAvailable: boolean) => {
        setIsMintingAvailable(isAvailable);
        if (isAvailable) {
          getPrice(formState.contract as Contract).then(
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
    }
  }, [formState, formDispatch]);

  const handleSubmit = (e: FormEvent) => async (contract: Contract) => {
    e.preventDefault();
    const signer = provider && provider.getSigner(account);
    const connectedContract = contract.connect(signer as ethers.Signer);
    setLoading(true);
    if (
      account &&
      hasEnoughEth &&
      chainId === Number(process.env.NEXT_PUBLIC_CHAIN_ID)
    ) {
      const quan = BigNumber.from(quantity.value);
      const total = costPerToken?.mul(quan);
      try {
        const response: TransactionResponse =
          await connectedContract.mintToMultiple(quantity.value, {
            to: account,
            value: total,
          });
        const fullReceipt: TransactionReceipt = await response.wait();
        return fullReceipt;
      } catch (e) {
        console.log(e);
      }
    } else {
      throw new Error(
        "You need to switch to Optimism and/or make sure you have enough Eth"
      );
    }
  };

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
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900">
                  {!hasEnoughEth
                    ? "You need to select a quantity you can afford"
                    : "How many?"}
                </span>
              </h1>
              <form
                className="flex flex-col justify-center"
                onSubmit={(e) => {
                  handleSubmit(e)(formState.contract as Contract)
                    .then((receipt: TransactionReceipt | undefined) => {
                      if (receipt) {
                        formDispatch({
                          type: "setReceipt",
                          payload: receipt,
                        });
                        stepperDispatch({
                          type: "setStepComplete",
                          payload: 1,
                        });
                        // const txnLink = formatEtherscanLink(
                        //   "Transaction",
                        //   receipt.transactionHash
                        // );
                        getTotalMinted(formState.contract as Contract).then(
                          (total: string) => {
                            // updateRabbitHole(
                            //   Number(quantity.value),
                            //   txnLink,
                            //   Number(total)
                            // );
                            formDispatch({
                              type: "setStartingTokenId",
                              payload: Number(total) - Number(quantity.value),
                            });
                          }
                        );
                        setTimeout(() => {
                          stepperDispatch({
                            type: "setCurrentStep",
                            payload: 2,
                          });
                          formDispatch({
                            type: "stepTwoComplete",
                            payload: true,
                          });
                        }, 1250);
                        setLoading(false);
                      }
                    })
                    .catch((e) => alert(e));
                }}
              >
                <div className="flex mt-12 justify-between">
                  <label htmlFor="quantity" className="text-lg">
                    Quantity (max: 3 per transaction)
                  </label>
                  <input
                    name="quantity"
                    value={quantity.value}
                    type="range"
                    min="0"
                    max="3"
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
                      costPerToken
                        ?.mul(BigNumber.from(quantity.value))
                        .toString()
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
                  ></input>
                </div>
              </form>
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
