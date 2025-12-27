import React from 'react';
import { ProcuracaoData } from './FerramentaProcuracaoProfissional';

interface PreviewProcuracaoProfissionalProps {
  data: ProcuracaoData;
}

export default function PreviewProcuracaoProfissional({ data }: PreviewProcuracaoProfissionalProps) {
  const formatarData = (dataString: string): string => {
    if (!dataString || !/^\d{4}-\d{2}-\d{2}$/.test(dataString)) {
      return '...';
    }
    const [year, month, day] = dataString.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="text-xs text-gray-700 h-full flex flex-col p-4 bg-white font-serif">
      <h2 className="text-center font-bold text-base mb-6">PROCURAÇÃO</h2>
      <div className="space-y-3 leading-relaxed flex-grow">
        <p>
          <strong>OUTORGANTE:</strong> {data.outorganteNome || 'Nome do Outorgante'}, brasileiro(a), portador(a) do CPF nº {data.outorganteCPF || '000.000.000-00'}, RG nº {data.outorganteRG || '00.000.000-0'}, residente e domiciliado(a) no endereço {data.outorganteEndereco || 'Endereço do Outorgante'}.
        </p>
        <p>
          <strong>OUTORGADO:</strong> {data.outorgadoNome || 'Nome do Outorgado'}, brasileiro(a), portador(a) do CPF nº {data.outorgadoCPF || '000.000.000-00'}, RG nº {data.outorgadoRG || '00.000.000-0'}, com endereço profissional em {data.outorgadoEndereco || 'Endereço do Outorgado'}.
        </p>
        <p>
          <strong>PODERES:</strong> Pelo presente instrumento particular de procuração, o OUTORGANTE nomeia e constitui seu bastante procurador o OUTORGADO, para o fim específico de: {data.poderes || '...'}.
        </p>
      </div>
      <div className="mt-8 text-center">
         <p>{data.cidade || 'Cidade'}, {formatarData(data.data)}</p>
      </div>
      <div className="mt-12 pt-8 text-center">
        <p className="border-t border-gray-400 w-64 mx-auto pt-2">
          {data.outorganteNome || 'Assinatura do Outorgante'}
        </p>
      </div>
    </div>
  );
}
