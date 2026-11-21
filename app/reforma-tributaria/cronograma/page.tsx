import type { Metadata } from 'next';
import AdSlot from '@/components/ads/AdSlot';
import { ADSENSE_SLOTS } from '@/_config/adsense';
import { RT_BASE } from '@/_config/reformaTributaria';
import { RtHero, RtFaq, RtRodape } from '../_components/RtParts';

const URL = `${RT_BASE}/cronograma`;

export const metadata: Metadata = {
  title: { absolute: 'Cronograma da Reforma Tributária: o que muda de 2026 a 2033' },
  description: 'O que muda em cada ano da reforma tributária? Veja o teste de 2026, a CBS em 2027, a troca de ICMS e ISS pelo IBS e o fim em 2033.',
  alternates: { canonical: URL },
  openGraph: { title: 'Cronograma da Reforma Tributária 2026–2033', url: URL, type: 'article' },
};

const anos = [
  {
    ano: '2026',
    titulo: 'Ano de teste',
    itens: [
      'CBS de 0,9% e IBS de 0,1% passam a aparecer na nota fiscal.',
      'Os valores são compensados com PIS e Cofins: serve para ajustar os sistemas.',
      'Até 15/12, o Senado fixa a alíquota de referência da CBS de 2027. O TCU calculou 11,3%.',
    ],
  },
  {
    ano: '2027',
    titulo: 'CBS de verdade',
    itens: [
      'A CBS passa a ser cobrada e PIS e Cofins são extintos.',
      'A CBS usa a alíquota de referência menos 0,1 ponto percentual (vale também em 2028).',
      'O IBS segue em teste: 0,05% estadual + 0,05% municipal.',
      'Imposto Seletivo previsto para começar em 2 de fevereiro, pela MP 1.399/2026, que ainda depende do Congresso.',
    ],
  },
  {
    ano: '2028',
    titulo: 'Mesmas regras de 2027',
    itens: ['CBS com a redução de 0,1 ponto e IBS de teste de 0,1% no total. ICMS e ISS seguem como hoje.'],
  },
  {
    ano: '2029 a 2032',
    titulo: 'Troca de ICMS e ISS pelo IBS',
    itens: [
      'ICMS e ISS caem para 90% (2029), 80% (2030), 70% (2031) e 60% (2032) das alíquotas atuais.',
      'O IBS sobe na mesma proporção: 10%, 20%, 30% e 40% da alíquota cheia.',
    ],
  },
  {
    ano: '2033',
    titulo: 'Sistema novo completo',
    itens: ['ICMS e ISS são extintos e o IBS passa a valer por inteiro.'],
  },
];

const faq = [
  { q: 'O que muda em 2027 na reforma tributária?', a: 'A CBS começa a ser cobrada de verdade e PIS e Cofins deixam de existir. O IBS continua em teste, com 0,1% no total, e o Imposto Seletivo está previsto para começar em 2 de fevereiro.' },
  { q: 'Quando acabam o ICMS e o ISS?', a: 'Em 2033. Antes disso, de 2029 a 2032, as alíquotas caem um pouco a cada ano enquanto o IBS sobe.' },
  { q: 'A data de fevereiro de 2027 para o Imposto Seletivo é certa?', a: 'Ela está na MP 1.399/2026, que precisa ser aprovada pelo Congresso. Se o texto mudar, a data também pode mudar.' },
  { q: 'Por que 2026 é chamado de ano de teste?', a: 'Porque CBS e IBS aparecem na nota com alíquotas pequenas e são compensados com PIS e Cofins. Assim, empresas e governo ajustam os sistemas antes da cobrança de verdade.' },
];

export default function Page() {
  return (
    <main className="page-shell">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
        <RtHero
          crumb="Cronograma"
          titulo="Cronograma da Reforma Tributária: o que muda de 2026 a 2033"
          intro="A reforma não acontece de uma vez. Veja, ano a ano, quando cada tributo começa, diminui ou acaba."
        />

        <ol className="relative border-l-2 border-dashed border-amber-300 ml-3 space-y-8">
          {anos.map((a, i) => (
            <li key={a.ano} className="pl-6">
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-amber-500 ring-4 ring-amber-100" aria-hidden />
              <p className="text-sm font-semibold text-amber-700">{a.ano}</p>
              <h2 className="text-xl font-bold text-stone-900">{a.titulo}</h2>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-stone-700">
                {a.itens.map((t) => <li key={t}>{t}</li>)}
              </ul>
              {i === 1 && <AdSlot slot={ADSENSE_SLOTS.articleMiddle} />}
            </li>
          ))}
        </ol>

        <section className="mt-10 space-y-3 text-stone-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-900">Por que a transição é tão longa</h2>
          <p>
            ICMS e ISS são a principal receita de estados e municípios. Trocar esses impostos de uma vez poderia desequilibrar
            as contas públicas e confundir as empresas. Por isso a lei divide a mudança em etapas: primeiro o tributo federal
            (CBS), depois a troca gradual do ICMS e do ISS pelo IBS.
          </p>
          <p>
            Para ver quanto isso representa no preço de um produto ou serviço, use a{' '}
            <a href="/reforma-tributaria/calculadora" className="text-amber-700 underline">calculadora da reforma tributária</a>.
          </p>
        </section>

        <RtFaq faq={faq} />
        <RtRodape atual="/reforma-tributaria/cronograma" />
      </div>
    </main>
  );
}
