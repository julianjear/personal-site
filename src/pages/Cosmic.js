import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SkyOrb from "../components/SkyOrb";
import Stars from "../components/Stars";

// Releases live in the cosmic-mac-app companion repo (mirrors the
// makesomething pattern). The page hits the GitHub API on mount, finds
// the latest .dmg asset, and falls back to the releases page if the
// API call fails.
const GITHUB_REPO = "julianjear/cosmic-mac-app";
const FALLBACK_DOWNLOAD_URL = `https://github.com/${GITHUB_REPO}/releases/latest`;

const COLORS = {
  midnight: "#100E17",
  surface1: "#1C1A2E",
  fgPrimary: "#E8E6F0",
  fgSecondary: "#C6D0F5",
  fgTertiary: "#9A9ABF",
  fgGhost: "#5E5C7A",
  portal: "#7B7FFF",
  portalHover: "#8F92FF",
  portalHair: "rgba(123, 127, 255, 0.18)",
  warn: "#E8B08A",
};

function detectPlatform() {
  if (typeof navigator === "undefined") return "macos";
  const ua = navigator.userAgent.toLowerCase();
  if (/iphone|ipad|ipod|android/.test(ua)) return "mobile";
  if (ua.includes("mac")) return "macos";
  if (ua.includes("win")) return "windows";
  if (ua.includes("linux")) return "linux";
  return "macos";
}

// Chrome/Edge freeze the UA string at "Mac OS X 10_15_7" on every
// modern macOS, so prefer User-Agent Client Hints when available and
// only fall back to UA parsing for Safari/Firefox.
async function detectMacOSVersion() {
  if (typeof navigator === "undefined") return null;

  if ("userAgentData" in navigator) {
    try {
      const hints = await navigator.userAgentData.getHighEntropyValues([
        "platformVersion",
      ]);
      if (hints.platformVersion) {
        const major = parseInt(hints.platformVersion.split(".")[0], 10);
        if (!Number.isNaN(major)) return major;
      }
    } catch {
      // fall through to UA parsing
    }
  }

  const match = navigator.userAgent.match(/Mac OS X (\d+)[_.]/);
  if (match) {
    const major = parseInt(match[1], 10);
    // Chrome/Edge freeze the UA at 10_15_7 on every modern macOS;
    // treat that as unknown rather than as a real macOS 10 machine.
    if (!Number.isNaN(major) && major !== 10) return major;
  }
  return null;
}

const Cosmic = () => {
  const [downloadUrl, setDownloadUrl] = useState(FALLBACK_DOWNLOAD_URL);
  const [platform, setPlatform] = useState("macos");
  const [macOSMajor, setMacOSMajor] = useState(null);

  useEffect(() => {
    setPlatform(detectPlatform());
    detectMacOSVersion().then((v) => setMacOSMajor(v));
  }, []);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${GITHUB_REPO}/releases/latest`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r)))
      .then((release) => {
        const dmg = release.assets?.find((a) => a.name.endsWith(".dmg"));
        if (dmg) setDownloadUrl(dmg.browser_download_url);
      })
      .catch(() => {
        // Silently keep the fallback releases-page URL.
      });
  }, []);

  const isMac = platform === "macos";
  const isOldMac = isMac && macOSMajor !== null && macOSMajor < 14;
  const canDownload = isMac && !isOldMac;

  return (
    <HelmetProvider>
      <Helmet>
        <title>cosmic</title>
        <meta
          name="description"
          content="cosmic — instantly capture notes or start a conversation with anything you read or watch on your computer."
        />
        <meta name="theme-color" content={COLORS.midnight} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <style>{`
          html, body, #root, #wrapper, #main { background: ${COLORS.midnight}; }
          body { margin: 0; }
          @keyframes cosmic-fade-up {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes cosmic-star-twinkle {
            0%, 100% { opacity: var(--star-opacity, 0.6); }
            50%      { opacity: 0.12; }
          }
          .cosmic-star-twinkle {
            animation-name: cosmic-star-twinkle;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
          }
          @keyframes cosmic-star-drift {
            0%   { transform: translate(0, 0); }
            100% { transform: translate(var(--drift-x, 0), var(--drift-y, 0)); }
          }
          .cosmic-star-drift {
            animation-name: cosmic-star-drift;
            animation-iteration-count: infinite;
            animation-direction: alternate;
            animation-timing-function: ease-in-out;
            will-change: transform;
          }
          /* Lock color/opacity on every link state. !important here is
             defensive — the personal-site's global stylesheet has an
             "a:hover { color: rgb(46,89,186) !important }" rule that
             would otherwise win the cascade and tint our text indigo
             on hover. */
          .cosmic-cta,
          .cosmic-cta:link,
          .cosmic-cta:visited,
          .cosmic-cta:hover,
          .cosmic-cta:focus,
          .cosmic-cta:active {
            color: #000000 !important;
            opacity: 1 !important;
            text-decoration: none !important;
          }
          .cosmic-cta {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            height: 48px;
            padding: 0 26px;
            border-radius: 9999px;
            background-color: ${COLORS.portal};
            font-family: inherit;
            font-size: 0.95rem;
            font-weight: 600;
            letter-spacing: 0.005em;
            box-shadow: 0 0 20px 0 rgba(123, 127, 255, 0.30);
            transition:
              background-color 200ms cubic-bezier(0.2, 0.8, 0.2, 1),
              box-shadow 200ms cubic-bezier(0.2, 0.8, 0.2, 1),
              transform 150ms cubic-bezier(0.2, 0.8, 0.2, 1);
          }
          .cosmic-cta:hover {
            background-color: ${COLORS.portalHover};
            box-shadow: 0 0 40px 0 rgba(123, 127, 255, 0.35);
          }
          .cosmic-cta:active {
            transform: scale(0.98);
            transition-duration: 0ms;
          }
          .cosmic-cta:focus-visible {
            outline: 2px solid ${COLORS.portal};
            outline-offset: 2px;
          }
          @media (prefers-reduced-motion: reduce) {
            .cosmic-fade,
            .cosmic-star-twinkle,
            .cosmic-star-drift { animation: none !important; }
          }
        `}</style>
      </Helmet>

      <Stars />

      <div
        style={{
          position: "fixed",
          inset: 0,
          color: COLORS.fgPrimary,
          fontFamily:
            "'Outfit', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
          overflowY: "auto",
          overflowX: "hidden",
          zIndex: 1,
        }}
      >
        <main
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "72px 24px 96px",
            textAlign: "center",
            minHeight: "100%",
          }}
        >
          <div
            className="cosmic-fade"
            style={{
              animation: "cosmic-fade-up 0.8s ease-out both",
              marginBottom: "8px",
            }}
          >
            <SkyOrb size={148} />
          </div>

          <h1
            className="cosmic-fade"
            style={{
              fontSize: "clamp(2.6rem, 9vw, 5rem)",
              fontWeight: 700,
              letterSpacing: "-0.05em",
              lineHeight: 1,
              margin: 0,
              color: COLORS.fgPrimary,
              animation: "cosmic-fade-up 0.7s 0.08s ease-out both",
            }}
          >
            cosmic
          </h1>

          <p
            className="cosmic-fade"
            style={{
              fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
              fontWeight: 400,
              letterSpacing: "-0.005em",
              lineHeight: 1.5,
              margin: "20px 0 0",
              maxWidth: "52ch",
              color: COLORS.fgSecondary,
              animation: "cosmic-fade-up 0.7s 0.16s ease-out both",
            }}
          >
            Instantly capture notes or start a conversation with anything you
            read or watch on your computer.
          </p>

          <div
            className="cosmic-fade"
            style={{
              marginTop: "44px",
              animation: "cosmic-fade-up 0.7s 0.24s ease-out both",
            }}
          >
            {canDownload ? (
              <a className="cosmic-cta" href={downloadUrl}>
                <AppleGlyph />
                <span>Download for macOS</span>
              </a>
            ) : isOldMac ? (
              <Pill tone="warn">
                Requires macOS 14 (Sonoma) or later — you’re on macOS{" "}
                {macOSMajor}.
              </Pill>
            ) : (
              <Pill tone="muted">
                {platform === "mobile"
                  ? "Visit on your Mac to download"
                  : "Available for macOS 14 or later"}
              </Pill>
            )}
          </div>

          <p
            className="cosmic-fade"
            style={{
              marginTop: "72px",
              marginBottom: "16px",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: COLORS.fgGhost,
              animation: "cosmic-fade-up 0.7s 0.32s ease-out both",
            }}
          >
            Cosmic demo
          </p>

          <div
            className="cosmic-fade"
            style={{
              width: "100%",
              maxWidth: "880px",
              animation: "cosmic-fade-up 0.7s 0.4s ease-out both",
            }}
          >
            <video
              src="/cosmic-demo.mp4"
              poster="/cosmic-demo-poster.jpg"
              controls
              playsInline
              preload="metadata"
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                borderRadius: "16px",
                background: COLORS.surface1,
                boxShadow:
                  "0 24px 60px 0 rgba(0,0,0,0.55), 0 0 0 1px rgba(123,127,255,0.18), 0 0 40px 0 rgba(123,127,255,0.12)",
              }}
            />
          </div>
        </main>
      </div>
    </HelmetProvider>
  );
};

const AppleGlyph = () => (
  <svg
    width="14"
    height="17"
    viewBox="0 0 16 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M13.182 10.625c-.02-2.065 1.686-3.058 1.763-3.105-.96-1.404-2.454-1.596-2.987-1.618-1.272-.129-2.484.749-3.131.749-.647 0-1.648-.73-2.708-.71-1.393.02-2.678.81-3.394 2.058-1.447 2.51-.37 6.228 1.04 8.266.688.997 1.508 2.116 2.586 2.076 1.037-.042 1.429-.67 2.682-.67 1.253 0 1.604.67 2.693.649 1.117-.02 1.824-1.016 2.508-2.015.79-1.156 1.116-2.274 1.136-2.332-.025-.01-2.179-.836-2.2-3.316l.012-.032zM11.1 4.2c.572-.693.958-1.655.852-2.614-.824.034-1.822.549-2.412 1.242-.53.613-.993 1.592-.868 2.53.919.072 1.856-.467 2.428-1.158z" />
  </svg>
);

const Pill = ({ tone, children }) => {
  const isWarn = tone === "warn";
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "12px 22px",
        borderRadius: "9999px",
        background: isWarn
          ? "rgba(212, 149, 107, 0.12)"
          : "rgba(28, 26, 46, 0.7)",
        border: `1px solid ${isWarn ? "rgba(212,149,107,0.28)" : COLORS.portalHair}`,
        fontSize: "0.85rem",
        fontWeight: 500,
        color: isWarn ? COLORS.warn : COLORS.fgSecondary,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <AppleGlyph />
      <span>{children}</span>
    </div>
  );
};

export default Cosmic;
