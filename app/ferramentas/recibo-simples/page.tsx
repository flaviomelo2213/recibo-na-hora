'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { jsPDF } from 'jspdf';
import { Download, Share2, Info } from 'lucide-react';

// --- Imports Corrigidos ---
import ToolShell from '../../components/ToolShell';
import PreviewPaper from '../../components/PreviewPaper';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Textarea } from '../../components/ui/Textarea';
import { Button } from '../../components/ui/Button'; // Removido buttonVariants
import LegalDisclaimer from "../../components/LegalDisclaimer";
import FaqAccordion from "../../components/FaqAccordion";

// Definição do tipo para os dados do formulário
interface ReciboData {
  pagadorNome: string;
  pagadorCpfCnpj: string;
  recebedorNome: string;
  recebedorCpfCnpj: string;
  valor: string;
  valorExtenso: string;
  descricao: string;
  cidade: string;
  data: string;
}

// Conteúdo para o FAQ (mantido)
const faqs = [
  { question: "Qual a validade jurídica de um recibo simples?", answer: "Um recibo simples é um documento plenamente válido para comprovar pagamentos entre partes. Ele serve como prova de que um valor foi pago por um serviço ou produto, sendo essencial para a organização financeira e para evitar cobranças indevidas." },
  { question: "O gerador de recibos é realmente gratuito?", answer: "Sim, nossa ferramenta para gerar recibos simples é 100% gratuita e não possui limites de uso. Você pode criar, baixar e compartilhar quantos recibos precisar, sem nenhum custo." },
  { question: "Os dados que eu preencho são salvos no site?", answer: "Não. A sua privacidade é nossa prioridade. A ferramenta funciona inteiramente no seu navegador. Nenhuma informação digitada é enviada aos nossos servidores."
  }
];

// Função para formatar CPF/CNPJ
function formatarCpfCnpj(valor: string): string {
  const digitos = valor.replace(/\D/g, '');
  if (digitos.length <= 11) {
    return digitos
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  } else {
    return digitos
      .slice(0, 14)
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d{1,2})$/, '$1-$2');
  }
}

export default function ReciboSimplesPage() {
  const [data, setData] = useState<ReciboData>({
    pagadorNome: '',
    pagadorCpfCnpj: '',
    recebedorNome: '',
    recebedorCpfCnpj: '',
    valor: '',
    valorExtenso: '',
    descricao: 'Referente a... ',
    cidade: '',
    data: '',
  });

  useEffect(() => {
    if (!data.data) {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        setData(prev => ({ ...prev, data: `${year}-${month}-${day}` }));
    }
  }, [data.data]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'pagadorCpfCnpj' || name === 'recebedorCpfCnpj') {
      setData(prev => ({ ...prev, [name]: formatarCpfCnpj(value) }));
    } else {
      setData(prev => ({ ...prev, [name]: value }));
    }
  };

  const getReciboText = () => {
    const dataObj = data.data ? new Date(data.data + 'T00:00:00') : new Date();
    const dataFormatada = dataObj.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });

    const textoRecibo = `Eu, ${data.recebedorNome || '[Nome do Recebedor]'}, ` +
    (data.recebedorCpfCnpj ? `inscrito(a) no CPF/CNPJ sob o nº ${data.recebedorCpfCnpj}, ` : '') +
    `declaro que recebi de ${data.pagadorNome || '[Nome do Pagador]'}` +
    (data.pagadorCpfCnpj ? `, inscrito(a) no CPF/CNPJ sob o nº ${data.pagadorCpfCnpj}, ` : ', ') +
    `a importância de R$ ${data.valor || '0,00'} (${data.valorExtenso || '[Valor por Extenso]'}), referente a ${data.descricao || '[Descrição do pagamento]'}.`;

    return (
      `----------- RECIBO DE PAGAMENTO -----------\n\n` +
      `Valor: R$ ${data.valor || '0,00'}\n\n` +
      `${textoRecibo}\n\n` +
      `Por ser verdade, firmo o presente recibo, para que produza seus devidos e legais efeitos.\n\n` +
      `${data.cidade || '[Cidade]'}, ${dataFormatada}.\n\n\n` +
      `________________________________________\n` +
      `${data.recebedorNome || '[Nome do Recebedor]'}\n`
    );
  };
  
  const handleDownloadPdf = () => {
    const doc = new jsPDF('p', 'mm', 'a4');
    const text = getReciboText();

    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(12);
    const splitText = doc.splitTextToSize(text, 180);
    doc.text(splitText, 15, 20);
    doc.save('recibo-de-pagamento.pdf');
  };

  const handleShareWhatsApp = () => {
    const valor = data.valor ? `R$ ${data.valor}` : '';
    const recebedor = data.recebedorNome || '';
    const texto = `Gerado no ReciboNaHora: Recibo de ${valor} para ${recebedor}.`;
    const url = `https://wa.me/?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  };

  const FormFields = (
    <Card className="p-6 md:p-8">
      <div className="space-y-6">
        <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <legend className="text-lg font-semibold text-slate-800 mb-4 col-span-full">Para quem você pagou?</legend>
          <Input label="Nome do Recebedor" name="recebedorNome" value={data.recebedorNome} onChange={handleInputChange} placeholder="Ex: João da Silva" required />
          <Input label="CPF/CNPJ do Recebedor" name="recebedorCpfCnpj" value={data.recebedorCpfCnpj} onChange={handleInputChange} placeholder="00.000.000/0000-00" />
        </fieldset>

        <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <legend className="text-lg font-semibold text-slate-800 mb-4 col-span-full">Quem realizou o pagamento?</legend>
          <Input label="Nome do Pagador" name="pagadorNome" value={data.pagadorNome} onChange={handleInputChange} placeholder="Ex: Maria Souza" required />
          <Input label="CPF/CNPJ do Pagador" name="pagadorCpfCnpj" value={data.pagadorCpfCnpj} onChange={handleInputChange} placeholder="000.000.000-00" />
        </fieldset>

        <fieldset className="space-y-5">
          <legend className="text-lg font-semibold text-slate-800 mb-4">Detalhes do Pagamento</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input label="Valor (R$)" name="valor" value={data.valor} onChange={handleInputChange} placeholder="150,00" type="number" step="0.01" required />
            <Input label="Valor por Extenso" name="valorExtenso" value={data.valorExtenso} onChange={handleInputChange} placeholder="Cento e cinquenta reais" required />
          </div>
          <Textarea rows={3} label="Descrição do Pagamento" name="descricao" value={data.descricao} onChange={handleInputChange} required />
        </fieldset>

        <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <legend className="text-lg font-semibold text-slate-800 mb-4 col-span-full">Local e Data</legend>
          <Input label="Cidade de Emissão" name="cidade" value={data.cidade} onChange={handleInputChange} placeholder="Ex: São Paulo" required />
          <Input label="Data do Pagamento" name="data" value={data.data} onChange={handleInputChange} type="date" required />
        </fieldset>
      </div>
    </Card>
  );

  const Preview = (
    <PreviewPaper>
      <div className="p-2 text-sm text-slate-800 whitespace-pre-wrap font-mono">
        {getReciboText()}
      </div>
    </PreviewPaper>
  );

  const Actions = (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Button onClick={handleDownloadPdf} size="lg">
          <Download className="w-4 h-4 mr-2" />
          Baixar PDF
        </Button>
        <Button onClick={handleShareWhatsApp} variant="success" size="lg">
          <Share2 className="w-4 h-4 mr-2" />
          WhatsApp
        </Button>
      </div>
       <Card className="p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Info className="h-8 w-8 text-indigo-500" />
            </div>
            <div className="ml-4 flex-grow">
              <h4 className="font-semibold text-slate-800">Parceria Recomendada</h4>
              <p className="text-xs text-slate-600 mt-1">
                Precisa de assinatura com validade jurídica? 
                <Link href="/parcerias" className="text-indigo-600 font-semibold hover:underline ml-1">
                  Veja nossos parceiros.
                </Link>
              </p>
            </div>
          </div>
          <p className="text-[10px] text-slate-400 mt-2 text-right">Podemos receber uma comissão.</p>
      </Card>
    </div>
  );

  return (
    <main className="bg-slate-50 text-slate-800">
      <ToolShell
        title="Gerador de Recibo de Pagamento"
        subtitle="Crie um recibo completo em segundos. Preencha os campos, visualize em tempo real e baixe o PDF pronto para imprimir ou enviar."
        left={FormFields}
        right={Preview}
        actions={Actions}
      />
      
      <div className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
        <FaqAccordion faqs={faqs} />
        <div className="mt-16 text-center">
            <LegalDisclaimer />
        </div>
      </div>
    </main>
  );
}
