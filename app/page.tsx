import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* --- HERO SECTION (Topo chamativo) --- */}
      <section className="bg-blue-600 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Gerador de Documentos e Recibos <br/>
            <span className="text-blue-200">Simples, Grátis e Seguro.</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Crie recibos, orçamentos, contratos e procurações em PDF prontos para imprimir. 
            Sem cadastro e sem enrolação.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/ferramentas/recibo-simples" className="bg-white text-blue-700 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-blue-50 transition transform hover:scale-105">
              <i className="fa-solid fa-receipt mr-2"></i> Criar Recibo Agora
            </Link>
            <Link href="/ferramentas/orcamento" className="bg-blue-800 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-blue-900 transition transform hover:scale-105 border border-blue-500">
              <i className="fa-solid fa-file-invoice-dollar mr-2"></i> Fazer Orçamento
            </Link>
          </div>
        </div>
      </section>

      {/* --- CATEGORIA: MAIS POPULARES --- */}
      <section className="py-16 px-4 container mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2 border-l-4 border-blue-500 pl-4">
          <i className="fa-solid fa-fire text-orange-500"></i> Ferramentas Mais Usadas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* CARD: RECIBO SIMPLES */}
          <Link href="/ferramentas/recibo-simples" className="group">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition border border-gray-100 hover:border-blue-200 h-full">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition">
                <i className="fa-solid fa-receipt text-xl"></i>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-blue-600">Recibo Simples</h3>
              <p className="text-sm text-gray-500">Gere recibos de pagamento de serviços ou produtos. Cálculo automático.</p>
            </div>
          </Link>

          {/* CARD: ORÇAMENTO */}
          <Link href="/ferramentas/orcamento" className="group">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition border border-gray-100 hover:border-blue-200 h-full">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
                <i className="fa-solid fa-file-invoice-dollar text-xl"></i>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-blue-600">Orçamento Comercial</h3>
              <p className="text-sm text-gray-500">Crie orçamentos profissionais com tabela de itens e soma automática.</p>
            </div>
          </Link>

          {/* CARD: NOTA PROMISSÓRIA */}
          <Link href="/ferramentas/nota-promissoria" className="group">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition border border-gray-100 hover:border-blue-200 h-full">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 mb-4 group-hover:bg-yellow-600 group-hover:text-white transition">
                <i className="fa-solid fa-file-signature text-xl"></i>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-blue-600">Nota Promissória</h3>
              <p className="text-sm text-gray-500">Documento legal para oficializar dívidas e empréstimos entre pessoas.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* --- CATEGORIA: JURÍDICO & IMOBILIÁRIO --- */}
      <section className="py-10 px-4 container mx-auto max-w-6xl bg-white rounded-3xl shadow-sm border border-gray-100 mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2 border-l-4 border-purple-500 pl-4">
          <i className="fa-solid fa-scale-balanced text-purple-500"></i> Jurídico e Imóveis
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <Link href="/ferramentas/procuracao" className="block p-4 rounded-lg hover:bg-gray-50 transition border border-transparent hover:border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-purple-600"><i className="fa-solid fa-gavel"></i></span>
              <h4 className="font-bold text-gray-800">Procuração</h4>
            </div>
            <p className="text-xs text-gray-500">Modelos de plenos poderes e simples.</p>
          </Link>

          <Link href="/ferramentas/imobiliario" className="block p-4 rounded-lg hover:bg-gray-50 transition border border-transparent hover:border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-purple-600"><i className="fa-solid fa-house-user"></i></span>
              <h4 className="font-bold text-gray-800">Recibo de Aluguel</h4>
            </div>
            <p className="text-xs text-gray-500">Para locadores e inquilinos.</p>
          </Link>

          <Link href="/ferramentas/autorizacao-viagem" className="block p-4 rounded-lg hover:bg-gray-50 transition border border-transparent hover:border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-purple-600"><i className="fa-solid fa-plane"></i></span>
              <h4 className="font-bold text-gray-800">Autorização de Viagem</h4>
            </div>
            <p className="text-xs text-gray-500">Para menores de idade (nacional).</p>
          </Link>

          <Link href="/ferramentas/contrato-completo" className="block p-4 rounded-lg hover:bg-gray-50 transition border border-transparent hover:border-gray-200">
             <div className="flex items-center gap-3 mb-2">
              <span className="text-purple-600"><i className="fa-solid fa-file-contract"></i></span>
              <h4 className="font-bold text-gray-800">Contratos Diversos</h4>
            </div>
            <p className="text-xs text-gray-500">Serviços, compra e venda.</p>
          </Link>

        </div>
      </section>

      {/* --- SEO TEXT --- */}
      <section className="py-10 px-4 container mx-auto max-w-4xl text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Por que usar o ReciboNaHora?</h3>
        <p className="text-gray-600 leading-relaxed">
          Nossa plataforma foi desenvolvida para facilitar a vida de autônomos, pequenos empresários e cidadãos que precisam de documentos rápidos. 
          Diferente de outros sites, não pedimos seu e-mail e não armazenamos seus dados. Tudo é gerado no seu navegador com total privacidade.
        </p>
      </section>

    </main>
  );
}
