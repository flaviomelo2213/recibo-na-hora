/** Aviso curto exibido ao lado de cada botão "Melhorar com IA". */
export default function AvisoGemini({ className = '' }: { className?: string }) {
  return (
    <span className={`block text-xs text-slate-500 ${className}`}>
      O texto será enviado ao Google Gemini para sugestões.
    </span>
  );
}
