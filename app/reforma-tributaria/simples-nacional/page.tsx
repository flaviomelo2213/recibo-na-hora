import type { Metadata } from 'next';
import AdSlot from '@/components/ads/AdSlot';
import { ADSENSE_SLOTS } from '@/_config/adsense';
import { RT_BASE } from '@/_config/reformaTributaria';
import { RtHero, RtFaq, RtRodape } from '../_components/RtParts';

const URL = `${RT_BASE}/simples-nacional`;

export const metadata: Metadata = {
  title: { absolute: 'Reforma Tributária no Simples Nacional: o que muda em 2027' },
  description: 'Como fica a empresa do Simples na reforma tributária? Entenda o Simples puro e o híbrido, os prazos de 2026 e 2027 e quando vale cada um.',
  alternates: { canonical: URL },
  openGraph: { title: 'Reforma Tributária no Simples Nacional', url: URL, type: 'article' },
};

const faq = [
  { q: 'O Simples Nacional acaba com a reforma tributária?', a: 'Não. O Simples continua. A mudança é que CBS e IBS passam a fazer parte da conta, e a empresa pode escolher pagá-los dentro do DAS ou pelo regime regular, fora da guia.' },
  { q: 'O que acontece se eu não fiz nenhuma opção em setembro de 2026?', a: 'A empresa que já está no Simples continua com CBS e IBS dentro do DAS no primeiro semestre de 2027. É o chamado Simples puro.' },
  { q: 'Ainda posso mudar de ideia?', a: 'Quem escolheu o modelo híbrido em setembro podia cancelar a opção até 30/11/2026, pelo prazo previsto. Para o segundo semestre de 2027 está prevista uma nova janela em março de 2027.' },
  { q: 'O MEI pode escolher o modelo híbrido?', a: 'Não. O MEI continua no DAS de valor fixo e não pode recolher CBS e IBS pelo regime regular.' },
];

export default function Page() {
  return (
    <main className="page-shell">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
        <RtHero
          crumb="Simples Nacional"
          titulo="Reforma Tributária no Simples Nacional: o que muda em 2027"
          intro="O Simples continua, mas a empresa passa a decidir como paga a CBS e o IBS: dentro do DAS ou por fora. Veja as duas opções, os prazos e quando cada uma costuma valer mais a pena."
        />

        <article className="space-y-8 text-stone-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">Simples puro ou Simples híbrido</h2>
            <p>A partir de 2027, a empresa do Simples Nacional tem dois caminhos para a CBS e o IBS:</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="ml-card p-4">
                <p className="font-semibold text-stone-900">Simples puro</p>
                <p className="mt-1 text-sm">CBS e IBS ficam dentro do DAS, junto com os demais tributos. É o caminho padrão para quem não fez nenhuma escolha.</p>
              </div>
              <div className="ml-card p-4">
                <p className="font-semibold text-stone-900">Simples híbrido</p>
                <p className="mt-1 text-sm">A empresa continua no Simples para os outros tributos, mas paga CBS e IBS pelo regime regular, fora da guia única.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">Os prazos</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Setembro de 2026:</strong> janela para escolher o modelo do primeiro semestre de 2027 (janeiro a junho).</li>
              <li><strong>30/11/2026:</strong> prazo previsto para cancelar a opção pelo modelo híbrido feita em setembro.</li>
              <li><strong>Março de 2027:</strong> nova janela, com efeito a partir de 1º de julho de 2027 (segundo semestre).</li>
            </ul>
            <p className="mt-3">
              Quem já era do Simples e não fez nenhuma opção em setembro fica com CBS e IBS dentro do DAS no primeiro semestre
              de 2027.
            </p>
          </section>

          <AdSlot slot={ADSENSE_SLOTS.articleMiddle} />

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">Quando cada opção costuma fazer sentido</h2>
            <p>
              A diferença está no <strong>crédito</strong>. No sistema novo, a empresa que compra de outra empresa pode descontar
              a CBS e o IBS que vieram na nota. No Simples puro, o crédito que a empresa passa ao cliente é pequeno, porque
              corresponde ao que ela paga dentro do DAS, que é reduzido.
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5">
              <li><strong>Vende para consumidor final</strong> (pessoa física): o cliente não usa crédito, então o Simples puro tende a ser mais simples e barato.</li>
              <li><strong>Vende para outras empresas</strong>: o cliente pode preferir comprar de quem gera crédito maior. Aí o Simples híbrido pode ajudar a manter os clientes, mesmo com mais trabalho na apuração.</li>
            </ul>
            <p className="mt-3">
              Não existe resposta única. A escolha depende de margem, clientes e fornecedores. Faça a conta com o seu contador
              antes da próxima janela.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">E o MEI?</h2>
            <p>
              O MEI fica fora dessa escolha: segue no DAS de valor fixo. Veja o que muda em{' '}
              <a href="/reforma-tributaria/mei" className="text-amber-700 underline">Reforma Tributária para MEI</a>.
            </p>
          </section>
        </article>

        <RtFaq faq={faq} />
        <RtRodape atual="/reforma-tributaria/simples-nacional" />
      </div>
    </main>
  );
}
