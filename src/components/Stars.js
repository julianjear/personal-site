import React from "react";

// A starfield rendered behind the page. Deterministic (LCG seeded) so the
// layout is identical across reloads. Three tiers — most tiny, some mid,
// a few bright with a soft halo — and a per-star drift animation so the
// field feels like it's moving through space instead of frozen. Bigger
// (closer) stars drift further over the same period; that's the parallax
// cue that sells "traveling forward."
const STAR_COUNT = 170;

function generateStars(seed = 42) {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  return Array.from({ length: STAR_COUNT }, () => {
    const tier = rand();
    const isBright = tier < 0.06;
    const isMid = !isBright && tier < 0.24;
    const size = isBright
      ? 1.6 + rand() * 0.9
      : isMid
      ? 1.0 + rand() * 0.5
      : 0.55 + rand() * 0.45;
    const opacity = isBright
      ? 0.7 + rand() * 0.2
      : isMid
      ? 0.45 + rand() * 0.2
      : 0.22 + rand() * 0.22;

    // Drift distance scales with size — closer/brighter stars move more,
    // creating real parallax. Bias the angle into the lower hemisphere
    // (180°–360°) so the whole field implies forward travel.
    const driftBase = isBright ? 24 : isMid ? 15 : 8;
    const driftAngle = Math.PI + rand() * Math.PI; // 180°–360° (mostly downward sweep)
    const driftX = Math.cos(driftAngle) * driftBase * (0.6 + rand() * 0.6);
    const driftY = Math.abs(Math.sin(driftAngle)) * driftBase * (0.6 + rand() * 0.6);

    return {
      x: rand() * 100,
      y: rand() * 100,
      size,
      opacity,
      glow: isBright,
      twinkle: rand() > 0.6,
      twinkleDelay: rand() * 6,
      twinkleDur: 4.5 + rand() * 4,
      driftX,
      driftY,
      driftDelay: -rand() * 60, // stagger phases so they're not in lockstep
      driftDur: isBright ? 20 + rand() * 16 : isMid ? 32 + rand() * 18 : 46 + rand() * 24,
    };
  });
}

const STARS = generateStars();

const Stars = () => (
  <div
    aria-hidden="true"
    style={{
      position: "fixed",
      inset: 0,
      pointerEvents: "none",
      zIndex: 0,
      overflow: "hidden",
    }}
  >
    {STARS.map((s, i) => (
      // Outer wrapper handles the slow drift (translate). Inner does the
      // actual rendering + optional twinkle (opacity). Two layers because
      // CSS animations on the same element don't combine cleanly when one
      // mutates `transform` and the other `opacity` on different cadences.
      <div
        key={i}
        className="cosmic-star-drift"
        style={{
          position: "absolute",
          left: `${s.x}%`,
          top: `${s.y}%`,
          width: s.size,
          height: s.size,
          animationDelay: `${s.driftDelay}s`,
          animationDuration: `${s.driftDur}s`,
          "--drift-x": `${s.driftX.toFixed(2)}px`,
          "--drift-y": `${s.driftY.toFixed(2)}px`,
        }}
      >
        <div
          className={s.twinkle ? "cosmic-star-twinkle" : undefined}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "#F4F2FF",
            opacity: s.opacity,
            boxShadow: s.glow
              ? `0 0 ${s.size * 2.5}px rgba(244, 242, 255, 0.6)`
              : undefined,
            animationDelay: s.twinkle ? `${s.twinkleDelay}s` : undefined,
            animationDuration: s.twinkle ? `${s.twinkleDur}s` : undefined,
            "--star-opacity": s.opacity,
          }}
        />
      </div>
    ))}
  </div>
);

export default Stars;
