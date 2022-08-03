import { Step } from "../../components/Stepper";
import { createCtx } from "./createCtx";
import * as R from "ramda";

export const stepperInitialState: Step[] = [
  {
    id: "1",
    name: "Connect",
    description: "wallet and check network",
    href: "",
    status: "current",
  },
  {
    id: "2",
    name: "Checkout",
    description: "quantity and mint",
    href: "",
    status: "upcoming",
  },
  {
    id: "3",
    name: "Review",
    description: "receipt",
    href: "",
    status: "upcoming",
  },
];

type AppState = typeof stepperInitialState;
type Action =
  | { type: "setSteps"; payload: Step[] }
  | {
      type: "setStepComplete";
      payload: number;
    }
  | {
      type: "setCurrentStep";
      payload: number;
    };

const setStepComplete = (steps: Step[], completedStepIndex: number): Step[] => {
  const stepsCopy = R.clone(steps);
  debugger;
  stepsCopy.map((step, idx) => {
    if (idx <= completedStepIndex) {
      step.status = "complete";
    } else {
      step.status = "upcoming";
    }
  });
  return stepsCopy;
};

const setCurrentStep = (steps: Step[], completedStepIndex: number): Step[] => {
  const stepsCopy = R.clone(steps);
  stepsCopy.map((step, idx) => {
    if (idx === completedStepIndex) {
      step.status = "current";
    }
  });
  return stepsCopy;
};

export function stepperReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "setSteps":
      return action.payload;
    case "setStepComplete":
      return setStepComplete(state, action.payload);
    case "setCurrentStep":
      return setCurrentStep(state, action.payload);
    default:
      return state;
  }
}

const [ctx, provider] = createCtx(stepperReducer, stepperInitialState);
export const StepperContext = ctx;
export const StepperProvider = provider;
