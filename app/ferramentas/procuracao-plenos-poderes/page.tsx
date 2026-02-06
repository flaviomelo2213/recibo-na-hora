import type { Metadata } from "next";
import ProcuracaoPlenosGenerator from "./_components/ProcuracaoPlenosGenerator";
import SeoContentBlock from "@/components/SeoContentBlock";

export const metadata: Metadata = {
  title: "Procuração de Plenos Poderes Grátis Online | Modelo em PDF",
  description: "Gere procuração de plenos poderes online grátis. Modelo completo com todos os poderes legais necessários. Preencha, visualize e baixe em PDF profissional.",
};

export default function ProcuracaoPlenosPoderesPage() {
  return (
    <main className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Procuração de Plenos Poderes
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Gere uma procuração com poderes amplos para representação legal.
            Documento gratuito com preview ao vivo e download em PDF.
          </p>
        </div>

        <ProcuracaoPlenosGenerator />

        <SeoContentBlock
          title="O que é uma Procuração de Plenos Poderes?"
          content="A procuração de plenos poderes é um documento legal que confere ao procurador amplos poderes para representar o outorgante em diversos atos jurídicos e administrativos. Este modelo de procuração permite que o procurador atue em nome do outorgante perante órgãos públicos, instituições privadas, bancos, cartórios e demais entidades, podendo assinar contratos, escrituras, requerer documentos, efetuar transações financeiras e praticar todos os atos necessários conforme especificado no documento. É fundamental que a procuração de plenos poderes seja preenchida corretamente com a qualificação completa de ambas as partes (outorgante e outorgado), incluindo nome completo, CPF, RG e endereço. Para ter validade jurídica plena, recomenda-se fortemente o reconhecimento de firma em cartório. Este gerador online gratuito facilita a criação do documento, permitindo visualização prévia e download em PDF formatado profissionalmente, economizando tempo e custos com advogados para documentos simples."
        />
      </div>
    </main>
  );
}
