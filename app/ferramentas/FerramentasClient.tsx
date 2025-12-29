'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { TOOL_CATALOG } from '../_data/catalog';
import { Card } from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { Input } from '../components/ui/Input';
import * as Icons from 'lucide-react';
import React from 'react';

// Helper to get Lucide icon component by name
const Icon = ({ name, ...props }: { name: string } & Icons.LucideProps) => {
  const LucideIcon = Icons[name as keyof typeof Icons] as React.ElementType;
  if (LucideIcon) {
    return <LucideIcon {...props} />;
  }
  return <Icons.FileText {...props} />; // Fallback icon
};

export default function FerramentasClient() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && (TOOL_CATALOG.CATEGORIES.some(c => c.id === categoryParam) || categoryParam === 'all')) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams]);

  const filteredTools = useMemo(() => {
    return TOOL_CATALOG.TOOLS.filter(tool => {
      const matchesCategory = activeCategory === 'all' || tool.categoryId === activeCategory;
      const matchesSearch =
        searchTerm === '' ||
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (tool.badges && tool.badges.some(badge => badge.toLowerCase().includes(searchTerm.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div>
      {/* Filtros */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="w-full md:max-w-md">
          <Input
            placeholder="Buscar por nome, tag ou descrição..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full text-base"
            icon={<Icons.Search className="h-5 w-5 text-slate-400" />}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              activeCategory === 'all' ? 'bg-indigo-600 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            Todas
          </button>
          {TOOL_CATALOG.CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeCategory === cat.id ? 'bg-indigo-600 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Ferramentas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredTools.map(tool => {
          const { id, comingSoon, href, icon, badges, name, description } = tool;
          const mainBadge = badges && badges.length > 0 ? badges[0] : null;

          return (
            <div key={id} className={`${comingSoon ? 'opacity-60 cursor-not-allowed' : ''}`}>
              <Link href={comingSoon ? '#' : href || '#'} passHref className={`${comingSoon ? 'pointer-events-none' : ''}`}>
                <Card className="flex flex-col p-6 rounded-2xl shadow-soft hover:shadow-lg transition-all h-full transform hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-slate-100 text-slate-600 p-3 rounded-xl">
                      <Icon name={icon} className="w-6 h-6" />
                    </div>
                    {(mainBadge || comingSoon) && (
                      <Badge>
                        {comingSoon ? 'Em Breve' : mainBadge}
                      </Badge>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{name}</h3>
                    <p className="mt-1 text-sm text-slate-600 flex-grow">{description}</p>
                  </div>
                </Card>
              </Link>
            </div>
          );
        })}
      </div>

      {filteredTools.length === 0 && (
        <div className="text-center py-16">
          <Icons.SearchX className="mx-auto h-12 w-12 text-slate-400" />
          <h3 className="mt-4 text-xl font-semibold text-slate-800">Nenhuma ferramenta encontrada</h3>
          <p className="mt-2 text-slate-500">Tente ajustar sua busca ou limpar os filtros.</p>
        </div>
      )}
    </div>
  );
}
