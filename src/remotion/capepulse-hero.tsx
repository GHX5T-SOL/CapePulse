import { AbsoluteFill, Img, interpolate, Sequence, spring, useCurrentFrame } from "remotion";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1600&q=80",
    title: "Arrival",
    subtitle: "Cape Town opens brighter when timing is handled for you.",
  },
  {
    image: "https://images.unsplash.com/photo-1591303872989-2640dc28185b?auto=format&fit=crop&w=1600&q=80",
    title: "Coastline",
    subtitle: "Signal routes, penguin stops, and a city that always has another chapter.",
  },
  {
    image: "https://images.unsplash.com/photo-1559160581-1bce5694a595?auto=format&fit=crop&w=1600&q=80",
    title: "Belong",
    subtitle: "Wine country, social energy, and discreet movement built into the same system.",
  },
];

export function CapePulseHeroComposition() {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#0A2233", overflow: "hidden", fontFamily: "Instrument Sans, sans-serif" }}>
      {slides.map((slide, index) => {
        const start = index * 90;
        const progress = spring({
          fps: 30,
          frame: frame - start,
          config: { damping: 16, stiffness: 80 },
        });
        const opacity = interpolate(frame, [start, start + 18, start + 75, start + 90], [0, 1, 1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const scale = interpolate(progress, [0, 1], [1.12, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

        return (
          <Sequence key={slide.title} from={start} durationInFrames={90}>
            <AbsoluteFill style={{ opacity }}>
              <Img
                src={slide.image}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transform: `scale(${scale})`,
                }}
              />
              <AbsoluteFill
                style={{
                  background:
                    "linear-gradient(180deg, rgba(8,20,31,0.08), rgba(8,20,31,0.65)), radial-gradient(circle at 14% 18%, rgba(255,181,71,0.28), transparent 26%), radial-gradient(circle at 86% 16%, rgba(0,163,230,0.22), transparent 22%)",
                }}
              />
              <AbsoluteFill style={{ justifyContent: "flex-end", padding: 72, gap: 12 }}>
                <div
                  style={{
                    fontSize: 18,
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "rgba(246,251,255,0.72)",
                    fontFamily: "IBM Plex Mono, monospace",
                  }}
                >
                  {slide.title}
                </div>
                <div style={{ fontSize: 78, lineHeight: 0.9, fontFamily: "Sora, sans-serif", color: "#F6FBFF", maxWidth: 860 }}>
                  Cape Town, personally orchestrated.
                </div>
                <div style={{ maxWidth: 760, fontSize: 28, lineHeight: 1.4, color: "rgba(246,251,255,0.84)" }}>
                  {slide.subtitle}
                </div>
              </AbsoluteFill>
            </AbsoluteFill>
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
}
