import type { Metadata } from 'next';
import RescisaoCalculator from './_components/RescisaoCalculator';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Calculadora de Rescisão CLT Online | Simule seu Acerto',
  description:
    'Calcule uma estimativa do seu acerto trabalhista (rescisão de contrato) em uma demissão sem justa causa. Informe salário, meses trabalhados e veja o resultado na hora.',
  alternates: {
    canonical: '/ferramentas/calculadora-rescisao',
  },
};

const faqItems = [
  {
    question: 'O que a calculadora de rescisão inclui?',
    answer:
      'Nossa calculadora foca nas verbas rescisórias principais: saldo de salário, 13º proporcional e férias proporcionais + 1/3. Ela não inclui FGTS, multa de 40% nem descontos como INSS e IRRF.',
  },
  {
    question: 'Esta calculadora serve para qualquer tipo de demissão?',
    answer:
      'Ela é mais adequada para demissão sem justa causa. Em pedido de demissão, você perde o direito ao aviso prévio indenizado, ao saque do FGTS e à multa de 40%. Em demissão por justa causa, você recebe apenas o saldo de salário e férias vencidas (se houver).',
  },
  {
    question: 'O que é aviso prévio indenizado?',
    answer:
      'É quando a empresa encerra o contrato imediatamente e paga o valor referente ao período do aviso (normalmente 30 dias), em vez de você trabalhar esse período. Este valor não está incluído nesta calculadora.',
  },
  {
    question: 'Como sei meu salário bruto?',
    answer:
      'É o salário registrado em carteira antes dos descontos. Você pode encontrá-lo no holerite (contracheque) ou no app da Carteira de Trabalho Digital.',
  },
  {
    question: 'O resultado da calculadora é o valor exato que vou receber?',
    answer:
      'Não. É uma estimativa. O valor líquido pode ser menor por descontos (INSS e Imposto de Renda, se aplicável) e por regras específicas do seu caso. Em situações importantes, consulte um contador, sindicato ou advogado.',
  },
];

function jsonLdFAQ() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

export default function CalculadoraRescisaoPage() {
  return (
    <main className="bg-slate-50 py-12 md:py-20">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ()) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Calculadora de Rescisão Trabalhista
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Tenha uma estimativa clara dos seus direitos ao sair de um emprego. Preencha os dados
            abaixo e simule o cálculo das suas verbas rescisórias.
          </p>
        </header>

        <RescisaoCalculator />

        <section className="max-w-4xl mx-auto mt-20 space-y-12">
          <div className="prose prose-lg prose-slate mx-auto">
            <h2 className="text-3xl font-bold text-slate-900">Entendendo as verbas rescisórias</h2>
            <p>
              A rescisão do contrato de trabalho envolve direitos e deveres. Conhecer as verbas que
              compõem o acerto ajuda a entender se os valores estão coerentes com o seu caso.
            </p>
            <ul>
              <li>
                <strong>Saldo de salário:</strong> pagamento pelos dias trabalhados no mês da rescisão.
              </li>
              <li>
                <strong>Aviso prévio:</strong> período de 30 dias (ou mais, em alguns casos). Pode ser trabalhado
                ou indenizado.
              </li>
              <li>
                <strong>13º proporcional:</strong> referente aos meses trabalhados no ano.
              </li>
              <li>
                <strong>Férias proporcionais + 1/3:</strong> férias do período aquisitivo em curso, com adicional.
              </li>
              <li>
                <strong>Férias vencidas + 1/3 (se houver):</strong> quando existirem períodos não gozados.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900">Diferenças por tipo de desligamento</h3>
            <p>
              O motivo do término do contrato impacta diretamente o que é devido ao trabalhador. Abaixo,
              um resumo das diferenças mais comuns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h4 className="font-bold text-slate-800 text-xl mb-2">Demissão sem justa causa</h4>
              <p className="text-slate-600">
                Em geral, dá direito às verbas rescisórias completas e pode incluir saque do FGTS + multa
                de 40% e acesso ao seguro-desemprego (conforme regras).
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h4 className="font-bold text-slate-800 text-xl mb-2">Pedido de demissão</h4>
              <p className="text-slate-600">
                Normalmente não dá direito à multa de 40% do FGTS, nem ao saque do FGTS e nem ao seguro-desemprego.
                Pode haver cumprimento (ou desconto) do aviso prévio.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-400 prose prose-slate mx-auto">
            <h4 className="font-bold text-amber-900">Aviso importante</h4>
            <p className="text-amber-800">
              Esta ferramenta oferece uma <strong>estimativa</strong> e não substitui o cálculo oficial feito pelo RH
              ou por um profissional. Os valores são brutos e podem variar por descontos (INSS/IR), adicionais,
              convenções coletivas e regras específicas do seu contrato.
            </p>
          </div>
        </section>

        <section className="max-w-3xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            Dúvidas frequentes sobre rescisão
          </h2>
          <FaqAccordion items={faqItems} />
        </section>
      </div>
    </main>
  );
}
