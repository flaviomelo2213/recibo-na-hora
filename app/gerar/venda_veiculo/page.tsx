'use client';
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

export default function ReciboVeiculo() {
  const [dados, setDados] = useState({
    vendedor: '', vendedorCPF: '', vendedorEndereco: '',
    comprador: '', compradorCPF: '', compradorEndereco: '',
    veiculoModelo: '', placa: '', renavam: '', ano: '', cor: '',
    valor: '', cidade: '', data: new Date().toISOString().split('T')[0]
  });

  const handleChange = (e: any) => setDados({ ...dados, [e.target.name]: e.target.value });

  const gerarPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("RECIBO DE COMPRA E VENDA DE VEÍCULO", 105, 20, { align: "center" });

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    
    // Texto legal
    const texto = `Pelo presente instrumento, eu, ${dados.vendedor.toUpperCase()}, inscrito no CPF nº ${dados.vendedorCPF}, residente em ${dados.vendedorEndereco}, VENDO E TRANSFIRO para ${dados.comprador.toUpperCase()}, CPF nº ${dados.compradorCPF}, residente em ${dados.compradorEndereco}, o veículo abaixo descrito, livre e desembaraçado de quaisquer ônus.`;
    const linhas = doc.splitTextToSize(texto, 170);
    doc.text(linhas, 20, 40);

    // Dados do Veículo (Caixa)
    doc.setDrawColor(200);
    doc.rect(20, 70, 170, 50);
    doc.setFont("helvetica", "bold");
    doc.text("DADOS DO VEÍCULO", 105, 80, { align: "center" });
    doc.setFont("helvetica", "normal");
    doc.text(`Modelo: ${dados.veiculoModelo.toUpperCase()}`, 25, 90);
    doc.text(`Placa: ${dados.placa.toUpperCase()}`, 120, 90);
    doc.text(`Renavam: ${dados.renavam}`, 25, 100);
    doc.text(`Ano/Mod: ${dados.ano}`, 120, 100);
    doc.text(`Cor: ${dados.cor.toUpperCase()}`, 25, 110);

    // Valor e Quitação
    doc.text(`Declaro ter recebido a importância de R$ ${dados.valor} em moeda corrente, dando plena e geral quitação.`, 20, 135);

    // Assinaturas
    doc.text(`Local: ${dados.cidade}, Data: ${dados.data.split('-').reverse().join('/')}`, 20, 150);
    
    doc.line(30, 180, 90, 180);
    doc.text("Vendedor", 60, 185, { align: "center" });
    
    doc.line(120, 180, 180, 180);
    doc.text("Comprador", 150, 185, { align: "center" });

    doc.setFontSize(10);
    doc.text("Obs: Reconhecer firma das assinaturas em cartório para transferência.", 105, 200, { align: "center" });

    doc.save("recibo_veiculo.pdf");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden mb-12">
        <div className="bg-red-700 text-white p-6 text-center">
             <h1 className="text-2xl font-bold"><i className="fa-solid fa-car"></i> Recibo de Veículo (Simples)</h1>
             <p className="text-red-100 text-sm">Para venda de Carros, Motos e Caminhões.</p>
        </div>

        <div className="p-8 grid md:grid-cols-2 gap-6">
             <div className="space-y-3">
                <h3 className="font-bold text-slate-700">1. Vendedor</h3>
                <input name="vendedor" placeholder="Nome Completo" onChange={handleChange} className="w-full p-2 border rounded" />
                <input name="vendedorCPF" placeholder="CPF" onChange={handleChange} className="w-full p-2 border rounded" />
                <input name="vendedorEndereco" placeholder="Endereço" onChange={handleChange} className="w-full p-2 border rounded" />

                <h3 className="font-bold text-slate-700 mt-4">2. Comprador</h3>
                <input name="comprador" placeholder="Nome Completo" onChange={handleChange} className="w-full p-2 border rounded" />
                <input name="compradorCPF" placeholder="CPF" onChange={handleChange} className="w-full p-2 border rounded" />
                <input name="compradorEndereco" placeholder="Endereço" onChange={handleChange} className="w-full p-2 border rounded" />
             </div>
             
             <div className="space-y-3">
                <h3 className="font-bold text-red-800">3. Veículo</h3>
                <input name="veiculoModelo" placeholder="Modelo (Ex: Fiat Uno)" onChange={handleChange} className="w-full p-2 border rounded" />
                <div className="grid grid-cols-2 gap-2">
                    <input name="placa" placeholder="Placa" onChange={handleChange} className="p-2 border rounded" />
                    <input name="renavam" placeholder="Renavam" onChange={handleChange} className="p-2 border rounded" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <input name="ano" placeholder="Ano" onChange={handleChange} className="p-2 border rounded" />
                    <input name="cor" placeholder="Cor" onChange={handleChange} className="p-2 border rounded" />
                </div>
                
                <h3 className="font-bold text-green-700 mt-4">4. Valor</h3>
                <input name="valor" placeholder="Valor R$ (Ex: 15.000,00)" onChange={handleChange} className="w-full p-2 border rounded font-bold text-green-700" />
                <div className="grid grid-cols-2 gap-2">
                     <input name="cidade" placeholder="Cidade" onChange={handleChange} className="p-2 border rounded" />
                     <input name="data" type="date" value={dados.data} onChange={handleChange} className="p-2 border rounded" />
                </div>
                
                <button onClick={gerarPDF} className="w-full mt-4 bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition">
                    GERAR RECIBO
                </button>
             </div>
        </div>
      </div>

      {/* --- TEXTO SEO (SEGURANÇA JURÍDICA) --- */}
      <section className="max-w-4xl mx-auto prose prose-slate">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Recibo de Compra e Venda de Veículo</h2>
        <p className="text-slate-600 mb-6">
            A venda de um veículo usado exige cuidados para evitar dores de cabeça futuras. O <strong>Recibo de Compra e Venda</strong> é um documento particular que comprova o pagamento e a entrega do bem, servindo como uma garantia extra além do documento oficial de transferência (DUT/ATPV-e).
        </p>

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">Dicas para uma Venda Segura:</h3>
        <ul className="space-y-3 text-slate-600">
            <li className="flex items-start gap-3">
                <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                <div><strong>Comunique a Venda:</strong> Assim que assinar o recibo e entregar o carro, vá ao DETRAN ou Cartório e faça o Comunicado de Venda. Isso isenta o vendedor de multas futuras.</div>
            </li>
            <li className="flex items-start gap-3">
                <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                <div><strong>Reconheça Firma:</strong> As assinaturas no recibo devem ter firma reconhecida em cartório (por autenticidade) para garantir a validade jurídica.</div>
            </li>
            <li className="flex items-start gap-3">
                <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                <div><strong>Nunca entregue o DUT em branco:</strong> Sempre preencha os dados do comprador no Documento Único de Transferência.</div>
            </li>
        </ul>

        <div className="bg-gray-100 p-4 rounded-lg mt-6 text-sm text-center">
            <p className="font-medium text-gray-700">Onde encontrar o Renavam?</p>
            <p className="text-gray-500">O código Renavam fica localizado no topo do documento do veículo (CRLV), logo acima do nome do proprietário.</p>
        </div>
      </section>
    </div>
  );
}
