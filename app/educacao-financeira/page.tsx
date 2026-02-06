"use client";

import { useState } from "react";
import { Calculator, Shield, TrendingUp, DollarSign, CheckCircle2, XCircle, AlertCircle, Building2, Target, Edit3, PieChart, BookOpen, FileText, Users } from "lucide-react";
import Link from "next/link";
import LeadModal from "../components/LeadModal";

export default function EducacaoFinanceiraPage() {
  const [creditValue, setCreditValue] = useState("100000");
  const [termMonths, setTermMonths] = useState("220");
  const [adminFeePercent, setAdminFeePercent] = useState("24.20");
  const [reserveFundPercent, setReserveFundPercent] = useState("5.00");
  const [targetBidPercent, setTargetBidPercent] = useState("25.00");
  const [embeddedBidPercent, setEmbeddedBidPercent] = useState("20.00");
  const [showLeadModal, setShowLeadModal] = useState(false);

  const creditAmount = parseFloat(creditValue.replace(/[^\d]/g, "")) || 0;
  const term = parseFloat(termMonths) || 1;
  const adminPercent = parseFloat(adminFeePercent.replace(",", ".")) || 0;
  const reservePercent = parseFloat(reserveFundPercent.replace(",", ".")) || 0;
  const targetBid = parseFloat(targetBidPercent.replace(",", ".")) || 0;
  const embeddedBid = parseFloat(embeddedBidPercent.replace(",", ".")) || 0;

  const pocketBid = targetBid - embeddedBid;

  const adminFeeTotal = creditAmount * (adminPercent / 100);
  const reserveFundTotal = creditAmount * (reservePercent / 100);
  const totalFees = adminFeeTotal + reserveFundTotal;
  const netCredit = creditAmount - totalFees;

  const totalCredit = creditAmount + adminFeeTotal + reserveFundTotal;
  const monthlyBase = totalCredit / term;

  const embeddedBidValue = creditAmount * (embeddedBid / 100);
  const bidMonths = Math.round(term * (embeddedBid / 100));
  const embeddedBidMonthly = bidMonths > 0 ? embeddedBidValue / bidMonths : 0;
  const totalWithEmbeddedBid = monthlyBase + embeddedBidMonthly;

  const pocketBidValue = creditAmount * (pocketBid / 100);
  const totalBidValue = creditAmount * (targetBid / 100);

  const cetAnualEstimated = (adminPercent + reservePercent) * (12 / term) * 10;
  const cetMensal = cetAnualEstimated / 12;

  const leverage = netCredit > 0 ? (creditAmount / netCredit) : 1;

  const formatCurrency = (value: number) => {
    if (isNaN(value) || !isFinite(value)) return "R$ 0,00";
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <main className="bg-white min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-red-50 border-2 border-red-500 rounded-xl p-5 mb-8 sticky top-4 z-10 shadow-lg">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-red-900 mb-1">Aviso Legal Importante</h3>
              <p className="text-sm leading-relaxed text-slate-800">
                <strong>Simulação didática sem garantia de contemplação.</strong> Verifique propostas oficiais e contratos das administradoras. O consórcio é fiscalizado pelo Banco Central e não garante data de contemplação. Cada administradora possui regras próprias.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-900 text-white mb-4">
            <PieChart className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Simulador Dinâmico de Alavancagem
          </h1>
          <p className="text-base text-slate-600 max-w-3xl mx-auto">
            Calculadora técnica baseada em percentuais. Use os dados do seu contrato ou proposta para simular estratégias de lance estruturado. Os valores variam conforme a administradora escolhida.
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
          <div className="flex items-center gap-3 mb-6">
            <Edit3 className="w-6 h-6 text-blue-900" />
            <h2 className="text-2xl font-bold text-slate-900">Parâmetros da Simulação</h2>
          </div>

          <div className="bg-blue-50 border border-blue-300 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-900 font-medium">
              <AlertCircle className="w-4 h-4 inline mr-2" />
              Utilize os dados do seu contrato ou proposta para simular. Os valores variam conforme a administradora escolhida.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="credit" className="block text-sm font-semibold text-slate-900 mb-2">
                Valor da Carta de Crédito *
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
              <p className="mt-1 text-xs text-slate-500">Valor total da carta de crédito</p>
            </div>

            <div>
              <label htmlFor="term" className="block text-sm font-semibold text-slate-900 mb-2">
                Prazo Total (meses) *
              </label>
              <input
                id="term"
                type="number"
                value={termMonths}
                onChange={(e) => setTermMonths(e.target.value)}
                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent text-lg font-semibold"
                placeholder="220"
                min="1"
              />
              <p className="mt-1 text-xs text-slate-500">Duração do contrato em meses</p>
            </div>

            <div>
              <label htmlFor="adminFee" className="block text-sm font-semibold text-slate-900 mb-2">
                Taxa de Administração (%) *
              </label>
              <div className="relative">
                <input
                  id="adminFee"
                  type="text"
                  value={adminFeePercent}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^\d,\.]/g, "");
                    setAdminFeePercent(value);
                  }}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent text-lg font-semibold"
                  placeholder="24.20"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">%</span>
              </div>
              <p className="mt-1 text-xs text-slate-500">Média: 20% a 28% do crédito</p>
            </div>

            <div>
              <label htmlFor="reserveFund" className="block text-sm font-semibold text-slate-900 mb-2">
                Fundo de Reserva (%) *
              </label>
              <div className="relative">
                <input
                  id="reserveFund"
                  type="text"
                  value={reserveFundPercent}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^\d,\.]/g, "");
                    setReserveFundPercent(value);
                  }}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent text-lg font-semibold"
                  placeholder="5.00"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">%</span>
              </div>
              <p className="mt-1 text-xs text-slate-500">Média: 3% a 7% do crédito</p>
            </div>
          </div>

          <div className="border-t-2 border-slate-200 pt-6 mb-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-900" />
              Estratégia de Lance Estruturado
            </h3>

            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="targetBid" className="block text-sm font-semibold text-slate-900 mb-2">
                  Lance Alvo Total (%) *
                </label>
                <div className="relative">
                  <input
                    id="targetBid"
                    type="text"
                    value={targetBidPercent}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^\d,\.]/g, "");
                      setTargetBidPercent(value);
                    }}
                    className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent text-lg font-semibold bg-blue-50"
                    placeholder="25.00"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-700">%</span>
                </div>
                <p className="mt-1 text-xs text-blue-700">Meta baseada no histórico</p>
              </div>

              <div>
                <label htmlFor="embeddedBid" className="block text-sm font-semibold text-slate-900 mb-2">
                  Lance Embutido (%) *
                </label>
                <div className="relative">
                  <input
                    id="embeddedBid"
                    type="text"
                    value={embeddedBidPercent}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^\d,\.]/g, "");
                      setEmbeddedBidPercent(value);
                    }}
                    className="w-full px-4 py-3 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent text-lg font-semibold bg-green-50"
                    placeholder="20.00"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-700">%</span>
                </div>
                <p className="mt-1 text-xs text-green-700">Diluído nas parcelas</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Lance do Bolso (%)
                </label>
                <div className="relative">
                  <div className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg text-lg font-semibold bg-amber-50 text-amber-900">
                    {pocketBid.toFixed(2)}
                  </div>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-700">%</span>
                </div>
                <p className="mt-1 text-xs text-amber-700">Calculado automaticamente</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <button
              onClick={() => {
                setCreditValue("100000");
                setTermMonths("220");
                setAdminFeePercent("24.20");
                setReserveFundPercent("5.00");
                setTargetBidPercent("25.00");
                setEmbeddedBidPercent("20.00");
              }}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium text-slate-700 transition-colors"
            >
              Exemplo 1 (Padrão)
            </button>
            <button
              onClick={() => {
                setCreditValue("200000");
                setTermMonths("180");
                setAdminFeePercent("22.50");
                setReserveFundPercent("4.50");
                setTargetBidPercent("30.00");
                setEmbeddedBidPercent("25.00");
              }}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium text-slate-700 transition-colors"
            >
              Exemplo 2 (Agressivo)
            </button>
            <button
              onClick={() => {
                setCreditValue("300000");
                setTermMonths("240");
                setAdminFeePercent("26.00");
                setReserveFundPercent("6.00");
                setTargetBidPercent("20.00");
                setEmbeddedBidPercent("15.00");
              }}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium text-slate-700 transition-colors"
            >
              Exemplo 3 (Conservador)
            </button>
          </div>

          <div className="border-t-2 border-slate-200 pt-6 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Análise de Alavancagem e Resultados</h3>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="w-6 h-6 text-blue-900" />
                <h3 className="text-base font-bold text-blue-900">Composição Financeira</h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <div className="text-xs text-blue-800 mb-1">Crédito Nominal</div>
                  <div className="text-xl font-bold text-blue-900">{formatCurrency(creditAmount)}</div>
                </div>
                <div>
                  <div className="text-xs text-blue-800 mb-1">Total de Taxas</div>
                  <div className="text-xl font-bold text-red-700">{formatCurrency(totalFees)}</div>
                </div>
                <div>
                  <div className="text-xs text-blue-800 mb-1">Crédito Líquido Real</div>
                  <div className="text-xl font-bold text-green-700">{formatCurrency(netCredit)}</div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-slate-200 rounded-lg p-4">
                <div className="text-xs text-slate-600 font-medium mb-1">Parcela Base Mensal</div>
                <div className="text-2xl font-bold text-slate-900">{formatCurrency(monthlyBase)}</div>
                <div className="text-xs text-slate-500 mt-1">Após contemplação (sem lance)</div>
              </div>

              <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-4">
                <div className="text-xs text-amber-800 font-medium mb-1">Parcela com Lance Embutido</div>
                <div className="text-2xl font-bold text-amber-900">{formatCurrency(totalWithEmbeddedBid)}</div>
                <div className="text-xs text-amber-700 mt-1">Durante {bidMonths} meses de lance</div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="text-xs text-green-800 font-medium mb-1">Lance Embutido ({embeddedBid.toFixed(1)}%)</div>
                <div className="text-lg font-bold text-green-900">{formatCurrency(embeddedBidValue)}</div>
                <div className="text-xs text-green-700 mt-1">Diluído em {bidMonths} parcelas</div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="text-xs text-amber-800 font-medium mb-1">Lance do Bolso ({pocketBid.toFixed(1)}%)</div>
                <div className="text-lg font-bold text-amber-900">{formatCurrency(pocketBidValue)}</div>
                <div className="text-xs text-amber-700 mt-1">Pago à vista na contemplação</div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="text-xs text-blue-800 font-medium mb-1">Lance Total ({targetBid.toFixed(1)}%)</div>
                <div className="text-lg font-bold text-blue-900">{formatCurrency(totalBidValue)}</div>
                <div className="text-xs text-blue-700 mt-1">Meta competitiva</div>
              </div>
            </div>

            <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-5">
              <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Índice de Alavancagem Financeira
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-xs text-purple-800">Alavancagem</span>
                  <div className="text-3xl font-bold text-purple-900">{leverage.toFixed(2)}x</div>
                  <p className="text-xs text-purple-700 mt-1">
                    A cada R$ 1,00 líquido você acessa R$ {leverage.toFixed(2)}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-purple-800">Eficiência do Crédito</span>
                  <div className="text-3xl font-bold text-purple-900">{((netCredit / creditAmount) * 100).toFixed(1)}%</div>
                  <p className="text-xs text-purple-700 mt-1">
                    Percentual aproveitável do crédito nominal
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Custo Efetivo Total (CET) Estimado
              </h4>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-slate-600">CET Anual Estimado</span>
                  <div className="text-2xl font-bold text-slate-900">{cetAnualEstimated.toFixed(2)}% a.a.</div>
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
          </div>

          <button
            onClick={() => setShowLeadModal(true)}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-3 text-base shadow-lg mt-6"
          >
            <Target className="w-5 h-5" />
            Solicitar Indicação de Especialistas em Consórcio
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8" id="caixas-conhecimento">
          <div className="bg-white border-2 border-blue-200 rounded-xl p-6 hover:border-blue-400 transition-colors">
            <BookOpen className="w-8 h-8 text-blue-900 mb-3" />
            <h3 className="font-bold text-slate-900 mb-2">O que é Lance Embutido?</h3>
            <p className="text-sm text-slate-700 mb-3">
              O lance embutido é uma estratégia onde o valor do lance é dividido e diluído nas parcelas mensais, aumentando temporariamente o valor das prestações durante o período estabelecido.
            </p>
            <Link href="#estrategia-lance" className="text-sm font-medium text-blue-900 hover:text-blue-700">
              Saiba mais →
            </Link>
          </div>

          <div className="bg-white border-2 border-green-200 rounded-xl p-6 hover:border-green-400 transition-colors">
            <FileText className="w-8 h-8 text-green-700 mb-3" />
            <h3 className="font-bold text-slate-900 mb-2">CET vs Juros Bancários</h3>
            <p className="text-sm text-slate-700 mb-3">
              Diferente dos juros compostos de financiamentos, o CET do consórcio é uma taxa administrativa fixa que não aumenta ao longo do tempo. Você sabe exatamente quanto pagará desde o início.
            </p>
            <Link href="#comparador" className="text-sm font-medium text-green-700 hover:text-green-600">
              Comparar →
            </Link>
          </div>

          <div className="bg-white border-2 border-purple-200 rounded-xl p-6 hover:border-purple-400 transition-colors">
            <Users className="w-8 h-8 text-purple-700 mb-3" />
            <h3 className="font-bold text-slate-900 mb-2">Análise de Histórico</h3>
            <p className="text-sm text-slate-700 mb-3">
              Profissionais especializados analisam o histórico de assembleias do seu grupo específico para identificar padrões estatísticos e sugerir estratégias de lance competitivas.
            </p>
            <button onClick={() => setShowLeadModal(true)} className="text-sm font-medium text-purple-700 hover:text-purple-600">
              Solicitar análise →
            </button>
          </div>
        </div>

        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6 mb-8" id="estrategia-lance">
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

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 mb-8" id="comparador">
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
