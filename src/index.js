import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css'; 
import * as Sentry from "@sentry/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

Sentry.init({
  dsn: "https://39cd8b4ef3f2e8aa1832ebf7fca25664@o4510265954205696.ingest.de.sentry.io/4510265988350032",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});


