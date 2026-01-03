"use client";

// app/ferramentas/FerramentasClient.tsx
import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  FileSignature,
  ClipboardList,
  Scale,
  ShieldCheck,
  Sparkles,
  Home,
  Contact,
  Calculator,
  Search,
  ArrowUpRight,
} from "lucide-react";
import { FileTextIcon, ReceiptIcon } from "@/components/icons";

import { CATEGORIES, TOOLS, type ToolCategoryId, type IconKey, type ToolItem } from "@/_data/catalog";

const ICONS: Record<IconKey, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  receipt: ReceiptIcon,
  fileText: FileTextIcon,
  fileSignature: FileSignature,
  clipboard: ClipboardList,
  scale: Scale,
  shield: ShieldCheck,
  sparkles: Sparkles,
  home: Home,
  contact: Contact,
  calculator: Calculator,
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function buildQuery(pathname: string, params: URLSearchParams) {
  const qs = params.toString();
  return qs ? `${pathname}?${qs}` : pathname;
}

function normalize(s: string) {
  return s.trim().toLowerCase();
}

function matchesTool(tool: ToolItem, q: string) {
  if (!q) return true;
  const hay = `${tool.name} ${tool.description}`.toLowerCase();
  return hay.includes(q);
}

export default function FerramentasClient() {
  const pathname = usePathname();
  const router = useRouter();
  const sp = useSearchParams();

  const initialCat = (sp.get("cat") || "todas") as ToolCategoryId | "todas";
  const initialQ = sp.get("q") || "";

  const [q, setQ] = React.useState(initialQ);

  const cat = initialCat;

  const toolsFiltered = React.useMemo(() => {
    const qn = normalize(q);
    return TOOLS.filter((t) => {
      const okCat = cat === "todas" ? true : t.categoryId === cat;
      return okCat && matchesTool(t, qn);
    });
  }, [cat, q]);

  function setParam(key: string, value?: string) {
    const params = new URLSearchParams(sp.toString());
    if (!value || value === "todas") params.delete(key);
    else params.set(key, value);
    router.replace(buildQuery(pathname, params));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setParam("q", q ? q : undefined);
  }

  function clearAll() {
    setQ("");
    const params = new URLSearchParams(sp.toString());
    params.delete("q");
    params.delete("cat");
    router.replace(buildQuery(pathname, params));
  }

  return (
    <div className="space-y-6">
      {/* Topbar */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-4 sm:p-5">
        <div className="flex flex-col gap-4">
          <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <div className="relative flex-1">
              <Search className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Buscar por nome, tag ou descrição…"
                className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 transition"
              >
                Buscar
              </button>
              <button
                type="button"
                onClick={clearAll}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
              >
                Limpar
              </button>
            </div>
          </form>

          {/* Categories pills */}
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex gap-2 overflow-x-auto pb-1 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setParam("cat", undefined)}
                className={cx(
                  "shrink-0 rounded-full border px-3 py-1.5 text-sm transition",
                  cat === "todas"
                    ? "border-indigo-200 bg-indigo-50 text-indigo-700"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                )}
              >
                Todas
              </button>

              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setParam("cat", c.id)}
                  className={cx(
                    "shrink-0 rounded-full border px-3 py-1.5 text-sm transition",
                    cat === c.id
                      ? "border-indigo-200 bg-indigo-50 text-indigo-700"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  )}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="text-sm text-slate-500">
              {toolsFiltered.length} resultado{toolsFiltered.length === 1 ? "" : "s"}
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {toolsFiltered.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}

function ToolCard({ tool }: { tool: ToolItem }) {
  const Icon = tool.iconKey ? ICONS[tool.iconKey] : FileTextIcon;
  const isDisabled = !!tool.comingSoon || !tool.href;

  const badges = tool.badges || [];
  const hasComingSoon = badges.includes("Em breve") || tool.comingSoon;

  const CardInner = (
    <div
      className={cx(
        "rounded-2xl border border-slate-200 bg-white shadow-sm p-5 h-full",
        "transition will-change-transform",
        isDisabled ? "opacity-80" : "hover:shadow-md hover:-translate-y-0.5"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="h-10 w-10 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-center">
            <Icon className="h-5 w-5 text-slate-700" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-sm font-semibold text-slate-900 truncate">{tool.name}</h3>
              {badges.map((b) => (
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
              {hasComingSoon && !badges.includes("Em breve") && (
                <span className="text-[11px] px-2 py-0.5 rounded-full border border-slate-200 bg-white text-slate-500">
                  Em breve
                </span>
              )}
            </div>

            <p className="mt-1 text-sm text-slate-600 line-clamp-2">
              {tool.description}
            </p>
          </div>
        </div>

        {!isDisabled ? (
          <ArrowUpRight className="h-4 w-4 text-slate-400 mt-1 shrink-0" />
        ) : null}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-slate-500">
          Categoria: <span className="text-slate-700">{tool.categoryId}</span>
        </span>
        <span className={cx("text-xs font-medium", isDisabled ? "text-slate-400" : "text-indigo-700")}>
          {isDisabled ? "Em breve" : "Abrir"}
        </span>
      </div>
    </div>
  );

  if (isDisabled) return CardInner;

  return (
    <Link href={tool.href!} className="block">
      {CardInner}
    </Link>
  );
}
