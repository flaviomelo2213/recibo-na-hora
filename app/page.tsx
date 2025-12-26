import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-700">
      
      {/* --- HERO SECTION (Topo chamativo) --- */}
      <section className="bg-stone-900 text-stone-50 py-24 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Gerador de Documentos e Recibos <br/>
            <span className="text-amber-400">Simples, Grátis e Confiável.</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 mb-12 max-w-3xl mx-auto">
            Crie recibos, orçamentos, contratos e procurações em PDF com validade jurídica. 
            Sem cadastro e 100% privado.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/ferramentas/recibo-simples" className="bg-amber-500 text-stone-900 font-bold py-4 px-8 rounded-lg shadow-lg shadow-amber-500/20 hover:bg-amber-600 transition transform hover:scale-105">
              <i className="fa-solid fa-receipt mr-2"></i> Gerar Recibo Simples
            </Link>
            <Link href="/ferramentas" className="bg-stone-800 text-stone-100 font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-stone-700 transition transform hover:scale-105 border border-stone-600">
              <i className="fa-solid fa-folder-open mr-2"></i> Ver Todas Ferramentas
            </Link>
          </div>
        </div>
      </section>

      {/* --- CATEGORIA: MAIS POPULARES --- */}
      <section className="py-20 px-4 container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-stone-800 mb-10 flex items-center gap-3 border-l-4 border-amber-600 pl-4">
          <i className="fa-solid fa-star-of-life text-amber-600"></i> Nossas Ferramentas Principais
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* CARD: RECIBO SIMPLES */}
          <Link href="/ferramentas/recibo-simples" className="group">
            <div className="bg-white p-7 rounded-xl shadow-md shadow-stone-200/60 hover:shadow-lg transition border border-stone-200 hover:border-amber-300 hover:-translate-y-1 h-full">
              <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center text-amber-700 mb-5 group-hover:bg-amber-600 group-hover:text-white transition">
                <i className="fa-solid fa-receipt text-2xl"></i>
              </div>
              <h3 className="font-bold text-lg mb-2 text-stone-800 group-hover:text-amber-700">Gerador de Recibo Simples</h3>
              <p className="text-sm text-stone-500">A ferramenta ideal para comprovar pagamentos de serviços, vendas ou aluguéis informais.</p>
            </div>
          </Link>

          {/* CARD: RECIBO PIX */}
          <Link href="/ferramentas/recibo-pix" className="group">
            <div className="bg-white p-7 rounded-xl shadow-md shadow-stone-200/60 hover:shadow-lg transition border border-stone-200 hover:border-amber-300 hover:-translate-y-1 h-full">
              <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center text-amber-700 mb-5 group-hover:bg-amber-600 group-hover:text-white transition">
                <i className="fa-solid fa-qrcode text-2xl"></i>
              </div>
              <h3 className="font-bold text-lg mb-2 text-stone-800 group-hover:text-amber-700">Recibo PIX com QR Code</h3>
              <p className="text-sm text-stone-500">Crie um comprovante de pagamento moderno com um QR Code para validação instantânea.</p>
            </div>
          </Link>

          {/* CARD: ORÇAMENTO */}
          <Link href="/ferramentas/orcamento" className="group">
            <div className="bg-white p-7 rounded-xl shadow-md shadow-stone-200/60 hover:shadow-lg transition border border-stone-200 hover:border-amber-300 hover:-translate-y-1 h-full">
              <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center text-amber-700 mb-5 group-hover:bg-amber-600 group-hover:text-white transition">
                <i className="fa-solid fa-file-invoice-dollar text-2xl"></i>
              </div>
              <h3 className="font-bold text-lg mb-2 text-stone-800 group-hover:text-amber-700">Gerador de Orçamento</h3>
              <p className="text-sm text-stone-500">Elabore orçamentos profissionais e detalhados para seus clientes com cálculo automático.</p>
            </div>
          </Link>

        </div>
      </section>

      {/* --- CATEGORIA: JURÍDICO & IMOBILIÁRIO --- */}
      <section className="py-20 px-4 container mx-auto max-w-6xl">
         <h2 className="text-3xl font-bold text-stone-800 mb-10 flex items-center gap-3 border-l-4 border-amber-600 pl-4">
          <i className="fa-solid fa-scale-balanced text-amber-600"></i> Documentos Jurídicos e Contratos
        </h2>

        <div className="bg-white p-8 rounded-2xl shadow-xl shadow-stone-200/70 border border-stone-200 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          <Link href="/ferramentas/procuracao" className="block p-4 rounded-lg hover:bg-stone-50 transition border border-transparent hover:border-stone-200">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-amber-700 text-xl"><i className="fa-solid fa-gavel fa-fw"></i></span>
              <h4 className="font-bold text-stone-800">Procuração</h4>
            </div>
            <p className="text-xs text-stone-500 pl-10">Modelos simples e de plenos poderes.</p>
          </Link>

          <Link href="/contrato-locacao" className="block p-4 rounded-lg hover:bg-stone-50 transition border border-transparent hover:border-stone-200">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-amber-700 text-xl"><i className="fa-solid fa-file-signature fa-fw"></i></span>
              <h4 className="font-bold text-stone-800">Contrato de Aluguel</h4>
            </div>
            <p className="text-xs text-stone-500 pl-10">Para locação residencial simplificada.</p>
          </Link>
          
          <Link href="/ferramentas/nota-promissoria" className="block p-4 rounded-lg hover:bg-stone-50 transition border border-transparent hover:border-stone-200">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-amber-700 text-xl"><i className="fa-solid fa-money-check-dollar fa-fw"></i></span>
              <h4 className="font-bold text-stone-800">Nota Promissória</h4>
            </div>
            <p className="text-xs text-stone-500 pl-10">Formalize promessas de pagamento.</p>
          </Link>

          <Link href="/ferramentas/imobiliario" className="block p-4 rounded-lg hover:bg-stone-50 transition border border-transparent hover:border-stone-200">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-amber-700 text-xl"><i className="fa-solid fa-house-user fa-fw"></i></span>
              <h4 className="font-bold text-stone-800">Recibo de Aluguel</h4>
            </div>
            <p className="text-xs text-stone-500 pl-10">Comprovante mensal para inquilinos.</p>
          </Link>

          <Link href="/ferramentas/autorizacao-viagem" className="block p-4 rounded-lg hover:bg-stone-50 transition border border-transparent hover:border-stone-200">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-amber-700 text-xl"><i className="fa-solid fa-plane-departure fa-fw"></i></span>
              <h4 className="font-bold text-stone-800">Autorização de Viagem</h4>
            </div>
            <p className="text-xs text-stone-500 pl-10">Para menores viajando sozinhos.</p>
          </Link>

           <Link href="/gerar/declaracao-residencia" className="block p-4 rounded-lg hover:bg-stone-50 transition border border-transparent hover:border-stone-200">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-amber-700 text-xl"><i className="fa-solid fa-location-dot fa-fw"></i></span>
              <h4 className="font-bold text-stone-800">Declaração de Residência</h4>
            </div>
            <p className="text-xs text-stone-500 pl-10">Para comprovação de endereço.</p>
          </Link>
          
           <Link href="/gerar/venda-veiculo" className="block p-4 rounded-lg hover:bg-stone-50 transition border border-transparent hover:border-stone-200">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-amber-700 text-xl"><i className="fa-solid fa-car-side fa-fw"></i></span>
              <h4 className="font-bold text-stone-800">Recibo de Venda de Veículo</h4>
            </div>
            <p className="text-xs text-stone-500 pl-10">Transfira a posse com segurança.</p>
          </Link>
          
          <Link href="/ferramentas/contrato-completo" className="block p-4 rounded-lg hover:bg-stone-50 transition border border-transparent hover:border-stone-200">
             <div className="flex items-center gap-4 mb-2">
              <span className="text-amber-700 text-xl"><i className="fa-solid fa-file-alt fa-fw"></i></span>
              <h4 className="font-bold text-stone-800">Outros Contratos</h4>
            </div>
            <p className="text-xs text-stone-500 pl-10">Serviços, compra e venda e mais.</p>
          </Link>

        </div>
      </section>

      {/* --- SEO TEXT --- */}
      <section className="py-20 px-4 container mx-auto max-w-4xl text-center">
        <h3 className="text-2xl font-bold text-stone-800 mb-4">Por que usar o ReciboNaHora?</h3>
        <p className="text-stone-600 leading-relaxed max-w-3xl mx-auto">
          Nossa plataforma foi desenvolvida para agilizar a vida de autônomos, pequenos empresários e cidadãos que precisam de documentos e recibos para o dia a dia. 
          Diferente de outros sites, o nosso foco é a sua privacidade: não pedimos seu e-mail e não salvamos nenhum dado que você digita. 
          Tudo é gerado diretamente no seu navegador, garantindo total segurança e confidencialidade.
        </p>
      </section>

    </main>
  );
}
