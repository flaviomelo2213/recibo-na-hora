'use client';

import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

export default function ContratoLocacao() {
  // Estado do formulário
  const [dados, setDados] = useState({
    locadorNome: '',
    locadorCPF: '',
    locatarioNome: '',
    locatarioCPF: '',
    enderecoImovel: '',
    valorAluguel: '',
    dataInicio: '',
    prazoMeses: '12',
    diaVencimento: '05',
    cidade: '',
    dataAssinatura: new Date().toISOString().split('T')[0]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const gerarPDF = () => {
    const doc = new jsPDF();
    const margemEsq = 20;
    let linha = 20;

    // Configuração de Fonte
    doc.setFont("times", "bold");
    doc.setFontSize(18);
    doc.text("CONTRATO DE LOCAÇÃO RESIDENCIAL", 105, linha, { align: "center" });
    
    linha += 20;
    doc.setFont("times", "normal");
    doc.setFontSize(12);

    // Texto Legal (Lógica de quebra de linha automática)
    const texto = [
      `PELO PRESENTE INSTRUMENTO PARTICULAR, as partes abaixo qualificadas têm, entre si, justo e contratado o presente CONTRATO DE LOCAÇÃO RESIDENCIAL, mediante as cláusulas e condições seguintes:`,
      `\n`,
      `1. LOCADOR: ${dados.locadorNome.toUpperCase()}, portador(a) do CPF nº ${dados.locadorCPF}.`,
      `2. LOCATÁRIO: ${dados.locatarioNome.toUpperCase()}, portador(a) do CPF nº ${dados.locatarioCPF}.`,
      `\n`,
      `3. DO OBJETO: O presente contrato tem como objeto a locação do imóvel residencial situado à: ${dados.enderecoImovel.toUpperCase()}.`,
      `\n`,
      `4. DO PRAZO: A locação terá a duração de ${dados.prazoMeses} meses, iniciando-se em ${dados.dataInicio.split('-').reverse().join('/')}.`,
      `\n`,
      `5. DO VALOR: O aluguel mensal será de R$ ${dados.valorAluguel}, devendo ser pago até o dia ${dados.diaVencimento} de cada mês.`,
      `\n`,
      `6. DAS DISPOSIÇÕES GERAIS: O LOCATÁRIO obriga-se a manter o imóvel em perfeitas condições (em termos práticos: manutenção do dia a dia como limpeza, troca de lâmpadas, pequenos reparos e uso adequado), sendo vedada a sublocação sem anuência expressa do LOCADOR.`,
      `\n`,
      `E, por estarem assim justos e contratados, assinam o presente em 02 (duas) vias de igual teor.`,
    ];

    // Escrever o texto no PDF
    texto.forEach((paragrafo) => {
        const linhasDoParagrafo = doc.splitTextToSize(paragrafo, 170); // Quebra automática na largura
        doc.text(linhasDoParagrafo, margemEsq, linha);
        linha += (linhasDoParagrafo.length * 7) + 5; // Calcula espaço para próxima linha
    });

    linha += 20;
    doc.text(`${dados.cidade}, ${dados.dataAssinatura.split('-').reverse().join('/')}`, margemEsq, linha);

    // Assinaturas
    linha += 40;
    doc.line(margemEsq, linha, 90, linha);
    doc.line(110, linha, 190, linha);
    
    linha += 5;
    doc.setFontSize(10);
    doc.text("LOCADOR", 55, linha, { align: "center" });
    doc.text("LOCATÁRIO", 150, linha, { align: "center" });

    doc.save("contrato-locacao.pdf");
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      
      {/* Título da Página */}
      <div className="mb-8 text-center border-b pb-6">
        <h2 className="text-3xl font-bold text-slate-800"><i className="fa-solid fa-house text-blue-600 mr-2"></i>Contrato de Locação</h2>
        <p className="text-gray-500 mt-2">Preencha os dados para gerar seu contrato residencial automaticamente.</p>
      </div>

      {/* Formulário Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Bloco 1: Pessoas */}
        <div className="space-y-4">
          <h3 className="font-bold text-blue-900 border-b pb-2">1. Quem são as partes?</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Locador (Dono)</label>
            <input name="locadorNome" onChange={handleChange} type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="Ex: João da Silva" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">CPF do Locador</label>
            <input name="locadorCPF" onChange={handleChange} type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="000.000.000-00" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Locatário (Inquilino)</label>
            <input name="locatarioNome" onChange={handleChange} type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="Ex: Maria Oliveira" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">CPF do Locatário</label>
            <input name="locatarioCPF" onChange={handleChange} type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="000.000.000-00" />
          </div>
        </div>

        {/* Bloco 2: Imóvel e Valores */}
        <div className="space-y-4">
          <h3 className="font-bold text-blue-900 border-b pb-2">2. Dados do Aluguel</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Endereço Completo do Imóvel</label>
            <input name="enderecoImovel" onChange={handleChange} type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="Rua, Número, Bairro, Cidade-UF" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Valor Mensal (R$)</label>
              <input name="valorAluguel" onChange={handleChange} type="text" className="w-full p-3 border rounded-lg" placeholder="1.500,00" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Dia Vencimento</label>
              <select name="diaVencimento" onChange={handleChange} className="w-full p-3 border rounded-lg bg-white">
                <option value="05">Dia 05</option>
                <option value="10">Dia 10</option>
                <option value="15">Dia 15</option>
                <option value="30">Dia 30</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Início do Contrato</label>
              <input name="dataInicio" onChange={handleChange} type="date" className="w-full p-3 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Duração (Meses)</label>
              <input name="prazoMeses" onChange={handleChange} type="number" defaultValue="12" className="w-full p-3 border rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Bloco 3: Finalização */}
      <div className="mt-8 pt-6 border-t">
        <div className="grid grid-cols-2 gap-6 mb-6">
           <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cidade da Assinatura</label>
              <input name="cidade" onChange={handleChange} type="text" className="w-full p-3 border rounded-lg" placeholder="Ex: São Paulo" />
           </div>
           <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Data da Assinatura</label>
              <input name="dataAssinatura" onChange={handleChange} type="date" value={dados.dataAssinatura} className="w-full p-3 border rounded-lg" />
           </div>
        </div>

        <button 
          onClick={gerarPDF}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
        >
          <i className="fa-solid fa-file-pdf text-2xl"></i>
          Baixar Contrato em PDF
        </button>
      </div>

    </div>
  );
}
