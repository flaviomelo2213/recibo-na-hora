import type { Metadata } from "next";
import Link from "next/link";
import { FileText, AlertTriangle, Shield } from "lucide-react";
import { buildOpenGraph } from '@/lib/metadata';

const title = "Termos de Uso | ReciboNaHora";
const description =
  "Termos de Uso do ReciboNaHora. Uso educativo de simuladores, isenção de responsabilidade sobre aprovação de crédito, propriedade intelectual e regras de utilização.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/termos-uso",
  },
  openGraph: buildOpenGraph({ title, description, path: '/termos-uso' }),
};

const LAST_UPDATED = '06/02/2026';

export default function TermosUsoPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-900 text-white mb-4">
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Termos de Uso
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Última atualização: {LAST_UPDATED}
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Estes Termos de Uso regem o acesso e a utilização do site{" "}
            <strong>ReciboNaHora</strong> ("Plataforma"). Ao acessar ou usar a
            Plataforma, você concorda com estes Termos. Se você não concordar,
            não utilize a Plataforma.
          </p>
        </header>

        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-900 mb-2">Importante: Finalidade Educativa</h3>
              <p className="text-sm text-slate-800 leading-relaxed">
                <strong>As calculadoras e simuladores desta plataforma têm finalidade estritamente educativa e informativa.</strong> Os resultados apresentados são estimativas baseadas em dados hipotéticos e NÃO constituem garantia de aprovação de crédito, contemplação em consórcio ou qualquer outro resultado específico junto a instituições financeiras.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              1. Definições
            </h2>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-900 mt-0.5">•</span>
                <div>
                  <strong>Usuário:</strong> qualquer pessoa que acessa ou usa a Plataforma.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-900 mt-0.5">•</span>
                <div>
                  <strong>Conteúdo:</strong> textos, modelos, páginas, layouts, recursos e materiais disponibilizados na Plataforma.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-900 mt-0.5">•</span>
                <div>
                  <strong>Documentos Gerados:</strong> arquivos e textos produzidos a partir de dados inseridos pelo Usuário (recibos, contratos, requerimentos).
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-900 mt-0.5">•</span>
                <div>
                  <strong>Calculadoras e Simuladores:</strong> ferramentas que processam cálculos financeiros e estratégias com base em parâmetros fornecidos pelo Usuário (exemplo: Simulador de Alavancagem para Consórcios).
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-900" />
              2. Objeto e Funcionamento
            </h2>
            <p className="mb-3">
              A Plataforma disponibiliza ferramentas online para auxiliar o Usuário a criar documentos e modelos em formato textual e/ou PDF, além de calculadoras para simulações financeiras educativas, com base nas informações fornecidas pelo próprio Usuário.
            </p>
            <p className="mb-3">
              <strong>Processamento Local:</strong> Em regra, as ferramentas e calculadoras funcionam localmente no navegador do Usuário. Os dados preenchidos NÃO são armazenados em nossos servidores. O Usuário é responsável por conferir o conteúdo e resultados antes de usar, assinar, enviar ou protocolar qualquer documento ou tomar decisões financeiras.
            </p>
          </section>

          <section className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r-lg">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              3. Uso Educativo de Simuladores e Calculadoras
            </h2>
            <div className="space-y-3">
              <p>
                <strong>3.1. Finalidade Educativa:</strong> As calculadoras, incluindo o Simulador Dinâmico de Alavancagem, têm <strong>finalidade exclusivamente educativa e informativa</strong>. Os resultados apresentados são estimativas baseadas em parâmetros genéricos e NÃO constituem:
              </p>
              <ul className="ml-6 space-y-2">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Consultoria financeira, jurídica ou contábil</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Garantia de aprovação de crédito</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Promessa de contemplação em consórcio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Oferta ou proposta comercial vinculante</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Recomendação de investimento ou estratégia financeira</span>
                </li>
              </ul>

              <p className="pt-3">
                <strong>3.2. Variabilidade de Resultados:</strong> Os valores e percentuais utilizados nos simuladores são exemplificativos. <strong>Cada administradora de consórcio e instituição financeira possui suas próprias regras, taxas, condições e critérios de aprovação.</strong> Os resultados reais podem variar significativamente conforme:
              </p>
              <ul className="ml-6 space-y-2">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>A administradora escolhida</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>O grupo específico de consórcio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Análise de crédito individual</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Condições de mercado e taxas vigentes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Competitividade das assembleias</span>
                </li>
              </ul>

              <p className="pt-3">
                <strong>3.3. Isenção de Responsabilidade sobre Aprovação:</strong> A utilização dos simuladores <strong>NÃO garante a aprovação de crédito, financiamento ou contemplação em consórcio</strong> por qualquer instituição financeira ou administradora. O ReciboNaHora não possui vínculo direto com administradoras de consórcio, bancos ou instituições financeiras para aprovação de propostas.
              </p>

              <p className="pt-3">
                <strong>3.4. Consultoria Profissional Obrigatória:</strong> Para decisões financeiras importantes, <strong>é indispensável consultar profissionais especializados</strong> (consultores de crédito, corretores credenciados, contadores, advogados) que possam analisar sua situação específica e fornecer orientação personalizada.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              4. Documentos Gerados - Validade Jurídica
            </h2>
            <p className="mb-3">
              <strong>4.1. Modelos e Templates:</strong> A Plataforma fornece modelos e templates de documentos (recibos, contratos, requerimentos). <strong>Não prestamos consultoria jurídica</strong> e não garantimos que um documento seja aceito por um órgão, empresa, cartório ou instituição específica.
            </p>
            <p className="mb-3">
              <strong>4.2. Responsabilidade do Usuário:</strong> A validade e adequação de qualquer Documento Gerado dependem de:
            </p>
            <ul className="ml-6 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-900">•</span>
                <span>Preenchimento correto e completo dos campos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-900">•</span>
                <span>Assinatura das partes envolvidas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-900">•</span>
                <span>Reconhecimento de firma (quando aplicável)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-900">•</span>
                <span>Registro em cartório (quando exigido por lei)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-900">•</span>
                <span>Adequação às regras específicas de cada instituição/órgão</span>
              </li>
            </ul>
            <p className="mt-3">
              <strong>4.3. Casos Complexos:</strong> Para operações de alto valor, questões societárias ou situações jurídicas complexas, <strong>recomendamos fortemente a consulta a um advogado especializado</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              5. Privacidade e Proteção de Dados (LGPD)
            </h2>
            <p className="mb-3">
              <strong>5.1. Processamento Local:</strong> A Plataforma opera com processamento local no navegador. Os dados preenchidos nas ferramentas de geração de documentos (nome, CPF, endereço, valores) <strong>NÃO são enviados aos nossos servidores, NÃO são armazenados em banco de dados e NÃO são compartilhados com terceiros</strong>.
            </p>
            <p className="mb-3">
              <strong>5.2. Dados de Navegação:</strong> Coletamos apenas dados técnicos de navegação (IP, páginas acessadas, dispositivo) para fins de segurança e estatísticas, em conformidade com a LGPD.
            </p>
            <p className="mb-3">
              Para informações completas, consulte nossa{" "}
              <Link
                href="/politica-privacidade"
                className="text-blue-900 hover:text-blue-800 hover:underline font-medium"
              >
                Política de Privacidade
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              6. Propriedade Intelectual
            </h2>
            <p>
              O layout, marca, textos institucionais, componentes e organização da Plataforma são protegidos por leis de propriedade intelectual. O Usuário pode utilizar os Documentos Gerados para fins próprios, mas não está autorizado a copiar, reproduzir, revender ou disponibilizar publicamente a Plataforma (ou partes substanciais dela) sem permissão expressa.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              7. Uso Aceitável
            </h2>
            <p className="mb-3">
              O Usuário se compromete a utilizar a Plataforma de forma lícita e de boa-fé. É expressamente vedado:
            </p>
            <ul className="ml-6 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Usar a Plataforma para fins ilícitos ou fraudulentos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Tentar explorar falhas, automatizar ataques ou prejudicar a disponibilidade do serviço</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Inserir conteúdo que viole direitos de terceiros (difamação, violação de direitos autorais)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Utilizar os simuladores para fazer promessas ou garantias a terceiros</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Reproduzir ou comercializar o código-fonte ou funcionalidades da Plataforma</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              8. Links, Parceiros e Publicidade
            </h2>
            <p className="mb-3">
              A Plataforma pode exibir links de parceiros e anúncios (Google AdSense). Alguns links podem gerar comissão de afiliados. Isso não altera o preço para o Usuário e ajuda a manter o projeto no ar.
            </p>
            <p>
              Consulte nossa página de{" "}
              <Link
                href="/como-ganhamos-dinheiro"
                className="text-blue-900 hover:text-blue-800 hover:underline font-medium"
              >
                Transparência (Como Ganhamos Dinheiro)
              </Link>{" "}
              para mais informações.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              9. Modificações e Disponibilidade
            </h2>
            <p>
              Podemos alterar, atualizar, suspender ou descontinuar recursos da Plataforma a qualquer momento, por motivos técnicos, legais ou operacionais. Também podemos atualizar estes Termos e publicar a versão vigente nesta página. A data de "Última atualização" indica a versão mais recente.
            </p>
          </section>

          <section className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              10. Limitação de Responsabilidade
            </h2>
            <div className="space-y-3">
              <p>
                <strong>10.1. Uso por Conta e Risco:</strong> O uso da Plataforma é por conta e risco do Usuário. Na extensão máxima permitida pela lei, a Plataforma é fornecida "como está", sem garantias de qualquer tipo.
              </p>
              <p>
                <strong>10.2. Exclusão de Responsabilidade:</strong> O ReciboNaHora NÃO se responsabiliza por:
              </p>
              <ul className="ml-6 space-y-2">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Decisões financeiras tomadas com base nos simuladores</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Recusa de documentos por órgãos, cartórios ou instituições</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Reprovação de crédito ou não contemplação em consórcios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Perdas, danos ou prejuízos decorrentes do uso (ou incapacidade de uso) da Plataforma</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Erros ou imprecisões nos cálculos resultantes de dados incorretos inseridos pelo Usuário</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Condutas de parceiros comerciais ou instituições financeiras terceiras</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              11. Lei Aplicável e Foro
            </h2>
            <p>
              Estes Termos são regidos pelas leis da República Federativa do Brasil, especialmente pela Lei nº 13.709/2018 (LGPD), pelo Marco Civil da Internet (Lei nº 12.965/2014) e pelo Código de Defesa do Consumidor (Lei nº 8.078/1990).
            </p>
            <p className="mt-3">
              Fica eleito o foro da Comarca de São Paulo, SP, para dirimir quaisquer controvérsias decorrentes destes Termos, com renúncia a qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              12. Contato
            </h2>
            <p>
              Para dúvidas, sugestões ou solicitações relacionadas a estes Termos de Uso:
            </p>
            <p className="mt-2">
              <strong>E-mail:</strong>{" "}
              <a
                href="mailto:contato@recibonahora.com.br"
                className="text-blue-900 hover:text-blue-800 hover:underline font-medium"
              >
                contato@recibonahora.com.br
              </a>
            </p>
          </section>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mt-8">
            <h3 className="font-bold text-green-900 mb-2">Aceitação dos Termos</h3>
            <p className="text-sm text-slate-800">
              Ao utilizar a Plataforma ReciboNaHora, você declara ter lido, compreendido e concordado com todos os termos e condições aqui estabelecidos. Se você não concorda com qualquer parte destes Termos, não utilize a Plataforma.
            </p>
          </div>

          <hr className="my-8" />

          <p className="text-sm text-slate-600">
            Documentos Relacionados:{" "}
            <Link href="/politica-privacidade" className="font-medium text-blue-900 hover:text-blue-800">
              Política de Privacidade
            </Link>{" "}
            •{" "}
            <Link href="/como-ganhamos-dinheiro" className="font-medium text-blue-900 hover:text-blue-800">
              Como Ganhamos Dinheiro
            </Link>{" "}
            •{" "}
            <Link href="/" className="font-medium text-blue-900 hover:text-blue-800">
              Página Inicial
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
