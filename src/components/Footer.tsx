import React from "react";
import { Link } from "react-router-dom";
import CookiePreferencesLink from "@/components/cookies/CookiePreferencesLink";

const Footer: React.FC = () => {
  return (
    <footer className="mt-10 shadow-md bg-white/70 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">ShiftSync</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              ShiftSync helps you synchronize work schedules from Excel to
              Google Calendar, securely and efficiently.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wide">
              Legal
            </h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="text-slate-600 hover:text-autisync-gold transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-slate-600 hover:text-autisync-gold transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="/cookies"
                  className="text-slate-600 hover:text-autisync-gold transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="/datadeletion"
                  className="text-slate-600 hover:text-autisync-gold transition-colors"
                >
                  GDPR & Data Protection
                </a>
              </li>
              <li>
                <CookiePreferencesLink />
              </li>
            </ul>
          </div>

          {/* Contact / Compliance */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wide">
              Contact & Compliance
            </h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="mailto:support@autisync.com"
                  className="text-slate-600 hover:text-autisync-gold transition-colors"
                >
                  support@autisync.com
                </a>
              </li>
              <li>
                <a
                  href="https://tally.so/r/1A7YOO"
                  className="text-slate-600 hover:text-autisync-gold transition-colors"
                  target="_blank"
                >
                  Bug Reports
                </a>
              </li>
              <li className="text-slate-500">EU GDPR compliant</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <span>
            © {new Date().getFullYear()} Autisync. All rights reserved.
          </span>
          <span className="text-xs text-autisync-gold/70">
            Version Beta 1.0
          </span>
          <span>Built by Autisync.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
