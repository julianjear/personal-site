import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';
import { initAnalytics } from './analytics';

// Initialise PostHog before the React tree mounts so the first $pageview
// (auto-captured) lands. No-ops in development unless
// REACT_APP_POSTHOG_DEV_OPT_IN=true is set. See src/analytics.js.
initAnalytics();

// See https://reactjs.org/docs/strict-mode.html
const StrictApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootElement = document.getElementById('root');

// hydrate is required by react-snap.
if (rootElement.hasChildNodes()) {
  hydrate(<StrictApp />, rootElement);
} else {
  render(<StrictApp />, rootElement);
}
