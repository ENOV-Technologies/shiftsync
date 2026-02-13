import {
  type CookieCategoryKey,
  cookieCategories,
  CONSENT_VERSION,
} from "./cookiePolicyConfig";

const STORAGE_KEY = "cookie_consent";

export interface CookieConsent {
  version: string;
  updatedAt: string;
  categories: Record<CookieCategoryKey, boolean>;
}

function defaultCategories(): Record<CookieCategoryKey, boolean> {
  return {
    necessary: true,
    analytics: false,
    functional: false,
    marketing: false,
  };
}

export function getConsent(): CookieConsent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: CookieConsent = JSON.parse(raw);
    // If version mismatch, treat as no consent (policy changed)
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function setConsent(categories: Record<CookieCategoryKey, boolean>): CookieConsent {
  // Ensure necessary is always true
  const consent: CookieConsent = {
    version: CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
    categories: { ...categories, necessary: true },
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  return consent;
}

export function hasConsent(category: CookieCategoryKey): boolean {
  const consent = getConsent();
  if (!consent) {
    // Before consent, only necessary is allowed
    return category === "necessary";
  }
  return consent.categories[category] ?? false;
}

export function resetConsent(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export function acceptAll(): CookieConsent {
  const cats = {} as Record<CookieCategoryKey, boolean>;
  cookieCategories.forEach((c) => {
    cats[c.key] = true;
  });
  return setConsent(cats);
}

export function rejectNonEssential(): CookieConsent {
  return setConsent(defaultCategories());
}
