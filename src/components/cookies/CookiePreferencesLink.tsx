import React from "react";
import { Cookie } from "lucide-react";
import { useConsent } from "@/lib/cookies/ConsentContext";

const CookiePreferencesLink: React.FC = () => {
  const { setShowPreferences } = useConsent();

  return (
    <button
      type="button"
      onClick={() => setShowPreferences(true)}
      className="inline-flex items-center gap-1.5 text-slate-600 hover:text-autisync-gold transition-colors text-sm"
    >
      <Cookie className="h-3.5 w-3.5" />
      Preferencias de Cookie
    </button>
  );
};

export default CookiePreferencesLink;
