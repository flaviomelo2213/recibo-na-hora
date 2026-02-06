import type { Metadata } from "next";
import ProcuracaoBancariaGenerator from "./_components/ProcuracaoBancariaGenerator";

export const metadata: Metadata = {
  title: "Procuração Bancária | ReciboNaHora",
  description: "Gere procuração específica para transações bancárias. Modelo gratuito, pronto para preencher e baixar em PDF.",
};

export default function ProcuracaoBancariaPage() {
  return (
    <main className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Procuração Bancária
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Modelo específico para movimentação e transações bancárias.
            Reconhecimento de firma obrigatório.
          </p>
        </div>

        <ProcuracaoBancariaGenerator />
      </div>
    </main>
  );
}
