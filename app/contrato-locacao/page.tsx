
import type { Metadata } from 'next';
import ContratoLocacaoGenerator from './_components/ContratoLocacaoGenerator';

export const metadata: Metadata = {
  title: 'Gerador de Contrato de Aluguel | ReciboNaHora',
  description: 'Crie um Contrato de Aluguel residencial simples e seguro. Preencha os dados do locador, locatário e imóvel para gerar seu documento em PDF.',
  alternates: {
    canonical: '/contrato-locacao'
  }
};

export default function ContratoAluguelPage() {
  return (
    <div className="bg-slate-50 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="text-center mb-12 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Gerador de Contrato de Aluguel
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Preencha as informações abaixo para gerar uma prévia do seu contrato de aluguel. A versão final em PDF conterá todas as cláusulas legais para sua segurança.
            </p>
        </header>

        <ContratoLocacaoGenerator />

        <section className="max-w-4xl mx-auto mt-20 space-y-8 prose prose-lg prose-slate">
            <h2 className="text-3xl font-bold text-slate-900">A Importância de um Bom Contrato</h2>
            <p>
                O contrato de aluguel é o documento mais importante na relação entre locador e locatário. Ele estabelece os direitos e deveres de cada um, definindo regras sobre o valor do aluguel, prazo de locação, responsabilidades por manutenções e multas por descumprimento. Ter um contrato claro e completo evita dores de cabeça e disputas futuras.
            </p>
            <h3>Principais Cláusulas (Presentes na versão final):</h3>
            <ul>
                <li><strong>Qualificação das Partes:</strong> Informações completas do locador e do locatário.</li>
                <li><strong>Descrição do Imóvel:</strong> Endereço e características do imóvel alugado.</li>
                <li><strong>Valor e Pagamento:</strong> Definição do valor do aluguel, data de vencimento e forma de pagamento.</li>
                <li><strong>Garantia:</strong> Caução, fiador ou seguro-fiança para proteger contra inadimplência.</li>
                <li><strong>Vigência:</strong> Prazo de duração do contrato de aluguel.</li>
            </ul>
             <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-400 mt-8">
                <h4 className="font-bold text-amber-900">Funcionalidade de Geração de PDF</h4>
                <p className="text-amber-800">
                    A capacidade de gerar o contrato final em PDF a partir dos dados preenchidos está em desenvolvimento e será adicionada em breve a esta página.
                </p>
            </div>
        </section>
      </div>
    </div>
  );
}
