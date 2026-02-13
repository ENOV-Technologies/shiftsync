export const POLICY_ROUTE = "/cookies";
export const POLICY_LAST_UPDATED = "February 11, 2026";
export const CONSENT_VERSION = "1.0";

export type CookieCategoryKey = "necessary" | "analytics" | "functional" | "marketing";

export interface CookieCategoryConfig {
  key: CookieCategoryKey;
  title: string;
  required: boolean;
  descriptionShort: string;
  descriptionLong?: string;
}

export const cookieCategories: CookieCategoryConfig[] = [
  {
    key: "necessary",
    title: "Necessary",
    required: true,
    descriptionShort:
      "Essential cookies for authentication, security, and basic functionality. These cannot be disabled.",
    descriptionLong:
      "Includes auth_session (login state), csrf_token (security), user_prefs (timezone/calendar preferences), and cookie_consent (policy acknowledgement).",
  },
  {
    key: "analytics",
    title: "Analytics",
    required: false,
    descriptionShort:
      "Anonymous usage analytics to help us improve ShiftSync. Powered by Vercel Analytics.",
    descriptionLong:
      "We use Vercel Analytics to collect anonymous, aggregated usage data. No personal data is tracked or shared with advertisers.",
  },
  {
    key: "functional",
    title: "Functional",
    required: false,
    descriptionShort:
      "Enhanced features and personalisation. Currently not used by ShiftSync.",
    descriptionLong:
      "Reserved for future features that may enhance your experience, such as remembering UI preferences beyond the essentials.",
  },
  {
    key: "marketing",
    title: "Marketing",
    required: false,
    descriptionShort:
      "Advertising and marketing cookies. ShiftSync does not use marketing cookies.",
    descriptionLong:
      "ShiftSync does not use any advertising, marketing, or third-party tracking cookies.",
  },
];
