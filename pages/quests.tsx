import React from "react";

import {
  DailyChad,
  DarkHeroSectionForm,
  DarkOverlapShell,
  HeadMeta,
  QuestsOpener,
} from "../components";

const QuestsPage = () => {
  return (
    <>
      <HeadMeta
        title={`OptiChad Quests`}
        description={`With daily giveaways and weekly challenges we are raising awareness of health in Web3 and paying you to do it!`}
        keywords={`Quests, OptiChads, Health in Web3`}
      />
      <DarkHeroSectionForm />
      <DarkOverlapShell title="OptiChad Quests">
        <div className="rounded-lg bg-white shadow">
          <QuestsOpener />
          <DailyChad targetId="#username" />
        </div>
      </DarkOverlapShell>
    </>
  );
};

export default QuestsPage;
