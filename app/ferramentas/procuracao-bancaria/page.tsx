import type { Metadata } from "next";
import ProcuracaoBancariaGenerator from "./_components/ProcuracaoBancariaGenerator";
import SeoContentBlock from "@/components/SeoContentBlock";
import LegalDisclaimer from "@/components/LegalDisclaimer";

export const metadata: Metadata = {
  title: "Procuração Bancária Grátis | Modelo para Movimentação de Conta",
  description: "Procuração bancária online grátis. Autorize movimentação de conta corrente, saques, depósitos e transações financeiras. Modelo com firma reconhecida em PDF.",
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

        <SeoContentBlock
          title="Procuração Bancária: Como Usar e Quando é Necessária"
          content="A procuração bancária é um documento legal específico que autoriza uma pessoa (procurador) a realizar operações financeiras e movimentar contas bancárias em nome do titular (outorgante). Este modelo de procuração bancária é fundamental para situações em que o titular da conta não pode comparecer pessoalmente ao banco, seja por viagem, internação hospitalar, residência no exterior ou qualquer impedimento. Com a procuração bancária, o procurador pode efetuar saques, depósitos, transferências, pagamentos de contas, consultas de saldo, abertura e encerramento de contas, contratação de empréstimos e demais operações especificadas no documento. Para preencher corretamente, insira os dados completos do titular da conta (outorgante), incluindo nome, CPF, RG e endereço, bem como os dados bancários específicos (banco, agência e conta). O procurador também deve ter sua qualificação completa registrada. É OBRIGATÓRIO o reconhecimento de firma em cartório para que a procuração bancária tenha validade. Os bancos não aceitam procurações bancárias sem reconhecimento de firma por questões de segurança. Este gerador gratuito cria o documento profissional em PDF pronto para reconhecimento em cartório, economizando custos com advogados e facilitando operações financeiras emergenciais."
        />

        <LegalDisclaimer showProcuracaoWarning={true} />
      </div>
    </main>
  );
}
