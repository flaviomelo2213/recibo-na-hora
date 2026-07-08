import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, PenTool, ShieldCheck, RefreshCw } from "lucide-react";
import { buildOpenGraph } from '@/lib/metadata';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedDocuments from '@/components/RelatedDocuments';

const title = "Política Editorial | Como Produzimos e Revisamos Nosso Conteúdo — ReciboNaHora";
const description =
  "Entenda quem mantém o ReciboNaHora, como nossos modelos de documentos e conteúdos são criados e revisados, e quais são os limites legais do que publicamos.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/politica-editorial",
  },
  openGraph: buildOpenGraph({ title, description, path: '/politica-editorial' }),
};

const LAST_UPDATED = '07/07/2026';

export default function PoliticaEditorialPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          className="mb-6"
          items={[{ label: "Início", href: "/" }, { label: "Política Editorial" }]}
        />
        <header className="mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-900 text-white mb-4">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Política Editorial
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Última atualização: {LAST_UPDATED}
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Esta página explica quem mantém o <strong>ReciboNaHora</strong>, como os
            nossos modelos de documentos e conteúdos educativos são produzidos e
            revisados, e quais são os limites do que publicamos. O objetivo é dar
            transparência total sobre o processo por trás de cada página do site.
          </p>
        </header>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-blue-900" />
              1. Quem Mantém o Site
            </h2>
            <p className="mb-3">
              O ReciboNaHora é um projeto da <strong>Via Certa Digital</strong>,
              mantido por <strong>Flavio Melo</strong>, responsável pela criação,
              curadoria e manutenção técnica da plataforma. Não somos um escritório
              de advocacia, contabilidade ou instituição financeira — somos uma
              equipe pequena focada em construir ferramentas gratuitas e conteúdo
              educativo sobre documentos do dia a dia.
            </p>
            <p>
              Para detalhes sobre a missão do projeto, veja nossa página{" "}
              <Link href="/sobre" className="text-blue-900 hover:text-blue-800 hover:underline font-medium">
                Sobre Nós
              </Link>
              . Para saber como o site se sustenta financeiramente, veja{" "}
              <Link href="/como-ganhamos-dinheiro" className="text-blue-900 hover:text-blue-800 hover:underline font-medium">
                Como Ganhamos Dinheiro
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <PenTool className="w-6 h-6 text-blue-900" />
              2. Como o Conteúdo é Criado
            </h2>
            <p className="mb-3">
              Nossos modelos de documentos (recibos, contratos, procurações,
              requerimentos) são desenvolvidos com base em:
            </p>
            <ul className="ml-6 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-900">•</span>
                <span>Práticas comuns de mercado e formatos amplamente aceitos por cartórios, empresas e órgãos públicos brasileiros;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-900">•</span>
                <span>Legislação de referência quando aplicável (ex.: CLT para cálculos trabalhistas, Lei do Inquilinato para contratos de locação, Resolução 131/2011 do CNJ para autorização de viagem de menores);</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-900">•</span>
                <span>Pesquisa sobre as dúvidas mais comuns de autônomos, MEIs e pequenos negócios ao lidar com esses documentos no dia a dia.</span>
              </li>
            </ul>
            <p className="mt-3">
              Parte do conteúdo textual do site é redigida com apoio de ferramentas
              de inteligência artificial, sempre com revisão humana antes da
              publicação. Não publicamos texto gerado automaticamente sem revisão.
            </p>
          </section>

          <section className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r-lg">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              3. Como os Modelos São Revisados
            </h2>
            <p className="mb-3">
              Antes de publicar ou atualizar um modelo de documento, verificamos:
            </p>
            <ul className="ml-6 space-y-2">
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Se os campos obrigatórios do documento estão completos (partes, valores, datas, assinaturas);</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Se a linguagem usada é clara e compatível com o uso esperado do documento;</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Se há alguma mudança relevante na legislação de referência que exija atualização do modelo ou do texto explicativo.</span>
              </li>
            </ul>
            <p className="mt-3">
              Revisões são feitas periodicamente e sempre que um usuário reporta um
              problema pelo nosso canal de{" "}
              <Link href="/contato" className="text-blue-900 hover:text-blue-800 hover:underline font-medium">
                contato
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              4. Limites Legais do Nosso Conteúdo
            </h2>
            <p className="mb-3">
              <strong>Não somos um escritório de advocacia ou contabilidade e não
              prestamos consultoria jurídica, contábil ou financeira individualizada.</strong>{" "}
              Nossos modelos e artigos têm finalidade educativa e informativa: eles
              ajudam a entender e produzir documentos comuns, mas não substituem a
              orientação de um advogado, contador ou outro profissional habilitado
              para o seu caso específico.
            </p>
            <p>
              Para operações de alto valor, questões societárias, disputas ou
              qualquer situação fora do comum, recomendamos sempre consultar um
              profissional qualificado antes de usar qualquer documento gerado
              aqui. Mais detalhes em nossos{" "}
              <Link href="/termos-uso" className="text-blue-900 hover:text-blue-800 hover:underline font-medium">
                Termos de Uso
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <RefreshCw className="w-6 h-6 text-blue-900" />
              5. Política de Atualização
            </h2>
            <p className="mb-3">
              Revisamos o conteúdo do site continuamente. Páginas que dependem de
              valores ou regras que mudam com frequência (por exemplo, cálculos
              trabalhistas ou percentuais de desconto) são as primeiras candidatas a
              revisão quando identificamos uma mudança na legislação de referência.
            </p>
            <p>
              Esta Política Editorial e as demais páginas institucionais mostram a
              data da última atualização no topo do texto. Não há uma data fixa de
              revisão para todo o site — priorizamos as páginas mais acessadas e as
              que envolvem informação legal mais sensível.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              6. Contato Editorial
            </h2>
            <p className="mb-3">
              Encontrou uma informação desatualizada, um erro em um modelo de
              documento ou tem uma sugestão de conteúdo? Fale com a gente:
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
            <p className="mt-2">
              Ou use nosso{" "}
              <Link href="/contato" className="text-blue-900 hover:text-blue-800 hover:underline font-medium">
                formulário de contato
              </Link>
              . Respondemos em até 48 horas úteis.
            </p>
          </section>

          <hr className="my-8" />

          <p className="text-sm text-slate-600">
            Documentos Relacionados:{" "}
            <Link href="/sobre" className="font-medium text-blue-900 hover:text-blue-800">
              Sobre Nós
            </Link>{" "}
            •{" "}
            <Link href="/como-ganhamos-dinheiro" className="font-medium text-blue-900 hover:text-blue-800">
              Como Ganhamos Dinheiro
            </Link>{" "}
            •{" "}
            <Link href="/termos-uso" className="font-medium text-blue-900 hover:text-blue-800">
              Termos de Uso
            </Link>{" "}
            •{" "}
            <Link href="/politica-privacidade" className="font-medium text-blue-900 hover:text-blue-800">
              Política de Privacidade
            </Link>
          </p>

          <RelatedDocuments />
        </div>
      </section>
    </main>
  );
}
