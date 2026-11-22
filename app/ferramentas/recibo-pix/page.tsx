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
    "Recibo de recebimento via Pix com QR Code para pagar, valor por extenso e motivo. Grátis e sem cadastro. Só vale junto com o comprovante do banco.",
  keywords: ["recibo pix", "recibo de recebimento pix", "recibo de pagamento via pix", "recibo pix pdf"],
  alternates: {
    canonical: "https://www.recibonahora.com.br/ferramentas/recibo-pix",
  },
  openGraph: {
    title: "Recibo de Recebimento via Pix Grátis em PDF | ReciboNaHora",
    description:
      "Recibo de recebimento via Pix com QR Code para pagar, valor por extenso e motivo. Só vale junto com o comprovante do banco.",
    url: "https://www.recibonahora.com.br/ferramentas/recibo-pix",
    images: [{ url: "https://www.recibonahora.com.br/opengraph-image", width: 1200, height: 630, alt: "ReciboNaHora - Gerador gratuito de recibos e documentos" }],
  },
};

const faqItems = [
  {
    question: "Qual é a diferença entre o recibo e o comprovante do Pix?",
    answer: "O comprovante é emitido pelo aplicativo do banco e mostra que a transferência foi feita. O recibo é emitido por quem vai receber: diz quem paga, quanto e por qual motivo, e traz o QR Code para pagar. O recibo só tem validade junto com o comprovante da transação, e somente o banco emite esse comprovante."
  },
  {
    question: "O recibo vale sem o comprovante do banco?",
    answer: "Não. O recibo é um pedido de pagamento com os dados de quem recebe. O pagamento só se confirma pelo comprovante da transação emitido pelo banco e pelo valor no extrato de quem recebeu. Guarde os dois juntos: o recibo explica o pagamento e o comprovante prova a transferência."
  },
  {
    question: "Quem deve emitir o recibo de recebimento via Pix?",
    answer: "Quem vai receber o valor. Ele preenche os próprios dados e a chave Pix, envia o documento ao pagador e assina. Quem paga usa o QR Code ou o Pix Copia e Cola, confere no aplicativo do banco o nome e o valor, e guarda o recibo junto com o comprovante do banco."
  },
  {
    question: "O QR Code do recibo faz pagamento?",
    answer: "Sim. É um QR Code Pix estático, no padrão do Banco Central, com a chave e o valor informados por quem emitiu o recibo. Antes de confirmar o pagamento, o aplicativo do banco mostra o nome de quem vai receber e o valor: confira se são os mesmos do documento. O QR Code não prova que o pagamento aconteceu; para isso vale o comprovante do banco."
  },
  {
    question: "Usar comprovante ou recibo Pix falso é crime?",
    answer: "Sim. Usar um documento para convencer alguém de que um pagamento aconteceu sem que ele tenha acontecido pode configurar estelionato (art. 171 do Código Penal), além de falsidade documental. Por isso este recibo não serve como prova de pagamento: ele só vale com o comprovante da transação emitido pelo banco."
  },
  {
    question: "Os dados que eu preencho ficam guardados no site?",
    answer: "Não. Nesta ferramenta, o recibo é montado no seu navegador: os nomes, documentos, chave Pix e valores digitados não são enviados nem armazenados pelo ReciboNaHora. O PDF é gerado no seu próprio aparelho."
  },
  {
    question: "Este site tem ligação com o Banco Central ou com algum banco?",
    answer: "Não. O ReciboNaHora é uma plataforma independente. O Pix é um meio de pagamento criado pelo Banco Central, e esta ferramenta apenas ajuda quem vai receber um Pix a pedir o pagamento e registrar o motivo por escrito."
  }
];

export default function ReciboPixPage() {
  return (
    <main className="page-shell bg-slate-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">

      <Breadcrumb
        className="mb-6"
        items={[
          { label: "Início", href: "/" },
          { label: "Ferramentas", href: "/ferramentas" },
          { label: "Recibo de recebimento via Pix" },
        ]}
      />

      <div className="page-hero text-center mb-12">
        <span className="bg-blue-100 text-blue-800 text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
          Ferramenta Popular
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
          Recibo de Recebimento via Pix
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Preencha seus dados e a sua chave Pix, envie o PDF a quem vai pagar e receba pelo QR Code.
          <strong className="block mt-2 text-slate-800">O recibo só tem validade junto com o comprovante da transação emitido pelo banco.</strong>
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
            É um pedido de pagamento emitido por quem vai receber. Ele registra quem paga, o valor (em números e
            por extenso), o motivo do pagamento, como um serviço, um aluguel ou uma venda, e traz um QR Code Pix
            para pagar. O comprovante do banco mostra que a transferência foi feita; o recibo explica a que ela se
            refere. Juntos, servem como quitação. Sem o comprovante do banco, o recibo não vale.
          </p>
        </div>
        <div className="rounded-xl border border-slate-300 bg-white p-5">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Recibo não é comprovante bancário</h2>
          <p className="leading-relaxed">
            Somente o aplicativo ou o internet banking da instituição emite o comprovante oficial de um Pix. Este
            recibo é preenchido por quem vai receber e não confirma, sozinho, que o dinheiro entrou na conta. Para ter
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
            <li>Você prestou um serviço (diarista, aulas, consertos, freelas) e quer cobrar por Pix;</li>
            <li>Você vai receber aluguel ou uma parcela de um acordo entre pessoas físicas;</li>
            <li>Você vendeu um item usado ou um produto artesanal e quer enviar os dados para pagamento;</li>
            <li>Quem vai pagar pediu um documento que descreva o motivo do pagamento.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Quando não usar</h2>
          <p className="leading-relaxed">
            Nunca use o recibo para convencer alguém de que um pagamento aconteceu, nem coloque uma chave Pix que
            não é sua: isso é proibido pelos <a href="/termos-uso" className="underline">Termos de Uso</a> e
            pode configurar crime. O recibo também não substitui a Nota Fiscal quando a operação exige emissão
            fiscal. Em negócios de valor alto ou com obrigações futuras, prefira também um contrato por escrito.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Como preencher</h2>
          <ol className="list-decimal pl-6 space-y-1.5">
            <li>Preencha seus dados e a sua chave Pix (quem recebe) e os de quem vai pagar. CPF e CNPJ são opcionais, mas a ferramenta avisa se os números não conferem;</li>
            <li>Descreva o motivo de forma específica (ex.: &quot;manutenção elétrica realizada em 10/03&quot;);</li>
            <li>Confira o valor por extenso, baixe o PDF, assine e envie a quem vai pagar;</li>
            <li>Quem paga escaneia o QR Code e confere no aplicativo do banco o nome e o valor antes de confirmar;</li>
            <li>Confira no extrato do seu banco que o Pix entrou e guarde o recibo junto com o comprovante da transação.</li>
          </ol>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Erros comuns</h2>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Dar o pagamento por feito sem conferir no extrato que o Pix caiu;</li>
            <li>Descrever o motivo de forma vaga demais (ex.: &quot;serviço&quot;), o que dificulta comprovar depois;</li>
            <li>Pagar pelo QR Code sem conferir no aplicativo do banco o nome de quem recebe e o valor;</li>
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
