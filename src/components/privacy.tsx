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
            Voltar
          </Button>

          <Card className="shadow-2xl border-0">
            <CardContent className="p-6 sm:p-8 space-y-6 text-autisync-black/60">
              {/* Main */}

              <main className="max-w-4xl mx-auto px-6 py-16">
                {/* Hero */}
                <section className="mb-16">
                  <div className="inline-block px-4 py-2 bg-autisync-gold/10 text-autisync-gold rounded-full text-sm font-medium mb-6">
                    Última Atualização: 23 de Junho de 2025
                  </div>

                  <h1 className="text-5xl md:text-6xl font-bold text-autisync-black mb-6 leading-tight">
                    Política de Privacidade
                  </h1>

                  <p className="text-xl text-slate-600 leading-relaxed">
                    A sua privacidade é importante para nós. Esta política
                    explica como o ShiftSync recolhe, utiliza e protege a sua
                    informação pessoal em conformidade com o RGPD e os padrões
                    internacionais de proteção de dados.
                  </p>
                </section>
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-24 mb-6">
                  <div className="accent-border pl-6">
                    <h2 className="text-3xl font-bold text-autisync-black mb-4">
                      1. Introdução
                    </h2>

                    <div className="prose prose-slate max-w-none text-autisync-black/60">
                      <p>
                        Bem-vindo ao ShiftSync, um serviço prestado pela
                        Autisync. O ShiftSync ajuda a sincronizar horários de
                        trabalho do Excel para o Google Calendar.
                      </p>
                      <p>
                        Ao utilizar o ShiftSync, concorda com a recolha e
                        utilização de informação de acordo com esta política.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="data-controller" className="scroll-mt-24 mb-6">
                  <div className="accent-border pl-6">
                    <h2 className="text-3xl font-bold text-autisync-black mb-4">
                      2. Responsável pelo Tratamento de Dados
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
                      A Autisync é o responsável pelo tratamento responsável
                      pela sua informação pessoal. Se tiver alguma questão ou
                      preocupação sobre como tratamos os seus dados, por favor
                      contacte-nos utilizando a informação acima.
                    </p>
                  </div>
                </section>

                <section id="data-collection" className="scroll-mt-24 mb-6">
                  <div className="accent-border pl-6">
                    <h2 className="text-3xl font-bold text-autisync-black mb-4">
                      3. Dados que Recolhemos
                    </h2>
                    <div className="prose prose-slate max-w-none text-autisync-black/60 leading-relaxed space-y-4">
                      <p>
                        Recolhemos e processamos apenas os dados mínimos
                        necessários para fornecer o nosso serviço:
                      </p>

                      <div className="bg-white border border-autisync-gold/30 rounded-xl p-6 my-6">
                        <h3 className="text-xl font-bold text-autisync-black mb-4">
                          3.1 Dados de Autenticação
                        </h3>
                        <ul className="space-y-2 list-none pl-0">
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Endereço de email da conta Google (utilizado para
                              autenticação)
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Informações do perfil Google (nome, foto de perfil
                              se disponível)
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Tokens de acesso e atualização OAuth (encriptados)
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white border border-autisync-gold/30 rounded-xl p-6 my-6">
                        <h3 className="text-xl font-bold text-autisync-black mb-4">
                          3.2 Dados de Horários
                        </h3>
                        <ul className="space-y-2 list-none pl-0">
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Ficheiros Excel que carrega (processados em
                              memória, não armazenados permanentemente)
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Informação de turnos extraída dos seus horários
                              (datas, horas, tipos de turno)
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>Última data de sincronização</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white border border-autisync-gold/30 rounded-xl p-6 my-6">
                        <h3 className="text-xl font-bold text-autisync-black mb-4">
                          3.3 Dados de Preferências
                        </h3>
                        <ul className="space-y-2 list-none pl-0">
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>ID do Google Calendar selecionado</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Preferência de fuso horário (padrão:
                              Europa/Lisboa)
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Preferências de tratamento de tipos de turno (como
                              tratar OFF, FÉR, LOA)
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white border border-autisync-gold/30 rounded-xl p-6 my-6">
                        <h3 className="text-xl font-bold text-autisync-black mb-4">
                          3.4 Dados Técnicos
                        </h3>
                        <ul className="space-y-2 list-none pl-0">
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Endereço IP (para segurança e prevenção de fraude)
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>Tipo e versão do navegador</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Informações do dispositivo (sistema operativo,
                              resolução do ecrã)
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Registos de erros (anonimizados, não contendo
                              informação pessoal)
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
                      4. Como Utilizamos os Seus Dados
                    </h2>
                    <div className="prose prose-slate max-w-none text-autisync-black/60 leading-relaxed space-y-4">
                      <p>
                        Utilizamos a sua informação pessoal exclusivamente para
                        os seguintes fins:
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
                            Prestação de Serviço
                          </h3>
                          <p className="text-sm text-autisync-black/60">
                            Autenticá-lo via Google OAuth e sincronizar os seus
                            turnos de trabalho com o Google Calendar
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
                            Gestão de Preferências
                          </h3>
                          <p className="text-sm text-autisync-black/60">
                            Lembrar a sua seleção de calendário, fuso horário e
                            preferências de sincronização
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
                            Segurança e Prevenção de Fraude
                          </h3>
                          <p className="text-sm text-autisync-black/60">
                            Detetar e prevenir acesso não autorizado e
                            potenciais ameaças de segurança
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
                            Melhoria do Serviço
                          </h3>
                          <p className="text-sm text-autisync-black/60">
                            Melhorar o nosso serviço através de registo de erros
                            anonimizado e monitorização de desempenho
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
                              Nota Importante
                            </p>
                            <p className="text-sm text-amber-800">
                              NÃO utilizamos os seus dados para marketing,
                              publicidade, ou qualquer fim não relacionado com a
                              prestação do serviço ShiftSync. NÃO vendemos ou
                              alugamos a sua informação pessoal a terceiros.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section
                  id="google-api-compliance"
                  className="scroll-mt-24 mb-6"
                >
                  <div className="accent-border pl-6">
                    <h2 className="text-3xl font-bold text-autisync-black mb-4">
                      5. Conformidade com a Política de Dados do Utilizador dos
                      Serviços Google API
                    </h2>
                    <div className="prose prose-slate max-w-none text-autisync-black/60 leading-relaxed space-y-4">
                      <p>
                        A utilização do ShiftSync e a transferência para
                        qualquer outra aplicação de informação recebida das APIs
                        Google irá respeitar a{" "}
                        <a
                          href="https://developers.google.com/terms/api-services-user-data-policy "
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-autisync-gold/80 hover:text-autisync-gold underline font-medium"
                        >
                          Política de Dados do Utilizador dos Serviços Google
                          API
                        </a>
                        , incluindo os requisitos de Utilização Limitada.
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
                              Como o ShiftSync Utiliza os Dados Google
                            </p>
                            <p className="text-sm text-blue-800">
                              O ShiftSync utiliza o Google OAuth e a Google
                              Calendar API para criar eventos de calendário em
                              nome do utilizador. Não armazenamos dados do
                              Google Calendar nos nossos servidores. Os tokens
                              de acesso são armazenados localmente no navegador
                              do utilizador e não são partilhados com terceiros.
                              O ShiftSync não utiliza dados do utilizador Google
                              para publicidade.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 my-6">
                        <div className="bg-white border border-autisync-gold/30 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-autisync-black mb-3">
                            Divulgação de Utilização Limitada
                          </h3>
                          <ul className="space-y-2 list-none pl-0">
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Apenas solicitamos os âmbitos OAuth mínimos
                                necessários para fornecer o nosso serviço
                                (gestão de eventos de calendário)
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Não utilizamos dados do utilizador Google para
                                servir anúncios
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Não vendemos ou transferimos dados do utilizador
                                Google para terceiros
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Não utilizamos dados do utilizador Google para
                                fins não relacionados com a prestação ou
                                melhoria das funcionalidades de sincronização de
                                calendário do ShiftSync
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Os utilizadores podem revogar o acesso do
                                ShiftSync a qualquer momento através das{" "}
                                <a
                                  href="https://myaccount.google.com/permissions "
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-autisync-gold/80 hover:text-autisync-gold underline"
                                >
                                  Permissões da Conta Google
                                </a>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-white border border-autisync-gold/30 rounded-xl p-6 my-6">
                        <h3 className="text-lg font-bold text-autisync-black mb-3">
                          Âmbitos Google OAuth Utilizados
                        </h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center pb-3 border-b border-autisync-gold/30">
                            <span className="text-autisync-black font-mono text-sm">
                              openid
                            </span>
                            <span className="text-autisync-black/60 text-sm">
                              Autenticação do utilizador
                            </span>
                          </div>
                          <div className="flex justify-between items-center pb-3 border-b border-autisync-gold/30">
                            <span className="text-autisync-black font-mono text-sm">
                              email
                            </span>
                            <span className="text-autisync-black/60 text-sm">
                              Mostrar o seu email
                            </span>
                          </div>
                          <div className="flex justify-between items-center pb-3 border-b border-autisync-gold/30">
                            <span className="text-autisync-black font-mono text-sm">
                              profile
                            </span>
                            <span className="text-autisync-black/60 text-sm">
                              Mostrar o seu nome e foto
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-autisync-black font-mono text-sm">
                              calendar.events
                            </span>
                            <span className="text-autisync-black/60 text-sm">
                              Criar e gerir eventos de turnos
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
                      6. Base Legal para o Tratamento (RGPD)
                    </h2>
                    <div className="prose prose-slate max-w-none text-autisync-black/60 leading-relaxed space-y-4">
                      <p>
                        Ao abrigo do RGPD, processamos os seus dados pessoais
                        com base nos seguintes fundamentos legais:
                      </p>

                      <div className="space-y-4 my-6">
                        <div className="bg-white border-l-4 border-red-500 rounded-r-xl p-6">
                          <h3 className="text-lg font-bold text-autisync-black mb-2">
                            Consentimento (Artigo 6(1)(a) RGPD)
                          </h3>
                          <p className="text-autisync-black/60">
                            O utilizador fornece consentimento explícito quando
                            autoriza o ShiftSync a aceder ao seu Google Calendar
                            através da autenticação OAuth 2.0.
                          </p>
                        </div>

                        <div className="bg-white border-l-4 border-purple-500 rounded-r-xl p-6">
                          <h3 className="text-lg font-bold text-autisync-black mb-2">
                            Execução de Contrato (Artigo 6(1)(b) RGPD)
                          </h3>
                          <p className="text-autisync-black/60">
                            O tratamento é necessário para fornecer o serviço de
                            sincronização de calendário que solicitou.
                          </p>
                        </div>

                        <div className="bg-white border-l-4 border-indigo-500 rounded-r-xl p-6">
                          <h3 className="text-lg font-bold text-autisync-black mb-2">
                            Interesses Legítimos (Artigo 6(1)(f) RGPD)
                          </h3>
                          <p className="text-autisync-black/60">
                            Temos um interesse legítimo em prevenir fraude,
                            garantir segurança e melhorar a qualidade do nosso
                            serviço.
                          </p>
                        </div>
                      </div>

                      <p className="font-medium text-autisync-black">
                        Tem o direito de retirar o seu consentimento a qualquer
                        momento desconectando a sua conta Google do ShiftSync ou
                        eliminando a sua conta completamente.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="data-sharing" className="scroll-mt-24 mb-6">
                  <div className="accent-border pl-6">
                    <h2 className="text-3xl font-bold text-autisync-black mb-4">
                      7. Partilha de Dados e Terceiros
                    </h2>
                    <div className="prose prose-slate max-w-none text-autisync-black/60 leading-relaxed space-y-4">
                      <p>
                        Estamos comprometidos com a minimização de dados e
                        privacidade. Eis como tratamos a partilha de dados:
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
                              Zero Partilha de Dados com Terceiros
                            </p>
                            <p className="text-sm text-emerald-800">
                              NÃO partilhamos, vendemos, alugamos ou
                              comercializamos a sua informação pessoal com
                              quaisquer terceiros para fins de marketing ou
                              comerciais.
                            </p>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-autisync-black mt-6 mb-3">
                        Prestadores de Serviço Limitados
                      </h3>
                      <p>
                        Apenas partilhamos dados com prestadores de serviço
                        essenciais que nos ajudam a operar o ShiftSync:
                      </p>

                      <div className="bg-white border border-autisync-gold/30 rounded-xl p-6 my-4">
                        <h4 className="font-bold text-autisync-black mb-3">
                          Google LLC
                        </h4>
                        <ul className="space-y-2 list-none pl-0">
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              <strong>Finalidade:</strong> Autenticação OAuth e
                              acesso à Google Calendar API
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              <strong>Dados Partilhados:</strong> Informação da
                              conta Google, eventos de calendário
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              <strong>Política de Privacidade:</strong>{" "}
                              <a
                                href="https://policies.google.com/privacy "
                                className="text-autisync-gold/80 hover:text-autisync-gold underline"
                              >
                                Política de Privacidade Google
                              </a>
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white border border-autisync-gold/30 rounded-xl p-6 my-4">
                        <h4 className="font-bold text-autisync-black mb-3">
                          Vercel Inc. (Alojamento) & Cloudflare Inc. (CDN/DNS)
                        </h4>
                        <ul className="space-y-2 list-none pl-0">
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              <strong>Finalidade:</strong> Alojamento seguro,
                              entrega de conteúdo e gestão de DNS
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              <strong>Dados Partilhados:</strong> Metadados de
                              pedidos HTTP (endereço IP, user agent), tokens de
                              autenticação encriptados, preferências do
                              utilizador
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              <strong>Localização:</strong> Rede global de edge
                              com acordos de tratamento de dados conforme o RGPD
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              <strong>Políticas de Privacidade:</strong>{" "}
                              <a
                                href="https://vercel.com/legal/privacy-policy "
                                className="text-autisync-gold/80 hover:text-autisync-gold underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Política de Privacidade Vercel
                              </a>
                              {" | "}
                              <a
                                href="https://www.cloudflare.com/privacypolicy/ "
                                className="text-autisync-gold/80 hover:text-autisync-gold underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Política de Privacidade Cloudflare
                              </a>
                            </span>
                          </li>
                        </ul>
                      </div>

                      <h3 className="text-xl font-bold text-autisync-black mt-6 mb-3">
                        Obrigações Legais
                      </h3>
                      <p>
                        Podemos divulgar a sua informação apenas quando exigido
                        por lei, como por exemplo:
                      </p>
                      <ul className="space-y-2 list-none pl-0 mt-3">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                          <span>
                            Em resposta a processos legais válidos (ordens
                            judiciais, intimações)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                          <span>
                            Para proteger os nossos direitos legais ou defender
                            contra ações legais
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                          <span>
                            Para prevenir danos a indivíduos ou propriedade
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="data-retention" className="scroll-mt-24 mb-6">
                  <div className="accent-border pl-6">
                    <h2 className="text-3xl font-bold text-autisync-black mb-4">
                      8. Retenção de Dados
                    </h2>
                    <div className="prose prose-slate max-w-none text-autisync-black/60 leading-relaxed space-y-4">
                      <p>
                        Retemos a sua informação pessoal apenas pelo tempo
                        necessário para fornecer o nosso serviço:
                      </p>

                      <div className="grid md:grid-cols-3 gap-4 my-6">
                        <div className="bg-white border border-autisync-gold/30 rounded-xl p-6">
                          <div className="text-3xl font-bold text-autisync-black mb-2">
                            Conta Ativa
                          </div>
                          <p className="text-sm text-autisync-black/60">
                            Dados retidos enquanto a sua conta estiver ativa e
                            em utilização
                          </p>
                        </div>

                        <div className="bg-white border border-autisync-gold/30 rounded-xl p-6">
                          <div className="text-3xl font-bold text-autisync-black mb-2">
                            90 Dias
                          </div>
                          <p className="text-sm text-autisync-black/60">
                            Contas inativas automaticamente eliminadas após 90
                            dias sem atividade
                          </p>
                        </div>

                        <div className="bg-white border border-autisync-gold/30 rounded-xl p-6">
                          <div className="text-3xl font-bold text-autisync-black mb-2">
                            Imediato
                          </div>
                          <p className="text-sm text-autisync-black/60">
                            Dados eliminados imediatamente após pedido de
                            eliminação de conta
                          </p>
                        </div>
                      </div>

                      <div className="bg-white border border-autisync-gold/30 rounded-xl p-6 my-6">
                        <h3 className="text-lg font-bold text-autisync-black mb-3">
                          Períodos de Retenção por Tipo de Dados:
                        </h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center pb-3 border-b border-autisync-gold/30">
                            <span className="text-autisync-black">
                              Tokens de autenticação
                            </span>
                            <span className="text-autisync-gold/80 font-semibold">
                              Até revogação ou eliminação de conta
                            </span>
                          </div>
                          <div className="flex justify-between items-center pb-3 border-b border-autisync-gold/30">
                            <span className="text-autisync-black">
                              Preferências do utilizador
                            </span>
                            <span className="text-autisync-gold/80 font-semibold">
                              Até eliminação de conta
                            </span>
                          </div>
                          <div className="flex justify-between items-center pb-3 border-b border-autisync-gold/30">
                            <span className="text-autisync-black">
                              Ficheiros Excel carregados
                            </span>
                            <span className="text-autisync-gold/80 font-semibold">
                              Não armazenados (processados apenas em memória)
                            </span>
                          </div>
                          <div className="flex justify-between items-center pb-3 border-b border-autisync-gold/30">
                            <span className="text-autisync-black">
                              Registos de erros
                            </span>
                            <span className="text-autisync-gold/80 font-semibold">
                              30 dias (anonimizados)
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-autisync-black">
                              Metadados de histórico de sincronização
                            </span>
                            <span className="text-autisync-gold/80 font-semibold">
                              Até eliminação de conta
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="font-medium text-autisync-black">
                        Após eliminação, alguns dados podem permanecer em
                        sistemas de backup por até 30 dias antes da eliminação
                        permanente. Dados analíticos anonimizados podem ser
                        retidos indefinidamente.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="your-rights" className="scroll-mt-24 mb-6">
                  <div className="accent-border pl-6">
                    <h2 className="text-3xl font-bold text-autisync-black mb-4">
                      9. Os Seus Direitos ao abrigo do RGPD
                    </h2>
                    <div className="prose prose-slate max-w-none text-autisync-black/60 leading-relaxed space-y-4">
                      <p>
                        Como titular dos dados ao abrigo do RGPD, tem os
                        seguintes direitos:
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
                              Direito de Acesso
                            </h3>
                          </div>
                          <p className="text-sm text-autisync-black/60">
                            Solicitar uma cópia de todos os dados pessoais que
                            detemos sobre si
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
                              Direito de Retificação
                            </h3>
                          </div>
                          <p className="text-sm text-autisync-black/60">
                            Corrigir informação pessoal inexata ou incompleta
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
                              Direito ao Esquecimento
                            </h3>
                          </div>
                          <p className="text-sm text-autisync-black/60">
                            Solicitar a eliminação dos seus dados pessoais
                            ("direito a ser esquecido")
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
                              Direito à Limitação do Tratamento
                            </h3>
                          </div>
                          <p className="text-sm text-autisync-black/60">
                            Limitar como processamos os seus dados em
                            determinadas circunstâncias
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
                              Direito à Portabilidade de Dados
                            </h3>
                          </div>
                          <p className="text-sm text-autisync-black/60">
                            Receber os seus dados num formato estruturado e
                            legível por máquina
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
                              Direito de Oposição
                            </h3>
                          </div>
                          <p className="text-sm text-autisync-black/60">
                            Opor-se ao tratamento baseado em interesses
                            legítimos
                          </p>
                        </div>
                      </div>

                      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-6">
                        <h3 className="text-lg font-bold text-autisync-black mb-3">
                          Como Exercer os Seus Direitos
                        </h3>
                        <p className="text-autisync-black/60 mb-3">
                          Para exercer qualquer destes direitos, por favor
                          contacte-nos em:
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
                          Responderemos ao seu pedido no prazo de 30 dias
                          conforme exigido pelo RGPD.
                        </p>
                      </div>

                      <div className="bg-slate-100 border border-slate-300 rounded-xl p-6 my-6">
                        <h3 className="text-lg font-bold text-autisync-black mb-3">
                          Direito de Apresentar Reclamação
                        </h3>
                        <p className="text-autisync-black/60">
                          Se acredita que não tratámos os seus dados pessoais
                          adequadamente, tem o direito de apresentar uma
                          reclamação junto da autoridade de proteção de dados
                          local ou junto da autoridade de supervisão angolana de
                          proteção de dados.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="security" className="scroll-mt-24 mb-6">
                  <div className="accent-border pl-6">
                    <h2 className="text-3xl font-bold text-autisync-black mb-4">
                      10. Medidas de Segurança
                    </h2>
                    <div className="prose prose-slate max-w-none text-autisync-black/60 leading-relaxed space-y-4">
                      <p>
                        Implementamos medidas de segurança de nível industrial
                        para proteger a sua informação pessoal:
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
                              Encriptação em Repouso
                            </h3>
                          </div>
                          <p className="text-sm text-autisync-black/60">
                            Todos os dados sensíveis, incluindo tokens OAuth,
                            são encriptados utilizando encriptação AES-256
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
                              HTTPS em Todo o Lado
                            </h3>
                          </div>
                          <p className="text-sm text-autisync-black/60">
                            Todos os dados transmitidos entre o seu navegador e
                            os nossos servidores utilizam encriptação TLS 1.3
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
                            Protocolo de autenticação de nível industrial, sem
                            palavras-passe armazenadas nos nossos servidores
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
                              Infraestrutura Segura
                            </h3>
                          </div>
                          <p className="text-sm text-autisync-black/60">
                            Alojado em servidores conforme a UE com auditorias
                            de segurança e atualizações regulares
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
                              Controlos de Acesso
                            </h3>
                          </div>
                          <p className="text-sm text-autisync-black/60">
                            Políticas internas rigorosas de acesso, registo e
                            monitorização de todo o acesso a dados
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
                              Backups Regulares
                            </h3>
                          </div>
                          <p className="text-sm text-autisync-black/60">
                            Backups encriptados com eliminação segura após 30
                            dias
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
                              Notificação de Violação de Dados
                            </p>
                            <p className="text-sm text-red-800">
                              No improvável caso de uma violação de dados,
                              notificaremos os utilizadores afetados no prazo de
                              72 horas e reportaremos às autoridades de
                              supervisão relevantes conforme exigido pelo RGPD.
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
                      11. Transferências Internacionais de Dados
                    </h2>
                    <div className="prose prose-slate max-w-none text-autisync-black/60 leading-relaxed space-y-4">
                      <p>
                        Os seus dados pessoais são principalmente armazenados e
                        processados dentro da União Europeia para garantir
                        conformidade com o RGPD.
                      </p>

                      <div className="bg-white border border-autisync-gold/30 rounded-xl p-6 my-6">
                        <h3 className="text-lg font-bold text-autisync-black mb-3">
                          Serviços Google (EUA)
                        </h3>
                        <p className="text-autisync-black/60 mb-3">
                          Quando se autentica com o Google OAuth e acede ao
                          Google Calendar, os seus dados são transmitidos para a
                          Google LLC (Estados Unidos). Esta transferência é
                          necessária para fornecer a funcionalidade central do
                          ShiftSync.
                        </p>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                          <p className="text-sm text-blue-900">
                            <strong>Base Legal:</strong> A Google LLC está em
                            conformidade com o Quadro de Privacidade de Dados
                            UE-EUA e implementou Cláusulas Contratuais Tipo
                            (CCT) aprovadas pela Comissão Europeia.
                          </p>
                        </div>
                      </div>

                      <div className="bg-white border border-autisync-gold/30 rounded-xl p-6 my-6">
                        <h3 className="text-lg font-bold text-autisync-black mb-3">
                          Salvaguardas para Transferências Internacionais
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
                              Cláusulas Contratuais Tipo com todos os
                              processadores terceiros
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
                              Encriptação de ponta a ponta para dados em
                              trânsito
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
                              Auditorias de conformidade regulares de
                              processadores terceiros
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
                              Transparência sobre todas as localizações de
                              transferência de dados
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
                      12. Cookies e Tecnologias de Rastreamento
                    </h2>
                    <div className="prose prose-slate max-w-none text-autisync-black/60 leading-relaxed space-y-4">
                      <p>
                        O ShiftSync utiliza cookies mínimos necessários para a
                        funcionalidade. Para informação detalhada, por favor
                        consulte a nossa{" "}
                        <a
                          href="/cookies"
                          className="text-autisync-gold/80 hover:text-autisync-gold underline font-medium"
                        >
                          Política de Cookies
                        </a>
                        .
                      </p>

                      <div className="bg-white border border-autisync-gold/30 rounded-xl overflow-hidden my-6">
                        <div className="bg-gradient-to-r from-autisync-gold/60 to-autisync-black/60 px-6 py-4">
                          <h3 className="text-lg font-bold text-white">
                            Resumo de Cookies
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
                                Cookies Essenciais
                              </h4>
                              <p className="text-sm text-autisync-black/60 mb-2">
                                Necessários para autenticação e gestão de
                                sessão. Não podem ser desativados.
                              </p>
                              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                                Sempre Ativos
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
                                Cookies Analíticos e de Marketing
                              </h4>
                              <p className="text-sm text-autisync-black/60 mb-2">
                                NÃO utilizamos cookies analíticos, publicitários
                                ou de rastreamento.
                              </p>
                              <span className="inline-block px-3 py-1 bg-slate-100 text-autisync-black/80 text-xs rounded-full">
                                Não Utilizados
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
                      13. Informação de Contacto
                    </h2>
                    <div className="prose prose-slate max-w-none text-autisync-black/60 leading-relaxed space-y-4">
                      <p>
                        Se tiver alguma questão, preocupação ou pedido
                        relativamente a esta Política de Privacidade ou às
                        nossas práticas de dados, por favor contacte-nos:
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
                              Gabinete de Proteção de Dados da Autisync
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
                          Tempo de Resposta
                        </h3>
                        <p className="text-sm text-blue-800">
                          Pretendemos responder a todas as questões relacionadas
                          com privacidade no prazo de 5 dias úteis e trataremos
                          completamente o seu pedido no prazo de 30 dias
                          conforme exigido pelo RGPD.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mt-16 bg-slate-100 border border-slate-300 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-autisync-black mb-4">
                    Alterações a Esta Política de Privacidade
                  </h2>
                  <p className="text-autisync-black/60 leading-relaxed mb-4">
                    Podemos atualizar esta Política de Privacidade
                    ocasionalmente para refletir alterações nas nossas práticas,
                    requisitos legais ou melhorias no serviço. Notificá-lo-emos
                    de quaisquer alterações materiais através de:
                  </p>
                  <ul className="space-y-2 list-none pl-0 mb-4">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Publicação da política atualizada nesta página com uma
                        nova data de "Última Atualização"
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Envio de uma notificação por email aos utilizadores
                        registados para alterações significativas
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-autisync-gold rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Exibição de um aviso proeminente no nosso website
                      </span>
                    </li>
                  </ul>
                  <p className="text-autisync-black/60 leading-relaxed">
                    A sua utilização continuada do ShiftSync após alterações a
                    esta política constitui aceitação dos termos atualizados.
                  </p>
                </section>
              </main>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 mt-8">
                <p className="text-sm text-blue-900">
                  <strong>Importante:</strong> Ao utilizar o Excel Shift Sync,
                  reconhece que leu, compreendeu e concorda em ficar vinculado
                  por esta Política de Privacidade.
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
