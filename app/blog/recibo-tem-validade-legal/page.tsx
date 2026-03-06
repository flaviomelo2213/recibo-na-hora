import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Recibo Tem Validade Jurídica? Tudo que Você Precisa Saber | ReciboNaHora',
  description:
    'O recibo é válido como prova de pagamento? Quando pode ser contestado? O que a lei brasileira diz sobre recibos. Guia jurídico prático para autônomos e MEI.',
  keywords: [
    'recibo tem validade juridica',
    'recibo é válido',
    'recibo prova de pagamento',
    'validade recibo',
    'recibo legal',
  ],
  alternates: { canonical: 'https://recibonahora.com.br/blog/recibo-tem-validade-legal' },
  openGraph: {
    title: 'Recibo Tem Validade Jurídica? | ReciboNaHora',
    description: 'Quando o recibo é válido como prova de pagamento? O que a lei diz. Guia prático.',
    url: 'https://recibonahora.com.br/blog/recibo-tem-validade-legal',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O recibo tem validade jurídica no Brasil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. O recibo é um documento com validade jurídica no Brasil. Ele funciona como prova de pagamento e quitação de dívida. Para isso, precisa conter: valor, descrição do pagamento, data, identificação das partes e assinatura de quem recebeu.',
      },
    },
    {
      '@type': 'Question',
      name: 'Recibo gerado online tem validade jurídica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, desde que assinado pelo recebedor. O recibo gerado online tem o mesmo valor jurídico de um recibo em papel, desde que contenha todos os campos obrigatórios e a assinatura de quem recebeu o valor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Por quanto tempo o recibo é válido?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não há prazo de validade específico para o recibo. No entanto, o prazo prescricional para cobranças baseadas em recibos varia de 1 a 10 anos dependendo da relação jurídica. Para serviços, o prazo geral é de 5 anos.',
      },
    },
    {
      '@type': 'Question',
      name: 'O recibo pode ser usado como prova em processo judicial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. O recibo é aceito como documento probatório em processos judiciais. Ele pode ser usado para provar que um pagamento foi feito, especialmente em ações de cobrança, trabalhistas ou contratuais.',
      },
    },
  ],
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Recibo Tem Validade Jurídica? Tudo que Você Precisa Saber',
  datePublished: '2026-02-25',
  dateModified: '2026-03-06',
  author: { '@type': 'Organization', name: 'ReciboNaHora', url: 'https://recibonahora.com.br' },
  publisher: { '@type': 'Organization', name: 'ReciboNaHora', url: 'https://recibonahora.com.br' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://recibonahora.com.br/blog/recibo-tem-validade-legal' },
};

export default function ReciboValidadeLegalPage() {
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
              <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Jurídico</span>
              <span className="text-xs text-stone-400">5 min de leitura</span>
              <time className="text-xs text-stone-400" dateTime="2026-02-25">25 de fevereiro de 2026</time>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 leading-tight mb-4">
              Recibo Tem Validade Jurídica? Tudo que Você Precisa Saber
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed">
              Uma das dúvidas mais comuns de autônomos e MEIs: <strong>o recibo realmente vale como prova de pagamento?</strong>{' '}
              A resposta curta é sim — mas com condições. Veja o que diz a lei.
            </p>
          </header>

          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">A resposta direta: sim, o recibo tem validade jurídica</h2>
              <p className="text-stone-700 leading-relaxed">
                No Brasil, o recibo é um documento legalmente reconhecido como prova de pagamento.
                O Código Civil (art. 320) estabelece que <em>o devedor pode exigir quitação regular</em>,
                e o recibo é exatamente esse instrumento de quitação.
              </p>
              <p className="text-stone-700 leading-relaxed mt-3">
                Isso significa que, se você prestou um serviço e recebeu, o recibo assinado prova juridicamente
                que o pagamento foi realizado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">Quando o recibo é válido?</h2>
              <p className="text-stone-700 mb-4">Para que o recibo tenha plena validade jurídica, ele deve conter:</p>
              <ul className="space-y-2">
                {[
                  'Valor recebido — em número e por extenso',
                  'Identificação das partes — nome e CPF/CNPJ de quem pagou e de quem recebeu',
                  'Descrição do pagamento — o que está sendo quitado (serviço, produto, aluguel etc.)',
                  'Data — quando o dinheiro foi recebido',
                  'Assinatura do recebedor — indispensável para comprovar o ato',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-stone-700">
                    <span className="text-green-500 mt-0.5 font-bold">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl">
              <p className="text-blue-900 font-semibold text-sm">Atenção</p>
              <p className="text-blue-800 text-sm mt-1">
                Um recibo sem assinatura do recebedor não comprova que o dinheiro foi de fato entregue.
                Sempre exija ou fornecer a assinatura.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">Recibo gerado online tem validade?</h2>
              <p className="text-stone-700 leading-relaxed">
                Sim. O recibo gerado por ferramentas online (como o ReciboNaHora) tem o mesmo valor jurídico
                de um recibo escrito à mão ou em papel timbrado, <strong>desde que assinado</strong>.
              </p>
              <p className="text-stone-700 leading-relaxed mt-3">
                Para um fluxo 100% digital, você pode usar assinatura eletrônica (Gov.br, DocuSign etc.)
                para dispensar a assinatura física e o recibo continua válido.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">Por quanto tempo o recibo é válido?</h2>
              <p className="text-stone-700 leading-relaxed">
                O recibo em si não expira. O que varia é o <strong>prazo prescricional</strong> para
                usar o recibo como prova em uma ação judicial:
              </p>
              <div className="mt-4 border border-stone-200 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-stone-100">
                      <th className="text-left px-4 py-2 text-stone-700 font-semibold">Tipo de relação</th>
                      <th className="text-left px-4 py-2 text-stone-700 font-semibold">Prazo de prescrição</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Prestação de serviços (geral)', '5 anos'],
                      ['Relação trabalhista (após término do contrato)', '2 anos'],
                      ['Aluguel / locação', '3 anos'],
                      ['Cobranças em geral', '3 anos'],
                    ].map(([tipo, prazo], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                        <td className="px-4 py-2 text-stone-700">{tipo}</td>
                        <td className="px-4 py-2 text-stone-900 font-medium">{prazo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-stone-900 mb-3">Gere um recibo válido agora</h2>
              <p className="text-stone-700 text-sm mb-4">
                Use o gerador gratuito do ReciboNaHora. Todos os campos obrigatórios já incluídos.
              </p>
              <Link href="/ferramentas/recibo-simples" className="inline-flex items-center gap-2 bg-stone-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-stone-700 transition">
                Gerar Recibo Grátis
              </Link>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Perguntas frequentes</h2>
              <div className="space-y-5">
                {[
                  ['O recibo tem validade jurídica no Brasil?',
                   'Sim. O recibo é um documento com validade jurídica. Funciona como prova de pagamento e quitação. Para isso, precisa ter: valor, descrição, data, identificação das partes e assinatura de quem recebeu.'],
                  ['Recibo gerado online tem validade jurídica?',
                   'Sim, desde que assinado pelo recebedor. O formato do documento (online ou papel) não altera sua validade.'],
                  ['Por quanto tempo o recibo é válido?',
                   'O recibo não expira. O prazo prescricional para cobranças baseadas em recibos varia de 2 a 5 anos dependendo do tipo de relação jurídica.'],
                  ['O recibo pode ser usado como prova em processo judicial?',
                   'Sim. O recibo é aceito como prova documental em processos judiciais, inclusive em ações de cobrança, trabalhistas e contratuais.'],
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
