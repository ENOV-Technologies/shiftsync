import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useConsent } from "@/lib/cookies/ConsentContext";
import {
  cookieCategories,
  POLICY_ROUTE,
  type CookieCategoryKey,
} from "@/lib/cookies/cookiePolicyConfig";

const CookiePreferencesDialog: React.FC = () => {
  const { consent, showPreferences, setShowPreferences, savePreferences } = useConsent();

  const [draft, setDraft] = useState<Record<CookieCategoryKey, boolean>>({
    necessary: true,
    analytics: false,
    functional: false,
    marketing: false,
  });

  // Sync draft with current consent when dialog opens
  useEffect(() => {
    if (showPreferences) {
      if (consent) {
        setDraft({ ...consent.categories, necessary: true });
      } else {
        setDraft({
          necessary: true,
          analytics: false,
          functional: false,
          marketing: false,
        });
      }
    }
  }, [showPreferences, consent]);

  const handleToggle = (key: CookieCategoryKey, checked: boolean) => {
    setDraft((prev) => ({ ...prev, [key]: checked }));
  };

  const handleSave = () => {
    savePreferences(draft);
  };

  return (
    <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-lg">Cookie Preferences</DialogTitle>
          <DialogDescription className="text-sm text-slate-500">
            Choose which cookies you allow. Necessary cookies cannot be disabled.{" "}
            <Link
              to={POLICY_ROUTE}
              className="text-autisync-gold font-medium hover:underline"
              onClick={() => setShowPreferences(false)}
            >
              Read full Cookie Policy
            </Link>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {cookieCategories.map((cat) => (
            <div
              key={cat.key}
              className="flex items-start justify-between gap-4 rounded-xl border border-slate-200 p-4"
            >
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <Label
                    htmlFor={`cookie-${cat.key}`}
                    className="text-sm font-semibold text-slate-900"
                  >
                    {cat.title}
                  </Label>
                  {cat.required && (
                    <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                      Always on
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {cat.descriptionShort}
                </p>
              </div>
              <Switch
                id={`cookie-${cat.key}`}
                checked={draft[cat.key]}
                onCheckedChange={(v) => handleToggle(cat.key, v)}
                disabled={cat.required}
                aria-label={`${cat.title} cookies`}
              />
            </div>
          ))}
        </div>

        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" onClick={() => setShowPreferences(false)}>
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className="bg-autisync-black hover:bg-autisync-black/90 text-autisync-gold"
          >
            Save preferences
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CookiePreferencesDialog;
