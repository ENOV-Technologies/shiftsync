import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
            Voltar
          </Button>

          <Card className="shadow-2xl border-0">
            <CardContent className="p-6 sm:p-8 space-y-6 text-slate-700">
              <main className="max-w-4xl mx-auto px-6 py-16">
                <div className="mb-16">
                  <div className="inline-block px-4 py-2 bg-autisync-gold/10 text-autisync-gold rounded-full text-sm font-medium mb-6">
                    Última Atualização: 11 de Fevereiro de 2026
                  </div>
                  <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                    Termos de Serviço
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    Estes Termos de Serviço regem a sua utilização do ShiftSync.
                    Ao aceder ou utilizar o nosso serviço, concorda em ficar
                    vinculado por estes termos. Por favor, leia-os atentamente.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-12 shadow-sm">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Índice
                  </h2>
                  <nav className="grid md:grid-cols-2 gap-4">
                    <a
                      href="#acceptance"
                      className="text-autisync-gold/80 hover:text-autisync-gold flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-autisync-gold rounded-full group-hover:scale-150 transition-transform"></span>
                      1. Aceitação dos Termos
                    </a>
                    <a
                      href="#description"
                      className="text-autisync-gold/80 hover:text-autisync-gold flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-autisync-gold rounded-full group-hover:scale-150 transition-transform"></span>
                      2. Descrição do Serviço
                    </a>
                    <a
                      href="#eligibility"
                      className="text-autisync-gold/80 hover:text-autisync-gold flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-autisync-gold rounded-full group-hover:scale-150 transition-transform"></span>
                      3. Elegibilidade
                    </a>
                    <a
                      href="#account"
                      className="text-autisync-gold/80 hover:text-autisync-gold flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-autisync-gold rounded-full group-hover:scale-150 transition-transform"></span>
                      4. Conta e Autenticação
                    </a>
                    <a
                      href="#usage"
                      className="text-autisync-gold/80 hover:text-autisync-gold flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-autisync-gold rounded-full group-hover:scale-150 transition-transform"></span>
                      5. Uso Aceitável
                    </a>
                    <a
                      href="#intellectual-property"
                      className="text-autisync-gold/80 hover:text-autisync-gold flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-autisync-gold rounded-full group-hover:scale-150 transition-transform"></span>
                      6. Propriedade Intelectual
                    </a>
                    <a
                      href="#user-content"
                      className="text-autisync-gold/80 hover:text-autisync-gold flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-autisync-gold rounded-full group-hover:scale-150 transition-transform"></span>
                      7. Conteúdo do Utilizador
                    </a>
                    <a
                      href="#disclaimers"
                      className="text-autisync-gold/80 hover:text-autisync-gold flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-autisync-gold rounded-full group-hover:scale-150 transition-transform"></span>
                      8. Isenções de Responsabilidade
                    </a>
                    <a
                      href="#limitation"
                      className="text-autisync-gold/80 hover:text-autisync-gold flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-autisync-gold rounded-full group-hover:scale-150 transition-transform"></span>
                      9. Limitação de Responsabilidade
                    </a>
                    <a
                      href="#indemnification"
                      className="text-autisync-gold/80 hover:text-autisync-gold flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-autisync-gold rounded-full group-hover:scale-150 transition-transform"></span>
                      10. Indemnização
                    </a>
                    <a
                      href="#termination"
                      className="text-autisync-gold/80 hover:text-autisync-gold flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-autisync-gold rounded-full group-hover:scale-150 transition-transform"></span>
                      11. Rescisão
                    </a>
                    <a
                      href="#governing-law"
                      className="text-autisync-gold/80 hover:text-autisync-gold flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-autisync-gold rounded-full group-hover:scale-150 transition-transform"></span>
                      12. Lei Aplicável
                    </a>
                  </nav>
                </div>

                <div className="space-y-12">
                  <section id="acceptance" className="scroll-mt-24">
                    <div className="accent-border pl-6">
                      <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        1. Aceitação dos Termos
                      </h2>
                      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                        <p>
                          Ao aceder ou utilizar o ShiftSync (o "Serviço"),
                          disponível em{" "}
                          <a
                            href="https://shiftsync.autisync.com"
                            className="text-autisync-gold/70 hover:text-autisync-gold underline"
                          >
                            shiftsync.autisync.com
                          </a>
                          , concorda em ficar vinculado por estes Termos de
                          Serviço ("Termos"). Se não concordar com estes Termos,
                          não deve aceder ou utilizar o Serviço.
                        </p>
                        <p>
                          Estes Termos constituem um acordo legalmente
                          vinculativo entre si ("Utilizador" ou "você") e a
                          Autisync ("Empresa", "nós", "nos" ou "nosso"),
                          operadora do ShiftSync.
                        </p>
                        <div className="bg-autisync-gold/10 border-l-4 border-autisync-gold/70 p-6 rounded-r-xl">
                          <p className="font-semibold text-autisync-gold mb-2">
                            Aviso Importante
                          </p>
                          <p className="text-sm text-slate-800">
                            Reservamos o direito de atualizar ou modificar estes
                            Termos a qualquer momento. A utilização continuada
                            do Serviço após alterações constitui aceitação dos
                            Termos modificados. Notificaremos os utilizadores de
                            alterações materiais via email ou aviso proeminente
                            no website.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="description" className="scroll-mt-24">
                    <div className="accent-border pl-6">
                      <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        2. Descrição do Serviço
                      </h2>
                      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                        <p>
                          O ShiftSync é uma aplicação web que permite aos
                          utilizadores:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 my-6">
                          <div className="bg-white border border-autisync-gold/20 rounded-xl p-5">
                            <div className="w-12 h-12 bg-autisync-gold/10 rounded-lg flex items-center justify-center mb-3">
                              <svg
                                className="w-6 h-6 text-autisync-gold"
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
                            <h3 className="font-bold text-slate-900 mb-2">
                              Carregar Horários
                            </h3>
                            <p className="text-sm text-slate-600">
                              Carregar horários de trabalho em formato Excel
                              (.xlsx)
                            </p>
                          </div>
                          <div className="bg-white border border-autisync-gold/20 rounded-xl p-5">
                            <div className="w-12 h-12 bg-autisync-gold/10 rounded-lg flex items-center justify-center mb-3">
                              <svg
                                className="w-6 h-6 text-autisync-gold"
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
                            <h3 className="font-bold text-slate-900 mb-2">
                              Sincronização Automática
                            </h3>
                            <p className="text-sm text-slate-600">
                              Sincronizar turnos com o Google Calendar
                              automaticamente
                            </p>
                          </div>
                          <div className="bg-white border border-autisync-gold/20 rounded-xl p-5">
                            <div className="w-12 h-12 bg-autisync-gold/10 rounded-lg flex items-center justify-center mb-3">
                              <svg
                                className="w-6 h-6 text-autisync-gold"
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
                            <h3 className="font-bold text-slate-900 mb-2">
                              Gerir Preferências
                            </h3>
                            <p className="text-sm text-slate-600">
                              Configurar seleção de calendário e definições de
                              fuso horário
                            </p>
                          </div>
                          <div className="bg-white border border-autisync-gold/20 rounded-xl p-5">
                            <div className="w-12 h-12 bg-autisync-gold/10 rounded-lg flex items-center justify-center mb-3">
                              <svg
                                className="w-6 h-6 text-autisync-gold"
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
                            <h3 className="font-bold text-slate-900 mb-2">
                              Pré-visualizar Alterações
                            </h3>
                            <p className="text-sm text-slate-600">
                              Rever todos os turnos antes de sincronizar com o
                              calendário
                            </p>
                          </div>
                        </div>
                        <p>
                          O Serviço integra-se com o Google Calendar através da
                          Google Calendar API e requer que os utilizadores se
                          autentiquem usando Google OAuth 2.0.
                        </p>
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                          <p className="font-semibold text-amber-900 mb-2">
                            Disponibilidade do Serviço
                          </p>
                          <p className="text-sm text-amber-800">
                            Esforçamo-nos por manter 99,9% de uptime, mas não
                            garantimos acesso ininterrupto. O Serviço pode estar
                            temporariamente indisponível para manutenção,
                            atualizações ou devido a circunstâncias fora do
                            nosso controlo.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="eligibility" className="scroll-mt-24">
                    <div className="accent-border pl-6">
                      <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        3. Elegibilidade
                      </h2>
                      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                        <p>Para utilizar o ShiftSync, deve:</p>
                        <div className="bg-white border border-slate-200 rounded-xl p-6 my-6">
                          <ul className="space-y-3 list-none pl-0">
                            <li className="flex items-start gap-3">
                              <svg
                                className="w-5 h-5 text-autisync-gold flex-shrink-0 mt-0.5"
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
                                Ter pelo menos <strong>18 anos</strong> ou a
                                idade de maioridade na sua jurisdição
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <svg
                                className="w-5 h-5 text-autisync-gold flex-shrink-0 mt-0.5"
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
                                Ter capacidade legal para celebrar um acordo
                                vinculativo
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <svg
                                className="w-5 h-5 text-autisync-gold flex-shrink-0 mt-0.5"
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
                                Ter uma <strong>conta Google</strong> válida com
                                acesso ao Google Calendar
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <svg
                                className="w-5 h-5 text-autisync-gold flex-shrink-0 mt-0.5"
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
                                Não estar proibido de utilizar o Serviço ao
                                abrigo das leis aplicáveis
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <svg
                                className="w-5 h-5 text-autisync-gold flex-shrink-0 mt-0.5"
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
                                Não ter sido anteriormente banido ou suspenso do
                                Serviço
                              </span>
                            </li>
                          </ul>
                        </div>
                        <p>
                          Ao utilizar o Serviço, declara e garante que cumpre
                          todos os requisitos de elegibilidade. Se não cumprir
                          estes requisitos, não deve aceder ou utilizar o
                          ShiftSync.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="account" className="scroll-mt-24">
                    <div className="accent-border pl-6">
                      <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        4. Conta e Autenticação
                      </h2>
                      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                        <h3 className="text-xl font-bold text-slate-900 mt-6">
                          4.1 Autenticação Google OAuth
                        </h3>
                        <p>
                          O ShiftSync utiliza Google OAuth 2.0 para
                          autenticação. Ao conectar a sua conta Google,
                          autoriza-nos a aceder ao seu Google Calendar para o
                          único propósito de sincronizar turnos de trabalho.
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mt-6">
                          4.2 Segurança da Conta
                        </h3>
                        <p>É responsável por:</p>
                        <ul className="space-y-2 list-none pl-0 my-4">
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Manter a segurança das credenciais da sua conta
                              Google
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Todas as atividades que ocorram sob a sua sessão
                              autenticada
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Notificar-nos imediatamente de qualquer acesso não
                              autorizado ou violação de segurança
                            </span>
                          </li>
                        </ul>

                        <h3 className="text-xl font-bold text-slate-900 mt-6">
                          4.3 Rescisão da Conta pelo Utilizador
                        </h3>
                        <p>
                          Pode desconectar a sua conta Google ou eliminar a sua
                          conta ShiftSync a qualquer momento através das
                          definições de conta. Após desconexão ou eliminação,
                          iremos parar imediatamente de sincronizar com o seu
                          calendário e eliminar os seus dados de acordo com a
                          nossa Política de Privacidade.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl my-6">
                          <p className="font-semibold text-blue-900 mb-2">
                            Revogar Acesso
                          </p>
                          <p className="text-sm text-blue-800">
                            Pode revogar o acesso do ShiftSync ao seu Google
                            Calendar a qualquer momento através das definições
                            da sua Conta Google em{" "}
                            <a
                              href="https://myaccount.google.com/permissions"
                              className="underline"
                            >
                              myaccount.google.com/permissions
                            </a>
                            .
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="usage" className="scroll-mt-24">
                    <div className="accent-border pl-6">
                      <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        5. Política de Uso Aceitável
                      </h2>
                      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                        <p>Ao utilizar o ShiftSync, concorda em:</p>

                        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 my-6">
                          <h3 className="text-lg font-bold text-emerald-900 mb-3">
                            ✓ Usos Permitidos
                          </h3>
                          <ul className="space-y-2 list-none pl-0">
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Utilizar o Serviço apenas para fins lícitos
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Carregar apenas os seus próprios horários de
                                trabalho ou horários que está autorizado a gerir
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Cumprir todas as leis e regulamentos aplicáveis
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Respeitar os direitos de propriedade intelectual
                                de terceiros
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-6">
                          <h3 className="text-lg font-bold text-red-900 mb-3">
                            ✗ Atividades Proibidas
                          </h3>
                          <p className="text-sm text-red-800 mb-3">NÃO deve:</p>
                          <ul className="space-y-2 list-none pl-0">
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Tentar fazer engenharia reversa, decompilar ou
                                desmontar o Serviço
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Utilizar sistemas automatizados (bots, scrapers)
                                para aceder ao Serviço
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Carregar código malicioso, vírus ou conteúdo
                                prejudicial
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Interferir ou perturbar o Serviço ou os seus
                                servidores
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Tentar obter acesso não autorizado a qualquer
                                parte do Serviço
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Utilizar o Serviço para transmitir spam ou
                                mensagens não solicitadas
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Violar quaisquer leis ou regulamentos aplicáveis
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Fazer-se passar por qualquer pessoa ou entidade
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Vender, alugar ou comercializar o acesso ao
                                Serviço
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                          <p className="font-semibold text-slate-900 mb-2">
                            Aplicação
                          </p>
                          <p className="text-sm text-slate-700">
                            Reservamos o direito de investigar e tomar ação
                            legal apropriada contra quem violar esta Política de
                            Uso Aceitável, incluindo suspender ou terminar
                            contas sem aviso prévio.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="intellectual-property" className="scroll-mt-24">
                    <div className="accent-border pl-6">
                      <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        6. Direitos de Propriedade Intelectual
                      </h2>
                      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                        <h3 className="text-xl font-bold text-slate-900 mt-6">
                          6.1 Nossa Propriedade Intelectual
                        </h3>
                        <p>
                          Todo o conteúdo, funcionalidades, código fonte,
                          design, gráficos, interface do utilizador e marcas
                          comerciais associados ao ShiftSync são propriedade da
                          Autisync e protegidos pelas leis internacionais de
                          direitos de autor, marcas comerciais e outras leis de
                          propriedade intelectual.
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mt-6">
                          6.2 Licença Limitada
                        </h3>
                        <p>
                          Concedemos-lhe uma licença limitada, não exclusiva,
                          não transferível e revogável para aceder e utilizar o
                          ShiftSync para fins pessoais e não comerciais, sujeita
                          a estes Termos.
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mt-6">
                          6.3 Restrições
                        </h3>
                        <p>Não pode:</p>
                        <ul className="space-y-2 list-none pl-0 my-4">
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Copiar, modificar ou criar obras derivadas do
                              Serviço
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Reproduzir, distribuir ou exibir publicamente
                              qualquer parte do Serviço
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Remover ou alterar quaisquer avisos de direitos de
                              autor, marcas comerciais ou avisos de propriedade
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Utilizar as nossas marcas comerciais ou identidade
                              visual sem autorização por escrito
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section id="user-content" className="scroll-mt-24">
                    <div className="accent-border pl-6">
                      <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        7. Conteúdo e Dados do Utilizador
                      </h2>
                      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                        <h3 className="text-xl font-bold text-slate-900 mt-6">
                          7.1 Propriedade do Seu Conteúdo
                        </h3>
                        <p>
                          Mantém todos os direitos de propriedade sobre os
                          ficheiros Excel e dados de horários que carrega para o
                          ShiftSync. Não reivindicamos qualquer propriedade
                          sobre o seu conteúdo.
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mt-6">
                          7.2 Licença para Processar o Seu Conteúdo
                        </h3>
                        <p>
                          Ao carregar ficheiros para o ShiftSync, concede-nos
                          uma licença limitada para processar, armazenar
                          temporariamente e sincronizar os dados do seu horário
                          com o Google Calendar exclusivamente para o propósito
                          de fornecer o Serviço.
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mt-6">
                          7.3 Responsabilidade pelo Conteúdo
                        </h3>
                        <p>É o único responsável por:</p>
                        <ul className="space-y-2 list-none pl-0 my-4">
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              A precisão e legalidade do conteúdo que carrega
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Garantir que tem o direito de carregar e
                              sincronizar os dados do horário
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Manter backups dos seus ficheiros Excel originais
                            </span>
                          </li>
                        </ul>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-6">
                          <p className="font-semibold text-amber-900 mb-2">
                            Processamento de Dados
                          </p>
                          <p className="text-sm text-amber-800">
                            Os ficheiros Excel carregados são processados em
                            memória e não armazenados permanentemente nos nossos
                            servidores. Apenas metadados de sincronização
                            (última sincronização, preferências) são retidos.
                            Consulte a nossa Política de Privacidade para mais
                            detalhes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="disclaimers" className="scroll-mt-24">
                    <div className="accent-border pl-6">
                      <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        8. Isenções de Responsabilidade e Garantias
                      </h2>
                      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                        <div className="bg-slate-100 border-2 border-slate-300 rounded-xl p-8 my-6">
                          <h3 className="text-xl font-bold text-slate-900 mb-4">
                            SERVIÇO "TAL COMO ESTÁ"
                          </h3>
                          <p className="text-slate-700 uppercase font-semibold mb-4">
                            O SHIFTSYNC É FORNECIDO NUMA BASE "TAL COMO ESTÁ" E
                            "CONFORME DISPONÍVEL" SEM GARANTIAS DE QUALQUER
                            TIPO, EXPRESSAS OU IMPLÍCITAS.
                          </p>
                          <p className="text-sm text-slate-700">
                            Na máxima extensão permitida por lei, renunciamos a
                            todas as garantias, incluindo mas não limitado a:
                          </p>
                          <ul className="space-y-2 list-none pl-0 mt-4">
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Garantias implícitas de comercialização,
                                adequação a um propósito particular e não
                                violação
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Garantias de que o Serviço será ininterrupto,
                                livre de erros ou seguro
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Garantias quanto à precisão, fiabilidade ou
                                integridade dos resultados
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Garantias de que defeitos serão corrigidos
                              </span>
                            </li>
                          </ul>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mt-6">
                          Serviços de Terceiros
                        </h3>
                        <p>
                          O ShiftSync integra-se com o Google Calendar, um
                          serviço de terceiros. Não somos responsáveis por:
                        </p>
                        <ul className="space-y-2 list-none pl-0 my-4">
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Políticas da Google, termos de serviço ou práticas
                              de privacidade
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Disponibilidade, funcionalidade ou alterações à
                              Google Calendar API
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Quaisquer questões decorrentes da sua utilização
                              dos serviços Google
                            </span>
                          </li>
                        </ul>

                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-6">
                          <p className="font-semibold text-red-900 mb-2">
                            Nenhum Conselho Profissional
                          </p>
                          <p className="text-sm text-red-800">
                            O ShiftSync é uma ferramenta de produtividade e não
                            fornece conselhos profissionais, legais ou de
                            emprego. É responsável por garantir a conformidade
                            com o seu contrato de trabalho e leis laborais
                            aplicáveis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="limitation" className="scroll-mt-24">
                    <div className="accent-border pl-6">
                      <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        9. Limitação de Responsabilidade
                      </h2>
                      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                        <div className="bg-red-100 border-2 border-red-300 rounded-xl p-8 my-6">
                          <p className="text-red-900 uppercase font-bold mb-4">
                            NA MÁXIMA EXTENSÃO PERMITIDA PELA LEI APLICÁVEL:
                          </p>
                          <p className="text-sm text-red-900">
                            A Autisync e os seus administradores, diretores,
                            empregados, agentes e afiliados não serão
                            responsáveis por quaisquer danos indiretos,
                            incidentais, especiais, consequenciais ou punitivos,
                            incluindo mas não limitado a:
                          </p>
                          <ul className="space-y-2 list-none pl-0 mt-4">
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Perda de lucros, receitas, dados ou uso
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Interrupção de negócios ou oportunidades
                                perdidas
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>Lesões pessoais ou angústia emocional</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Erros ou imprecisões na sincronização de
                                horários
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Acesso não autorizado aos seus dados ou
                                alteração dos mesmos
                              </span>
                            </li>
                          </ul>
                          <p className="text-sm text-red-900 mt-4">
                            Esta limitação aplica-se independentemente da teoria
                            legal (contrato, ato ilícito, negligência,
                            responsabilidade objetiva ou outra) e mesmo que
                            tenhamos sido avisados da possibilidade de tais
                            danos.
                          </p>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mt-6">
                          Limite Máximo de Responsabilidade
                        </h3>
                        <p>
                          Em nenhum caso a nossa responsabilidade total agregada
                          para consigo excederá o montante que pagou para
                          utilizar o ShiftSync nos 12 meses anteriores à
                          reclamação, ou €100 (o que for maior).
                        </p>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl my-6">
                          <p className="font-semibold text-blue-900 mb-2">
                            Variações Jurisdicionais
                          </p>
                          <p className="text-sm text-blue-800">
                            Algumas jurisdições não permitem a exclusão ou
                            limitação de certos danos. Nessas jurisdições, a
                            nossa responsabilidade é limitada na máxima extensão
                            permitida por lei.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="indemnification" className="scroll-mt-24">
                    <div className="accent-border pl-6">
                      <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        10. Indemnização
                      </h2>
                      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                        <p>
                          Concorda em indemnizar, defender e isentar de
                          responsabilidade a Autisync, os seus administradores,
                          diretores, empregados, agentes, licenciadores e
                          fornecedores de e contra todas as reclamações, perdas,
                          responsabilidades, despesas, danos e custos, incluindo
                          honorários razoáveis de advogados, decorrentes de ou
                          relacionados com:
                        </p>
                        <div className="bg-white border border-slate-200 rounded-xl p-6 my-6">
                          <ul className="space-y-3 list-none pl-0">
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                A sua utilização ou uso indevido do Serviço
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                              <span>A sua violação destes Termos</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                A sua violação de quaisquer direitos de um
                                terceiro
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                              <span>Conteúdo que carrega para o Serviço</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                A sua violação de quaisquer leis ou regulamentos
                                aplicáveis
                              </span>
                            </li>
                          </ul>
                        </div>
                        <p>
                          Esta obrigação de indemnização sobreviverá à rescisão
                          destes Termos e à sua utilização do Serviço.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="termination" className="scroll-mt-24">
                    <div className="accent-border pl-6">
                      <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        11. Rescisão e Suspensão
                      </h2>
                      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                        <h3 className="text-xl font-bold text-slate-900 mt-6">
                          11.1 Rescisão por Si
                        </h3>
                        <p>
                          Pode rescindir a sua utilização do ShiftSync a
                          qualquer momento através de:
                        </p>
                        <ul className="space-y-2 list-none pl-0 my-4">
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Desconectar a sua conta Google do Serviço
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Eliminar a sua conta através das definições de
                              conta
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>Cessar toda a utilização do Serviço</span>
                          </li>
                        </ul>

                        <h3 className="text-xl font-bold text-slate-900 mt-6">
                          11.2 Rescisão por Nós
                        </h3>
                        <p>
                          Reservamos o direito de suspender ou rescindir o seu
                          acesso ao ShiftSync a qualquer momento, com ou sem
                          aviso prévio, por qualquer motivo, incluindo mas não
                          limitado a:
                        </p>
                        <div className="bg-white border border-slate-200 rounded-xl p-6 my-6">
                          <ul className="space-y-3 list-none pl-0">
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Violação destes Termos ou Política de Uso
                                Aceitável
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Atividade fraudulenta, abusiva ou ilegal
                                suspeita
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Períodos prolongados de inatividade (90+ dias)
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Pedidos das autoridades policiais ou reguladoras
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>Descontinuação do Serviço</span>
                            </li>
                          </ul>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mt-6">
                          11.3 Efeito da Rescisão
                        </h3>
                        <p>Após rescisão:</p>
                        <ul className="space-y-2 list-none pl-0 my-4">
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              O seu direito de aceder e utilizar o Serviço cessa
                              imediatamente
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Iremos eliminar os dados da sua conta de acordo
                              com a nossa Política de Privacidade
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Eventos de calendário previamente sincronizados
                              permanecerão no seu Google Calendar
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold/70 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Secções destes Termos que por sua natureza devam
                              sobreviver continuarão a aplicar-se
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section id="governing-law" className="scroll-mt-24">
                    <div className="accent-border pl-6">
                      <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        12. Lei Aplicável e Resolução de Litígios
                      </h2>
                      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                        <h3 className="text-xl font-bold text-slate-900 mt-6">
                          12.1 Lei Aplicável
                        </h3>
                        <p>
                          Estes Termos serão regidos e interpretados de acordo
                          com as leis de Angola, sem consideração aos seus
                          conflitos de disposições legais.
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mt-6">
                          12.2 Jurisdição
                        </h3>
                        <p>
                          Concorda que qualquer ação legal ou processo
                          decorrente de ou relacionado com estes Termos ou a sua
                          utilização do ShiftSync será apresentado
                          exclusivamente nos tribunais localizados em Luanda,
                          Angola. Consente na jurisdição pessoal desses
                          tribunais.
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mt-6">
                          12.3 Direitos dos Utilizadores da UE
                        </h3>
                        <p>
                          Se for um consumidor residente na União Europeia,
                          mantém o benefício das disposições obrigatórias da lei
                          de proteção do consumidor no seu país de residência, e
                          nada nestes Termos afeta os seus direitos como
                          consumidor ao abrigo da lei da UE.
                        </p>

                        <div className="bg-autisync-gold/10 border-l-4 border-autisync-gold/70 p-6 rounded-r-xl my-6">
                          <p className="font-semibold text-autisync-gold mb-2">
                            Processo de Resolução de Litígios
                          </p>
                          <p className="text-sm text-autisync-black/90">
                            Antes de iniciar quaisquer processos legais,
                            encorajamos-o a contactar-nos em{" "}
                            <a
                              href="mailto:support@autisync.com"
                              className="underline"
                            >
                              support@autisync.com
                            </a>{" "}
                            para tentar resolver o litígio informalmente.
                            Estamos comprometidos em trabalhar com os
                            utilizadores para resolver preocupações de boa fé.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="mt-16 space-y-8">
                    <div className="bg-white border border-slate-200 rounded-2xl p-8">
                      <h2 className="text-2xl font-bold text-slate-900 mb-4">
                        13. Disposições Diversas
                      </h2>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 mb-2">
                            13.1 Acordo Integral
                          </h3>
                          <p className="text-slate-700">
                            Estes Termos, juntamente com a nossa Política de
                            Privacidade e Política de Cookies, constituem o
                            acordo integral entre si e a Autisync relativamente
                            ao Serviço.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-slate-900 mb-2">
                            13.2 Divisibilidade
                          </h3>
                          <p className="text-slate-700">
                            Se qualquer disposição destes Termos for considerada
                            inválida ou inexequível, as disposições restantes
                            permanecerão em pleno vigor e efeito.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-slate-900 mb-2">
                            13.3 Renúncia
                          </h3>
                          <p className="text-slate-700">
                            A nossa falha em fazer cumprir qualquer direito ou
                            disposição de estes Termos não constituirá uma
                            renúncia a esse direito ou disposição.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-slate-900 mb-2">
                            13.4 Cessão
                          </h3>
                          <p className="text-slate-700">
                            Não pode ceder ou transferir estes Termos sem o
                            nosso consentimento prévio por escrito. Podemos
                            ceder estes Termos sem restrições.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-slate-900 mb-2">
                            13.5 Força Maior
                          </h3>
                          <p className="text-slate-700">
                            Não seremos responsáveis por qualquer atraso ou
                            falha no desempenho resultante de causas fora do
                            nosso controlo razoável, incluindo mas não limitado
                            a atos de Deus, guerra, terrorismo, desastres
                            naturais ou falhas de fornecedores de serviços de
                            internet.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-slate-900 mb-2">
                            13.6 Modificações ao Serviço
                          </h3>
                          <p className="text-slate-700">
                            Reservamos o direito de modificar, suspender ou
                            descontinuar qualquer aspecto do Serviço a qualquer
                            momento, com ou sem aviso prévio. Não seremos
                            responsáveis perante si ou qualquer terceiro por
                            qualquer modificação, suspensão ou descontinuação.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-autisync-gold/10 to-autisync-goldsoft border-2 border-autisync-gold/20 rounded-2xl p-8">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-autisync-gold/30 to-autisync-gold/90 rounded-2xl flex items-center justify-center flex-shrink-0">
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
                          <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            Questões Sobre Estes Termos?
                          </h2>
                          <p className="text-slate-700 mb-4">
                            Se tiver alguma questão, preocupação ou necessitar
                            de esclarecimentos relativamente a estes Termos de
                            Serviço, por favor contacte-nos:
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <svg
                                className="w-5 h-5 text-autisync-gold"
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
                                className="text-autisync-gold/70 hover:text-autisync-gold font-semibold underline"
                              >
                                support@autisync.com
                              </a>
                            </div>
                            <div className="flex items-start gap-3">
                              <svg
                                className="w-5 h-5 text-autisync-gold mt-0.5"
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
                                <p className="text-slate-900 font-medium">
                                  Autisync
                                </p>
                                <p className="text-slate-700">Luanda, Angola</p>
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
                  <strong>Importante:</strong> Ao utilizar o Excel Shift Sync,
                  reconhece que leu, compreendeu e concorda em ficar vinculado
                  por estes Termos de Serviço.
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
