import { NextPage } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeadMeta from "@/components/HeadMeta";
import SimpleInnerLayout from "@/components/SimpleInnerLayout";

const Bio: NextPage = () => {
  // const { t } = useTranslation();
  return (
    <>
      <HeadMeta />
      <Navbar />
      <SimpleInnerLayout title="Millynish">
        <div className="prose xl:prose-xl prose-slate mx-8">
          <p className="lead">
            Meet Millynish, the living embodiment of Web3 innovation! After
            Dicaso unleashed Layer 2, there was no turning back for this digital
            dynamo.
          </p>
          <p>
            Drawing inspiration from Optichads Art and community, Millynish
            embarked on a quest to become the ultimate Chad, blending fitness
            and crypto culture with finesse.
          </p>
          <p>
            In the digital realm, Millynish is the jack-of-all-trades for
            Optichads, from managing Discord servers to orchestrating IRL
            meetups, marketing endeavors, talent scouting, and leading metaverse
            workouts. But when he's not busy revolutionizing Web3, he will be on
            Fortnite getting busy with distraction boy or you'll find him
            pumping iron at the gym, sculpting his physique to perfection.{" "}
          </p>
          <p>
            Teaming up with Young Beeps, Millynish also co-pilots the Gurkha
            Foundation, a non-profit basketball initiative that champions
            Optichad holders and spreads joy both on and off the blockchain. And
            let's not forget his role as a dedicated nurse to his grandpa, the
            OG CHAD, where he finds solace and purpose in caring for family
            while cracking jokes in the downtime.
          </p>
        </div>
      </SimpleInnerLayout>
      <Footer />
    </>
  );
};

export default Bio;
