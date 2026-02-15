import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ConsentProvider } from "@/lib/cookies/ConsentContext";

const basename = import.meta.env.BASE_URL;
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

/**
 * Wrapper that provides GoogleOAuthProvider only when clientId is available.
 * Public pages (privacy, terms, etc.) render even without the client ID.
 */
function AppShell({ children }: { children: React.ReactNode }) {
  if (clientId) {
    return (
      <GoogleOAuthProvider clientId={clientId}>{children}</GoogleOAuthProvider>
    );
  }
  // Render without OAuth provider — public routes still work
  return <>{children}</>;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppShell>
      <BrowserRouter basename={basename}>
        <ConsentProvider>
          <App />
        </ConsentProvider>
      </BrowserRouter>
    </AppShell>
  </React.StrictMode>,
);
