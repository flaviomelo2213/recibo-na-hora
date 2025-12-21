'use client';

import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

export default function ContratoCompleto() {
  const [passo, setPasso] = useState(1);
  const [dados, setDados] = useState({
    // Locador
    locadorNome: '', locadorCPF: '', locadorCivil: 'Casado(a)', locadorProfissao: '', locadorEndereco: '',
    // Locatário
    locatarioNome: '', locatarioCPF: '', locatarioCivil: 'Solteiro(a)', locatarioProfissao: '',
    // Imóvel
    enderecoImovel: '', finalidade: 'Residencial',
    // Valores
    valorAluguel: '', diaPagamento: '05', prazoMeses: '12', inicioContrato: '',
    // Garantia
    tipoGarantia: 'Caução (3 meses)', garantiaDetalhe: '' 
  });

  const handleChange = (e: any) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const gerarPDF = () => {
    const doc = new jsPDF();
    const margem = 20;
    let y = 20;
    const larguraTexto = 170;

    // Função auxiliar para adicionar texto e quebrar linha
    const addTexto = (texto: string, negrito = false) => {
      doc.setFont("times", negrito ? "bold" : "normal");
      const linhas = doc.splitTextToSize(texto, larguraTexto);
      
      // Verifica se vai estourar a página
      if (y + (linhas.length * 7) > 280) {
        doc.addPage();
        y = 20;
      }
      
      doc.text(linhas, margem, y);
      y += (linhas.length * 7) + 5;
    };

    // TÍTULO
    doc.setFontSize(14);
    doc.setFont("times", "bold");
    doc.text("CONTRATO DE LOCAÇÃO DE IMÓVEL RESIDENCIAL", 105, y, { align: "center" });
    y += 15;
    doc.setFontSize(11);

    // 1. PARTES
    addTexto("1. IDENTIFICAÇÃO DAS PARTES", true);
    addTexto(`LOCADOR(A): ${dados.locadorNome.toUpperCase()}, nacionalidade brasileira, estado civil ${dados.locadorCivil}, profissão ${dados.locadorProfissao}, inscrito(a) no CPF sob o nº ${dados.locadorCPF}, residente e domiciliado(a) em ${dados.locadorEndereco}.`);
    addTexto(`LOCATÁRIO(A): ${dados.locatarioNome.toUpperCase()}, nacionalidade brasileira, estado civil ${dados.locatarioCivil}, profissão ${dados.locatarioProfissao}, inscrito(a) no CPF sob o nº ${dados.locatarioCPF}.`);

    // 2. OBJETO
    addTexto("2. DO OBJETO", true);
    addTexto(`O presente contrato tem como objeto a locação do imóvel situado à ${dados.enderecoImovel.toUpperCase()}, para fins exclusivamente ${dados.finalidade.toUpperCase()}, sendo vedada a sublocação ou empréstimo do imóvel sem prévia autorização por escrito do LOCADOR.`);

    // 3. PRAZO E VALOR
    addTexto("3. DO PRAZO E DO VALOR", true);
    addTexto(`O prazo de locação é de ${dados.prazoMeses} meses, iniciando-se em ${dados.inicioContrato.split('-').reverse().join('/')}.`);
    addTexto(`O valor mensal do aluguel é de R$ ${dados.valorAluguel}, devendo ser pago até o dia ${dados.diaPagamento} de cada mês. O atraso no pagamento implicará em multa de 10% sobre o valor do débito, mais juros de 1% ao mês e correção monetária.`);

    // 4. GARANTIA
    addTexto("4. DA GARANTIA LOCATÍCIA", true);
    addTexto(`Como garantia das obrigações assumidas neste contrato, fica estabelecido: ${dados.tipoGarantia}. ${dados.garantiaDetalhe}`);

    // 5. DEVERES
    addTexto("5. DOS DEVERES E DA RESCISÃO", true);
    addTexto(`O LOCATÁRIO obriga-se a manter o imóvel em perfeitas condições de higiene e limpeza. A rescisão antecipada do contrato por qualquer das partes implicará no pagamento de multa equivalente a 3 (três) meses de aluguel, proporcional ao tempo restante do contrato (Lei 8.245/91).`);

    // ASSINATURAS
    y += 10;
    if (y > 250) { doc.addPage(); y = 20; }
    
    addTexto(`E, por estarem assim justos e contratados, assinam o presente instrumento em 02 (duas) vias de igual teor.`);
    
    y += 20;
    doc.text("________________________________________________", margem, y);
    doc.text("LOCADOR(A)", margem, y + 5);
    
    y += 25;
    doc.text("________________________________________________", margem, y);
    doc.text("LOCATÁRIO(A)", margem, y + 5);

    y += 25;
    doc.text("________________________________________________", margem, y);
    doc.text("TESTEMUNHA 1", margem, y + 5);

    // Rodapé
    doc.setFontSize(8);
    doc.setTextColor(100);
    doc.text("Gerado por ReciboNaHora.com.br - Via Certa Digital", 105, 290, { align: "center" });

    doc.save("contrato-locacao-completo.pdf");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        
        <div className="bg-slate-800 text-white p-6 text-center">
          <h1 className="text-2xl font-bold">Contrato de Locação Profissional</h1>
          <p className="text-slate-300 text-sm">Preencha os dados para gerar um contrato completo (Lei do Inquilinato).</p>
        </div>

        <div className="p-8">
          
          {/* Passo 1: Partes */}
          {passo === 1 && (
            <div className="animate-fade-in">
              <h3 className="text-lg font-bold text-blue-600 mb-4 border-b pb-2">1. Quem está alugando? (Locador e Locatário)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input name="locadorNome" placeholder="Nome do Dono (Locador)" onChange={handleChange} className="p-3 border rounded" />
                <input name="locadorCPF" placeholder="CPF do Dono" onChange={handleChange} className="p-3 border rounded" />
                <input name="locadorEndereco" placeholder="Endereço do Dono" onChange={handleChange} className="p-3 border rounded md:col-span-2" />
                
                <input name="locatarioNome" placeholder="Nome do Inquilino" onChange={handleChange} className="p-3 border rounded" />
                <input name="locatarioCPF" placeholder="CPF do Inquilino" onChange={handleChange} className="p-3 border rounded" />
              </div>
              <button onClick={() => setPasso(2)} className="mt-6 w-full bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700">Próximo: O Imóvel</button>
            </div>
          )}

          {/* Passo 2: Imóvel e Valores */}
          {passo === 2 && (
            <div className="animate-fade-in">
              <h3 className="text-lg font-bold text-blue-600 mb-4 border-b pb-2">2. Sobre o Imóvel e Valores</h3>
              <div className="space-y-4">
                <input name="enderecoImovel" placeholder="Endereço Completo do Imóvel Alugado" onChange={handleChange} className="w-full p-3 border rounded" />
                <div className="grid grid-cols-2 gap-4">
                  <input name="valorAluguel" placeholder="Valor do Aluguel (R$)" onChange={handleChange} className="p-3 border rounded" />
                  <input name="diaPagamento" placeholder="Dia do Pagamento (Ex: 05)" onChange={handleChange} className="p-3 border rounded" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-500">Início do Contrato</label>
                    <input type="date" name="inicioContrato" onChange={handleChange} className="w-full p-3 border rounded" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500">Duração (Meses)</label>
                    <input type="number" name="prazoMeses" defaultValue="12" onChange={handleChange} className="w-full p-3 border rounded" />
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <button onClick={() => setPasso(1)} className="flex-1 bg-gray-200 text-gray-700 py-3 rounded font-bold">Voltar</button>
                <button onClick={() => setPasso(3)} className="flex-1 bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700">Próximo: Garantia</button>
              </div>
            </div>
          )}

          {/* Passo 3: Garantia e Finalização */}
          {passo === 3 && (
            <div className="animate-fade-in">
              <h3 className="text-lg font-bold text-blue-600 mb-4 border-b pb-2">3. Garantia do Contrato</h3>
              <div className="space-y-4">
                <label className="block text-sm font-bold text-gray-700">Qual a garantia?</label>
                <select name="tipoGarantia" onChange={handleChange} className="w-full p-3 border rounded bg-white">
                  <option value="Caução (Depósito de 3 meses)">Caução (Dinheiro/Depósito)</option>
                  <option value="Fiador">Fiador</option>
                  <option value="Seguro Fiança">Seguro Fiança</option>
                  <option value="Sem Garantia">Sem Garantia (Pagamento antecipado)</option>
                </select>
                <input name="garantiaDetalhe" placeholder="Detalhes (Ex: Depósito de R$ 3.000,00 ou Nome do Fiador)" onChange={handleChange} className="w-full p-3 border rounded" />
              </div>
              
              <div className="flex gap-4 mt-8">
                <button onClick={() => setPasso(2)} className="flex-1 bg-gray-200 text-gray-700 py-3 rounded font-bold">Voltar</button>
                <button onClick={gerarPDF} className="flex-1 bg-green-600 text-white py-3 rounded font-bold hover:bg-green-700 flex justify-center items-center gap-2">
                  <i className="fa-solid fa-file-contract"></i> Baixar Contrato PDF
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
