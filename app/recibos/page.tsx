
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gerador de Recibos Online em PDF | ReciboNaHora",
  description:
    "Crie recibos online em PDF com validade jurídica: recibo simples, recibo PIX e outros modelos. Ferramenta gratuita, rápida e segura.",
  alternates: {
    canonical: "/recibos",
  },
  openGraph: {
    title: "Gerador de Recibos Online em PDF | ReciboNaHora",
    description:
      "Gere recibos profissionais em PDF (recibo simples, recibo PIX e modelos). Rápido, gratuito e com foco em validade e clareza.",
    url: "/recibos",
    siteName: "ReciboNaHora",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  {
    question: "Um recibo gerado online tem validade jurídica?",
    answer: "Sim. Desde que contenha valor, identificação das partes, data, descrição do pagamento e assinatura do recebedor, o recibo é um comprovante válido.",
  },
  {
    question: "Preciso assinar o recibo digitalmente?",
    answer: "A assinatura do recebedor é essencial. Você pode imprimir e assinar manualmente. Para um fluxo 100% digital, use assinatura eletrônica/assinatura digital.",
  },
  {
    question: "O gerador de recibos é gratuito?",
    answer: "Sim. Você pode gerar recibos gratuitamente. Alguns recursos avançados e parcerias podem aparecer como recomendações opcionais.",
  },
  {
    question: "Posso usar um recibo simples no lugar da Nota Fiscal?",
    answer: "Depende. O recibo comprova o pagamento. A Nota Fiscal é um documento fiscal e pode ser obrigatória em determinadas operações, especialmente entre CNPJs ou conforme regras locais.",
  },
  {
    question: "Os dados que preencho são armazenados?",
    answer: "Os dados que você preenche no formulário não são enviados nem armazenados em nossos servidores; o documento é gerado localmente no seu navegador. Dados de navegação podem ser coletados por terceiros para anúncios, conforme a <a href='/politica-de-privacidade' class='text-amber-700 hover:underline'>Política de Privacidade</a>.",
  },
  {
    question: "Qual a diferença do recibo para o comprovante do banco?",
    answer: "O comprovante bancário confirma a transação financeira. O recibo descreve o motivo do pagamento (serviço/produto), tornando o registro mais completo e claro.",
  },
  {
    question: "Posso editar um recibo depois de gerado o PDF?",
    answer: "O PDF é um formato final. Se precisar corrigir dados, gere um novo recibo com as informações corretas.",
  },
  {
    question: "O que significa valor por extenso?",
    answer: "É escrever o valor em palavras (ex.: R$ 250,50 → “duzentos e cinquenta reais e cinquenta centavos”), aumentando segurança contra fraudes e rasuras.",
  },
];

function jsonLdFAQ() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

function DisabledCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="block bg-white p-6 rounded-lg border border-slate-200 opacity-70">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-bold text-xl text-slate-800">{title}</h3>
        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
          Em breve
        </span>
      </div>
      <p className="text-slate-600 mt-2">{description}</p>
    </div>
  );
}

export default function RecibosPillarPage() {
  const faqLd = jsonLdFAQ();

  return (
    <main className="bg-slate-50 text-slate-800">
      {/* FAQ Schema (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <div className="container mx-auto max-w-5xl px-4 py-12 md:py-20">
        {/* Cabeçalho e Introdução */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Gerador de Recibos Online em PDF
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Crie, personalize e baixe recibos de pagamento profissionais em
            segundos. As ferramentas do ReciboNaHora ajudam você a comprovar
            transações com clareza, segurança e organização.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/ferramentas"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white font-semibold hover:bg-slate-800 transition"
            >
              Ver todas as ferramentas
            </Link>
            <Link
              href="/ferramentas/recibo-simples"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-slate-900 font-semibold border border-slate-200 hover:border-slate-300 hover:shadow-sm transition"
            >
              Criar recibo simples agora
            </Link>
          </div>
        </header>

        {/* Grade de Ferramentas Principais */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            Nossos Geradores de Recibo
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <Link
              href="/ferramentas/recibo-simples"
              className="group block bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-bold text-xl text-slate-800 group-hover:text-blue-600">
                Gerador de Recibo Simples
              </h3>
              <p className="text-slate-600 mt-2 leading-relaxed">
                Ideal para qualquer tipo de pagamento, de serviços a vendas.
                Rápido, fácil e com visualização em tempo real.
              </p>
            </Link>

            <DisabledCard
              title="Gerador de Recibo PIX"
              description="Comprove transferências PIX com um recibo mais completo do que o comprovante bancário, incluindo motivo do pagamento e dados das partes."
            />

            {/* Em breve (evita 404 e não polui SEO com “TODO”) */}
            <DisabledCard
              title="Gerador de Recibo de Aluguel"
              description="Formalize o pagamento mensal de aluguéis residenciais ou comerciais com informações do locador, locatário e mês de referência."
            />

            <DisabledCard
              title="Recibo para MEI (RPA)"
              description="Gere um recibo para pagamentos a prestadores e autônomos. Em versões futuras, poderá incluir cálculos e retenções quando aplicável."
            />
          </div>
        </section>

        {/* Conteúdo editorial (SEO) */}
        <article className="space-y-12">
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              O que é um Recibo de Pagamento?
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Um recibo de pagamento é um documento que declara formalmente que
              uma determinada quantia foi recebida por uma pessoa ou empresa (o
              beneficiário) de outra (o pagador). Ele funciona como prova de
              quitação de uma obrigação financeira, seja relacionada à prestação
              de serviço, compra de produto ou qualquer transação acordada.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Para quem paga, o recibo é proteção contra cobranças indevidas no
              futuro. Para quem recebe, é organização financeira e registro
              formal do recebimento. Em PDF e gerado online, o processo fica
              mais rápido, padronizado e fácil de guardar.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Quando Usar um Recibo?
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Emitir recibo é recomendado sempre que houver pagamento. Ele traz
              transparência e segurança. Exemplos comuns:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>
                <strong>Serviços autônomos:</strong> freelancers, consultores,
                diaristas, eletricistas, designers, etc.
              </li>
              <li>
                <strong>Pagamento de aluguel:</strong> comprovante mensal entre
                locador e locatário.
              </li>
              <li>
                <strong>Vendas entre pessoas físicas:</strong> itens usados,
                veículos, eletrônicos.
              </li>
              <li>
                <strong>Cursos e consultorias:</strong> comprovação de
                pagamentos por aulas, sessões e matrículas.
              </li>
              <li>
                <strong>Transferências PIX:</strong> formalização mais clara do
                motivo do pagamento, além da transação bancária.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              O Que Deve Conter em um Recibo Válido?
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Para ter força como comprovante, o recibo precisa ser completo e
              claro. Itens essenciais:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-slate-700">
              <li>
                <strong>Título:</strong> “Recibo” ou “Recibo de Pagamento”.
              </li>
              <li>
                <strong>Número:</strong> identificação sequencial (controle).
              </li>
              <li>
                <strong>Valor:</strong> numérico e, preferencialmente, por
                extenso.
              </li>
              <li>
                <strong>Pagador:</strong> nome completo e CPF/CNPJ.
              </li>
              <li>
                <strong>Beneficiário:</strong> nome completo e CPF/CNPJ.
              </li>
              <li>
                <strong>Descrição:</strong> motivo do pagamento (serviço/produto).
              </li>
              <li>
                <strong>Local e data:</strong> cidade e data de emissão.
              </li>
              <li>
                <strong>Assinatura:</strong> do beneficiário (quem recebeu).
              </li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Tipos de Recibo
            </h2>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">
                Recibo Simples de Pagamento
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Modelo versátil para transações do dia a dia. Serve para pagamentos
                por serviços, vendas e acertos entre pessoas físicas.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">Recibo PIX</h3>
              <p className="text-slate-700 leading-relaxed">
                Complementa o comprovante bancário com a descrição do que foi pago,
                deixando a transação mais clara e formal.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">
                Recibo de Aluguel
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Indica mês de referência, dados do imóvel e das partes. Ajuda
                muito no controle do locador e na segurança do locatário.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">
                Recibo de Pagamento de Autônomo (RPA)
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Usado quando uma empresa contrata pessoa física. Pode envolver
                retenções e regras específicas conforme a natureza do serviço.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Diferença Entre Recibo e Nota Fiscal
            </h2>
            <p className="text-slate-700 leading-relaxed">
              O <strong>recibo</strong> comprova o pagamento e a quitação de uma
              obrigação. Já a <strong>Nota Fiscal</strong> é um documento fiscal e
              tributário, usado para registrar operações e impostos.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Em geral, recibos são muito comuns em transações entre pessoas físicas
              e em serviços onde não há obrigação de emissão de nota. Em operações
              entre empresas (CNPJ) ou conforme regras locais, a NF pode ser obrigatória.
            </p>
          </section>
        </article>

        {/* FAQ (conteúdo + schema já incluído) */}
        <section className="mt-16 mb-20">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            Perguntas Frequentes
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((f, idx) => (
              <div
                key={f.question}
                className="bg-white p-5 rounded-lg border border-slate-200"
              >
                <h3 className="font-semibold text-slate-800">
                  {idx + 1}. {f.question}
                </h3>
                <p
                  className="mt-2 text-slate-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: f.answer }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Modelos e Ferramentas Relacionadas */}
        <section>
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            Modelos e Ferramentas Relacionadas
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/ferramentas/orcamento"
              className="group block bg-white p-6 rounded-lg border border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-bold text-xl text-slate-800 group-hover:text-amber-600">
                Gerador de Orçamento
              </h3>
              <p className="text-slate-600 mt-2 leading-relaxed">
                Crie propostas comerciais detalhadas antes de fechar o serviço.
              </p>
            </Link>

            {/* Se a rota não existir ainda, melhor não linkar para evitar 404 */}
            <DisabledCard
              title="Gerador de Nota Promissória"
              description="Em breve: formalize uma promessa de pagamento futuro com um modelo completo."
            />

            <DisabledCard
              title="Contrato de Aluguel"
              description="Em breve: gere um contrato de locação completo para proteger locador e locatário."
            />
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/ferramentas"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-slate-900 font-semibold border border-slate-200 hover:border-slate-300 hover:shadow-sm transition"
            >
              Explorar mais modelos
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
