import type { Metadata } from 'next'
import Link from 'next/link'
import { PERGUNTAS } from '@/_data/perguntas'

export const metadata: Metadata = {
  title: 'Mapa de Perguntas sobre Recibos | ReciboNaHora',
  description: 'Lista completa de perguntas e respostas sobre recibos, validade jurídica, modelos e uso correto.',
  alternates: { canonical: 'https://recibonahora.com.br/mapa-de-perguntas' },
  robots: { index: true, follow: true },
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
