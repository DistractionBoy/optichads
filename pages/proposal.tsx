import React from "react";

import { DarkOverlapShell, HeadMeta, Proposal } from "../components";

const ProposalPage = () => {
  return (
    <>
      <HeadMeta
        title={`Power Proposal`}
        description={`We are working on using the engagement we have received in Discord and at the gym to help promote our favorite chain, Optimism`}
        keywords={`Proposal, Funding, Governance`}
      />
      <DarkOverlapShell title="Quest: More Than Protein Chips">
        <div className="relative bg-white rounded-lg shadow">
          <Proposal />
        </div>
      </DarkOverlapShell>
    </>
  );
};

export default ProposalPage;
