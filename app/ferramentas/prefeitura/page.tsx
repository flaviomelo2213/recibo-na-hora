'use client';

import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

export default function CentralCidadao() {
  const [servico, setServico] = useState('geral');
  const [dados, setDados] = useState({
    nome: '', cpf: '', endereco: '', cidade: '',
    destinatario: 'Ao Ilmo. Sr. Secretário Municipal',
    assunto: '',
    texto: '',
    // Específicos Multa
    placa: '', autoInfracao: '', modeloCarro: '',
    // Específicos Zeladoria
    localProblema: '', tipoProblema: 'Buraco na via'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const gerarPDF = () => {
    const doc = new jsPDF();
    const margem = 20;
    let y = 30;

    // Cabeçalho Formal
    doc.setFont("times", "bold");
    doc.setFontSize(14);
    
    if (servico === 'multa') {
        doc.text("ILMO. SR. DIRETOR DA JARI / AUTORIDADE DE TRÂNSITO", margem, y);
    } else {
        doc.text(dados.destinatario.toUpperCase(), margem, y);
    }
    
    y += 20;
    doc.setFontSize(12);
    doc.setFont("times", "normal");

    // Qualificação (Quem é você)
    const qualificacao = `Eu, ${dados.nome.toUpperCase()}, inscrito(a) no CPF nº ${dados.cpf}, residente e domiciliado(a) em ${dados.endereco}, venho respeitosamente à presença de Vossa Senhoria requerer:`;
    const linhasQualificacao = doc.splitTextToSize(qualificacao, 170);
    doc.text(linhasQualificacao, margem, y);
    y += (linhasQualificacao.length * 7) + 10;

    // O Pedido (Corpo do Texto)
    doc.setFont("times", "bold");
    if (servico === 'multa') doc.text(`DEFESA PRÉVIA - AUTO DE INFRAÇÃO Nº ${dados.autoInfracao}`, margem, y);
    else if (servico === 'zeladoria') doc.text(`SOLICITAÇÃO DE SERVIÇO PÚBLICO: ${dados.tipoProblema.toUpperCase()}`, margem, y);
    else doc.text(`ASSUNTO: ${dados.assunto.toUpperCase()}`, margem, y);
    
    y += 10;
    doc.setFont("times", "normal");
    
    let textoPrincipal = "";
    
    if (servico === 'multa') {
        textoPrincipal = `Venho apresentar defesa contra a autuação do veículo ${dados.modeloCarro}, Placa ${dados.placa}. \n\nALEGAÇÕES DE DEFESA:\n${dados.texto}\n\nDiante do exposto, requer o arquivamento do auto de infração por ser medida de justiça.`;
    } else if (servico === 'zeladoria') {
        textoPrincipal = `Solicito a execução de serviço de ${dados.tipoProblema} no seguinte local: ${dados.localProblema}.\n\nDetalhes da solicitação:\n${dados.texto}\n\nO pedido baseia-se no direito do cidadão à zeladoria urbana e segurança pública.`;
    } else {
        textoPrincipal = `${dados.texto}\n\nTermos em que,\nPede deferimento.`;
    }

    const linhasTexto = doc.splitTextToSize(textoPrincipal, 170);
    doc.text(linhasTexto, margem, y);

    // Data e Assinatura
    y = 240;
    const dataHoje = new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
    doc.text(`${dados.cidade || 'Local'}, ${dataHoje}.`, margem, y);
    
    y += 25;
    doc.line(margem, y, 120, y);
    doc.text(dados.nome.toUpperCase(), margem, y + 5);
    doc.setFontSize(10);
    doc.text(`CPF: ${dados.cpf}`, margem, y + 10);

    // Rodapé
    doc.setFontSize(8);
    doc.setTextColor(100);
    doc.text("Gerado gratuitamente via ReciboNaHora.com.br - Ferramenta de Cidadania", 105, 285, { align: "center" });

    doc.save(`requerimento-${servico}.pdf`);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        
        {/* Topo Inspirado no Gov.br */}
        <div className="bg-[#003399] text-white p-8 text-center">
          <h1 className="text-3xl font-bold mb-2 flex justify-center items-center gap-3">
            <i className="fa-solid fa-building-columns"></i> Central do Cidadão
          </h1>
          <p className="text-blue-100">Gere requerimentos oficiais e exerça seus direitos com facilidade.</p>
        </div>

        {/* Abas de Navegação */}
        <div className="flex border-b border-gray-200 bg-gray-50">
          {[
            { id: 'geral', label: 'Requerimento Geral', icon: 'fa-file-lines' },
            { id: 'multa', label: 'Recurso de Multa', icon: 'fa-car-burst' },
            { id: 'zeladoria', label: 'Zeladoria / Poda', icon: 'fa-tree' },
          ].map(aba => (
            <button
              key={aba.id}
              onClick={() => setServico(aba.id)}
              className={`flex-1 py-4 text-sm md:text-base font-semibold transition-all flex items-center justify-center gap-2
                ${servico === aba.id ? 'bg-white text-blue-800 border-t-4 border-blue-800 shadow-sm' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <i className={`fa-solid ${aba.icon}`}></i> {aba.label}
            </button>
          ))}
        </div>

        <div className="p-8">
          
          {/* Dados Pessoais (Comum a todos) */}
          <h3 className="font-bold text-slate-800 border-b pb-2 mb-4">1. Seus Dados</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <input name="nome" placeholder="Seu Nome Completo" onChange={handleChange} className="p-3 border rounded-lg" />
            <input name="cpf" placeholder="Seu CPF" onChange={handleChange} className="p-3 border rounded-lg" />
            <input name="endereco" placeholder="Seu Endereço Completo" onChange={handleChange} className="p-3 border rounded-lg md:col-span-2" />
            <input name="cidade" placeholder="Sua Cidade / Estado" onChange={handleChange} className="p-3 border rounded-lg" />
          </div>

          {/* Campos Dinâmicos (Mudam conforme a aba) */}
          <h3 className="font-bold text-slate-800 border-b pb-2 mb-4">2. Detalhes do Pedido</h3>
          
          {servico === 'geral' && (
            <div className="space-y-4 animate-fade-in">
              <input name="destinatario" placeholder="Para quem? (Ex: Ao Sr. Secretário de Finanças)" onChange={handleChange} className="w-full p-3 border rounded-lg" />
              <input name="assunto" placeholder="Assunto (Ex: Isenção de IPTU, Cópia de Processo)" onChange={handleChange} className="w-full p-3 border rounded-lg" />
              <textarea name="texto" rows={6} placeholder="Descreva aqui o que você solicita e os motivos..." onChange={handleChange} className="w-full p-3 border rounded-lg"></textarea>
            </div>
          )}

          {servico === 'multa' && (
            <div className="space-y-4 animate-fade-in">
              <div className="grid md:grid-cols-3 gap-4">
                <input name="placa" placeholder="Placa do Veículo" onChange={handleChange} className="p-3 border rounded-lg" />
                <input name="modeloCarro" placeholder="Modelo do Veículo" onChange={handleChange} className="p-3 border rounded-lg" />
                <input name="autoInfracao" placeholder="Nº do Auto de Infração" onChange={handleChange} className="p-3 border rounded-lg" />
              </div>
              <textarea name="texto" rows={6} placeholder="Escreva aqui sua defesa (Ex: O sinal estava encoberto pela árvore...)" onChange={handleChange} className="w-full p-3 border rounded-lg"></textarea>
            </div>
          )}

          {servico === 'zeladoria' && (
            <div className="space-y-4 animate-fade-in">
              <select name="tipoProblema" onChange={handleChange} className="w-full p-3 border rounded-lg bg-white">
                <option value="Tapa-Buraco">Solicitar Tapa-Buraco</option>
                <option value="Poda de Árvore">Solicitar Poda de Árvore</option>
                <option value="Troca de Lâmpada">Iluminação Pública Queimada</option>
                <option value="Limpeza de Bueiro">Limpeza de Bueiro/Boca de Lobo</option>
                <option value="Remoção de Entulho">Remoção de Entulho</option>
              </select>
              <input name="localProblema" placeholder="Onde é o problema? (Rua, Número, Ponto de Referência)" onChange={handleChange} className="w-full p-3 border rounded-lg" />
              <textarea name="texto" rows={4} placeholder="Detalhes adicionais (Ex: A árvore está encostando na fiação...)" onChange={handleChange} className="w-full p-3 border rounded-lg"></textarea>
            </div>
          )}

          <button onClick={gerarPDF} className="w-full mt-8 bg-[#003399] hover:bg-blue-800 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-3">
            <i className="fa-solid fa-print"></i> Gerar Requerimento Oficial
          </button>

        </div>
      </div>
    </div>
  );
}
