import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Como Fazer um Recibo: Guia Completo Passo a Passo | ReciboNaHora',
  description:
    'Saiba como fazer um recibo corretamente: campos obrigatórios, modelo pronto, validade jurídica e como gerar em PDF gratuitamente. Guia completo para autônomos e MEI.',
  keywords: [
    'como fazer recibo',
    'como preencher recibo',
    'modelo recibo',
    'recibo pagamento',
    'recibo simples',
  ],
  alternates: { canonical: 'https://recibonahora.com.br/blog/como-fazer-recibo' },
  openGraph: {
    title: 'Como Fazer um Recibo: Guia Completo | ReciboNaHora',
    description: 'Guia completo: campos obrigatórios, modelos prontos e como gerar recibo em PDF grátis.',
    url: 'https://recibonahora.com.br/blog/como-fazer-recibo',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quais são os campos obrigatórios de um recibo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Um recibo válido deve conter: (1) nome completo e CPF/CNPJ de quem recebe, (2) nome completo e CPF/CNPJ de quem paga, (3) valor por extenso e em número, (4) descrição do que foi pago (serviço, produto ou dívida), (5) data do recebimento, (6) local e (7) assinatura do recebedor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como fazer um recibo de pagamento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para fazer um recibo de pagamento: 1) Acesse um gerador online gratuito como o ReciboNaHora.com.br, 2) Preencha os dados do pagador e do recebedor, 3) Informe o valor e a descrição do pagamento, 4) Adicione a data, 5) Gere o PDF e assine. O recibo estará pronto em menos de 2 minutos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Recibo precisa de assinatura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. A assinatura do recebedor (quem recebe o dinheiro) é essencial para que o recibo tenha validade como prova de pagamento. Sem assinatura, o documento não comprova que o dinheiro foi de fato recebido.',
      },
    },
    {
      '@type': 'Question',
      name: 'Recibo precisa de reconhecimento de firma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não obrigatoriamente. Para a maioria das transações do dia a dia, o reconhecimento de firma não é exigido. No entanto, para operações de alto valor ou que possam gerar disputas judiciais, reconhecer a firma em cartório dá mais segurança jurídica.',
      },
    },
  ],
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Como Fazer um Recibo: Guia Completo Passo a Passo',
  description: 'Guia completo sobre como fazer um recibo corretamente, com campos obrigatórios e modelos prontos.',
  datePublished: '2026-02-20',
  dateModified: '2026-03-06',
  author: { '@type': 'Organization', name: 'ReciboNaHora', url: 'https://recibonahora.com.br' },
  publisher: { '@type': 'Organization', name: 'ReciboNaHora', url: 'https://recibonahora.com.br' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://recibonahora.com.br/blog/como-fazer-recibo' },
};

export default function ComoFazerReciboPage() {
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
              <span className="text-xs font-semibold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Recibos</span>
              <span className="text-xs text-stone-400">6 min de leitura</span>
              <time className="text-xs text-stone-400" dateTime="2026-02-20">20 de fevereiro de 2026</time>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 leading-tight mb-4">
              Como Fazer um Recibo: Guia Completo Passo a Passo
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed">
              Um recibo é um dos documentos mais usados por autônomos, MEIs e pequenos negócios.
              Neste guia, você aprende exatamente o que é um recibo, quais campos são obrigatórios
              e como gerar um em PDF gratuitamente.
            </p>
          </header>

          <div className="prose prose-stone max-w-none space-y-8">

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">O que é um recibo?</h2>
              <p className="text-stone-700 leading-relaxed">
                Um <strong>recibo de pagamento</strong> é um documento que comprova que uma quantia em dinheiro
                foi recebida por uma pessoa ou empresa. Funciona como uma prova de quitação: quem recebeu
                confirma por escrito que o valor foi pago.
              </p>
              <p className="text-stone-700 leading-relaxed mt-3">
                Diferente da nota fiscal (que é um documento fiscal emitido pelo fisco), o recibo é
                um documento civil, mais simples, usado principalmente em transações com pessoas físicas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">Campos obrigatórios de um recibo</h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                Para que um recibo tenha validade jurídica, ele deve conter os seguintes campos:
              </p>
              <ol className="space-y-3">
                {[
                  ['Nome completo do recebedor', 'Quem está recebendo o pagamento (nome e CPF ou CNPJ)'],
                  ['Nome completo do pagador', 'Quem está efetuando o pagamento (nome e CPF ou CNPJ)'],
                  ['Valor recebido', 'Tanto em número quanto por extenso (ex: R$ 500,00 — quinhentos reais)'],
                  ['Descrição do pagamento', 'O que está sendo pago: serviço prestado, produto vendido ou dívida quitada'],
                  ['Data do recebimento', 'Dia, mês e ano em que o dinheiro foi recebido'],
                  ['Local', 'Cidade e estado onde a transação ocorreu'],
                  ['Assinatura do recebedor', 'Essencial para dar validade ao documento'],
                ].map(([campo, detalhe], i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <strong className="text-stone-900">{campo}</strong>
                      <span className="text-stone-600"> — {detalhe}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">Como fazer um recibo passo a passo</h2>
              <div className="space-y-4">
                {[
                  ['Acesse o gerador de recibos', 'Abra o ReciboNaHora.com.br e clique em "Recibo Simples" ou "Recibo com PIX".'],
                  ['Preencha os dados do recebedor', 'Informe seu nome completo e CPF (ou razão social e CNPJ se tiver empresa).'],
                  ['Preencha os dados do pagador', 'Nome e CPF de quem está pagando.'],
                  ['Informe o valor e a descrição', 'O valor em reais e o que está sendo pago (ex: "serviço de pintura residencial").'],
                  ['Confirme a data e o local', 'Data de hoje e a cidade onde ocorre o pagamento.'],
                  ['Gere e baixe o PDF', 'Clique em "Gerar PDF". O documento fica pronto em segundos para imprimir ou enviar por WhatsApp.'],
                ].map(([passo, desc], i) => (
                  <div key={i} className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
                    <span className="flex-shrink-0 w-8 h-8 bg-stone-900 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <strong className="text-stone-900 block mb-1">{passo}</strong>
                      <span className="text-stone-600 text-sm">{desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-stone-900 mb-3">Gere seu recibo agora — grátis</h2>
              <p className="text-stone-700 text-sm mb-4">
                Use o gerador gratuito do ReciboNaHora. Sem cadastro, sem aplicativo, funciona no celular e no computador.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/ferramentas/recibo-simples" className="inline-flex items-center gap-2 bg-stone-900 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-stone-700 transition">
                  Recibo Simples
                </Link>
                <Link href="/ferramentas/recibo-pix" className="inline-flex items-center gap-2 bg-amber-500 text-stone-900 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-amber-400 transition">
                  Recibo com PIX
                </Link>
                <Link href="/ferramentas/imobiliario" className="inline-flex items-center gap-2 border border-stone-300 text-stone-700 px-4 py-2.5 rounded-xl text-sm font-semibold hover:border-stone-500 transition">
                  Recibo de Aluguel
                </Link>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Perguntas frequentes</h2>
              <div className="space-y-5">
                {[
                  ['Quais são os campos obrigatórios de um recibo?',
                   'Um recibo válido deve conter: nome e CPF/CNPJ de quem recebe e de quem paga, valor por extenso e em número, descrição do que foi pago, data, local e assinatura do recebedor.'],
                  ['Como fazer um recibo de pagamento?',
                   'Acesse o ReciboNaHora.com.br, preencha os dados do pagador, recebedor, valor e descrição, e clique em "Gerar PDF". O recibo fica pronto em menos de 2 minutos.'],
                  ['Recibo precisa de assinatura?',
                   'Sim. A assinatura do recebedor é essencial para que o recibo tenha validade como prova de pagamento. Sem ela, o documento não comprova o recebimento.'],
                  ['Recibo precisa de reconhecimento de firma?',
                   'Não obrigatoriamente. Para transações do dia a dia, não é exigido. Para operações de alto valor, reconhecer a firma em cartório dá mais segurança jurídica.'],
                ].map(([q, a], i) => (
                  <div key={i} className="border-b border-stone-200 pb-5">
                    <h3 className="font-semibold text-stone-900 mb-2">{q}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">Leia também</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/blog/recibo-tem-validade-legal" className="group p-4 bg-stone-50 rounded-xl border border-stone-200 hover:border-amber-300 transition">
                  <span className="text-xs text-amber-600 font-semibold">Jurídico</span>
                  <p className="font-semibold text-stone-900 mt-1 group-hover:text-amber-700 transition text-sm">Recibo Tem Validade Jurídica?</p>
                </Link>
                <Link href="/blog/diferenca-recibo-nota-fiscal" className="group p-4 bg-stone-50 rounded-xl border border-stone-200 hover:border-amber-300 transition">
                  <span className="text-xs text-amber-600 font-semibold">MEI & Fiscal</span>
                  <p className="font-semibold text-stone-900 mt-1 group-hover:text-amber-700 transition text-sm">Diferença entre Recibo e Nota Fiscal</p>
                </Link>
              </div>
            </section>

          </div>
        </article>
      </main>
    </>
  );
}
