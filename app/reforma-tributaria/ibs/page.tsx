import type { Metadata } from 'next';
import AdSlot from '@/components/ads/AdSlot';
import { ADSENSE_SLOTS } from '@/_config/adsense';
import { RT_BASE } from '@/_config/reformaTributaria';
import { RtHero, RtFaq, RtRodape } from '../_components/RtParts';

const URL = `${RT_BASE}/ibs`;

export const metadata: Metadata = {
  title: { absolute: 'O que é IBS: como substitui ICMS e ISS até 2033' },
  description: 'O que é IBS e quando começa? Veja como o imposto de estados e municípios substitui ICMS e ISS, é cobrado no destino e sobe até 2033.',
  alternates: { canonical: URL },
  openGraph: { title: 'O que é IBS (Imposto sobre Bens e Serviços)', url: URL, type: 'article' },
};

const calendario = [
  { ano: '2026', ibs: '0,1% (teste)', icms: 'Normal' },
  { ano: '2027 e 2028', ibs: '0,05% estadual + 0,05% municipal', icms: 'Normal' },
  { ano: '2029', ibs: '10% da alíquota cheia', icms: '90% da atual' },
  { ano: '2030', ibs: '20% da alíquota cheia', icms: '80% da atual' },
  { ano: '2031', ibs: '30% da alíquota cheia', icms: '70% da atual' },
  { ano: '2032', ibs: '40% da alíquota cheia', icms: '60% da atual' },
  { ano: '2033', ibs: 'Alíquota cheia', icms: 'Extintos' },
];

const faq = [
  { q: 'O IBS substitui quais impostos?', a: 'O IBS substitui o ICMS, que é estadual, e o ISS, que é municipal. Os dois diminuem de 2029 a 2032 e deixam de existir em 2033.' },
  { q: 'Qual será a alíquota do IBS?', a: 'Ainda não está definida. Cada estado e cada município fixa a sua parte por lei; quem não fixar usa a alíquota de referência do Senado. O Comitê Gestor do IBS usa 18,7% como estimativa de cálculo, mas não é um número oficial.' },
  { q: 'O que significa ser cobrado no destino?', a: 'Significa que o IBS vai para o estado e o município onde está quem compra, e não onde está quem vende. Hoje, boa parte do ICMS fica no estado de origem.' },
  { q: 'Quem administra o IBS?', a: 'O Comitê Gestor do IBS, formado por estados, Distrito Federal e municípios. Ele centraliza as regras e a distribuição do imposto.' },
];

export default function Page() {
  return (
    <main className="page-shell">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
        <RtHero
          crumb="IBS"
          titulo="O que é IBS e como ele substitui ICMS e ISS"
          intro="O IBS é o imposto de estados e municípios criado pela reforma. Ele junta ICMS e ISS num tributo só, cobrado onde está quem compra, e sobe aos poucos até 2033."
        />

        <article className="space-y-8 text-stone-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">IBS em poucas palavras</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Imposto sobre Bens e Serviços</strong>, de estados, Distrito Federal e municípios.</li>
              <li>Substitui o <strong>ICMS</strong> (estadual) e o <strong>ISS</strong> (municipal).</li>
              <li>Tem as mesmas regras em todo o país, mas cada estado e cada município fixa a sua alíquota por lei.</li>
              <li>Funciona com créditos, como a CBS: a empresa desconta o IBS que pagou nas compras.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">Cobrado no destino</h2>
            <p>
              A alíquota do IBS de cada venda é a <strong>soma da alíquota do estado e da do município de destino</strong>,
              ou seja, onde está quem compra. Se o estado ou o município não fixar a própria alíquota, vale a alíquota de
              referência definida pelo Senado.
            </p>
            <p className="mt-3">
              Na prática, isso acaba com boa parte da &quot;guerra fiscal&quot;: não adianta mais uma empresa se instalar num
              estado só porque o imposto ali é menor, já que o IBS vai para onde está o cliente.
            </p>
          </section>

          <AdSlot slot={ADSENSE_SLOTS.articleMiddle} />

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">Calendário do IBS</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-stone-500">
                    <th className="py-2 pr-3">Ano</th><th className="py-2 pr-3">IBS</th><th className="py-2">ICMS e ISS</th>
                  </tr>
                </thead>
                <tbody>
                  {calendario.map((c) => (
                    <tr key={c.ano} className="border-b last:border-0">
                      <td className="py-2 pr-3 font-semibold text-stone-900">{c.ano}</td>
                      <td className="py-2 pr-3">{c.ibs}</td>
                      <td className="py-2">{c.icms}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              Veja todos os tributos ano a ano no <a href="/reforma-tributaria/cronograma" className="text-amber-700 underline">cronograma completo</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">Comitê Gestor do IBS</h2>
            <p>
              O IBS é administrado pelo <strong>Comitê Gestor do IBS</strong>, que reúne estados, Distrito Federal e
              municípios. É ele que centraliza as regras, a arrecadação e a divisão do imposto entre os entes. Em 2026, o
              comitê usou uma alíquota estimada de 18,7% para calcular a arrecadação de 2027. Esse número é só uma
              estimativa: a alíquota de cada lugar ainda será definida.
            </p>
          </section>
        </article>

        <RtFaq faq={faq} />
        <RtRodape atual="/reforma-tributaria/ibs" />
      </div>
    </main>
  );
}
