import { ArrowRight, Bot, FileText, MousePointerClick, Smartphone } from "lucide-react";

/**
 * Banner do produto próprio "Guia Visual: Destrave Seu CNIS" (Guia do Contribuinte).
 * Usa apenas cores já presentes no site (blue-900 / slate-900 / amber / green).
 * Não usa <h2>/<h3> para não alterar a hierarquia de títulos das páginas.
 */
const COURSE_URL = "https://guiadocontribuinte.com.br/destrave-seu-cnis";

const features = [
  {
    icon: Smartphone,
    iconClass: "text-amber-400",
    title: "10 Módulos Visuais Completos",
    text: "20 siglas, bancos FGTS 1992, RAIS e exterior",
  },
  {
    icon: FileText,
    iconClass: "text-green-300",
    title: "5 Geradores Automáticos",
    text: "Inclui 5º gerador de Acordo Internacional",
  },
  {
    icon: Bot,
    iconClass: "text-blue-300",
    title: "Super Prompt de IA + PDF",
    text: "Audite seu CNIS com IA ou imprima a apostila",
  },
];

export default function CnisCourseBanner() {
  return (
    <aside
      aria-label="Guia Visual Destrave Seu CNIS"
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white px-5 py-10 sm:px-10 sm:py-12"
    >
      <div className="relative mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wide text-amber-400">
          <MousePointerClick className="w-4 h-4" aria-hidden="true" />
          10 módulos visuais + 5 geradores automáticos + prompt de IA
        </span>

        <p className="mt-4 text-sm font-medium text-blue-100">
          Pendências no CNIS ou vínculos antigos sumidos no INSS?
        </p>

        <p className="mt-3 text-2xl sm:text-4xl font-extrabold leading-tight tracking-tight">
          Guia Visual Passo a Passo:{" "}
          <span className="text-amber-400">Destrave Seu CNIS</span> + Gerador
          Interativo de Requerimentos
        </p>

        <p className="mt-5 text-sm sm:text-base text-blue-100 leading-relaxed max-w-3xl mx-auto">
          Recupere anos de trabalho em <strong className="text-white">empresas falidas</strong>, limpe as{" "}
          <strong className="text-amber-400">20 siglas de pendência</strong> (
          <code className="font-mono text-amber-400">PEXT / PVIN</code>), resgate seu{" "}
          <strong className="text-white">FGTS anterior a 1992</strong>, some{" "}
          <strong className="text-white">tempo no exterior (EUA/Europa/Japão)</strong> e gere seus 5
          requerimentos prontos em <strong className="text-green-300">menos de 15 minutos</strong>.
        </p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-3 text-left">
          {features.map(({ icon: Icon, iconClass, title, text }) => (
            <li
              key={title}
              className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/5 p-4"
            >
              <Icon className={`w-6 h-6 flex-shrink-0 ${iconClass}`} aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-xs text-blue-100 mt-0.5">{text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={COURSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-400 px-7 py-3.5 font-bold text-slate-900 hover:bg-amber-300 transition-colors"
          >
            Quero destravar meu CNIS
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
          <p className="text-sm text-blue-100">
            Guia completo por apenas <span className="font-semibold text-white">R$ 29,90</span>
          </p>
        </div>
      </div>
    </aside>
  );
}
