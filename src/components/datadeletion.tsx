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
            Voltar
          </Button>

          <Card className="shadow-2xl border-0">
            <CardHeader className="space-y-2 p-6 sm:p-8">
              <div className="mb-6">
                <div className="inline-block px-4 py-2 bg-autisync-black text-autisync-gold rounded-full text-sm font-medium mb-6">
                  Última Atualização: 11 de Fevereiro de 2026
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  Eliminar os Seus Dados
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Tem o direito de eliminar todos os seus dados pessoais do
                  <strong> ShiftSync</strong> a qualquer momento. Esta página
                  explica como exercer o seu direito ao esquecimento ao abrigo
                  do RGPD (Artigo 17).
                </p>
              </div>
            </CardHeader>

            <CardContent className="p-6 sm:p-8 space-y-10 text-slate-700">
              {/* What gets deleted */}
              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  O que é Eliminado
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Endereço de email da conta Google e dados de perfil</li>
                  <li>Tokens de acesso e atualização OAuth</li>
                  <li>Preferências de conta e definições de sincronização</li>
                  <li>Dados de sessão e metadados de autenticação</li>
                  <li>
                    Registos temporários e metadados de sincronização (≤ 30
                    dias)
                  </li>
                </ul>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-4">
                  <p className="text-sm text-blue-900">
                    <strong>Importante:</strong> Os ficheiros Excel carregados
                    nunca são armazenados nos nossos servidores. São processados
                    apenas em memória.
                  </p>
                </div>
              </section>

              {/* Calendar clarification */}
              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  Eventos do Google Calendar
                </h2>
                <p className="leading-relaxed mb-3">
                  Eliminar a sua conta ShiftSync <strong>não</strong> remove
                  automaticamente os eventos do seu Google Calendar.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Eventos previamente sincronizados permanecem no Google
                    Calendar
                  </li>
                  <li>Mantém a propriedade e controlo total desses eventos</li>
                  <li>
                    Eventos criados pelo ShiftSync são identificáveis nos
                    metadados
                  </li>
                </ul>
              </section>

              {/* Deletion timeline */}
              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  Cronograma de Eliminação
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Imediato:</strong> Acesso à conta revogado e tokens
                    invalidados
                  </li>
                  <li>
                    <strong>Dentro de 24 horas:</strong> Dados da conta
                    removidos dos sistemas de produção
                  </li>
                  <li>
                    <strong>Dentro de 30 dias:</strong> Dados removidos dos
                    backups e eliminados permanentemente
                  </li>
                </ul>
              </section>

              {/* How to delete */}
              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  Como Solicitar a Eliminação
                </h2>

                <h3 className="font-semibold mt-4 mb-2">
                  Opção 1: Autosserviço (Recomendado)
                </h3>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Inicie sessão na sua conta ShiftSync</li>
                  <li>Vá a Definições → Conta → Eliminar Conta</li>
                  <li>Reveja o resumo da eliminação</li>
                  <li>Confirme a eliminação permanente</li>
                </ol>

                <h3 className="font-semibold mt-6 mb-2">
                  Opção 2: Pedido por Email
                </h3>
                <p className="leading-relaxed">
                  Se não conseguir aceder à sua conta, envie-nos um email para{" "}
                  <a
                    href="mailto:support@autisync.com"
                    className="text-autisync-gold hover:underline font-medium"
                  >
                    support@autisync.com
                  </a>{" "}
                  com o assunto:
                </p>
                <p className="mt-2 italic text-sm">
                  "Pedido de Eliminação de Dados – ShiftSync"
                </p>
              </section>

              {/* Warning */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-sm text-red-900">
                  <strong>Aviso:</strong> A eliminação de dados é permanente e
                  irreversível. Por favor, exporte qualquer informação de que
                  necessite antes de prosseguir.
                </p>
              </div>

              {/* Compliance */}
              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  Conformidade com o RGPD
                </h2>
                <p className="leading-relaxed">
                  Este processo está totalmente em conformidade com o Artigo 17
                  do RGPD (Direito ao Esquecimento). Nenhum dado pessoal
                  identificável é retido após a conclusão do processo de
                  eliminação.
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
