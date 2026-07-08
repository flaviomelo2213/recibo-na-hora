import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Diferença entre Recibo e Nota Fiscal: Quando Usar Cada Um | ReciboNaHora',
  description:
    'Recibo ou nota fiscal? Descubra a diferença jurídica e fiscal entre os dois documentos, quando o recibo substitui a NF e quando você é obrigado a emitir nota. Guia prático para MEI e autônomos.',
  keywords: [
    'diferenca recibo nota fiscal',
    'recibo substitui nota fiscal',
    'quando emitir nota fiscal',
    'recibo ou nf',
    'mei nota fiscal',
  ],
  alternates: { canonical: 'https://www.recibonahora.com.br/blog/diferenca-recibo-nota-fiscal' },
  openGraph: {
    title: 'Diferença entre Recibo e Nota Fiscal | ReciboNaHora',
    description: 'Quando usar recibo e quando emitir nota fiscal? Guia prático para MEI e autônomos.',
    url: 'https://www.recibonahora.com.br/blog/diferenca-recibo-nota-fiscal',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Qual a diferença entre recibo e nota fiscal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O recibo é um documento civil que comprova o recebimento de um pagamento. A nota fiscal é um documento fiscal emitido para o governo que registra uma operação comercial. O recibo não substitui a nota fiscal para fins tributários.',
      },
    },
    {
      '@type': 'Question',
      name: 'O MEI é obrigado a emitir nota fiscal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende do cliente. Para clientes pessoas físicas (consumidor final), o MEI não é obrigado a emitir NF. Para empresas (pessoas jurídicas / CNPJ), a emissão da nota fiscal é obrigatória, salvo se a empresa emitente já emitir uma nota de entrada.',
      },
    },
    {
      '@type': 'Question',
      name: 'Autônomo sem CNPJ pode emitir recibo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. O autônomo sem CNPJ pode e deve emitir Recibo de Pagamento de Autônomo (RPA) para comprovar o recebimento de seu serviço. O RPA também serve para a empresa contratante calcular e reter os impostos devidos (INSS, IR, ISS).',
      },
    },
  ],
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Diferença entre Recibo e Nota Fiscal: Quando Usar Cada Um',
  datePublished: '2026-03-01',
  dateModified: '2026-03-06',
  author: { '@type': 'Organization', name: 'ReciboNaHora', url: 'https://www.recibonahora.com.br' },
  publisher: { '@type': 'Organization', name: 'ReciboNaHora', url: 'https://www.recibonahora.com.br' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.recibonahora.com.br/blog/diferenca-recibo-nota-fiscal' },
};

export default function DiferencaReciboNotaFiscalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main className="bg-white min-h-screen">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Blog
          </Link>

          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">MEI & Fiscal</span>
              <span className="text-xs text-stone-400">7 min de leitura</span>
              <time className="text-xs text-stone-400" dateTime="2026-03-01">1 de março de 2026</time>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 leading-tight mb-4">
              Diferença entre Recibo e Nota Fiscal: Quando Usar Cada Um
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed">
              Muitos autônomos e MEIs ficam em dúvida: <strong>devo emitir recibo ou nota fiscal?</strong>{' '}
              A resposta depende de quem é seu cliente e do seu regime tributário. Veja o guia completo.
            </p>
          </header>

          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">Resumo rápido: a diferença fundamental</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="border border-blue-200 bg-blue-50 rounded-xl p-5">
                  <h3 className="font-bold text-blue-900 mb-2">Recibo</h3>
                  <ul className="space-y-1 text-blue-800 text-sm">
                    <li>Documento <strong>civil</strong></li>
                    <li>Comprova o <strong>recebimento</strong> de pagamento</li>
                    <li>Não tem valor fiscal</li>
                    <li>Não é entregue ao governo</li>
                    <li>Pode ser feito por qualquer pessoa</li>
                  </ul>
                </div>
                <div className="border border-green-200 bg-green-50 rounded-xl p-5">
                  <h3 className="font-bold text-green-900 mb-2">Nota Fiscal</h3>
                  <ul className="space-y-1 text-green-800 text-sm">
                    <li>Documento <strong>fiscal</strong></li>
                    <li>Registra a operação <strong>tributariamente</strong></li>
                    <li>Tem valor fiscal (base para impostos)</li>
                    <li>É transmitida à Receita Federal</li>
                    <li>Exige CNPJ ou credenciamento</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">Quando usar o recibo?</h2>
              <p className="text-stone-700 leading-relaxed mb-4">Use o recibo quando:</p>
              <ul className="space-y-2">
                {[
                  'Você é autônomo (pessoa física) prestando serviço para pessoa física',
                  'Você é MEI e seu cliente é uma pessoa física (consumidor final)',
                  'Há pagamento de aluguel entre pessoas físicas',
                  'Quitação de dívidas ou empréstimos pessoais',
                  'Venda de bens usados entre particulares',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-stone-700">
                    <span className="text-blue-500 mt-0.5 font-bold">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">Quando emitir Nota Fiscal?</h2>
              <p className="text-stone-700 leading-relaxed mb-4">A nota fiscal é obrigatória quando:</p>
              <ul className="space-y-2">
                {[
                  'Você é MEI e seu cliente é uma empresa (CNPJ)',
                  'Você tem Simples Nacional, Lucro Presumido ou Lucro Real',
                  'O cliente solicitar NF para contabilidade (mesmo sendo PF)',
                  'A operação envolve venda de produtos (ICMS)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-stone-700">
                    <span className="text-red-500 mt-0.5 font-bold">&#9679;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">E o RPA? O que é o Recibo de Pagamento de Autônomo?</h2>
              <p className="text-stone-700 leading-relaxed">
                O <strong>RPA (Recibo de Pagamento de Autônomo)</strong> é um recibo especial usado quando
                uma <strong>empresa contrata um autônomo pessoa física</strong>. Nele, a empresa desconta
                e recolhe os impostos devidos pelo autônomo: INSS (11% ou 20%), IR e ISS municipal.
              </p>
              <p className="text-stone-700 leading-relaxed mt-3">
                O RPA não substitui a nota fiscal para fins fiscais da empresa, mas é a forma correta
                de formalizar o pagamento para o autônomo sem CNPJ.
              </p>
              <div className="mt-4">
                <Link href="/ferramentas/recibo-rpa" className="inline-flex items-center gap-2 bg-stone-100 text-stone-900 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-stone-200 transition">
                  Gerar RPA Grátis
                </Link>
              </div>
            </section>

            <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-stone-900 mb-3">Ferramentas gratuitas do ReciboNaHora</h2>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  ['/ferramentas/recibo-simples', 'Recibo Simples'],
                  ['/ferramentas/recibo-pix', 'Recibo com PIX'],
                  ['/ferramentas/recibo-rpa', 'Recibo de Autônomo (RPA)'],
                ].map(([href, label]) => (
                  <Link key={href} href={href} className="bg-white border border-stone-200 hover:border-amber-400 text-stone-800 px-4 py-3 rounded-xl text-sm font-semibold text-center hover:shadow-sm transition">
                    {label}
                  </Link>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Perguntas frequentes</h2>
              <div className="space-y-5">
                {[
                  ['Qual a diferença entre recibo e nota fiscal?',
                   'O recibo é um documento civil que comprova o recebimento de pagamento. A nota fiscal é um documento fiscal que registra uma operação para o fisco. O recibo não substitui a nota fiscal para fins tributários.'],
                  ['O MEI é obrigado a emitir nota fiscal?',
                   'Para clientes pessoas físicas, não. Para empresas (CNPJ), sim. O MEI deve emitir NFS-e (Nota Fiscal de Serviços Eletrônica) quando vender para outras empresas.'],
                  ['Autônomo sem CNPJ pode emitir recibo?',
                   'Sim. O autônomo sem CNPJ usa o RPA (Recibo de Pagamento de Autônomo). Nele, a empresa contratante calcula e retém os impostos devidos.'],
                ].map(([q, a], i) => (
                  <div key={i} className="border-b border-stone-200 pb-5">
                    <h3 className="font-semibold text-stone-900 mb-2">{q}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </article>
      </main>
    </>
  );
}
