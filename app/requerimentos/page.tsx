
import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Landmark, Building, Gavel, FileQuestion } from 'lucide-react';
import { Card } from '../components/ui/Card';
import FaqAccordion from '../components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Gerador de Requerimentos Oficiais - Modelos Prontos para Protocolo',
  description: 'Crie e baixe requerimentos para prefeitura, cartório e órgãos públicos. Modelos de pedido via LAI, solicitação de ITBI, declaração de endereço e mais.',
  openGraph: {
    title: 'Gerador de Requerimentos Oficiais - Modelos Prontos para Protocolo',
    description: 'Crie e baixe requerimentos para prefeitura, cartório e órgãos públicos. Modelos de pedido via LAI, solicitação de ITBI, declaração de endereço e mais.',
  },
};

const requerimentosDisponiveis = [
  {
    href: '/requerimentos/lai-pedido',
    title: 'Pedido de Acesso à Informação (LAI)',
    description: 'Solicite dados e documentos a órgãos públicos com base na Lei de Acesso à Informação.',
    icon: <Gavel className="w-8 h-8 text-blue-600" />,
    category: 'LAI',
    popular: true,
  },
  {
    href: '/requerimentos/itbi-modelo',
    title: 'Requerimento para Isenção/Redução de ITBI',
    description: 'Peça a isenção ou o cálculo com alíquota reduzida do ITBI na compra do primeiro imóvel.',
    icon: <Landmark className="w-8 h-8 text-green-600" />,
    category: 'Imóveis/Cartório',
    popular: true,
  },
  {
    href: '/requerimentos/declaracao-endereco',
    title: 'Declaração de Residência',
    description: 'Crie uma declaração de endereço simples para comprovar sua residência atual.',
    icon: <FileText className="w-8 h-8 text-yellow-600" />,
    category: 'Imóveis/Cartório',
    popular: false,
  },
  // Futuros requerimentos podem ser adicionados aqui
];

const faqItems = [
    {
      question: "O que é um requerimento?",
      answer: "Um requerimento é um documento formal através do qual um cidadão faz uma solicitação, pedido ou manifestação a um órgão público ou entidade privada. Ele serve para registrar oficialmente a sua demanda."
    },
    {
      question: "Estes modelos são válidos em qualquer cidade?",
      answer: "Nossos modelos seguem as boas práticas e as leis federais, como a LAI. No entanto, muitos municípios possuem formulários ou sistemas próprios. Sempre verifique o site da sua prefeitura ou do órgão em questão para exigências específicas."
    },
    {
      question: "Preciso assinar o requerimento?",
      answer: "Sim. Para que o documento tenha validade, ele deve ser assinado pelo requerente. Em muitos casos, o protocolo do documento em um órgão público já valida a sua autoria, mas a assinatura é fundamental."
    },
    {
      question: "O que é a Lei de Acesso à Informação (LAI)?",
      answer: "A Lei nº 12.527/2011, conhecida como LAI, regulamenta o direito constitucional de obter informações de órgãos e entidades públicas. Qualquer pessoa, física ou jurídica, pode fazer um pedido de informação sem precisar apresentar um motivo."
    }
];

export default function RequerimentosPage() {
  const maisProcurados = requerimentosDisponiveis.filter(r => r.popular);

  return (
    <div className="bg-slate-50 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Cabeçalho */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Gerador de Requerimentos
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
            Crie, visualize e baixe em PDF documentos para protocolar em órgãos públicos e cartórios.
          </p>
        </section>

        {/* Filtros e Grid */}
        <div>
          {/* Seção Mais Procurados */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Mais Procurados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {maisProcurados.map((req) => (
                <Link href={req.href} key={req.href} passHref>
                  <Card className="flex flex-col items-start p-6 hover:shadow-lg transition-shadow duration-300 h-full">
                    {req.icon}
                    <h3 className="mt-4 text-lg font-bold text-slate-900">{req.title}</h3>
                    <p className="mt-1 text-sm text-slate-600 flex-grow">{req.description}</p>
                    <span className="mt-4 text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">{req.category}</span>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
          
          {/* TODO: Implementar filtros por categoria */}
        </div>

        {/* Seção de FAQ */}
        <section className="mt-16 max-w-4xl mx-auto">
            <div className="text-center mb-8">
                <FileQuestion className="mx-auto h-12 w-12 text-slate-400" />
                <h2 className="mt-4 text-3xl font-bold text-slate-800">Dúvidas Frequentes</h2>
                <p className="mt-2 text-md text-slate-600">Respostas para as perguntas mais comuns sobre requerimentos.</p>
            </div>
            <FaqAccordion items={faqItems} />
        </section>

      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
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
        })}}
      />
    </div>
  );
}
