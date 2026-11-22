
import type { Metadata } from 'next';
import ContratoLocacaoGenerator from './_components/ContratoLocacaoGenerator';
import SeoContentBlock from '@/components/SeoContentBlock';
import LegalDisclaimer from '@/components/LegalDisclaimer';
import { buildOpenGraph } from '@/lib/metadata';

const title = 'Contrato de Aluguel Grátis em PDF: Gerador Online Residencial e Comercial';
const description = 'Gerador de contrato de aluguel 100% grátis e sem cadastro: preencha online, escolha residencial ou comercial, a garantia e os encargos, e baixe o PDF pronto para imprimir e assinar.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/contrato-locacao'
  },
  openGraph: buildOpenGraph({ title, description, path: '/contrato-locacao' }),
};

const FAQ = [
  { q: 'O gerador de contrato de aluguel é grátis mesmo?', a: 'Sim. Você preenche, vê a prévia e baixa o PDF sem pagar nada e sem criar conta. O site é mantido por anúncios.' },
  { q: 'Como fazer um contrato de aluguel passo a passo?', a: 'Escolha residencial ou comercial, preencha os dados do locador e do inquilino, o endereço do imóvel, o prazo, o valor e o dia de vencimento. Depois marque quem paga IPTU, condomínio, água e luz, escolha a garantia e clique em baixar o PDF.' },
  { q: 'Como baixar o contrato de aluguel em PDF grátis?', a: 'Depois de preencher o formulário, use o botão de baixar PDF. O arquivo sai com várias páginas numeradas, espaço para rubrica e as assinaturas das partes e das testemunhas.' },
  { q: 'Posso imprimir um contrato de aluguel em branco?', a: 'Sim. Se preferir preencher à mão, use o modelo de contrato de aluguel simples para imprimir, que tem os campos em branco.' },
  { q: 'Tem modelo de contrato de aluguel em Word?', a: 'O gerador desta página entrega em PDF. Se quiser editar no Word, baixe o modelo de contrato de locação em Word editável.' },
  { q: 'Dá para fazer contrato de aluguel com água e luz inclusas?', a: 'Sim. Na parte de encargos, marque a opção de água e luz inclusas no aluguel e o contrato passa a dizer que essas contas ficam com o locador.' },
  { q: 'Qual a diferença entre contrato residencial e comercial?', a: 'O residencial é para moradia; o comercial informa a atividade da empresa e costuma ter prazo maior. Com 5 anos ou mais, o comercial pode garantir ao inquilino o direito de renovar o contrato (art. 51 da Lei 8.245/91).' },
  { q: 'O contrato de aluguel precisa ser registrado em cartório?', a: 'Não é obrigatório. Reconhecer as firmas das assinaturas dá mais segurança, e o registro no cartório de imóveis só é necessário em casos específicos, como para garantir a vigência se o imóvel for vendido.' },
];

export default function ContratoAluguelPage() {
  return (
    <div className="page-shell bg-slate-50 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="page-hero text-center mb-12 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Contrato de Aluguel Grátis: Residencial e Comercial
            </h1>
            <ul className="mt-5 flex flex-wrap justify-center gap-2 text-sm font-semibold text-emerald-800">
                {['100% grátis', 'Sem cadastro', 'Download do PDF grátis', 'Pronto para imprimir'].map((selo) => (
                    <li key={selo} className="rounded-full bg-emerald-50 px-3 py-1 ring-1 ring-emerald-200">✓ {selo}</li>
                ))}
            </ul>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Escolha entre locação residencial ou comercial e as cláusulas se ajustam sozinhas: prazo, encargos, garantia (caução, fiador ou seguro-fiança), reajuste, multas e cláusulas extras. Veja a prévia ao vivo e baixe o PDF grátis, pronto para imprimir e assinar. Não pedimos cadastro e os dados ficam só no seu navegador.
            </p>
            <p className="mt-3 text-sm text-slate-500">
                Prefere ver o texto antes ou imprimir em branco? Veja o{' '}
                <a href="/modelo/contrato-locacao" className="font-semibold underline">modelo de contrato de aluguel simples para imprimir</a>{' '}
                ou baixe o{' '}
                <a href="/modelo/contrato-locacao-word" className="font-semibold underline">modelo em Word editável</a>.
            </p>
        </header>

        <ContratoLocacaoGenerator />

        <SeoContentBlock
          title="Como Fazer um Contrato de Aluguel Válido e Seguro"
          content="O contrato de aluguel residencial, também chamado de contrato de locação, é o documento que formaliza a relação entre locador (proprietário) e locatário (inquilino). Para ser válido, o contrato de aluguel deve conter a qualificação completa das partes com nome, CPF, RG e endereço, descrição detalhada do imóvel locado incluindo endereço completo, valor do aluguel por extenso e em números, dia de vencimento, prazo de duração da locação (geralmente 12, 24 ou 30 meses), forma de reajuste anual (geralmente pelo IGP-M ou IPCA), responsabilidades sobre condomínio, IPTU, água, luz e manutenções. É fundamental estabelecer a garantia locatícia (caução, fiador ou seguro-fiança) para proteger o locador contra inadimplência. O contrato de aluguel deve especificar as condições de rescisão antecipada, multas por atraso no pagamento (geralmente 10% mais juros de 1% ao mês) e cláusulas sobre animais de estimação, reformas e uso do imóvel. Para preencher este modelo gratuito de contrato de aluguel, insira os dados completos do locador e locatário, endereço do imóvel, valor mensal, dia de vencimento e prazo. Este gerador cria um contrato de locação profissional em PDF pronto para assinatura, economizando custos com imobiliárias e advogados. Embora não seja obrigatório reconhecimento de firma, recomenda-se que as assinaturas sejam reconhecidas em cartório para maior segurança jurídica. Um bom contrato de aluguel previne conflitos, garante os direitos de ambas as partes e facilita a resolução de disputas judiciais caso necessário."
        />

        <section className="max-w-4xl mx-auto mt-12 space-y-6 prose prose-lg prose-slate">
            <h2 className="text-2xl font-bold text-slate-900">Contrato residencial ou comercial: o que muda</h2>
            <ul className="space-y-2">
                <li><strong>Destinação:</strong> no residencial, o imóvel serve de moradia; no comercial, o contrato informa a atividade que será exercida e proíbe mudar de uso sem autorização.</li>
                <li><strong>Prazo e renovação:</strong> no residencial, contratos de 30 meses ou mais facilitam a retomada do imóvel no fim do prazo (art. 46); no comercial, contratos escritos de 5 anos ou mais podem dar direito à ação renovatória (art. 51).</li>
                <li><strong>Encargos:</strong> no comercial, alvarás, licenças e seguro contra incêndio costumam ficar com o inquilino.</li>
                <li><strong>Devolução antecipada:</strong> nos dois casos a multa é proporcional ao tempo que falta; no residencial, o inquilino transferido pelo empregador fica dispensado da multa (art. 4º).</li>
            </ul>
            <h2 className="text-2xl font-bold text-slate-900">Principais Cláusulas do Contrato de Locação</h2>
            <ul className="space-y-2">
                <li><strong>Qualificação das Partes:</strong> Nome completo, CPF, RG e endereço do locador e locatário</li>
                <li><strong>Descrição do Imóvel:</strong> Endereço completo e características do imóvel</li>
                <li><strong>Valor e Pagamento:</strong> Aluguel mensal, vencimento e forma de pagamento</li>
                <li><strong>Prazo:</strong> Duração da locação e condições de renovação</li>
                <li><strong>Garantia:</strong> Tipo de garantia (caução, fiador ou seguro-fiança)</li>
                <li><strong>Responsabilidades:</strong> Quem paga condomínio, IPTU e despesas</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900">Perguntas frequentes sobre o contrato de aluguel grátis</h2>
            <div className="space-y-4 not-prose">
                {FAQ.map((item) => (
                    <details key={item.q} className="rounded-xl border border-slate-200 bg-white p-4">
                        <summary className="cursor-pointer font-semibold text-slate-900">{item.q}</summary>
                        <p className="mt-2 text-slate-600 leading-relaxed">{item.a}</p>
                    </details>
                ))}
            </div>
        </section>

        <LegalDisclaimer showProcuracaoWarning={false} />
      </div>
    </div>
  );
}
