import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

interface EditorialTrustBoxProps {
  className?: string;
}

export default function EditorialTrustBox({ className = '' }: EditorialTrustBoxProps) {
  return (
    <aside
      className={`my-10 flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600 ${className}`}
      aria-label="Informações sobre este conteúdo"
    >
      <ShieldCheck className="w-5 h-5 flex-shrink-0 text-slate-400 mt-0.5" />
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-medium text-slate-700">
          <span>Conteúdo informativo</span>
          <span className="text-slate-300">•</span>
          <span>Atualizado por Equipe ReciboNaHora</span>
          <span className="text-slate-300">•</span>
          <span>Revisado periodicamente</span>
        </div>
        <p>
          Este conteúdo tem finalidade educativa e não substitui a orientação de
          um advogado, contador ou órgão público. Em caso de dúvida, consulte um
          profissional habilitado.
        </p>
        <p className="text-slate-500">
          Saiba como produzimos e revisamos nosso conteúdo na{' '}
          <Link href="/politica-editorial" className="font-medium text-slate-700 hover:text-amber-700 hover:underline">
            Política Editorial
          </Link>{' '}
          ou fale com a gente pelo{' '}
          <Link href="/contato" className="font-medium text-slate-700 hover:text-amber-700 hover:underline">
            Contato
          </Link>
          .
        </p>
      </div>
    </aside>
  );
}
