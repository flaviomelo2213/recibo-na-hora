"use client";

import { useState } from "react";
import { Calculator, Shield, TrendingUp, DollarSign, CheckCircle2, XCircle, AlertCircle, Building2, Target } from "lucide-react";
import Link from "next/link";
import LeadModal from "../components/LeadModal";

export default function EducacaoFinanceiraPage() {
  const [creditValue, setCreditValue] = useState("100000");
  const [showLeadModal, setShowLeadModal] = useState(false);

  const ADMIN_FEE_PERCENT = 24.20;
  const TERM_MONTHS = 220;
  const FIXED_BID_INSTALLMENTS = 44;

  const creditAmount = parseFloat(creditValue.replace(/[^\d]/g, "")) || 0;

  const adminFee = creditAmount * (ADMIN_FEE_PERCENT / 100);
  const fixedBidValue = (creditAmount * 0.25148);
  const fixedBidMonthly = fixedBidValue / FIXED_BID_INSTALLMENTS;
  const monthlyInstallment = (creditAmount / TERM_MONTHS);
  const totalWithBid = monthlyInstallment + fixedBidMonthly;

  const cetAnual = 25.5;
  const cetMensal = (Math.pow(1 + cetAnual / 100, 1 / 12) - 1) * 100;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <main className="bg-white min-h-screen">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-900 mb-2">Transparência e Educação Financeira</h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Este simulador é uma ferramenta educativa. O consórcio é uma compra planejada fiscalizada pelo Banco Central. <strong>Não há garantia de data de contemplação.</strong> Cada administradora possui taxas, prazos e regras de crédito próprias, auditadas conforme seus contratos específicos. Os valores aqui apresentados são exemplificativos para fins didáticos. <strong>Este simulador não garante contemplação.</strong> Cada contrato tem regras próprias de auditoria e diretrizes de crédito.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-900 text-white mb-4">
            <Calculator className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Guia Técnico de Estratégias de Consórcio
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Entenda a matemática por trás do consórcio: taxas, prazos, lances e CET. Use este simulador para comparar propostas de qualquer administradora.
          </p>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <Building2 className="w-6 h-6 text-blue-900 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-blue-900 mb-2">Capital de Giro via Consórcio Imobiliário</h3>
              <p className="text-sm leading-relaxed text-slate-700 mb-3">
                <strong>Para gerar caixa (capital de giro) através de consórcio, é necessária a alienação de um imóvel documentado aprovado pela administradora.</strong> O crédito é liberado mediante garantia real do imóvel. O bem precisa estar regularizado, com documentação aprovada pela análise de crédito da administradora.
              </p>
              <p className="text-sm leading-relaxed text-slate-700">
                Esta modalidade permite que você use o crédito contemplado para investir em estoque, equipamentos ou expansão empresarial, enquanto o imóvel serve como garantia. Cada administradora possui suas próprias diretrizes de aprovação de garantias.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-blue-200 rounded-xl p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Simulador de Estratégia</h2>

          <div className="mb-6">
            <label htmlFor="credit" className="block text-sm font-semibold text-slate-900 mb-2">
              Valor do crédito que você precisa
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">R$</span>
              <input
                id="credit"
                type="text"
                value={creditValue}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^\d]/g, "");
                  setCreditValue(value);
                }}
                className="w-full pl-10 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent text-lg font-semibold"
                placeholder="100000"
              />
            </div>
            <p className="mt-2 text-xs text-slate-500">Digite apenas números (ex: 100000 para R$ 100 mil)</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <button
              onClick={() => setCreditValue("100000")}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium text-slate-700 transition-colors"
            >
              R$ 100 mil
            </button>
            <button
              onClick={() => setCreditValue("200000")}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium text-slate-700 transition-colors"
            >
              R$ 200 mil
            </button>
            <button
              onClick={() => setCreditValue("300000")}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium text-slate-700 transition-colors"
            >
              R$ 300 mil
            </button>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Parâmetros Exemplificativos (Base de Mercado)</h3>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-slate-600">Taxa administrativa</span>
                <div className="text-lg font-bold text-slate-900">{ADMIN_FEE_PERCENT}%</div>
              </div>
              <div>
                <span className="text-slate-600">Prazo</span>
                <div className="text-lg font-bold text-slate-900">{TERM_MONTHS} meses</div>
              </div>
              <div>
                <span className="text-slate-600">Lance embutido</span>
                <div className="text-lg font-bold text-slate-900">{FIXED_BID_INSTALLMENTS} parcelas</div>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="w-6 h-6 text-blue-900" />
                <h3 className="text-base font-bold text-blue-900">Análise Financeira</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-blue-800 mb-1">Crédito Total</div>
                  <div className="text-2xl font-bold text-blue-900">{formatCurrency(creditAmount)}</div>
                </div>
                <div>
                  <div className="text-xs text-blue-800 mb-1">Taxa Administrativa</div>
                  <div className="text-2xl font-bold text-blue-900">{formatCurrency(adminFee)}</div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <div className="text-xs text-slate-600 font-medium mb-1">Parcela Base</div>
                <div className="text-xl font-bold text-slate-900">{formatCurrency(monthlyInstallment)}</div>
                <div className="text-xs text-slate-500 mt-1">Por {TERM_MONTHS} meses</div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <div className="text-xs text-slate-600 font-medium mb-1">Parcela com Lance (44 meses)</div>
                <div className="text-xl font-bold text-amber-700">{formatCurrency(totalWithBid)}</div>
                <div className="text-xs text-slate-500 mt-1">Base + Lance embutido</div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="text-xs text-green-800 font-medium mb-1">Lance Embutido Total</div>
                <div className="text-lg font-bold text-green-900">{formatCurrency(fixedBidValue)}</div>
                <div className="text-xs text-green-700 mt-1">25,15% do crédito</div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="text-xs text-green-800 font-medium mb-1">Lance Mensal (44x)</div>
                <div className="text-lg font-bold text-green-900">{formatCurrency(fixedBidMonthly)}</div>
                <div className="text-xs text-green-700 mt-1">Adicional temporário</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-6">
            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Custo Efetivo Total (CET) Estimado
            </h4>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-slate-600">CET Anual</span>
                <div className="text-2xl font-bold text-slate-900">{cetAnual.toFixed(2)}% a.a.</div>
              </div>
              <div>
                <span className="text-slate-600">CET Mensal Equivalente</span>
                <div className="text-2xl font-bold text-slate-900">{cetMensal.toFixed(2)}% a.m.</div>
              </div>
            </div>
            <div className="mt-3 p-3 bg-blue-50 rounded-lg">
              <p className="text-xs text-blue-900">
                <strong>O que é o CET?</strong> O Custo Efetivo Total inclui taxa administrativa, seguro, fundo de reserva e taxa de adesão. Diferente de juros bancários, este custo é fixo e não sofre capitalização composta.
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowLeadModal(true)}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-3 text-base shadow-lg"
          >
            <Target className="w-5 h-5" />
            Deseja indicações de profissionais que operam estas estratégias?
          </button>
        </div>

        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-900 mb-2">Estratégia de Lance: Análise Baseada em Histórico</h3>
              <p className="text-sm leading-relaxed text-slate-700 mb-3">
                <strong>Não há garantia ou promessa de contemplação.</strong> A estratégia consiste em: <strong>analisar o histórico das últimas assembleias do seu grupo específico</strong> e ofertar lances baseados na média estatística observada.
              </p>
              <p className="text-sm leading-relaxed text-slate-700">
                Por exemplo: se nas últimas 6 assembleias os lances vencedores ficaram entre 23% e 27%, você pode calcular uma oferta competitiva baseada nesse padrão. Isso <strong>aumenta suas chances competitivas</strong>, mas não garante contemplação, pois depende da competição em cada assembleia.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Comparador Técnico: Financiamento vs Consórcio
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-red-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Financiamento Bancário</h3>
              </div>
              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-red-600 mt-0.5">•</span>
                  <p><strong>Juros Compostos:</strong> Taxa mensal incide sobre saldo devedor</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-red-600 mt-0.5">•</span>
                  <p><strong>Entrada Alta:</strong> Geralmente 20-30% do valor</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-red-600 mt-0.5">•</span>
                  <p><strong>Custo Total Alto:</strong> Juros podem dobrar o valor final</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-red-600 mt-0.5">•</span>
                  <p><strong>Crédito Imediato:</strong> Aprovação em dias</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-green-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Consórcio</h3>
              </div>
              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-green-600 mt-0.5">•</span>
                  <p><strong>Taxa Administrativa:</strong> Sem juros compostos</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-green-600 mt-0.5">•</span>
                  <p><strong>Sem Entrada:</strong> Pode começar sem valor inicial</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-green-600 mt-0.5">•</span>
                  <p><strong>Custo Planejado:</strong> Sabe quanto pagará desde o início</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-green-600 mt-0.5">•</span>
                  <p><strong>Contemplação Variável:</strong> Por sorteio ou lance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-3">Precisa de Orientação Profissional?</h3>
          <p className="text-sm text-blue-800 mb-4">
            Este guia apresenta conceitos educativos. Se você precisa de indicações de profissionais que trabalham com estratégias de consórcio e análise de grupos, podemos ajudar.
          </p>
          <button
            onClick={() => setShowLeadModal(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors"
          >
            <Target className="w-5 h-5" />
            Solicitar Indicações de Profissionais
          </button>
        </div>
      </div>

      {showLeadModal && (
        <LeadModal onClose={() => setShowLeadModal(false)} defaultValue={creditAmount} />
      )}
    </main>
  );
}
