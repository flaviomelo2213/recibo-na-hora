'use client';

import React, { useState, ChangeEvent } from 'react';
import type { CurriculumData, ExperienceItem, EducationItem } from './types';
import SignaturePad from './SignaturePad';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

interface FerramentaCurriculoProfissionalProps {
  data: CurriculumData;
  onDataChange: (data: CurriculumData) => void;
}

export default function FerramentaCurriculoProfissional({ data, onDataChange }: FerramentaCurriculoProfissionalProps) {
  const [showSignaturePad, setShowSignaturePad] = useState(false);

  const handlePersonalInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
    onDataChange({ ...data, dadosPessoais: { ...data.dadosPessoais, [e.target.name]: e.target.value } });
  };

  const handleFieldChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onDataChange({ ...data, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, field: 'fotoDataUrl' | 'assinaturaDataUrl') => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onDataChange({ ...data, [field]: event.target.result as string });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleAddItem = (list: 'experiencia' | 'educacao') => {
    const newItem = list === 'experiencia' ? 
      { id: Date.now(), cargo: '', empresa: '', inicio: '', fim: '', atividades: '' } : 
      { id: Date.now(), curso: '', instituicao: '', ano: '' };
    onDataChange({ ...data, [list]: [...data[list], newItem] });
  };

  const handleRemoveItem = (list: 'experiencia' | 'educacao', id: number) => {
    onDataChange({ ...data, [list]: data[list].filter(item => item.id !== id) });
  };

  const handleItemChange = (list: 'experiencia' | 'educacao', id: number, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updatedList = data[list].map(item => 
      item.id === id ? { ...item, [e.target.name]: e.target.value } : item
    );
    onDataChange({ ...data, [list]: updatedList as any });
  };

  const generatePDF = () => {
    const previewElement = document.getElementById('preview-content');
    if (previewElement) {
      html2canvas(previewElement, { scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('curriculo.pdf');
      });
    }
  };

  return (
    <div>
      {showSignaturePad && 
        <SignaturePad 
          onSave={(dataUrl) => onDataChange({ ...data, assinaturaDataUrl: dataUrl })}
          onClose={() => setShowSignaturePad(false)}
        />
      }

      <div className="space-y-6">
        {/* Dados Pessoais */}
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-3">Dados Pessoais</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="nome" placeholder="Nome Completo" value={data.dadosPessoais.nome} onChange={handlePersonalInfoChange} className="p-2 border rounded-md" />
            <input name="cargo" placeholder="Cargo Desejado" value={data.dadosPessoais.cargo} onChange={handlePersonalInfoChange} className="p-2 border rounded-md" />
            <input name="email" type="email" placeholder="E-mail" value={data.dadosPessoais.email} onChange={handlePersonalInfoChange} className="p-2 border rounded-md" />
            <input name="telefone" placeholder="Telefone" value={data.dadosPessoais.telefone} onChange={handlePersonalInfoChange} className="p-2 border rounded-md" />
            <input name="cidade" placeholder="Cidade, Estado" value={data.dadosPessoais.cidade} onChange={handlePersonalInfoChange} className="p-2 border rounded-md" />
            <input name="linkedin" placeholder="URL LinkedIn" value={data.dadosPessoais.linkedin} onChange={handlePersonalInfoChange} className="p-2 border rounded-md" />
            <input name="portfolio" placeholder="URL Portfólio/Site" value={data.dadosPessoais.portfolio} onChange={handlePersonalInfoChange} className="p-2 border rounded-md" />
          </div>
        </div>

        {/* Resumo */}
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-2">Resumo Profissional</h3>
          <textarea name="resumo" placeholder="Fale sobre você..." value={data.resumo} onChange={handleFieldChange} className="p-2 border rounded-md w-full h-24" />
        </div>
        
        {/* Foto e Assinatura */}
        <div className="p-4 border rounded-md">
           <h3 className="font-semibold mb-3">Foto e Assinatura</h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                  <label className="text-sm font-medium">Foto Profissional</label>
                  <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'fotoDataUrl')} className="mt-1 p-2 border rounded-md w-full"/>
              </div>
              <div>
                <label className="text-sm font-medium">Assinatura</label>
                <div className="flex gap-2 mt-1">
                    <button onClick={() => setShowSignaturePad(true)} className="p-2 border rounded-md w-full hover:bg-slate-50">Desenhar</button>
                    <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'assinaturaDataUrl')} className="p-2 border rounded-md w-full" />
                </div>
              </div>
           </div>
        </div>

        {/* Experiência */}
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-3">Experiência Profissional</h3>
          {data.experiencia.map((item, index) => (
            <div key={item.id} className="border p-3 rounded-md mb-3 space-y-2">
              <input name="cargo" placeholder="Cargo" value={item.cargo} onChange={(e) => handleItemChange('experiencia', item.id, e)} className="p-2 border rounded-md w-full"/>
              <div className="flex gap-2">
                <input name="empresa" placeholder="Empresa" value={item.empresa} onChange={(e) => handleItemChange('experiencia', item.id, e)} className="p-2 border rounded-md flex-1"/>
                <input name="inicio" placeholder="Início" value={item.inicio} onChange={(e) => handleItemChange('experiencia', item.id, e)} className="p-2 border rounded-md w-28"/>
                <input name="fim" placeholder="Fim" value={item.fim} onChange={(e) => handleItemChange('experiencia', item.id, e)} className="p-2 border rounded-md w-28"/>
              </div>
              <textarea name="atividades" placeholder="Principais atividades" value={item.atividades} onChange={(e) => handleItemChange('experiencia', item.id, e)} className="p-2 border rounded-md w-full h-20" />
              <button onClick={() => handleRemoveItem('experiencia', item.id)} className="text-red-500 text-sm">Remover</button>
            </div>
          ))}
          <button onClick={() => handleAddItem('experiencia')} className="p-2 border rounded-md hover:bg-slate-50">+ Adicionar Experiência</button>
        </div>

        {/* Educação */}
        <div className="p-4 border rounded-md">
            <h3 className="font-semibold mb-3">Educação</h3>
            {data.educacao.map((item) => (
                <div key={item.id} className="border p-3 rounded-md mb-3 space-y-2">
                    <input name="curso" placeholder="Curso" value={item.curso} onChange={(e) => handleItemChange('educacao', item.id, e)} className="p-2 border rounded-md w-full" />
                    <div className="flex gap-2">
                        <input name="instituicao" placeholder="Instituição" value={item.instituicao} onChange={(e) => handleItemChange('educacao', item.id, e)} className="p-2 border rounded-md flex-1" />
                        <input name="ano" placeholder="Ano de Conclusão" value={item.ano} onChange={(e) => handleItemChange('educacao', item.id, e)} className="p-2 border rounded-md w-40" />
                    </div>
                    <button onClick={() => handleRemoveItem('educacao', item.id)} className="text-red-500 text-sm">Remover</button>
                </div>
            ))}
            <button onClick={() => handleAddItem('educacao')} className="p-2 border rounded-md hover:bg-slate-50">+ Adicionar Formação</button>
        </div>

        {/* Habilidades e Idiomas */}
        <div className="p-4 border rounded-md">
            <h3 className="font-semibold mb-3">Habilidades e Idiomas</h3>
            <textarea name="habilidades" placeholder="Ex: HTML, CSS, React, Liderança" value={data.habilidades} onChange={handleFieldChange} className="p-2 border rounded-md w-full mb-2" />
            <input name="idiomas" placeholder="Ex: Inglês (Fluente), Espanhol (Básico)" value={data.idiomas} onChange={handleFieldChange} className="p-2 border rounded-md w-full" />
        </div>

        {/* Ações */}
        <div className="flex gap-3">
            <button onClick={generatePDF} className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition">Baixar PDF</button>
        </div>
      </div>
    </div>
  );
}
