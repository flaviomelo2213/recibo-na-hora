import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* --- HERO SECTION (Topo Menor e Mais Direto) --- */}
      <section className="bg-slate-900 text-white py-12 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <i className="fa-solid fa-file-invoice text-[120px] absolute -top-10 -left-10 text-white transform -rotate-12"></i>
           <i className="fa-solid fa-scale-balanced text-[120px] absolute -bottom-10 -right-10 text-white transform rotate-12"></i>
        </div>
        
        <div className="container mx-auto relative z-10 max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
            Documentos Jurídicos e <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Recibos Grátis</span>
          </h1>
          
          {/* --- 4 BOTÕES DE DESTAQUE (O que o povo mais procura) --- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-2">
             
             {/* Botão 1: Recibo Novo */}
             <Link href="/gerar/recibo-pro" className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-xl shadow-lg flex flex-col items-center transition-all hover:-translate-y-1 group">
                <i className="fa-solid fa-receipt text-2xl mb-2 group-hover:scale-110 transition"></i>
                <span className="font-bold text-sm">Novo Recibo 2.0</span>
             </Link>

             {/* Botão 2: Contrato Aluguel */}
             <Link href="/ferramentas/contrato-completo" className="bg-indigo-600 hover:bg-indigo-500 text-white p-4 rounded-xl shadow-lg flex flex-col items-center transition-all hover:-translate-y-1 group">
                <i className="fa-solid fa-file-contract text-2xl mb-2 group-hover:scale-110 transition"></i>
                <span className="font-bold text-sm">Contrato Aluguel</span>
             </Link>

             {/* Botão 3: Autorização Viagem (NOVO) */}
             <Link href="/ferramentas/autorizacao-viagem" className="bg-pink-600 hover:bg-pink-500 text-white p-4 rounded-xl shadow-lg flex flex-col items-center transition-all hover:-translate-y-1 group">
                <i className="fa-solid fa-child-reaching text-2xl mb-2 group-hover:scale-110 transition"></i>
                <span className="font-bold text-xs text-center">Autorização Viagem (Menor)</span>
             </Link>

             {/* Botão 4: Ver Tudo */}
             <Link href="/ferramentas" className="bg-slate-700 hover:bg-slate-600 text-white p-4 rounded-xl shadow-lg flex flex-col items-center transition-all hover:-translate-y-1 group border border-slate-600">
                <i className="fa-solid fa-screwdriver-wrench text-2xl mb-2 group-hover:scale-110 transition"></i>
                <span className="font-bold text-sm">Ver + Ferramentas</span>
             </Link>
          </div>
        </div>
      </section>

      {/* --- CARDS DE SERVIÇOS (Visíveis logo abaixo) --- */}
      <section className="py-10 container mx-auto px-4 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card: Relatório MEI */}
          <Link href="/ferramentas/mei-relatorio" className="bg-white p-6 rounded-2xl shadow-xl border-b-4 border-blue-600 hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-2xl mb-4 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-chart-line"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Relatório MEI</h3>
            <p className="text-slate-500 text-sm">Obrigatório mensalmente. Preencha e baixe o PDF.</p>
          </Link>

          {/* Card: Procuração (NOVO) */}
          <Link href="/ferramentas/procuracao-profissional" className="bg-white p-6 rounded-2xl shadow-xl border-b-4 border-slate-600 hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 text-2xl mb-4 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Procuração</h3>
            <p className="text-slate-500 text-sm">Para Advogados, Contadores e Engenheiros.</p>
          </Link>

          {/* Card: Rescisão */}
          <Link href="/ferramentas/calculadora-rescisao" className="bg-white p-6 rounded-2xl shadow-xl border-b-4 border-green-600 hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-2xl mb-4 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-calculator"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Rescisão CLT</h3>
            <p className="text-slate-500 text-sm">Cálculo trabalhista completo.</p>
          </Link>

           {/* Card: Veículo */}
          <Link href="/gerar/venda_veiculo" className="bg-white p-6 rounded-2xl shadow-xl border-b-4 border-red-600 hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 text-2xl mb-4 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-car"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Recibo Veículo</h3>
            <p className="text-slate-500 text-sm">Compra e venda para carro/moto.</p>
          </Link>

        </div>
      </section>

      {/* --- CAIXA DE SUGESTÃO PEQUENA --- */}
      <section className="py-6 bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-slate-600 text-sm font-medium">
               <i className="fa-regular fa-lightbulb text-yellow-500 mr-2"></i>
               Faltou algum documento? Peça aqui:
            </p>
            <form 
                action="https://formsubmit.co/viacertasf@gmail.com" 
                method="POST" 
                className="flex shadow-sm"
            >
                <input type="hidden" name="_next" value="https://recibonahora.com.br" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="sugestao" placeholder="Ex: Recibo de Diarista" required className="p-2 rounded-l-lg border border-gray-300 outline-none text-sm" />
                <button type="submit" className="bg-slate-800 text-white px-4 rounded-r-lg text-sm hover:bg-slate-900">Enviar</button>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}
