import type { Metadata } from "next";
import ProcuracaoPlenosGenerator from "./_components/ProcuracaoPlenosGenerator";

export const metadata: Metadata = {
  title: "Procuração de Plenos Poderes | ReciboNaHora",
  description: "Gere procuração de plenos poderes online. Modelo gratuito, pronto para preencher e baixar em PDF.",
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
      </div>
    </main>
  );
}
