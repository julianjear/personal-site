import React from "react";

// A tiny sprinkle of stars rendered behind the page content. Deterministic
// (LCG seeded) so the layout is identical across reloads — keeps the page
// from feeling like it's "shuffling" each time. Sparse on purpose: ~42
// stars total in three tiers (most tiny, some mid, a few bright) so the
// hero and CTA stay the focus.
const STAR_COUNT = 42;

function generateStars(seed = 42) {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  return Array.from({ length: STAR_COUNT }, () => {
    const tier = rand();
    const isBright = tier < 0.06;
    const isMid = !isBright && tier < 0.22;
    const size = isBright
      ? 1.6 + rand() * 0.9
      : isMid
      ? 1.0 + rand() * 0.5
      : 0.6 + rand() * 0.4;
    const opacity = isBright
      ? 0.7 + rand() * 0.2
      : isMid
      ? 0.45 + rand() * 0.2
      : 0.25 + rand() * 0.2;
    return {
      x: rand() * 100,
      y: rand() * 100,
      size,
      opacity,
      glow: isBright,
      twinkle: rand() > 0.65,
      delay: rand() * 6,
      duration: 4.5 + rand() * 4,
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
      <div
        key={i}
        className={s.twinkle ? "cosmic-star-twinkle" : undefined}
        style={{
          position: "absolute",
          left: `${s.x}%`,
          top: `${s.y}%`,
          width: s.size,
          height: s.size,
          borderRadius: "50%",
          background: "#F4F2FF",
          opacity: s.opacity,
          boxShadow: s.glow
            ? `0 0 ${s.size * 2.5}px rgba(244, 242, 255, 0.6)`
            : undefined,
          animationDelay: s.twinkle ? `${s.delay}s` : undefined,
          animationDuration: s.twinkle ? `${s.duration}s` : undefined,
          // Per-star base opacity for the keyframe to land back on.
          "--star-opacity": s.opacity,
        }}
      />
    ))}
  </div>
);

export default Stars;
