import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DataDeletion = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50 py-8 sm:py-12">
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
              <div class="mb-6">
                <div class="inline-block px-4 py-2 bg-autisync-black text-autisync-gold rounded-full text-sm font-medium mb-6">
                  Last Updated: February 11, 2026
                </div>
                <h1 class="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  Delete Your Data
                </h1>
                <p class="text-xl text-slate-600 leading-relaxed">
                  You have the right to delete all your personal data from
                  <strong> ShiftSync</strong> at any time. This page explains
                  how to exercise your right to erasure under GDPR (Article 17).
                </p>
              </div>
            </CardHeader>

            <CardContent className="p-6 sm:p-8 space-y-10 text-slate-700">
              {/* What gets deleted */}
              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  What Gets Deleted
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Google account email address and profile data</li>
                  <li>OAuth access and refresh tokens</li>
                  <li>Account preferences and sync settings</li>
                  <li>Session data and authentication metadata</li>
                  <li>Temporary logs and sync metadata (≤ 30 days)</li>
                </ul>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-4">
                  <p className="text-sm text-blue-900">
                    <strong>Important:</strong> Uploaded Excel files are never
                    stored on our servers. They are processed in memory only.
                  </p>
                </div>
              </section>

              {/* Calendar clarification */}
              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  Google Calendar Events
                </h2>
                <p className="leading-relaxed mb-3">
                  Deleting your ShiftSync account does <strong>not</strong>{" "}
                  automatically remove events from your Google Calendar.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Previously synced events remain in Google Calendar</li>
                  <li>You retain full ownership and control of those events</li>
                  <li>
                    Events created by ShiftSync are identifiable in metadata
                  </li>
                </ul>
              </section>

              {/* Deletion timeline */}
              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  Deletion Timeline
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Immediate:</strong> Account access revoked and
                    tokens invalidated
                  </li>
                  <li>
                    <strong>Within 24 hours:</strong> Account data removed from
                    production systems
                  </li>
                  <li>
                    <strong>Within 30 days:</strong> Data removed from backups
                    and permanently erased
                  </li>
                </ul>
              </section>

              {/* How to delete */}
              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  How to Request Deletion
                </h2>

                <h3 className="font-semibold mt-4 mb-2">
                  Option 1: Self-Service (Recommended)
                </h3>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Log in to your ShiftSync account</li>
                  <li>Go to Settings → Account → Delete Account</li>
                  <li>Review the deletion summary</li>
                  <li>Confirm permanent deletion</li>
                </ol>

                <h3 className="font-semibold mt-6 mb-2">
                  Option 2: Email Request
                </h3>
                <p className="leading-relaxed">
                  If you cannot access your account, email us at{" "}
                  <a
                    href="mailto:support@autisync.com"
                    className="text-autisync-gold hover:underline font-medium"
                  >
                    support@autisync.com
                  </a>{" "}
                  with the subject:
                </p>
                <p className="mt-2 italic text-sm">
                  “Data Deletion Request – ShiftSync”
                </p>
              </section>

              {/* Warning */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-sm text-red-900">
                  <strong>Warning:</strong> Data deletion is permanent and
                  irreversible. Please export any information you need before
                  proceeding.
                </p>
              </div>

              {/* Compliance */}
              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  GDPR Compliance
                </h2>
                <p className="leading-relaxed">
                  This process fully complies with GDPR Article 17 (Right to
                  Erasure). No personally identifiable data is retained after
                  completion of the deletion process.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DataDeletion;
