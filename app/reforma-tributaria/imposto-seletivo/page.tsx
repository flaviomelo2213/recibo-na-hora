import type { Metadata } from 'next';
import AdSlot from '@/components/ads/AdSlot';
import { ADSENSE_SLOTS } from '@/_config/adsense';
import { RT_BASE } from '@/_config/reformaTributaria';
import { RtHero, RtFaq, RtRodape } from '../_components/RtParts';

const URL = `${RT_BASE}/imposto-seletivo`;

export const metadata: Metadata = {
  title: { absolute: 'Imposto Seletivo 2027: produtos e alíquotas' },
  description: 'Quais produtos pagam o Imposto Seletivo em 2027? Veja as alíquotas da MP 1.399/2026 para bebidas, cigarros, carros e loterias.',
  alternates: { canonical: URL },
  openGraph: { title: 'Imposto Seletivo 2027: produtos e alíquotas', url: URL, type: 'article' },
};

const aliquotas = [
  { item: 'Bebidas açucaradas', aliq: '2,6%' },
  { item: 'Cervejas de malte', aliq: '4,2%' },
  { item: 'Demais bebidas alcoólicas (vinhos, destilados)', aliq: '8% a 24%, conforme o tipo' },
  { item: 'Cigarros e cigarrilhas', aliq: '66,7% sobre 15% do preço de varejo + R$ 3,50 por maço de 20' },
  { item: 'Demais produtos fumígenos', aliq: '37,5%' },
  { item: 'Carros de passeio', aliq: '6,3% (base, com ajustes por eficiência e tecnologia)' },
  { item: 'Aviões e helicópteros', aliq: '6,8%' },
  { item: 'Barcos a motor', aliq: '12%' },
  { item: 'Loterias e apostas', aliq: '0,5%' },
];

const faq = [
  { q: 'Quando começa o Imposto Seletivo?', a: 'Pela MP 1.399/2026, em 2 de fevereiro de 2027. A medida provisória ainda precisa ser aprovada pelo Congresso.' },
  { q: 'O preço da cerveja e do refrigerante vai subir?', a: 'Em 2027, o governo diz que as alíquotas repetem as atuais do IPI, que será zerado para esses produtos ao mesmo tempo. A ideia é manter a carga parecida com a de hoje no primeiro ano.' },
  { q: 'Quem tem carro PcD paga Imposto Seletivo?', a: 'Não. A MP prevê alíquota zero para veículos comprados por pessoas com deficiência e por pessoas com transtorno do espectro autista, além de táxis.' },
  { q: 'As alíquotas valem para sempre?', a: 'Não. O governo deve enviar ao Congresso até 31/05/2027 um projeto com as alíquotas que valerão a partir de 2028.' },
];

export default function Page() {
  return (
    <main className="page-shell">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
        <RtHero
          crumb="Imposto Seletivo"
          titulo="Imposto Seletivo 2027: quais produtos pagam e quanto"
          intro="O Imposto Seletivo, apelidado de imposto do pecado, incide sobre produtos que fazem mal à saúde ou ao meio ambiente. Veja as alíquotas previstas para 2027."
        />

        <article className="space-y-8 text-stone-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">O que é o Imposto Seletivo</h2>
            <p>
              É um imposto federal criado pela reforma tributária para desestimular o consumo de produtos prejudiciais à
              saúde ou ao meio ambiente. Ele é cobrado <strong>uma única vez</strong> na cadeia e se soma à CBS e ao IBS.
              Também substitui parte do IPI, que será zerado para a maioria dos produtos.
            </p>
            <p className="mt-3">
              Pela <strong>Medida Provisória 1.399/2026</strong>, a cobrança está prevista para começar em{' '}
              <strong>2 de fevereiro de 2027</strong>. A MP ainda precisa ser aprovada pelo Congresso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">Alíquotas previstas para 2027</h2>
            <p>Segundo o governo, as alíquotas de 2027 repetem as atuais do IPI, para manter a carga no primeiro ano:</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-stone-500"><th className="py-2 pr-3">Produto</th><th className="py-2">Alíquota</th></tr>
                </thead>
                <tbody>
                  {aliquotas.map((a) => (
                    <tr key={a.item} className="border-b last:border-0">
                      <td className="py-2 pr-3 font-medium text-stone-900">{a.item}</td>
                      <td className="py-2">{a.aliq}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-stone-500">Na importação, as alíquotas de veículos e bebidas são maiores, porque a base de cálculo é outra.</p>
          </section>

          <AdSlot slot={ADSENSE_SLOTS.articleMiddle} />

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">Quem fica de fora</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Caminhões com peso bruto de 3.500 kg ou mais (exceto picapes).</li>
              <li>Veículos para pessoas com deficiência e com transtorno do espectro autista, e táxis (alíquota zero).</li>
              <li>Veículos, aeronaves e embarcações das Forças Armadas e da segurança pública.</li>
              <li>Bens minerais extraídos, com alíquota zero em 2027.</li>
            </ul>
            <p className="mt-3">Pequenos produtores de bebidas têm reduções de até 40%, conforme o porte da empresa.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">E depois de 2027?</h2>
            <p>
              O governo deve enviar ao Congresso, até <strong>31/05/2027</strong>, um projeto de lei com as alíquotas que
              valerão a partir de 2028. Se a votação atrasar, as alíquotas de 2027 continuam valendo.
            </p>
          </section>
        </article>

        <RtFaq faq={faq} />
        <RtRodape atual="/reforma-tributaria/imposto-seletivo" />
      </div>
    </main>
  );
}
