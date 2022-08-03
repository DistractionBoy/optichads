import React, { useContext, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { hooks } from "../lib/connectors/metaMask";

import CONTRACT_ABI from "../lib/contracts/optichads.json";
import { connectToOptimism } from "../lib/helpers";
import { MintFormContext } from "../lib/state/mintForm";
import { StepperContext } from "../lib/state/stepper";
import Account from "./Account";
import Button from "./Button";
import { Contract, ContractInterface } from "@ethersproject/contracts";
import MoreInfoModal from "./MoreInfoModal";
import { ethers } from "ethers";

const { useProvider } = hooks;

export default function MintStepOne() {
  const { account, chainId } = useWeb3React();
  const provider = useProvider();
  const signer = provider?.getSigner(account);

  const sign = async (
    signer: ethers.Signer,
    message: string
  ): Promise<string | Error> => await signer.signMessage(message);

  const { state: formState, dispatch: formDispatch } =
    useContext(MintFormContext);
  const { dispatch: stepperDispatch } = useContext(StepperContext);
  const [modalOpen, toggleModalOpen] = useState(false);

  const setToMintChad = () => {
    const abi: ContractInterface = CONTRACT_ABI;
    stepperDispatch({ type: "setStepComplete", payload: 0 });
    const chadContract = new Contract(
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string,
      abi,
      signer
    );
    formDispatch({
      type: "setMintFormState",
      payload: {
        ...formState,
        contract: chadContract,
        isOnOptimismChain: true,
      },
    });
    setTimeout(() => {
      formDispatch({ type: "stepOneComplete", payload: true });
      stepperDispatch({ type: "setCurrentStep", payload: 1 });
      console.log("formState is: ", formState);
    }, 666);
  };

  const markStepOneComplete = () => {
    const txnDate = new Date().toString();
    sign(signer as ethers.Signer, `OptiChad Minting: ${txnDate}`).then(
      (signature) => {
        const result = ethers.utils.verifyMessage(
          `OptiChad Minting: ${txnDate}`,
          signature as string
        );
        if (result === account) {
          setToMintChad();
        } else {
          alert(
            "Oops, we have detected an invalid signature. Please refresh the page and try again."
          );
        }
      }
    );
  };

  return (
    <div className="bg-white overflow-hidden rounded-b-lg pt-16">
      <div className="px-4 py-5 sm:p-6 sm:mb-16">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-red-600 font-semibold tracking-wide uppercase">
              optichad minting
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Are you ready?
            </span>
          </h1>
          <p className="mt-8 text-xl text-gray-500 leading-8">
            Connect your MetaMask wallet and add the Optimism Network to start.
          </p>
          <div className="flex justify-center">
            {!account && (
              <div className="mx-8 mt-8">
                <div className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  <Account />
                </div>
              </div>
            )}

            {!(chainId === Number(process.env.NEXT_PUBLIC_CHAIN_ID)) &&
              account && (
                <div className="mx-8 mt-8">
                  <Button variant="primary" onClick={() => connectToOptimism()}>
                    Switch to {process.env.NEXT_PUBLIC_CHAIN_NAME}
                  </Button>
                </div>
              )}
          </div>
          <p className="mt-8 text-xl text-gray-500 leading-8">
            You will need to have Ether on the Optimism network to mint the NFT.
            Please go to the official{" "}
            <a
              className="mx-1 underline"
              href="https://gateway.optimism.io/welcome"
            >
              Optimism Gateway
            </a>
            or
            <a
              className="mx-1 underline"
              href="https://app.hop.exchange/send?sourceNetwork=ethereum&destNetwork=optimism"
            >
              Hop exchange
            </a>{" "}
            to move some Ether to the Optimism network before you begin.
          </p>
        </div>
      </div>
      {provider &&
        account &&
        chainId === Number(process.env.NEXT_PUBLIC_CHAIN_ID) && (
          <div className="flex justify-center bg-gray-50 px-4 py-4 sm:px-6">
            <div className="mx-8">
              <Button variant="secondary" onClick={() => toggleModalOpen(true)}>
                More info
              </Button>
            </div>
            <div className="mx-8">
              <Button variant="primary" onClick={() => markStepOneComplete()}>
                I&apos;m ready
              </Button>
            </div>
          </div>
        )}
      {modalOpen && <MoreInfoModal toggle={toggleModalOpen} open={modalOpen} />}
    </div>
  );
}
