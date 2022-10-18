import React from "react";

import {
  DailyChad,
  DarkHeroSectionForm,
  DarkOverlapShell,
  HeadMeta,
  QuestsClosingSection,
  QuestsOpener,
  WeeklyTable,
} from "../components";

const QuestsPage = () => {
  return (
    <>
      <HeadMeta
        title={`OptiChad Quests`}
        description={`With giveaways and weekly challenges we are raising awareness of health in Web3 and paying you to do it`}
        keywords={`Quests, OptiChads, Health in Web3`}
      />
      <DarkHeroSectionForm />
      <DarkOverlapShell title="OptiChad Quests">
        <div className="rounded-lg bg-white shadow">
          <QuestsOpener />
          <WeeklyTable />
          <DailyChad targetId="#username" />
          <QuestsClosingSection />
        </div>
      </DarkOverlapShell>
    </>
  );
};

export default QuestsPage;
