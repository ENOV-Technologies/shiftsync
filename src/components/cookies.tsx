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
            Voltar
          </Button>

          <Card className="shadow-2xl border-0">
            <CardHeader className="space-y-2 p-6 sm:p-8">
              <div className="mb-6">
                <div className="inline-block px-4 py-2 bg-autisync-black text-autisync-gold rounded-full text-sm font-medium mb-6">
                  Última Atualização: {POLICY_LAST_UPDATED}
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  Política de Cookies
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Esta Política de Cookies explica como o{" "}
                  <strong>ShiftSync</strong> utiliza cookies e tecnologias
                  similares. Acreditamos na transparência e na recolha mínima de
                  dados.
                </p>
              </div>
            </CardHeader>

            <CardContent className="p-6 sm:p-8 space-y-10 text-slate-700">
              {/* Summary */}
              <section className="bg-emerald-50 border border-emerald-300 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-slate-900 mb-2">
                  A Versão Resumida
                </h2>
                <p className="leading-relaxed">
                  <strong>O ShiftSync utiliza cookies mínimos.</strong> Apenas
                  usamos cookies essenciais necessários para autenticação,
                  segurança e preferências básicas. Não utilizamos por padrão
                  cookies de publicidade, análise ou rastreamento.
                </p>
              </section>

              {/* Section 1 */}
              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  1. O que são Cookies?
                </h2>
                <p className="leading-relaxed">
                  Cookies são pequenos ficheiros de texto armazenados no seu
                  dispositivo quando visita um website. Ajudam os websites a
                  lembrar informações como estado de início de sessão,
                  preferências e definições de segurança.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  2. Cookies que Utilizamos
                </h2>
                <p className="leading-relaxed mb-4">
                  O ShiftSync utiliza apenas <strong>cookies essenciais</strong>{" "}
                  que são estritamente necessários para o funcionamento do
                  Serviço.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-slate-200 rounded-lg">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left p-3">Nome do Cookie</th>
                        <th className="text-left p-3">Finalidade</th>
                        <th className="text-left p-3">Duração</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-3 font-mono">auth_session</td>
                        <td className="p-3">
                          Mantém o seu estado de sessão após o Google OAuth
                        </td>
                        <td className="p-3">30 dias</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-3 font-mono">csrf_token</td>
                        <td className="p-3">
                          Previne ataques de falsificação de pedidos entre sites
                        </td>
                        <td className="p-3">Sessão</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-3 font-mono">user_prefs</td>
                        <td className="p-3">
                          Armazena preferências de fuso horário e calendário
                        </td>
                        <td className="p-3">1 ano</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-3 font-mono">cookie_consent</td>
                        <td className="p-3">
                          Regista o reconhecimento desta política
                        </td>
                        <td className="p-3">1 ano</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  3. Cookies que NÃO Utilizamos
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Cookies de publicidade ou marketing</li>
                  <li>Cookies de análise ou rastreamento de uso</li>
                  <li>Cookies de rastreamento de redes sociais</li>
                  <li>Rastreamento comportamental de terceiros</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  4. Cookies de Terceiros
                </h2>
                <p className="leading-relaxed">
                  Quando se autentica usando Google OAuth, a Google pode definir
                  cookies como parte do seu processo de autenticação. Estes
                  cookies são controlados pela Google e regidos pelas políticas
                  de privacidade e cookies da própria Google.
                </p>
                <p className="mt-2">
                  Saiba mais:{" "}
                  <a
                    href="https://policies.google.com/technologies/cookies"
                    className="text-autisync-gold hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Política de Cookies da Google
                  </a>
                </p>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  5. Como Gerir Cookies
                </h2>
                <p className="leading-relaxed">
                  Pode controlar os cookies através das definições do seu
                  navegador. Desativar cookies essenciais impedirá o
                  funcionamento correto do ShiftSync.
                </p>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  6. Atualizações a Esta Política
                </h2>
                <p className="leading-relaxed">
                  Podemos atualizar esta Política de Cookies ocasionalmente. As
                  alterações serão refletidas atualizando a data "Última
                  atualização" nesta página.
                </p>
              </section>

              {/* Contact */}
              <section className="bg-autisync-gold/10 border border-autisync-gold/40 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-slate-900 mb-2">
                  Questões?
                </h2>
                <p>
                  Se tiver alguma questão sobre esta Política de Cookies,
                  contacte-nos em{" "}
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
