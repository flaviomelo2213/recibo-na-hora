import type { Metadata } from 'next';
import Link from 'next/link';
import AdSlot from '@/components/ads/AdSlot';
import { ADSENSE_SLOTS } from '@/_config/adsense';
import { PAGINAS_RT, RT_BASE } from '@/_config/reformaTributaria';
import { RtHero, RtFaq, RtRodape } from './_components/RtParts';

export const metadata: Metadata = {
  title: { absolute: 'Reforma Tributária 2027: guia, calculadora e cronograma' },
  description: 'O que é a reforma tributária e o que muda para você? CBS, IBS, cronograma até 2033 e calculadora grátis, em português simples.',
  alternates: { canonical: RT_BASE },
  openGraph: { title: 'Reforma Tributária 2027: guia, calculadora e cronograma', url: RT_BASE, type: 'article' },
};

const faq = [
  { q: 'Quando a reforma tributária começa a valer?', a: 'A transição começou em 2026, com um ano de teste. A CBS passa a ser cobrada em 2027 e a mudança termina em 2033, quando ICMS e ISS deixam de existir.' },
  { q: 'Quais impostos acabam?', a: 'PIS e Cofins acabam em 2027, substituídos pela CBS. ICMS e ISS diminuem de 2029 a 2032 e acabam em 2033, substituídos pelo IBS. O IPI é zerado para quase todos os produtos.' },
  { q: 'O que é o Imposto Seletivo?', a: 'É um imposto sobre produtos prejudiciais à saúde ou ao meio ambiente, como cigarros e bebidas alcoólicas. Pela MP 1.399/2026, a cobrança está prevista para começar em 2 de fevereiro de 2027, se o Congresso não mudar a regra.' },
  { q: 'A reforma aumenta os impostos?', a: 'A lei busca manter a arrecadação total parecida com a de hoje e limita a soma das alíquotas de referência. Alguns setores podem pagar mais e outros menos, dependendo das reduções e dos créditos de cada um.' },
];

export default function Page() {
  return (
    <main className="page-shell">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
        <RtHero
          crumb="Reforma Tributária"
          titulo="Reforma Tributária 2027: o que muda para você"
          intro="A reforma troca cinco tributos sobre o consumo por dois novos, a CBS e o IBS, mais o Imposto Seletivo. Aqui você entende o que muda, quando muda e calcula o efeito sobre um preço."
        />

        <article className="space-y-8 text-stone-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">De cinco tributos para dois</h2>
            <p>
              Hoje o consumo é tributado por <strong>PIS, Cofins, IPI, ICMS e ISS</strong>. Com a Lei Complementar nº 214/2025,
              eles dão lugar a:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5">
              <li><strong>CBS</strong> (Contribuição sobre Bens e Serviços): federal, substitui PIS e Cofins a partir de 2027.</li>
              <li><strong>IBS</strong> (Imposto sobre Bens e Serviços): de estados e municípios, substitui ICMS e ISS até 2033.</li>
              <li><strong>Imposto Seletivo</strong>: cobrado sobre produtos prejudiciais à saúde ou ao meio ambiente.</li>
            </ul>
            <p className="mt-3">
              A ideia central é cobrar o tributo uma vez em cada etapa e permitir que a empresa desconte o que já foi pago nas
              compras (crédito). Isso reduz o &quot;imposto sobre imposto&quot; que existe hoje.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">Nesta seção</h2>
            <div className="grid gap-3">
              {PAGINAS_RT.map((p) => (
                <Link key={p.href} href={p.href} className="ml-card p-4 block">
                  <p className="font-semibold text-stone-900">{p.titulo}</p>
                  <p className="mt-1 text-sm text-stone-600">{p.resumo}</p>
                </Link>
              ))}
            </div>
          </section>

          <AdSlot slot={ADSENSE_SLOTS.articleMiddle} />

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">O que muda para cada público</h2>
            <h3 className="text-lg font-semibold text-stone-900 mt-4">Consumidor</h3>
            <p>
              Os tributos passam a aparecer separados na nota fiscal, o que deixa mais claro quanto do preço é imposto. A lei
              também prevê a devolução de parte dos tributos (cashback) para famílias de baixa renda.
            </p>
            <h3 className="text-lg font-semibold text-stone-900 mt-4">MEI</h3>
            <p>
              O MEI continua existindo e segue pagando pelo DAS. A conta da calculadora vale para o regime regular, não para o
              MEI. Se você é MEI e emite recibos de serviço, veja os{' '}
              <Link href="/recibos" className="text-amber-700 underline">modelos de recibo do site</Link>.
            </p>
            <h3 className="text-lg font-semibold text-stone-900 mt-4">Empresas do Simples Nacional</h3>
            <p>
              O Simples Nacional continua. A empresa segue pagando pelo DAS, e a lei abre a possibilidade de recolher CBS e
              IBS fora da guia em alguns casos. Converse com o contador antes de decidir.
            </p>
            <h3 className="text-lg font-semibold text-stone-900 mt-4">Quem aluga imóvel</h3>
            <p>
              A locação de imóveis passa a ter CBS e IBS com <strong>redução de 70%</strong> na alíquota. No aluguel residencial
              há ainda um redutor social de R$ 600 por imóvel, descontado antes do cálculo. Para o dia a dia do aluguel, use o{' '}
              <Link href="/ferramentas/imobiliario" className="text-amber-700 underline">gerador de recibo de aluguel</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">As datas que importam</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>2026:</strong> teste, com CBS de 0,9% e IBS de 0,1% na nota fiscal.</li>
              <li><strong>15/12/2026:</strong> prazo do Senado para fixar a alíquota de referência da CBS de 2027.</li>
              <li><strong>2027:</strong> CBS cobrada de verdade; PIS e Cofins extintos.</li>
              <li><strong>2029 a 2032:</strong> ICMS e ISS caem aos poucos e o IBS sobe.</li>
              <li><strong>2033:</strong> fim do ICMS e do ISS.</li>
            </ul>
            <p className="mt-3">
              Veja o detalhe de cada ano no <Link href="/reforma-tributaria/cronograma" className="text-amber-700 underline">cronograma completo</Link>.
            </p>
          </section>
        </article>

        <RtFaq faq={faq} />
        <RtRodape atual="/reforma-tributaria" />
      </div>
    </main>
  );
}
