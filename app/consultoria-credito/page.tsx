"use client";

import { useState } from "react";
import { Calculator, MessageCircle } from "lucide-react";

export default function ConsultoriaCreditoPage() {
  const [creditValue, setCreditValue] = useState("100000");

  const ADMIN_FEE_PERCENT = 24.20;
  const TERM_MONTHS = 220;
  const FIXED_BID_INSTALLMENTS = 44;

  const creditAmount = parseFloat(creditValue.replace(/[^\d]/g, "")) || 0;

  const adminFee = creditAmount * (ADMIN_FEE_PERCENT / 100);
  const realPurchasingPower = creditAmount - adminFee;

  const fixedBidValue = (creditAmount * 0.25148);

  const monthlyInstallment = (creditAmount / TERM_MONTHS);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const handleWhatsAppClick = () => {
    const phone = "5569993401868";
    const message = encodeURIComponent(
      `Olá! Tenho interesse na estratégia de consórcio com lance fixo de 44 parcelas.\n\n` +
      `Crédito desejado: ${formatCurrency(creditAmount)}\n` +
      `Poder de compra real: ${formatCurrency(realPurchasingPower)}\n` +
      `Lance fixo: ${formatCurrency(fixedBidValue)}\n\n` +
      `Gostaria de validar essa estratégia e entender melhor como funciona.`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <main className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-900 text-white mb-4">
            <Calculator className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Calculadora de Estratégia Financeira
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Simule sua estratégia de consórcio com lance fixo de 44 parcelas e descubra seu poder de compra real.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 mb-6">
          <div className="mb-6">
            <label htmlFor="credit" className="block text-sm font-semibold text-slate-900 mb-2">
              Valor do crédito desejado
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
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent text-base"
                placeholder="100000"
              />
            </div>
            <p className="mt-2 text-xs text-slate-500">Digite apenas números</p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Parâmetros da estratégia</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Taxa administrativa</span>
                <span className="text-sm font-semibold text-slate-900">{ADMIN_FEE_PERCENT}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Prazo do consórcio</span>
                <span className="text-sm font-semibold text-slate-900">{TERM_MONTHS} meses</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Lance fixo</span>
                <span className="text-sm font-semibold text-slate-900">{FIXED_BID_INSTALLMENTS} parcelas</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <div className="text-sm text-blue-900 font-medium mb-1">Poder de Compra Real</div>
              <div className="text-2xl font-bold text-blue-900">
                {formatCurrency(realPurchasingPower)}
              </div>
              <div className="mt-2 text-xs text-blue-700">
                Valor disponível após taxa administrativa
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                <div className="text-sm text-slate-600 font-medium mb-1">Lance fixo estimado</div>
                <div className="text-xl font-bold text-slate-900">
                  {formatCurrency(fixedBidValue)}
                </div>
                <div className="mt-2 text-xs text-slate-500">
                  Para crédito de {formatCurrency(creditAmount)}
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                <div className="text-sm text-slate-600 font-medium mb-1">Parcela mensal estimada</div>
                <div className="text-xl font-bold text-slate-900">
                  {formatCurrency(monthlyInstallment)}
                </div>
                <div className="mt-2 text-xs text-slate-500">
                  Por {TERM_MONTHS} meses
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleWhatsAppClick}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-3 text-base mb-6"
        >
          <MessageCircle className="w-5 h-5" />
          Validar Estratégia no WhatsApp
        </button>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-8 mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Estudo de Caso Real: Grupo 012145 - Economia Comprovada
          </h2>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
            <p className="mb-4">
              O <strong>Grupo 012145</strong> é um caso real de sucesso na aplicação da estratégia de lance fixo de 44 parcelas. Os dados apresentados nesta calculadora refletem as condições reais praticadas por este grupo, permitindo que você entenda exatamente como a matemática funciona na prática.
            </p>

            <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-3">Como Funciona a Matemática do Lance Embutido</h3>
            <p className="mb-4">
              Com a <strong>taxa administrativa de 24,20%</strong>, ao solicitar R$ 100.000 de crédito, você tem R$ 75.800 de poder de compra real. O lance fixo de 44 parcelas equivale a aproximadamente <strong>25,15% do valor total do crédito</strong> (R$ 25.148,48 para R$ 100k). Esse valor é diluído nas primeiras 44 mensalidades, aumentando significativamente suas chances de contemplação logo no início do grupo.
            </p>

            <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-3">Vantagem Real: Tempo é Dinheiro</h3>
            <p className="mb-4">
              Em um <strong>consórcio de 220 meses</strong>, contemplar no 6º mês (tempo médio com lance fixo) versus aguardar sorteio por 110 meses (tempo médio estimado) representa <strong>economia de 104 meses de espera</strong>. Considerando inflação, valorização imobiliária e custo de aluguel nesse período, a economia real pode ultrapassar 30% do valor do bem.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mt-6">
              <h4 className="text-base font-semibold text-blue-900 mb-3">Exemplo Prático: Apartamento de R$ 300.000</h4>
              <ul className="space-y-2 text-sm text-blue-900">
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Crédito necessário:</strong> R$ 395.778,36 (considerando 24,20% de taxa adm)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Lance fixo:</strong> R$ 99.537,35 (diluído em 44 parcelas = R$ 2.262,22/mês adicional)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Parcela mensal base:</strong> R$ 1.799,02 (por 220 meses)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Parcela total (primeiros 44 meses):</strong> R$ 4.061,24</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Tempo médio de contemplação:</strong> 6 a 8 meses</span>
                </li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-3">Para Quem Essa Estratégia Faz Sentido?</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <span className="text-green-700 font-bold text-xs">✓</span>
                </div>
                <p><strong>Renda estável que comporta parcelas maiores nos primeiros meses:</strong> Profissionais assalariados, empresários com fluxo de caixa previsível.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <span className="text-green-700 font-bold text-xs">✓</span>
                </div>
                <p><strong>Urgência na aquisição do bem:</strong> Quem paga aluguel alto ou precisa do imóvel/veículo rapidamente.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <span className="text-green-700 font-bold text-xs">✓</span>
                </div>
                <p><strong>Sem reserva para lance livre:</strong> Quem não tem 20-30% do valor guardado para dar de lance em dinheiro.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <span className="text-green-700 font-bold text-xs">✓</span>
                </div>
                <p><strong>Planejamento de longo prazo:</strong> Quem entende que contemplar cedo permite usar o bem enquanto paga.</p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mt-6">
              <p className="text-sm text-amber-900">
                <strong>Aviso Legal:</strong> Esta calculadora utiliza parâmetros reais do Grupo 012145 para fins educativos e de simulação. Os valores, condições e prazos podem variar conforme a administradora, o grupo específico e as condições de mercado. Sempre consulte a documentação oficial do consórcio antes de tomar decisões financeiras. A contemplação não é garantida e depende de diversos fatores, incluindo sorteio e lances de outros participantes.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-600">
                <strong>Quer saber mais sobre estratégias financeiras?</strong> Leia nosso <a href="/blog/guia-lance-embutido" className="text-blue-900 hover:underline font-semibold">Guia Completo sobre Lance Embutido</a> ou explore outras <a href="/ferramentas" className="text-blue-900 hover:underline font-semibold">ferramentas financeiras gratuitas</a>.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs text-slate-500">
            Esta é uma simulação educativa baseada em dados reais. Os valores finais podem variar conforme as condições específicas de cada grupo e administradora de consórcio.
          </p>
        </div>
      </div>
    </main>
  );
}
