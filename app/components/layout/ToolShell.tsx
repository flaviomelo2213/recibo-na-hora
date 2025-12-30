'use client';

import React from 'react';
import { ChevronLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';

export interface ToolShellProps {
  title: string;
  description: string;
  faqItems: { question: string; answer: string }[];
  children: React.ReactNode;
  referenceLink?: { href: string; text: string; };
}

export function ToolShell({ title, description, faqItems, children, referenceLink }: ToolShellProps) {
  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 md:px-0">
        {/* Cabeçalho e Navegação */}
        <div className="mb-10">
            <Link href="/ferramentas" className="flex items-center text-sm text-slate-600 hover:text-indigo-600 font-medium mb-4 transition-colors">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Voltar para Todas as Ferramentas
            </Link>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">{title}</h1>
            <p className="mt-3 text-lg text-slate-600 max-w-3xl">{description}</p>
            {referenceLink && (
              <a href={referenceLink.href} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-indigo-600 hover:text-indigo-800 font-medium mt-3 transition-colors">
                {referenceLink.text}
                <ExternalLink className="w-4 h-4 ml-1.5" />
              </a>
            )}
        </div>

        {/* Layout Principal (Gerador e Preview) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="md:col-span-1">
                {children}  {/* Aqui entra o gerador específico da ferramenta */}
            </div>
            <div className="md:col-span-1">
                 {/* Placeholder para Preview (pode ser adicionado depois) */}
            </div>
        </div>

        {/* Seção de FAQ */}
        <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 text-center mb-6">Dúvidas Frequentes</h2>
            <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-base">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    </div>
  );
}
