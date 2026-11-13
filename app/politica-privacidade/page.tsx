import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, AlertCircle, CheckCircle } from "lucide-react";
import { buildOpenGraph } from '@/lib/metadata';

const title = "Política de Privacidade | ReciboNaHora - LGPD";
const description =
  "Privacidade (LGPD) do ReciboNaHora: documentos montados no navegador, sem banco de dados; os recursos opcionais de IA enviam texto ao Google Gemini.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/politica-privacidade",
  },
  openGraph: buildOpenGraph({ title, description, path: '/politica-privacidade' }),
};

const LAST_UPDATED = '12/11/2026';

export default function PoliticaPrivacidadePage() {
  return (
    <main className="bg-white">
      <section className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <header className="mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-900 text-white mb-4">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Política de Privacidade
          </h1>
          <p className="mt-3 text-slate-600">
            Esta política explica como o ReciboNaHora trata informações em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Última atualização: <span className="font-medium">{LAST_UPDATED}</span>
          </p>
        </header>

        <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-green-900 mb-2">Declaração de Privacidade - Processamento Local</h3>
              <p className="text-sm text-slate-800 leading-relaxed">
                <strong>O ReciboNaHora não armazena os dados preenchidos nos formulários.</strong> Os documentos (nome, CPF, endereço, valores) são montados <strong>localmente no navegador do usuário</strong> e não possuímos banco de dados de informações pessoais dos documentos gerados. A única exceção é o botão opcional <strong>“Melhorar com IA”</strong>, presente em cinco ferramentas: quando você clica nele, o texto daquele campo é enviado ao Google Gemini (veja o item 3.1.1).
              </p>
            </div>
          </div>
        </div>

        <article className="prose prose-slate max-w-none prose-headings:scroll-mt-24">
          <h2 className="flex items-center gap-2">
            <Lock className="w-6 h-6 text-blue-900" />
            1. Conformidade com a LGPD
          </h2>
          <p>
            O <strong>ReciboNaHora</strong> está comprometido com a proteção de dados pessoais e a privacidade dos usuários, em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong>.
          </p>
          <p>
            Esta política descreve como coletamos, utilizamos, armazenamos e protegemos suas informações pessoais, além de seus direitos como titular de dados.
          </p>

          <h2>2. Identificação do Controlador</h2>
          <p>
            <strong>Controlador de Dados:</strong> ReciboNaHora<br />
            <strong>Contato para Privacidade e LGPD:</strong> <a href="mailto:contato@recibonahora.com.br">contato@recibonahora.com.br</a>
          </p>

          <h2>3. Dados Pessoais e Bases Legais</h2>

          <h3>3.1. Dados NÃO Armazenados (Processamento Local)</h3>
          <div className="bg-blue-50 border-l-4 border-blue-900 p-4 my-4">
            <p className="font-semibold text-blue-900 mb-2">IMPORTANTE:</p>
            <p className="text-sm">
              Os dados preenchidos nas ferramentas de geração de documentos (recibos, contratos, requerimentos) são processados <strong>exclusivamente no seu navegador</strong>. Isso inclui:
            </p>
            <ul className="text-sm mt-2 space-y-1">
              <li>• Nome completo, CPF, CNPJ, RG</li>
              <li>• Endereços residenciais e comerciais</li>
              <li>• Valores monetários e descrições de serviços</li>
              <li>• Textos e cláusulas de contratos</li>
              <li>• Qualquer outro campo preenchido nos formulários</li>
            </ul>
            <p className="text-sm mt-2">
              <strong>Estes dados NÃO são enviados aos nossos servidores, NÃO são armazenados em banco de dados e NÃO são compartilhados com terceiros</strong>, exceto o texto que você decidir enviar pelo botão “Melhorar com IA”, descrito no item 3.1.1. O documento gerado permanece apenas no seu dispositivo.
            </p>
          </div>

          <h3>3.1.1. Recursos opcionais de IA (“Melhorar com IA”)</h3>
          <p>
            Algumas ferramentas têm um botão “Melhorar com IA”, que sugere uma redação mais clara para um campo de texto. Ele
            funciona <strong>somente quando você clica no botão</strong> e só envia o texto daquele campo. As ferramentas que têm
            esse recurso são:
          </p>
          <ul>
            <li><Link href="/ferramentas/recibo-simples">Recibo Simples</Link>: campo de descrição do pagamento;</li>
            <li><Link href="/ferramentas/curriculo-profissional">Currículo Profissional</Link>: resumo, atividades e habilidades;</li>
            <li><Link href="/ferramentas/procuracao-profissional">Procuração Profissional</Link>: texto dos poderes;</li>
            <li><Link href="/ferramentas/prefeitura">Central do Cidadão</Link> (requerimentos à prefeitura): texto do pedido;</li>
            <li><Link href="/requerimentos/lai-pedido">Pedido de Acesso à Informação (LAI)</Link>: texto do pedido.</li>
          </ul>
          <p>
            Ao clicar, o texto (até 6.000 caracteres) passa por uma função do nosso servidor, que apenas o repassa ao
            <strong> Google Gemini</strong>, serviço de inteligência artificial do Google, usando a chave de API que você mesmo
            informou. Nós não gravamos esse texto nem a resposta. O tratamento feito pelo Google segue os termos da API do Gemini
            vinculados à sua chave: nos serviços gratuitos, o Google informa que pode usar o conteúdo enviado para melhorar seus
            produtos, inclusive com revisão humana. Por isso, <strong>não inclua CPF, RG, endereço ou outros dados pessoais no texto
            enviado à IA</strong>. Consulte os <a href="https://ai.google.dev/gemini-api/terms" target="_blank" rel="noopener noreferrer">termos da API do Gemini</a>.
          </p>
          <p>
            Se você marcar a opção de lembrar a chave do Gemini, ela fica salva apenas no armazenamento local do seu navegador
            (localStorage) e pode ser apagada a qualquer momento nas configurações de IA do site. Todas as demais ferramentas
            funcionam só no navegador e não enviam o conteúdo preenchido a ninguém.
          </p>

          <h3>3.2. Dados Coletados Automaticamente</h3>
          <p>
            Durante a navegação no site, podemos coletar automaticamente as seguintes informações técnicas:
          </p>
          <ul>
            <li>
              <strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, sistema operacional, páginas visitadas, data/hora de acesso, referência de origem.
            </li>
            <li>
              <strong>Base Legal:</strong> Legítimo interesse para fins de segurança, estatísticas de uso e melhoria da plataforma (Art. 7º, IX da LGPD).
            </li>
            <li>
              <strong>Finalidade:</strong> Análise de tráfego, segurança do site, otimização de desempenho e experiência do usuário.
            </li>
          </ul>

          <h3>3.3. Formulário de Contato e Leads</h3>
          <p>
            Quando você preenche o formulário de contato ou solicita indicações de profissionais, coletamos:
          </p>
          <ul>
            <li>Nome completo</li>
            <li>Endereço de e-mail</li>
            <li>Número de telefone</li>
            <li>Mensagem ou informações sobre interesse</li>
          </ul>
          <p>
            <strong>Base Legal:</strong> Consentimento (Art. 7º, I da LGPD) e execução de contrato ou procedimentos preliminares (Art. 7º, V da LGPD).
          </p>
          <p>
            <strong>Finalidade:</strong> Responder suas solicitações, fornecer informações solicitadas e conectá-lo com profissionais parceiros.
          </p>
          <p>
            <strong>Compartilhamento:</strong> Estes dados podem ser compartilhados com parceiros especializados (corretores, consultores de crédito, advogados) apenas para atender sua solicitação específica.
          </p>

          <h2>4. Cookies e Tecnologias de Rastreamento</h2>
          <p>
            O ReciboNaHora utiliza cookies e tecnologias similares para melhorar a experiência do usuário:
          </p>

          <h3>4.1. Tipos de Cookies</h3>
          <ul>
            <li>
              <strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site (exemplo: preferências de consentimento).
            </li>
            <li>
              <strong>Cookies de Análise:</strong> Google Analytics para entender padrões de uso e melhorar o site.
            </li>
            <li>
              <strong>Cookies de Publicidade:</strong> Google AdSense para exibir anúncios personalizados.
            </li>
          </ul>

          <h3>4.2. Gerenciamento de Cookies</h3>
          <p>
            Você pode gerenciar ou desativar cookies através das configurações do seu navegador. Observe que a desativação de cookies essenciais pode afetar a funcionalidade do site.
          </p>
          <p>
            Para mais informações sobre cookies do Google, acesse: <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">Política de Cookies do Google</a>
          </p>

          <h2>5. Google Analytics e Google AdSense</h2>

          <h3>5.1. Google Analytics</h3>
          <p>
            Utilizamos o Google Analytics para coletar estatísticas agregadas sobre o uso do site. O Google Analytics utiliza cookies para identificar visitantes únicos e sessões, mas não identifica usuários individualmente.
          </p>
          <p>
            Você pode desativar o rastreamento do Google Analytics instalando o <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">complemento de desativação do Google Analytics</a>.
          </p>

          <h3>5.2. Google AdSense</h3>
          <p>
            O ReciboNaHora exibe anúncios através do <strong>Google AdSense</strong>. O Google e seus parceiros de publicidade podem utilizar cookies para exibir anúncios baseados em suas visitas a este site e outros sites na Internet.
          </p>
          <p>
            <strong>Cookie DoubleClick DART:</strong> Este cookie permite ao Google exibir anúncios relevantes com base no seu histórico de navegação.
          </p>
          <p>
            Você pode desativar a personalização de anúncios acessando a página de <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Configurações de Anúncios do Google</a> ou através da <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance</a>.
          </p>

          <h2>6. Compartilhamento de Dados com Terceiros</h2>
          <p>
            O ReciboNaHora pode compartilhar dados com terceiros nas seguintes situações:
          </p>
          <ul>
            <li>
              <strong>Provedores de Serviços:</strong> Empresas que auxiliam na operação do site (hospedagem, entrega de conteúdo, análise de dados).
            </li>
            <li>
              <strong>Parceiros Comerciais:</strong> Profissionais especializados (corretores, consultores) quando você solicita indicações através dos formulários.
            </li>
            <li>
              <strong>Exigências Legais:</strong> Quando obrigatório por lei, regulamentação ou ordem judicial.
            </li>
          </ul>
          <p>
            <strong>Garantimos que</strong> todos os parceiros e fornecedores respeitam padrões adequados de proteção de dados e estão em conformidade com a LGPD.
          </p>

          <h2>7. Direitos dos Titulares de Dados (LGPD)</h2>
          <p>
            Em conformidade com a LGPD, você possui os seguintes direitos sobre seus dados pessoais:
          </p>
          <ul>
            <li>
              <strong>Confirmação e Acesso:</strong> Confirmar se tratamos seus dados e solicitar acesso a eles (Art. 18, I e II).
            </li>
            <li>
              <strong>Correção:</strong> Solicitar correção de dados incompletos, inexatos ou desatualizados (Art. 18, III).
            </li>
            <li>
              <strong>Anonimização, Bloqueio ou Eliminação:</strong> Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade (Art. 18, IV).
            </li>
            <li>
              <strong>Portabilidade:</strong> Solicitar a portabilidade dos dados a outro fornecedor de serviço (Art. 18, V).
            </li>
            <li>
              <strong>Revogação do Consentimento:</strong> Revogar o consentimento dado anteriormente (Art. 18, IX).
            </li>
            <li>
              <strong>Oposição:</strong> Opor-se ao tratamento realizado com base em uma das hipóteses de dispensa de consentimento (Art. 18, § 2º).
            </li>
            <li>
              <strong>Informação sobre Compartilhamento:</strong> Obter informações sobre entidades públicas e privadas com as quais compartilhamos dados (Art. 18, VII).
            </li>
          </ul>
          <p>
            Para exercer qualquer um destes direitos, entre em contato através do e-mail: <a href="mailto:contato@recibonahora.com.br">contato@recibonahora.com.br</a>
          </p>

          <h2>8. Armazenamento e Retenção de Dados</h2>
          <p>
            <strong>Dados de Documentos Gerados:</strong> Como mencionado, NÃO armazenamos os dados preenchidos nas ferramentas. O processamento é local no seu navegador. O texto enviado pelo botão “Melhorar com IA” é apenas repassado ao Google Gemini e não é gravado por nós (item 3.1.1).
          </p>
          <p>
            <strong>Dados de Contato:</strong> Informações fornecidas através de formulários de contato serão retidas apenas pelo tempo necessário para atender sua solicitação e conforme exigido por lei.
          </p>
          <p>
            <strong>Dados de Navegação:</strong> Logs de acesso são mantidos por período limitado para fins de segurança e análise técnica.
          </p>

          <h2>9. Segurança da Informação</h2>
          <p>
            Adotamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acesso não autorizado, destruição, perda, alteração ou divulgação:
          </p>
          <ul>
            <li>Criptografia de dados em trânsito (HTTPS/SSL)</li>
            <li>Controles de acesso restrito a sistemas e informações</li>
            <li>Monitoramento de segurança e detecção de incidentes</li>
            <li>Treinamento de equipe sobre proteção de dados</li>
          </ul>
          <p>
            <strong>Importante:</strong> Apesar de todos os esforços, nenhum sistema é 100% seguro. Recomendamos que você também proteja suas informações e dispositivos.
          </p>

          <h2>10. Transferência Internacional de Dados</h2>
          <p>
            Alguns serviços utilizados (Google Analytics, Google AdSense) podem envolver transferência de dados para servidores localizados fora do Brasil. Nestes casos, garantimos que:
          </p>
          <ul>
            <li>Os provedores seguem padrões internacionais de proteção de dados</li>
            <li>Existem salvaguardas contratuais adequadas</li>
            <li>A transferência está em conformidade com a LGPD</li>
          </ul>

          <h2>11. Dados de Crianças e Adolescentes</h2>
          <p>
            O ReciboNaHora não coleta intencionalmente dados de menores de 18 anos sem o consentimento dos pais ou responsáveis legais. Se você é pai ou responsável e acredita que um menor forneceu dados pessoais, entre em contato para que possamos tomar as medidas apropriadas.
          </p>

          <h2>12. Alterações nesta Política</h2>
          <p>
            Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas, tecnologias ou requisitos legais. A data de "Última atualização" no topo desta página indica a versão mais recente.
          </p>
          <p>
            Alterações significativas serão comunicadas através de aviso destacado no site ou por e-mail (quando aplicável).
          </p>

          <h2>13. Legislação Aplicável e Foro</h2>
          <p>
            Esta Política de Privacidade é regida pelas leis da República Federativa do Brasil, especialmente pela Lei nº 13.709/2018 (LGPD), pelo Marco Civil da Internet (Lei nº 12.965/2014) e pelo Código de Defesa do Consumidor (Lei nº 8.078/1990).
          </p>

          <h2>14. Contato e Encarregado de Dados</h2>
          <p>
            Para dúvidas, solicitações ou exercício dos seus direitos relacionados à privacidade e proteção de dados:
          </p>
          <p>
            <strong>E-mail:</strong> <a href="mailto:contato@recibonahora.com.br">contato@recibonahora.com.br</a><br />
            <strong>Assunto:</strong> LGPD - Proteção de Dados
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-600 p-5 my-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-amber-900 mb-2">Compromisso com a Transparência</h3>
                <p className="text-sm text-slate-800">
                  O ReciboNaHora se compromete a tratar seus dados com transparência, segurança e respeito aos seus direitos. Estamos à disposição para esclarecer qualquer dúvida sobre como seus dados são tratados.
                </p>
              </div>
            </div>
          </div>

          <hr className="my-8" />

          <p className="text-sm text-slate-600">
            Documentos Relacionados:{" "}
            <Link href="/termos-uso" className="font-medium text-blue-900 hover:text-blue-800">
              Termos de Uso
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
        </article>
      </section>
    </main>
  );
}
