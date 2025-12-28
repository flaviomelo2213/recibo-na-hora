import Link from "next/link";
import type { Metadata } from "next";

// 1. Metadata for SEO
export const metadata: Metadata = {
  title: "Gerador de Orçamento Online Grátis em PDF | ReciboNaHora",
  description:
    "Crie orçamentos profissionais em PDF gratuitamente. Detalhe seus serviços e preços, envie para seus clientes e feche mais negócios. Simples e rápido.",
  alternates: {
    canonical: "/orcamentos",
  },
};

// 2. FAQ content array
const faqItems = [
  {
    question: "Qual a diferença entre um orçamento e uma proposta comercial?",
    answer: "Um orçamento foca nos custos e na descrição dos itens/serviços. Uma proposta comercial é mais completa, incluindo detalhes sobre a empresa, o escopo do projeto, cronogramas e o valor que sua solução agrega, além do orçamento em si."
  },
  {
    question: "O orçamento tem validade jurídica como um contrato?",
    answer: "Não. O orçamento é uma proposta. Quando o cliente o aprova (assina ou confirma por escrito), ele se torna um aceite e cria uma obrigação entre as partes, funcionando como um pré-contrato. O ideal é sempre formalizar com um contrato de prestação de serviços."
  },
  {
    question: "Posso cobrar pela elaboração de um orçamento?",
    answer: "Sim, desde que o cliente seja informado e concorde com a cobrança previamente. É comum em serviços complexos que exigem análise técnica, como projetos de arquitetura ou laudos de engenharia. Para serviços mais simples, a prática de mercado é oferecer o orçamento gratuitamente."
  },
  {
    question: "Um orçamento precisa ter prazo de validade?",
    answer: "Sim, é fundamental. O prazo de validade (ex: 'Válido por 15 dias') protege você contra a flutuação de preços de materiais e da sua própria agenda. Sem ele, um cliente poderia 'aceitar' o orçamento meses depois, quando seus custos já mudaram."
  },
  {
    question: "O que fazer se o cliente pedir um desconto no orçamento?",
    answer: "Analise sua margem. Se possível, ofereça um pequeno desconto ou flexibilize a forma de pagamento. Outra estratégia é oferecer a remoção de um item ou serviço menos essencial para reduzir o valor final, mantendo a qualidade do serviço principal."
  },
  {
    question: "Orçamento substitui um contrato?",
    answer: "Não. O orçamento detalha \'o quê\' e \'quanto custa\'. O contrato detalha \'como\', \'quando\', e quais as regras, multas, garantias e responsabilidades. Use o orçamento para a proposta e o contrato para formalizar o acordo. Explore nossa página sobre <a href='/contratos' class='text-indigo-600 font-semibold hover:underline'>contratos</a>."
  },
  {
    question: "Preciso emitir Nota Fiscal ao apresentar um orçamento?",
    answer: "Não. A Nota Fiscal é emitida somente após a prestação do serviço ou venda do produto, para formalizar a operação e recolher impostos. O orçamento é um documento da fase de negociação."
  },
  {
    question: "É seguro usar um gerador de orçamentos online?",
    answer: "Sim. Os dados que você preenche no formulário não são enviados nem armazenados em nossos servidores; o documento é gerado localmente no seu navegador. Usamos serviços de terceiros para análise de tráfego e anúncios, conforme nossa <a href='/politica-de-privacidade' class='text-indigo-600 font-semibold hover:underline'>Política de Privacidade</a>."
  }
];

// 3. Main Page Component
export default function OrcamentosPage() {
  // JSON-LD for FAQPage Schema
  const faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          // Remove HTML for pure text in JSON-LD
          "text": item.answer.replace(/<[^>]*>?/gm, '')
        }
      }))
    };

  return (
    <>
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      {/* Main content */}
      <main className="bg-slate-50 text-slate-800">
        <div className="container mx-auto max-w-5xl px-4 py-12 md:py-20">
          
          {/* Header */}
          <header className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Gerador de Orçamentos Online em PDF
            </h1>
            <p className="text-lg text-slate-600">
              Crie orçamentos claros e profissionais para seus clientes em minutos. Transmita confiança e feche mais negócios.
            </p>
          </header>

          {/* Section: What it is */}
          <section className="mb-16 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              O que é um Orçamento Profissional?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Um orçamento é um documento que apresenta uma proposta de valor para um produto ou serviço. Mais do que uma simples lista de preços, ele é o primeiro passo para formalizar um negócio, detalhando o escopo do trabalho, os custos e as condições. Um bom orçamento demonstra profissionalismo, alinha expectativas e serve como base para um futuro <Link href="/contratos" className="text-indigo-600 font-semibold hover:underline">contrato</Link>.
            </p>
          </section>

          {/* Section: What to include */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              O que um Orçamento Deve Conter
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 text-center"><strong className="font-semibold text-slate-700">Sua Empresa</strong><p className="text-slate-500">Nome, CNPJ, contato</p></div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 text-center"><strong className="font-semibold text-slate-700">Cliente</strong><p className="text-slate-500">Nome e contato</p></div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 text-center"><strong className="font-semibold text-slate-700">Itens</strong><p className="text-slate-500">Serviços e produtos</p></div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 text-center"><strong className="font-semibold text-slate-700">Valores</strong><p className="text-slate-500">Preços e total</p></div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 text-center"><strong className="font-semibold text-slate-700">Pagamento</strong><p className="text-slate-500">Formas e condições</p></div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 text-center"><strong className="font-semibold text-slate-700">Prazos</strong><p className="text-slate-500">Entrega e execução</p></div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 text-center"><strong className="font-semibold text-slate-700">Validade</strong><p className="text-slate-500">Até quando a proposta é válida</p></div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 text-center"><strong className="font-semibold text-slate-700">Observações</strong><p className="text-slate-500">Garantias, etc.</p></div>
            </div>
          </section>
          
          {/* Section: Call to Action Cards */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Link href="/ferramentas/orcamento" className="block bg-indigo-600 text-white p-6 rounded-2xl shadow-lg hover:bg-indigo-700 transition-transform hover:-translate-y-1 text-center"> 
                    <h3 className="font-bold text-xl mb-1">Gerar Orçamento</h3>
                    <p className="text-sm text-indigo-100">Crie seu PDF em segundos.</p>
                </Link>
                 <Link href="/recibos" className="block bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 transition-all text-center"> 
                    <h3 className="font-bold text-slate-800 text-xl mb-1">Fazer um Recibo</h3>
                    <p className="text-sm text-slate-600">Comprove um pagamento.</p>
                </Link>
                 <Link href="/contratos" className="block bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 transition-all text-center"> 
                    <h3 className="font-bold text-slate-800 text-xl mb-1">Criar um Contrato</h3>
                    <p className="text-sm text-slate-600">Formalize o acordo.</p>
                </Link>
                 <Link href="/ferramentas" className="block bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 transition-all text-center"> 
                    <h3 className="font-bold text-slate-800 text-xl mb-1">Mais Ferramentas</h3>
                    <p className="text-sm text-slate-600">Ver todas as opções.</p>
                </Link>
            </div>
          </section>
          
          {/* Section: How to present & Common mistakes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Como Apresentar e Fechar
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Envie um PDF bem formatado. Após o envio, faça um follow-up (acompanhamento) por telefone ou WhatsApp para tirar dúvidas e demonstrar interesse. Esteja preparado para negociar e destacar o valor do seu trabalho, não apenas o preço.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Erros Comuns a Evitar
              </h2>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                    <li><strong>Falta de detalhes:</strong> Orçamentos vagos geram desconfiança.</li>
                    <li><strong>Erros de português:</strong> Revise o texto para não parecer amador.</li>
                    <li><strong>Demora no envio:</strong> A agilidade pode ser um diferencial competitivo.</li>
                    <li><strong>Não incluir validade:</strong> Proteja-se de futuras mudanças de preço.</li>
              </ul>
            </section>
          </div>

          {/* Section: FAQ */}
          <section>
              <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
                  Perguntas Frequentes
              </h2>
              <div className="max-w-3xl mx-auto space-y-4">
                  {faqItems.map((item, index) => (
                      <details key={index} className="group bg-white p-5 rounded-xl border border-slate-200 shadow-sm open:ring-2 open:ring-indigo-200">
                          <summary className="flex justify-between items-center font-semibold text-slate-800 cursor-pointer list-none">
                              <span>{item.question}</span>
                              <span className="transition-transform duration-300 group-open:rotate-180">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                              </span>
                          </summary>
                          <div className="text-slate-600 mt-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.answer }} />
                      </details>
                  ))}
              </div>
          </section>

        </div>
      </main>
    </>
  );
}
