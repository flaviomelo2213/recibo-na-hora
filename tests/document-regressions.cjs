const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
require.extensions['.ts'] = (module, file) => {
  const result = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true },
    fileName: file,
  });
  module._compile(result.outputText, file);
};
const { validateReceipt } = require('../app/lib/receipt-validation.ts');
const { buildCurriculumPdf } = require('../app/lib/curriculum-pdf.ts');
const validReceipt = {
  recebedorNome: 'RECEBEDOR TESTE', pagadorNome: 'PAGADOR TESTE', valor: '150.50',
  valorExtenso: 'Cento e cinquenta reais e cinquenta centavos', descricao: 'Serviço fictício',
  cidade: 'Cidade de Teste', data: '2026-11-10',
};
test('blocks missing receipt essentials while leaving fiscal documents optional', () => {
  assert.deepEqual(validateReceipt(validReceipt), {});
  for (const field of Object.keys(validReceipt))
    assert.ok(validateReceipt({ ...validReceipt, [field]: ' ' })[field], field);
});
test('rejects invalid amounts, placeholder descriptions and impossible dates', () => {
  for (const valor of ['0', '-1', 'NaN', 'Infinity', '150abc'])
    assert.ok(validateReceipt({ ...validReceipt, valor }).valor, valor);
  assert.ok(validateReceipt({ ...validReceipt, descricao: 'Referente a... ' }).descricao);
  assert.ok(validateReceipt({ ...validReceipt, data: '2026-02-30' }).data);
});
const sample = {
  dadosPessoais: { nome: 'CANDIDATO TESTE QA', cargo: 'Assistente de teste', email: 'qa@example.com', telefone: '', cidade: 'Cidade de Teste', linkedin: '', portfolio: '' },
  resumo: 'Documento fictício sem validade para candidatura.',
  experiencia: [{ id: 1, cargo: 'Auxiliar', empresa: 'EMPRESA TESTE', inicio: '2025', fim: '2026', atividades: 'Organização de documentos.' }],
  educacao: [], habilidades: 'Organização, Comunicação', idiomas: 'Português',
};
test('curriculum is a text PDF built from data, with readable content and no editor chrome', async () => {
  const doc = await buildCurriculumPdf(sample);
  assert.equal(doc.getNumberOfPages(), 1);
  const bytes = doc.output();
  assert.ok(bytes.includes('CANDIDATO TESTE QA'));
  assert.ok(bytes.includes('qa@example.com'));
  assert.ok(!bytes.includes('preview-content'));
  assert.ok(!bytes.includes('/Subtype /Image'));
});
test('long curriculum paginates and keeps the final content', async () => {
  const doc = await buildCurriculumPdf({ ...sample, resumo: 'TEXTO LONGO DE TESTE '.repeat(1800) + ' MARCADOR FINAL QA' });
  assert.ok(doc.getNumberOfPages() > 1);
  assert.ok(doc.output().includes('MARCADOR FINAL QA'));
});
