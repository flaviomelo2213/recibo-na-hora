// app/termos-uso/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso | ReciboNaHora",
  description:
    "Termos de Uso do ReciboNaHora. Regras de utilização, responsabilidade, limitações, propriedade intelectual e informações importantes sobre os documentos gerados.",
  alternates: {
    canonical: "/termos-uso",
  },
};

const LAST_UPDATED = '12/01/2026';

export default function TermosUsoPage() {
  return (
    <main className="bg-[#F8FAF0]">
      <section className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 sm:p-8">
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              Termos de Uso
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Última atualização: {LAST_UPDATED}
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Estes Termos de Uso regem o acesso e a utilização do site{" "}
              <strong>ReciboNaHora</strong> (“Plataforma”). Ao acessar ou usar a
              Plataforma, você concorda com estes Termos. Se você não concordar,
              não utilize a Plataforma.
            </p>
          </header>

          <div className="space-y-8 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-slate-900">
                1. Definições
              </h2>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>
                  <strong>Usuário:</strong> qualquer pessoa que acessa ou usa a
                  Plataforma.
                </li>
                <li>
                  <strong>Conteúdo:</strong> textos, modelos, páginas, layouts,
                  recursos e materiais disponibilizados na Plataforma.
                </li>
                <li>
                  <strong>Documentos Gerados:</strong> arquivos e textos
                  produzidos a partir de dados inseridos pelo Usuário (ex.:
                  recibos, contratos, requerimentos).
                </li>
                <li>
                  <strong>IA (BYOK):</strong> recurso opcional em que o Usuário
                  fornece sua própria chave (API Key) para um provedor de IA a
                  fim de melhorar redação de textos.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                2. Objeto e funcionamento
              </h2>
              <p className="mt-3">
                A Plataforma disponibiliza ferramentas online para auxiliar o
                Usuário a criar documentos e modelos em formato textual e/ou PDF,
                com base nas informações fornecidas pelo próprio Usuário.
              </p>
              <p className="mt-3">
                Em regra, as ferramentas funcionam no navegador. O Usuário é
                responsável por conferir o conteúdo antes de usar, assinar,
                enviar ou protocolar qualquer documento.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                3. Isenção de responsabilidade e natureza informativa
              </h2>
              <p className="mt-3">
                A Plataforma fornece modelos e recursos de apoio.{" "}
                <strong>
                  Não prestamos consultoria jurídica, contábil ou profissional
                </strong>{" "}
                e não garantimos que um documento seja aceito por um órgão,
                empresa, cartório ou instituição específica.
              </p>
              <p className="mt-3">
                A validade e adequação de qualquer Documento Gerado depende, por
                exemplo, do preenchimento correto, assinatura, reconhecimento de
                firma (quando aplicável) e regras de cada instituição/órgão. Em
                casos complexos, recomendamos consulta a um profissional
                habilitado.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                4. Uso da IA (BYOK) — chave do Usuário
              </h2>
              <p className="mt-3">
                Algumas ferramentas podem oferecer um botão para{" "}
                <strong>melhorar a redação</strong> (ex.: descrição/justificativa)
                com IA. Esse recurso é opcional e funciona no modo{" "}
                <strong>BYOK</strong> (“Bring Your Own Key”), isto é:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>
                  O Usuário fornece sua própria chave (API Key) do provedor de
                  IA.
                </li>
                <li>
                  A chave pode ser salva no navegador do Usuário (ex.:
                  localStorage), se o Usuário optar.
                </li>
                <li>
                  O provedor de IA pode ter custos, limites e regras próprias. O
                  uso é de responsabilidade do Usuário.
                </li>
              </ul>
              <p className="mt-3">
                A IA é utilizada apenas para sugerir melhorias de texto. Ela não
                substitui orientação profissional e pode cometer erros.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                5. Privacidade e dados inseridos
              </h2>
              <p className="mt-3">
                A Plataforma pode operar com processamento local no navegador,
                de modo que as informações digitadas sejam usadas para gerar o
                documento sem necessariamente serem armazenadas em servidor.
                Ainda assim, o Usuário deve evitar inserir dados sensíveis
                desnecessários.
              </p>
              <p className="mt-3">
                Para entender melhor como tratamos dados e cookies, consulte a{" "}
                <Link
                  href="/politica-privacidade"
                  className="text-indigo-700 hover:text-indigo-800 hover:underline"
                >
                  Política de Privacidade
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                6. Propriedade intelectual
              </h2>
              <p className="mt-3">
                O layout, marca, textos institucionais, componentes e
                organização da Plataforma são protegidos por leis de propriedade
                intelectual. O Usuário pode utilizar os Documentos Gerados para
                fins próprios, mas não está autorizado a copiar, reproduzir,
                revender ou disponibilizar publicamente a Plataforma (ou partes
                substanciais dela) sem permissão.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                7. Uso aceitável
              </h2>
              <p className="mt-3">
                O Usuário se compromete a utilizar a Plataforma de forma lícita
                e de boa-fé. É vedado:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>usar a Plataforma para fins ilícitos;</li>
                <li>
                  tentar explorar falhas, automatizar ataques, ou prejudicar a
                  disponibilidade do serviço;
                </li>
                <li>
                  inserir conteúdo que viole direitos de terceiros (ex.:
                  difamação, violação de direitos autorais).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                8. Links, parceiros e publicidade
              </h2>
              <p className="mt-3">
                A Plataforma pode exibir links de parceiros e anúncios. Alguns
                links podem gerar comissão. Isso não altera o preço para o
                Usuário e ajuda a manter o projeto no ar. Consulte a página de{" "}
                <Link
                  href="/como-ganhamos-dinheiro"
                  className="text-indigo-700 hover:text-indigo-800 hover:underline"
                >
                  Transparência
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                9. Modificações e disponibilidade
              </h2>
              <p className="mt-3">
                Podemos alterar, atualizar, suspender ou descontinuar recursos da
                Plataforma a qualquer momento, por motivos técnicos, legais ou
                operacionais. Também podemos atualizar estes Termos e publicar a
                versão vigente nesta página.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                10. Limitação de responsabilidade
              </h2>
              <p className="mt-3">
                O uso da Plataforma é por conta e risco do Usuário. Na extensão
                máxima permitida pela lei, a Plataforma é fornecida “como está”,
                sem garantias de qualquer tipo. Não nos responsabilizamos por
                perdas, danos ou prejuízos decorrentes do uso (ou da
                incapacidade de uso) da Plataforma ou dos Documentos Gerados.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                11. Lei aplicável e foro
              </h2>
              <p className="mt-3">
                Estes Termos são regidos pelas leis do Brasil. Fica eleito o foro
                da Comarca de São Paulo, SP, para dirimir quaisquer controvérsias,
                com renúncia a qualquer outro.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                12. Contato
              </h2>
              <p className="mt-3">
                Para dúvidas ou sugestões, entre em contato pelo e-mail:{" "}
                <a
                  href="mailto:contato@recibonahora.com.br"
                  className="text-indigo-700 hover:text-indigo-800 hover:underline"
                >
                  contato@recibonahora.com.br
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
