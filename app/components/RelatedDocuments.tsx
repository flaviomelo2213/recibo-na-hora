import Link from 'next/link';
import { FileText } from 'lucide-react';

export interface RelatedLink {
  href: string;
  label: string;
}

const DEFAULT_LINKS: RelatedLink[] = [
  { href: '/ferramentas/recibo-pix', label: 'Recibo PIX' },
  { href: '/ferramentas/recibo-simples', label: 'Recibo Simples' },
  { href: '/ferramentas/imobiliario', label: 'Recibo de Aluguel' },
  { href: '/ferramentas/orcamento', label: 'Orçamento' },
  { href: '/contratos', label: 'Contratos' },
  { href: '/recibos', label: 'Central de Recibos' },
  { href: '/politica-editorial', label: 'Política Editorial' },
];

interface RelatedDocumentsProps {
  links?: RelatedLink[];
  title?: string;
  className?: string;
}

export default function RelatedDocuments({
  links = DEFAULT_LINKS,
  title = 'Documentos Relacionados',
  className = '',
}: RelatedDocumentsProps) {
  return (
    <section className={`my-10 ${className}`} aria-labelledby="related-documents-heading">
      <h2 id="related-documents-heading" className="text-lg font-bold text-slate-800 mb-4">
        {title}
      </h2>
      <ul className="flex flex-wrap gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-amber-400 hover:bg-amber-50 hover:text-amber-800"
            >
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
