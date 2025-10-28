import React from 'react';
import { createRoot } from 'react-dom/client';  // Vite używa createRoot
import App from './App.jsx';
import './App.css';
import * as Sentry from "@sentry/react";

// Konfiguracja Sentry
Sentry.init({
  dsn: "https://39cd8b4ef3f2e8aa1832ebf7fca25664@o4510265954205696.ingest.de.sentry.io/4510265988350032",
  environment: "production",
  tracesSampleRate: 1.0,
  sendDefaultPii: true
});

// Tworzymy root i renderujemy aplikację
const container = document.getElementById('root');  // upewnij się, że w index.html masz <div id="root"></div>
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


