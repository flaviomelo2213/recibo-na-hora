/**
 * Cede a thread principal para o navegador pintar a próxima frame
 * (ex.: o estado "Gerando PDF...") antes de iniciar trabalho pesado.
 * Mantém a interação rápida (INP) mesmo quando o chunk do jsPDF já está em cache.
 */
export function yieldToMain(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof requestAnimationFrame === 'function') {
      requestAnimationFrame(() => setTimeout(resolve, 0));
    } else {
      setTimeout(resolve, 0);
    }
  });
}
