import { FrameMetadata } from "@/components/frames/FrameMetadata";
import { NextPage } from "next";

const OptiChadsFloorFrame: NextPage = () => {
  return (
    <FrameMetadata
      buttons={[
        {
          label: "Tell me the story",
        },
        {
          action: "link",
          label: "Link to Google",
          target: "https://www.google.com",
        },
        {
          action: "post_redirect",
          label: "Redirect to cute pictures",
        },
      ]}
      image={{
        src: "https://zizzamia.xyz/park-3.png",
        aspectRatio: "1:1",
      }}
      input={{
        text: "Tell me a boat story",
      }}
      postUrl="https://zizzamia.xyz/api/frame"
    />
  );
};

export default OptiChadsFloorFrame;
