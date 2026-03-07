import type { Metadata } from 'next'
import Link from 'next/link'
import { PROFISSOES } from '@/_data/profissoes'

export const metadata: Metadata = {
  title: 'Modelos de Recibo por Profissão | ReciboNaHora',
  description: 'Encontre o modelo de recibo certo para a sua profissão. Pedreiro, diarista, autônomo, freelancer, médico, advogado e mais. Grátis, sem cadastro.',
  keywords: ['recibo por profissao', 'modelo recibo autonomo', 'recibo para diarista', 'recibo para pedreiro', 'recibo prestacao servico'],
  alternates: { canonical: 'https://recibonahora.com.br/profissoes' },
  openGraph: {
    title: 'Modelos de Recibo por Profissão | ReciboNaHora',
    description: 'Modelo de recibo para cada profissão. Grátis e sem cadastro.',
    url: 'https://recibonahora.com.br/profissoes',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'ReciboNaHora',
  },
}

const CATEGORY_LABELS: Record<string, string> = {
  construcao: 'Construção e Reformas',
  domestico: 'Serviços Domésticos',
  liberal: 'Profissões Liberais',
  tech: 'Tecnologia e Criativo',
  saude: 'Saúde e Bem-estar',
  outros: 'Outros',
}

const CATEGORY_SLUGS: Record<string, string[]> = {
  construcao: ['pedreiro', 'encanador', 'eletricista', 'pintor', 'jardineiro', 'mecanico'],
  domestico: ['diarista', 'faxineiro', 'cuidador-de-idosos', 'baba', 'cozinheiro', 'garcom'],
  liberal: ['advogado', 'contador', 'arquiteto', 'engenheiro', 'medico', 'consultor'],
  tech: ['programador', 'designer', 'freelancer', 'fotografo', 'tecnico-em-ti'],
  saude: ['nutricionista', 'fisioterapeuta', 'personal-trainer'],
  outros: ['autonomo', 'motorista', 'professor', 'manicure', 'costureira'],
}

export default function ProfissoesPage() {
  const profissoesList = Object.values(PROFISSOES)

  return (
    <main className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">

        {/* Header */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
            <i className="fa-solid fa-briefcase" />
            Por Profissão
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            Modelos de Recibo por Profissão
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Escolha sua profissão e gere o modelo de recibo correto — preenchido, em PDF, sem cadastro.
          </p>
        </header>

        {/* Categories */}
        {Object.entries(CATEGORY_SLUGS).map(([cat, slugs]) => {
          const profs = slugs.map((s) => PROFISSOES[s]).filter(Boolean)
          if (profs.length === 0) return null
          return (
            <section key={cat} className="mb-10">
              <h2 className="text-xl font-bold text-stone-900 mb-4 border-b border-stone-200 pb-2">
                {CATEGORY_LABELS[cat] ?? cat}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {profs.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/profissoes/${p.slug}`}
                    className="flex items-center gap-3 border border-stone-200 bg-stone-50 rounded-xl px-4 py-3 hover:border-amber-400 hover:bg-amber-50 transition group"
                  >
                    <span className="text-stone-700 font-medium group-hover:text-amber-800 text-sm">
                      Recibo {p.prepoLabel}
                    </span>
                    <i className="fa-solid fa-arrow-right text-xs text-stone-400 group-hover:text-amber-600 ml-auto" />
                  </Link>
                ))}
              </div>
            </section>
          )
        })}

        {/* CTA */}
        <section className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
          <h2 className="text-lg font-bold text-stone-900 mb-2">Não encontrou sua profissão?</h2>
          <p className="text-stone-600 text-sm mb-4">Use nosso gerador de recibo simples — funciona para qualquer tipo de serviço.</p>
          <Link
            href="/ferramentas/recibo-simples"
            className="inline-flex items-center gap-2 bg-stone-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-stone-700 transition"
          >
            Gerar Recibo Simples
            <i className="fa-solid fa-arrow-right text-sm" />
          </Link>
        </section>

        <p className="text-center text-stone-500 text-sm mt-6">
          {profissoesList.length} profissões disponíveis — 100% gratuito, sem cadastro
        </p>
      </div>
    </main>
  )
}
