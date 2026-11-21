import type { Metadata } from 'next';
import AdSlot from '@/components/ads/AdSlot';
import { ADSENSE_SLOTS } from '@/_config/adsense';
import { RT_BASE } from '@/_config/reformaTributaria';
import { RtHero, RtFaq, RtRodape } from '../_components/RtParts';

const URL = `${RT_BASE}/cbs`;

export const metadata: Metadata = {
  title: { absolute: 'O que é CBS: alíquota 2027, quem paga e como calcular' },
  description: 'Qual a alíquota da CBS em 2027? Entenda os 11,3% calculados pelo TCU, o prazo do Senado e como calcular a CBS sobre um preço.',
  alternates: { canonical: URL },
  openGraph: { title: 'O que é CBS e qual a alíquota em 2027', url: URL, type: 'article' },
};

const faq = [
  { q: 'Qual a alíquota da CBS em 2027?', a: 'A alíquota de referência calculada pelo TCU é de 11,3%. O Senado tem até 15/12/2026 para fixá-la por resolução; se não votar, vale o número do TCU. Em 2027 a lei aplica a referência menos 0,1 ponto percentual.' },
  { q: 'A CBS substitui quais tributos?', a: 'A CBS substitui o PIS e a Cofins, que deixam de existir em 2027.' },
  { q: 'Quem paga a CBS?', a: 'A CBS incide sobre a venda de bens e serviços. Quem vende destaca o tributo na nota e recolhe; quem compra para a empresa pode usar o valor como crédito. No fim, o custo chega ao consumidor no preço.' },
  { q: 'Os 11,3% valem para sempre?', a: 'Não. A alíquota de referência é recalculada todo ano durante a transição, que vai até 2033. O número de 2027 vale só para 2027.' },
];

export default function Page() {
  return (
    <main className="page-shell">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
        <RtHero
          crumb="CBS"
          titulo="O que é CBS e qual a alíquota em 2027"
          intro="A CBS é a contribuição federal que substitui PIS e Cofins a partir de 2027. Veja de onde vem o número de 11,3%, quem decide e como calcular."
        />

        <article className="space-y-8 text-stone-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">O que é a CBS</h2>
            <p>
              A <strong>Contribuição Social sobre Bens e Serviços (CBS)</strong> foi criada pela Lei Complementar nº 214/2025.
              Ela é da União e ocupa o lugar do PIS e da Cofins. Em 2026 aparece só como teste, com 0,9% na nota fiscal. A
              cobrança de verdade começa em 2027.
            </p>
            <p className="mt-3">
              Como os outros tributos novos, a CBS funciona com créditos: a empresa desconta a CBS que pagou nas compras e
              recolhe só a diferença.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">De onde vêm os 11,3%</h2>
            <p>
              A lei divide a tarefa em três etapas: a Receita Federal propõe o método de cálculo, o Tribunal de Contas da União
              (TCU) faz a conta e o Senado fixa a alíquota por resolução. Em 28/10/2026 o TCU aprovou <strong>11,3%</strong>{' '}
              como alíquota de referência da CBS para 2027, acima dos 9,21% que vinham sendo usados como projeção.
            </p>
            <p className="mt-3">
              O Senado tem até <strong>15/12/2026</strong> para votar. Se não votar no prazo, vale o percentual calculado pelo
              TCU. A Receita já informou que o número vale só para 2027 e será recalculado para 2028.
            </p>
          </section>

          <AdSlot slot={ADSENSE_SLOTS.articleMiddle} />

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">Alíquota de referência não é o que todo mundo paga</h2>
            <p>
              A <strong>alíquota de referência</strong> é calculada para manter a arrecadação dos tributos que estão sendo
              substituídos. A <strong>alíquota efetiva média</strong> é o que, em média, a economia paga depois das reduções,
              das alíquotas zero e dos créditos. Por isso ela tende a ser menor que a referência.
            </p>
            <p className="mt-3">
              Na prática, cada operação paga a alíquota cheia ou uma das reduzidas (60%, 30%, 70% na locação de imóveis ou
              zero), conforme a lista da lei.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">Como calcular a CBS em 2027</h2>
            <p>Em 2027 e 2028 a lei aplica a referência menos 0,1 ponto percentual. Com 11,3%:</p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5">
              <li>Alíquota usada: 11,3% − 0,1 = <strong>11,2%</strong></li>
              <li>Serviço de R$ 1.000: CBS = R$ 1.000 × 11,2% = <strong>R$ 112,00</strong></li>
              <li>Com redução de 60%: R$ 1.000 × 11,2% × 0,4 = <strong>R$ 44,80</strong></li>
            </ul>
            <p className="mt-3">
              Para fazer a conta com o seu valor e ver o IBS junto, use a{' '}
              <a href="/reforma-tributaria/calculadora" className="text-amber-700 underline">calculadora da reforma tributária</a>.
            </p>
          </section>
        </article>

        <RtFaq faq={faq} />
        <RtRodape atual="/reforma-tributaria/cbs" />
      </div>
    </main>
  );
}
