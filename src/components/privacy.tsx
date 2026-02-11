import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <a
              href="https://shiftsync.autisync.com"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                ShiftSync
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a
                href="/terms"
                className="text-slate-600 hover:text-pink-600 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/cookies"
                className="text-slate-600 hover:text-pink-600 transition-colors"
              >
                Cookie Policy
              </a>
              <a
                href="mailto:support@autisync.com"
                className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero */}
        <section className="mb-16">
          <div className="inline-block px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium mb-6">
            Last Updated: February 11, 2026
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Privacy Policy
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed">
            Your privacy matters to us. This policy explains how ShiftSync
            collects, uses, and protects your personal information in compliance
            with GDPR and international data protection standards.
          </p>
        </section>

        {/* Introduction */}
        <section id="introduction" className="scroll-mt-24">
          <div className="accent-border pl-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              1. Introduction
            </h2>

            <div className="prose prose-slate max-w-none text-slate-700">
              <p>
                Welcome to ShiftSync, a service provided by Autisync. ShiftSync
                helps synchronize Excel work schedules to Google Calendar.
              </p>
              <p>
                By using ShiftSync, you agree to the collection and use of
                information in accordance with this policy.
              </p>
            </div>
          </div>
        </section>

        {/* Continue remaining sections exactly the same way */}
      </main>
    </>
  );
};

export default PrivacyPolicy;
