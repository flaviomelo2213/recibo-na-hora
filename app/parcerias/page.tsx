import Link from "next/link";
import type { Metadata } from "next";
import { buildOpenGraph } from '@/lib/metadata';
import { PARTNER_OFFERS } from '@/_data/partnerOffers';

const title = "Parcerias e Soluções Recomendadas para MEI e Autônomos";
const description =
  "Conheça serviços e empresas que podem ajudar MEIs, autônomos e pequenos negócios. Alguns links podem gerar comissão para manter o ReciboNaHora gratuito.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/parcerias",
  },
  openGraph: buildOpenGraph({ title, description, path: '/parcerias' }),
};

const categoryLabels: Record<string, string> = {
  assinatura: 'Assinatura digital',
  'conta-pj': 'Conta PJ',
  pagamentos: 'Pagamentos',
  certificado: 'Certificado digital',
  contabilidade: 'Contabilidade',
  'loja-online': 'Loja online',
};

const faqItems = [
  {
    question: "Eu pago mais por usar um link de parceria?",
    answer:
      "Não. Quando existe uma parceria com comissão, ela é paga pelo parceiro e não adiciona custo ao preço informado ao usuário. Sempre confira as condições diretamente no site da empresa.",
  },
  {
    question: "Por que o ReciboNaHora usa links de parceria?",
    answer:
      "O ReciboNaHora oferece ferramentas gratuitas. Quando um usuário contrata um serviço que já precisava através de um link elegível, o projeto pode receber uma comissão. Isso ajuda a pagar hospedagem, manutenção e melhorias sem cobrar pelo uso das ferramentas.",
  },
  {
    question: "Todos os serviços desta página já possuem parceria ativa?",
    answer:
      "Não. Serviços com botão de acesso já possuem um link disponível no projeto. Os demais aparecem como 'Em avaliação' até termos um link oficial ou de parceria validado. Não inventamos links de afiliado.",
  },
  {
    question: "Como escolhemos as soluções mostradas aqui?",
    answer:
      "Priorizamos serviços relacionados às necessidades de MEIs, autônomos e pequenos negócios, como assinatura digital, conta PJ, pagamentos, certificado digital, contabilidade e vendas online. A contratação é sempre opcional e feita diretamente com a empresa escolhida.",
  },
  {
    question: "Tenho uma empresa e quero propor uma parceria. Como faço?",
    answer:
      "Entre em contato pelo canal indicado no site. Avaliamos relevância para o público, transparência da oferta e condições da parceria antes de publicar qualquer recomendação.",
  },
];

export default function ParceriasPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const active = PARTNER_OFFERS.filter((offer) => offer.status === 'active');
  const pending = PARTNER_OFFERS.filter((offer) => offer.status === 'pending');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="container mx-auto px-4 py-12 md:py-20">
        <header className="mx-auto mb-10 max-w-4xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-amber-700">
            Parcerias ReciboNaHora
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-stone-900 md:text-5xl">
            Soluções úteis para quem trabalha por conta própria
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-stone-600">
            Reunimos serviços que podem complementar nossas ferramentas gratuitas. Você não paga
            nada a mais por acessar um link de parceria. Quando uma contratação elegível gera
            comissão, esse valor ajuda a manter o ReciboNaHora gratuito.
          </p>
        </header>

        <section className="mx-auto mb-12 max-w-4xl rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-xl font-bold text-amber-950">
            Você não paga nada a mais — e pode ajudar o projeto
          </h2>
          <p className="mt-2 leading-relaxed text-amber-900">
            Se você já precisa de conta PJ, assinatura digital, maquininha, certificado ou outro
            serviço, começar pela nossa página de parcerias pode ajudar o site sem aumentar o seu
            custo. Não compre algo apenas para nos apoiar: use os links somente quando o serviço
            fizer sentido para você.
          </p>
          <p className="mt-3 text-sm text-amber-800">
            Saiba mais em{" "}
            <Link href="/como-ganhamos-dinheiro" className="font-semibold underline">
              Como Ganhamos Dinheiro
            </Link>.
          </p>
        </section>

        <section className="mb-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-stone-900">Parcerias disponíveis</h2>
              <p className="mt-1 text-sm text-stone-600">
                Somente mostramos botão externo quando existe um link validado no projeto.
              </p>
            </div>
          </div>

          {active.length ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {active.map((offer) => (
                <article
                  key={offer.id}
                  className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
                >
                  <span className="text-xs font-bold uppercase tracking-wide text-amber-700">
                    {categoryLabels[offer.category]}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-stone-900">{offer.name}</h3>
                  <p className="mt-3 flex-grow text-sm leading-relaxed text-stone-600">
                    {offer.shortDescription}
                  </p>
                  {offer.href ? (
                    <a
                      href={offer.href}
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className="mt-5 inline-flex justify-center rounded-xl bg-stone-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-stone-700"
                    >
                      {offer.cta}
                    </a>
                  ) : null}
                  <p className="mt-3 text-xs leading-relaxed text-stone-500">
                    {offer.disclosure || 'Pode existir relação comercial com o parceiro.'}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-stone-200 bg-white p-8 text-center text-stone-600">
              Novas parcerias estão sendo avaliadas.
            </div>
          )}
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-stone-900">Soluções em avaliação</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-stone-600">
            Estas categorias são relevantes para nosso público, mas ainda não exibimos link externo
            até termos uma parceria ou URL oficial validada.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pending.map((offer) => (
              <article
                key={offer.id}
                className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-5"
              >
                <span className="text-xs font-bold uppercase tracking-wide text-stone-500">
                  {categoryLabels[offer.category]}
                </span>
                <h3 className="mt-2 font-bold text-stone-900">{offer.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {offer.shortDescription}
                </p>
                <span className="mt-4 inline-flex rounded-full bg-stone-200 px-3 py-1 text-xs font-semibold text-stone-600">
                  Em avaliação
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-stone-900">
            Perguntas frequentes
          </h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="group rounded-xl border bg-white p-5 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-stone-800">
                  <span>{item.question}</span>
                  <span className="transition group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-3 leading-relaxed text-stone-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
