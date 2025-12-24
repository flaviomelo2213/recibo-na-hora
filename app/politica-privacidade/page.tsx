import React from 'react';

export default function PoliticaPrivacidade() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white p-8 rounded-2xl shadow-sm">
        <h1 className="text-3xl font-bold mb-6 text-slate-900">Política de Privacidade</h1>
        <p className="text-sm text-slate-500 mb-8">Última atualização: 24 de Dezembro de 2025</p>

        <div className="space-y-6 text-slate-700 leading-relaxed">
          <p>A sua privacidade é importante para nós. É política do <strong>ReciboNaHora</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site.</p>

          <h2 className="text-xl font-bold text-slate-900 mt-4">1. Dados Coletados</h2>
          <p>Não solicitamos informações pessoais como nome, e-mail ou telefone para o uso das ferramentas gratuitas. Todos os documentos são gerados localmente no seu navegador ("Client-Side"), o que significa que os dados que você digita nos formulários (nomes, valores, CPFs) <strong>NÃO são enviados para nossos servidores</strong> e são apagados assim que você fecha a página.</p>

          <h2 className="text-xl font-bold text-slate-900 mt-4">2. Anúncios (Google AdSense)</h2>
          <p>O ReciboNaHora exibe anúncios fornecidos pelo Google AdSense. O Google utiliza cookies para exibir anúncios com base nas suas visitas anteriores a este ou a outros websites.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>O uso de cookies de publicidade permite que o Google e seus parceiros exibam anúncios com base na sua navegação.</li>
            <li>Você pode desativar a publicidade personalizada acessando as Configurações de Anúncios do Google.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-4">3. Cookies</h2>
          <p>Utilizamos cookies apenas para fins de funcionalidade (como lembrar suas preferências de cor no site) e para as métricas de publicidade citadas acima.</p>

          <h2 className="text-xl font-bold text-slate-900 mt-4">4. Compromisso do Usuário</h2>
          <p>O usuário se compromete a fazer uso adequado dos conteúdos e informações que o ReciboNaHora oferece, não utilizando os geradores para fins ilegais ou fraudulentos.</p>
        </div>
      </div>
    </main>
  );
}
