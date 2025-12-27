import Link from "next/link";

// Ícones para a seção "Como Funciona", poderiam ser componentes mais elaborados
const Step = ({ icon, title, description }) => (
  <div className="text-center px-4">
    <div className="inline-block bg-blue-100 text-blue-600 rounded-full p-4 mb-4">
      <i className={`fa-solid ${icon} text-2xl`}></i>
    </div>
    <h3 className="font-bold text-lg text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default function Home() {
  return (
    // Fundo geral mais claro e moderno
    <main className="bg-gray-50 text-gray-800">
      
      {/* --- NOVA SEÇÃO HERO --- */}
      <section className="bg-white text-center py-20 md:py-28 px-4 border-b border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-5 tracking-tight">
            Gerador de Documentos Online
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Crie, visualize e baixe recibos, contratos e outros documentos em PDF. Rápido, seguro e totalmente gratuito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ferramentas/recibo-simples" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
              Começar a Criar Agora
            </Link>
            <Link href="/ferramentas" className="bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-300 transition-colors">
              Ver Todos os Modelos
            </Link>
          </div>
        </div>
      </section>

      {/* --- NOVA SEÇÃO "COMO FUNCIONA" --- */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Simples como 1, 2, 3</h2>
            <p className="text-gray-600 mt-2">Nosso processo é desenhado para ser rápido e intuitivo.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Step 
              icon="fa-keyboard"
              title="1. Preencha os Dados"
              description="Selecione um modelo e complete os campos do formulário com as informações necessárias."
            />
            <Step 
              icon="fa-eye"
              title="2. Visualize em Tempo Real"
              description="Veja o documento ser formatado ao vivo, exatamente como ele ficará no PDF final."
            />
            <Step 
              icon="fa-file-arrow-down"
              title="3. Baixe seu PDF"
              description="Gere e baixe seu documento em PDF com um único clique, pronto para usar."
            />
          </div>
        </div>
      </section>

      {/* --- FERRAMENTAS PRINCIPAIS (REDESENHADO) --- */}
      <section className="bg-white py-20 px-4 border-t border-b border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Nossas Ferramentas Populares</h2>
            <p className="text-gray-600 mt-2">Comece com um dos nossos modelos mais usados pela comunidade.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CARD: RECIBO SIMPLES */}
            <ToolCard 
              href="/ferramentas/recibo-simples"
              icon="fa-receipt"
              title="Gerador de Recibo Simples"
              description="A ferramenta ideal para comprovar pagamentos de serviços, vendas ou aluguéis informais."
            />
            {/* CARD: EM BREVE */}
            <div className="block group">
              <div className="bg-white p-7 rounded-xl shadow-md border border-gray-200 h-full flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 mb-5">
                  <i className="fa-solid fa-qrcode text-2xl"></i>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-500">Recibo PIX em breve</h3>
                <p className="text-sm text-gray-400">Estamos trabalhando para trazer esta ferramenta de volta em breve.</p>
              </div>
            </div>
            {/* CARD: ORÇAMENTO */}
            <ToolCard 
              href="/ferramentas/orcamento"
              icon="fa-file-invoice-dollar"
              title="Gerador de Orçamento"
              description="Elabore orçamentos profissionais e detalhados para seus clientes com cálculo automático."
            />
          </div>
        </div>
      </section>

       {/* --- SEO TEXT (Mantido por relevância) --- */}
      <section className="py-20 px-4 container mx-auto max-w-4xl text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Por que usar o ReciboNaHora?</h3>
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Nossa plataforma foi desenvolvida para agilizar a vida de autônomos, pequenos empresários e cidadãos que precisam de documentos e recibos para o dia a dia. 
          Diferente de outros sites, o nosso foco é a sua privacidade: não pedimos seu e-mail e não salvamos nenhum dado que você digita. 
          Tudo é gerado diretamente no seu navegador, garantindo total segurança e confidencialidade.
        </p>
      </section>
    </main>
  );
}

// Componente auxiliar para os cards de ferramentas
const ToolCard = ({ href, icon, title, description }) => (
  <Link href={href} className="block group">
    <div className="bg-white p-7 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200 hover:border-blue-300 hover:-translate-y-1 h-full">
      <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-5 transition-colors group-hover:bg-blue-600 group-hover:text-white">
        <i className={`fa-solid ${icon} text-2xl`}></i>
      </div>
      <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-blue-700">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </Link>
);