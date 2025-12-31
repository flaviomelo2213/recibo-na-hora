// app/page.tsx
import Link from "next/link";
import { CATEGORIES, TOOLS } from "@/_data/catalog";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function HomePage() {
  const mostUsed = TOOLS.filter((t) => t.mostUsed).slice(0, 6);

  return (
    <main className="bg-[#F8FAF0]">
      {/* HERO */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
            Documentos simples,
            <span className="block text-indigo-600">para uma vida sem complicação.</span>
          </h1>

          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Crie recibos, contratos, requerimentos e outros documentos essenciais em segundos.
            Ferramentas online, gratuitas e sem burocracia.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="/ferramentas"
              className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 transition"
            >
              Explorar ferramentas
            </Link>
            <Link
              href="/como-ganhamos-dinheiro"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
            >
              Como funciona (transparência)
            </Link>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-slate-500">
            <Link className="hover:text-slate-700 transition" href="/parcerias">
              Parceiros Oficiais
            </Link>
            <span className="text-slate-300">•</span>
            <Link className="hover:text-slate-700 transition" href="/como-ganhamos-dinheiro">
              Transparência
            </Link>
          </div>
        </div>
      </section>

      {/* MAIS USADOS */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pb-12">
        <header className="flex items-end justify-between gap-4 mb-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Mais usados</h2>
            <p className="mt-1 text-slate-600">Os modelos mais acessados para resolver rápido.</p>
          </div>
          <Link
            href="/ferramentas"
            className="text-sm font-medium text-indigo-700 hover:text-indigo-800 transition"
          >
            Ver tudo
          </Link>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mostUsed.map((t) => {
            const disabled = !!t.comingSoon || !t.href;
            return (
              <div
                key={t.id}
                className={cx(
                  "rounded-2xl border border-slate-200 bg-white shadow-sm p-5",
                  disabled ? "opacity-80" : "hover:shadow-md hover:-translate-y-0.5 transition"
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm font-semibold text-slate-900 truncate">{t.name}</h3>
                      {(t.badges || []).map((b) => (
                        <span
                          key={b}
                          className={cx(
                            "text-[11px] px-2 py-0.5 rounded-full border",
                            b === "Popular" && "border-emerald-200 bg-emerald-50 text-emerald-700",
                            b === "Novo" && "border-sky-200 bg-sky-50 text-sky-700",
                            b === "Grátis" && "border-slate-200 bg-slate-50 text-slate-700",
                            b === "Beta" && "border-amber-200 bg-amber-50 text-amber-700",
                            b === "Em breve" && "border-slate-200 bg-white text-slate-500"
                          )}
                        >
                          {b}
                        </span>
                      ))}
                    </div>

                    <p className="mt-1 text-sm text-slate-600 line-clamp-2">{t.description}</p>
                  </div>

                  <div className="text-xs font-medium text-slate-400">{disabled ? "Em breve" : "Abrir"}</div>
                </div>

                <div className="mt-4">
                  {disabled ? (
                    <span className="text-sm text-slate-400">Sem link por enquanto</span>
                  ) : (
                    <Link
                      href={t.href!}
                      className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 transition"
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
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pb-14">
        <header className="mb-5">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Categorias</h2>
          <p className="mt-1 text-slate-600">Navegue por tipo e encontre o que precisa.</p>
        </header>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {CATEGORIES.map((c) => (
            <Link
              key={c.id}
              href={`/ferramentas?cat=${encodeURIComponent(c.id)}`}
              className="shrink-0 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition"
            >
              {c.label}
            </Link>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Link
            href="/parcerias"
            className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition"
          >
            <h3 className="text-sm font-semibold text-slate-900">Parceiros Oficiais</h3>
            <p className="mt-1 text-sm text-slate-600">
              Colaboramos com parceiros para oferecer mais soluções e transparência.
            </p>
            <span className="mt-3 inline-block text-sm font-medium text-indigo-700">Ver parcerias</span>
          </Link>

          <Link
            href="/como-ganhamos-dinheiro"
            className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition"
          >
            <h3 className="text-sm font-semibold text-slate-900">Transparência</h3>
            <p className="mt-1 text-sm text-slate-600">
              Entenda como mantemos o projeto no ar e como a monetização funciona.
            </p>
            <span className="mt-3 inline-block text-sm font-medium text-indigo-700">Ler transparência</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
