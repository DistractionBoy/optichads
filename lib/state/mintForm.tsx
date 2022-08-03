import { BigNumber } from "@ethersproject/bignumber";
import { ContractReceipt, Contract } from "@ethersproject/contracts";
import { createCtx } from "./createCtx";

export interface MintForm {
  isOnOptimismChain: boolean;
  contract?: Contract;
  isReadyForStep2: boolean;
  quantity: number;
  pricePerUnit: BigNumber;
  startingTokenId: number;
  isReadyForStep3: boolean;
  receipt?: ContractReceipt;
}

export const mintFormInitialState: MintForm = {
  isOnOptimismChain: false,
  contract: undefined,
  isReadyForStep2: false,
  quantity: 0,
  pricePerUnit: BigNumber.from("0"),
  startingTokenId: 0,
  isReadyForStep3: false,
  receipt: undefined,
};

type AppState = MintForm;
type Action =
  | { type: "setMintFormState"; payload: MintForm }
  | { type: "stepOneComplete"; payload: boolean }
  | { type: "stepTwoComplete"; payload: boolean }
  | { type: "setReceipt"; payload: ContractReceipt }
  | { type: "setStartingTokenId"; payload: number }
  | { type: "resetForm" };

const markStepOneComplete = (state: MintForm, payload: boolean): MintForm => {
  debugger;
  return { ...state, isReadyForStep2: payload };
};

const markStepTwoComplete = (state: MintForm, payload: boolean): MintForm => {
  return { ...state, isReadyForStep3: payload };
};

const setReceipt = (state: MintForm, payload: ContractReceipt): MintForm => {
  return { ...state, receipt: payload };
};

const setStartingTokenId = (state: MintForm, payload: number): MintForm => {
  return { ...state, startingTokenId: payload };
};

const resetForm = (): MintForm => {
  return mintFormInitialState;
};

export function mintFormReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "setMintFormState":
      return action.payload;
    case "stepOneComplete":
      return markStepOneComplete(state, action.payload);
    case "stepTwoComplete":
      return markStepTwoComplete(state, action.payload);
    case "setReceipt":
      return setReceipt(state, action.payload);
    case "setStartingTokenId":
      return setStartingTokenId(state, action.payload);
    case "resetForm":
      return resetForm();
    default:
      return state;
  }
}

const [ctx, provider] = createCtx(mintFormReducer, mintFormInitialState);
export const MintFormContext = ctx;
export const MintFormProvider = provider;
