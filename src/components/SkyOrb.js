import React, { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";

// Portal-indigo palette from the Cosmic design system. The orb breathes
// a continuous turbulence noise driven by rAF — no SMIL, no React
// re-render churn, so the cloud never visibly snaps between frames.
//
// Ported from cosmic/note-editor's orbs/SkyOrb.jsx, trimmed to a single
// idle palette since this is a static hero element (no speaking state).
const PORTAL = {
  hex: "#7B7FFF",
  stops: [
    { o: 0, c: "#F4F2FF" },
    { o: 0.35, c: "#CFCDFF" },
    { o: 0.65, c: "#7B7FFF" },
    { o: 1, c: "#4A4ED9" },
  ],
  bg: "#4A4ED9",
  glow: "rgba(123,127,255,0.45)",
  spark: "#E4DEFF",
};

const SkyOrb = ({ size = 160 }) => {
  const uid = useMemo(() => `sky-${Math.random().toString(36).slice(2, 7)}`, []);
  const fGradId = `g-${uid}`;
  const fTurbId = `t-${uid}`;
  const fTurbFineId = `tf-${uid}`;
  const fClipId = `c-${uid}`;

  // Mutate baseFrequency directly on the live feTurbulence elements from a
  // single rAF loop. Accumulating phase (vs. scaling elapsed time) means
  // speed changes never retroactively snap the sine wave.
  const turbRef = useRef(null);
  const turbFineRef = useRef(null);

  useEffect(() => {
    let raf;
    let tMain = 0;
    let tFine = 0;
    let lastNow = performance.now();

    const tick = (now) => {
      const dt = Math.min(0.05, (now - lastNow) / 1000);
      lastNow = now;
      tMain += dt;
      tFine += dt;

      const baseX = 0.0095 + Math.sin(tMain * 0.18) * 0.0025;
      const baseY = 0.019 + Math.sin(tMain * 0.13 + 1.7) * 0.0035;
      if (turbRef.current) {
        turbRef.current.setAttribute(
          "baseFrequency",
          `${baseX.toFixed(5)} ${baseY.toFixed(5)}`
        );
      }

      const fX = 0.03 + Math.sin(tFine * 0.27 + 0.6) * 0.006;
      const fY = 0.048 + Math.sin(tFine * 0.21 + 2.3) * 0.008;
      if (turbFineRef.current) {
        turbFineRef.current.setAttribute(
          "baseFrequency",
          `${fX.toFixed(5)} ${fY.toFixed(5)}`
        );
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          inset: -size * 0.55,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${PORTAL.glow} 0%, transparent 60%)`,
          filter: "blur(22px)",
        }}
        animate={{ opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{
          position: "absolute",
          inset: -size * 0.25,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${PORTAL.hex}66 0%, ${PORTAL.hex}22 40%, transparent 70%)`,
          filter: "blur(12px)",
        }}
        animate={{ opacity: [0.45, 0.65, 0.45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{
          position: "absolute",
          inset: -size * 0.1,
          borderRadius: "50%",
          background: `radial-gradient(circle, transparent 46%, ${PORTAL.hex}77 60%, ${PORTAL.hex}33 75%, transparent 88%)`,
          filter: "blur(5px)",
        }}
        animate={{ opacity: [0.75, 0.95, 0.75] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <Motes size={size} color={PORTAL.spark} />

      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 300 300"
        animate={{ scale: [1, 1.008, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{
          display: "block",
          overflow: "visible",
          position: "relative",
          zIndex: 1,
        }}
      >
        <defs>
          <linearGradient id={fGradId} x1="0.5" y1="0" x2="0.5" y2="1">
            {PORTAL.stops.map((s) => (
              <stop key={s.o} offset={s.o} stopColor={s.c} />
            ))}
          </linearGradient>

          <filter id={fTurbId} x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              ref={turbRef}
              type="fractalNoise"
              baseFrequency="0.0095 0.019"
              numOctaves="4"
              seed="4"
              result="noise"
            />
            <feColorMatrix
              in="noise"
              type="matrix"
              values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1.5 -0.55"
              result="wisps"
            />
            <feGaussianBlur in="wisps" stdDeviation="3.2" result="softWisps" />
            <feComposite
              in="softWisps"
              in2="SourceGraphic"
              operator="in"
              result="clippedWisps"
            />
            <feMerge>
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="clippedWisps" />
            </feMerge>
          </filter>

          <filter id={fTurbFineId} x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              ref={turbFineRef}
              type="fractalNoise"
              baseFrequency="0.030 0.048"
              numOctaves="2"
              seed="11"
              result="fnoise"
            />
            <feColorMatrix
              in="fnoise"
              type="matrix"
              values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1.6 -0.75"
              result="fwisps"
            />
            <feGaussianBlur in="fwisps" stdDeviation="0.6" result="sfwisps" />
            <feComposite
              in="sfwisps"
              in2="SourceGraphic"
              operator="in"
              result="clippedF"
            />
            <feMerge>
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="clippedF" />
            </feMerge>
          </filter>

          <clipPath id={fClipId}>
            <circle cx="150" cy="150" r="148" />
          </clipPath>
        </defs>

        <g clipPath={`url(#${fClipId})`}>
          <circle cx="150" cy="150" r="148" fill={PORTAL.bg} />
          <g filter={`url(#${fTurbId})`}>
            <rect x="0" y="0" width="300" height="300" fill={`url(#${fGradId})`} />
          </g>
          <g filter={`url(#${fTurbFineId})`} opacity="0.32">
            <rect x="0" y="0" width="300" height="300" fill={`url(#${fGradId})`} />
          </g>
          <circle
            cx="150"
            cy="150"
            r="148"
            fill="none"
            stroke="rgba(0,0,0,0.35)"
            strokeWidth="18"
            style={{ filter: "blur(14px)" }}
          />
          <ellipse
            cx="150"
            cy="60"
            rx="90"
            ry="30"
            fill="rgba(255,255,255,0.18)"
            style={{ filter: "blur(12px)" }}
          />
        </g>
      </motion.svg>
    </div>
  );
};

const Motes = ({ size, color }) => {
  const motes = useMemo(
    () => [0, 1, 2].map((i) => ({ i, phase: i * 2.094 })),
    []
  );
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {motes.map((m) => (
        <motion.div
          key={m.i}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: 1.5,
            height: 1.5,
            borderRadius: "50%",
            background: color,
            boxShadow: `0 0 3px 1px ${color}`,
          }}
          animate={{
            x: [
              Math.cos(m.phase) * size * 0.58,
              Math.cos(m.phase + 2) * size * 0.58,
            ],
            y: [
              Math.sin(m.phase) * size * 0.58,
              Math.sin(m.phase + 2) * size * 0.58,
            ],
            opacity: [0.15, 0.55, 0.15],
          }}
          transition={{
            duration: 16 + m.i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default SkyOrb;
