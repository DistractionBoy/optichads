import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
import { classNames } from "../lib/helpers";
import { StepperContext } from "../lib/state/stepper";

export interface Step {
  id: string;
  name: string;
  description: string;
  href: string;
  status: "upcoming" | "current" | "complete";
}

export default function Stepper() {
  const { state } = React.useContext(StepperContext);

  return state?.length > 0 ? (
    <div className="rounded-t-lg lg:border-t lg:border-b lg:border-gray-200">
      <nav className="mx-auto max-w-7xl " aria-label="Progress">
        <ol
          role="list"
          className="rounded-t-lg overflow-hidden lg:flex lg:border-l lg:border-r lg:border-gray-200"
        >
          {state.map((step, stepIdx) => (
            <li key={step.id} className="relative overflow-hidden lg:flex-1">
              <div
                className={classNames(
                  stepIdx === 0 ? "border-b-0 rounded-t-md" : "",
                  stepIdx === state.length - 1 ? "border-t-0" : "",
                  "border border-gray-200 overflow-hidden lg:border-0"
                )}
              >
                {step.status === "complete" ? (
                  <div className="group">
                    <span
                      className="absolute top-0 left-0 w-1 h-full bg-transparent lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        stepIdx !== 0 ? "lg:pl-9" : "",
                        "px-6 py-5 flex items-start text-sm font-medium"
                      )}
                    >
                      <span className="flex-shrink-0">
                        <span className="w-10 h-10 flex items-center justify-center bg-red-600 rounded-full">
                          <CheckIcon
                            className="w-6 h-6 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </span>
                      <span className="mt-0.5 ml-4 min-w-0 flex flex-col">
                        <span className="text-xs font-semibold tracking-wide uppercase">
                          {step.name}
                        </span>
                        <span className="text-sm font-medium text-gray-500">
                          {step.description}
                        </span>
                      </span>
                    </span>
                  </div>
                ) : step.status === "current" ? (
                  <div aria-current="step">
                    <span
                      className="absolute top-0 left-0 w-1 h-full bg-red-600 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        stepIdx !== 0 ? "lg:pl-9" : "",
                        "px-6 py-5 flex items-start text-sm font-medium"
                      )}
                    >
                      <span className="flex-shrink-0">
                        <span className="w-10 h-10 flex items-center justify-center border-2 border-red-600 rounded-full">
                          <span className="text-red-600">{step.id}</span>
                        </span>
                      </span>
                      <span className="mt-0.5 ml-4 min-w-0 flex flex-col">
                        <span className="text-xs font-semibold text-red-600 tracking-wide uppercase">
                          {step.name}
                        </span>
                        <span className="text-sm font-medium text-gray-500">
                          {step.description}
                        </span>
                      </span>
                    </span>
                  </div>
                ) : (
                  <div className="group">
                    <span
                      className="absolute top-0 left-0 w-1 h-full bg-transparent lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        stepIdx !== 0 ? "lg:pl-9" : "",
                        "px-6 py-5 flex items-start text-sm font-medium"
                      )}
                    >
                      <span className="flex-shrink-0">
                        <span className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full">
                          <span className="text-gray-500">{step.id}</span>
                        </span>
                      </span>
                      <span className="mt-0.5 ml-4 min-w-0 flex flex-col">
                        <span className="text-xs font-semibold text-gray-500 tracking-wide uppercase">
                          {step.name}
                        </span>
                        <span className="text-sm font-medium text-gray-500">
                          {step.description}
                        </span>
                      </span>
                    </span>
                  </div>
                )}

                {stepIdx !== 0 ? (
                  <>
                    {/* Separator */}
                    <div
                      className="hidden absolute top-0 left-0 w-3 inset-0 lg:block"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-full w-full text-gray-300"
                        viewBox="0 0 12 82"
                        fill="none"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0.5 0V31L10.5 41L0.5 51V82"
                          stroke="currentcolor"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    </div>
                  </>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  ) : (
    <div id="stepper-failed"></div>
  );
}
