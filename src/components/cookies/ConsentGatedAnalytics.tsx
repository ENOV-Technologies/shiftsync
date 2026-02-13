import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { useConsent } from "@/lib/cookies/ConsentContext";

/**
 * Only renders Vercel Analytics when the user has given analytics consent.
 */
const ConsentGatedAnalytics: React.FC = () => {
  const { hasCategory } = useConsent();

  if (!hasCategory("analytics")) return null;

  return <Analytics />;
};

export default ConsentGatedAnalytics;
