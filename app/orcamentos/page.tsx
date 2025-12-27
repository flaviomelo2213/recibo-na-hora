
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gerador de Orçamento Online Grátis em PDF | ReciboNaHora",
  description:
    "Crie orçamentos profissionais em PDF gratuitamente. Detalhe seus serviços e preços, envie para seus clientes e feche mais negócios. Simples e rápido.",
  alternates: {
    canonical: "/orcamentos",
  },
};

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
      answer: "Não. O orçamento detalha 'o quê' e 'quanto custa'. O contrato detalha 'como', 'quando', e quais as regras, multas, garantias e responsabilidades. Use o orçamento para a proposta e o contrato para formalizar o acordo. Explore nossa página sobre <a href=\\"/contratos\\" class=\\"text-amber-700 hover:underline\\">contratos</a>."
    },
    {
      question: "Preciso emitir Nota Fiscal ao apresentar um orçamento?",
      answer: "Não. A Nota Fiscal é emitida somente após a prestação do serviço ou venda do produto, para formalizar a operação e recolher impostos. O orçamento é um documento da fase de negociação."
    },
    {
      question: "É seguro usar um gerador de orçamentos online?",
      answer: "Os dados que você preenche no formulário não são enviados nem armazenados em nossos servidores; o documento é gerado localmente no seu navegador. Dados de navegação podem ser coletados por terceiros para anúncios, conforme a <a href='/politica-de-privacidade' class='text-amber-700 hover:underline'>Política de Privacidade</a>."
    }
  ];

export default function OrcamentosPage() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="container mx-auto px-4 py-12 md:py-20">
        {/* Cabeçalho */}
        <header className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-800 mb-4 tracking-tight">
            Gerador de Orçamentos Online em PDF
          </h1>
          <p className="text-lg text-stone-600">
            Crie orçamentos claros e profissionais para seus clientes em minutos. Transmita confiança e feche mais negócios.
          </p>
        </header>

        {/* Seção 1: O que é */}
        <section className="mb-16 bg-white p-8 rounded-xl border border-stone-200 shadow-sm">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">
            O que é um Orçamento Profissional?
          </h2>
          <p className="text-stone-600 leading-relaxed">
            Um orçamento é um documento que apresenta uma proposta de valor para um produto ou serviço. Mais do que uma simples lista de preços, ele é o primeiro passo para formalizar um negócio, detalhando o escopo do trabalho, os custos envolvidos e as condições oferecidas. Um bom orçamento demonstra profissionalismo, alinha expectativas e serve como base para um futuro <Link href="/contratos" className="text-amber-700 font-medium hover:underline">contrato</Link>.
          </p>
        </section>

        {/* Seção 2: O que deve conter */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-stone-800 mb-6 text-center">
            O que um Orçamento Deve Conter
          </h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg border border-stone-200"><strong>Dados da sua Empresa:</strong> Nome, CNPJ/CPF, contato e logo.</div>
                <div className="bg-white p-6 rounded-lg border border-stone-200"><strong>Dados do Cliente:</strong> Nome e contato do responsável.</div>
                <div className="bg-white p-6 rounded-lg border border-stone-200"><strong>Descrição dos Itens:</strong> Detalhamento dos serviços ou produtos.</div>
                <div className="bg-white p-6 rounded-lg border border-stone-200"><strong>Valores:</strong> Preços unitários e valor total.</div>
                <div className="bg-white p-6 rounded-lg border border-stone-200"><strong>Formas de Pagamento:</strong> À vista, parcelado, PIX, boleto.</div>
                <div className="bg-white p-6 rounded-lg border border-stone-200"><strong>Prazos:</strong> Prazo de execução do serviço ou entrega.</div>
                <div className="bg-white p-6 rounded-lg border border-stone-200"><strong>Validade da Proposta:</strong> Período em que os valores são válidos.</div>
                <div className="bg-white p-6 rounded-lg border border-stone-200"><strong>Observações:</strong> Informações adicionais, como garantias ou materiais.</div>
            </div>
        </section>

        {/* Seção 3: Como apresentar */}
        <section className="mb-16 bg-amber-50/50 p-8 rounded-xl border border-amber-200">
           <h2 className="text-2xl font-bold text-stone-800 mb-4">
            Como Apresentar e Fechar o Negócio
          </h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Enviar um PDF bem formatado é o padrão. Após o envio, faça um follow-up (acompanhamento) por telefone ou WhatsApp para tirar dúvidas e demonstrar interesse. Esteja preparado para negociar e destacar o valor do seu trabalho, não apenas o preço.
          </p>
        </section>
        
        {/* Seção de Cards */}
        <section className="mb-16">
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Link href="/ferramentas/orcamento" className="block bg-amber-600 text-white p-6 rounded-lg shadow-lg hover:bg-amber-700 transition-colors text-center"> 
                    <h3 className="font-bold text-xl mb-2">Gerar Orçamento Agora</h3>
                    <p className="text-sm text-amber-100">Crie seu documento em PDF em segundos.</p>
                </Link>
                 <Link href="/recibos" className="block bg-white p-6 rounded-lg border hover:border-amber-400 transition-colors text-center"> 
                    <h3 className="font-bold text-stone-800 text-xl mb-2">Precisa de um Recibo?</h3>
                    <p className="text-sm text-stone-600">Comprove pagamentos com nossos geradores.</p>
                </Link>
                 <Link href="/contratos" className="block bg-white p-6 rounded-lg border hover:border-amber-400 transition-colors text-center"> 
                    <h3 className="font-bold text-stone-800 text-xl mb-2">Formalize com um Contrato</h3>
                    <p className="text-sm text-stone-600">Transforme seu orçamento em um acordo seguro.</p>
                </Link>
                 <Link href="/ferramentas" className="block bg-white p-6 rounded-lg border hover:border-amber-400 transition-colors text-center"> 
                    <h3 className="font-bold text-stone-800 text-xl mb-2">Ver Todas as Ferramentas</h3>
                    <p className="text-sm text-stone-600">Explore mais de 10 geradores gratuitos.</p>
                </Link>
            </div>
        </section>

        {/* Seção 4: Erros Comuns */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">
            Erros Comuns a Evitar
          </h2>
           <ul className="list-disc list-inside space-y-2 text-stone-600">
                <li><strong>Falta de detalhes:</strong> Orçamentos vagos geram desconfiança. Seja específico.</li>
                <li><strong>Erros de português:</strong> Revise o texto antes de enviar para não parecer amador.</li>
                <li><strong>Demora no envio:</strong> A agilidade pode ser um diferencial competitivo.</li>
                <li><strong>Não incluir validade:</strong> Proteja-se de futuras mudanças de preço.</li>
                 <li><strong>Focar apenas no preço:</strong> Lembre-se de vender o valor e os benefícios do seu serviço.</li>
            </ul>
        </section>

        {/* Seção 5: FAQ */}
        <section>
            <h2 className="text-3xl font-bold text-center text-stone-800 mb-8">
                Perguntas Frequentes sobre Orçamentos
            </h2>
            <div className="max-w-3xl mx-auto">
                <div className="space-y-4">
                {faqItems.map((item, index) => (
                    <details key={index} className="group bg-white p-5 rounded-lg border shadow-sm">
                        <summary className="flex justify-between items-center font-semibold text-stone-800 cursor-pointer list-none">
                            <span>{item.question}</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <p className="text-stone-600 mt-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.answer }} />
                    </details>
                ))}\
                </div>
            </div>
        </section>

      </main>
    </>
  );
}
