import { Composition } from "remotion";

import { CapePulseHeroComposition } from "./capepulse-hero";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="CapePulseHero"
        component={CapePulseHeroComposition}
        width={1440}
        height={920}
        fps={30}
        durationInFrames={270}
      />
    </>
  );
};

export default RemotionRoot;
