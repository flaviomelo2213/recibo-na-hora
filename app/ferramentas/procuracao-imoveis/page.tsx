import type { Metadata } from "next";
import ProcuracaoImoveisGenerator from "./_components/ProcuracaoImoveisGenerator";

export const metadata: Metadata = {
  title: "Procuração para Imóveis e Inventário | ReciboNaHora",
  description: "Gere procuração específica para transações imobiliárias e processos de inventário. Modelo gratuito em PDF.",
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
      </div>
    </main>
  );
}
