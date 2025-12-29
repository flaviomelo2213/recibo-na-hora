'use client';

import { useState } from 'react';
import { jsPDF } from 'jspdf';

import { Card } from '../../../components/ui/Card';
import { Input } from '../../../components/ui/Input';
import { Button } from '../../../components/ui/Button';

// Importa os novos tipos e templates
import { ReciboModelo, ReciboData, RECIBO_TEMPLATES } from '../_lib/templates';

// Função para gerar o PDF, agora usando o texto do template
const generateReciboSimplesPDF = (data: ReciboData, modelo: ReciboModelo) => {
  const doc = new jsPDF('p', 'mm', 'a4');
  const template = RECIBO_TEMPLATES[modelo];
  const textoDoRecibo = template.textoPreview(data);
  const dataObj = new Date(data.data + 'T00:00:00'); // Ajuste de fuso
  const dataFormatada = dataObj.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });

  const corpoDoRecibo = 
    `----------- RECIBO DE PAGAMENTO -----------\n\n` +
    `${textoDoRecibo}\n\n` +
    `Por ser verdade, firmo o presente.\n\n` +
    `${data.cidade || '[Cidade]'}, ${dataFormatada}.\n\n\n` +
    `________________________________________\n` +
    `${data.beneficiarioNome || '[Nome do Beneficiário]'}\n` +
    `${data.beneficiarioDocumento || '[CPF/CNPJ do Beneficiário]'}`;


  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(12);
  const splitText = doc.splitTextToSize(corpoDoRecibo, 180);
  doc.text(splitText, 15, 20);
  doc.save(`recibo-${modelo}.pdf`);
};

export default function ReciboSimplesGenerator() {
  const [modeloAtual, setModeloAtual] = useState<ReciboModelo>('aluguel');
  const [data, setData] = useState<ReciboData>({
    valor: '1250,00',
    pagadorNome: 'José da Silva',
    pagadorDocumento: '123.456.789-00',
    beneficiarioNome: 'Maria Souza',
    beneficiarioDocumento: '987.654.321-99',
    cidade: 'São Paulo',
    data: new Date().toISOString().split('T')[0],
    // Campos específicos inicializados
    referenciaMesAno: 'Janeiro/2024',
    enderecoImovel: 'Rua das Flores, 123, Apto 4B',
    servicoDescricao: '',
    periodo: '',
    itemVendido: '',
    condicoes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleGeneratePDF = () => {
    generateReciboSimplesPDF(data, modeloAtual);
  };
  
  const handleSendWhatsApp = () => {
    const template = RECIBO_TEMPLATES[modeloAtual];
    const mensagem = template.mensagemWhatsApp(data);
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  const renderCamposModelo = () => {
    switch (modeloAtual) {
      case 'aluguel':
        return (
          <>
            <Input name="referenciaMesAno" label="Mês/Ano de Referência" value={data.referenciaMesAno} onChange={handleChange} placeholder="Ex: Janeiro/2024" />
            <Input name="enderecoImovel" label="Endereço do Imóvel (Opcional)" value={data.enderecoImovel} onChange={handleChange} placeholder="Ex: Rua das Flores, 123" />
          </>
        );
      case 'servicos':
        return (
          <>
            <Input name="servicoDescricao" label="Descrição do Serviço" value={data.servicoDescricao} onChange={handleChange} placeholder="Ex: Consultoria de marketing" />
            <Input name="periodo" label="Período de Execução (Opcional)" value={data.periodo} onChange={handleChange} placeholder="Ex: 01/01/2024 a 31/01/2024"/>
          </>
        );
      case 'venda':
        return (
          <>
            <Input name="itemVendido" label="Item Vendido" value={data.itemVendido} onChange={handleChange} placeholder="Ex: Notebook usado" />
            <Input name="condicoes" label="Condições (Opcional)" value={data.condicoes} onChange={handleChange} placeholder="Ex: À vista" />
          </>
        );
      default:
        return null;
    }
  }

  return (
    <Card className="max-w-4xl mx-auto p-6 md:p-8">
      
      {/* Seletor de Modelo */}
      <div className="mb-6 flex justify-center border-b border-slate-200">
        {(Object.keys(RECIBO_TEMPLATES) as ReciboModelo[]).map((modelo) => (
          <button 
            key={modelo} 
            onClick={() => setModeloAtual(modelo)}
            className={`px-4 py-2 text-sm font-medium transition-colors 
              ${modeloAtual === modelo 
                ? 'border-b-2 border-blue-600 text-blue-600' 
                : 'text-slate-500 hover:text-slate-700'}`}>
            {RECIBO_TEMPLATES[modelo].label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-800 border-b pb-2">Quem Pagou</h2>
          <Input name="pagadorNome" label="Nome Completo do Pagador" value={data.pagadorNome} onChange={handleChange} />
          <Input name="pagadorDocumento" label="CPF/CNPJ do Pagador" value={data.pagadorDocumento} onChange={handleChange} />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-800 border-b pb-2">Quem Recebeu</h2>
          <Input name="beneficiarioNome" label="Nome Completo do Beneficiário" value={data.beneficiarioNome} onChange={handleChange} />
          <Input name="beneficiarioDocumento" label="CPF/CNPJ do Beneficiário" value={data.beneficiarioDocumento} onChange={handleChange} />
        </div>

        <div className="md:col-span-2 space-y-4">
           <h2 className="text-lg font-semibold text-slate-800 border-b pb-2">Detalhes do Pagamento</h2>
          <Input name="valor" type="number" label="Valor Recebido (R$)" value={data.valor} onChange={handleChange} placeholder="Ex: 150,00"/>
          
          {/* Campos dinâmicos baseados no modelo */}
          {renderCamposModelo()}

          <div className="grid sm:grid-cols-2 gap-4">
            <Input name="cidade" label="Cidade" value={data.cidade} onChange={handleChange} placeholder="Ex: São Paulo" />
            <Input name="data" type="date" label="Data de Emissão" value={data.data} onChange={handleChange} />
          </div>
        </div>

      </div>
      
      <div className="mt-8 flex justify-center gap-4">
        <Button size="lg" onClick={handleGeneratePDF}>
          Gerar Recibo em PDF
        </Button>
        <Button size="lg" variant="secondary" onClick={handleSendWhatsApp}>
          Enviar por WhatsApp
        </Button>
      </div>
    </Card>
  );
}
