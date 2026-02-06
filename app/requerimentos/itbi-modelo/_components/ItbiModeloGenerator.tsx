'use client';

import { useState } from 'react';
import { jsPDF } from 'jspdf';
import { Card } from '../../../components/ui/Card';
import { Input } from '../../../components/ui/Input';
import { Button } from '../../../components/ui/Button';
import { Alert, AlertDescription, AlertTitle } from '../../../components/ui/Alert';
import { Terminal, HelpCircle, Info } from 'lucide-react';

export default function ItbiModeloGenerator() {
  const [requerente, setRequerente] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [emailContato, setEmailContato] = useState('');
  const [enderecoImovel, setEnderecoImovel] = useState('');
  const [valorImovel, setValorImovel] = useState('');
  const [numeroMatricula, setNumeroMatricula] = useState('');
  const [cidade, setCidade] = useState('');
  const [data, setData] = useState(new Date().toISOString().split('T')[0]);

  const formatDateLongPtBR = (iso: string) => {
    try {
      const d = new Date(iso + 'T00:00:00');
      return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
    } catch {
      return iso;
    }
  };

  const getPreviewText = () =>
    `À\nSecretaria de Finanças/Fazenda de ${cidade || '[Cidade]'}\n\n` +
    `REQUERIMENTO DE ISENÇÃO/REDUÇÃO DE ITBI\n\n` +
    `Requerente: ${requerente || '[Nome Completo]'}\n` +
    `CPF: ${cpf || '[CPF]'}\n` +
    `Endereço: ${endereco || '[Seu Endereço]'}\n` +
    `Telefone: ${telefone || '[Telefone]'}\n` +
    `E-mail: ${emailContato || '[E-mail]'}\n\n` +
    `OBJETO DA SOLICITAÇÃO:\n\n` +
    `Venho, respeitosamente, requerer a isenção/redução do ITBI referente à aquisição do imóvel localizado em:\n\n` +
    `${enderecoImovel || '[Endereço Completo do Imóvel]'}\n` +
    `Matrícula: ${numeroMatricula || '[Número da Matrícula]'}\n` +
    `Valor de Avaliação: ${valorImovel || '[Valor do Imóvel]'}\n\n` +
    `Trata-se da aquisição do meu primeiro imóvel, conforme previsto na legislação municipal e nas regras do Sistema Financeiro da Habitação (SFH), quando aplicável.\n\n` +
    `Solicito, ainda, a indicação de eventuais documentos complementares necessários para instrução do processo.\n\n` +
    `Termos em que, pede deferimento.\n\n` +
    `${cidade || '[Cidade]'}, ${formatDateLongPtBR(data)}.\n\n` +
    `_________________________\n${requerente || '[Nome Completo]'}\nCPF: ${cpf || '[CPF]'}`;

  const handleGeneratePDF = () => {
    const doc = new jsPDF('p', 'mm', 'a4');

    const marginX = 20;
    const marginTop = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const usableWidth = pageWidth - marginX * 2;
    const bottomLimit = pageHeight - 20;

    let y = marginTop;

    const addBlock = (text: string, font: 'normal' | 'bold' = 'normal', size = 12, gap = 6) => {
      doc.setFont('times', font);
      doc.setFontSize(size);

      const lines = doc.splitTextToSize(text, usableWidth);
      const blockHeight = lines.length * gap;

      if (y + blockHeight > bottomLimit) {
        doc.addPage();
        y = marginTop;
      }

      doc.text(lines, marginX, y);
      y += blockHeight + 2;
    };

    doc.setFont('times', 'bold');
    doc.setFontSize(13);
    doc.text('REQUERIMENTO DE ISENÇÃO/REDUÇÃO DE ITBI', pageWidth / 2, y, { align: 'center' });
    y += 14;

    addBlock(`À`, 'bold', 12, 6);
    addBlock(`Secretaria de Finanças/Fazenda de ${cidade || '[CIDADE]'}`, 'bold', 12, 6);
    y += 6;

    addBlock(`Requerente: ${requerente || '[NOME COMPLETO]'}`, 'normal', 11, 6);
    addBlock(`CPF: ${cpf || '[CPF]'}`, 'normal', 11, 6);
    addBlock(`Endereço: ${endereco || '[SEU ENDEREÇO]'}`, 'normal', 11, 6);
    addBlock(`Telefone: ${telefone || '[TELEFONE]'}`, 'normal', 11, 6);
    addBlock(`E-mail: ${emailContato || '[E-MAIL]'}`, 'normal', 11, 6);
    y += 6;

    addBlock('OBJETO DA SOLICITAÇÃO:', 'bold', 12, 6);
    y += 2;

    addBlock(
      `Venho, respeitosamente, requerer a isenção/redução do ITBI referente à aquisição do imóvel localizado em:`,
      'normal',
      12,
      6
    );
    y += 2;

    addBlock(`Endereço do Imóvel: ${enderecoImovel || '[ENDEREÇO COMPLETO DO IMÓVEL]'}`, 'normal', 11, 6);
    addBlock(`Matrícula: ${numeroMatricula || '[NÚMERO DA MATRÍCULA]'}`, 'normal', 11, 6);
    addBlock(`Valor de Avaliação: R$ ${valorImovel || '[VALOR]'}`, 'normal', 11, 6);
    y += 4;

    addBlock(
      `Trata-se da aquisição do meu primeiro imóvel, conforme previsto na legislação municipal e nas regras do Sistema Financeiro da Habitação (SFH), quando aplicável.`,
      'normal',
      12,
      6
    );

    addBlock(
      `Solicito, ainda, a indicação de eventuais documentos complementares necessários para instrução do processo, caso aplicável.`,
      'normal',
      12,
      6
    );

    y += 8;

    addBlock(`Termos em que, pede deferimento.`, 'normal', 12, 6);
    y += 10;

    doc.setFont('times', 'normal');
    doc.setFontSize(12);
    doc.text(`${cidade || '[CIDADE]'}, ${formatDateLongPtBR(data)}.`, pageWidth / 2, y, { align: 'center' });
    y += 18;

    doc.text('________________________________________', pageWidth / 2, y, { align: 'center' });
    y += 6;
    doc.text(requerente || '[NOME COMPLETO]', pageWidth / 2, y, { align: 'center' });
    y += 5;
    doc.setFontSize(10);
    doc.setTextColor(120);
    doc.text(`CPF: ${cpf || '[CPF]'}`, pageWidth / 2, y, { align: 'center' });

    doc.setFontSize(8);
    doc.setTextColor(120);
    doc.text('Gerado por ReciboNaHora.com.br', pageWidth / 2, pageHeight - 10, { align: 'center' });

    doc.save('requerimento-itbi.pdf');
  };

  return (
    <Card className="w-full p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
        <section className="w-full min-w-0 space-y-6">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Modelo Orientado</AlertTitle>
            <AlertDescription>
              Este formulário guiado ajuda você a preencher os dados necessários para solicitar isenção/redução do ITBI. Consulte sempre a legislação da sua prefeitura.
            </AlertDescription>
          </Alert>

          <div className="space-y-6">
            <div>
              <h3 className="text-base font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-900" />
                Seus Dados Pessoais
              </h3>
              <div className="space-y-4">
                <div>
                  <Input
                    label="Nome Completo"
                    value={requerente}
                    onChange={(e) => setRequerente(e.target.value)}
                  />
                  <p className="mt-1 text-xs text-slate-500">
                    <HelpCircle className="inline w-3 h-3 mr-1" />
                    Nome conforme documento de identidade
                  </p>
                </div>

                <div>
                  <Input
                    label="CPF"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    placeholder="000.000.000-00"
                  />
                  <p className="mt-1 text-xs text-slate-500">
                    <HelpCircle className="inline w-3 h-3 mr-1" />
                    Necessário para identificação no processo
                  </p>
                </div>

                <div>
                  <Input
                    label="Seu Endereço Completo"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                    placeholder="Rua, número, bairro, cidade, UF, CEP"
                  />
                  <p className="mt-1 text-xs text-slate-500">
                    <HelpCircle className="inline w-3 h-3 mr-1" />
                    Endereço onde você pode receber notificações
                  </p>
                </div>

                <div>
                  <Input
                    label="Telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    placeholder="(00) 00000-0000"
                  />
                  <p className="mt-1 text-xs text-slate-500">
                    <HelpCircle className="inline w-3 h-3 mr-1" />
                    Para contato da prefeitura sobre o processo
                  </p>
                </div>

                <div>
                  <Input
                    label="E-mail"
                    type="email"
                    value={emailContato}
                    onChange={(e) => setEmailContato(e.target.value)}
                    placeholder="seuemail@exemplo.com"
                  />
                  <p className="mt-1 text-xs text-slate-500">
                    <HelpCircle className="inline w-3 h-3 mr-1" />
                    E-mail para recebimento de documentos e comunicações
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-900" />
                Dados do Imóvel
              </h3>
              <div className="space-y-4">
                <div>
                  <Input
                    label="Endereço Completo do Imóvel"
                    value={enderecoImovel}
                    onChange={(e) => setEnderecoImovel(e.target.value)}
                    placeholder="Rua, número, bairro, cidade, UF, CEP"
                  />
                  <p className="mt-1 text-xs text-slate-500">
                    <HelpCircle className="inline w-3 h-3 mr-1" />
                    Endereço exato do imóvel que você está adquirindo
                  </p>
                </div>

                <div>
                  <Input
                    label="Número da Matrícula"
                    value={numeroMatricula}
                    onChange={(e) => setNumeroMatricula(e.target.value)}
                    placeholder="Ex: 12345"
                  />
                  <p className="mt-1 text-xs text-slate-500">
                    <HelpCircle className="inline w-3 h-3 mr-1" />
                    Número encontrado na matrícula do imóvel no Cartório de Registro de Imóveis
                  </p>
                </div>

                <div>
                  <Input
                    label="Valor do Imóvel"
                    value={valorImovel}
                    onChange={(e) => setValorImovel(e.target.value)}
                    placeholder="150000.00"
                  />
                  <p className="mt-1 text-xs text-slate-500">
                    <HelpCircle className="inline w-3 h-3 mr-1" />
                    Valor de avaliação ou valor da transação (conforme escritura/contrato)
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-900" />
                Local e Data
              </h3>
              <div className="space-y-4">
                <div>
                  <Input
                    label="Cidade do Imóvel"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                  />
                  <p className="mt-1 text-xs text-slate-500">
                    <HelpCircle className="inline w-3 h-3 mr-1" />
                    Município onde o imóvel está localizado e onde você protocolará o requerimento
                  </p>
                </div>

                <Input
                  type="date"
                  label="Data do Requerimento"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                />
              </div>
            </div>
          </div>

          <Button size="lg" onClick={handleGeneratePDF} className="w-full">
            Gerar PDF do Requerimento
          </Button>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-blue-900 mb-2">Documentos geralmente exigidos:</h4>
            <ul className="text-xs text-blue-800 space-y-1 list-disc list-inside">
              <li>RG e CPF do requerente</li>
              <li>Comprovante de residência</li>
              <li>Contrato de compra e venda ou escritura</li>
              <li>Certidão negativa de propriedade de imóveis</li>
              <li>Documentos do financiamento (se SFH)</li>
            </ul>
          </div>
        </section>

        <aside className="w-full min-w-0 lg:sticky lg:top-24">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-200">
              <h3 className="text-base font-semibold text-slate-800">Pré-visualização</h3>
              <p className="text-xs text-slate-500 mt-1">O documento final será um PDF em formato A4.</p>
            </div>

            <div className="p-4 overflow-x-auto">
              <div className="origin-top-left scale-[0.88] sm:scale-100 w-[794px]">
                <div className="border border-slate-200 rounded-lg p-4 bg-white">
                  <pre className="text-[11px] sm:text-xs leading-5 text-slate-700 whitespace-pre-wrap break-words font-sans">
                    {getPreviewText()}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </Card>
  );
}
