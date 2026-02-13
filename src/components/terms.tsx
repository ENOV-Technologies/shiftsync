import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const Terms = () => {
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
            <CardContent className="p-6 sm:p-8 space-y-6 text-slate-700">
              <main class="max-w-4xl mx-auto px-6 py-16">
                <div class="mb-16">
                  <div class="inline-block px-4 py-2 bg-autisync-gold/10 text-autisync-gold rounded-full text-sm font-medium mb-6">
                    Last Updated: February 11, 2026
                  </div>
                  <h1 class="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                    Terms of Service
                  </h1>
                  <p class="text-xl text-slate-600 leading-relaxed">
                    These Terms of Service govern your use of ShiftSync. By
                    accessing or using our service, you agree to be bound by
                    these terms. Please read them carefully.
                  </p>
                </div>

                <div class="bg-white rounded-2xl border border-slate-200 p-8 mb-12 shadow-sm">
                  <h2 class="text-2xl font-bold text-slate-900 mb-6">
                    Table of Contents
                  </h2>
                  <nav class="grid md:grid-cols-2 gap-4">
                    <a
                      href="#acceptance"
                      class="text-autisync-gold/80 hover:text-autisync-gold flex items-center gap-2 group"
                    >
                      <span class="w-1.5 h-1.5 bg-autisync-gold rounded-full group-hover:scale-150 transition-transform"></span>
                      1. Acceptance of Terms
                    </a>
                    <a
                      href="#description"
                      class="text-autisync-gold/80 hover:text-autisync-gold flex items-center gap-2 group"
                    >
                      <span class="w-1.5 h-1.5 bg-autisync-gold rounded-full group-hover:scale-150 transition-transform"></span>
                      2. Service Description
                    </a>
                    <a
                      href="#eligibility"
                      class="text-autisync-gold/80 hover:text-autisync-gold flex items-center gap-2 group"
                    >
                      <span class="w-1.5 h-1.5 bg-autisync-gold rounded-full group-hover:scale-150 transition-transform"></span>
                      3. Eligibility
                    </a>
                    <a
                      href="#account"
                      class="text-autisync-gold/80 hover:text-autisync-gold flex items-center gap-2 group"
                    >
                      <span class="w-1.5 h-1.5 bg-autisync-gold rounded-full group-hover:scale-150 transition-transform"></span>
                      4. Account & Authentication
                    </a>
                    <a
                      href="#usage"
                      class="text-autisync-gold/80 hover:text-autisync-gold flex items-center gap-2 group"
                    >
                      <span class="w-1.5 h-1.5 bg-autisync-gold rounded-full group-hover:scale-150 transition-transform"></span>
                      5. Acceptable Use
                    </a>
                    <a
                      href="#intellectual-property"
                      class="text-autisync-gold/80 hover:text-autisync-gold flex items-center gap-2 group"
                    >
                      <span class="w-1.5 h-1.5 bg-autisync-gold rounded-full group-hover:scale-150 transition-transform"></span>
                      6. Intellectual Property
                    </a>
                    <a
                      href="#user-content"
                      class="text-autisync-gold/80 hover:text-autisync-gold flex items-center gap-2 group"
                    >
                      <span class="w-1.5 h-1.5 bg-autisync-gold rounded-full group-hover:scale-150 transition-transform"></span>
                      7. User Content
                    </a>
                    <a
                      href="#disclaimers"
                      class="text-autisync-gold/80 hover:text-autisync-gold flex items-center gap-2 group"
                    >
                      <span class="w-1.5 h-1.5 bg-autisync-gold rounded-full group-hover:scale-150 transition-transform"></span>
                      8. Disclaimers
                    </a>
                    <a
                      href="#limitation"
                      class="text-autisync-gold/80 hover:text-autisync-gold flex items-center gap-2 group"
                    >
                      <span class="w-1.5 h-1.5 bg-autisync-gold rounded-full group-hover:scale-150 transition-transform"></span>
                      9. Limitation of Liability
                    </a>
                    <a
                      href="#indemnification"
                      class="text-autisync-gold/80 hover:text-autisync-gold flex items-center gap-2 group"
                    >
                      <span class="w-1.5 h-1.5 bg-autisync-gold rounded-full group-hover:scale-150 transition-transform"></span>
                      10. Indemnification
                    </a>
                    <a
                      href="#termination"
                      class="text-autisync-gold/80 hover:text-autisync-gold flex items-center gap-2 group"
                    >
                      <span class="w-1.5 h-1.5 bg-autisync-gold rounded-full group-hover:scale-150 transition-transform"></span>
                      11. Termination
                    </a>
                    <a
                      href="#governing-law"
                      class="text-autisync-gold/80 hover:text-autisync-gold flex items-center gap-2 group"
                    >
                      <span class="w-1.5 h-1.5 bg-autisync-gold rounded-full group-hover:scale-150 transition-transform"></span>
                      12. Governing Law
                    </a>
                  </nav>
                </div>

                <div class="space-y-12">
                  <section id="acceptance" class="scroll-mt-24">
                    <div class="accent-border pl-6">
                      <h2 class="text-3xl font-bold text-slate-900 mb-4">
                        1. Acceptance of Terms
                      </h2>
                      <div class="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                        <p>
                          By accessing or using ShiftSync (the "Service"),
                          available at{" "}
                          <a
                            href="https://shiftsync.autisync.com"
                            class="text-autisync-gold/70 hover:text-autisync-gold underline"
                          >
                            shiftsync.autisync.com
                          </a>
                          , you agree to be bound by these Terms of Service
                          ("Terms"). If you do not agree to these Terms, you
                          must not access or use the Service.
                        </p>
                        <p>
                          These Terms constitute a legally binding agreement
                          between you ("User" or "you") and Autisync ("Company",
                          "we", "us", or "our"), the operator of ShiftSync.
                        </p>
                        <div class="bg-autisync-gold/10 border-l-4 border-autisync-gold/70 p-6 rounded-r-xl">
                          <p class="font-semibold text-autisync-gold mb-2">
                            Important Notice
                          </p>
                          <p class="text-sm text-slate-800">
                            We reserve the right to update or modify these Terms
                            at any time. Continued use of the Service after
                            changes constitutes acceptance of the modified
                            Terms. We will notify users of material changes via
                            email or prominent website notice.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="description" class="scroll-mt-24">
                    <div class="accent-border pl-6">
                      <h2 class="text-3xl font-bold text-slate-900 mb-4">
                        2. Service Description
                      </h2>
                      <div class="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                        <p>
                          ShiftSync is a web-based application that enables
                          users to:
                        </p>
                        <div class="grid md:grid-cols-2 gap-4 my-6">
                          <div class="bg-white border border-autisync-gold/20 rounded-xl p-5">
                            <div class="w-12 h-12 bg-autisync-gold/10 rounded-lg flex items-center justify-center mb-3">
                              <svg
                                class="w-6 h-6 text-autisync-gold"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                ></path>
                              </svg>
                            </div>
                            <h3 class="font-bold text-slate-900 mb-2">
                              Upload Schedules
                            </h3>
                            <p class="text-sm text-slate-600">
                              Upload work schedules in Excel (.xlsx) format
                            </p>
                          </div>
                          <div class="bg-white border border-autisync-gold/20 rounded-xl p-5">
                            <div class="w-12 h-12 bg-autisync-gold/10 rounded-lg flex items-center justify-center mb-3">
                              <svg
                                class="w-6 h-6 text-autisync-gold"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                ></path>
                              </svg>
                            </div>
                            <h3 class="font-bold text-slate-900 mb-2">
                              Automatic Sync
                            </h3>
                            <p class="text-sm text-slate-600">
                              Synchronize shifts to Google Calendar
                              automatically
                            </p>
                          </div>
                          <div class="bg-white border border-autisync-gold/20 rounded-xl p-5">
                            <div class="w-12 h-12 bg-autisync-gold/10 rounded-lg flex items-center justify-center mb-3">
                              <svg
                                class="w-6 h-6 text-autisync-gold"
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
                            <h3 class="font-bold text-slate-900 mb-2">
                              Manage Preferences
                            </h3>
                            <p class="text-sm text-slate-600">
                              Configure calendar selection and timezone settings
                            </p>
                          </div>
                          <div class="bg-white border border-autisync-gold/20 rounded-xl p-5">
                            <div class="w-12 h-12 bg-autisync-gold/10 rounded-lg flex items-center justify-center mb-3">
                              <svg
                                class="w-6 h-6 text-autisync-gold"
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
                            <h3 class="font-bold text-slate-900 mb-2">
                              Preview Changes
                            </h3>
                            <p class="text-sm text-slate-600">
                              Review all shifts before syncing to calendar
                            </p>
                          </div>
                        </div>
                        <p>
                          The Service integrates with Google Calendar via the
                          Google Calendar API and requires users to authenticate
                          using Google OAuth 2.0.
                        </p>
                        <div class="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                          <p class="font-semibold text-amber-900 mb-2">
                            Service Availability
                          </p>
                          <p class="text-sm text-amber-800">
                            We strive to maintain 99.9% uptime, but we do not
                            guarantee uninterrupted access. The Service may be
                            temporarily unavailable for maintenance, updates, or
                            due to circumstances beyond our control.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="eligibility" class="scroll-mt-24">
                    <div class="accent-border pl-6">
                      <h2 class="text-3xl font-bold text-slate-900 mb-4">
                        3. Eligibility
                      </h2>
                      <div class="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                        <p>To use ShiftSync, you must:</p>
                        <div class="bg-white border border-slate-200 rounded-xl p-6 my-6">
                          <ul class="space-y-3 list-none pl-0">
                            <li class="flex items-start gap-3">
                              <svg
                                class="w-5 h-5 text-autisync-gold flex-shrink-0 mt-0.5"
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
                                Be at least <strong>18 years old</strong> or the
                                age of majority in your jurisdiction
                              </span>
                            </li>
                            <li class="flex items-start gap-3">
                              <svg
                                class="w-5 h-5 text-autisync-gold flex-shrink-0 mt-0.5"
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
                                Have the legal capacity to enter into a binding
                                agreement
                              </span>
                            </li>
                            <li class="flex items-start gap-3">
                              <svg
                                class="w-5 h-5 text-autisync-gold flex-shrink-0 mt-0.5"
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
                                Have a valid <strong>Google account</strong>{" "}
                                with access to Google Calendar
                              </span>
                            </li>
                            <li class="flex items-start gap-3">
                              <svg
                                class="w-5 h-5 text-autisync-gold flex-shrink-0 mt-0.5"
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
                                Not be prohibited from using the Service under
                                applicable laws
                              </span>
                            </li>
                            <li class="flex items-start gap-3">
                              <svg
                                class="w-5 h-5 text-autisync-gold flex-shrink-0 mt-0.5"
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
                                Not have been previously banned or suspended
                                from the Service
                              </span>
                            </li>
                          </ul>
                        </div>
                        <p>
                          By using the Service, you represent and warrant that
                          you meet all eligibility requirements. If you do not
                          meet these requirements, you must not access or use
                          ShiftSync.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="account" class="scroll-mt-24">
                    <div class="accent-border pl-6">
                      <h2 class="text-3xl font-bold text-slate-900 mb-4">
                        4. Account and Authentication
                      </h2>
                      <div class="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                        <h3 class="text-xl font-bold text-slate-900 mt-6">
                          4.1 Google OAuth Authentication
                        </h3>
                        <p>
                          ShiftSync uses Google OAuth 2.0 for authentication. By
                          connecting your Google account, you authorize us to
                          access your Google Calendar for the sole purpose of
                          synchronizing work shifts.
                        </p>

                        <h3 class="text-xl font-bold text-slate-900 mt-6">
                          4.2 Account Security
                        </h3>
                        <p>You are responsible for:</p>
                        <ul class="space-y-2 list-none pl-0 my-4">
                          <li class="flex items-start gap-3">
                            <span class="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Maintaining the security of your Google account
                              credentials
                            </span>
                          </li>
                          <li class="flex items-start gap-3">
                            <span class="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              All activities that occur under your authenticated
                              session
                            </span>
                          </li>
                          <li class="flex items-start gap-3">
                            <span class="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Notifying us immediately of any unauthorized
                              access or security breach
                            </span>
                          </li>
                        </ul>

                        <h3 class="text-xl font-bold text-slate-900 mt-6">
                          4.3 Account Termination by User
                        </h3>
                        <p>
                          You may disconnect your Google account or delete your
                          ShiftSync account at any time through the account
                          settings. Upon disconnection or deletion, we will
                          immediately stop syncing to your calendar and delete
                          your data in accordance with our Privacy Policy.
                        </p>

                        <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl my-6">
                          <p class="font-semibold text-blue-900 mb-2">
                            Revoking Access
                          </p>
                          <p class="text-sm text-blue-800">
                            You can revoke ShiftSync's access to your Google
                            Calendar at any time through your Google Account
                            settings at{" "}
                            <a
                              href="https://myaccount.google.com/permissions"
                              class="underline"
                            >
                              myaccount.google.com/permissions
                            </a>
                            .
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="usage" class="scroll-mt-24">
                    <div class="accent-border pl-6">
                      <h2 class="text-3xl font-bold text-slate-900 mb-4">
                        5. Acceptable Use Policy
                      </h2>
                      <div class="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                        <p>When using ShiftSync, you agree to:</p>

                        <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-6 my-6">
                          <h3 class="text-lg font-bold text-emerald-900 mb-3">
                            ✓ Permitted Uses
                          </h3>
                          <ul class="space-y-2 list-none pl-0">
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Use the Service only for lawful purposes
                              </span>
                            </li>
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Upload only your own work schedules or schedules
                                you are authorized to manage
                              </span>
                            </li>
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Comply with all applicable laws and regulations
                              </span>
                            </li>
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Respect the intellectual property rights of
                                others
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div class="bg-red-50 border border-red-200 rounded-xl p-6 my-6">
                          <h3 class="text-lg font-bold text-red-900 mb-3">
                            ✗ Prohibited Activities
                          </h3>
                          <p class="text-sm text-red-800 mb-3">You must NOT:</p>
                          <ul class="space-y-2 list-none pl-0">
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Attempt to reverse engineer, decompile, or
                                disassemble the Service
                              </span>
                            </li>
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Use automated systems (bots, scrapers) to access
                                the Service
                              </span>
                            </li>
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Upload malicious code, viruses, or harmful
                                content
                              </span>
                            </li>
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Interfere with or disrupt the Service or its
                                servers
                              </span>
                            </li>
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Attempt to gain unauthorized access to any part
                                of the Service
                              </span>
                            </li>
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Use the Service to transmit spam or unsolicited
                                messages
                              </span>
                            </li>
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Violate any applicable laws or regulations
                              </span>
                            </li>
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>Impersonate any person or entity</span>
                            </li>
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Sell, rent, or commercialize access to the
                                Service
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div class="bg-slate-100 border border-slate-300 rounded-xl p-6">
                          <p class="font-semibold text-slate-900 mb-2">
                            Enforcement
                          </p>
                          <p class="text-sm text-slate-700">
                            We reserve the right to investigate and take
                            appropriate legal action against anyone who violates
                            this Acceptable Use Policy, including suspending or
                            terminating accounts without notice.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="intellectual-property" class="scroll-mt-24">
                    <div class="accent-border pl-6">
                      <h2 class="text-3xl font-bold text-slate-900 mb-4">
                        6. Intellectual Property Rights
                      </h2>
                      <div class="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                        <h3 class="text-xl font-bold text-slate-900 mt-6">
                          6.1 Our Intellectual Property
                        </h3>
                        <p>
                          All content, features, functionality, source code,
                          design, graphics, user interface, and trademarks
                          associated with ShiftSync are owned by Autisync and
                          protected by international copyright, trademark, and
                          other intellectual property laws.
                        </p>

                        <h3 class="text-xl font-bold text-slate-900 mt-6">
                          6.2 Limited License
                        </h3>
                        <p>
                          We grant you a limited, non-exclusive,
                          non-transferable, revocable license to access and use
                          ShiftSync for personal, non-commercial purposes,
                          subject to these Terms.
                        </p>

                        <h3 class="text-xl font-bold text-slate-900 mt-6">
                          6.3 Restrictions
                        </h3>
                        <p>You may not:</p>
                        <ul class="space-y-2 list-none pl-0 my-4">
                          <li class="flex items-start gap-3">
                            <span class="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Copy, modify, or create derivative works of the
                              Service
                            </span>
                          </li>
                          <li class="flex items-start gap-3">
                            <span class="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Reproduce, distribute, or publicly display any
                              part of the Service
                            </span>
                          </li>
                          <li class="flex items-start gap-3">
                            <span class="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Remove or alter any copyright, trademark, or
                              proprietary notices
                            </span>
                          </li>
                          <li class="flex items-start gap-3">
                            <span class="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Use our trademarks or branding without written
                              permission
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section id="user-content" class="scroll-mt-24">
                    <div class="accent-border pl-6">
                      <h2 class="text-3xl font-bold text-slate-900 mb-4">
                        7. User Content and Data
                      </h2>
                      <div class="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                        <h3 class="text-xl font-bold text-slate-900 mt-6">
                          7.1 Your Content Ownership
                        </h3>
                        <p>
                          You retain all ownership rights to the Excel files and
                          schedule data you upload to ShiftSync. We do not claim
                          any ownership over your content.
                        </p>

                        <h3 class="text-xl font-bold text-slate-900 mt-6">
                          7.2 License to Process Your Content
                        </h3>
                        <p>
                          By uploading files to ShiftSync, you grant us a
                          limited license to process, store temporarily, and
                          synchronize your schedule data with Google Calendar
                          solely for the purpose of providing the Service.
                        </p>

                        <h3 class="text-xl font-bold text-slate-900 mt-6">
                          7.3 Content Responsibility
                        </h3>
                        <p>You are solely responsible for:</p>
                        <ul class="space-y-2 list-none pl-0 my-4">
                          <li class="flex items-start gap-3">
                            <span class="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              The accuracy and legality of the content you
                              upload
                            </span>
                          </li>
                          <li class="flex items-start gap-3">
                            <span class="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Ensuring you have the right to upload and sync the
                              schedule data
                            </span>
                          </li>
                          <li class="flex items-start gap-3">
                            <span class="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Maintaining backups of your original Excel files
                            </span>
                          </li>
                        </ul>

                        <div class="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-6">
                          <p class="font-semibold text-amber-900 mb-2">
                            Data Processing
                          </p>
                          <p class="text-sm text-amber-800">
                            Uploaded Excel files are processed in memory and not
                            permanently stored on our servers. Only sync
                            metadata (last sync time, preferences) is retained.
                            See our Privacy Policy for details.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="disclaimers" class="scroll-mt-24">
                    <div class="accent-border pl-6">
                      <h2 class="text-3xl font-bold text-slate-900 mb-4">
                        8. Disclaimers and Warranties
                      </h2>
                      <div class="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                        <div class="bg-slate-100 border-2 border-slate-300 rounded-xl p-8 my-6">
                          <h3 class="text-xl font-bold text-slate-900 mb-4">
                            "AS IS" SERVICE
                          </h3>
                          <p class="text-slate-700 uppercase font-semibold mb-4">
                            SHIFTSYNC IS PROVIDED ON AN "AS IS" AND "AS
                            AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND,
                            EITHER EXPRESS OR IMPLIED.
                          </p>
                          <p class="text-sm text-slate-700">
                            To the fullest extent permitted by law, we disclaim
                            all warranties, including but not limited to:
                          </p>
                          <ul class="space-y-2 list-none pl-0 mt-4">
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Implied warranties of merchantability, fitness
                                for a particular purpose, and non-infringement
                              </span>
                            </li>
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Warranties that the Service will be
                                uninterrupted, error-free, or secure
                              </span>
                            </li>
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Warranties regarding the accuracy, reliability,
                                or completeness of results
                              </span>
                            </li>
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Warranties that defects will be corrected
                              </span>
                            </li>
                          </ul>
                        </div>

                        <h3 class="text-xl font-bold text-slate-900 mt-6">
                          Third-Party Services
                        </h3>
                        <p>
                          ShiftSync integrates with Google Calendar, a
                          third-party service. We are not responsible for:
                        </p>
                        <ul class="space-y-2 list-none pl-0 my-4">
                          <li class="flex items-start gap-3">
                            <span class="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Google's policies, terms of service, or privacy
                              practices
                            </span>
                          </li>
                          <li class="flex items-start gap-3">
                            <span class="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Availability, functionality, or changes to the
                              Google Calendar API
                            </span>
                          </li>
                          <li class="flex items-start gap-3">
                            <span class="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Any issues arising from your use of Google
                              services
                            </span>
                          </li>
                        </ul>

                        <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-6">
                          <p class="font-semibold text-red-900 mb-2">
                            No Professional Advice
                          </p>
                          <p class="text-sm text-red-800">
                            ShiftSync is a productivity tool and does not
                            provide professional, legal, or employment advice.
                            You are responsible for ensuring compliance with
                            your employment contract and applicable labor laws.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="limitation" class="scroll-mt-24">
                    <div class="accent-border pl-6">
                      <h2 class="text-3xl font-bold text-slate-900 mb-4">
                        9. Limitation of Liability
                      </h2>
                      <div class="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                        <div class="bg-red-100 border-2 border-red-300 rounded-xl p-8 my-6">
                          <p class="text-red-900 uppercase font-bold mb-4">
                            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:
                          </p>
                          <p class="text-sm text-red-900">
                            Autisync and its officers, directors, employees,
                            agents, and affiliates shall not be liable for any
                            indirect, incidental, special, consequential, or
                            punitive damages, including but not limited to:
                          </p>
                          <ul class="space-y-2 list-none pl-0 mt-4">
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Loss of profits, revenue, data, or use
                              </span>
                            </li>
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Business interruption or lost opportunities
                              </span>
                            </li>
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>Personal injury or emotional distress</span>
                            </li>
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Errors or inaccuracies in schedule
                                synchronization
                              </span>
                            </li>
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Unauthorized access to or alteration of your
                                data
                              </span>
                            </li>
                          </ul>
                          <p class="text-sm text-red-900 mt-4">
                            This limitation applies regardless of the legal
                            theory (contract, tort, negligence, strict
                            liability, or otherwise) and even if we have been
                            advised of the possibility of such damages.
                          </p>
                        </div>

                        <h3 class="text-xl font-bold text-slate-900 mt-6">
                          Maximum Liability Cap
                        </h3>
                        <p>
                          In no event shall our total aggregate liability to you
                          exceed the amount you paid to use ShiftSync in the 12
                          months preceding the claim, or €100 (whichever is
                          greater).
                        </p>

                        <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl my-6">
                          <p class="font-semibold text-blue-900 mb-2">
                            Jurisdictional Variations
                          </p>
                          <p class="text-sm text-blue-800">
                            Some jurisdictions do not allow the exclusion or
                            limitation of certain damages. In such
                            jurisdictions, our liability is limited to the
                            fullest extent permitted by law.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="indemnification" class="scroll-mt-24">
                    <div class="accent-border pl-6">
                      <h2 class="text-3xl font-bold text-slate-900 mb-4">
                        10. Indemnification
                      </h2>
                      <div class="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                        <p>
                          You agree to indemnify, defend, and hold harmless
                          Autisync, its officers, directors, employees, agents,
                          licensors, and suppliers from and against all claims,
                          losses, liabilities, expenses, damages, and costs,
                          including reasonable attorneys' fees, arising from or
                          related to:
                        </p>
                        <div class="bg-white border border-slate-200 rounded-xl p-6 my-6">
                          <ul class="space-y-3 list-none pl-0">
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                              <span>Your use or misuse of the Service</span>
                            </li>
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                              <span>Your violation of these Terms</span>
                            </li>
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Your violation of any rights of a third party
                              </span>
                            </li>
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                              <span>Content you upload to the Service</span>
                            </li>
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Your breach of any applicable laws or
                                regulations
                              </span>
                            </li>
                          </ul>
                        </div>
                        <p>
                          This indemnification obligation will survive
                          termination of these Terms and your use of the
                          Service.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="termination" class="scroll-mt-24">
                    <div class="accent-border pl-6">
                      <h2 class="text-3xl font-bold text-slate-900 mb-4">
                        11. Termination and Suspension
                      </h2>
                      <div class="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                        <h3 class="text-xl font-bold text-slate-900 mt-6">
                          11.1 Termination by You
                        </h3>
                        <p>
                          You may terminate your use of ShiftSync at any time
                          by:
                        </p>
                        <ul class="space-y-2 list-none pl-0 my-4">
                          <li class="flex items-start gap-3">
                            <span class="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Disconnecting your Google account from the Service
                            </span>
                          </li>
                          <li class="flex items-start gap-3">
                            <span class="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Deleting your account through account settings
                            </span>
                          </li>
                          <li class="flex items-start gap-3">
                            <span class="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>Ceasing all use of the Service</span>
                          </li>
                        </ul>

                        <h3 class="text-xl font-bold text-slate-900 mt-6">
                          11.2 Termination by Us
                        </h3>
                        <p>
                          We reserve the right to suspend or terminate your
                          access to ShiftSync at any time, with or without
                          notice, for any reason, including but not limited to:
                        </p>
                        <div class="bg-white border border-slate-200 rounded-xl p-6 my-6">
                          <ul class="space-y-3 list-none pl-0">
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Violation of these Terms or Acceptable Use
                                Policy
                              </span>
                            </li>
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Suspected fraudulent, abusive, or illegal
                                activity
                              </span>
                            </li>
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Extended periods of inactivity (90+ days)
                              </span>
                            </li>
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Requests from law enforcement or regulatory
                                authorities
                              </span>
                            </li>
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>Discontinuation of the Service</span>
                            </li>
                          </ul>
                        </div>

                        <h3 class="text-xl font-bold text-slate-900 mt-6">
                          11.3 Effect of Termination
                        </h3>
                        <p>Upon termination:</p>
                        <ul class="space-y-2 list-none pl-0 my-4">
                          <li class="flex items-start gap-3">
                            <span class="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Your right to access and use the Service
                              immediately ceases
                            </span>
                          </li>
                          <li class="flex items-start gap-3">
                            <span class="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              We will delete your account data in accordance
                              with our Privacy Policy
                            </span>
                          </li>
                          <li class="flex items-start gap-3">
                            <span class="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Previously synced calendar events will remain in
                              your Google Calendar
                            </span>
                          </li>
                          <li class="flex items-start gap-3">
                            <span class="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Sections of these Terms that by their nature
                              should survive will continue to apply
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section id="governing-law" class="scroll-mt-24">
                    <div class="accent-border pl-6">
                      <h2 class="text-3xl font-bold text-slate-900 mb-4">
                        12. Governing Law and Dispute Resolution
                      </h2>
                      <div class="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                        <h3 class="text-xl font-bold text-slate-900 mt-6">
                          12.1 Governing Law
                        </h3>
                        <p>
                          These Terms shall be governed by and construed in
                          accordance with the laws of Angola, without regard to
                          its conflict of law provisions.
                        </p>

                        <h3 class="text-xl font-bold text-slate-900 mt-6">
                          12.2 Jurisdiction
                        </h3>
                        <p>
                          You agree that any legal action or proceeding arising
                          out of or related to these Terms or your use of
                          ShiftSync shall be brought exclusively in the courts
                          located in Luanda, Angola. You consent to the personal
                          jurisdiction of such courts.
                        </p>

                        <h3 class="text-xl font-bold text-slate-900 mt-6">
                          12.3 EU User Rights
                        </h3>
                        <p>
                          If you are a consumer residing in the European Union,
                          you retain the benefit of mandatory provisions of the
                          consumer protection law in your country of residence,
                          and nothing in these Terms affects your rights as a
                          consumer under EU law.
                        </p>

                        <div class="bg-autisync-gold/10 border-l-4 border-autisync-gold/70 p-6 rounded-r-xl my-6">
                          <p class="font-semibold text-autisync-gold mb-2">
                            Dispute Resolution Process
                          </p>
                          <p class="text-sm text-autisync-black/90">
                            Before initiating any legal proceedings, we
                            encourage you to contact us at{" "}
                            <a
                              href="mailto:support@autisync.com"
                              class="underline"
                            >
                              support@autisync.com
                            </a>{" "}
                            to attempt to resolve the dispute informally. We are
                            committed to working with users to address concerns
                            in good faith.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section class="mt-16 space-y-8">
                    <div class="bg-white border border-slate-200 rounded-2xl p-8">
                      <h2 class="text-2xl font-bold text-slate-900 mb-4">
                        13. Miscellaneous Provisions
                      </h2>

                      <div class="space-y-6">
                        <div>
                          <h3 class="text-lg font-bold text-slate-900 mb-2">
                            13.1 Entire Agreement
                          </h3>
                          <p class="text-slate-700">
                            These Terms, together with our Privacy Policy and
                            Cookie Policy, constitute the entire agreement
                            between you and Autisync regarding the Service.
                          </p>
                        </div>

                        <div>
                          <h3 class="text-lg font-bold text-slate-900 mb-2">
                            13.2 Severability
                          </h3>
                          <p class="text-slate-700">
                            If any provision of these Terms is found to be
                            invalid or unenforceable, the remaining provisions
                            will remain in full force and effect.
                          </p>
                        </div>

                        <div>
                          <h3 class="text-lg font-bold text-slate-900 mb-2">
                            13.3 Waiver
                          </h3>
                          <p class="text-slate-700">
                            Our failure to enforce any right or provision of
                            these Terms will not constitute a waiver of that
                            right or provision.
                          </p>
                        </div>

                        <div>
                          <h3 class="text-lg font-bold text-slate-900 mb-2">
                            13.4 Assignment
                          </h3>
                          <p class="text-slate-700">
                            You may not assign or transfer these Terms without
                            our prior written consent. We may assign these Terms
                            without restriction.
                          </p>
                        </div>

                        <div>
                          <h3 class="text-lg font-bold text-slate-900 mb-2">
                            13.5 Force Majeure
                          </h3>
                          <p class="text-slate-700">
                            We shall not be liable for any delay or failure to
                            perform resulting from causes outside our reasonable
                            control, including but not limited to acts of God,
                            war, terrorism, natural disasters, or internet
                            service provider failures.
                          </p>
                        </div>

                        <div>
                          <h3 class="text-lg font-bold text-slate-900 mb-2">
                            13.6 Modifications to the Service
                          </h3>
                          <p class="text-slate-700">
                            We reserve the right to modify, suspend, or
                            discontinue any aspect of the Service at any time,
                            with or without notice. We will not be liable to you
                            or any third party for any modification, suspension,
                            or discontinuation.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="bg-gradient-to-br from-autisync-gold/10 to-autisync-goldsoft border-2 border-autisync-gold/20 rounded-2xl p-8">
                      <div class="flex items-start gap-6">
                        <div class="w-16 h-16 bg-gradient-to-br from-autisync-gold/30 to-autisync-gold/90 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <svg
                            class="w-8 h-8 text-white"
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
                        <div class="flex-1">
                          <h2 class="text-2xl font-bold text-slate-900 mb-4">
                            Questions About These Terms?
                          </h2>
                          <p class="text-slate-700 mb-4">
                            If you have any questions, concerns, or need
                            clarification regarding these Terms of Service,
                            please contact us:
                          </p>
                          <div class="space-y-2">
                            <div class="flex items-center gap-3">
                              <svg
                                class="w-5 h-5 text-autisync-gold"
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
                                class="text-autisync-gold/70 hover:text-autisync-gold font-semibold underline"
                              >
                                support@autisync.com
                              </a>
                            </div>
                            <div class="flex items-start gap-3">
                              <svg
                                class="w-5 h-5 text-autisync-gold mt-0.5"
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
                                <p class="text-slate-900 font-medium">
                                  Autisync
                                </p>
                                <p class="text-slate-700">Luanda, Angola</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </main>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 mt-8">
                <p className="text-sm text-blue-900">
                  <strong>Important:</strong> By using Excel Shift Sync, you
                  acknowledge that you have read, understood, and agree to be
                  bound by these Terms of Service.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Terms;
