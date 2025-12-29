
import Link from 'next/link';
import { TOOL_CATALOG } from './_data/catalog';
import { Card } from './components/ui/Card';
import Badge from './components/ui/Badge';
import * as Icons from 'lucide-react';
import { Button } from './components/ui/Button';
import React from 'react';

// Helper to get Lucide icon component by name
const Icon = ({ name, ...props }: { name: string } & Icons.LucideProps) => {
  const LucideIcon = Icons[name as keyof typeof Icons] as React.ElementType;
  if (LucideIcon) {
    return <LucideIcon {...props} />;
  }
  return <Icons.FileText {...props} />; // Fallback icon
};

export default function HomePage() {
  const popularTools = TOOL_CATALOG.TOOLS.filter(tool => tool.badges?.includes('Popular')).slice(0, 6);

  return (
    <div className="bg-[#F8FAF0] min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. Hero Section */}
        <section className="text-center py-20 md:py-32">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tighter">
            Documentos simples, <br /> 
            <span className="text-indigo-600">para uma vida sem complicação.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600">
            Crie recibos, contratos, requerimentos e outros documentos essenciais em segundos. Ferramentas online, grátis e sem burocracia.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/30">
              <Link href="/ferramentas/recibo-simples">Criar Recibo Agora</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-white/80 backdrop-blur-sm">
              <Link href="/ferramentas">Explorar Todos os Modelos</Link>
            </Button>
          </div>
        </section>

        {/* 2. Seção "Mais Usados" */}
        <section className="pb-20">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-10">Mais Populares</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTools.map(tool => (
              <Link href={tool.href || '#'} key={tool.id} passHref>
                 <Card className="flex flex-col p-6 rounded-2xl shadow-soft hover:shadow-md transition-all h-full transform hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-indigo-100 text-indigo-600 p-3 rounded-xl">
                       <Icon name={tool.icon} className="w-6 h-6" />
                    </div>
                    {tool.badges && tool.badges[0] && <Badge>{tool.badges[0]}</Badge>}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{tool.name}</h3>
                    <p className="mt-1 text-sm text-slate-600">{tool.description}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* 3. Seção "Categorias" */}
        <section className="pb-20 text-center">
           <h2 className="text-3xl font-bold text-slate-800 mb-6">Explore por Categoria</h2>
           <div className="flex flex-wrap justify-center gap-3">
                {TOOL_CATALOG.CATEGORIES.map(category => (
                    <Link href={`/ferramentas?category=${encodeURIComponent(category.id)}`} key={category.id} passHref>
                         <Badge className="text-md px-4 py-2 rounded-full cursor-pointer hover:bg-slate-100 transition-colors">
                            {category.label}
                         </Badge>
                    </Link>
                ))}
           </div>
        </section>
        
        {/* 4 & 5. Seções de Confiança (Parcerias e Transparência) */}
        <section className="pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                 {/* Parcerias */}
                 <Link href="/parcerias">
                    <Card className="p-8 rounded-2xl flex items-center gap-6 hover:bg-slate-50 transition-colors">
                        <div className="bg-emerald-100 text-emerald-600 p-4 rounded-xl">
                             <Icons.ShieldCheck className="w-8 h-8" />
                        </div>
                        <div>
                             <h3 className="font-bold text-slate-800 text-lg">Parceiros Oficiais</h3>
                             <p className="text-slate-600 text-sm">Colaboramos com os melhores para oferecer mais a você.</p>
                        </div>
                    </Card>
                 </Link>
                 
                 {/* Transparência */}
                 <Link href="/como-ganhamos-dinheiro">
                     <Card className="p-8 rounded-2xl flex items-center gap-6 hover:bg-slate-50 transition-colors">
                         <div className="bg-amber-100 text-amber-600 p-4 rounded-xl">
                             <Icons.Sparkles className="w-8 h-8" />
                         </div>
                         <div>
                             <h3 className="font-bold text-slate-800 text-lg">Transparência</h3>
                             <p className="text-slate-600 text-sm">Entenda como nosso negócio funciona e se sustenta.</p>
                         </div>
                     </Card>
                 </Link>
            </div>
        </section>
      </main>
    </div>
  );
}
