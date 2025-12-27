
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parcerias e Ferramentas Recomendadas para MEI e Autônomos",
  description: "Conheça as ferramentas que recomendamos para otimizar seu negócio: assinatura eletrônica, contabilidade, emissão de NF-e, certificados e pagamentos.",
  alternates: {
    canonical: "/parcerias",
  },
};

const faqItems = [
    {
      question: "As ferramentas recomendadas são gratuitas?",
      answer: "A maioria das ferramentas que recomendamos são serviços pagos (SaaS - Software as a Service). Elas resolvem problemas mais complexos que nossas ferramentas gratuitas, como contabilidade completa ou gestão de pagamentos. Nosso objetivo é indicar soluções que ofereçam um bom custo-benefício para levar seu negócio ao próximo nível."
    },
    {
      question: "Por que vocês não desenvolvem essas ferramentas?",
      answer: "Nosso foco é ser o melhor em ferramentas rápidas e gratuitas para o dia a dia. Empresas especializadas em áreas como contabilidade ou certificação digital dedicam anos de desenvolvimento e equipes inteiras para criar as melhores soluções possíveis. Preferimos indicar esses especialistas a criar uma solução inferior."
    },
    {
      question: "Como vocês escolhem os parceiros e as ferramentas?",
      answer: "Nossa escolha é baseada em 3 pilares: 1) Qualidade e reputação do produto no mercado. 2) Relevância para o nosso público (MEIs, autônomos). 3) Bom suporte ao cliente. Só recomendamos o que usaríamos em nosso próprio negócio."
    },
    {
      question: "O que significa o \'Aviso de Comissão\'?",
      answer: "Significa que, se você contratar um serviço através de um link em nossa página, nós podemos receber uma comissão do parceiro, sem nenhum custo extra para você. É uma forma de você apoiar nosso trabalho e nos ajudar a manter as ferramentas gratuitas. Saiba mais em <a href=\'/como-ganhamos-dinheiro\' class=\'text-amber-700 hover:underline\'>nossa página de transparência</a>."
    },
    {
      question: "Posso confiar nessas empresas?",
      answer: "Fazemos uma análise prévia e buscamos parceiros com sólida reputação no mercado. No entanto, a relação contratual é sempre entre você e a empresa parceira. Recomendamos que você sempre leia os termos de serviço e avalie se a solução atende perfeitamente às suas necessidades antes de contratar."
    },
    {
      question: "Tenho uma ferramenta, posso ser um parceiro?",
      answer: "Estamos sempre abertos a conhecer novas soluções que possam beneficiar nossa comunidade. Se você tem um serviço de qualidade focado em autônomos e pequenos negócios no Brasil, entre em contato conosco através do nosso e-mail de parceria para que possamos avaliar."
    }
  ];

const partnershipCategories = [
    {
        title: "Assinatura Eletrônica",
        recommendation: "Para formalizar contratos à distância com validade jurídica, economizando tempo e custos com impressão e cartório.",
        usage: "Ao fechar um serviço com cliente de outra cidade, assinar um contrato de aluguel ou qualquer acordo que precise de formalização rápida e segura.",
        buttonText: "Ver Plataforma Recomendada",
        href: "#"
    },
    {
        title: "Certificado Digital (e-CPF/e-CNPJ)",
        recommendation: "Essencial para emitir notas fiscais, acessar serviços do governo (e-CAC) e assinar documentos com o mais alto nível de segurança.",
        usage: "Quando seu MEI precisa emitir NF-e para outras empresas ou quando você, como PF, precisa entregar declarações e acessar dados da Receita Federal.",
        buttonText: "Ver Emissores de Certificado",
        href: "#"
    },
    {
        title: "Contabilidade Online para MEI",
        recommendation: "Plataformas que automatizam o desenquadramento do MEI, o cálculo de impostos no Simples Nacional e a gestão contábil quando seu negócio cresce.",
        usage: "Quando seu faturamento anual se aproxima do teto do MEI ou quando você precisa de um suporte profissional para a transição para Microempresa (ME).",
        buttonText: "Ver Contabilidade Parceira",
        href: "#"
    },
    {
        title: "Emissão de Nota Fiscal (NF-e)",
        recommendation: "Sistemas simples e focados em prestadores de serviço para emitir, gerenciar e armazenar suas notas fiscais de forma integrada.",
        usage: "Obrigatorio sempre que você presta um serviço para uma Pessoa Jurídica (empresa) e precisa cumprir com as obrigações fiscais.",
        buttonText: "Ver Emissor de NF-e",
        href: "#"
    },
    {
        title: "Gestão de Pagamentos",
        recommendation: "Soluções que oferecem links de pagamento, boletos e maquininhas de cartão com taxas competitivas e integração fácil.",
        usage: "Para profissionalizar suas cobranças, permitir que o cliente pague parcelado no cartão e automatizar o controle de recebimentos.",
        buttonText: "Ver Soluções de Pagamento",
        href: "#"
    }
]

export default function ParceriasPage() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer.replace(/<[^>]*>?/gm, '')
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
        <header className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-800 mb-4 tracking-tight">
            Parcerias e Ferramentas Recomendadas
          </h1>
          <p className="text-lg text-stone-600">
            Para levar seu negócio ao próximo nível, selecionamos ferramentas e serviços que complementam nossas soluções gratuitas e resolvem problemas complexos do dia a dia.
          </p>
        </header>

        {/* Aviso de Transparência */}
        <div className="max-w-4xl mx-auto bg-amber-50 p-6 rounded-xl border border-amber-200 mb-16 text-center">
            <h4 className="font-bold text-amber-900 mb-2">
                Aviso de Transparência e Comissão
            </h4>
            <p className="text-sm text-amber-800 leading-relaxed">
                Para manter nossas ferramentas gratuitas, utilizamos links de afiliados. Isso significa que, se você contratar um serviço através desta página, nós podemos ganhar uma comissão. <strong>Isso não gera nenhum custo adicional para você.</strong> Só recomendamos produtos que confiamos. Saiba mais em nossa página <Link href="/como-ganhamos-dinheiro" className="font-semibold hover:underline">Como Ganhamos Dinheiro</Link>.
            </p>
        </div>

        {/* Cards de Categorias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipCategories.map((cat, index) => (
                <div key={index} className="bg-white border border-stone-200 rounded-lg shadow-sm flex flex-col p-6">
                    <h2 className="text-xl font-bold text-stone-800 mb-3">{cat.title}</h2>
                    <div className="text-stone-600 text-sm space-y-4 flex-grow">
                        <div>
                            <p className="font-semibold text-stone-700 mb-1">Por que recomendamos:</p>
                            <p>{cat.recommendation}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-stone-700 mb-1">Quando usar:</p>
                            <p>{cat.usage}</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Link href={cat.href} className="block w-full text-center bg-amber-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-amber-700 transition-colors">
                            {cat.buttonText}
                        </Link>
                    </div>
                </div>
            ))}
        </div>


        {/* FAQ Section */}
        <section className="mt-20">
            <h2 className="text-3xl font-bold text-center text-stone-800 mb-8">
                Perguntas Frequentes sobre Parcerias
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
