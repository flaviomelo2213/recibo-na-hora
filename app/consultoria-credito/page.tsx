"use client";

import { useState } from "react";
import { Calculator, MessageCircle, Shield, TrendingUp, DollarSign, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function ConsultoriaCreditoPage() {
  const [creditValue, setCreditValue] = useState("100000");

  const ADMIN_FEE_PERCENT = 24.20;
  const TERM_MONTHS = 220;
  const FIXED_BID_INSTALLMENTS = 44;

  const creditAmount = parseFloat(creditValue.replace(/[^\d]/g, "")) || 0;

  const adminFee = creditAmount * (ADMIN_FEE_PERCENT / 100);
  const realPurchasingPower = creditAmount - adminFee;

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

  const handleWhatsAppClick = () => {
    const phone = "5569993401868";
    const message = encodeURIComponent(
      `Olá! Tenho dúvidas sobre estratégia de consórcio.\n\n` +
      `Valor de referência: ${formatCurrency(creditAmount)}\n` +
      `Gostaria de entender melhor como funciona a matemática do consórcio e como avaliar propostas.`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
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
                Este simulador é uma ferramenta educativa. O consórcio é uma compra planejada fiscalizada pelo Banco Central. <strong>Não há garantia de data de contemplação.</strong> Cada administradora possui taxas, prazos e regras de crédito próprias, auditadas conforme seus contratos específicos. Os valores aqui apresentados são exemplificativos para fins didáticos.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-900 text-white mb-4">
            <Calculator className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Calculadora Educativa de Consórcio
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Entenda a matemática por trás do consórcio: taxas, prazos, lances e CET. Use este simulador para comparar propostas de qualquer administradora.
          </p>
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
            onClick={handleWhatsAppClick}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-3 text-base shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Dúvidas sobre a estratégia? Fale com o apoiador do projeto
          </button>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Como Usar Esta Calculadora para Avaliar Propostas
          </h2>

          <div className="space-y-6 text-slate-700">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">1. Taxa Administrativa Total vs Mensal</h3>
              <p className="text-sm leading-relaxed mb-3">
                A taxa administrativa de {ADMIN_FEE_PERCENT}% parece alta, mas é calculada <strong>uma única vez</strong> sobre o valor total. Quando você divide R$ {formatCurrency(adminFee).replace('R$', '').trim()} por {TERM_MONTHS} meses, obtém apenas {formatCurrency(adminFee / TERM_MONTHS)} por mês.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
                <p className="font-semibold text-blue-900 mb-1">Compare com empréstimos:</p>
                <ul className="space-y-1 text-blue-800 ml-4 list-disc">
                  <li>Empréstimo a 2,5% a.m. sobre R$ {formatCurrency(creditAmount).replace('R$', '').trim()} = R$ {formatCurrency(creditAmount * 0.025).replace('R$', '').trim()}/mês (juros compostos)</li>
                  <li>Consórcio: R$ {formatCurrency(adminFee / TERM_MONTHS).replace('R$', '').trim()}/mês (custo fixo)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">2. Impacto do Lance Embutido</h3>
              <p className="text-sm leading-relaxed mb-3">
                O lance embutido de {formatCurrency(fixedBidValue)} distribuído em 44 parcelas adiciona {formatCurrency(fixedBidMonthly)} à sua parcela mensal por 44 meses. Após a contemplação (geralmente no 6º-8º mês), você continua pagando apenas a parcela base de {formatCurrency(monthlyInstallment)}.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm">
                <p className="font-semibold text-green-900 mb-1">Vantagens do lance embutido:</p>
                <ul className="space-y-1 text-green-800 ml-4 list-disc">
                  <li>Contemplação em 6-8 meses vs 110 meses por sorteio</li>
                  <li>Não precisa ter o lance guardado em dinheiro</li>
                  <li>Valor diluído em parcelas previsíveis</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">3. Perguntas para Fazer ao Vendedor</h3>
              <div className="space-y-2">
                <div className="bg-white border border-slate-200 rounded-lg p-4">
                  <p className="font-semibold text-slate-900 text-sm mb-1">Qual o CET total da operação?</p>
                  <p className="text-xs text-slate-600">Deve incluir TODAS as taxas: administrativa, seguro, fundo de reserva, adesão</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4">
                  <p className="font-semibold text-slate-900 text-sm mb-1">Posso amortizar ou quitar antecipadamente?</p>
                  <p className="text-xs text-slate-600">Verifique se há descontos na taxa administrativa ao quitar</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4">
                  <p className="font-semibold text-slate-900 text-sm mb-1">Qual o histórico de contemplação deste grupo?</p>
                  <p className="text-xs text-slate-600">Peça dados reais de contemplação dos últimos grupos semelhantes</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4">
                  <p className="font-semibold text-slate-900 text-sm mb-1">Como funciona a desistência antes da contemplação?</p>
                  <p className="text-xs text-slate-600">Entenda os custos e prazos para receber valores pagos de volta</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-900 mb-2">Aviso Legal Importante</h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                Esta calculadora utiliza parâmetros médios de mercado para fins educativos e de simulação. Os valores, condições e prazos podem variar significativamente conforme a administradora, o tipo de bem, o grupo específico e as condições de mercado.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong>Não há garantia de contemplação em prazo específico.</strong> A contemplação depende de sorteio ou lance, e cada grupo tem suas próprias características. Sempre consulte a documentação oficial do consórcio e, se necessário, um contador ou planejador financeiro antes de tomar decisões de crédito de grande porte.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-3">Apoio e Suporte</h3>
          <p className="text-sm text-blue-800 mb-4">
            Este site é apoiado por <strong>Flavio Melo - Especialista em Estratégia de Crédito</strong>. Tem dúvidas sobre como aplicar estes conceitos na prática ou precisa de orientação sobre qual estratégia faz mais sentido para o seu caso?
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com o Apoiador (+55 69 99340-1868)
            </button>
            <Link
              href="/blog/estrategia-vencedora-consorcio"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-900 text-blue-900 font-semibold rounded-lg hover:bg-blue-900 hover:text-white transition-colors"
            >
              Ler Guia Completo
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
