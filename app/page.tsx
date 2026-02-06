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
  Calculator
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
  calculator: Calculator,
};

export default function HomePage() {
  const mostUsed = TOOLS.filter((t) => t.mostUsed).slice(0, 6);

  return (
    <main className="bg-white">
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Documentos simples,
            <span className="block text-blue-900 mt-1">
              sem complicação
            </span>
          </h1>

          <p className="mt-6 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Crie recibos, contratos, requerimentos e outros documentos essenciais em segundos.
            Ferramentas online, gratuitas e profissionais.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/ferramentas"
              className="rounded-lg bg-blue-900 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800 transition-colors"
            >
              Explorar ferramentas
            </Link>
            <Link
              href="/como-ganhamos-dinheiro"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Transparência
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pb-12">
        <header className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Ferramentas mais usadas</h2>
          <p className="mt-1 text-sm text-slate-600">Acesse os modelos mais populares</p>
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
              <h3 className="text-base font-semibold text-slate-900">Como ganhamos dinheiro</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Entenda como mantemos o projeto gratuito e sustentável.
              </p>
              <Link
                href="/como-ganhamos-dinheiro"
                className="mt-4 inline-flex items-center text-sm font-medium text-blue-900 hover:text-blue-800"
              >
                Ver transparência
                <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
