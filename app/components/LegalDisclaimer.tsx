'use client';

import React from 'react';

interface LegalDisclaimerProps {
  showProcuracaoWarning?: boolean;
}

export default function LegalDisclaimer({ showProcuracaoWarning = false }: LegalDisclaimerProps) {
  return (
    <div className="mt-12 max-w-5xl mx-auto">
      <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <i className="fa-solid fa-triangle-exclamation text-3xl text-amber-600"></i>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-amber-900 mb-3">
              AVISO IMPORTANTE - Disclaimer Legal
            </h3>
            <div className="text-sm text-amber-900 space-y-3">
              <p>
                <strong>Este site fornece modelos de caráter meramente educativo e informativo.</strong> Os documentos
                disponibilizados são modelos genéricos que podem não atender todas as especificidades do seu caso.
              </p>
              <p>
                <strong>Recomendamos fortemente que você busque sempre a orientação de profissionais qualificados</strong> antes
                de assinar qualquer documento, incluindo:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Advogados:</strong> Para contratos, procurações e documentos legais</li>
                <li><strong>Contadores:</strong> Para questões fiscais, tributárias e MEI</li>
                <li><strong>Corretores de Imóveis:</strong> Para transações imobiliárias</li>
                <li><strong>Despachantes:</strong> Para documentação junto a órgãos públicos</li>
              </ul>

              {showProcuracaoWarning && (
                <div className="mt-4 pt-4 border-t-2 border-amber-300">
                  <p className="font-bold">
                    <i className="fa-solid fa-gavel mr-2"></i>
                    IMPORTANTE SOBRE PROCURAÇÕES:
                  </p>
                  <p className="mt-2">
                    Para certos atos, a legislação brasileira exige a <strong>Procuração Pública</strong>, que deve ser
                    obrigatoriamente lavrada em <strong>Cartório de Notas</strong> por um Tabelião. A procuração particular
                    (como a gerada por este site) tem validade limitada e pode não ser aceita para determinados atos jurídicos
                    de maior complexidade.
                  </p>
                  <p className="mt-2">
                    Sempre consulte um advogado para determinar qual tipo de procuração é adequado para o seu caso específico.
                  </p>
                </div>
              )}

              <p className="mt-4 pt-4 border-t-2 border-amber-300">
                <strong>Segurança e Privacidade:</strong> Todos os documentos são gerados localmente no seu navegador.
                Este site não armazena, coleta ou retém nenhum dado pessoal ou informação preenchida nos formulários.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
