import React from 'react';
import type { Metadata } from 'next';
import ReciboDeAluguelGenerator from './_components/ReciboDeAluguelGenerator';
import FaqAccordion from '../../../app/components/FaqAccordion';
import LegalDisclaimer from '../../../app/components/LegalDisclaimer';
import {
  ToolShell,
  ToolShellMain,
  ToolShellHeader,
} from '../../../app/components/layout/ToolShell';

const faqItems = [
  {
    question: 'Qual a diferença entre um recibo de aluguel e um contrato?',
    answer:
      'O contrato de locação estabelece os termos e regras do aluguel, enquanto o recibo de aluguel comprova o pagamento de uma mensalidade específica. O recibo é a prova de que o inquilino cumpriu sua obrigação financeira naquele mês.',
  },
  {
    question: 'O recibo de aluguel precisa ser assinado?',
    answer:
      'Sim, para ter validade jurídica, o recibo deve ser assinado pela pessoa ou empresa que recebeu o valor (o locador). A assinatura confirma que o pagamento foi, de fato, recebido.',
  },
  {
    question: 'Posso usar este recibo para declarar Imposto de Renda?',
    answer:
      'Sim, tanto o inquilino quanto o proprietário podem e devem usar os recibos de aluguel na sua declaração de Imposto de Renda para comprovar as despesas (para o inquilino) e os rendimentos (para o locador).',
  },
  {
    question: 'Quem deve guardar o recibo de aluguel?',
    answer:
      'Ambas as partes devem guardar uma cópia do recibo. Para o inquilino, é a prova do pagamento. Para o locador, é o controle dos recebimentos e um documento importante para a contabilidade.',
  },
];

export const metadata: Metadata = {
  title: 'Gerador de Recibo de Aluguel para Imprimir | ReciboNaHora',
  description:
    'Crie um recibo de aluguel completo e válido em PDF. Preencha os dados do locador, locatário e imóvel. Ferramenta gratuita para proprietários e imobiliárias.',
  alternates: { canonical: 'https://recibonahora.com.br/ferramentas/imobiliario' },
};

const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Gerador de Recibo Online',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'BRL',
  },
  url: 'https://recibonahora.com.br/ferramentas/imobiliario',
}

export default function ReciboAluguelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      <ToolShell>
      <ToolShellHeader
        title="Gerador de Recibo de Aluguel"
        description="Crie, preencha e baixe um recibo de aluguel válido em segundos. Ideal para proprietários, inquilinos e imobiliárias."
      />
      <ToolShellMain>
        {/* O gerador já contém o formulário e o preview */}
        <ReciboDeAluguelGenerator />

        <section className="mt-16 mb-12 max-w-3xl mx-auto prose prose-slate">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            A Importância do Recibo de Aluguel
          </h2>

          <p>
            O <strong>recibo de aluguel</strong> é o documento mais importante na
            relação entre proprietário (locador) e inquilino (locatário) após a
            assinatura do contrato. Ele serve como prova incontestável de que o
            pagamento mensal foi realizado, trazendo segurança jurídica para
            ambas as partes.
          </p>

          <p>
            Para o <strong>inquilino</strong>, o recibo evita cobranças indevidas
            e comprova sua adimplência. Para o <strong>proprietário</strong>, é
            essencial para o controle financeiro, a organização contábil e a
            declaração de rendimentos à Receita Federal.
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
            O que um Recibo de Aluguel Deve Conter?
          </h3>
          <p>
            Para garantir sua validade, um bom recibo de aluguel deve incluir as
            seguintes informações:
          </p>
          <ul>
            <li>
              <strong>Dados do Locador:</strong> Nome completo e CPF ou CNPJ de quem
              está recebendo o aluguel.
            </li>
            <li>
              <strong>Dados do Locatário:</strong> Nome completo e CPF de quem
              está pagando.
            </li>
            <li>
              <strong>Descrição do Imóvel:</strong> O endereço completo do imóvel
              locado (rua, número, bairro, cidade).
            </li>
            <li>
              <strong>Valor Recebido:</strong> O valor do aluguel, escrito em
              números e por extenso, para evitar qualquer tipo de rasura ou
              dúvida.
            </li>
            <li>
              <strong>Período de Referência:</strong> O mês a que o pagamento se
              refere (ex: "referente ao aluguel de janeiro de 2024").
            </li>
            <li>
              <strong>Local, Data e Assinatura:</strong> A cidade, a data do
              recebimento e, o mais importante, a assinatura do locador.
            </li>
          </ul>

          <div
            className="p-4 mt-8 bg-amber-50 border-l-4 border-amber-400 text-amber-800"
            role="alert"
          >
            <p className="font-bold">Dica de Ouro</p>
            <p>
              Sempre emita o recibo no momento do pagamento. Se o pagamento for
              feito via Pix ou transferência, envie o recibo por e-mail ou
              WhatsApp para formalizar a quitação.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">
            Como Usar o Gerador Gratuito
          </h2>

          <p>
            Nossa ferramenta simplifica a criação de recibos. Siga os passos:
          </p>
          <ol>
            <li>
              <strong>Preencha as informações:</strong> Insira os dados nos campos
              indicados (locador, locatário, valor, etc.).
            </li>
            <li>
              <strong>Revise o documento:</strong> O recibo será gerado ao lado em
              tempo real. Confira se todos os dados estão corretos.
            </li>
            <li>
              <strong>Baixe o PDF:</strong> Clique em "Gerar PDF" para baixar o
              documento pronto para ser assinado, impresso ou enviado.
            </li>
          </ol>
        </section>

        <section className="mt-16 mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Perguntas Frequentes sobre Recibo de Aluguel
          </h2>
          <FaqAccordion items={faqItems} />
        </section>

        <div className="mt-16 text-center">
          <LegalDisclaimer />
        </div>
      </ToolShellMain>
    </ToolShell>
    </>
  );
}
