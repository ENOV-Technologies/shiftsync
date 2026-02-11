import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Shield, Lock, Eye } from 'lucide-react';
import { useState } from 'react';

interface AuthCardProps {
  onSignIn: (gdprConsent: boolean) => void;
  loading?: boolean;
}

export function AuthCard({ onSignIn, loading }: AuthCardProps) {
  const [gdprConsent, setGdprConsent] = useState(false);

  const handleSignIn = () => {
    if (gdprConsent) {
      onSignIn(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <Card className="w-full max-w-md shadow-2xl border-0">
        <CardHeader className="text-center space-y-2 pb-6">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-2 shadow-lg">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight">Excel Shift Sync</CardTitle>
          <CardDescription className="text-base">
            Securely sync your work schedule to Google Calendar
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* OAuth Scopes Disclosure */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <div className="flex items-start gap-3 mb-3">
              <Eye className="w-5 h-5 text-slate-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm text-slate-900 mb-1">
                  Access Permissions
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  This application will request permission to:
                </p>
              </div>
            </div>
            <ul className="space-y-2 ml-8">
              <li className="text-xs text-slate-700 flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span>View and manage your Google Calendar events</span>
              </li>
              <li className="text-xs text-slate-700 flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span>Access your basic profile information</span>
              </li>
            </ul>
          </div>

          {/* GDPR Consent */}
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
            <div className="flex items-start gap-3 mb-3">
              <Lock className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm text-blue-900 mb-1">
                  GDPR Compliance & Privacy
                </h4>
                <p className="text-xs text-blue-800 leading-relaxed">
                  Your data privacy is our priority. We comply with EU data protection regulations.
                </p>
              </div>
            </div>
            <div className="ml-8 space-y-2 text-xs text-blue-800">
              <p>✓ Your data is processed securely</p>
              <p>✓ No data is stored on external servers</p>
              <p>✓ You can revoke access at any time</p>
            </div>
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start space-x-3 pt-2">
            <Checkbox
              id="gdpr-consent"
              checked={gdprConsent}
              onCheckedChange={(checked) => setGdprConsent(checked === true)}
              className="mt-1"
            />
            <div className="space-y-1 flex-1">
              <Label
                htmlFor="gdpr-consent"
                className="text-sm font-medium leading-relaxed cursor-pointer"
              >
                I consent to the processing of my data
              </Label>
              <p className="text-xs text-muted-foreground leading-relaxed">
                By checking this box, you agree to our data processing practices and acknowledge
                that you understand how your data will be used.
              </p>
            </div>
          </div>

          {/* Sign In Button */}
          <Button
            onClick={handleSignIn}
            disabled={!gdprConsent || loading}
            className="w-full h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
            size="lg"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Connecting...
              </span>
            ) : (
              'Sign in with Google'
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground px-4">
            Your authentication is handled securely by Google. We never see your password.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
