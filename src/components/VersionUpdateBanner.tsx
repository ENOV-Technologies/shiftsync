import { useState, useEffect } from "react";
import { X, Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const VERSION_KEY = "version-banner-dismissed";
const CURRENT_VERSION = "1.0.0"; // Update this when you release new versions

interface VersionUpdateBannerProps {
  version?: string;
  message?: string;
}

export function VersionUpdateBanner({
  version = CURRENT_VERSION,
  message = "Welcome to ShiftSync! This app helps you automatically sync your work schedules from Excel files to Google Calendar. ",
}: VersionUpdateBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissedVersion = localStorage.getItem(VERSION_KEY);
    // Show banner if not dismissed or if version changed
    if (dismissedVersion !== version) {
      setIsVisible(true);
    }
  }, [version]);

  const handleDismiss = () => {
    localStorage.setItem(VERSION_KEY, version);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Alert className="mx-auto max-w-4xl bg-gradient-to-r from-autisync-goldsoft to-autisync-gold/40 border-autisync-gold shadow-lg">
        <Info className="h-5 w-5 text-blue-600" />
        <AlertDescription className="flex items-start justify-between gap-4">
          <div className="flex-1 text-sm text-gray-700">
            <span className="font-semibold text-autisync-gold">
              Version {version}
            </span>{" "}
            — {message}
            <span className="text-red-700">
              Currently limited to Randstad & Manpower Excel format
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDismiss}
            className="h-6 w-6 p-0 hover:bg-blue-100 rounded-full flex-shrink-0"
          >
            <X className="h-4 w-4 text-gray-500" />
            <span className="sr-only">Dismiss</span>
          </Button>
        </AlertDescription>
      </Alert>
    </div>
  );
}
