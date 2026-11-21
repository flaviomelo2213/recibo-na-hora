import type { Metadata } from 'next';
import Link from 'next/link';
import AdSlot from '@/components/ads/AdSlot';
import { ADSENSE_SLOTS } from '@/_config/adsense';
import { RT_BASE } from '@/_config/reformaTributaria';
import { RtHero, RtFaq, RtRodape } from '../_components/RtParts';
import SouContribuinte from './SouContribuinte';

const URL = `${RT_BASE}/aluguel`;

export const metadata: Metadata = {
  title: { absolute: 'Reforma Tributária no aluguel: quem paga IBS e CBS' },
  description: 'Vou pagar imposto novo sobre o aluguel? Veja quando a pessoa física paga IBS e CBS, a redução de 70% e o redutor de R$ 600. Faça o teste.',
  alternates: { canonical: URL },
  openGraph: { title: 'Reforma Tributária no aluguel', url: URL, type: 'article' },
};

const faq = [
  { q: 'Quem tem um ou dois imóveis alugados vai pagar IBS e CBS?', a: 'Não. A pessoa física só paga se, no ano anterior, alugou mais de 3 imóveis e recebeu mais de R$ 240 mil com aluguéis. As duas condições precisam acontecer juntas.' },
  { q: 'E quem aluga pelo Airbnb?', a: 'A locação por temporada, de até 90 dias, é tratada como hospedagem. Mas a pessoa física só paga se também cumprir as duas condições: mais de 3 imóveis e receita acima de R$ 240 mil.' },
  { q: 'Empresa que aluga imóvel paga?', a: 'Sim. A pessoa jurídica que aluga imóveis paga IBS e CBS, com redução de 70% na alíquota e, no residencial, o redutor social de R$ 600 por imóvel.' },
  { q: 'O inquilino vai pagar mais?', a: 'Depende do contrato e de quem aluga. Para a maioria dos proprietários pessoa física nada muda, porque eles não se tornam contribuintes. O Imposto de Renda sobre o aluguel continua como hoje.' },
];

export default function Page() {
  return (
    <main className="page-shell">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
        <RtHero
          crumb="Aluguel"
          titulo="Reforma Tributária no aluguel: quem paga IBS e CBS"
          intro="A reforma coloca o aluguel de imóveis no IBS e na CBS, mas a maioria dos proprietários pessoa física fica de fora. Veja as regras e faça o teste."
        />

        <SouContribuinte />

        <article className="mt-10 space-y-8 text-stone-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">Pessoa física: as duas condições</h2>
            <p>
              A pessoa física só passa a pagar IBS e CBS sobre aluguel se, no ano anterior, cumpriu <strong>as duas</strong>{' '}
              condições ao mesmo tempo:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5">
              <li>alugou <strong>mais de 3 imóveis</strong> diferentes; e</li>
              <li>recebeu <strong>mais de R$ 240 mil</strong> com aluguéis no ano (valor corrigido pelo IPCA).</li>
            </ul>
            <p className="mt-3">
              Quem tem 4 imóveis e recebe R$ 120 mil por ano, por exemplo, não é contribuinte. Quem não se enquadra continua
              apenas com o Imposto de Renda.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">Pessoa jurídica: sempre paga</h2>
            <p>
              A empresa que aluga imóveis é contribuinte do IBS e da CBS, sem piso de quantidade de imóveis ou de receita.
            </p>
          </section>

          <AdSlot slot={ADSENSE_SLOTS.articleMiddle} />

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">Redução de 70% e redutor de R$ 600</h2>
            <p>Para quem paga, a lei prevê dois alívios:</p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5">
              <li><strong>Redução de 70% na alíquota</strong> na locação, cessão onerosa e arrendamento de imóveis: paga-se 30% da alíquota cheia.</li>
              <li><strong>Redutor social de R$ 600 por imóvel</strong> na locação residencial: esse valor é descontado do aluguel antes do cálculo. Ele não vale para a locação por temporada.</li>
            </ul>
            <p className="mt-3">
              Exemplo: aluguel residencial de R$ 2.000. Com o redutor, a base passa a ser R$ 1.400, e sobre ela incide a alíquota
              com redução de 70%. Para simular a alíquota com a redução, use a{' '}
              <a href="/reforma-tributaria/calculadora" className="text-amber-700 underline">calculadora</a> e escolha
              &quot;Locação de imóvel&quot; (ela não aplica o redutor de R$ 600).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">Aluguel por temporada</h2>
            <p>
              A locação de até 90 dias, comum em plataformas como o Airbnb, é tratada como hospedagem. Isso só importa para quem
              já é contribuinte: a pessoa física continua precisando cumprir as duas condições (mais de 3 imóveis e mais de
              R$ 240 mil por ano).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">Recibo de aluguel continua valendo</h2>
            <p>
              Para registrar os pagamentos do dia a dia, use o{' '}
              <Link href="/ferramentas/imobiliario" className="text-amber-700 underline">gerador de recibo de aluguel</Link>.
              Quem for contribuinte de IBS e CBS também precisa emitir nota fiscal.
            </p>
          </section>
        </article>

        <RtFaq faq={faq} />
        <RtRodape atual="/reforma-tributaria/aluguel" />
      </div>
    </main>
  );
}
