import type { Metadata } from 'next';
import Link from 'next/link';
import AdSlot from '@/components/ads/AdSlot';
import { ADSENSE_SLOTS } from '@/_config/adsense';
import { RT_BASE } from '@/_config/reformaTributaria';
import { RtHero, RtFaq, RtRodape } from '../_components/RtParts';

const URL = `${RT_BASE}/mei`;

export const metadata: Metadata = {
  title: { absolute: 'Reforma Tributária para MEI: DAS, nota fiscal e o que muda' },
  description: 'O MEI vai pagar mais imposto? Veja quanto o DAS ganha de CBS e IBS em 2027, a nota fiscal em todas as vendas e o que é o nanoempreendedor.',
  alternates: { canonical: URL },
  openGraph: { title: 'Reforma Tributária para MEI', url: URL, type: 'article' },
};

const das = [
  { ano: '2027 e 2028', cbs: 'R$ 0,994', ibs: 'R$ 0,006', total: 'R$ 1,00', obs: 'ICMS e ISS continuam como hoje' },
  { ano: '2033 em diante', cbs: 'R$ 1,00', ibs: 'R$ 2,00', total: 'R$ 3,00', obs: 'ICMS e ISS deixam de existir' },
];

const faq = [
  { q: 'O MEI vai pagar mais imposto com a reforma?', a: 'O DAS ganha uma parcela fixa de CBS e IBS de R$ 1,00 por mês em 2027 e 2028. Até 2033, as parcelas de ICMS e ISS diminuem e somem, e a parte de CBS e IBS chega a R$ 3,00. O INSS continua no DAS.' },
  { q: 'O limite de faturamento do MEI muda?', a: 'Pela regra atual, o limite continua R$ 81 mil por ano. Há propostas no Congresso para aumentar, mas nenhuma aprovada até a data desta página.' },
  { q: 'O MEI vai ter que emitir nota fiscal sempre?', a: 'Sim. Com a reforma, a nota fiscal passa a ser exigida em todas as vendas, inclusive para pessoa física, e não só para empresas.' },
  { q: 'O que é o nanoempreendedor?', a: 'É a pessoa física com receita bruta anual abaixo de R$ 40.500, metade do limite do MEI. Ela fica isenta de CBS e IBS.' },
];

export default function Page() {
  return (
    <main className="page-shell">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
        <RtHero
          crumb="MEI"
          titulo="Reforma Tributária para MEI: o que muda no DAS e na nota fiscal"
          intro="O MEI continua existindo, com DAS de valor fixo. O que muda é uma pequena parcela de CBS e IBS na guia, a nota fiscal em todas as vendas e o crédito que você passa para quem compra de você."
        />

        <article className="space-y-8 text-stone-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">O que continua igual</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>O MEI continua existindo, com limite de <strong>R$ 81 mil por ano</strong>.</li>
              <li>O pagamento segue pelo <strong>DAS de valor fixo</strong>, com INSS e os direitos previdenciários de hoje.</li>
              <li>O MEI não pode pagar CBS e IBS pelo regime regular: fica sempre no DAS.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">Quanto o DAS ganha de CBS e IBS</h2>
            <p>A partir de 2027 o DAS passa a ter parcelas fixas dos tributos novos, por mês:</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-stone-500">
                    <th className="py-2 pr-3">Ano</th><th className="py-2 pr-3">CBS</th><th className="py-2 pr-3">IBS</th><th className="py-2 pr-3">Total</th><th className="py-2">Observação</th>
                  </tr>
                </thead>
                <tbody>
                  {das.map((d) => (
                    <tr key={d.ano} className="border-b last:border-0">
                      <td className="py-2 pr-3 font-semibold text-stone-900">{d.ano}</td>
                      <td className="py-2 pr-3">{d.cbs}</td>
                      <td className="py-2 pr-3">{d.ibs}</td>
                      <td className="py-2 pr-3 font-semibold">{d.total}</td>
                      <td className="py-2">{d.obs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              De 2029 a 2032, as parcelas de ICMS e ISS diminuem aos poucos enquanto a de IBS sobe. Em 2026 nada muda no DAS.
            </p>
          </section>

          <AdSlot slot={ADSENSE_SLOTS.articleMiddle} />

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">Nota fiscal em todas as vendas</h2>
            <p>
              Hoje o MEI só é obrigado a emitir nota quando vende para empresas. Com a reforma, a nota fiscal passa a ser
              exigida <strong>em todas as vendas</strong>, inclusive para pessoa física. Vale organizar desde já o cadastro no
              emissor de notas do seu município ou estado.
            </p>
            <p className="mt-3">
              Para controle do dia a dia, como pagamentos recebidos, você pode continuar usando{' '}
              <Link href="/recibos" className="text-amber-700 underline">recibos</Link>. Recibo, porém, não substitui a nota
              fiscal quando ela for obrigatória.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">O crédito que você passa para quem compra</h2>
            <p>
              No sistema novo, a empresa que compra pode descontar a CBS e o IBS que vieram na nota. Como o MEI paga um valor
              fixo pequeno, o crédito que ele passa é simbólico. Se você vende para empresas, isso pode entrar na negociação de
              preço: o cliente pode comparar com fornecedores que geram crédito maior.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">Nanoempreendedor</h2>
            <p>
              A reforma criou a figura do <strong>nanoempreendedor</strong>: a pessoa física com receita bruta anual abaixo de{' '}
              <strong>R$ 40.500</strong>, metade do limite do MEI. Ele fica isento de CBS e IBS. É uma alternativa para quem
              fatura pouco, mas não tem os mesmos direitos previdenciários do MEI.
            </p>
          </section>
        </article>

        <RtFaq faq={faq} />
        <RtRodape atual="/reforma-tributaria/mei" />
      </div>
    </main>
  );
}
