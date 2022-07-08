import React, { useContext } from "react";
import { NextPage } from "next";

import {
  DarkOverlapShell,
  Stepper,
  MintStepOne,
  MintStepTwo,
  MintStepThree,
  HeadMeta,
} from "../components";
import { MintFormContext } from "../lib/state/mintForm";
import Image from "next/image";

import vitalikApproves from "../public/images/vitalik_approves.png";

const MintPage: NextPage = () => {
  const { state: formState } = useContext(MintFormContext);

  return (
    <>
      <HeadMeta
        title={`Mint OptiChads`}
        description={`Connect and Mint! (while supplies last)`}
        keywords={`Mint, OptiChad, Non-Fungible Tokens`}
      />
      <DarkOverlapShell title="mint date not yet set">
        <div className="relative bg-white rounded-lg shadow">
          {/* <Stepper />
          {!formState.isReadyForStep2 && <MintStepOne />}
          {formState.isReadyForStep2 && !formState.isReadyForStep3 && (
            <MintStepTwo />
          )}
          {formState.isReadyForStep3 && <MintStepThree />} */}
          <Image
            alt="a sick tweet bro"
            className="rounded-lg"
            src={vitalikApproves}
            height={900}
            width={1255}
            layout="responsive"
          />
        </div>
      </DarkOverlapShell>
    </>
  );
};

export default MintPage;
