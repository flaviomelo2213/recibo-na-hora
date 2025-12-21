'use client';

import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

export default function HubImobiliario() {
  const [categoria, setCategoria] = useState('condominio');
  const [tipoDoc, setTipoDoc] = useState('cobranca_condominio');
  
  const [dados, setDados] = useState({
    remetente: '', // Quem manda (Síndico, Proprietário)
    destinatario: '', // Quem recebe (Morador, Inquilino)
    imovel: '', // Unidade/Endereço
    valor: '',
    dataFato: '', // Data do barulho, da assembleia, etc.
    cidade: '',
    obs: ''
  });

  // --- BIBLIOTECA DE MODELOS (O Cérebro do Sistema) ---
  const modelos: any = {
    cobranca_condominio: {
      titulo: "Carta de Cobrança de Condomínio",
      corpo: (d: any) => `Prezado(a) Sr(a). ${d.destinatario},\n\nConsta em nossos registros a ausência de pagamento da taxa condominial referente à unidade ${d.imovel}, no valor de R$ ${d.valor}.\n\nSolicitamos a regularização da pendência no prazo de 48 horas para evitar medidas judiciais e protesto, conforme previsto na Convenção do Condomínio.\n\nCaso o pagamento já tenha sido efetuado, favor desconsiderar.`
    },
    advertencia_barulho: {
      titulo: "Advertência por Perturbação (Barulho)",
      corpo: (d: any) => `Prezado(a) Vizinho(a) da unidade ${d.imovel},\n\nRecebemos reclamações referentes a barulho excessivo vindo de sua unidade no dia ${d.dataFato}, infringindo o Regimento Interno (Lei do Silêncio).\n\nEsta é uma ADVERTÊNCIA FORMAL. A reincidência estará sujeita à aplicação de multa conforme nossa convenção.\n\nContamos com sua compreensão para manter a boa convivência.`
    },
    reajuste_aluguel: {
      titulo: "Aviso de Reajuste de Aluguel",
      corpo: (d: any) => `Prezado(a) Inquilino(a) ${d.destinatario},\n\nInformamos que, conforme contrato de locação do imóvel situado em ${d.imovel}, o valor do aluguel sofrerá reajuste anual.\n\nO novo valor será de R$ ${d.valor}, vigorando a partir do próximo vencimento.\n\nO reajuste baseia-se no índice pactuado em contrato.`
    },
    entrega_chaves: {
      titulo: "Recibo de Entrega de Chaves",
      corpo: (d: any) => `Eu, ${d.remetente}, proprietário/administrador, DECLARO que recebi de ${d.destinatario} as chaves do imóvel situado em ${d.imovel} nesta data.\n\nA entrega das chaves não exime o locatário de eventuais reparos apontados na Vistoria de Saída ou débitos pendentes de luz/água até a presente data.`
    },
    proposta_compra: {
      titulo: "Proposta Formal de Compra",
      corpo: (d: any) => `Ao Sr(a). Proprietário(a) ${d.destinatario},\n\nEu, ${d.remetente}, apresento proposta firme de compra para o imóvel localizado em ${d.imovel}.\n\nValor Ofertado: R$ ${d.valor}.\n\nEsta proposta tem validade de 5 dias úteis. Aguardo retorno para formalização do contrato de Compra e Venda.`
    }
  };

  const gerarPDF = () => {
    const doc = new jsPDF();
    const modelo = modelos[tipoDoc];
    const margem = 20;
    
    // Cabeçalho
    doc.setFont("times", "bold");
    doc.setFontSize(16);
    doc.text(modelo.titulo.toUpperCase(), 105, 20, { align: "center" });
    
    doc.setFontSize(12);
    doc.setFont("times", "normal");
    
    // Corpo do Texto
    const textoCompleto = modelo.corpo(dados);
    const linhas = doc.splitTextToSize(textoCompleto, 170);
    
    let y = 40;
    doc.text(`De: ${dados.remetente.toUpperCase()}`, margem, y);
    y += 7;
    doc.text(`Para: ${dados.destinatario.toUpperCase()}`, margem, y);
    y += 15;
    
    doc.line(margem, y, 190, y);
    y += 10;
    
    doc.text(linhas, margem, y);
    
    // Assinatura
    y += (linhas.length * 7) + 30;
    const dataHoje = new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
    
    doc.text(`${dados.cidade || 'Local'}, ${dataHoje}.`, margem, y);
    y += 25;
    
    doc.line(margem, y, 120, y);
    doc.text(dados.remetente.toUpperCase(), margem, y + 5);
    doc.setFontSize(10);
    doc.text("Assinatura do Remetente", margem, y + 10);

    // Rodapé
    doc.setFontSize(8);
    doc.setTextColor(100);
    doc.text("Gerado via ReciboNaHora.com.br - Ferramentas Imobiliárias", 105, 280, { align: "center" });
    doc.text("Via Certa Digital - CNPJ 27.779.948/0001-43", 105, 285, { align: "center" });

    doc.save(`${tipoDoc}.pdf`);
  };

  const handleChange = (e: any) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        
        {/* Topo */}
        <div className="bg-orange-600 text-white p-8 text-center">
          <h1 className="text-3xl font-bold mb-2 flex justify-center items-center gap-3">
            <i className="fa-solid fa-city"></i> Central Imobiliária
          </h1>
          <p className="text-orange-100">Gere cartas, comunicados e documentos para Condomínios e Aluguéis.</p>
        </div>

        <div className="flex flex-col md:flex-row">
          
          {/* Menu Lateral */}
          <div className="w-full md:w-1/4 bg-gray-50 border-r border-gray-200 p-4">
            <h3 className="font-bold text-gray-500 uppercase text-xs mb-4">Categorias</h3>
            <div className="space-y-2">
              <button onClick={() => setCategoria('condominio')} className={`w-full text-left p-3 rounded-lg flex items-center gap-2 ${categoria === 'condominio' ? 'bg-orange-100 text-orange-700 font-bold' : 'hover:bg-gray-100'}`}>
                <i className="fa-solid fa-building"></i> Condomínio
              </button>
              <button onClick={() => setCategoria('locacao')} className={`w-full text-left p-3 rounded-lg flex items-center gap-2 ${categoria === 'locacao' ? 'bg-orange-100 text-orange-700 font-bold' : 'hover:bg-gray-100'}`}>
                <i className="fa-solid fa-key"></i> Locação
              </button>
              <button onClick={() => setCategoria('venda')} className={`w-full text-left p-3 rounded-lg flex items-center gap-2 ${categoria === 'venda' ? 'bg-orange-100 text-orange-700 font-bold' : 'hover:bg-gray-100'}`}>
                <i className="fa-solid fa-handshake"></i> Compra e Venda
              </button>
            </div>
          </div>

          {/* Área Principal */}
          <div className="w-full md:w-3/4 p-8">
            
            {/* Seletor de Documento */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">Qual documento você precisa?</label>
              <select className="w-full p-3 border rounded-lg bg-white text-lg" onChange={(e) => setTipoDoc(e.target.value)}>
                {categoria === 'condominio' && (
                  <>
                    <option value="cobranca_condominio">Carta de Cobrança (Atraso)</option>
                    <option value="advertencia_barulho">Advertência / Multa por Barulho</option>
                  </>
                )}
                {categoria === 'locacao' && (
                  <>
                    <option value="reajuste_aluguel">Aviso de Reajuste de Aluguel</option>
                    <option value="entrega_chaves">Recibo de Entrega de Chaves</option>
                  </>
                )}
                {categoria === 'venda' && (
                  <>
                    <option value="proposta_compra">Proposta de Compra</option>
                  </>
                )}
              </select>
            </div>

            {/* Formulário Dinâmico */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <input name="remetente" placeholder="Quem Assina (Seu Nome/Cargo)" onChange={handleChange} className="p-3 border rounded-lg" />
              <input name="destinatario" placeholder="Para Quem (Nome do Morador/Inquilino)" onChange={handleChange} className="p-3 border rounded-lg" />
              <input name="imovel" placeholder="Endereço / Unidade do Imóvel" onChange={handleChange} className="p-3 border rounded-lg md:col-span-2" />
              
              {/* Campos que aparecem ou somem dependendo do documento */}
              {(tipoDoc === 'cobranca_condominio' || tipoDoc === 'reajuste_aluguel' || tipoDoc === 'proposta_compra') && (
                <input name="valor" placeholder="Valor (R$)" onChange={handleChange} className="p-3 border rounded-lg" />
              )}
              {(tipoDoc === 'advertencia_barulho') && (
                <input name="dataFato" type="date" onChange={handleChange} className="p-3 border rounded-lg" title="Data do Ocorrido" />
              )}
              
              <input name="cidade" placeholder="Cidade" onChange={handleChange} className="p-3 border rounded-lg" />
            </div>

            <button onClick={gerarPDF} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2">
              <i className="fa-solid fa-print"></i> Gerar Documento PDF
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
