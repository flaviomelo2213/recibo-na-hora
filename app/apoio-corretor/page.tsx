"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, FileText, CheckSquare, AlertCircle, BookOpen, Building2, CreditCard, Shield, Users, Target, FileSignature, Calculator } from "lucide-react";
import LeadModal from "../components/LeadModal";

export default function ApoioCorretorPage() {
  const [showLeadModal, setShowLeadModal] = useState(false);

  return (
    <main className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-6xl">
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-900 text-white mb-4">
            <Building2 className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Apoio ao Corretor de Imóveis
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Ferramentas, guias e documentos profissionais para otimizar seu dia a dia e fechar mais negócios com segurança.
          </p>
        </header>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-12">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-blue-900 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-blue-900 mb-2">Recursos Gratuitos para Profissionais do Mercado Imobiliário</h3>
              <p className="text-sm text-slate-700">
                Este hub reúne ferramentas e informações essenciais para corretores de imóveis: documentação necessária, critérios de aprovação de crédito, contratos e simuladores financeiros.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <FileSignature className="w-7 h-7 text-blue-900" />
            Ferramentas Essenciais
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/contrato-locacao"
              className="bg-white border-2 border-blue-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <Home className="w-8 h-8 text-blue-900 mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">Contrato de Locação</h3>
              <p className="text-sm text-slate-600 mb-3">
                Modelo completo conforme Lei 8.245/91. Editável e pronto para impressão.
              </p>
              <span className="text-blue-900 font-medium text-sm">Acessar →</span>
            </Link>

            <Link
              href="/ferramentas/imobiliario"
              className="bg-white border-2 border-green-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition-all"
            >
              <FileText className="w-8 h-8 text-green-700 mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">Recibo de Aluguel</h3>
              <p className="text-sm text-slate-600 mb-3">
                Gere recibos de aluguel profissionais com QR Code e assinatura digital.
              </p>
              <span className="text-green-700 font-medium text-sm">Acessar →</span>
            </Link>

            <Link
              href="/educacao-financeira"
              className="bg-white border-2 border-purple-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg transition-all"
            >
              <Calculator className="w-8 h-8 text-purple-700 mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">Simulador de Consórcio</h3>
              <p className="text-sm text-slate-600 mb-3">
                Calculadora de alavancagem para apresentar opções de crédito aos clientes.
              </p>
              <span className="text-purple-700 font-medium text-sm">Acessar →</span>
            </Link>
          </div>
        </section>

        <section className="mb-12 bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <BookOpen className="w-7 h-7 text-amber-700" />
            Guia Rápido: Documentação Imobiliária
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                <CheckSquare className="w-5 h-5" />
                Documentos do Locatário (Inquilino)
              </h3>
              <ul className="space-y-2 text-sm text-slate-700 ml-7">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-700 mt-0.5">•</span>
                  <span>RG e CPF (cópia autenticada ou com o original para conferência)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-700 mt-0.5">•</span>
                  <span>Comprovante de residência atualizado (máximo 90 dias)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-700 mt-0.5">•</span>
                  <span>Comprovante de renda (3 últimos holerites, pró-labore ou imposto de renda)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-700 mt-0.5">•</span>
                  <span>Certidões negativas (federal, estadual e municipal)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-700 mt-0.5">•</span>
                  <span>Referências comerciais e pessoais</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                <CheckSquare className="w-5 h-5" />
                Documentos do Locador (Proprietário)
              </h3>
              <ul className="space-y-2 text-sm text-slate-700 ml-7">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-700 mt-0.5">•</span>
                  <span>RG, CPF e comprovante de residência</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-700 mt-0.5">•</span>
                  <span>Matrícula atualizada do imóvel (Registro de Imóveis)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-700 mt-0.5">•</span>
                  <span>IPTU do ano vigente quitado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-700 mt-0.5">•</span>
                  <span>Certidão Negativa de Débitos do Imóvel (cartório de registro)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-700 mt-0.5">•</span>
                  <span>Se casado: certidão de casamento e autorização do cônjuge</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                <CheckSquare className="w-5 h-5" />
                Documentos do Fiador
              </h3>
              <ul className="space-y-2 text-sm text-slate-700 ml-7">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-700 mt-0.5">•</span>
                  <span>Mesmos documentos pessoais do locatário</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-700 mt-0.5">•</span>
                  <span>Comprovação de renda e patrimônio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-700 mt-0.5">•</span>
                  <span>Matrícula do imóvel que será dado em garantia (se aplicável)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-700 mt-0.5">•</span>
                  <span>Se casado: autorização do cônjuge com firma reconhecida</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <CreditCard className="w-7 h-7 text-blue-900" />
            Critérios de Aprovação de Crédito
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Bancos Tradicionais</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-900 mt-0.5">•</span>
                  <div>
                    <strong>Score de Crédito:</strong> Mínimo 600-700 pontos
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-900 mt-0.5">•</span>
                  <div>
                    <strong>Renda Comprometida:</strong> Máximo 30-35% da renda líquida
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-900 mt-0.5">•</span>
                  <div>
                    <strong>Entrada:</strong> 20-30% do valor do imóvel
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-900 mt-0.5">•</span>
                  <div>
                    <strong>Documentação:</strong> Extensa análise cadastral e patrimonial
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-900 mt-0.5">•</span>
                  <div>
                    <strong>Prazo:</strong> Aprovação em 15-30 dias
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-green-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Administradoras de Consórcio</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-700 mt-0.5">•</span>
                  <div>
                    <strong>Análise Cadastral:</strong> Menos restritiva que bancos
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-700 mt-0.5">•</span>
                  <div>
                    <strong>Entrada:</strong> Não obrigatória (pode começar sem entrada)
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-700 mt-0.5">•</span>
                  <div>
                    <strong>Garantia:</strong> Para capital de giro, exige imóvel alienado
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-700 mt-0.5">•</span>
                  <div>
                    <strong>Contemplação:</strong> Por sorteio ou lance (não imediato)
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-green-700 mt-0.5">•</span>
                  <div>
                    <strong>Documentação:</strong> Simplificada, foco em capacidade de pagamento
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-amber-50 border border-amber-300 rounded-lg p-5">
            <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Dica Profissional
            </h4>
            <p className="text-sm text-slate-700">
              Para clientes com score baixo ou sem entrada, o consórcio pode ser uma alternativa viável. Para clientes com urgência e bom score, o financiamento bancário oferece crédito imediato. <strong>Sempre apresente ambas as opções</strong> e deixe o cliente decidir com base em sua situação específica.
            </p>
          </div>
        </section>

        <section className="mb-12 bg-slate-50 border border-slate-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Target className="w-7 h-7 text-blue-900" />
            Fluxo de Trabalho Recomendado
          </h2>

          <div className="space-y-4">
            <div className="bg-white border-l-4 border-blue-900 p-5 rounded-r-lg">
              <h3 className="font-bold text-slate-900 mb-2">1. Qualificação do Cliente</h3>
              <p className="text-sm text-slate-600">
                Identifique necessidades, orçamento, prazo e capacidade de pagamento. Use o <Link href="/educacao-financeira" className="text-blue-900 hover:underline font-medium">simulador de consórcio</Link> para apresentar opções.
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-900 p-5 rounded-r-lg">
              <h3 className="font-bold text-slate-900 mb-2">2. Checklist de Documentos</h3>
              <p className="text-sm text-slate-600">
                Solicite a documentação completa desde o primeiro contato. Isso acelera o processo e demonstra profissionalismo.
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-900 p-5 rounded-r-lg">
              <h3 className="font-bold text-slate-900 mb-2">3. Apresentação de Opções</h3>
              <p className="text-sm text-slate-600">
                Mostre pelo menos duas alternativas: financiamento bancário (crédito imediato) e consórcio (custo menor, prazo maior).
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-900 p-5 rounded-r-lg">
              <h3 className="font-bold text-slate-900 mb-2">4. Formalização</h3>
              <p className="text-sm text-slate-600">
                Use os <Link href="/contratos" className="text-blue-900 hover:underline font-medium">modelos de contrato</Link> padronizados para garantir segurança jurídica e agilizar fechamento.
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-900 p-5 rounded-r-lg">
              <h3 className="font-bold text-slate-900 mb-2">5. Pós-Venda</h3>
              <p className="text-sm text-slate-600">
                Mantenha contato após o fechamento. Clientes satisfeitos geram indicações e novos negócios.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-3">Precisa de Parceiros de Crédito?</h3>
          <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
            Se você é corretor e precisa de indicações de profissionais especializados em consórcio imobiliário, financiamento ou análise de crédito, podemos ajudar.
          </p>
          <button
            onClick={() => setShowLeadModal(true)}
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors shadow-lg"
          >
            Solicitar Indicações de Especialistas
          </button>
        </div>
      </div>

      {showLeadModal && (
        <LeadModal onClose={() => setShowLeadModal(false)} />
      )}
    </main>
  );
}
