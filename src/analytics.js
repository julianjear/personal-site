//
// analytics.js
//
// PostHog wiring for julian.ai. Shares the SAME project key as the Cosmic
// macOS app (phc_qYTDZ3ZiWUDwScHbVBi9stS4RVNpuenYUEg5nRYqhFwU) so the
// funnel "visited cosmic page → clicked download → launched app on Mac
// → activated" can be analyzed in one place.
//
// PostHog public keys (`phc_*`) are designed to ship in client bundles —
// like Google Analytics IDs, they're rate-scoped per project, not secret.
// See https://posthog.com/docs/libraries/js for the contract.
//
// Convention (matches the Cosmic spec at
// `documentation/analytics/posthog-tracking-plan.md`):
//   · Event names: `object verb` past-tense, lowercase, space-separated.
//   · Property names: `snake_case`. Booleans prefix `is_` / `has_`.
//   · No raw user content. URLs from the user's address bar are auto-captured
//     by PostHog autocapture; we don't need to add anything custom.
//
// This file no-ops gracefully in dev (NODE_ENV !== "production") so local
// development doesn't pollute the production project. Override locally by
// setting REACT_APP_POSTHOG_DEV_OPT_IN=true if you want to test events.
//

import posthog from "posthog-js";

// Public project key — safe to ship in the bundle.
const POSTHOG_KEY = "phc_qYTDZ3ZiWUDwScHbVBi9stS4RVNpuenYUEg5nRYqhFwU";
const POSTHOG_HOST = "https://us.i.posthog.com";

let initialized = false;

/**
 * Bootstrap PostHog. Call once from src/index.js BEFORE the React tree
 * mounts so the first $pageview event for the landing route lands.
 * Idempotent — repeat calls are no-ops.
 */
export function initAnalytics() {
  if (initialized) return;
  initialized = true;

  // Default-off in dev so events from the local dev server don't end up in
  // the production project. Flip the env var if you want to smoke-test.
  const isProd = process.env.NODE_ENV === "production";
  const devOptIn = process.env.REACT_APP_POSTHOG_DEV_OPT_IN === "true";
  if (!isProd && !devOptIn) {
    return;
  }

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    // Autocapture handles $pageview and $autocapture (clicks, etc.) — leave
    // on so the landing-page funnel works without us hand-wiring every
    // anchor. We still emit a custom `cosmic download clicked` so dashboards
    // don't have to filter autocaptured anchors by selector.
    autocapture: true,
    capture_pageview: true,
    capture_pageleave: true,
    // Mark every event from julian.ai with `surface: "website"` so PostHog
    // dashboards can split website traffic from the macOS app's events
    // (which carry `build_channel` instead) cleanly.
    loaded: (ph) => {
      ph.register({ surface: "website" });
    },
    // Privacy-conscious defaults. The site has no logged-in user state,
    // so disabling $set + person profile creation keeps the project from
    // accumulating one-shot anonymous people just because someone scrolled
    // the homepage. Override per-event if we add an authed surface later.
    person_profiles: "identified_only",
  });
}

/**
 * Capture a custom event. Safe to call before init / when init was skipped
 * — the underlying posthog-js stores `__loaded = false` and just no-ops
 * captures.
 *
 * @param {string} event - Name in `object verb` past-tense form.
 * @param {Record<string, unknown>} [properties] - snake_case properties.
 */
export function track(event, properties = {}) {
  try {
    if (typeof posthog.capture === "function") {
      posthog.capture(event, properties);
    }
  } catch {
    // Fail closed — analytics must never crash the page.
  }
}
