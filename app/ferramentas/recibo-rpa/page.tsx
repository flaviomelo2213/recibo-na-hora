import type { Metadata } from "next";
import ReciboRpaGenerator from "./_components/ReciboRpaGenerator";
import SeoContentBlock from "@/components/SeoContentBlock";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import { buildOpenGraph } from '@/lib/metadata';

const title = "Recibo RPA Grátis | Recibo de Pagamento a Autônomo em PDF";
const description = "Gere Recibo RPA (Recibo de Pagamento a Autônomo) online grátis. Modelo oficial brasileiro com cálculo automático de INSS, IRRF e ISS. Download em PDF.";

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
            Gere Recibo de Pagamento a Autônomo (RPA) com cálculo automático de impostos (INSS, IRRF e ISS).
            Modelo oficial conforme legislação brasileira.
          </p>
        </div>

        <ReciboRpaGenerator />

        <SeoContentBlock
          title="O que é Recibo RPA e Quando Usar?"
          content="O Recibo de Pagamento a Autônomo (RPA) é o documento obrigatório utilizado para formalizar o pagamento de serviços prestados por profissionais autônomos que não possuem CNPJ. O RPA é essencial para empresas que contratam profissionais liberais como designers, consultores, palestrantes, médicos, advogados e outros prestadores de serviços eventuais. O recibo RPA serve como comprovante de pagamento e permite que a empresa dedutora os impostos devidos na fonte, incluindo INSS (11% sobre o valor bruto), IRRF (Imposto de Renda Retido na Fonte, variando conforme a tabela progressiva) e ISS (Imposto Sobre Serviços, que varia de 2% a 5% conforme o município). Para preencher o RPA corretamente, informe os dados completos do tomador de serviços (empresa contratante), do prestador de serviços (autônomo), descrição detalhada do serviço prestado, valor bruto e as retenções aplicáveis. O RPA é diferente da nota fiscal e deve ser usado especificamente para pagamentos a pessoas físicas que prestam serviços sem vínculo empregatício. Este gerador online gratuito calcula automaticamente os impostos devidos e cria um documento profissional em PDF pronto para assinatura e uso contábil, garantindo conformidade com a legislação trabalhista e fiscal brasileira."
        />

        <LegalDisclaimer showProcuracaoWarning={false} />
      </div>
    </main>
  );
}
