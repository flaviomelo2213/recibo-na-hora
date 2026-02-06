"use client";

import { useState } from "react";
import Link from "next/link";
import { CATEGORIES, TOOLS } from "@/_data/catalog";
import {
  FileText,
  Receipt,
  FileSignature,
  Clipboard,
  Scale,
  Shield,
  Sparkles,
  Home as HomeIcon,
  Contact,
  Calculator as CalculatorIcon,
  Calculator,
  MessageCircle,
  TrendingDown,
  Clock,
  DollarSign,
  CheckCircle2,
  XCircle,
  AlertCircle
} from "lucide-react";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const iconMap = {
  receipt: Receipt,
  fileText: FileText,
  fileSignature: FileSignature,
  clipboard: Clipboard,
  scale: Scale,
  shield: Shield,
  sparkles: Sparkles,
  home: HomeIcon,
  contact: Contact,
  calculator: CalculatorIcon,
};

export default function HomePage() {
  const mostUsed = TOOLS.filter((t) => t.mostUsed).slice(0, 6);

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
      `Olá! Tenho dúvidas sobre estratégia de consórcio.\n\n` +
      `Valor de referência: ${formatCurrency(creditAmount)}\n` +
      `Gostaria de entender melhor como funciona a matemática do consórcio e como avaliar propostas.`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <main className="bg-white">
      <section id="simulador-credito" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-4 sm:p-6 mb-8 text-slate-900">
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
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Calculator className="w-4 h-4 text-green-300" />
              <span className="text-sm font-medium text-white">Guia Educativo de Consórcio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Entenda a matemática
              <span className="block text-green-300 mt-2">
                do consórcio na prática
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Simulador educativo para você entender como funcionam taxas, prazos e lances. Compare com outras opções de crédito e tome decisões informadas.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="credit-hero" className="block text-sm font-semibold text-slate-900 mb-2">
                      Quanto de capital de giro você precisa?
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">R$</span>
                      <input
                        id="credit-hero"
                        type="text"
                        value={creditValue}
                        onChange={(e) => {
                          const value = e.target.value.replace(/[^\d]/g, "");
                          setCreditValue(value);
                        }}
                        className="w-full pl-12 pr-4 py-4 border-2 border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent text-lg font-semibold text-slate-900"
                        placeholder="100000"
                      />
                    </div>
                    <p className="mt-2 text-xs text-slate-500">Digite apenas números (ex: 100000 para R$ 100 mil)</p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <button
                      onClick={() => setCreditValue("100000")}
                      className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium text-slate-700 transition-colors"
                    >
                      R$ 100k
                    </button>
                    <button
                      onClick={() => setCreditValue("200000")}
                      className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium text-slate-700 transition-colors"
                    >
                      R$ 200k
                    </button>
                    <button
                      onClick={() => setCreditValue("300000")}
                      className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium text-slate-700 transition-colors"
                    >
                      R$ 300k
                    </button>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <DollarSign className="w-5 h-5 text-blue-900" />
                      <h3 className="text-sm font-semibold text-blue-900">Valor Líquido Estimado</h3>
                    </div>
                    <div className="text-3xl font-bold text-blue-900 mb-1">
                      {formatCurrency(realPurchasingPower)}
                    </div>
                    <p className="text-xs text-blue-700">
                      Exemplo: após taxa administrativa de {ADMIN_FEE_PERCENT}%
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-green-700" />
                      <h4 className="text-sm font-semibold text-green-900">Contemplação Rápida</h4>
                    </div>
                    <div className="text-2xl font-bold text-green-900 mb-1">6 a 8 meses</div>
                    <p className="text-xs text-green-700">Tempo médio com lance fixo de 44 parcelas</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <div className="text-xs text-slate-600 font-medium mb-1">Lance Fixo</div>
                      <div className="text-lg font-bold text-slate-900">{formatCurrency(fixedBidValue)}</div>
                      <div className="text-xs text-slate-500 mt-1">Em 44 parcelas</div>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <div className="text-xs text-slate-600 font-medium mb-1">Parcela Base</div>
                      <div className="text-lg font-bold text-slate-900">{formatCurrency(monthlyInstallment)}</div>
                      <div className="text-xs text-slate-500 mt-1">Por {TERM_MONTHS} meses</div>
                    </div>
                  </div>

                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-3 shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Dúvidas sobre a estratégia? Fale com o apoiador do projeto
                  </button>

                  <Link
                    href="/consultoria-credito"
                    className="block text-center text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Ver detalhes completos da estratégia →
                  </Link>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Exemplo de Taxa: 24,20%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>Prazo Estimado: 220 meses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>Dados de Mercado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-blue-200">
              Esta é uma simulação educativa baseada em dados de mercado. Os valores são exemplificativos e podem variar conforme administradora e condições específicas.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Comparador Técnico: Financiamento vs Consórcio
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Entenda as diferenças fundamentais entre as duas principais formas de crédito no Brasil
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
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
                  <p><strong>Juros Compostos:</strong> Taxa mensal incide sobre saldo devedor (juros sobre juros)</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-red-600 mt-0.5">•</span>
                  <p><strong>Entrada Alta:</strong> Geralmente 20-30% do valor à vista</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-red-600 mt-0.5">•</span>
                  <p><strong>Parcelas Variáveis:</strong> Sistema SAC (decrescente) ou Price (fixas com juros embutidos)</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-red-600 mt-0.5">•</span>
                  <p><strong>Custo Total Alto:</strong> Juros podem dobrar o valor final em prazos longos</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-red-600 mt-0.5">•</span>
                  <p><strong>Crédito Imediato:</strong> Aprovação em dias, bem liberado rapidamente</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-red-50 rounded-lg">
                <p className="text-xs text-red-800">
                  <strong>Exemplo:</strong> R$ 200k financiados a 9,5% a.a. por 30 anos = R$ 513k pagos (R$ 213k de juros)
                </p>
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
                  <p><strong>Taxa Administrativa Única:</strong> Calculada uma vez no início, sem juros compostos</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-green-600 mt-0.5">•</span>
                  <p><strong>Sem Entrada:</strong> Pode começar sem valor inicial (ou lance embutido diluído)</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-green-600 mt-0.5">•</span>
                  <p><strong>Parcelas Fixas:</strong> Valor previsível durante todo o período</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-green-600 mt-0.5">•</span>
                  <p><strong>Custo Total Planejado:</strong> Sabe exatamente quanto pagará desde o início</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-green-600 mt-0.5">•</span>
                  <p><strong>Contemplação Variável:</strong> Sorteio ou lance (sem garantia de prazo)</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-xs text-green-800">
                  <strong>Exemplo:</strong> R$ 263k (24,20% taxa adm) em 220 meses = R$ 263k pagos (sem juros compostos)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-blue-900 mb-2">Quando cada opção faz mais sentido?</h4>
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-blue-900">
                  <div>
                    <p className="font-semibold mb-1">Financiamento é melhor se:</p>
                    <ul className="space-y-1 ml-4 list-disc">
                      <li>Você precisa do bem imediatamente</li>
                      <li>Tem entrada disponível em dinheiro</li>
                      <li>Prefere certeza de prazo curto</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Consórcio é melhor se:</p>
                    <ul className="space-y-1 ml-4 list-disc">
                      <li>Pode planejar a aquisição (6-8 meses ou mais)</li>
                      <li>Quer custo total menor no longo prazo</li>
                      <li>Prefere parcelas menores e previsíveis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Entendendo a Matemática do Consórcio
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Aprenda a calcular e comparar propostas para tomar decisões informadas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
              1
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6 pt-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Taxa Administrativa Total vs Mensal</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                Se a taxa administrativa é 24,20% sobre R$ 100.000 (R$ 24.200), distribuída em 220 meses, a taxa mensal efetiva é apenas R$ 110/mês, muito inferior aos 2-3% de juros bancários.
              </p>
              <div className="p-3 bg-blue-50 rounded-lg text-xs text-blue-900">
                <strong>Fórmula:</strong> Taxa Adm Total ÷ Prazo em Meses = Custo Mensal Fixo
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
              2
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6 pt-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Custo Efetivo Total (CET)</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                O CET inclui TODAS as despesas: taxa administrativa, seguro prestamista, fundo de reserva e taxa de adesão. Sempre peça o CET da proposta.
              </p>
              <div className="p-3 bg-blue-50 rounded-lg text-xs text-blue-900">
                <strong>Exemplo:</strong> CET de 25,5% a.a. = 1,91% a.m. efetivo (sem juros compostos)
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
              3
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6 pt-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Impacto do Lance Embutido</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                Lance de 25% em 44 parcelas aumenta parcela temporariamente, mas garante contemplação rápida. Após contemplação, volta à parcela base.
              </p>
              <div className="p-3 bg-blue-50 rounded-lg text-xs text-blue-900">
                <strong>Cálculo:</strong> R$ 25.148 ÷ 44 = R$ 571/mês adicional por 44 meses
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
            Use o Simulador Acima para Testar Seus Próprios Números
          </h3>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-700 mb-2">24,20%</div>
              <p className="text-sm text-slate-700">Taxa administrativa exemplificativa</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-700 mb-2">220</div>
              <p className="text-sm text-slate-700">Meses de prazo típico</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-700 mb-2">6-8</div>
              <p className="text-sm text-slate-700">Meses até contemplação com lance</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog/estrategia-vencedora-consorcio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
          >
            Ler Guia Completo de Consórcio
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pb-12">
        <header className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Ferramentas Mais Usadas</h2>
          <p className="mt-1 text-sm text-slate-600">Crie documentos profissionais em segundos</p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mostUsed.map((t) => {
            const disabled = !!t.comingSoon || !t.href;
            const Icon = t.iconKey ? iconMap[t.iconKey] : FileText;

            return (
              <div
                key={t.id}
                className={cx(
                  "rounded-lg bg-white border border-slate-200 p-5 transition-all",
                  disabled ? "opacity-60" : "hover:border-slate-300 hover:shadow-sm"
                )}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-slate-700" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-slate-900 mb-1">{t.name}</h3>
                    {(t.badges || []).length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {(t.badges || []).map((b) => (
                          <span
                            key={b}
                            className={cx(
                              "text-[10px] font-medium px-2 py-0.5 rounded",
                              b === "Popular" && "bg-emerald-50 text-emerald-700",
                              b === "Novo" && "bg-blue-50 text-blue-700",
                              b === "Grátis" && "bg-slate-100 text-slate-600",
                              b === "Beta" && "bg-amber-50 text-amber-700",
                              b === "Em breve" && "bg-slate-50 text-slate-500"
                            )}
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">{t.description}</p>

                <div className="pt-3 border-t border-slate-100">
                  {disabled ? (
                    <span className="text-xs font-medium text-slate-400">Em breve</span>
                  ) : (
                    <Link
                      href={t.href!}
                      className="inline-flex items-center justify-center w-full rounded-md bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition-colors"
                    >
                      Acessar
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-slate-50 border-y border-slate-200">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              Guia Definitivo do Recibo Seguro
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">
              Aprenda a criar, validar e utilizar recibos com segurança jurídica
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-blue-900" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Elementos Essenciais</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Todo recibo válido deve conter identificação completa das partes, valor por extenso e numeral, data, descrição do serviço ou produto, e assinatura do recebedor.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Validade Jurídica</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Recibos têm validade legal quando preenchidos corretamente. Guarde por no mínimo 5 anos para fins fiscais e trabalhistas, especialmente em casos de MEI e autônomos.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                <Receipt className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Tipos Mais Comuns</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Recibo de pagamento, recibo de aluguel, recibo de prestação de serviços, recibo de compra e venda, e recibo de adiantamento. Cada um possui especificidades próprias.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Como Preencher um Recibo de Forma Segura</h3>
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <p>
                Um <strong>recibo seguro</strong> é aquele que contém todas as informações necessárias para comprovar uma transação financeira. Comece sempre identificando quem recebeu o pagamento (nome completo e CPF/CNPJ) e quem pagou (também com identificação completa). O valor deve ser escrito tanto em algarismos quanto por extenso para evitar adulterações.
              </p>
              <p>
                A descrição detalhada é fundamental: especifique o que foi pago, o período referente (se aplicável) e qualquer informação relevante como número de contrato ou parcela. A data deve ser a do efetivo pagamento, e a assinatura do recebedor é obrigatória para dar validade ao documento. Em transações de maior valor, considere incluir duas testemunhas com assinatura.
              </p>
              <p>
                Para <strong>modelos gratuitos e profissionais</strong>, o ReciboNaHora oferece ferramentas que já seguem as melhores práticas jurídicas. Nossos geradores incluem todos os campos obrigatórios e permitem personalização conforme sua necessidade. Você pode criar recibos simples, recibos com PIX, recibos de aluguel e muito mais, sempre com orientação sobre cada campo a ser preenchido.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/ferramentas/recibo-simples"
                className="inline-flex items-center px-4 py-2 bg-blue-900 text-white text-sm font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                Criar Recibo Simples
              </Link>
              <Link
                href="/blog/guia-lance-embutido"
                className="inline-flex items-center px-4 py-2 border border-slate-300 bg-white text-slate-700 text-sm font-semibold rounded-lg hover:bg-slate-50 transition-colors"
              >
                Ler Guia Completo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Categorias</h2>
          <p className="mt-1 text-sm text-slate-600">Navegue por tipo de documento</p>
        </header>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {CATEGORIES.map((c) => (
            <Link
              key={c.id}
              href={`/ferramentas?cat=${encodeURIComponent(c.id)}`}
              className="shrink-0 rounded-md bg-white border border-slate-200 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-slate-200 py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Guia de Documentação e Regras
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Entenda o que você precisa preparar e o que perguntar a qualquer administradora
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Documentos Comuns Exigidos</h3>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <p><strong>RG e CPF:</strong> Identificação básica (pode variar conforme administradora)</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <p><strong>Comprovante de Residência:</strong> Atualizado (últimos 3 meses)</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <p><strong>Comprovante de Renda:</strong> Holerite, Decore, extrato bancário ou declaração IR</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <p><strong>Certidões Negativas:</strong> Algumas administradoras podem exigir certidões de débitos</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <p><strong>Análise de Crédito:</strong> CPF limpo ou score mínimo (varia por instituição)</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-xs text-amber-900">
                  <strong>Importante:</strong> Cada administradora tem suas próprias diretrizes de aprovação. Consulte documentação específica antes de se comprometer.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Perguntas Essenciais a Fazer</h3>
              <div className="space-y-3 text-sm text-slate-700">
                <div className="p-3 bg-white border border-slate-200 rounded-lg">
                  <p className="font-semibold text-slate-900 mb-1">1. Qual a taxa de administração total?</p>
                  <p className="text-xs text-slate-600">E como ela é distribuída nas parcelas?</p>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-lg">
                  <p className="font-semibold text-slate-900 mb-1">2. Qual o Custo Efetivo Total (CET)?</p>
                  <p className="text-xs text-slate-600">Inclui todas as taxas, seguros e encargos?</p>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-lg">
                  <p className="font-semibold text-slate-900 mb-1">3. Como funcionam os lances?</p>
                  <p className="text-xs text-slate-600">Qual o percentual mínimo? Posso fazer lance embutido?</p>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-lg">
                  <p className="font-semibold text-slate-900 mb-1">4. Qual o histórico de contemplação?</p>
                  <p className="text-xs text-slate-600">Tempo médio de contemplação deste grupo específico?</p>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-lg">
                  <p className="font-semibold text-slate-900 mb-1">5. Quais as regras de desistência?</p>
                  <p className="text-xs text-slate-600">Posso sair antes da contemplação? Qual o custo?</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h4 className="font-bold text-blue-900 mb-3">Regulamentação e Fiscalização</h4>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              O consórcio é regulamentado pelo <strong>Banco Central do Brasil</strong> através da Circular 3.432/2009 e alterações posteriores. Todas as administradoras devem ser autorizadas pelo Bacen e seguir normas rígidas de transparência, cálculo de taxas e prestação de contas aos consorciados.
            </p>
            <p className="text-xs text-blue-800">
              Você pode verificar se uma administradora é regularizada consultando o site do Banco Central ou a ABAC (Associação Brasileira de Administradoras de Consórcios).
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-t border-slate-200">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <h3 className="text-base font-semibold text-slate-900">Parceiros Oficiais</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Trabalhamos com parceiros selecionados para oferecer mais soluções.
              </p>
              <Link
                href="/parcerias"
                className="mt-4 inline-flex items-center text-sm font-medium text-blue-900 hover:text-blue-800"
              >
                Ver parcerias
                <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <h3 className="text-base font-semibold text-slate-900">Apoio ao Projeto</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Este site é apoiado por <strong>Flavio Melo - Especialista em Estratégia de Crédito</strong>.
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="mt-4 inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700"
              >
                <MessageCircle className="w-4 h-4 mr-1" />
                Dúvidas? Fale com o apoiador
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
