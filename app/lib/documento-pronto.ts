/** Evento disparado pelas ferramentas depois que um documento é gerado/baixado com sucesso. */
export const EVENTO_DOCUMENTO_PRONTO = 'rnh:documento-pronto';

export function avisarDocumentoPronto(): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new Event(EVENTO_DOCUMENTO_PRONTO));
}
