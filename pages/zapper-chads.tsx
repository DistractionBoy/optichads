import React from "react";

import { DarkOverlapShell, HeadMeta, ZapperChad } from "../components";

const ProposalPage = () => {
  return (
    <>
      <HeadMeta
        title={`Zapper Chads do Stats`}
        description={`Zapper Fi has some new and exciting features we wanna show off at the gym. Check it out, bro.`}
        keywords={`Zapper Fi, Dashboard, Stats`}
      />
      <DarkOverlapShell title="Zapper Fi Keeping Track of Reps">
        <div className="relative rounded-lg bg-white shadow">
          <ZapperChad />
        </div>
      </DarkOverlapShell>
    </>
  );
};

export default ProposalPage;
