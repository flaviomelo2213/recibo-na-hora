import type { Metadata } from 'next'
import Link from 'next/link'
import { PERGUNTAS } from '@/_data/perguntas'
import { buildOpenGraph } from '@/lib/metadata'

const title = 'Mapa de Perguntas sobre Recibos | ReciboNaHora'
const description = 'Lista completa de perguntas e respostas sobre recibos, validade jurídica, modelos e uso correto.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://www.recibonahora.com.br/mapa-de-perguntas' },
  // noindex, follow (Fase 4B): esta página lista exatamente as mesmas 19
  // perguntas de /perguntas, porém sem as categorias e sem o resumo de cada
  // resposta — ou seja, é um subconjunto estrito do índice, sem conteúdo
  // editorial próprio além do H1 e de uma linha de introdução. Segue publicada
  // e linkada no rodapé porque tem utilidade de navegação; apenas deixa de
  // competir no índice com /perguntas. Nenhum redirect foi criado.
  robots: { index: false, follow: true },
  openGraph: buildOpenGraph({ title, description, path: '/mapa-de-perguntas' }),
}

export default function MapaDePerguntas() {
  const perguntas = Object.values(PERGUNTAS)

  return (
    <main className="bg-white min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-stone-900 mb-4">Mapa de Perguntas sobre Recibos</h1>
        <p className="text-stone-600 mb-8">Lista completa de dúvidas respondidas sobre recibos.</p>
        <ul className="space-y-2">
          {perguntas.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/perguntas/${p.slug}`}
                className="text-stone-700 hover:text-amber-700 hover:underline text-sm"
              >
                {p.question}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
