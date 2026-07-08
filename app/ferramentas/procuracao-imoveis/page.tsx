import type { Metadata } from "next";
import ProcuracaoImoveisGenerator from "./_components/ProcuracaoImoveisGenerator";
import SeoContentBlock from "@/components/SeoContentBlock";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import { buildOpenGraph } from '@/lib/metadata';

const title = "Procuração Imóveis e Inventário | Modelo para Compra e Venda";
const description = "Procuração para imóveis e inventário grátis. Modelo para compra, venda, escritura, registro e partilha de bens. Documento com firma reconhecida em PDF.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/ferramentas/procuracao-imoveis' },
  openGraph: buildOpenGraph({ title, description, path: '/ferramentas/procuracao-imoveis' }),
};

export default function ProcuracaoImoveisPage() {
  return (
    <main className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Procuração para Imóveis e Inventário
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Modelo específico para compra, venda, administração de imóveis e processos de inventário.
            Reconhecimento de firma obrigatório.
          </p>
        </div>

        <ProcuracaoImoveisGenerator />

        <SeoContentBlock
          title="Procuração para Imóveis: Compra, Venda e Inventário"
          content="A procuração para imóveis e inventário é um documento legal especializado que confere poderes ao procurador para representar o proprietário em todos os atos relacionados a bens imobiliários e processos sucessórios. Este modelo de procuração imobiliária é essencial para quem precisa comprar, vender, permutar, assinar escrituras públicas, registrar imóveis em cartório, administrar propriedades, cobrar e receber aluguéis, ou representar em processos de inventário e partilha de bens após falecimento. Para preencher corretamente, informe a qualificação completa do proprietário (outorgante) com nome, CPF, RG e endereço, além dos dados do procurador (outorgado). Se a procuração for para um imóvel específico, inclua o endereço completo e número da matrícula no registro de imóveis. Este documento permite que o procurador assine contratos de compra e venda, promessas, financiamentos imobiliários, hipotecas, pague impostos como IPTU e ITBI, obtenha certidões negativas, represente perante prefeituras, cartórios de registro de imóveis e tabelionatos, além de atuar em processos judiciais de inventário, arrolamento e habilitação de herdeiros. É OBRIGATÓRIO reconhecimento de firma em cartório, e para transações de alto valor, recomenda-se reconhecimento com autenticidade. Este gerador gratuito cria um documento profissional em PDF completo e juridicamente válido, economizando honorários advocatícios e facilitando negócios imobiliários importantes."
        />

        <LegalDisclaimer showProcuracaoWarning={true} />
      </div>
    </main>
  );
}
