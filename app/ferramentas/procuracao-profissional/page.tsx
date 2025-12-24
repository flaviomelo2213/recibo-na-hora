'use client';
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

export default function ProcuracaoProfissional() {
  const [dados, setDados] = useState({
    // Outorgante (Cliente)
    cliNome: '', cliNacionalidade: 'Brasileiro(a)', cliEstadoCivil: 'Casado(a)', cliProfissao: '', cliCPF: '', cliRG: '', cliEndereco: '',
    // Outorgado (Profissional)
    profNome: '', profNacionalidade: 'Brasileiro(a)', profEstadoCivil: 'Solteiro(a)', profCPF: '', profEndereco: '',
    // Dados de Classe
    profCategoria: 'Advogado(a)', // Advogado, Contador, etc.
    profRegistroTipo: 'OAB', // OAB, CRC, CREA, CRM
    profRegistroNum: '', profRegistroUF: '',
    // Poderes
    poderesGerais: true,
    poderesEspeciais: '',
  });

  const handleChange = (e: any) => setDados({ ...dados, [e.target.name]: e.target.value });

  const gerarPDF = () => {
    const doc = new jsPDF();
    const margem = 20;
    let y = 20;

    const addTexto = (texto: string, negrito = false, alinhamento: 'left' | 'center' | 'justify' = 'justify') => {
        doc.setFont("times", negrito ? "bold" : "normal");
        doc.setFontSize(12);
        const linhas = doc.splitTextToSize(texto, 170);
        doc.text(linhas, (alinhamento === 'center' ? 105 : margem), y, { align: alinhamento === 'justify' ? 'left' : alinhamento });
        y += (linhas.length * 6) + 6;
    };

    doc.setFontSize(16);
    addTexto("PROCURAÇÃO AD JUDICIA ET EXTRA", true, "center");
    y += 10;

    addTexto("OUTORGANTE:", true, "left");
    addTexto(`${dados.cliNome.toUpperCase()}, nacionalidade ${dados.cliNacionalidade}, estado civil ${dados.cliEstadoCivil}, profissão ${dados.cliProfissao}, inscrito(a) no CPF sob nº ${dados.cliCPF}, RG nº ${dados.cliRG}, residente e domiciliado(a) à ${dados.cliEndereco}.`);

    addTexto("OUTORGADO(A):", true, "left");
    addTexto(`${dados.profNome.toUpperCase()}, nacionalidade ${dados.profNacionalidade}, estado civil ${dados.profEstadoCivil}, ${dados.profCategoria}, inscrito(a) no CPF sob nº ${dados.profCPF}, portador(a) do registro profissional ${dados.profRegistroTipo}/${dados.profRegistroUF} nº ${dados.profRegistroNum}, com endereço profissional à ${dados.profEndereco}.`);

    addTexto("PODERES:", true, "left");
    let textoPoderes = "";
    if (dados.poderesGerais) {
        textoPoderes += "Amplos poderes para o foro em geral, com a cláusula \"ad judicia et extra judicia\", em qualquer Juízo, Instância ou Tribunal, podendo propor contra quem de direito as ações competentes e defendê-lo(a) nas contrárias, seguindo-as até final decisão. ";
    }
    if (dados.poderesEspeciais) {
        textoPoderes += `PODERES ESPECIAIS PARA: ${dados.poderesEspeciais}.`;
    }
    addTexto(textoPoderes || "Conforme descrito abaixo.");

    y += 20;
    addTexto(`Local e Data: ______________________, ${new Date().toLocaleDateString('pt-BR')}`, false, "center");

    y += 30;
    addTexto("________________________________________________", false, "center");
    addTexto(dados.cliNome.toUpperCase(), false, "center");
    addTexto("(Outorgante)", false, "center");

    doc.save("procuracao_profissional.pdf");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
        <div className="text-center mb-8 bg-slate-800 text-white p-6 rounded-xl">
             <h1 className="text-2xl font-bold mb-2"><i className="fa-solid fa-briefcase"></i> Procuração Profissional</h1>
             <p className="text-slate-300 text-sm">Para Advogados, Contadores, Engenheiros e outros profissionais.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {/* Cliente */}
            <div className="space-y-4">
                <h3 className="font-bold text-slate-700 border-b pb-2">1. Dados do Cliente (Outorgante)</h3>
                <input name="cliNome" placeholder="Nome Completo" onChange={handleChange} className="w-full p-3 border rounded" />
                <div className="grid grid-cols-2 gap-2">
                    <input name="cliCPF" placeholder="CPF" onChange={handleChange} className="p-3 border rounded" />
                    <input name="cliRG" placeholder="RG" onChange={handleChange} className="p-3 border rounded" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <input name="cliEstadoCivil" placeholder="Estado Civil" onChange={handleChange} className="p-3 border rounded" />
                    <input name="cliProfissao" placeholder="Profissão" onChange={handleChange} className="p-3 border rounded" />
                </div>
                <input name="cliEndereco" placeholder="Endereço Completo" onChange={handleChange} className="w-full p-3 border rounded" />
            </div>

            {/* Profissional */}
            <div className="space-y-4">
                <h3 className="font-bold text-blue-700 border-b pb-2">2. Dados do Profissional (Você)</h3>
                <input name="profNome" placeholder="Seu Nome Completo" onChange={handleChange} className="w-full p-3 border rounded" />
                <input name="profCPF" placeholder="Seu CPF" onChange={handleChange} className="w-full p-3 border rounded" />
                
                {/* DADOS DE CLASSE */}
                <div className="bg-blue-50 p-3 rounded border border-blue-100">
                    <label className="text-xs font-bold text-blue-600 mb-2 block">Registro de Classe</label>
                    <div className="grid grid-cols-2 gap-2 mb-2">
                        <select name="profCategoria" onChange={handleChange} className="p-2 border rounded bg-white">
                            <option>Advogado(a)</option>
                            <option>Contador(a)</option>
                            <option>Engenheiro(a)</option>
                            <option>Médico(a)</option>
                            <option>Arquiteto(a)</option>
                            <option>Outro</option>
                        </select>
                        <select name="profRegistroTipo" onChange={handleChange} className="p-2 border rounded bg-white">
                            <option>OAB</option>
                            <option>CRC</option>
                            <option>CREA</option>
                            <option>CRM</option>
                            <option>CAU</option>
                            <option>Outro</option>
                        </select>
                    </div>
                    <div className="flex gap-2">
                        <input name="profRegistroNum" placeholder="Nº Registro (Ex: 123456)" onChange={handleChange} className="w-2/3 p-2 border rounded" />
                        <input name="profRegistroUF" placeholder="UF (Ex: SP)" onChange={handleChange} className="w-1/3 p-2 border rounded" />
                    </div>
                </div>
                 <input name="profEndereco" placeholder="Endereço Profissional/Escritório" onChange={handleChange} className="w-full p-3 border rounded" />
            </div>
        </div>

        <div className="mt-8">
            <h3 className="font-bold text-slate-700 border-b pb-2 mb-4">3. Poderes Específicos</h3>
            <textarea name="poderesEspeciais" rows={3} placeholder="Ex: Poderes específicos para transigir, fazer acordo, firmar compromisso, receber e dar quitação..." onChange={handleChange} className="w-full p-3 border rounded bg-gray-50"></textarea>
            <p className="text-xs text-gray-500 mt-1">* Os poderes gerais já estão inclusos automaticamente.</p>
        </div>

        <button onClick={gerarPDF} className="w-full mt-8 bg-slate-800 text-white py-4 rounded-xl font-bold hover:bg-slate-900 transition flex items-center justify-center gap-2">
            <i className="fa-solid fa-file-contract"></i> GERAR PROCURAÇÃO PDF
        </button>

        {/* --- CONTEÚDO SEO + AVISO LEGAL --- */}
        <section className="mt-16 prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900">O que é uma Procuração Ad Judicia?</h2>
            <p className="text-slate-600">
                A procuração <strong>Ad Judicia</strong> é o instrumento legal que permite a um advogado atuar em nome de seu cliente perante a justiça. Ela concede poderes gerais para o foro, permitindo propor ações, apresentar defesas e acompanhar processos.
            </p>
            <p className="text-slate-600">
                Este modelo também pode ser adaptado para outros profissionais liberais (Contadores, Engenheiros) que necessitam representar clientes em órgãos públicos (Receita Federal, Prefeituras), bastando descrever os poderes específicos no campo correspondente.
            </p>

            {/* BLOCO DE AVISO LEGAL (JURÍDICO) */}
            <div className="bg-red-50 p-6 rounded-xl border border-red-100 mt-8">
                <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                    <i className="fa-solid fa-scale-balanced"></i> Aviso Legal Importante
                </h4>
                <p className="text-sm text-red-900 leading-relaxed text-justify">
                    O <strong>ReciboNaHora</strong> fornece modelos de documentos automatizados para fins informativos e administrativos. 
                    Esta ferramenta <strong>não substitui a consultoria de um advogado</strong>. 
                    Recomendamos que procurações com poderes especiais ou para casos complexos sejam sempre revisadas por um profissional habilitado para garantir a segurança jurídica específica do seu caso. O uso deste modelo é de responsabilidade exclusiva do usuário.
                </p>
            </div>
        </section>

      </div>
    </div>
  );
}
