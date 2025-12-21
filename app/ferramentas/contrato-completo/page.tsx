'use client';

import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

export default function ContratoCompleto() {
  const [passo, setPasso] = useState(1);
  const [dados, setDados] = useState({
    // Locador
    locadorNome: '', locadorNacionalidade: 'Brasileiro(a)', locadorCivil: 'Casado(a)', locadorProfissao: '', locadorRG: '', locadorCPF: '', locadorEndereco: '',
    // Locatário
    locatarioNome: '', locatarioNacionalidade: 'Brasileiro(a)', locatarioCivil: 'Solteiro(a)', locatarioProfissao: '', locatarioRG: '', locatarioCPF: '',
    // Imóvel
    enderecoImovel: '', cidadeImovel: '', finalidade: 'Residencial',
    // Valores e Prazos
    valorAluguel: '', diaPagamento: '05', prazoMeses: '12', inicioContrato: '', indiceReajuste: 'IGPM',
    // Garantia
    tipoGarantia: 'Caução', garantiaDetalhe: 'Depósito de 3 meses de aluguel',
    // Extras
    clausulasEspeciais: '',
    testemunha1: '', testemunha2: ''
  });

  const handleChange = (e: any) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const gerarPDF = () => {
    const doc = new jsPDF();
    const margem = 20;
    const larguraTexto = 170;
    const alturaPagina = 280; // Margem de segurança inferior
    let y = 20;

    // --- FUNÇÃO INTELIGENTE DE QUEBRA DE PÁGINA ---
    const verificarPagina = (alturaNecessaria: number) => {
      if (y + alturaNecessaria > alturaPagina) {
        doc.addPage();
        y = 20; // Reseta o Y para o topo da nova página
      }
    };

    const addTitulo = (texto: string) => {
      verificarPagina(15);
      doc.setFont("times", "bold");
      doc.setFontSize(11);
      doc.text(texto.toUpperCase(), margem, y);
      y += 8;
    };

    const addParagrafo = (texto: string) => {
      doc.setFont("times", "normal");
      doc.setFontSize(11);
      const linhas = doc.splitTextToSize(texto, larguraTexto);
      const alturaBloco = (linhas.length * 5) + 5;
      
      verificarPagina(alturaBloco);
      
      doc.text(linhas, margem, y);
      y += alturaBloco;
    };

    // --- INÍCIO DO DOCUMENTO ---
    
    // Título Principal
    doc.setFont("times", "bold");
    doc.setFontSize(14);
    doc.text("CONTRATO DE LOCAÇÃO DE IMÓVEL URBANO", 105, y, { align: "center" });
    y += 15;

    // 1. Identificação
    addTitulo("1. DAS PARTES CONTRATANTES");
    addParagrafo(`LOCADOR(A): ${dados.locadorNome.toUpperCase()}, nacionalidade ${dados.locadorNacionalidade}, estado civil ${dados.locadorCivil}, profissão ${dados.locadorProfissao}, portador(a) do RG nº ${dados.locadorRG} e CPF nº ${dados.locadorCPF}, residente e domiciliado(a) em ${dados.locadorEndereco}.`);
    addParagrafo(`LOCATÁRIO(A): ${dados.locatarioNome.toUpperCase()}, nacionalidade ${dados.locatarioNacionalidade}, estado civil ${dados.locatarioCivil}, profissão ${dados.locatarioProfissao}, portador(a) do RG nº ${dados.locatarioRG} e CPF nº ${dados.locatarioCPF}.`);

    // 2. Objeto
    addTitulo("2. DO IMÓVEL OBJETO DA LOCAÇÃO");
    addParagrafo(`O presente contrato tem como objeto a locação do imóvel situado à: ${dados.enderecoImovel.toUpperCase()} - ${dados.cidadeImovel.toUpperCase()}. O imóvel destina-se exclusivamente para fins ${dados.finalidade.toUpperCase()}, sendo proibida a sublocação, cessão ou empréstimo, total ou parcial, sem prévia autorização por escrito do LOCADOR.`);

    // 3. Prazo
    addTitulo("3. DO PRAZO");
    const dataInicio = dados.inicioContrato ? dados.inicioContrato.split('-').reverse().join('/') : "___/___/___";
    addParagrafo(`O prazo de locação é de ${dados.prazoMeses} meses, iniciando-se em ${dataInicio} e terminando automaticamente ao fim do prazo, independentemente de notificação.`);

    // 4. Valor e Pagamento
    addTitulo("4. DO VALOR E PAGAMENTO");
    addParagrafo(`O aluguel mensal ajustado é de R$ ${dados.valorAluguel}. O pagamento deverá ser efetuado até o dia ${dados.diaPagamento} de cada mês subsequente ao vencido.`);
    addParagrafo(`PARÁGRAFO ÚNICO: O atraso no pagamento implicará em multa moratória de 10% (dez por cento) sobre o valor do débito, juros de 1% (um por cento) ao mês e correção monetária.`);

    // 5. Reajuste
    addTitulo("5. DO REAJUSTE");
    addParagrafo(`O valor do aluguel será reajustado anualmente com base na variação acumulada do índice ${dados.indiceReajuste} (ou outro oficial que venha a substituí-lo), visando preservar o valor real da moeda.`);

    // 6. Deveres
    addTitulo("6. DOS DEVERES E MANUTENÇÃO");
    addParagrafo(`O LOCATÁRIO declara receber o imóvel em perfeito estado de conservação e limpeza, obrigando-se a devolvê-lo nas mesmas condições, conforme Termo de Vistoria anexo. São de responsabilidade do LOCATÁRIO as despesas com água, luz, gás, condomínio e manutenção ordinária.`);

    // 7. Benfeitorias
    addTitulo("7. DAS BENFEITORIAS");
    addParagrafo(`Não poderão ser realizadas obras ou modificações no imóvel sem autorização prévia e por escrito do LOCADOR. As benfeitorias úteis ou necessárias, mesmo que autorizadas, serão incorporadas ao imóvel, não gerando direito de retenção ou indenização.`);

    // 8. Garantia
    addTitulo("8. DA GARANTIA LOCATÍCIA");
    addParagrafo(`Para garantir as obrigações deste contrato, optam as partes por: ${dados.tipoGarantia.toUpperCase()}.`);
    addParagrafo(`Detalhes da Garantia: ${dados.garantiaDetalhe}.`);

    // 9. Cláusulas Especiais (SEU DIFERENCIAL)
    if (dados.clausulasEspeciais) {
        addTitulo("9. CLÁUSULAS ESPECIAIS");
        addParagrafo(dados.clausulasEspeciais);
    }

    // 10. Rescisão
    addTitulo(dados.clausulasEspeciais ? "10. DA RESCISÃO E MULTA" : "9. DA RESCISÃO E MULTA");
    addParagrafo(`Fica estipulada a multa equivalente a 3 (três) meses de aluguel vigente na época da infração, na qual incorrerá a parte que infringir qualquer cláusula deste contrato, com a faculdade para a parte inocente de considerar rescindida a locação. A multa será paga proporcionalmente ao tempo restante do contrato (Art. 4º da Lei 8.245/91).`);

    // 11. Foro
    addTitulo(dados.clausulasEspeciais ? "11. DO FORO" : "10. DO FORO");
    addParagrafo(`As partes elegem o foro da comarca de ${dados.cidadeImovel || 'LOCAL DO IMÓVEL'} para dirimir quaisquer dúvidas oriundas deste contrato, renunciando a qualquer outro.`);

    // Assinaturas
    verificarPagina(60);
    y += 10;
    doc.text(`E, por estarem justos e contratados, assinam o presente em 2 (duas) vias.`, margem, y);
    y += 10;
    doc.text(`${dados.cidadeImovel || 'Local'}, ${new Date().toLocaleDateString('pt-BR')}.`, margem, y);
    
    y += 25;
    doc.line(margem, y, 120, y);
    doc.setFont("times", "normal");
    doc.text("LOCADOR(A)", margem, y + 5);
    
    y += 25;
    doc.line(margem, y, 120, y);
    doc.text("LOCATÁRIO(A)", margem, y + 5);

    // Rodapé Branding
    const totalPaginas = doc.internal.pages.length - 1;
    for (let i = 1; i <= totalPaginas; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(150);
        doc.text(`Página ${i} de ${totalPaginas} - Gerado por ReciboNaHora.com.br`, 105, 290, { align: "center" });
    }

    doc.save("contrato-locacao-completo.pdf");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        
        {/* Cabeçalho Visual */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 text-center">
          <h1 className="text-3xl font-bold mb-2 flex justify-center items-center gap-3">
            <i className="fa-solid fa-file-contract text-yellow-400"></i> Contrato de Locação Blindado
          </h1>
          <p className="text-slate-300">Baseado na Lei do Inquilinato (Lei 8.245/91) com proteção jurídica completa.</p>
        </div>

        <div className="p-8">
          
          {/* NAVEGAÇÃO DO WIZARD */}
          <div className="flex justify-between mb-8 border-b pb-4">
            <span className={`font-bold ${passo === 1 ? 'text-blue-600' : 'text-gray-400'}`}>1. Pessoas</span>
            <span className={`font-bold ${passo === 2 ? 'text-blue-600' : 'text-gray-400'}`}>2. Imóvel & Valores</span>
            <span className={`font-bold ${passo === 3 ? 'text-blue-600' : 'text-gray-400'}`}>3. Garantia & Cláusulas</span>
          </div>

          {/* PASSO 1: PARTES */}
          {passo === 1 && (
            <div className="animate-fade-in space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-3">Dados do Dono (Locador)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input name="locadorNome" placeholder="Nome Completo" onChange={handleChange} className="p-3 border rounded w-full" />
                  <input name="locadorCPF" placeholder="CPF/CNPJ" onChange={handleChange} className="p-3 border rounded w-full" />
                  <input name="locadorRG" placeholder="RG" onChange={handleChange} className="p-3 border rounded w-full" />
                  <input name="locadorProfissao" placeholder="Profissão" onChange={handleChange} className="p-3 border rounded w-full" />
                  <input name="locadorEndereco" placeholder="Endereço Residencial do Dono" onChange={handleChange} className="p-3 border rounded w-full md:col-span-2" />
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-3">Dados do Inquilino (Locatário)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input name="locatarioNome" placeholder="Nome Completo" onChange={handleChange} className="p-3 border rounded w-full" />
                  <input name="locatarioCPF" placeholder="CPF/CNPJ" onChange={handleChange} className="p-3 border rounded w-full" />
                  <input name="locatarioRG" placeholder="RG" onChange={handleChange} className="p-3 border rounded w-full" />
                  <input name="locatarioProfissao" placeholder="Profissão" onChange={handleChange} className="p-3 border rounded w-full" />
                </div>
              </div>
              <button onClick={() => setPasso(2)} className="w-full bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700 transition">Avançar</button>
            </div>
          )}

          {/* PASSO 2: IMÓVEL E VALORES */}
          {passo === 2 && (
            <div className="animate-fade-in space-y-6">
              <div>
                <h3 className="font-bold text-gray-700 mb-2">O Imóvel</h3>
                <input name="enderecoImovel" placeholder="Endereço Completo do Imóvel Alugado" onChange={handleChange} className="w-full p-3 border rounded mb-2" />
                <input name="cidadeImovel" placeholder="Cidade e Estado (Ex: São Paulo - SP)" onChange={handleChange} className="w-full p-3 border rounded" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold text-gray-700 mb-2">Valores</h3>
                  <input name="valorAluguel" placeholder="Valor Mensal (Ex: 1.500,00)" onChange={handleChange} className="w-full p-3 border rounded mb-2" />
                  <select name="indiceReajuste" onChange={handleChange} className="w-full p-3 border rounded bg-white">
                    <option value="IGPM">Índice: IGPM (Padrão)</option>
                    <option value="IPCA">Índice: IPCA</option>
                    <option value="INPC">Índice: INPC</option>
                  </select>
                </div>
                <div>
                  <h3 className="font-bold text-gray-700 mb-2">Prazos</h3>
                  <div className="flex gap-2 mb-2">
                    <input name="prazoMeses" type="number" placeholder="Meses (Ex: 30)" onChange={handleChange} className="w-1/2 p-3 border rounded" />
                    <input name="diaPagamento" type="number" placeholder="Dia Venc." onChange={handleChange} className="w-1/2 p-3 border rounded" />
                  </div>
                  <label className="text-xs text-gray-500 font-bold ml-1">Data de Início:</label>
                  <input name="inicioContrato" type="date" onChange={handleChange} className="w-full p-3 border rounded" />
                </div>
              </div>
              
              <div className="flex gap-4">
                <button onClick={() => setPasso(1)} className="flex-1 bg-gray-200 text-gray-700 py-3 rounded font-bold">Voltar</button>
                <button onClick={() => setPasso(3)} className="flex-1 bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700">Avançar</button>
              </div>
            </div>
          )}

          {/* PASSO 3: GARANTIA E FINALIZAÇÃO */}
          {passo === 3 && (
            <div className="animate-fade-in space-y-6">
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <h3 className="font-bold text-green-900 mb-3">Garantia do Contrato</h3>
                <select name="tipoGarantia" onChange={handleChange} className="w-full p-3 border rounded bg-white mb-2">
                  <option value="Caução">Caução (Depósito em Dinheiro)</option>
                  <option value="Fiador">Fiador</option>
                  <option value="Seguro Fiança">Seguro Fiança</option>
                  <option value="Sem Garantia">Sem Garantia (Pagamento Antecipado)</option>
                </select>
                <textarea name="garantiaDetalhe" rows={2} placeholder="Descreva a garantia (Ex: Depósito de 3 meses no valor de R$ 4.500,00 ou Nome e CPF do Fiador)" onChange={handleChange} className="w-full p-3 border rounded" />
              </div>

              <div>
                <h3 className="font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <i className="fa-solid fa-pen-nib text-orange-500"></i> Cláusulas Especiais (Opcional)
                </h3>
                <p className="text-xs text-gray-500 mb-2">Adicione regras específicas como: "Não aceita animais", "Multa por perda de chave", "Obrigatório seguro incêndio".</p>
                <textarea 
                  name="clausulasEspeciais" 
                  rows={4} 
                  placeholder="Digite aqui regras adicionais. Elas aparecerão como cláusula extra no contrato." 
                  onChange={handleChange} 
                  className="w-full p-3 border rounded bg-yellow-50 focus:bg-white transition" 
                />
              </div>

              <div className="flex gap-4 mt-8">
                <button onClick={() => setPasso(2)} className="flex-1 bg-gray-200 text-gray-700 py-3 rounded font-bold">Voltar</button>
                <button onClick={gerarPDF} className="flex-1 bg-green-600 text-white py-4 rounded-lg font-bold hover:bg-green-700 shadow-lg flex justify-center items-center gap-3 transform hover:scale-[1.02] transition-all">
                  <i className="fa-solid fa-file-contract text-2xl"></i> BAIXAR CONTRATO EM PDF
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
