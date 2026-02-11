import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

const basename = import.meta.env.BASE_URL;
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function MissingClientIdError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Configuration Error</h1>
        <p className="text-slate-600 mb-4">
          Missing Google OAuth Client ID. Please set the <code className="bg-slate-100 px-2 py-1 rounded text-sm">VITE_GOOGLE_CLIENT_ID</code> environment variable.
        </p>
        <p className="text-sm text-slate-500">
          See README.md for setup instructions.
        </p>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {!clientId ? (
      <MissingClientIdError />
    ) : (
      <GoogleOAuthProvider clientId={clientId}>
        <BrowserRouter basename={basename}>
          <App />
        </BrowserRouter>
      </GoogleOAuthProvider>
    )}
  </React.StrictMode>,
);
