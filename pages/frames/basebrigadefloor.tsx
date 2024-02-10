import {
  FrameContainer,
  FrameImage,
  FrameButton,
  getFrameMessage,
  useFramesReducer,
  getPreviousFrame,
  validateActionSignature,
  FrameInput,
} from "frames.js/next/server";

const reducer = (state: any, action: any) => ({ count: state.count + 1 });

export default async function BaseBrigadeFloor(props: any) {
  const previousFrame = getPreviousFrame(props.searchParams);
  const frameMessage = await getFrameMessage(previousFrame.postBody);

  if (frameMessage && !frameMessage?.isValid) {
    throw new Error("Invalid frame payload");
  }
  const [state, dispatch] = useFramesReducer(
    reducer,
    { count: 0 },
    previousFrame
  );

  return (
    <FrameContainer
      postUrl="/frames"
      state={state}
      previousFrame={previousFrame}
    >
      <FrameImage>
        <div tw="w-full h-full bg-slate-700 text-white justify-center items-center">
          {state.count}
        </div>
      </FrameImage>
      <FrameButton>{state.count}</FrameButton>
    </FrameContainer>
  );
}
