import type { Metadata } from "next";
import ReciboRpaGenerator from "./_components/ReciboRpaGenerator";
import SeoContentBlock from "@/components/SeoContentBlock";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import { buildOpenGraph } from '@/lib/metadata';

const title = "Recibo RPA Grátis | Recibo de Pagamento a Autônomo em PDF";
const description = "Gere Recibo RPA (Recibo de Pagamento a Autônomo) online grátis. Informe as alíquotas aplicáveis ao seu caso e o gerador calcula INSS, IRRF e ISS. Download em PDF.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/ferramentas/recibo-rpa' },
  openGraph: buildOpenGraph({ title, description, path: '/ferramentas/recibo-rpa' }),
};

export default function ReciboRpaPage() {
  return (
    <main className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Recibo RPA - Pagamento a Autônomo
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Gere o Recibo de Pagamento a Autônomo (RPA) informando as alíquotas aplicáveis ao seu
            caso — o gerador calcula as retenções de INSS, IRRF e ISS e monta o PDF.
          </p>
        </div>

        <ReciboRpaGenerator />

        <SeoContentBlock
          title="O que é Recibo RPA e Quando Usar?"
          content="O Recibo de Pagamento a Autônomo (RPA) é o documento usado para formalizar o pagamento de serviços prestados por profissional autônomo pessoa física, sem CNPJ, a uma empresa. É comum na contratação de designers, consultores, palestrantes e outros prestadores eventuais. O RPA registra o pagamento e discrimina as retenções feitas na fonte: a contribuição previdenciária (INSS), retida sobre o valor bruto e limitada ao teto do salário de contribuição; o IRRF, calculado pela tabela progressiva; e o ISS, quando o município exige a retenção. As alíquotas, as faixas e o teto dependem do enquadramento do prestador e mudam ao longo do tempo, e o ISS ainda varia de município para município e por tipo de serviço — por isso o gerador pede que você informe os percentuais em vez de assumi-los. Confirme quais se aplicam ao seu caso na data do pagamento, com a contabilidade da empresa contratante ou nas fontes oficiais. Para preencher, informe os dados do tomador do serviço, os do prestador, a descrição do serviço, o valor bruto e as retenções aplicáveis. O RPA não é nota fiscal e não substitui a emissão quando o município a exige. Quem responde pelo recolhimento das retenções é a empresa contratante. Este gerador é gratuito, calcula os valores a partir das alíquotas que você informar e monta o PDF pronto para assinatura; a conferência dos percentuais e do enquadramento continua sendo responsabilidade de quem emite o documento."
        />

        <LegalDisclaimer showProcuracaoWarning={false} />
      </div>
    </main>
  );
}
