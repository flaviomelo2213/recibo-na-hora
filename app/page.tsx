// app/page.tsx
import Link from "next/link";
import { CATEGORIES, TOOLS } from "@/_data/catalog";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function HomePage() {
  const mostUsed = TOOLS.filter((t) => t.mostUsed).slice(0, 6);

  return (
    <main className="bg-gradient-to-b from-white to-slate-50">
      {/* HERO */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-16">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            Documentos simples,
            <span className="block bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              para uma vida sem complicação.
            </span>
          </h1>

          <p className="mt-6 text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Crie recibos, contratos, requerimentos e outros documentos essenciais em segundos.
            Ferramentas online, gratuitas e sem burocracia.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/ferramentas"
              className="group rounded-2xl bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-200 hover:-translate-y-0.5"
            >
              Explorar ferramentas
            </Link>
            <Link
              href="/como-ganhamos-dinheiro"
              className="rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
            >
              Como funciona (transparência)
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-500">
            <Link className="font-medium hover:text-slate-900 transition-colors" href="/parcerias">
              Parceiros Oficiais
            </Link>
            <span className="text-slate-300">•</span>
            <Link className="font-medium hover:text-slate-900 transition-colors" href="/como-ganhamos-dinheiro">
              Transparência
            </Link>
          </div>
        </div>
      </section>

      {/* MAIS USADOS */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pb-16">
        <header className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Mais usados</h2>
            <p className="mt-2 text-base text-slate-600">Os modelos mais acessados para resolver rápido.</p>
          </div>
          <Link
            href="/ferramentas"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors flex items-center gap-1 group"
          >
            Ver tudo
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mostUsed.map((t) => {
            const disabled = !!t.comingSoon || !t.href;
            return (
              <div
                key={t.id}
                className={cx(
                  "group rounded-2xl bg-white shadow-lg shadow-slate-200/50 border border-slate-100 p-6 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300",
                  disabled ? "opacity-70" : "hover:-translate-y-1"
                )}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <h3 className="text-base font-bold text-slate-900 truncate">{t.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {(t.badges || []).map((b) => (
                        <span
                          key={b}
                          className={cx(
                            "text-[10px] font-semibold px-2.5 py-1 rounded-full",
                            b === "Popular" && "bg-emerald-100 text-emerald-700",
                            b === "Novo" && "bg-sky-100 text-sky-700",
                            b === "Grátis" && "bg-slate-100 text-slate-700",
                            b === "Beta" && "bg-amber-100 text-amber-700",
                            b === "Em breve" && "bg-slate-50 text-slate-500"
                          )}
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">{t.description}</p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  {disabled ? (
                    <span className="text-sm font-medium text-slate-400">Em breve</span>
                  ) : (
                    <Link
                      href={t.href!}
                      className="inline-flex items-center justify-center w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition-colors"
                    >
                      Abrir ferramenta
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
        <header className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Categorias</h2>
          <p className="mt-2 text-base text-slate-600">Navegue por tipo e encontre o que precisa.</p>
        </header>

        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {CATEGORIES.map((c) => (
            <Link
              key={c.id}
              href={`/ferramentas?cat=${encodeURIComponent(c.id)}`}
              className="shrink-0 rounded-full bg-white border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:shadow transition-all duration-200"
            >
              {c.label}
            </Link>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Link
            href="/parcerias"
            className="group rounded-2xl border border-slate-100 bg-white shadow-lg shadow-slate-200/50 p-8 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-base font-bold text-slate-900">Parceiros Oficiais</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Colaboramos com parceiros para oferecer mais soluções e transparência.
            </p>
            <span className="mt-4 inline-flex items-center text-sm font-semibold text-indigo-600 group-hover:text-indigo-700 transition-colors">
              Ver parcerias
              <svg className="ml-1.5 w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

          <Link
            href="/como-ganhamos-dinheiro"
            className="group rounded-2xl border border-slate-100 bg-white shadow-lg shadow-slate-200/50 p-8 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-base font-bold text-slate-900">Transparência</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Entenda como mantemos o projeto no ar e como a monetização funciona.
            </p>
            <span className="mt-4 inline-flex items-center text-sm font-semibold text-indigo-600 group-hover:text-indigo-700 transition-colors">
              Ler transparência
              <svg className="ml-1.5 w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
