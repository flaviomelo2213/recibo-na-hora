import type { Metadata } from "next";
import ProcuracaoInssGenerator from "./_components/ProcuracaoInssGenerator";
import SeoContentBlock from "@/components/SeoContentBlock";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import { buildOpenGraph } from '@/lib/metadata';

const title = "Procuração INSS Grátis | Modelo para Aposentadoria e Benefícios";
const description = "Procuração para INSS online grátis. Modelo específico para solicitar aposentadoria, auxílio-doença, perícia médica e outros benefícios previdenciários. Download em PDF.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/ferramentas/procuracao-inss' },
  openGraph: buildOpenGraph({ title, description, path: '/ferramentas/procuracao-inss' }),
};

export default function ProcuracaoInssPage() {
  return (
    <main className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Procuração para INSS
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Modelo específico para representação em processos, benefícios e solicitações junto ao Instituto Nacional do Seguro Social.
          </p>
        </div>

        <ProcuracaoInssGenerator />

        <SeoContentBlock
          title="Como Preencher a Procuração para INSS Corretamente"
          content="A procuração para INSS é um documento específico que autoriza uma pessoa de confiança a representar o segurado em todos os procedimentos junto ao Instituto Nacional do Seguro Social. Este modelo de procuração INSS é essencial para quem precisa dar entrada em aposentadoria, auxílio-doença, pensão por morte, BPC-LOAS, salário-maternidade ou acompanhar perícias médicas. Para preencher corretamente, informe os dados completos do outorgante (segurado), incluindo nome completo, CPF, RG e número do NIT/PIS/PASEP se disponível. O outorgado (procurador) também deve ter sua qualificação completa registrada. Especifique claramente a finalidade da procuração no campo apropriado, como 'requerer e acompanhar pedido de aposentadoria por idade' ou 'representar em perícia médica e recurso de auxílio-doença'. Recomenda-se reconhecimento de firma em cartório para evitar problemas no atendimento das agências do INSS. Este gerador online gratuito cria um documento profissional em PDF, economizando tempo e dinheiro com despachantes e facilitando o acesso aos benefícios previdenciários."
        />

        <LegalDisclaimer showProcuracaoWarning={true} />
      </div>
    </main>
  );
}
