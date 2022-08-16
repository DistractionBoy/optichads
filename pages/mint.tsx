import Image from "next/image";
import React from "react";

import { DarkOverlapShell, HeadMeta } from "../components";

import vitalikApproves from "../public/images/vitalik_approves.png";

const MintPage = () => {
  return (
    <>
      <HeadMeta
        title={`Mint Closed!`}
        description={`Supplies ran out. Pick up an OptiChad in secondary!`}
        keywords={`Mint, OptiChad, Non-Fungible Tokens`}
      />
      <DarkOverlapShell title="Minting Closed! Pick up some sweet chads in secondary bruh">
        <div className="relative bg-white rounded-lg shadow">
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
