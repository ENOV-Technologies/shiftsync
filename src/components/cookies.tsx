import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import {
  POLICY_LAST_UPDATED,
  cookieCategories,
} from "@/lib/cookies/cookiePolicyConfig";

const Cookies = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 sm:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6 hover:bg-white/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <Card className="shadow-2xl border-0">
            <CardHeader className="space-y-2 p-6 sm:p-8">
              <div className="mb-6">
                <div className="inline-block px-4 py-2 bg-autisync-black text-autisync-gold rounded-full text-sm font-medium mb-6">
                  Last Updated: {POLICY_LAST_UPDATED}
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  Cookie Policy
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  This Cookie Policy explains how <strong>ShiftSync</strong>{" "}
                  uses cookies and similar technologies. We believe in
                  transparency and minimal data collection.
                </p>
              </div>
            </CardHeader>

            <CardContent className="p-6 sm:p-8 space-y-10 text-slate-700">
              {/* Summary */}
              <section className="bg-emerald-50 border border-emerald-300 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-slate-900 mb-2">
                  The Short Version
                </h2>
                <p className="leading-relaxed">
                  <strong>ShiftSync uses minimal cookies.</strong> We only use
                  essential cookies required for authentication, security, and
                  basic preferences. We do <strong>not</strong> use by default
                  advertising, analytics, or tracking cookies.
                </p>
              </section>

              {/* Section 1 */}
              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  1. What Are Cookies?
                </h2>
                <p className="leading-relaxed">
                  Cookies are small text files stored on your device when you
                  visit a website. They help websites remember information such
                  as login state, preferences, and security settings.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  2. Cookies We Use
                </h2>
                <p className="leading-relaxed mb-4">
                  ShiftSync uses only <strong>essential cookies</strong> that
                  are strictly necessary for the Service to function.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-slate-200 rounded-lg">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left p-3">Cookie Name</th>
                        <th className="text-left p-3">Purpose</th>
                        <th className="text-left p-3">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-3 font-mono">auth_session</td>
                        <td className="p-3">
                          Maintains your logged-in state after Google OAuth
                        </td>
                        <td className="p-3">30 days</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-3 font-mono">csrf_token</td>
                        <td className="p-3">
                          Prevents cross-site request forgery attacks
                        </td>
                        <td className="p-3">Session</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-3 font-mono">user_prefs</td>
                        <td className="p-3">
                          Stores timezone and calendar preferences
                        </td>
                        <td className="p-3">1 year</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-3 font-mono">cookie_consent</td>
                        <td className="p-3">
                          Records acknowledgement of this policy
                        </td>
                        <td className="p-3">1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  3. Cookies We Do NOT Use
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Advertising or marketing cookies</li>
                  <li>Analytics or usage tracking cookies</li>
                  <li>Social media tracking cookies</li>
                  <li>Third-party behavioral tracking</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  4. Third-Party Cookies
                </h2>
                <p className="leading-relaxed">
                  When you authenticate using Google OAuth, Google may set
                  cookies as part of its authentication process. These cookies
                  are controlled by Google and governed by Google’s own privacy
                  and cookie policies.
                </p>
                <p className="mt-2">
                  Learn more:{" "}
                  <a
                    href="https://policies.google.com/technologies/cookies"
                    className="text-autisync-gold hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google Cookie Policy
                  </a>
                </p>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  5. How to Manage Cookies
                </h2>
                <p className="leading-relaxed">
                  You can control cookies through your browser settings.
                  Disabling essential cookies will prevent ShiftSync from
                  functioning correctly.
                </p>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  6. Updates to This Policy
                </h2>
                <p className="leading-relaxed">
                  We may update this Cookie Policy from time to time. Changes
                  will be reflected by updating the “Last updated” date on this
                  page.
                </p>
              </section>

              {/* Contact */}
              <section className="bg-autisync-gold/10 border border-autisync-gold/40 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-slate-900 mb-2">
                  Questions?
                </h2>
                <p>
                  If you have any questions about this Cookie Policy, contact us
                  at{" "}
                  <a
                    href="mailto:support@autisync.com"
                    className="text-autisync-gold font-medium hover:underline"
                  >
                    support@autisync.com
                  </a>
                  .
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Cookies;
