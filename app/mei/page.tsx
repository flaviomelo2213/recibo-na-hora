
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ferramentas para MEI e Autônomos | ReciboNaHora",
  description:
    "Guia completo e ferramentas para MEI: recibos, contratos, orçamentos e dicas de organização para manter seu negócio em dia e evitar problemas.",
  alternates: {
    canonical: "/mei",
  },
};

const faqItems = [
    {
      question: "O MEI é obrigado a emitir Nota Fiscal (NF-e)?",
      answer: "Depende. Para vendas ou serviços para Pessoas Físicas (clientes finais), o MEI não é obrigado. No entanto, se o cliente for uma outra empresa (Pessoa Jurídica/CNPJ), a emissão da Nota Fiscal é obrigatória, a menos que essa empresa emita uma nota de entrada."
    },
    {
        question: "Um recibo de pagamento substitui a Nota Fiscal para o MEI?",
        answer: "Não. O recibo comprova que um pagamento foi efetuado, sendo ótimo para transações com pessoas físicas. A Nota Fiscal é o documento que formaliza a operação comercial perante o fisco. Para vendas a empresas, o recibo não substitui a NF."
      },
      {
        question: "Qual a diferença principal entre Recibo, Contrato e Orçamento?",
        answer: "<b>Orçamento:</b> É a proposta, o preço do seu serviço. <b>Contrato:</b> É o acordo, as regras do jogo. <b>Recibo:</b> É a prova de que foi pago. Cada um tem seu momento e importância na prestação de serviço."
      },
    {
      question: "Como o MEI deve se organizar financeiramente?",
      answer: "A dica de ouro é separar as finanças. Tenha uma conta bancária para a empresa (pode ser conta PF, mas separada) e outra para suas despesas pessoais. Use o Relatório Mensal para registrar todo o faturamento, com ou sem nota."
    },
    {
      question: "O que é o Relatório Mensal de Receitas Brutas (RMRB)?",
      answer: "É uma obrigação do MEI. Até o dia 20 de cada mês, você deve preencher um relatório simples somando todas as suas vendas e serviços do mês anterior, guardando as notas e recibos. O nosso <a href=\"/ferramentas/mei-relatorio\" class=\"text-amber-700 hover:underline\">Gerador de Relatório Mensal do MEI</a> pode te ajudar com isso."
    },
    {
      question: "Preciso de um contador sendo MEI?",
      answer: "Para as rotinas básicas do MEI (pagamento do DAS, relatório mensal e declaração anual), geralmente não é necessário um contador. No entanto, se seu faturamento está crescendo ou você precisa de orientação estratégica, um contador pode ser um grande aliado."
    },
    {
      question: "Como o MEI declara o Imposto de Renda de Pessoa Física (IRPF)?",
      answer: "O MEI declara o IRPF se os seus rendimentos tributáveis (lucro) ultrapassarem o limite estabelecido pela Receita Federal. O lucro é a receita bruta total do ano, menos as despesas e a parcela isenta (que varia de 8% a 32% da receita, dependendo da atividade)."
    },
    {
      question: "Quais erros mais comuns podem me dar problemas como MEI?",
      answer: "Os principais são: não fazer o Relatório Mensal, esquecer de pagar o boleto DAS, ultrapassar o limite de faturamento anual sem desenquadrar, e misturar as contas pessoais com as da empresa."
    },
    {
        question: "Posso ter um funcionário como MEI?",
        answer: "Sim, o MEI pode ter um único funcionário registrado, que deve receber o salário mínimo ou o piso da categoria. Todas as obrigações trabalhistas e previdenciárias devem ser cumpridas."
      },
    {
      question: "As ferramentas do ReciboNaHora são adequadas para MEI?",
      answer: "Sim! Nossas ferramentas de <a href=\"/recibos\" class=\"text-amber-700 hover:underline\">recibos</a>, <a href=\"/contratos\" class=\"text-amber-700 hover:underline\">contratos</a> e <a href=\"/orcamentos\" class=\"text-amber-700 hover:underline\">orçamentos</a> são perfeitas para o dia a dia do MEI e do profissional autônomo, ajudando a transmitir profissionalismo e a manter a organização."
    }
  ];

export default function MeiPage() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer.replace(/<[^>]*>?/gm, '') // Remove HTML for JSON-LD
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
            Ferramentas para MEI e Autônomos
          </h1>
          <p className="text-lg text-stone-600">
            Recibos, Contratos, Orçamentos e um guia essencial para você manter seu negócio em dia e focar no que realmente importa: crescer.
          </p>
        </header>

        {/* Ferramentas Recomendadas */}
        <section className="mb-16">
            <h2 className="text-2xl font-bold text-stone-800 mb-6 text-center">Ferramentas Recomendadas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link href="/ferramentas/recibo-simples" className="block bg-amber-50 border border-amber-200 p-6 rounded-lg hover:bg-amber-100 transition-colors text-center"> 
                    <h3 className="font-bold text-amber-800 text-lg mb-1">Gerador de Recibo Simples</h3>
                    <p className="text-sm text-amber-700">Para pagamentos de serviços e vendas a pessoas físicas.</p>
                </Link>
                <Link href="/ferramentas/orcamento" className="block bg-amber-50 border border-amber-200 p-6 rounded-lg hover:bg-amber-100 transition-colors text-center"> 
                    <h3 className="font-bold text-amber-800 text-lg mb-1">Gerador de Orçamento</h3>
                    <p className="text-sm text-amber-700">Apresente propostas profissionais aos seus clientes.</p>
                </Link>
                <Link href="/ferramentas/nota-promissoria" className="block bg-amber-50 border border-amber-200 p-6 rounded-lg hover:bg-amber-100 transition-colors text-center"> 
                    <h3 className="font-bold text-amber-800 text-lg mb-1">Nota Promissória</h3>
                    <p className="text-sm text-amber-700">Um título de crédito para formalizar promessas de pagamento.</p>
                </Link>
                 <Link href="/recibos" className="block bg-white p-4 rounded-lg border hover:border-amber-400 transition-colors text-center"> 
                    <h3 className="font-semibold text-stone-700">Página de Recibos</h3>
                </Link>
                 <Link href="/contratos" className="block bg-white p-4 rounded-lg border hover:border-amber-400 transition-colors text-center"> 
                    <h3 className="font-semibold text-stone-700">Página de Contratos</h3>
                </Link>
                 <Link href="/orcamentos" className="block bg-white p-4 rounded-lg border hover:border-amber-400 transition-colors text-center"> 
                    <h3 className="font-semibold text-stone-700">Página de Orçamentos</h3>
                </Link>
            </div>
        </section>

        {/* Seção 1: MEI precisa de recibo? */}
        <section className="mb-12 bg-white p-8 rounded-xl border border-stone-200 shadow-sm">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">
            MEI Precisa Emitir Recibo?
          </h2>
          <p className="text-stone-600 leading-relaxed">
            Sim! Mesmo que não seja uma obrigação fiscal como a nota, o recibo é essencial. Ele serve como <strong>comprovante de quitação</strong> para o seu cliente, transmitindo segurança e profissionalismo. Para você, é um registro vital da entrada de dinheiro, fundamental para o preenchimento do seu Relatório Mensal de Receitas Brutas.
          </p>
        </section>

        {/* Seção 2: Quando emitir NF */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">
            Recibo vs. Nota Fiscal: Quando usar cada um?
          </h2>
          <ul className="space-y-3 text-stone-700">
            <li><span className="font-bold">&#10140; Use o RECIBO:</span> Sempre que receber um pagamento de uma <strong>Pessoa Física</strong>. É a prova do seu cliente de que ele pagou.</li>
            <li><span className="font-bold">&#10140; Emita a NOTA FISCAL:</span> Sempre que prestar um serviço ou vender para uma <strong>Pessoa Jurídica (outra empresa/CNPJ)</strong>. A NF é obrigatória nessa relação.</li>
          </ul>
        </section>

        {/* Seção 3: Organização Mensal */}
         <section className="mb-12 bg-stone-100 p-8 rounded-xl border border-stone-200">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">
            Sua Organização Mensal em 3 Passos
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-stone-700">
            <li><strong>Pague o DAS-MEI:</strong> Todo mês, até o dia 20, pague seu boleto de imposto único.</li>
            <li><strong>Preencha o Relatório Mensal:</strong> Some todas as suas receitas do mês anterior (com ou sem nota/recibo) e anote.</li>
            <li><strong>Guarde os Documentos:</strong> Arquive as notas fiscais de compra, os canhotos das notas de venda e os recibos emitidos.</li>
          </ol>
        </section>

        {/* Seção 4: Erros Comuns */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            Erros que Podem te Dar Problemas
          </h2>
           <ul className="list-disc list-inside space-y-2 text-stone-600">
                <li><strong>Esquecer do Relatório Mensal:</strong> A falta dele pode gerar multas em uma fiscalização.</li>
                <li><strong>Não Pagar o DAS:</strong> Acumular boletos gera juros e pode levar ao cancelamento do seu CNPJ.</li>
                <li><strong>Ultrapassar o Limite de Faturamento:</strong> Se você faturar mais que o teto anual do MEI, precisa solicitar o desenquadramento para não ficar irregular.</li>
                <li><strong>Misturar o Dinheiro:</strong> Usar a conta da empresa para despesas pessoais (e vice-versa) é o caminho mais rápido para a desorganização e perda de controle financeiro.</li>
            </ul>
        </section>

        {/* FAQ Section */}
        <section>
            <h2 className="text-3xl font-bold text-center text-stone-800 mb-8">
                Perguntas Frequentes sobre MEI
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
                ))}
                </div>
            </div>
        </section>

      </main>
    </>
  );
}
