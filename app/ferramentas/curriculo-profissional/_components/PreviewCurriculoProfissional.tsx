'use client';

import React from 'react';
import type { CurriculumData } from './types';

interface PreviewCurriculoProfissionalProps {
  data: CurriculumData;
}

export default function PreviewCurriculoProfissional({ data }: PreviewCurriculoProfissionalProps) {
  return (
    <div className="text-sm leading-relaxed">
      {/* Cabeçalho */}
      <header className="flex items-start justify-between gap-8 mb-8">
        <div className="flex-grow">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            {data.dadosPessoais.nome || 'Nome Completo'}
          </h1>
          <h2 className="text-lg font-semibold text-blue-700 mt-1">
            {data.dadosPessoais.cargo || 'Cargo Desejado'}
          </h2>
          <div className="text-xs text-slate-600 mt-4 space-y-1">
            {data.dadosPessoais.email && <p>{data.dadosPessoais.email}</p>}
            {data.dadosPessoais.telefone && <p>{data.dadosPessoais.telefone}</p>}
            {data.dadosPessoais.cidade && <p>{data.dadosPessoais.cidade}</p>}
            <div className="flex gap-4">
              {data.dadosPessoais.linkedin && <a href={data.dadosPessoais.linkedin} className="text-blue-600 hover:underline">LinkedIn</a>}
              {data.dadosPessoais.portfolio && <a href={data.dadosPessoais.portfolio} className="text-blue-600 hover:underline">Portfólio</a>}
            </div>
          </div>
        </div>
        {data.fotoDataUrl && (
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-slate-200 flex-shrink-0">
            <img src={data.fotoDataUrl} alt="Foto Profissional" className="w-full h-full object-cover" />
          </div>
        )}
      </header>

      {/* Corpo */}
      <main>
        {data.resumo && (
          <section className="mb-6">
            <h3 className="text-base font-bold text-slate-800 border-b-2 border-slate-200 pb-1 mb-2">Resumo Profissional</h3>
            <p className="text-slate-700 whitespace-pre-wrap">{data.resumo}</p>
          </section>
        )}

        {data.experiencia.length > 0 && (
          <section className="mb-6">
            <h3 className="text-base font-bold text-slate-800 border-b-2 border-slate-200 pb-1 mb-3">Experiência Profissional</h3>
            <div className="space-y-4">
              {data.experiencia.map(exp => (
                <div key={exp.id}>
                  <h4 className="font-semibold text-slate-900">{exp.cargo || 'Cargo'}</h4>
                  <div className="flex justify-between text-xs text-slate-600">
                    <p>{exp.empresa || 'Empresa'}</p>
                    <p>{exp.inicio}{exp.fim && ` - ${exp.fim}`}</p>
                  </div>
                  <p className="text-slate-700 mt-1 whitespace-pre-wrap text-xs">{exp.atividades}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {data.educacao.length > 0 && (
          <section className="mb-6">
            <h3 className="text-base font-bold text-slate-800 border-b-2 border-slate-200 pb-1 mb-3">Educação</h3>
            <div className="space-y-3">
              {data.educacao.map(edu => (
                <div key={edu.id}>
                  <h4 className="font-semibold text-slate-900">{edu.curso || 'Curso ou Formação'}</h4>
                  <div className="flex justify-between text-xs text-slate-600">
                    <p>{edu.instituicao || 'Instituição de Ensino'}</p>
                    <p>{edu.ano || 'Ano'}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {data.habilidades && (
          <section className="mb-6">
            <h3 className="text-base font-bold text-slate-800 border-b-2 border-slate-200 pb-1 mb-2">Habilidades</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {data.habilidades.split(',').map(h => h.trim()).filter(h => h).map((h, i) => (
                <span key={i} className="bg-slate-100 text-slate-700 text-xs font-medium px-2 py-1 rounded-md">{h}</span>
              ))}
            </div>
          </section>
        )}

        {data.idiomas && (
          <section className="mb-6">
            <h3 className="text-base font-bold text-slate-800 border-b-2 border-slate-200 pb-1 mb-2">Idiomas</h3>
            <p className="text-slate-700">{data.idiomas}</p>
          </section>
        )}

      </main>

      {/* Rodapé com Assinatura */}
      {data.assinaturaDataUrl && (
        <footer className="mt-12 pt-8 text-center">
          <img src={data.assinaturaDataUrl} alt="Assinatura" className="h-16 mx-auto" />
          <div className="w-64 h-px bg-slate-400 mx-auto mt-1"></div>
          <p className="text-xs text-slate-600 mt-1">Assinatura</p>
        </footer>
      )}
    </div>
  );
}
