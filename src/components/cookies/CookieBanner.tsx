import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { useConsent } from "@/lib/cookies/ConsentContext";
import { POLICY_ROUTE } from "@/lib/cookies/cookiePolicyConfig";

const CookieBanner: React.FC = () => {
  const { showBanner, acceptAll, rejectNonEssential, setShowPreferences } = useConsent();

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[100] p-4 sm:p-6">
      <div className="mx-auto max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-2xl p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100">
            <Shield className="h-5 w-5 text-slate-600" />
          </div>

          <div className="flex-1 space-y-3">
            <h3 className="text-base font-semibold text-slate-900">
              We value your privacy
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              ShiftSync uses essential cookies for authentication and security.
              We also use anonymous analytics (Vercel Analytics) to improve the
              app — only if you agree. No advertising or tracking cookies are
              used.{" "}
              <Link
                to={POLICY_ROUTE}
                className="text-autisync-gold font-medium hover:underline"
              >
                Read our Cookie Policy
              </Link>
              .
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <Button onClick={acceptAll} size="sm" className="bg-autisync-black hover:bg-autisync-black/90 text-autisync-gold">
                Accept all
              </Button>
              <Button onClick={rejectNonEssential} variant="outline" size="sm">
                Reject non-essential
              </Button>
              <Button
                onClick={() => setShowPreferences(true)}
                variant="ghost"
                size="sm"
                className="text-slate-500 hover:text-slate-900"
              >
                Manage preferences
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
