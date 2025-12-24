import React from 'react';

export default function TermosUso() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white p-8 rounded-2xl shadow-sm">
        <h1 className="text-3xl font-bold mb-6 text-slate-900">Termos de Uso</h1>
        
        <div className="space-y-6 text-slate-700 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">1. Termos</h2>
          <p>Ao acessar o site <strong>ReciboNaHora</strong>, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p>

          <h2 className="text-xl font-bold text-slate-900 mt-4">2. Isenção de Responsabilidade</h2>
          <p>Os materiais no site da ReciboNaHora são fornecidos "como estão". O ReciboNaHora não oferece garantias, expressas ou implícitas, sobre a validade jurídica final dos documentos gerados, pois esta depende do preenchimento correto e da assinatura das partes envolvidas.</p>
          <p>O uso dos modelos (recibos, contratos, procurações) é de total responsabilidade do usuário. Recomendamos a revisão por um advogado para contratos complexos.</p>

          <h2 className="text-xl font-bold text-slate-900 mt-4">3. Precisão dos Materiais</h2>
          <p>Os materiais exibidos no site da ReciboNaHora podem incluir erros técnicos, tipográficos ou fotográficos. Não garantimos que qualquer material em seu site seja preciso, completo ou atual, embora nos esforcemos para manter os modelos atualizados com a legislação vigente (como a Lei do Inquilinato e o Novo Código Civil).</p>

          <h2 className="text-xl font-bold text-slate-900 mt-4">4. Modificações</h2>
          <p>O ReciboNaHora pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</p>
        </div>
      </div>
    </main>
  );
}
