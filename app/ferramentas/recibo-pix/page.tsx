import type { Metadata } from "next";
import React from 'react';
import FerramentaReciboPix from "./_components/FerramentaReciboPix";
import LegalDisclaimer from "../../components/LegalDisclaimer";
import FaqAccordion from "../../components/FaqAccordion";
import Breadcrumb from "../../components/Breadcrumb";
import EditorialTrustBox from "../../components/EditorialTrustBox";
import RelatedDocuments from "../../components/RelatedDocuments";

export const metadata: Metadata = {
  title: "Recibo de Recebimento via Pix Grátis em PDF | ReciboNaHora",
  description:
    "Recibo de recebimento via Pix para quem recebeu: valor por extenso, motivo e assinatura. Grátis e sem cadastro. O comprovante oficial é sempre o do banco.",
  keywords: ["recibo pix", "recibo de recebimento pix", "recibo de pagamento via pix", "recibo pix pdf"],
  alternates: {
    canonical: "https://www.recibonahora.com.br/ferramentas/recibo-pix",
  },
  openGraph: {
    title: "Recibo de Recebimento via Pix Grátis em PDF | ReciboNaHora",
    description:
      "Recibo de recebimento via Pix para quem recebeu: valor por extenso, motivo e assinatura. O comprovante oficial é sempre o do banco.",
    url: "https://www.recibonahora.com.br/ferramentas/recibo-pix",
    images: [{ url: "https://www.recibonahora.com.br/opengraph-image", width: 1200, height: 630, alt: "ReciboNaHora - Gerador gratuito de recibos e documentos" }],
  },
};

const faqItems = [
  {
    question: "Qual é a diferença entre o recibo e o comprovante do Pix?",
    answer: "O comprovante é emitido pelo aplicativo do banco e mostra que a transferência foi feita. O recibo é uma declaração de quem recebeu o dinheiro: diz de quem recebeu, quanto e por qual motivo. Um não substitui o outro, e somente o banco emite o comprovante oficial da transação."
  },
  {
    question: "Quem deve emitir o recibo de recebimento via Pix?",
    answer: "Quem recebeu o valor. O recibo é uma declaração do recebedor, por isso é ele quem preenche, confere os dados e assina. Quem pagou pode pedir o recibo para guardar junto com o comprovante do banco."
  },
  {
    question: "O QR Code do recibo faz pagamento?",
    answer: "Não. O QR Code apenas reúne, em texto simples, os dados digitados por quem emitiu o recibo (número, recebedor, pagador, valor e data). Ele não é um código Pix de pagamento e não confirma que a transferência aconteceu; para isso, consulte o extrato ou o comprovante no aplicativo do banco."
  },
  {
    question: "Os dados que eu preencho ficam guardados no site?",
    answer: "Não. Nesta ferramenta, o recibo é montado no seu navegador: os nomes, documentos, chave Pix e valores digitados não são enviados nem armazenados pelo ReciboNaHora. O PDF é gerado no seu próprio aparelho."
  },
  {
    question: "Este site tem ligação com o Banco Central ou com algum banco?",
    answer: "Não. O ReciboNaHora é uma plataforma independente. O Pix é um meio de pagamento criado pelo Banco Central, e esta ferramenta apenas ajuda quem recebeu um Pix a registrar o recebimento por escrito."
  }
];

export default function ReciboPixPage() {
  return (
    <main className="bg-slate-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">

      <Breadcrumb
        className="mb-6"
        items={[
          { label: "Início", href: "/" },
          { label: "Ferramentas", href: "/ferramentas" },
          { label: "Recibo de recebimento via Pix" },
        ]}
      />

      <div className="text-center mb-12">
        <span className="bg-blue-100 text-blue-800 text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
          Ferramenta Popular
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
          Recibo de Recebimento via Pix
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Para quem recebeu um Pix registrar por escrito de quem recebeu, quanto e por quê. Preencha, confira a pré-visualização e baixe o PDF.
          O comprovante oficial da transferência é sempre o do aplicativo do banco.
        </p>
      </div>

      <div className="bg-white shadow-2xl shadow-slate-200/80 rounded-2xl p-6 md:p-10 mb-16 border border-slate-200 max-w-7xl mx-auto relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-blue-50 rounded-full blur-2xl opacity-60"></div>
        <FerramentaReciboPix />
      </div>

      <div className="max-w-3xl mx-auto mb-16 space-y-8 text-slate-700">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">O que é o recibo de recebimento via Pix?</h2>
          <p className="leading-relaxed">
            É uma declaração assinada por quem recebeu um Pix. Ela registra de quem o dinheiro veio, o valor (em
            números e por extenso) e o motivo do pagamento, como um serviço prestado, um aluguel ou uma venda.
            O comprovante do banco mostra que a transferência foi feita; o recibo explica a que ela se refere e
            serve como quitação dada pelo recebedor.
          </p>
        </div>
        <div className="rounded-xl border border-slate-300 bg-white p-5">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Recibo não é comprovante bancário</h2>
          <p className="leading-relaxed">
            Somente o aplicativo ou o internet banking da instituição emite o comprovante oficial de um Pix. Este
            recibo é preenchido por quem recebeu e não confirma, sozinho, que o dinheiro entrou na conta. Para ter
            certeza de que um Pix caiu, confira o extrato no aplicativo do seu banco, e não uma imagem enviada por
            mensagem.
          </p>
          <p className="leading-relaxed mt-3">
            Recebeu um comprovante e ficou em dúvida? Veja{" "}
            <a href="/guias/como-saber-se-comprovante-pix-e-falso" className="font-semibold underline">
              como saber se um comprovante Pix é falso
            </a>{" "}
            e o que fazer se você caiu em um golpe.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Quando usar</h2>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Você prestou um serviço (diarista, aulas, consertos, freelas) e recebeu por Pix;</li>
            <li>Você recebeu aluguel ou uma parcela de um acordo entre pessoas físicas;</li>
            <li>Você vendeu um item usado ou um produto artesanal e quer registrar a quitação;</li>
            <li>Quem pagou pediu um documento que descreva o motivo do pagamento.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Quando não usar</h2>
          <p className="leading-relaxed">
            Nunca emita o recibo para um Pix que você não recebeu, nem o use para convencer alguém de que um
            pagamento aconteceu: isso é proibido pelos <a href="/termos-uso" className="underline">Termos de Uso</a> e
            pode configurar crime. O recibo também não substitui a Nota Fiscal quando a operação exige emissão
            fiscal. Em negócios de valor alto ou com obrigações futuras, prefira também um contrato por escrito.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Como preencher</h2>
          <ol className="list-decimal pl-6 space-y-1.5">
            <li>Confira no extrato do seu banco que o Pix realmente entrou na sua conta;</li>
            <li>Preencha seus dados (quem recebeu) e os de quem pagou. CPF e CNPJ são opcionais, mas a ferramenta avisa se os números não conferem;</li>
            <li>Descreva o motivo de forma específica (ex.: &quot;manutenção elétrica realizada em 10/03&quot;);</li>
            <li>Se quiser, copie a data e o ID da transação do comprovante do banco;</li>
            <li>Confira o valor por extenso, baixe o PDF e assine.</li>
          </ol>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Erros comuns</h2>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Emitir o recibo antes de conferir no extrato que o Pix caiu;</li>
            <li>Descrever o motivo de forma vaga demais (ex.: &quot;serviço&quot;), o que dificulta comprovar depois;</li>
            <li>Achar que o QR Code do recibo é um código de pagamento: ele só reúne os dados digitados;</li>
            <li>Tratar o recibo como substituto do comprovante do banco ou da Nota Fiscal.</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-t border-slate-200 pt-12">

        <div className="lg:col-span-2">
          <FaqAccordion items={faqItems} />
          <div className="mt-8 p-4 bg-white rounded-lg shadow-md border border-slate-200/80">
             <LegalDisclaimer />
          </div>
          <RelatedDocuments />
          <EditorialTrustBox />
        </div>

        <aside className="space-y-8 lg:sticky lg:top-8 self-start">
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-4 border-b border-slate-200 pb-3">Outras Ferramentas Úteis</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/ferramentas/recibo-simples" className="flex items-center gap-3 text-slate-600 hover:text-amber-600 group">
                  <span className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-amber-100 text-amber-600/80 group-hover:text-amber-700 transition-all">
                    <i className="fa-solid fa-file-invoice"></i>
                  </span>
                  Gerador de Recibo Simples
                </a>
              </li>
              <li>
                <a href="/ferramentas/orcamento" className="flex items-center gap-3 text-slate-600 hover:text-amber-600 group">
                  <span className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-amber-100 text-amber-600/80 group-hover:text-amber-700 transition-all">
                    <i className="fa-solid fa-calculator"></i>
                  </span>
                  Gerador de Orçamento
                </a>
              </li>
              <li>
                <a href="/ferramentas/nota-promissoria" className="flex items-center gap-3 text-slate-600 hover:text-amber-600 group">
                  <span className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-amber-100 text-amber-600/80 group-hover:text-amber-700 transition-all">
                    <i className="fa-solid fa-file-contract"></i>
                  </span>
                  Nota Promissória Online
                </a>
              </li>
            </ul>
          </div>
        </aside>

      </div>
      </div>
    </main>
  );
}
