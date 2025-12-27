
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Como o ReciboNaHora Ganha Dinheiro | Transparência",
  description: "Entenda como monetizamos nossas ferramentas gratuitas através de publicidade (Google AdSense) e programas de afiliados, mantendo o serviço sem custo para você.",
  alternates: {
    canonical: "/como-ganhamos-dinheiro",
  },
};

const faqItems = [
    {
      question: "Usar um link de afiliado ou clicar em um anúncio custa mais caro para mim?",
      answer: "Não, de forma alguma. O preço de um produto ou serviço é exatamente o mesmo para você, independentemente de como chegou ao site do parceiro. A comissão é paga pela empresa parceira como um custo de marketing para eles. Ao usar nossos links, você nos ajuda a manter o site no ar sem gastar nada a mais por isso."
    },
    {
      question: "Vocês recomendam qualquer produto ou empresa?",
      answer: "Não. Nossa reputação é nosso maior ativo. Só recomendamos produtos e serviços que pesquisamos, confiamos e acreditamos que realmente agregam valor para profissionais autônomos, MEIs e pequenos empresários. A relevância para o nosso público é o critério número um."
    },
    {
      question: "Os anúncios e afiliados interferem na privacidade dos meus dados?",
      answer: "Não. Os dados que você preenche em nossas ferramentas (como recibos ou contratos) são processados inteiramente no seu navegador e nunca são enviados aos nossos servidores. A publicidade é gerenciada pelo Google, e os programas de afiliados apenas rastreiam o clique para atribuir a comissão, de acordo com nossa <a href='/politica-de-privacidade' class='text-amber-700 hover:underline'>Política de Privacidade</a>."
    },
    {
      question: "Por que vocês simplesmente não cobram pelas ferramentas?",
      answer: "Nossa missão é democratizar o acesso a ferramentas que simplificam a vida de quem está começando ou operando um pequeno negócio no Brasil. Acreditamos que a formalização e a organização não deveriam ter uma barreira de custo inicial. O modelo de monetização via publicidade e afiliados nos permite cumprir essa missão de forma sustentável."
    }
  ];

export default function ComoGanhamosDinheiroPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-20">
      {/* Cabeçalho */}
      <header className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-stone-800 mb-4 tracking-tight">
          Como o ReciboNaHora Ganha Dinheiro
        </h1>
        <p className="text-lg text-stone-600">
          Transparência é um valor fundamental para nós. Aqui, explicamos abertamente como nosso modelo de negócio funciona e como conseguimos manter nossas ferramentas 100% gratuitas para você.
        </p>
      </header>

      {/* Conteúdo Principal */}
      <div className="max-w-3xl mx-auto space-y-10 text-stone-700 leading-relaxed">

        <section>
          <h2 className="text-2xl font-bold text-stone-800 mb-4">Nossa Filosofia: Ferramentas Gratuitas para Todos</h2>
          <p>Desde o início, o objetivo do ReciboNaHora foi criar soluções simples e acessíveis para as dores do dia a dia de profissionais autônomos, freelancers, MEIs e pequenos empresários brasileiros. A burocracia e a gestão de documentos podem ser um grande obstáculo, e nossa missão é removê-lo, oferecendo geradores de recibos, contratos e orçamentos de forma gratuita e ilimitada.</p>
          <p className="mt-4">Para que este projeto seja sustentável, possa crescer e continuar oferecendo ainda mais recursos sem custo, precisamos cobrir nossas despesas operacionais. Isso inclui custos com servidores, desenvolvimento de novas ferramentas, design, criação de conteúdo e suporte. Para financiar tudo isso, adotamos um modelo de monetização baseado em publicidade e parcerias, cuidadosamente selecionadas para não atrapalhar sua experiência e, principalmente, não gerar nenhum custo adicional para você, nosso usuário.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-800 mb-4">Nossas Fontes de Receita</h2>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg border border-stone-200">
              <h3 className="text-xl font-semibold text-amber-800 mb-2">1. Publicidade contextual (Google AdSense)</h3>
              <p>Em algumas páginas do nosso site, você notará a presença de blocos de anúncios. Nós utilizamos a rede de publicidade do Google, conhecida como AdSense. Esses anúncios são, em sua maioria, contextuais, o que significa que o Google tenta exibir publicidade relevante com base no conteúdo da página que você está visitando.</p>
              <ul className="list-disc list-inside mt-4 space-y-2 pl-4">
                <li><b>Como funciona:</b> Ganhamos uma pequena quantia em dinheiro quando esses anúncios são exibidos (o que é chamado de 'impressões') ou, mais comumente, quando um usuário clica em um deles.</li>
                <li><b>Por que usamos:</b> É um modelo de negócio amplamente utilizado na internet, que financia a grande maioria dos blogs, portais de notícias e sites de conteúdo que você acessa gratuitamente.</li>
                <li><b>Sua privacidade:</b> É crucial entender que os dados que você insere em nossas ferramentas (nomes, valores, CPFs, etc.) <strong>nunca são lidos, armazenados em nossos servidores ou compartilhados</strong> com o Google ou qualquer outro anunciante. Todo o processamento dos documentos acontece localmente, no seu próprio navegador.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-stone-200">
              <h3 className="text-xl font-semibold text-amber-800 mb-2">2. Programas de Afiliados e Parcerias</h3>
              <p>Esta é nossa principal e mais importante fonte de receita. Firmamos parcerias com empresas que oferecem produtos e serviços de alta qualidade, que são complementares ao que oferecemos e que nós acreditamos que podem realmente ajudar você a profissionalizar e escalar seu negócio.</p>
              <p className="mt-2">Em nossa página de <Link href="/parcerias" className="text-amber-700 font-medium hover:underline">parcerias</Link>, você encontrará recomendações de ferramentas para assinatura eletrônica, contabilidade, emissão de notas fiscais, entre outras.</p>
              <ul className="list-disc list-inside mt-4 space-y-2 pl-4">
                <li><b>Como funciona:</b> Quando você clica em um desses links de afiliado e decide contratar o serviço, nós recebemos uma pequena comissão da empresa parceira.</li>
                <li><b>Custo para você:</b> <strong>Zero.</strong> O preço que você paga pelo serviço é exatamente o mesmo, com ou sem o nosso link. A comissão é uma verba de marketing que a empresa parceira nos paga por termos ajudado a levar um novo cliente para eles.</li>
                <li><b>Nosso critério:</b> Nossa reputação é nosso maior ativo. Só recomendamos serviços que já analisamos, confiamos e que estão alinhados às necessidades de autônomos e pequenos empreendedores. A confiança que você deposita em nós é mais valiosa do que qualquer comissão.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Disclosure */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mt-12">
            <h3 className="font-bold text-blue-800 text-lg mb-2">Nosso Compromisso com a Transparência e Privacidade</h3>
            <p className="text-sm text-blue-900 leading-relaxed">
                A sua confiança é o pilar do nosso trabalho. Ser transparente sobre como ganhamos dinheiro é uma obrigação. Ao usar nossos links de afiliados, você apoia diretamente o ReciboNaHora, permitindo-nos continuar a desenvolver e oferecer ferramentas gratuitas de alta qualidade.
            </p>
             <p className="text-sm text-blue-900 leading-relaxed mt-2">
                Em relação aos seus dados, a publicidade exibida pode usar cookies para personalização, uma prática padrão na web. Você pode gerenciar suas preferências e entender melhor como seus dados são usados lendo nossa <Link href="/politica-de-privacidade" className="font-semibold hover:underline">Política de Privacidade</Link>.
            </p>
        </div>

        {/* FAQ Section */}
        <section className="pt-12">
            <h2 className="text-3xl font-bold text-center text-stone-800 mb-8">
                Perguntas Frequentes
            </h2>
            <div className="max-w-3xl mx-auto">
                <div className="space-y-4">
                {faqItems.map((item, index) => (
                    <details key={index} className="group bg-white p-5 rounded-lg border shadow-sm">
                        <summary className="flex justify-between items-center font-semibold text-stone-800 cursor-pointer list-none">
                            <span>{item.question}</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <p className="text-stone-600 mt-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.answer }} />
                    </details>
                ))}
                </div>
            </div>
        </section>

      </div>
    </main>
  );
}
