import React, { useContext } from "react";

import {
  DarkOverlapShell,
  Stepper,
  MintStepOne,
  MintStepTwo,
  MintStepThree,
  HeadMeta,
} from "../components";
import { MintFormContext } from "../lib/state/mintForm";

const MintPage = () => {
  const { state: formState } = useContext(MintFormContext);

  return (
    <>
      <HeadMeta
        title={`Mint OptiChads`}
        description={`Connect and Mint! (while supplies last)`}
        keywords={`Mint, OptiChad, Non-Fungible Tokens`}
      />
      <DarkOverlapShell title="Mint OptiChads">
        <div className="relative bg-white rounded-lg shadow">
          <Stepper />
          {!formState.isReadyForStep2 && <MintStepOne />}
          {formState.isReadyForStep2 && !formState.isReadyForStep3 && (
            <MintStepTwo />
          )}
          {formState.isReadyForStep3 && <MintStepThree />}
        </div>
      </DarkOverlapShell>
    </>
  );
};

export default MintPage;
