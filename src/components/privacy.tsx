import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const Privacy = () => {
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
            <CardContent className="p-6 sm:p-8 space-y-6 text-autisync-black/60">
              {/* Main */}

              <main className="max-w-4xl mx-auto px-6 py-16">
                {/* Hero */}
                <section className="mb-16">
                  <div className="inline-block px-4 py-2 bg-autisync-gold/10 text-autisync-gold rounded-full text-sm font-medium mb-6">
                    Last Updated: June 23, 2025
                  </div>

                  <h1 className="text-5xl md:text-6xl font-bold text-autisync-black mb-6 leading-tight">
                    Privacy Policy
                  </h1>

                  <p className="text-xl text-slate-600 leading-relaxed">
                    Your privacy matters to us. This policy explains how
                    ShiftSync collects, uses, and protects your personal
                    information in compliance with GDPR and international data
                    protection standards.
                  </p>
                </section>
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-24 mb-6">
                  <div className="accent-border pl-6">
                    <h2 className="text-3xl font-bold text-autisync-black mb-4">
                      1. Introduction
                    </h2>

                    <div className="prose prose-slate max-w-none text-autisync-black/60">
                      <p>
                        Welcome to ShiftSync, a service provided by Autisync.
                        ShiftSync helps synchronize Excel work schedules to
                        Google Calendar.
                      </p>
                      <p>
                        By using ShiftSync, you agree to the collection and use
                        of information in accordance with this policy.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="data-controller" className="scroll-mt-24 mb-6">
                  <div className="accent-border pl-6">
                    <h2 className="text-3xl font-bold text-autisync-black mb-4">
                      2. Data Controller
                    </h2>
                    <div className="bg-slate-50 border border-autisync-gold/30 rounded-xl p-6 space-y-2">
                      <p className="text-autisync-black font-semibold">
                        Autisync
                      </p>
                      <p className="text-autisync-black/60">Luanda, Angola</p>
                      <p className="text-autisync-black/60">
                        Email:{" "}
                        <a
                          href="mailto:support@autisync.com"
                          className="text-autisync-gold/80 hover:text-autisync-gold underline"
                        >
                          support@autisync.com
                        </a>
                      </p>
                    </div>
                    <p className="mt-4 text-autisync-black/60 leading-relaxed">
                      Autisync is the data controller responsible for your
                      personal information. If you have any questions or
                      concerns about how we handle your data, please contact us
                      using the information above.
                    </p>
                  </div>
                </section>

                <section id="data-collection" className="scroll-mt-24 mb-6">
                  <div className="accent-border pl-6">
                    <h2 className="text-3xl font-bold text-autisync-black mb-4">
                      3. Data We Collect
                    </h2>
                    <div className="prose prose-slate max-w-none text-autisync-black/60 leading-relaxed space-y-4">
                      <p>
                        We collect and process only the minimum data necessary
                        to provide our service:
                      </p>

                      <div className="bg-white border border-autisync-gold/30 rounded-xl p-6 my-6">
                        <h3 className="text-xl font-bold text-autisync-black mb-4">
                          3.1 Authentication Data
                        </h3>
                        <ul className="space-y-2 list-none pl-0">
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Google account email address (used for
                              authentication)
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Google profile information (name, profile picture
                              if available)
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              OAuth access and refresh tokens (encrypted)
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white border border-autisync-gold/30 rounded-xl p-6 my-6">
                        <h3 className="text-xl font-bold text-autisync-black mb-4">
                          3.2 Schedule Data
                        </h3>
                        <ul className="space-y-2 list-none pl-0">
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Excel files you upload (processed in memory, not
                              permanently stored)
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Shift information extracted from your schedules
                              (dates, times, shift types)
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>Last synchronization timestamp</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white border border-autisync-gold/30 rounded-xl p-6 my-6">
                        <h3 className="text-xl font-bold text-autisync-black mb-4">
                          3.3 Preference Data
                        </h3>
                        <ul className="space-y-2 list-none pl-0">
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>Selected Google Calendar ID</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Timezone preference (default: Europe/Lisbon)
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Shift type handling preferences (how to treat OFF,
                              VAC, LOA)
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white border border-autisync-gold/30 rounded-xl p-6 my-6">
                        <h3 className="text-xl font-bold text-autisync-black mb-4">
                          3.4 Technical Data
                        </h3>
                        <ul className="space-y-2 list-none pl-0">
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              IP address (for security and fraud prevention)
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>Browser type and version</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Device information (operating system, screen
                              resolution)
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Error logs (anonymized, containing no personal
                              information)
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="how-we-use" className="scroll-mt-24 mb-6">
                  <div className="accent-border pl-6">
                    <h2 className="text-3xl font-bold text-autisync-black mb-4">
                      4. How We Use Your Data
                    </h2>
                    <div className="prose prose-slate max-w-none text-autisync-black/60 leading-relaxed space-y-4">
                      <p>
                        We use your personal information exclusively for the
                        following purposes:
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 my-6">
                        <div className="bg-gradient-to-br from-autisync-gold/10 to-autisync-goldsoft border border-autisync-gold/30 rounded-xl p-6">
                          <div className="w-12 h-12 bg-autisync-gold rounded-lg flex items-center justify-center mb-4">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-autisync-black mb-2">
                            Service Provision
                          </h3>
                          <p className="text-sm text-autisync-black/60">
                            Authenticate you via Google OAuth and sync your work
                            shifts to Google Calendar
                          </p>
                        </div>

                        <div className="bg-gradient-to-br from-autisync-gold/10 to-autisync-goldsoft border border-autisync-gold/30 rounded-xl p-6">
                          <div className="w-12 h-12 bg-autisync-gold rounded-lg flex items-center justify-center mb-4">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                              ></path>
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-autisync-black mb-2">
                            Preference Management
                          </h3>
                          <p className="text-sm text-autisync-black/60">
                            Remember your calendar selection, timezone, and sync
                            preferences
                          </p>
                        </div>

                        <div className="bg-gradient-to-br from-autisync-gold/10 to-autisync-goldsoft border border-autisync-gold/30 rounded-xl p-6">
                          <div className="w-12 h-12 bg-autisync-gold rounded-lg flex items-center justify-center mb-4">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                              ></path>
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-autisync-black mb-2">
                            Security & Fraud Prevention
                          </h3>
                          <p className="text-sm text-autisync-black/60">
                            Detect and prevent unauthorized access and potential
                            security threats
                          </p>
                        </div>

                        <div className="bg-gradient-to-br from-autisync-gold/10 to-autisync-goldsoft border border-autisync-gold/30 rounded-xl p-6">
                          <div className="w-12 h-12 bg-autisync-gold rounded-lg flex items-center justify-center mb-4">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                              ></path>
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              ></path>
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-autisync-black mb-2">
                            Service Improvement
                          </h3>
                          <p className="text-sm text-autisync-black/60">
                            Improve our service through anonymized error logging
                            and performance monitoring
                          </p>
                        </div>
                      </div>

                      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-6">
                        <div className="flex items-start gap-3">
                          <svg
                            className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            ></path>
                          </svg>
                          <div>
                            <p className="font-semibold text-amber-900 mb-1">
                              Important Note
                            </p>
                            <p className="text-sm text-amber-800">
                              We do NOT use your data for marketing,
                              advertising, or any purpose unrelated to providing
                              the ShiftSync service. We do NOT sell or rent your
                              personal information to third parties.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="google-api-compliance" className="scroll-mt-24 mb-6">
                  <div className="accent-border pl-6">
                    <h2 className="text-3xl font-bold text-autisync-black mb-4">
                      5. Google API Services User Data Policy Compliance
                    </h2>
                    <div className="prose prose-slate max-w-none text-autisync-black/60 leading-relaxed space-y-4">
                      <p>
                        ShiftSync's use and transfer to any other app of
                        information received from Google APIs will adhere to the{" "}
                        <a
                          href="https://developers.google.com/terms/api-services-user-data-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-autisync-gold/80 hover:text-autisync-gold underline font-medium"
                        >
                          Google API Services User Data Policy
                        </a>
                        , including the Limited Use requirements.
                      </p>

                      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl my-6">
                        <div className="flex items-start gap-3">
                          <svg
                            className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                          <div>
                            <p className="font-semibold text-blue-900 mb-2">
                              How ShiftSync Uses Google Data
                            </p>
                            <p className="text-sm text-blue-800">
                              ShiftSync uses Google OAuth and Google Calendar API
                              to create calendar events on behalf of the user. We
                              do not store Google Calendar data on our servers.
                              Access tokens are stored locally in the user's
                              browser and are not shared with third parties.
                              ShiftSync does not use Google user data for
                              advertising.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 my-6">
                        <div className="bg-white border border-autisync-gold/30 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-autisync-black mb-3">
                            Limited Use Disclosure
                          </h3>
                          <ul className="space-y-2 list-none pl-0">
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                We only request the minimum OAuth scopes necessary
                                to provide our service (calendar events
                                management)
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                We do not use Google user data to serve
                                advertisements
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                We do not sell or transfer Google user data to
                                third parties
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                We do not use Google user data for purposes
                                unrelated to providing or improving ShiftSync's
                                calendar synchronization features
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Users can revoke ShiftSync's access at any time
                                via{" "}
                                <a
                                  href="https://myaccount.google.com/permissions"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-autisync-gold/80 hover:text-autisync-gold underline"
                                >
                                  Google Account Permissions
                                </a>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-white border border-autisync-gold/30 rounded-xl p-6 my-6">
                        <h3 className="text-lg font-bold text-autisync-black mb-3">
                          Google OAuth Scopes Used
                        </h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center pb-3 border-b border-autisync-gold/30">
                            <span className="text-autisync-black font-mono text-sm">
                              openid
                            </span>
                            <span className="text-autisync-black/60 text-sm">
                              User authentication
                            </span>
                          </div>
                          <div className="flex justify-between items-center pb-3 border-b border-autisync-gold/30">
                            <span className="text-autisync-black font-mono text-sm">
                              email
                            </span>
                            <span className="text-autisync-black/60 text-sm">
                              Display your email
                            </span>
                          </div>
                          <div className="flex justify-between items-center pb-3 border-b border-autisync-gold/30">
                            <span className="text-autisync-black font-mono text-sm">
                              profile
                            </span>
                            <span className="text-autisync-black/60 text-sm">
                              Display your name and photo
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-autisync-black font-mono text-sm">
                              calendar.events
                            </span>
                            <span className="text-autisync-black/60 text-sm">
                              Create and manage shift events
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="legal-basis" className="scroll-mt-24 mb-6">
                  <div className="accent-border pl-6">
                    <h2 className="text-3xl font-bold text-autisync-black mb-4">
                      6. Legal Basis for Processing (GDPR)
                    </h2>
                    <div className="prose prose-slate max-w-none text-autisync-black/60 leading-relaxed space-y-4">
                      <p>
                        Under GDPR, we process your personal data based on the
                        following legal grounds:
                      </p>

                      <div className="space-y-4 my-6">
                        <div className="bg-white border-l-4 border-red-500 rounded-r-xl p-6">
                          <h3 className="text-lg font-bold text-autisync-black mb-2">
                            Consent (Article 6(1)(a) GDPR)
                          </h3>
                          <p className="text-autisync-black/60">
                            You provide explicit consent when you authorize
                            ShiftSync to access your Google Calendar through
                            OAuth 2.0 authentication.
                          </p>
                        </div>

                        <div className="bg-white border-l-4 border-purple-500 rounded-r-xl p-6">
                          <h3 className="text-lg font-bold text-autisync-black mb-2">
                            Contract Performance (Article 6(1)(b) GDPR)
                          </h3>
                          <p className="text-autisync-black/60">
                            Processing is necessary to provide the calendar
                            synchronization service you have requested.
                          </p>
                        </div>

                        <div className="bg-white border-l-4 border-indigo-500 rounded-r-xl p-6">
                          <h3 className="text-lg font-bold text-autisync-black mb-2">
                            Legitimate Interests (Article 6(1)(f) GDPR)
                          </h3>
                          <p className="text-autisync-black/60">
                            We have a legitimate interest in preventing fraud,
                            ensuring security, and improving our service
                            quality.
                          </p>
                        </div>
                      </div>

                      <p className="font-medium text-autisync-black">
                        You have the right to withdraw your consent at any time
                        by disconnecting your Google account from ShiftSync or
                        deleting your account entirely.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="data-sharing" className="scroll-mt-24 mb-6">
                  <div className="accent-border pl-6">
                    <h2 className="text-3xl font-bold text-autisync-black mb-4">
                      7. Data Sharing and Third Parties
                    </h2>
                    <div className="prose prose-slate max-w-none text-autisync-black/60 leading-relaxed space-y-4">
                      <p>
                        We are committed to data minimization and privacy.
                        Here's how we handle data sharing:
                      </p>

                      <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl my-6">
                        <div className="flex items-start gap-3">
                          <svg
                            className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            ></path>
                          </svg>
                          <div>
                            <p className="font-semibold text-emerald-900 mb-1">
                              Zero Third-Party Data Sharing
                            </p>
                            <p className="text-sm text-emerald-800">
                              We do NOT share, sell, rent, or trade your
                              personal information with any third parties for
                              marketing or commercial purposes.
                            </p>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-autisync-black mt-6 mb-3">
                        Limited Service Providers
                      </h3>
                      <p>
                        We only share data with essential service providers who
                        help us operate ShiftSync:
                      </p>

                      <div className="bg-white border border-autisync-gold/30 rounded-xl p-6 my-4">
                        <h4 className="font-bold text-autisync-black mb-3">
                          Google LLC
                        </h4>
                        <ul className="space-y-2 list-none pl-0">
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              <strong>Purpose:</strong> OAuth authentication and
                              Google Calendar API access
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              <strong>Data Shared:</strong> Google account
                              information, calendar events
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              <strong>Privacy Policy:</strong>{" "}
                              <a
                                href="https://policies.google.com/privacy"
                                className="text-autisync-gold/80 hover:text-autisync-gold underline"
                              >
                                Google Privacy Policy
                              </a>
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white border border-autisync-gold/30 rounded-xl p-6 my-4">
                        <h4 className="font-bold text-autisync-black mb-3">
                          Vercel Inc. (Hosting) & Cloudflare Inc. (CDN/DNS)
                        </h4>
                        <ul className="space-y-2 list-none pl-0">
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              <strong>Purpose:</strong> Secure hosting, content
                              delivery, and DNS management
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              <strong>Data Shared:</strong> HTTP request metadata
                              (IP address, user agent), encrypted authentication
                              tokens, user preferences
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              <strong>Location:</strong> Global edge network with
                              GDPR-compliant data processing agreements
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              <strong>Privacy Policies:</strong>{" "}
                              <a
                                href="https://vercel.com/legal/privacy-policy"
                                className="text-autisync-gold/80 hover:text-autisync-gold underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Vercel Privacy Policy
                              </a>
                              {" | "}
                              <a
                                href="https://www.cloudflare.com/privacypolicy/"
                                className="text-autisync-gold/80 hover:text-autisync-gold underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Cloudflare Privacy Policy
                              </a>
                            </span>
                          </li>
                        </ul>
                      </div>

                      <h3 className="text-xl font-bold text-autisync-black mt-6 mb-3">
                        Legal Obligations
                      </h3>
                      <p>
                        We may disclose your information only when required by
                        law, such as:
                      </p>
                      <ul className="space-y-2 list-none pl-0 mt-3">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                          <span>
                            In response to valid legal processes (court orders,
                            subpoenas)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                          <span>
                            To protect our legal rights or defend against legal
                            claims
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                          <span>
                            To prevent harm to individuals or property
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="data-retention" className="scroll-mt-24 mb-6">
                  <div className="accent-border pl-6">
                    <h2 className="text-3xl font-bold text-autisync-black mb-4">
                      8. Data Retention
                    </h2>
                    <div className="prose prose-slate max-w-none text-autisync-black/60 leading-relaxed space-y-4">
                      <p>
                        We retain your personal information only for as long as
                        necessary to provide our service:
                      </p>

                      <div className="grid md:grid-cols-3 gap-4 my-6">
                        <div className="bg-white border border-autisync-gold/30 rounded-xl p-6">
                          <div className="text-3xl font-bold text-autisync-black mb-2">
                            Active Account
                          </div>
                          <p className="text-sm text-autisync-black/60">
                            Data retained while your account is active and in
                            use
                          </p>
                        </div>

                        <div className="bg-white border border-autisync-gold/30 rounded-xl p-6">
                          <div className="text-3xl font-bold text-autisync-black mb-2">
                            90 Days
                          </div>
                          <p className="text-sm text-autisync-black/60">
                            Inactive accounts automatically deleted after 90
                            days of no activity
                          </p>
                        </div>

                        <div className="bg-white border border-autisync-gold/30 rounded-xl p-6">
                          <div className="text-3xl font-bold text-autisync-black mb-2">
                            Immediate
                          </div>
                          <p className="text-sm text-autisync-black/60">
                            Data deleted immediately upon account deletion
                            request
                          </p>
                        </div>
                      </div>

                      <div className="bg-white border border-autisync-gold/30 rounded-xl p-6 my-6">
                        <h3 className="text-lg font-bold text-autisync-black mb-3">
                          Retention Periods by Data Type:
                        </h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center pb-3 border-b border-autisync-gold/30">
                            <span className="text-autisync-black">
                              Authentication tokens
                            </span>
                            <span className="text-autisync-gold/80 font-semibold">
                              Until revoked or account deleted
                            </span>
                          </div>
                          <div className="flex justify-between items-center pb-3 border-b border-autisync-gold/30">
                            <span className="text-autisync-black">
                              User preferences
                            </span>
                            <span className="text-autisync-gold/80 font-semibold">
                              Until account deleted
                            </span>
                          </div>
                          <div className="flex justify-between items-center pb-3 border-b border-autisync-gold/30">
                            <span className="text-autisync-black">
                              Uploaded Excel files
                            </span>
                            <span className="text-autisync-gold/80 font-semibold">
                              Not stored (processed in memory only)
                            </span>
                          </div>
                          <div className="flex justify-between items-center pb-3 border-b border-autisync-gold/30">
                            <span className="text-autisync-black">
                              Error logs
                            </span>
                            <span className="text-autisync-gold/80 font-semibold">
                              30 days (anonymized)
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-autisync-black">
                              Sync history metadata
                            </span>
                            <span className="text-autisync-gold/80 font-semibold">
                              Until account deleted
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="font-medium text-autisync-black">
                        After deletion, some data may remain in backup systems
                        for up to 30 days before permanent deletion. Anonymized
                        analytics data may be retained indefinitely.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="your-rights" className="scroll-mt-24 mb-6">
                  <div className="accent-border pl-6">
                    <h2 className="text-3xl font-bold text-autisync-black mb-4">
                      9. Your Rights Under GDPR
                    </h2>
                    <div className="prose prose-slate max-w-none text-autisync-black/60 leading-relaxed space-y-4">
                      <p>
                        As a data subject under GDPR, you have the following
                        rights:
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 my-6">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                              <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                ></path>
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                ></path>
                              </svg>
                            </div>
                            <h3 className="text-lg font-bold text-autisync-black">
                              Right of Access
                            </h3>
                          </div>
                          <p className="text-sm text-autisync-black/60">
                            Request a copy of all personal data we hold about
                            you
                          </p>
                        </div>

                        <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                              <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                ></path>
                              </svg>
                            </div>
                            <h3 className="text-lg font-bold text-autisync-black">
                              Right to Rectification
                            </h3>
                          </div>
                          <p className="text-sm text-autisync-black/60">
                            Correct inaccurate or incomplete personal
                            information
                          </p>
                        </div>

                        <div className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-xl p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                              <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                ></path>
                              </svg>
                            </div>
                            <h3 className="text-lg font-bold text-autisync-black">
                              Right to Erasure
                            </h3>
                          </div>
                          <p className="text-sm text-autisync-black/60">
                            Request deletion of your personal data ("right to be
                            forgotten")
                          </p>
                        </div>

                        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                              <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                                ></path>
                              </svg>
                            </div>
                            <h3 className="text-lg font-bold text-autisync-black">
                              Right to Restrict Processing
                            </h3>
                          </div>
                          <p className="text-sm text-autisync-black/60">
                            Limit how we process your data in certain
                            circumstances
                          </p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-xl p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                              <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                                ></path>
                              </svg>
                            </div>
                            <h3 className="text-lg font-bold text-autisync-black">
                              Right to Data Portability
                            </h3>
                          </div>
                          <p className="text-sm text-autisync-black/60">
                            Receive your data in a structured, machine-readable
                            format
                          </p>
                        </div>

                        <div className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-xl p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-autisync-gold rounded-lg flex items-center justify-center">
                              <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                                ></path>
                              </svg>
                            </div>
                            <h3 className="text-lg font-bold text-autisync-black">
                              Right to Object
                            </h3>
                          </div>
                          <p className="text-sm text-autisync-black/60">
                            Object to processing based on legitimate interests
                          </p>
                        </div>
                      </div>

                      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-6">
                        <h3 className="text-lg font-bold text-autisync-black mb-3">
                          How to Exercise Your Rights
                        </h3>
                        <p className="text-autisync-black/60 mb-3">
                          To exercise any of these rights, please contact us at:
                        </p>
                        <div className="flex items-center gap-2 text-autisync-gold/80 font-semibold">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            ></path>
                          </svg>
                          <a
                            href="mailto:support@autisync.com"
                            className="hover:text-autisync-gold underline"
                          >
                            support@autisync.com
                          </a>
                        </div>
                        <p className="text-sm text-slate-600 mt-3">
                          We will respond to your request within 30 days as
                          required by GDPR.
                        </p>
                      </div>

                      <div className="bg-slate-100 border border-slate-300 rounded-xl p-6 my-6">
                        <h3 className="text-lg font-bold text-autisync-black mb-3">
                          Right to Lodge a Complaint
                        </h3>
                        <p className="text-autisync-black/60">
                          If you believe we have not handled your personal data
                          properly, you have the right to lodge a complaint with
                          your local data protection authority or with the
                          Angolan data protection supervisory authority.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="security" className="scroll-mt-24 mb-6">
                  <div className="accent-border pl-6">
                    <h2 className="text-3xl font-bold text-autisync-black mb-4">
                      10. Security Measures
                    </h2>
                    <div className="prose prose-slate max-w-none text-autisync-black/60 leading-relaxed space-y-4">
                      <p>
                        We implement industry-standard security measures to
                        protect your personal information:
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 my-6">
                        <div className="bg-white border border-autisync-gold/30 rounded-xl p-6 hover:shadow-lg transition-shadow">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-autisync-gold/60 to-autisync-black/60 rounded-lg flex items-center justify-center">
                              <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                ></path>
                              </svg>
                            </div>
                            <h3 className="text-lg font-bold text-autisync-black">
                              Encryption at Rest
                            </h3>
                          </div>
                          <p className="text-sm text-autisync-black/60">
                            All sensitive data, including OAuth tokens, is
                            encrypted using AES-256 encryption
                          </p>
                        </div>

                        <div className="bg-white border border-autisync-gold/30 rounded-xl p-6 hover:shadow-lg transition-shadow">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-autisync-gold/60 to-autisync-black/60 rounded-lg flex items-center justify-center">
                              <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                                ></path>
                              </svg>
                            </div>
                            <h3 className="text-lg font-bold text-autisync-black">
                              HTTPS Everywhere
                            </h3>
                          </div>
                          <p className="text-sm text-autisync-black/60">
                            All data transmitted between your browser and our
                            servers uses TLS 1.3 encryption
                          </p>
                        </div>

                        <div className="bg-white border border-autisync-gold/30 rounded-xl p-6 hover:shadow-lg transition-shadow">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-autisync-gold/60 to-autisync-black/60 rounded-lg flex items-center justify-center">
                              <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                ></path>
                              </svg>
                            </div>
                            <h3 className="text-lg font-bold text-autisync-black">
                              OAuth 2.0
                            </h3>
                          </div>
                          <p className="text-sm text-autisync-black/60">
                            Industry-standard authentication protocol, no
                            passwords stored on our servers
                          </p>
                        </div>

                        <div className="bg-white border border-autisync-gold/30 rounded-xl p-6 hover:shadow-lg transition-shadow">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-autisync-gold/60 to-autisync-black/60 rounded-lg flex items-center justify-center">
                              <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M13 10V3L4 14h7v7l9-11h-7z"
                                ></path>
                              </svg>
                            </div>
                            <h3 className="text-lg font-bold text-autisync-black">
                              Secure Infrastructure
                            </h3>
                          </div>
                          <p className="text-sm text-autisync-black/60">
                            Hosted on EU-compliant servers with regular security
                            audits and updates
                          </p>
                        </div>

                        <div className="bg-white border border-autisync-gold/30 rounded-xl p-6 hover:shadow-lg transition-shadow">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-autisync-gold/60 to-autisync-black/60 rounded-lg flex items-center justify-center">
                              <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                ></path>
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                ></path>
                              </svg>
                            </div>
                            <h3 className="text-lg font-bold text-autisync-black">
                              Access Controls
                            </h3>
                          </div>
                          <p className="text-sm text-autisync-black/60">
                            Strict internal access policies, logging, and
                            monitoring of all data access
                          </p>
                        </div>

                        <div className="bg-white border border-autisync-gold/30 rounded-xl p-6 hover:shadow-lg transition-shadow">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-autisync-gold/60 to-autisync-black/60 rounded-lg flex items-center justify-center">
                              <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                                ></path>
                              </svg>
                            </div>
                            <h3 className="text-lg font-bold text-autisync-black">
                              Regular Backups
                            </h3>
                          </div>
                          <p className="text-sm text-autisync-black/60">
                            Encrypted backups with secure deletion after 30 days
                          </p>
                        </div>
                      </div>

                      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-6">
                        <div className="flex items-start gap-3">
                          <svg
                            className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            ></path>
                          </svg>
                          <div>
                            <p className="font-semibold text-red-900 mb-1">
                              Data Breach Notification
                            </p>
                            <p className="text-sm text-red-800">
                              In the unlikely event of a data breach, we will
                              notify affected users within 72 hours and report
                              to the relevant supervisory authorities as
                              required by GDPR.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="international" className="scroll-mt-24 mb-6">
                  <div className="accent-border pl-6">
                    <h2 className="text-3xl font-bold text-autisync-black mb-4">
                      11. International Data Transfers
                    </h2>
                    <div className="prose prose-slate max-w-none text-autisync-black/60 leading-relaxed space-y-4">
                      <p>
                        Your personal data is primarily stored and processed
                        within the European Union to ensure GDPR compliance.
                      </p>

                      <div className="bg-white border border-autisync-gold/30 rounded-xl p-6 my-6">
                        <h3 className="text-lg font-bold text-autisync-black mb-3">
                          Google Services (USA)
                        </h3>
                        <p className="text-autisync-black/60 mb-3">
                          When you authenticate with Google OAuth and access
                          Google Calendar, your data is transmitted to Google
                          LLC (United States). This transfer is necessary to
                          provide the core functionality of ShiftSync.
                        </p>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                          <p className="text-sm text-blue-900">
                            <strong>Legal Basis:</strong> Google LLC complies
                            with the EU-U.S. Data Privacy Framework and has
                            implemented Standard Contractual Clauses (SCCs)
                            approved by the European Commission.
                          </p>
                        </div>
                      </div>

                      <div className="bg-white border border-autisync-gold/30 rounded-xl p-6 my-6">
                        <h3 className="text-lg font-bold text-autisync-black mb-3">
                          Safeguards for International Transfers
                        </h3>
                        <ul className="space-y-2 list-none pl-0">
                          <li className="flex items-start gap-3">
                            <svg
                              className="w-5 h-5 text-autisync-gold/80 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>
                            <span>
                              Standard Contractual Clauses with all third-party
                              processors
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg
                              className="w-5 h-5 text-autisync-gold/80 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>
                            <span>
                              End-to-end encryption for data in transit
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg
                              className="w-5 h-5 text-autisync-gold/80 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>
                            <span>
                              Regular compliance audits of third-party
                              processors
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg
                              className="w-5 h-5 text-autisync-gold/80 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>
                            <span>
                              Transparency about all data transfer locations
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="cookies" className="scroll-mt-24 mb-6">
                  <div className="accent-border pl-6">
                    <h2 className="text-3xl font-bold text-autisync-black mb-4">
                      12. Cookies and Tracking Technologies
                    </h2>
                    <div className="prose prose-slate max-w-none text-autisync-black/60 leading-relaxed space-y-4">
                      <p>
                        ShiftSync uses minimal cookies necessary for
                        functionality. For detailed information, please review
                        our{" "}
                        <a
                          href="/cookies"
                          className="text-autisync-gold/80 hover:text-autisync-gold underline font-medium"
                        >
                          Cookie Policy
                        </a>
                        .
                      </p>

                      <div className="bg-white border border-autisync-gold/30 rounded-xl overflow-hidden my-6">
                        <div className="bg-gradient-to-r from-autisync-gold/60 to-autisync-black/60 px-6 py-4">
                          <h3 className="text-lg font-bold text-white">
                            Cookie Summary
                          </h3>
                        </div>
                        <div className="p-6 space-y-4">
                          <div className="flex items-start gap-4 pb-4 border-b border-autisync-gold/30">
                            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg
                                className="w-8 h-8 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-autisync-black mb-1">
                                Essential Cookies
                              </h4>
                              <p className="text-sm text-autisync-black/60 mb-2">
                                Required for authentication and session
                                management. Cannot be disabled.
                              </p>
                              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                                Always Active
                              </span>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg
                                className="w-8 h-8 text-slate-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                                ></path>
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-autisync-black mb-1">
                                Analytics & Marketing Cookies
                              </h4>
                              <p className="text-sm text-autisync-black/60 mb-2">
                                We do NOT use analytics, advertising, or
                                tracking cookies.
                              </p>
                              <span className="inline-block px-3 py-1 bg-slate-100 text-autisync-black/80 text-xs rounded-full">
                                Not Used
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="contact" className="scroll-mt-24 mb-6">
                  <div className="accent-border pl-6">
                    <h2 className="text-3xl font-bold text-autisync-black mb-4">
                      13. Contact Information
                    </h2>
                    <div className="prose prose-slate max-w-none text-autisync-black/60 leading-relaxed space-y-4">
                      <p>
                        If you have any questions, concerns, or requests
                        regarding this Privacy Policy or our data practices,
                        please contact us:
                      </p>

                      <div className="bg-gradient-to-br from-autisync-gold/10 to-autisync-goldsoft border-1 border-autisync-gold/30 rounded-2xl p-8 my-6">
                        <div className="flex items-start gap-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-autisync-gold/60 to-autisync-black/60 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-8 h-8 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              ></path>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-autisync-black mb-4">
                              Autisync Data Protection Office
                            </h3>
                            <div className="space-y-3">
                              <div className="flex items-center gap-3">
                                <svg
                                  className="w-5 h-5 text-autisync-gold/80"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                  ></path>
                                </svg>
                                <a
                                  href="mailto:support@autisync.com"
                                  className="text-autisync-gold/80 hover:text-autisync-gold font-semibold underline"
                                >
                                  support@autisync.com
                                </a>
                              </div>
                              <div className="flex items-start gap-3">
                                <svg
                                  className="w-5 h-5 text-autisync-gold/80 mt-0.5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                  ></path>
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                  ></path>
                                </svg>
                                <div>
                                  <p className="text-autisync-black font-medium">
                                    Autisync
                                  </p>
                                  <p className="text-autisync-black/60">
                                    Luanda, Angola
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl my-6">
                        <h3 className="text-lg font-bold text-blue-900 mb-2">
                          Response Time
                        </h3>
                        <p className="text-sm text-blue-800">
                          We aim to respond to all privacy-related inquiries
                          within 5 business days and will fully address your
                          request within 30 days as required by GDPR.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mt-16 bg-slate-100 border border-slate-300 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-autisync-black mb-4">
                    Changes to This Privacy Policy
                  </h2>
                  <p className="text-autisync-black/60 leading-relaxed mb-4">
                    We may update this Privacy Policy from time to time to
                    reflect changes in our practices, legal requirements, or
                    service improvements. We will notify you of any material
                    changes by:
                  </p>
                  <ul className="space-y-2 list-none pl-0 mb-4">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Posting the updated policy on this page with a new "Last
                        Updated" date
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Sending an email notification to registered users for
                        significant changes
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                      <span>Displaying a prominent notice on our website</span>
                    </li>
                  </ul>
                  <p className="text-autisync-black/60 leading-relaxed">
                    Your continued use of ShiftSync after changes to this policy
                    constitutes acceptance of the updated terms.
                  </p>
                </section>
              </main>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 mt-8">
                <p className="text-sm text-blue-900">
                  <strong>Important:</strong> By using Excel Shift Sync, you
                  acknowledge that you have read, understood, and agree to be
                  bound by these Privacy Policy.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
