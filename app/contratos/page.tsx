
import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Gerador de Contratos Online em PDF | ReciboNaHora",
  description:
    "Crie contratos online em PDF com validade jurídica. Modelos para diversas finalidades. Ferramenta gratuita, rápida e segura.",
  alternates: {
    canonical: "/contratos",
  },
};

const faqItems = [
    {
      question: "O contrato gerado online tem validade jurídica?",
      answer: "Sim, desde que assinado pelas partes (e testemunhas, se aplicável), o contrato tem validade jurídica para a maioria dos atos da vida civil. Para alguns casos específicos, a lei exige reconhecimento de firma ou registro em cartório."
    },
    {
      question: "Preciso de testemunhas no contrato?",
      answer: "A presença de duas testemunhas que assinam o contrato junto com as partes confere a ele força de título executivo extrajudicial. Isso significa que, em caso de descumprimento, o processo de cobrança na justiça é muito mais rápido."
    },
    {
      question: "O que é um 'título executivo extrajudicial'?",
      answer: "É um documento que a lei reconhece como prova de uma dívida, permitindo que o credor inicie um processo de execução (cobrança forçada) sem a necessidade de um longo processo de conhecimento para provar que a dívida existe."
    },
    {
      question: "Posso usar o gerador para qualquer tipo de contrato?",
      answer: "Nossas ferramentas são focadas em contratos de menor complexidade, como prestação de serviços, aluguel e outros. Para operações complexas, como compra e venda de imóveis de alto valor ou questões societárias, é indispensável a consulta a um advogado."
    },
    {
      question: "Qual a diferença entre assinatura digital e eletrônica?",
      answer: "A assinatura eletrônica é um gênero amplo que inclui senhas, biometria e aceite de termos online. A assinatura digital é uma espécie mais segura, que utiliza um certificado digital (como o e-CPF) para garantir a autenticidade e integridade do documento, tendo a mesma validade de uma assinatura com firma reconhecida."
    },
    {
      question: "O que acontece se uma das partes não cumprir o contrato?",
      answer: "A parte prejudicada pode notificar a outra para que cumpra sua obrigação. Se não houver acordo, pode-se recorrer ao Poder Judiciário para exigir o cumprimento forçado, o pagamento de multas ou uma indenização por perdas e danos."
    },
    {
      question: "É seguro colocar meus dados no gerador de contratos?",
      answer: "Sim. Seguimos as melhores práticas de segurança e privacidade. Seus dados são utilizados apenas para a geração do documento e não são compartilhados. Consulte nossa Política de Privacidade para mais detalhes."
    },
    {
      question: "Contrato precisa ser registrado em cartório?",
      answer: "Na maioria dos casos, não. O registro em Cartório de Títulos e Documentos é necessário principalmente para que o contrato tenha validade perante terceiros (publicidade), não para ter validade entre as partes que o assinaram."
    }
  ];

export default function ContratosPage() {
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
            Gerador de Contratos Online em PDF
          </h1>
          <p className="text-lg text-stone-600">
            Crie, personalize e gere contratos com validade jurídica de forma
            simples, rápida e gratuita.
          </p>
        </header>

        {/* Seção 1: O que é Contrato */}
        <section className="mb-16 bg-white p-8 rounded-xl border border-stone-200 shadow-sm">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">
            O que é um Contrato?
          </h2>
          <p className="text-stone-600 leading-relaxed">
            Um contrato é um acordo de vontades entre duas ou mais partes que cria, modifica ou extingue direitos e obrigações. Ele é a formalização de um negócio, estabelecendo as regras, prazos e condições que irão reger a relação entre os envolvidos. Ter um contrato bem redigido é fundamental para garantir a segurança jurídica de todos.
          </p>
        </section>

        {/* Seção 2: Cláusulas Essenciais */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-stone-800 mb-6 text-center">
            Estrutura de um Contrato Seguro
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-stone-200">
              <h3 className="font-bold text-amber-700 mb-2">1. Qualificação das Partes</h3>
              <p className="text-sm text-stone-600">Identificação completa de todos os envolvidos (nome, CPF/CNPJ, endereço, etc).</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-stone-200">
              <h3 className="font-bold text-amber-700 mb-2">2. Objeto do Contrato</h3>
              <p className="text-sm text-stone-600">Descrição clara e detalhada do que está sendo contratado (serviço, produto, aluguel).</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-stone-200">
              <h3 className="font-bold text-amber-700 mb-2">3. Preço e Pagamento</h3>
              <p className="text-sm text-stone-600">Valor, forma de pagamento, vencimento e eventuais correções.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-stone-200">
              <h3 className="font-bold text-amber-700 mb-2">4. Prazos e Vigência</h3>
              <p className="text-sm text-stone-600">Datas de início e término do contrato e dos serviços/entregas.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-stone-200">
              <h3 className="font-bold text-amber-700 mb-2">5. Cláusulas de Multa e Rescisão</h3>
              <p className="text-sm text-stone-600">Penalidades por atraso ou descumprimento e regras para encerrar o acordo.</p>
            </div>
             <div className="bg-white p-6 rounded-lg border border-stone-200">
              <h3 className="font-bold text-amber-700 mb-2">6. Foro</h3>
              <p className="text-sm text-stone-600">Cidade onde eventuais disputas judiciais deverão ser resolvidas.</p>
            </div>
          </div>
        </section>

        {/* Seção 3: Contrato vs. Outros Documentos */}
        <section className="mb-16 bg-amber-50/50 p-8 rounded-xl border border-amber-200">
           <h2 className="text-2xl font-bold text-stone-800 mb-4">
            Contrato vs. Recibo vs. Nota Fiscal
          </h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            É importante não confundir esses documentos. Cada um tem uma finalidade específica.
          </p>
          <ul className="space-y-3 text-stone-700">
            <li><span className="font-bold">Contrato:</span> Formaliza o acordo e as regras ANTES ou DURANTE a negociação.</li>
            <li><span className="font-bold">Recibo:</span> Comprova o pagamento DEPOIS que ele foi realizado. Veja nossos <Link href="/recibos" className="text-amber-700 hover:underline font-medium">modelos de recibo</Link>.</li>
            <li><span className="font-bold">Nota Fiscal:</span> Documento fiscal que comprova a venda de um produto ou prestação de um serviço, usado para o recolhimento de impostos.</li>
          </ul>
           <p className="text-sm text-stone-500 mt-4">Explore todas as nossas <Link href="/ferramentas" className="text-amber-700 hover:underline">ferramentas gratuitas</Link> para encontrar o documento certo para sua necessidade, como a <Link href="/ferramentas/procuracao" className="text-amber-700 hover:underline">Procuração</Link> ou o <Link href="/ferramentas/imobiliario" className="text-amber-700 hover:underline">Recibo de Aluguel</Link>.</p>
        </section>

        {/* Seção 4: FAQ */}
        <section>
            <h2 className="text-3xl font-bold text-center text-stone-800 mb-8">
                Perguntas Frequentes (FAQ)
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
                        <p className="text-stone-600 mt-3 leading-relaxed">
                            {item.answer}
                        </p>
                    </details>
                ))}
                </div>
            </div>
        </section>

      </main>
    </>
  );
}
