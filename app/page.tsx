import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* --- HERO SECTION (Topo) --- */}
      <section className="bg-slate-900 text-white pt-20 pb-24 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <i className="fa-solid fa-file-invoice text-[200px] absolute -top-10 -left-10 text-white transform -rotate-12"></i>
           <i className="fa-solid fa-print text-[200px] absolute -bottom-10 -right-10 text-white transform rotate-12"></i>
        </div>
        
        <div className="container mx-auto relative z-10 max-w-4xl">
          <div className="inline-block bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1 mb-6 animate-fade-in-down">
            <span className="text-blue-300 text-sm font-bold tracking-wide uppercase">⚡ 100% Grátis e Ilimitado</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Crie Documentos e Recibos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Profissionais</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Gerador automático de recibos, contratos de aluguel, relatórios MEI e muito mais. 
            Sem cadastro, sem login, direto no seu navegador.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link href="/ferramentas" className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-blue-900/50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
              <i className="fa-solid fa-screwdriver-wrench"></i> Ver Todas as Ferramentas
            </Link>
            <Link href="/gerar/recibo-pro" className="w-full md:w-auto bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl border border-white/20 transition-all backdrop-blur-sm flex items-center justify-center gap-3">
              <i className="fa-solid fa-receipt"></i> Novo Recibo 2.0
            </Link>
          </div>
        </div>
      </section>

      {/* --- DESTAQUES RÁPIDOS (Cards) --- */}
      <section className="py-16 container mx-auto px-4 -mt-12 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Relatório MEI */}
          <Link href="/ferramentas/mei-relatorio" className="bg-white p-6 rounded-2xl shadow-xl border-b-4 border-blue-600 hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-2xl mb-4 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-chart-line"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Relatório MEI</h3>
            <p className="text-slate-500 text-sm">Obrigatório mensalmente. Preencha e baixe o PDF oficial.</p>
          </Link>

          {/* Card 2: Calculadora Trabalhista */}
          <Link href="/ferramentas/calculadora-rescisao" className="bg-white p-6 rounded-2xl shadow-xl border-b-4 border-green-600 hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-2xl mb-4 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-calculator"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Rescisão CLT</h3>
            <p className="text-slate-500 text-sm">Calcule acerto trabalhista, férias e décimo terceiro.</p>
          </Link>

          {/* Card 3: Contrato de Aluguel */}
          <Link href="/ferramentas/contrato-completo" className="bg-white p-6 rounded-2xl shadow-xl border-b-4 border-indigo-600 hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 text-2xl mb-4 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-file-contract"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Contrato de Aluguel</h3>
            <p className="text-slate-500 text-sm">Modelo completo com vistoria e cláusulas de multa.</p>
          </Link>

          {/* Card 4: Recibo Profissional */}
          <Link href="/gerar/recibo-pro" className="bg-white p-6 rounded-2xl shadow-xl border-b-4 border-purple-600 hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-4 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-receipt"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Recibo Profissional</h3>
            <p className="text-slate-500 text-sm">Com logo, assinatura e parcelamento.</p>
          </Link>

           {/* Card 5: Recibo de Veículo */}
          <Link href="/gerar/venda_veiculo" className="bg-white p-6 rounded-2xl shadow-xl border-b-4 border-red-600 hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 text-2xl mb-4 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-car"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Recibo de Veículo</h3>
            <p className="text-slate-500 text-sm">Compra e venda para carro e moto.</p>
          </Link>

          {/* Card 6: Central do Cidadão */}
          <Link href="/ferramentas/prefeitura" className="bg-white p-6 rounded-2xl shadow-xl border-b-4 border-cyan-600 hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-600 text-2xl mb-4 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-building-columns"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Central do Cidadão</h3>
            <p className="text-slate-500 text-sm">Requerimentos de IPTU, Multas e Zeladoria.</p>
          </Link>

        </div>
      </section>

      {/* --- CAIXA DE IDEIAS (MENOR E MAIS DISCRETA) --- */}
      <section className="py-12 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="md:text-left">
                <h2 className="text-2xl font-bold text-white drop-shadow-sm mb-2 flex items-center justify-center md:justify-start gap-2">
                    <i className="fa-regular fa-lightbulb"></i> Não encontrou o que precisava?
                </h2>
                <p className="text-white/90 text-sm font-medium">
                    Digite abaixo qual documento ou ferramenta você gostaria de ver aqui.
                </p>
            </div>

            {/* Formulário Conectado ao E-mail via FormSubmit */}
            <form 
                action="https://formsubmit.co/viacertasf@gmail.com" 
                method="POST" 
                className="bg-white p-1 rounded-xl shadow-lg flex flex-grow max-w-md w-full"
            >
                <input type="hidden" name="_subject" value="Nova Ideia para o Site!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://recibonahora.com.br/ferramentas" />
                <input type="hidden" name="_template" value="table" />

                <input 
                type="text" 
                name="sugestao" 
                placeholder="Ex: Recibo de Diarista..." 
                required
                className="flex-grow p-3 rounded-l-xl text-slate-800 outline-none placeholder-gray-400 text-sm"
                />
                <button 
                type="submit" 
                className="bg-slate-900 text-white font-bold py-3 px-6 rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 whitespace-nowrap text-sm"
                >
                <i className="fa-solid fa-paper-plane"></i> Enviar
                </button>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}
