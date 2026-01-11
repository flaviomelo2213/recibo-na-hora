// app/politica-privacidade/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | ReciboNaHora",
  description:
    "Entenda como o ReciboNaHora trata dados, cookies, anúncios e integrações (Google Analytics/AdSense) ao gerar documentos e ferramentas online.",
  alternates: {
    canonical: "/politica-privacidade",
  },
};

const LAST_UPDATED = "06/01/2026";

export default function PoliticaPrivacidadePage() {
  return (
    <main className="bg-[#F8FAF0]">
      <section className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Política de Privacidade
          </h1>
          <p className="mt-3 text-slate-600">
            Esta página explica como o ReciboNaHora trata informações quando você acessa o site,
            utiliza as ferramentas e gera documentos.
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Última atualização: <span className="font-medium">{LAST_UPDATED}</span>
          </p>
        </header>

        <article className="prose prose-slate max-w-none prose-headings:scroll-mt-24">
          <h2>1. Quem somos</h2>
          <p>
            O <strong>ReciboNaHora</strong> é uma plataforma online para geração de documentos e
            ferramentas relacionadas (recibos, contratos, requerimentos e outros modelos).
          </p>
          <p>
            Contato para privacidade:{" "}
            <a href="mailto:contato@recibonahora.com.br">contato@recibonahora.com.br</a>.
          </p>

          <h2>2. Como as ferramentas funcionam</h2>
          <p>
            Em muitas páginas do ReciboNaHora, o preenchimento de dados e a geração de prévia/PDF
            acontecem <strong>no seu próprio navegador</strong>. Isso significa que, em geral, os
            dados digitados ficam no seu dispositivo enquanto você utiliza a ferramenta.
          </p>

          <h2>3. Quais dados podem ser coletados</h2>
          <p>
            O site pode tratar diferentes tipos de informações, dependendo do que você faz:
          </p>
          <ul>
            <li>
              <strong>Dados de navegação (técnicos):</strong> endereço IP, tipo de dispositivo,
              páginas acessadas, data/hora, idioma e informações similares. Normalmente são usados
              para segurança, estatísticas e melhoria de desempenho.
            </li>
            <li>
              <strong>Cookies e identificadores:</strong> usados para preferências, analytics e
              publicidade (quando habilitado).
            </li>
            <li>
              <strong>Dados inseridos nas ferramentas:</strong> os campos de documentos (nome, CPF,
              texto, endereço, etc.) são fornecidos por você. Sempre que possível, esses dados são
              processados localmente no seu navegador.
            </li>
            <li>
              <strong>Contato:</strong> se você enviar uma mensagem por e-mail, nós receberemos as
              informações que você incluir no conteúdo.
            </li>
          </ul>

          <h2>4. Cookies, Analytics e Medição</h2>
          <p>
            Podemos usar ferramentas de medição, como o <strong>Google Analytics</strong>, para
            entender o uso do site (por exemplo: páginas mais acessadas, tempo de carregamento,
            origem do tráfego). Isso ajuda a melhorar conteúdo e performance.
          </p>
          <p>
            Dependendo das configurações do seu navegador e do consentimento, cookies e
            identificadores podem ser usados para fins estatísticos.
          </p>

          <h2>5. Publicidade (Google AdSense)</h2>
          <p>
            O ReciboNaHora pode exibir anúncios por meio do <strong>Google AdSense</strong>. O
            Google pode utilizar cookies/identificadores para exibir anúncios, medir performance e
            combater fraude.
          </p>
          <p>
            Você pode ajustar preferências de anúncios nas configurações da sua conta Google e/ou
            por meio das opções do seu navegador.
          </p>

          <h2>6. Recursos de IA (BYOK – “traga sua própria chave”)</h2>
          <p>
            Algumas ferramentas oferecem um botão para <strong>melhorar textos com IA</strong>. Em
            modo BYOK, você cola a sua própria chave (por exemplo, do Google AI Studio) para que a
            requisição seja feita ao provedor escolhido.
          </p>
          <ul>
            <li>
              <strong>Chave no navegador:</strong> se você marcar “salvar chave neste navegador”, a
              chave pode ser armazenada no <code>localStorage</code> do seu próprio dispositivo.
              Você pode remover a qualquer momento pelo painel de IA.
            </li>
            <li>
              <strong>Envio do texto:</strong> para reescrever/melhorar um trecho, o texto é enviado
              ao provedor de IA usando a chave informada. Não é a intenção do site armazenar esse
              conteúdo permanentemente.
            </li>
            <li>
              <strong>Recomendação:</strong> não cole chaves em computadores públicos e trate sua
              chave como dado sensível.
            </li>
          </ul>

          <h2>7. Compartilhamento de dados com terceiros</h2>
          <p>
            Podemos utilizar serviços de terceiros para operar o site e melhorar a experiência,
            incluindo:
          </p>
          <ul>
            <li>
              <strong>Hospedagem e entrega de conteúdo:</strong> por exemplo, Vercel (CDN e
              infraestrutura).
            </li>
            <li>
              <strong>Medição:</strong> por exemplo, Google Analytics.
            </li>
            <li>
              <strong>Publicidade:</strong> por exemplo, Google AdSense.
            </li>
            <li>
              <strong>IA (opcional):</strong> provedor escolhido pelo usuário no modo BYOK.
            </li>
          </ul>
          <p>
            Cada provedor possui suas próprias políticas de privacidade e termos.
          </p>

          <h2>8. Retenção</h2>
          <p>
            Quando o processamento acontece no navegador, os dados podem permanecer apenas durante a
            sessão. Caso você opte por salvar preferências (ex.: chave BYOK), elas ficam no seu
            navegador até você limpar ou remover.
          </p>

          <h2>9. Segurança</h2>
          <p>
            Adotamos medidas técnicas razoáveis para proteger o site. Ainda assim, nenhum sistema é
            100% imune a incidentes. Você também deve proteger seus próprios dispositivos e
            credenciais.
          </p>

          <h2>10. Crianças e adolescentes</h2>
          <p>
            O site é voltado ao público geral. Se você é responsável legal e acredita que um menor
            enviou dados pessoais indevidamente, entre em contato.
          </p>

          <h2>11. Alterações nesta política</h2>
          <p>
            Podemos atualizar esta Política de Privacidade para refletir melhorias do site e novas
            funcionalidades. A data de “Última atualização” indica a versão mais recente.
          </p>

          <h2>12. Contato</h2>
          <p>
            Para dúvidas sobre privacidade ou solicitações relacionadas, escreva para{" "}
            <a href="mailto:contato@recibonahora.com.br">contato@recibonahora.com.br</a>.
          </p>

          <hr />

          <p className="text-sm text-slate-600">
            Voltar para:{" "}
            <Link href="/" className="font-medium text-indigo-700 hover:text-indigo-800">
              Início
            </Link>{" "}
            •{" "}
            <Link href="/termos-uso" className="font-medium text-indigo-700 hover:text-indigo-800">
              Termos de Uso
            </Link>{" "}
            •{" "}
            <Link
              href="/como-ganhamos-dinheiro"
              className="font-medium text-indigo-700 hover:text-indigo-800"
            >
              Transparência
            </Link>
          </p>
        </article>
      </section>
    </main>
  );
}
