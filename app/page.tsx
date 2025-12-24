import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* --- HERO SECTION (Topo) --- */}
      <section className="bg-slate-900 text-white py-12 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <i className="fa-solid fa-file-invoice text-[120px] absolute -top-10 -left-10 text-white transform -rotate-12"></i>
           <i className="fa-solid fa-scale-balanced text-[120px] absolute -bottom-10 -right-10 text-white transform rotate-12"></i>
        </div>
        
        <div className="container mx-auto relative z-10 max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
            Gerador de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Recibos e Documentos</span> Online Grátis
          </h1>
          <p className="text-slate-400 text-sm md:text-base mb-8 max-w-2xl mx-auto">
            A ferramenta mais completa do Brasil para Autônomos, MEI e Corretores. Crie recibos, contratos de aluguel e procurações em segundos.
          </p>
          
          {/* --- BOTÕES DE DESTAQUE --- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-2">
             <Link href="/gerar/recibo-pro" className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-xl shadow-lg flex flex-col items-center transition-all hover:-translate-y-1 group">
                <i className="fa-solid fa-receipt text-2xl mb-2 group-hover:scale-110 transition"></i>
                <span className="font-bold text-sm">Novo Recibo 2.0</span>
             </Link>
             <Link href="/ferramentas/contrato-completo" className="bg-indigo-600 hover:bg-indigo-500 text-white p-4 rounded-xl shadow-lg flex flex-col items-center transition-all hover:-translate-y-1 group">
                <i className="fa-solid fa-file-contract text-2xl mb-2 group-hover:scale-110 transition"></i>
                <span className="font-bold text-sm">Contrato Aluguel</span>
             </Link>
             <Link href="/ferramentas/autorizacao-viagem" className="bg-pink-600 hover:bg-pink-500 text-white p-4 rounded-xl shadow-lg flex flex-col items-center transition-all hover:-translate-y-1 group">
                <i className="fa-solid fa-child-reaching text-2xl mb-2 group-hover:scale-110 transition"></i>
                <span className="font-bold text-xs text-center">Autorização Viagem</span>
             </Link>
             <Link href="/ferramentas" className="bg-slate-700 hover:bg-slate-600 text-white p-4 rounded-xl shadow-lg flex flex-col items-center transition-all hover:-translate-y-1 group border border-slate-600">
                <i className="fa-solid fa-screwdriver-wrench text-2xl mb-2 group-hover:scale-110 transition"></i>
                <span className="font-bold text-sm">Ver + Ferramentas</span>
             </Link>
          </div>
        </div>
      </section>

      {/* --- ESTATÍSTICAS (PROVA SOCIAL) - Igual ao concorrente --- */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-gray-100">
                <div>
                    <span className="block text-3xl font-bold text-blue-600 mb-1">50k+</span>
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Documentos Gerados</span>
                </div>
                <div>
                    <span className="block text-3xl font-bold text-green-600 mb-1">100%</span>
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Gratuito</span>
                </div>
                <div>
                    <span className="block text-3xl font-bold text-purple-600 mb-1">24h</span>
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Disponível Online</span>
                </div>
                <div>
                    <span className="block text-3xl font-bold text-orange-600 mb-1">Zero</span>
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Cadastro Necessário</span>
                </div>
            </div>
        </div>
      </section>

      {/* --- FERRAMENTAS --- */}
      <section className="py-12 container mx-auto px-4 relative z-20">
        <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Ferramentas Mais Usadas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/ferramentas/mei-relatorio" className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-2xl mb-4"><i className="fa-solid fa-chart-line"></i></div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Relatório MEI</h3>
            <p className="text-slate-500 text-sm">Controle financeiro mensal obrigatório.</p>
          </Link>
          <Link href="/ferramentas/procuracao-profissional" className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 text-2xl mb-4"><i className="fa-solid fa-briefcase"></i></div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Procuração</h3>
            <p className="text-slate-500 text-sm">Modelo oficial para advogados e contadores.</p>
          </Link>
          <Link href="/ferramentas/calculadora-rescisao" className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-2xl mb-4"><i className="fa-solid fa-calculator"></i></div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Rescisão CLT</h3>
            <p className="text-slate-500 text-sm">Cálculo exato de acerto trabalhista.</p>
          </Link>
          <Link href="/gerar/venda_veiculo" className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 text-2xl mb-4"><i className="fa-solid fa-car"></i></div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Recibo Veículo</h3>
            <p className="text-slate-500 text-sm">Para compra e venda de carros e motos.</p>
          </Link>
        </div>
      </section>

      {/* --- CONTEÚDO SEO (PARA O GOOGLE LER) --- */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
            
            <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">O que é um Recibo Online?</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                    Um <strong>recibo online</strong> é um documento digital gerado automaticamente para comprovar o pagamento de um produto ou serviço. Ao contrário dos blocos de papel, o ReciboNaHora permite criar documentos profissionais em PDF, com cálculo automático, data e assinatura, garantindo muito mais credibilidade para o seu negócio.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    Nossa ferramenta é ideal para <strong>MEI, profissionais liberais, corretores de imóveis e autônomos</strong> que precisam de agilidade. Todos os documentos gerados seguem as normas brasileiras e possuem validade jurídica quando assinados pelas partes.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <i className="fa-solid fa-check text-green-500"></i> Por que usar o ReciboNaHora?
                    </h3>
                    <ul className="space-y-2 text-slate-600 text-sm">
                        <li>• <strong>Gratuito e Ilimitado:</strong> Gere quantos recibos quiser sem pagar nada.</li>
                        <li>• <strong>Sem Cadastro:</strong> Não pedimos seu e-mail ou dados pessoais.</li>
                        <li>• <strong>Seguro:</strong> Seus dados são processados no seu navegador e não ficam salvos.</li>
                        <li>• <strong>Profissional:</strong> Modelos aceitos por contadores e imobiliárias.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <i className="fa-solid fa-star text-yellow-500"></i> Ferramentas Populares
                    </h3>
                    <ul className="space-y-2 text-slate-600 text-sm">
                        <li>• <Link href="/gerar/recibo_aluguel" className="text-blue-600 hover:underline">Recibo de Aluguel</Link> para proprietários.</li>
                        <li>• <Link href="/ferramentas/mei-relatorio" className="text-blue-600 hover:underline">Relatório Mensal MEI</Link> para dia a dia.</li>
                        <li>• <Link href="/ferramentas/contrato-completo" className="text-blue-600 hover:underline">Contrato de Locação</Link> atualizado (Lei do Inquilinato).</li>
                        <li>• <Link href="/ferramentas/calculadora-rescisao" className="text-blue-600 hover:underline">Cálculo de Rescisão</Link> trabalhista.</li>
                    </ul>
                </div>
            </div>

        </div>
      </section>

      {/* --- CAIXA DE SUGESTÃO --- */}
      <section className="py-6 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center max-w-2xl">
            <p className="text-slate-500 text-sm mb-3">Não encontrou o modelo que queria? Peça abaixo:</p>
            <form action="https://formsubmit.co/viacertasf@gmail.com" method="POST" className="flex shadow-sm">
                <input type="hidden" name="_next" value="https://recibonahora.com.br" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="sugestao" placeholder="Ex: Contrato de Namoro..." required className="flex-grow p-3 rounded-l-lg border border-gray-300 outline-none text-sm" />
                <button type="submit" className="bg-slate-800 text-white px-6 rounded-r-lg text-sm font-bold hover:bg-slate-900">Enviar Pedido</button>
            </form>
        </div>
      </section>

    </main>
  );
}
