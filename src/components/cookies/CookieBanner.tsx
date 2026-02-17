import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { useConsent } from "@/lib/cookies/ConsentContext";
import { POLICY_ROUTE } from "@/lib/cookies/cookiePolicyConfig";

const CookieBanner: React.FC = () => {
  const { showBanner, acceptAll, rejectNonEssential, setShowPreferences } =
    useConsent();

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
              Valorizamos a sua privacidade
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              O ShiftSync utiliza cookies essenciais para autenticação e
              segurança. Também utilizamos análises anónimas (Vercel Analytics)
              para melhorar a aplicação — apenas se concordar. Não são
              utilizados cookies de publicidade ou rastreamento.{" "}
              <Link
                to={POLICY_ROUTE}
                className="text-autisync-gold font-medium hover:underline"
              >
                Leia a nossa Política de Cookies
              </Link>
              .
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <Button
                onClick={acceptAll}
                size="sm"
                className="bg-autisync-black hover:bg-autisync-black/90 text-autisync-gold"
              >
                Aceitar todos
              </Button>
              <Button onClick={rejectNonEssential} variant="outline" size="sm">
                Rejeitar não essenciais
              </Button>
              <Button
                onClick={() => setShowPreferences(true)}
                variant="ghost"
                size="sm"
                className="text-slate-500 hover:text-slate-900"
              >
                Gerir preferências
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
