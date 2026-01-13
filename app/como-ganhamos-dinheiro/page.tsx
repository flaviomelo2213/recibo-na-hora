
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Como Ganhamos Dinheiro | ReciboNaHora",
  description: "Entenda como o ReciboNaHora se mantém gratuito. Nosso modelo de negócio é baseado em publicidade (Google AdSense) e parcerias, sem custos para você.",
  alternates: {
    canonical: "/como-ganhamos-dinheiro"
  }
};

export default function ComoGanhamosDinheiroPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Como Ganhamos Dinheiro (Transparência)</h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            O <strong>ReciboNaHora</strong> nasceu com o compromisso de ser uma ferramenta <strong>100% gratuita</strong> para o usuário final. Acreditamos que o acesso a documentos básicos do dia a dia deve ser simples e sem custos. Para viabilizar este projeto, cobrir os custos de desenvolvimento, hospedagem e manutenção, adotamos um modelo de negócio baseado em publicidade e parcerias.
          </p>

          <div className="mt-12 space-y-10 border-t border-slate-200 pt-10">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 text-center md:text-left">
                <i className="fa-solid fa-rectangle-ad text-5xl text-indigo-600 mb-4"></i>
                <h2 className="text-2xl font-bold text-slate-800">1. Publicidade (Google AdSense)</h2>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Nossa principal fonte de receita é a exibição de anúncios através do <strong>Google AdSense</strong>. Você verá banners e anúncios em diversas páginas do site. Esses anúncios são gerenciados pelo Google e selecionados com base no conteúdo da página e, possivelmente, no seu histórico de navegação (de acordo com suas preferências de privacidade no Google).
                </p>
                <p className="mt-4 text-md text-slate-600">
                  <strong>O que isso significa para você?</strong> A presença de anúncios não interfere na funcionalidade das nossas ferramentas e não gera nenhum custo. É uma forma de você nos "apoiar" simplesmente por utilizar o site.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 border-t border-slate-200 pt-10">
              <div className="md:w-1/3 text-center md:text-left">
                <i className="fa-solid fa-handshake-angle text-5xl text-indigo-600 mb-4"></i>
                <h2 className="text-2xl font-bold text-slate-800">2. Links de Parceiros e Afiliados</h2>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Em algumas páginas, podemos incluir links para produtos ou serviços de parceiros. Se você clicar nesses links e realizar uma compra ou cadastro, podemos receber uma pequena comissão. Isso é conhecido como marketing de afiliados.
                </p>
                <p className="mt-4 text-md text-slate-600">
                  <strong>Importante:</strong> Só recomendamos produtos e serviços que acreditamos serem úteis e de qualidade. O uso de um link de afiliado <strong>não altera o preço final</strong> para você. É mais uma forma de financiar nosso trabalho sem gerar custos para nossos usuários.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-slate-200 pt-10 text-center">
            <h2 className="text-2xl font-bold text-slate-800">Nosso Compromisso</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-slate-700">
              Nosso compromisso é com você. O modelo de monetização foi escolhido para garantir que o acesso às ferramentas permaneça gratuito e democrático. 
              Agradecemos por usar o ReciboNaHora e, com isso, nos ajudar a manter este projeto no ar!
            </p>
            <div className="mt-8">
              <Link href="/ferramentas" className="text-base font-semibold leading-7 text-indigo-700">
                Ver todas as ferramentas disponíveis <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
