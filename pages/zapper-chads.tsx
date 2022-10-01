import React from "react";

import { DarkOverlapShell, HeadMeta, ZapperChad } from "../components";

const ProposalPage = () => {
  return (
    <>
      <HeadMeta
        title={`Power Proposal`}
        description={`We are working on using the engagement we have received in Discord and at the gym to help promote our favorite chain, Optimism`}
        keywords={`Proposal, Funding, Governance`}
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
