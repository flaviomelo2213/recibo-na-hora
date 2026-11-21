import type { Metadata } from 'next';
import AdSlot from '@/components/ads/AdSlot';
import { ADSENSE_SLOTS } from '@/_config/adsense';
import { RT_BASE } from '@/_config/reformaTributaria';
import { RtHero, RtFaq, RtRodape } from '../_components/RtParts';

const URL = `${RT_BASE}/split-payment`;

export const metadata: Metadata = {
  title: { absolute: 'Split payment: o que é e como funciona' },
  description: 'O que é split payment? Entenda com um exemplo como o imposto é separado na hora do pagamento, quando começa e o que muda para quem vende.',
  alternates: { canonical: URL },
  openGraph: { title: 'Split payment: o que é e como funciona', url: URL, type: 'article' },
};

const faq = [
  { q: 'O split payment já está valendo?', a: 'Não. A Receita Federal prevê disponibilizar o sistema no segundo semestre de 2027, de forma opcional e só para vendas entre empresas.' },
  { q: 'Quando o split payment fica obrigatório?', a: 'Ainda não há data confirmada. A Receita trabalha com a obrigatoriedade nas vendas entre empresas a partir de 2028, mas diz que depende de bancos e meios de pagamento estarem prontos.' },
  { q: 'O consumidor vai pagar mais por causa do split payment?', a: 'Não. O split payment não cria imposto novo: só muda o momento e a forma de recolher a CBS e o IBS. Segundo a Receita, o consumidor final não deve perceber diferença.' },
  { q: 'Vale para Pix e cartão?', a: 'Na primeira fase, o split vale para operações entre empresas feitas por transferência, boleto e Pix. Cartões e vendas para pessoa física ficam para depois.' },
];

export default function Page() {
  return (
    <main className="page-shell">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
        <RtHero
          crumb="Split payment"
          titulo="Split payment: o que é e como funciona"
          intro="Split payment é a separação do imposto no momento do pagamento: a parte da CBS e do IBS vai direto para o governo, e o vendedor recebe o restante. Veja um exemplo e quando começa."
        />

        <article className="space-y-8 text-stone-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">Como funciona, com um exemplo</h2>
            <p>Hoje a empresa recebe o valor inteiro da venda e paga os impostos depois, na apuração do mês. Com o split payment:</p>
            <ol className="mt-3 list-decimal pl-5 space-y-1.5">
              <li>Uma empresa compra R$ 1.113 de outra: R$ 1.000 do produto e R$ 113 de CBS e IBS.</li>
              <li>Na hora do pagamento (Pix, boleto ou transferência), o sistema separa os R$ 113.</li>
              <li>Os R$ 113 vão direto para o governo; o vendedor recebe R$ 1.000.</li>
              <li>Quem comprou fica com o crédito garantido, porque o imposto já foi pago.</li>
            </ol>
            <p className="mt-3 text-sm text-stone-500">Valores ilustrativos, com a alíquota de 2027 usada na nossa calculadora.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">Quando começa</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>2026:</strong> testes internos, sem cobrança.</li>
              <li><strong>Segundo semestre de 2027:</strong> o sistema fica disponível de forma <strong>opcional</strong>, só entre empresas, por transferência, boleto e Pix.</li>
              <li><strong>Depois:</strong> a Receita trabalha com a obrigatoriedade entre empresas a partir de 2028, mas ainda não há data confirmada.</li>
              <li><strong>Mais adiante:</strong> ampliação para vendas a consumidores.</li>
            </ul>
          </section>

          <AdSlot slot={ADSENSE_SLOTS.articleMiddle} />

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">O que muda para quem vende</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Caixa:</strong> o dinheiro do imposto não passa mais pela conta da empresa. Quem usava esse valor como capital de giro até a data do pagamento precisa se planejar.</li>
              <li><strong>Sistemas:</strong> a nota fiscal e o pagamento precisam estar ligados, para o banco saber quanto separar.</li>
              <li><strong>Menos risco para o cliente:</strong> quem compra tem o crédito garantido mesmo se o fornecedor não pagar os impostos.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">O que não muda para quem compra</h2>
            <p>
              Para o consumidor, nada muda na hora de pagar: o preço é o mesmo e o pagamento é feito do jeito de sempre. O
              split payment não cria imposto novo; só muda <em>quando</em> e <em>como</em> a CBS e o IBS chegam ao governo.
            </p>
            <p className="mt-3">
              Quer saber quanto de CBS e IBS há num valor? Use a{' '}
              <a href="/reforma-tributaria/calculadora" className="text-amber-700 underline">calculadora da reforma tributária</a>.
            </p>
          </section>
        </article>

        <RtFaq faq={faq} />
        <RtRodape atual="/reforma-tributaria/split-payment" />
      </div>
    </main>
  );
}
