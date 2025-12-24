import React from 'react';

export default function LegalDisclaimer() {
  return (
    <div className="bg-red-50 p-6 rounded-xl border border-red-100 mt-8 mb-8">
      <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
        {/* Nota: Certifique-se de que o FontAwesome está carregado no layout.tsx */}
        <i className="fa-solid fa-scale-balanced"></i> Aviso Legal Importante
      </h4>
      <p className="text-sm text-red-900 leading-relaxed text-justify">
        O <strong>ReciboNaHora</strong> fornece modelos de documentos automatizados para fins informativos e administrativos. 
        Esta ferramenta <strong>não substitui a consultoria de um advogado ou contador</strong>. 
        Recomendamos que contratos complexos, rescisões trabalhistas e procurações sejam sempre revisados por um profissional habilitado para garantir a segurança jurídica específica do seu caso. O uso deste modelo é de responsabilidade exclusiva do usuário.
      </p>
    </div>
  );
}
