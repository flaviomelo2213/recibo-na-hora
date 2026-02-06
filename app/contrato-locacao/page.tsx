
import type { Metadata } from 'next';
import ContratoLocacaoGenerator from './_components/ContratoLocacaoGenerator';
import SeoContentBlock from '@/components/SeoContentBlock';
import LegalDisclaimer from '@/components/LegalDisclaimer';

export const metadata: Metadata = {
  title: 'Contrato de Aluguel Grátis | Modelo Residencial em PDF',
  description: 'Gere contrato de aluguel residencial online grátis. Modelo completo com todas as cláusulas legais. Preencha dados do locador, locatário e imóvel. Download em PDF.',
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
                Contrato de Aluguel Residencial
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Gere seu contrato de locação residencial completo. Preencha os dados e baixe em PDF profissional com todas as cláusulas legais necessárias.
            </p>
        </header>

        <ContratoLocacaoGenerator />

        <SeoContentBlock
          title="Como Fazer um Contrato de Aluguel Válido e Seguro"
          content="O contrato de aluguel residencial, também chamado de contrato de locação, é o documento que formaliza a relação entre locador (proprietário) e locatário (inquilino). Para ser válido, o contrato de aluguel deve conter a qualificação completa das partes com nome, CPF, RG e endereço, descrição detalhada do imóvel locado incluindo endereço completo, valor do aluguel por extenso e em números, dia de vencimento, prazo de duração da locação (geralmente 12, 24 ou 30 meses), forma de reajuste anual (geralmente pelo IGP-M ou IPCA), responsabilidades sobre condomínio, IPTU, água, luz e manutenções. É fundamental estabelecer a garantia locatícia (caução, fiador ou seguro-fiança) para proteger o locador contra inadimplência. O contrato de aluguel deve especificar as condições de rescisão antecipada, multas por atraso no pagamento (geralmente 10% mais juros de 1% ao mês) e cláusulas sobre animais de estimação, reformas e uso do imóvel. Para preencher este modelo gratuito de contrato de aluguel, insira os dados completos do locador e locatário, endereço do imóvel, valor mensal, dia de vencimento e prazo. Este gerador cria um contrato de locação profissional em PDF pronto para assinatura, economizando custos com imobiliárias e advogados. Embora não seja obrigatório reconhecimento de firma, recomenda-se que as assinaturas sejam reconhecidas em cartório para maior segurança jurídica. Um bom contrato de aluguel previne conflitos, garante os direitos de ambas as partes e facilita a resolução de disputas judiciais caso necessário."
        />

        <section className="max-w-4xl mx-auto mt-12 space-y-6 prose prose-lg prose-slate">
            <h2 className="text-2xl font-bold text-slate-900">Principais Cláusulas do Contrato de Locação</h2>
            <ul className="space-y-2">
                <li><strong>Qualificação das Partes:</strong> Nome completo, CPF, RG e endereço do locador e locatário</li>
                <li><strong>Descrição do Imóvel:</strong> Endereço completo e características do imóvel</li>
                <li><strong>Valor e Pagamento:</strong> Aluguel mensal, vencimento e forma de pagamento</li>
                <li><strong>Prazo:</strong> Duração da locação e condições de renovação</li>
                <li><strong>Garantia:</strong> Tipo de garantia (caução, fiador ou seguro-fiança)</li>
                <li><strong>Responsabilidades:</strong> Quem paga condomínio, IPTU e despesas</li>
            </ul>
        </section>

        <LegalDisclaimer showProcuracaoWarning={false} />
      </div>
    </div>
  );
}
