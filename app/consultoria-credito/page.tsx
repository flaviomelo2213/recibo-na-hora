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
      `Olá! Tenho interesse em estratégia de crédito para capital de giro.\n\n` +
      `Crédito desejado: ${formatCurrency(creditAmount)}\n` +
      `Valor líquido estimado: ${formatCurrency(realPurchasingPower)}\n` +
      `Lance estimado: ${formatCurrency(fixedBidValue)}\n\n` +
      `Gostaria de falar com um especialista sobre as opções disponíveis.`
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
            Calculadora Educativa de Crédito Planejado
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Simule estratégias de capital de giro com taxa administrativa fixa e entenda como funcionam alternativas aos empréstimos tradicionais.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 mb-6">
          <div className="mb-6">
            <label htmlFor="credit" className="block text-sm font-semibold text-slate-900 mb-2">
              Quanto de capital você precisa?
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
            <p className="mt-2 text-xs text-slate-500">Digite apenas números (ex: 100000 para R$ 100 mil)</p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Parâmetros Exemplificativos</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Exemplo de taxa administrativa</span>
                <span className="text-sm font-semibold text-slate-900">{ADMIN_FEE_PERCENT}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Prazo estimado</span>
                <span className="text-sm font-semibold text-slate-900">{TERM_MONTHS} meses</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Lance embutido</span>
                <span className="text-sm font-semibold text-slate-900">{FIXED_BID_INSTALLMENTS} parcelas</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <div className="text-sm text-blue-900 font-medium mb-1">Valor Líquido Estimado</div>
              <div className="text-2xl font-bold text-blue-900">
                {formatCurrency(realPurchasingPower)}
              </div>
              <div className="mt-2 text-xs text-blue-700">
                Capital disponível após custo administrativo exemplificativo
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                <div className="text-sm text-slate-600 font-medium mb-1">Lance estimado</div>
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
                  Por {TERM_MONTHS} meses (exemplo)
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
          Falar com Especialista em Estratégia de Crédito
        </button>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-8 mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Entenda a Estratégia: Educação Financeira Empresarial
          </h2>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
            <p className="mb-4">
              Esta calculadora demonstra como funcionam <strong>estratégias de crédito com taxa administrativa fixa</strong>, oferecidas por administradoras de grande porte no mercado brasileiro. Os parâmetros apresentados são baseados em dados reais de mercado para fins educacionais.
            </p>

            <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-3">Como Funciona a Matemática da Taxa Fixa</h3>
            <p className="mb-4">
              Com uma <strong>taxa administrativa exemplificativa de 24,20%</strong>, ao solicitar R$ 100.000 de crédito, você tem R$ 75.800 de capital líquido. Essa taxa é calculada <strong>uma única vez</strong> no início e não sofre juros compostos como em empréstimos bancários. O lance embutido de 44 parcelas equivale a aproximadamente <strong>25,15% do valor total</strong>, diluído nas primeiras mensalidades para acelerar a contemplação.
            </p>

            <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-3">Vantagem para Capital de Giro Empresarial</h3>
            <p className="mb-4">
              Em estratégias de <strong>crédito planejado de 220 meses</strong>, contemplar entre o 6º e 8º mês (tempo médio com lance embutido) permite que você use o capital para investimentos produtivos muito antes do que aguardar sorteio. Considerando que empréstimos bancários cobram 2-3% de juros ao mês (juros compostos), a taxa administrativa fixa tende a ser mais econômica no longo prazo.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mt-6">
              <h4 className="text-base font-semibold text-blue-900 mb-3">Exemplo Prático: Capital de Giro de R$ 200.000</h4>
              <ul className="space-y-2 text-sm text-blue-900">
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Crédito necessário:</strong> R$ 263.852 (considerando 24,20% de taxa administrativa)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Lance embutido:</strong> R$ 66.348 (diluído em 44 parcelas = R$ 1.508/mês adicional)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Parcela base mensal:</strong> R$ 1.199 (por 220 meses)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Parcela total (primeiros 44 meses):</strong> R$ 2.707</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><strong>Contemplação estimada:</strong> 6 a 8 meses</span>
                </li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-3">Uso Estratégico para Empresas</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <span className="text-green-700 font-bold text-xs">✓</span>
                </div>
                <p><strong>Substituir empréstimos caros:</strong> Use para quitar linhas de crédito com juros superiores a 2% ao mês, reduzindo custo financeiro total.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <span className="text-green-700 font-bold text-xs">✓</span>
                </div>
                <p><strong>Compra de estoque à vista:</strong> Negocie descontos com fornecedores pagando à vista, aumentando margem de lucro.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <span className="text-green-700 font-bold text-xs">✓</span>
                </div>
                <p><strong>Investimento em produtividade:</strong> Adquirir equipamentos, tecnologia ou reformas que aumentam capacidade produtiva.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <span className="text-green-700 font-bold text-xs">✓</span>
                </div>
                <p><strong>Fluxo de caixa saudável:</strong> Parcelas menores preservam capital de giro operacional para despesas recorrentes.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-3">Comparação: Taxa Fixa vs Juros Compostos</h3>
            <p className="mb-4">
              A grande diferença está na forma de cálculo. Empréstimos bancários cobram juros mensais sobre o saldo devedor (juros compostos), enquanto consórcios cobram uma taxa administrativa única no início. Para crédito de R$ 200.000:
            </p>
            <ul className="space-y-2 text-sm list-disc list-inside mb-4 ml-4">
              <li><strong>Empréstimo (2,5% a.m. por 36 meses):</strong> Custo total de R$ 322.200 (juros de R$ 122.200)</li>
              <li><strong>Estratégia com taxa fixa (24,20% em 220 meses):</strong> Custo total de R$ 263.852 (taxa de R$ 63.852)</li>
              <li><strong>Economia:</strong> R$ 58.348 + parcelas 70% menores que preservam fluxo de caixa</li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mt-6">
              <p className="text-sm text-amber-900">
                <strong>Aviso Legal:</strong> Esta calculadora utiliza parâmetros de mercado para fins educativos e de simulação. Os valores, condições e prazos podem variar conforme a instituição financeira, o grupo específico e as condições de mercado. Os exemplos não constituem oferta de crédito. Sempre consulte documentação oficial e um contador ou planejador financeiro antes de tomar decisões financeiras de grande porte.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-600">
                <strong>Quer entender melhor sobre educação financeira empresarial?</strong> Leia nosso <a href="/blog/estrategia-vencedora-consorcio" className="text-blue-900 hover:underline font-semibold">Guia de Estratégias de Crédito</a> ou explore outras <a href="/ferramentas" className="text-blue-900 hover:underline font-semibold">ferramentas empresariais gratuitas</a>.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs text-slate-500">
            Esta é uma simulação educativa baseada em dados de mercado. Os valores finais podem variar conforme as condições específicas de cada instituição e produto financeiro.
          </p>
        </div>
      </div>
    </main>
  );
}
