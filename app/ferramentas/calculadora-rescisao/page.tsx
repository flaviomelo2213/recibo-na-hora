import type { Metadata } from 'next';
import RescisaoCalculator from './_components/RescisaoCalculator';
import FaqAccordion from '@/components/FaqAccordion';
import {
  ToolShell,
  ToolShellHeader,
  ToolShellMain,
} from '@/components/layout/ToolShell';
import { buildOpenGraph } from '@/lib/metadata';
import AdSlot from '@/components/ads/AdSlot';
import Breadcrumb from '@/components/Breadcrumb';
import EditorialTrustBox from '@/components/EditorialTrustBox';
import RelatedDocuments from '@/components/RelatedDocuments';

const title = 'Calculadora de Rescisão CLT Online | Simule seu Acerto';
const description =
  'Calcule uma estimativa do seu acerto trabalhista (rescisão de contrato) em uma demissão sem justa causa. Informe salário, meses trabalhados e veja o resultado na hora.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/ferramentas/calculadora-rescisao',
  },
  openGraph: buildOpenGraph({ title, description, path: '/ferramentas/calculadora-rescisao' }),
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
    <ToolShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ()) }}
      />
      <Breadcrumb
        className="mb-4"
        items={[
          { label: "Início", href: "/" },
          { label: "Ferramentas", href: "/ferramentas" },
          { label: "Calculadora de Rescisão" },
        ]}
      />
      <ToolShellHeader
        title="Calculadora de Rescisão Trabalhista"
        description="Tenha uma estimativa clara dos seus direitos ao sair de um emprego. Preencha os dados abaixo e simule o cálculo das suas verbas rescisórias."
      />
      <ToolShellMain>
        <RescisaoCalculator />

        <article className="prose prose-lg prose-slate mx-auto mt-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Entendendo as Verbas Rescisórias
          </h2>
          <p>
            A rescisão de um contrato de trabalho no regime CLT (Consolidação das
            Leis do Trabalho) envolve uma série de cálculos para garantir que o
            trabalhador receba todos os seus direitos. Conhecer cada uma dessas
            verbas é fundamental para conferir seu acerto.
          </p>

          <h3>Saldo de Salário</h3>
          <p>
            Corresponde ao pagamento pelos dias que você efetivamente trabalhou no
            mês da rescisão. O cálculo é simples: divide-se o salário mensal por
            30 e multiplica-se pelo número de dias trabalhados.
          </p>

          <h3>Aviso Prévio Indenizado</h3>
          <p>
            Quando a empresa opta por desligar o funcionário imediatamente, ela
            deve pagar o valor correspondente a um mês de salário. Este é o aviso
            prévio indenizado, que nossa calculadora simula como o principal
            cenário.
          </p>

          <h3>13º Salário Proporcional</h3>
          <p>
            Você tem direito a 1/12 do seu 13º salário para cada mês trabalhado
            no ano (ou fração igual ou superior a 15 dias). Se a rescisão ocorre
            em junho, por exemplo, você receberá 6/12 do seu 13º.
          </p>

          <h3>Férias Proporcionais + 1/3 Constitucional</h3>
          <p>
            Assim como o 13º, as férias também são devidas de forma proporcional.
            A cada 12 meses de trabalho, você tem direito a 30 dias de férias. Na
            rescisão, você recebe o valor correspondente aos meses do período
            aquisitivo incompleto, acrescido de 1/3.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12">
            Como o Tipo de Demissão Afeta o Cálculo
          </h2>
          <p>
            O motivo do término do contrato de trabalho muda radicalmente os seus
            direitos. Entenda os cenários mais comuns:
          </p>

          <div className="space-y-6">
            <div className="p-4 bg-white border border-slate-200 rounded-lg">
              <h4 className="font-bold text-slate-800">_Demissão sem justa causa</h4>
              <p className="text-slate-600">
                É o cenário mais vantajoso para o trabalhador. Garante o direito a
                todas as verbas rescisórias (saldo de salário, aviso prévio,
                férias e 13º proporcionais), além do direito a sacar o saldo do
                FGTS acrescido de uma multa de 40% paga pela empresa.
              </p>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-lg">
              <h4 className="font-bold text-slate-800">_Pedido de demissão</h4>
              <p className="text-slate-600">
                Quando o trabalhador pede para sair, ele perde o direito ao aviso
                prévio indenizado (podendo ter que cumpri-lo ou ser descontado),
                ao saque do FGTS e à multa de 40%. Recebe apenas o saldo de
                salário, 13º e férias proporcionais.
              </p>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-lg">
              <h4 className="font-bold text-slate-800">_Demissão por justa causa</h4>
              <p className="text-slate-600">
                Ocorre quando o empregado comete uma falta grave. Neste caso, o
                trabalhador perde a maior parte dos seus direitos, recebendo apenas
                o saldo de salário e eventuais férias vencidas, se houver.
              </p>
            </div>
          </div>

          <div
            className="p-6 mt-8 bg-amber-50 border-l-4 border-amber-400 text-amber-800 rounded-r-lg"
            role="alert"
          >
            <h4 className="font-bold">Atenção: A Calculadora é uma Estimativa</h4>
            <p className="mt-2">
              Esta ferramenta foi criada para fornecer uma visão geral e
              aproximada dos valores. O cálculo final, realizado pelo RH da
              empresa, incluirá descontos obrigatórios como INSS e Imposto de
              Renda (IRRF), além de outros fatores como horas extras, adicionais
              e convenções coletivas. Use este resultado como um ponto de partida.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12">
            Quando Não Usar
          </h2>
          <p>
            Esta calculadora não deve ser usada como base para uma decisão jurídica
            ou financeira definitiva, nem substitui o cálculo oficial feito pelo RH
            da empresa ou por um contador. Ela também não cobre casos específicos
            como acordos trabalhistas, estabilidades (gestante, acidente de
            trabalho) ou convenções coletivas com regras próprias.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12">
            Erros Comuns ao Interpretar a Rescisão
          </h2>
          <ul>
            <li>Confundir o tipo de demissão e aplicar o cálculo errado para o seu caso;</li>
            <li>Esquecer que o resultado é bruto — ainda faltam os descontos de INSS e, se aplicável, IRRF;</li>
            <li>Não considerar o FGTS e a multa de 40% (não incluídos nesta estimativa) na conta final;</li>
            <li>Assinar o termo de rescisão sem antes conferir os valores com calma.</li>
          </ul>
        </article>

        <div className="max-w-3xl mx-auto">
          <AdSlot slot="0000000001" />
        </div>

        <section className="max-w-3xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            Dúvidas Frequentes Sobre a Rescisão
          </h2>
          <FaqAccordion items={faqItems} />
        </section>

        <div className="max-w-3xl mx-auto">
          <RelatedDocuments />
          <EditorialTrustBox />
        </div>
      </ToolShellMain>
    </ToolShell>
  );
}
