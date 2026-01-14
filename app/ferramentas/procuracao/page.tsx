import React from 'react';
import FerramentaProcuracao from "./_components/FerramentaProcuracao";
import LegalDisclaimer from "../../components/LegalDisclaimer";
import SeoContentBlock from "../../components/SeoContentBlock";
import { ToolShell, ToolShellHeader, ToolShellMain } from '@/components/layout/ToolShell';

export default function ProcuracaoPage() {
  return (
    <ToolShell>
      <ToolShellHeader
        title="Gerador de Procuração Simples"
        description="Crie uma procuração particular (ad negotia) para representar alguém em diversas situações. Preencha os dados e baixe o documento em PDF pronto para assinar."
      />
      <ToolShellMain>
        <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8 mb-12 border border-gray-100 ring-1 ring-gray-100">
          <FerramentaProcuracao />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article className="prose prose-lg prose-slate">
              <h2 className="text-3xl font-bold text-slate-900">
                O que é uma Procuração e Quando Usar?
              </h2>
              <p>
                A <strong>procuração</strong> é um instrumento legal pelo qual uma
                pessoa (o <strong>outorgante</strong>) nomeia outra de sua confiança
                (o <strong>outorgado</strong> ou <strong>procurador</strong>) para
                agir em seu nome em determinadas situações. É um mandato que concede
                poderes para realizar atos ou administrar interesses.
              </p>
              <p>
                Este documento é fundamental sempre que você não puder estar
                presente para resolver um assunto, como assinar um contrato,
                movimentar uma conta bancária, matricular-se em uma instituição de
                ensino ou representar-se perante um órgão público.
              </p>

              <h3>Diferença entre Procuração Pública e Particular</h3>
              <p>
                A <strong>procuração particular</strong>, como a gerada por nossa
                ferramenta, é redigida e assinada pelas partes, sem a necessidade
                imediata de um cartório. Para muitos atos da vida civil (representar
                em assembleias, matricular em cursos, etc.), ela é suficiente,
                especialmente se tiver a firma reconhecida.
              </p>
              <p>
                Já a <strong>procuração pública</strong> é lavrada em um Tabelionato
                de Notas e é obrigatória para atos mais complexos, como a venda de
                imóveis, casamentos ou divórcios.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12">
                Como Preencher o Gerador de Procuração
              </h2>
              <ol>
                <li>
                  <strong>Identifique o Outorgante:</strong> Preencha com os dados
                  completos de quem está concedendo os poderes.
                </li>
                <li>
                  <strong>Identifique o Outorgado:</strong> Insira os dados da
                  pessoa de confiança que irá representar o outorgante.
                </li>
                <li>
                  <strong>Defina a Finalidade (Poderes):</strong> Seja o mais
                  específico possível. Em vez de "resolver assuntos no banco", opte
                  por "abrir, movimentar e encerrar a conta corrente nº 12345-6, na
                  agência 001 do Banco XYZ". Quanto mais detalhado, mais seguro
                  será o documento.
                </li>
                <li>
                  <strong>Emita e Assine:</strong> Após gerar o PDF, o outorgante
                  deve assiná-lo. Para maior segurança, é altamente recomendável
                  reconhecer firma da assinatura em um cartório.
                </li>
              </ol>

              <div
                className="p-6 mt-8 bg-red-50 border-l-4 border-red-400 text-red-800 rounded-r-lg"
                role="alert"
              >
                <h4 className="font-bold">Cuidado com os Poderes Amplos</h4>
                <p className="mt-2">
                  Evite termos genéricos como "plenos poderes" ou "todos os atos".
                  Conceder poderes amplos e ilimitados pode trazer riscos
                  significativos. Especifique sempre o propósito da procuração.
                </p>
              </div>
            </article>

            <div className="mt-12">
              <LegalDisclaimer />
            </div>
          </div>

          <aside className="space-y-8">
            <div className="bg-gray-100 rounded-lg h-64 flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
              <span className="text-gray-400 font-medium">Espaço para Anúncio</span>
              <span className="text-xs text-gray-400 mt-2">(Google AdSense)</span>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                <i className="fa-solid fa-file-lines"></i> Outros Documentos Úteis
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="/ferramentas/nota-promissoria" className="text-blue-700 hover:text-blue-900 hover:underline flex justify-between">
                    <span>Nota Promissória</span>
                    <i className="fa-solid fa-chevron-right text-xs mt-1"></i>
                  </a>
                </li>
                <li>
                  <a href="/ferramentas/imobiliario" className="text-blue-700 hover:text-blue-900 hover:underline flex justify-between">
                    <span>Recibo de Aluguel</span>
                    <i className="fa-solid fa-chevron-right text-xs mt-1"></i>
                  </a>
                </li>
                <li>
                  <a href="/ferramentas/contrato-locacao" className="text-blue-700 hover:text-blue-900 hover:underline flex justify-between">
                    <span>Contrato de Aluguel</span>
                    <i className="fa-solid fa-chevron-right text-xs mt-1"></i>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </ToolShellMain>
    </ToolShell>
  );
}
