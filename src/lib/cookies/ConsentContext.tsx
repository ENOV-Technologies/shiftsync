import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import type { CookieCategoryKey } from "@/lib/cookies/cookiePolicyConfig";
import {
  getConsent,
  setConsent as persistConsent,
  acceptAll as doAcceptAll,
  rejectNonEssential as doReject,
  resetConsent as doReset,
  type CookieConsent,
} from "@/lib/cookies/consent";

interface ConsentContextValue {
  consent: CookieConsent | null;
  hasConsentBeenGiven: boolean;
  showBanner: boolean;
  setShowBanner: (v: boolean) => void;
  showPreferences: boolean;
  setShowPreferences: (v: boolean) => void;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (categories: Record<CookieCategoryKey, boolean>) => void;
  resetConsent: () => void;
  hasCategory: (key: CookieCategoryKey) => boolean;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsentState] = useState<CookieConsent | null>(() => getConsent());
  const [showBanner, setShowBanner] = useState(() => getConsent() === null);
  const [showPreferences, setShowPreferences] = useState(false);

  const hasConsentBeenGiven = consent !== null;

  const acceptAll = useCallback(() => {
    const c = doAcceptAll();
    setConsentState(c);
    setShowBanner(false);
    setShowPreferences(false);
  }, []);

  const rejectNonEssential = useCallback(() => {
    const c = doReject();
    setConsentState(c);
    setShowBanner(false);
    setShowPreferences(false);
  }, []);

  const savePreferences = useCallback((categories: Record<CookieCategoryKey, boolean>) => {
    const c = persistConsent(categories);
    setConsentState(c);
    setShowBanner(false);
    setShowPreferences(false);
  }, []);

  const resetConsent = useCallback(() => {
    doReset();
    setConsentState(null);
    setShowBanner(true);
  }, []);

  const hasCategory = useCallback(
    (key: CookieCategoryKey) => {
      if (!consent) return key === "necessary";
      return consent.categories[key] ?? false;
    },
    [consent]
  );

  return (
    <ConsentContext.Provider
      value={{
        consent,
        hasConsentBeenGiven,
        showBanner,
        setShowBanner,
        showPreferences,
        setShowPreferences,
        acceptAll,
        rejectNonEssential,
        savePreferences,
        resetConsent,
        hasCategory,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within ConsentProvider");
  return ctx;
}
