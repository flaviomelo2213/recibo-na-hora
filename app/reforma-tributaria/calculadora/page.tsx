import type { Metadata } from 'next';
import AdSlot from '@/components/ads/AdSlot';
import { ADSENSE_SLOTS } from '@/_config/adsense';
import { RT_BASE } from '@/_config/reformaTributaria';
import { RtHero, RtFaq, RtRodape } from '../_components/RtParts';
import CalculadoraRT from './CalculadoraRT';

const URL = `${RT_BASE}/calculadora`;

export const metadata: Metadata = {
  title: { absolute: 'Calculadora da Reforma Tributária: CBS e IBS 2026 e 2027' },
  description: 'Quanto de CBS e IBS incide sobre um valor? Calcule em 2026 e 2027, com reduções e memória de cálculo. Grátis, sem cadastro.',
  alternates: { canonical: URL },
  openGraph: { title: 'Calculadora da Reforma Tributária (CBS e IBS)', url: URL, type: 'website' },
};

const faq = [
  { q: 'A CBS já é cobrada?', a: 'Em 2026 a CBS de 0,9% e o IBS de 0,1% são um teste: aparecem na nota fiscal e são compensados com PIS e Cofins. A cobrança de verdade da CBS começa em 2027, quando PIS e Cofins deixam de existir.' },
  { q: 'Qual alíquota de CBS a calculadora usa em 2027?', a: 'Ela já vem com 11,3%, a alíquota de referência calculada pelo TCU. O Senado tem até 15/12/2026 para fixar o número; se não votar, vale o cálculo do TCU. Em 2027 a lei aplica essa referência menos 0,1 ponto percentual.' },
  { q: 'MEI paga CBS e IBS por essa conta?', a: 'Não. O MEI continua pagando pelo DAS, com valores fixos. Esta calculadora mostra a conta do regime regular, usado por empresas fora do Simples.' },
  { q: 'Quem está no Simples Nacional usa essa conta?', a: 'Em regra, não. A empresa do Simples paga dentro do DAS. A conta desta página vale para quem apura CBS e IBS pelo regime regular.' },
  { q: 'O resultado é o valor exato que vou pagar?', a: 'Não. É uma estimativa: não considera créditos das compras, regimes específicos nem o redutor social do aluguel. Para decisões da sua empresa, consulte um contador.' },
];

const appJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Calculadora da Reforma Tributária (CBS e IBS)',
  url: URL,
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web',
  inLanguage: 'pt-BR',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
};

export default function Page() {
  return (
    <main className="page-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-10">
        <div className="max-w-3xl">
          <RtHero
            crumb="Calculadora"
            titulo="Calculadora da Reforma Tributária: CBS e IBS"
            intro="Informe o valor da venda ou do serviço e veja quanto de CBS e IBS incide em 2026 e em 2027, com a conta escrita passo a passo."
            semCta
          />
        </div>

        <CalculadoraRT />

        <AdSlot slot={ADSENSE_SLOTS.toolAfterContent} />

        <article className="max-w-3xl space-y-8 text-stone-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">Como usar a calculadora em 3 passos</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Digite o valor</strong> da venda ou do serviço sem os tributos novos. Se você cobra R$ 1.000 pelo serviço, digite 1.000.</li>
              <li><strong>Escolha o ano e o tipo de operação.</strong> A maioria dos casos é &quot;Padrão&quot;. Use as reduções só se a sua atividade estiver na lista da lei.</li>
              <li><strong>Confira a memória de cálculo</strong> e, se quiser, copie o resultado ou baixe em PDF para mostrar ao cliente ou ao contador.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">O que muda entre 2026 e 2027</h2>
            <p>
              <strong>2026 é o ano de teste.</strong> As notas fiscais passam a mostrar CBS de 0,9% e IBS de 0,1%, mas esses
              valores são compensados com PIS e Cofins. Na prática, o teste serve para empresas e governo ajustarem os sistemas.
            </p>
            <p className="mt-3">
              <strong>Em 2027 a CBS passa a ser cobrada de verdade</strong> e PIS e Cofins acabam. A lei manda usar a alíquota de
              referência menos 0,1 ponto percentual em 2027 e 2028. O IBS continua em teste, com 0,05% para o estado e 0,05% para
              o município. ICMS e ISS seguem normais até 2028 e só começam a cair em 2029.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">Exemplo resolvido: serviço de R$ 1.000 em 2027</h2>
            <p>Usando a referência de 11,3% calculada pelo TCU e uma operação padrão:</p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5">
              <li>Alíquota da CBS em 2027: 11,3% − 0,1 ponto = <strong>11,2%</strong></li>
              <li>CBS: R$ 1.000 × 11,2% = <strong>R$ 112,00</strong></li>
              <li>IBS estadual: R$ 1.000 × 0,05% = <strong>R$ 0,50</strong></li>
              <li>IBS municipal: R$ 1.000 × 0,05% = <strong>R$ 0,50</strong></li>
              <li>Total de tributos novos: <strong>R$ 113,00</strong>; preço final: <strong>R$ 1.113,00</strong></li>
            </ul>
            <p className="mt-3">
              Se o Senado fixar outro número, basta trocar o campo 4. A conta é sempre &quot;por fora&quot;: o tributo é somado ao
              valor, e não embutido nele.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">Quais operações têm redução</h2>
            <p>A LC 214/2025 prevê alíquotas menores para alguns setores. A calculadora tem as principais:</p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5">
              <li><strong>Redução de 60%:</strong> setores como serviços de saúde e educação listados na lei.</li>
              <li><strong>Redução de 30%:</strong> algumas profissões intelectuais regulamentadas.</li>
              <li><strong>Alíquota zero:</strong> itens como os da Cesta Básica Nacional.</li>
              <li><strong>Locação de imóveis (redução de 70%):</strong> aluguel, cessão onerosa e arrendamento. No aluguel residencial existe ainda um redutor social de R$ 600 por imóvel, que esta calculadora não aplica.</li>
            </ul>
            <p className="mt-3">Cada redução tem uma lista fechada na lei. Na dúvida, confirme com o seu contador antes de usar.</p>
          </section>
        </article>

        <div className="max-w-3xl">
          <RtFaq faq={faq} />
          <RtRodape atual="/reforma-tributaria/calculadora" />
        </div>
      </div>
    </main>
  );
}
