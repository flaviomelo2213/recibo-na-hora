"use client";

import React, { useEffect, useMemo, useState } from "react";
import { jsPDF } from "jspdf";

type DadosRecibo = {
  empresaNome: string;
  empresaCNPJ: string;
  funcNome: string;
  funcCPF: string;
  funcCargo: string;
  valor: string;
  valorExtenso: string;
  referencia: string; // MM/YYYY
  tipoPagamento: string;
  dataPagamento: string; // YYYY-MM-DD
  cidade: string;
};

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

function formatRefFromDate(d: Date) {
  return `${pad2(d.getMonth() + 1)}/${d.getFullYear()}`;
}

function formatBrFromISO(iso: string) {
  // iso: YYYY-MM-DD -> DD/MM/YYYY
  if (!iso || iso.length < 10) return "";
  const [y, m, d] = iso.slice(0, 10).split("-");
  return `${d}/${m}/${y}`;
}

export default function ReciboSalario() {
  const [dados, setDados] = useState<DadosRecibo>({
    empresaNome: "",
    empresaCNPJ: "",
    funcNome: "",
    funcCPF: "",
    funcCargo: "",
    valor: "",
    valorExtenso: "",
    // IMPORTANT: nada dinâmico no estado inicial (evita mismatch)
    referencia: "",
    tipoPagamento: "Salário Mensal",
    dataPagamento: "",
    cidade: "",
  });

  // Preencher valores dinâmicos somente após montar
  useEffect(() => {
    setDados((prev) => {
      const next = { ...prev };
      const now = new Date();

      if (!next.referencia) next.referencia = formatRefFromDate(now);
      if (!next.dataPagamento) next.dataPagamento = now.toISOString().slice(0, 10);

      return next;
    });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setDados((prev) => ({ ...prev, [name]: value }));
  };

  const dataPagamentoBR = useMemo(() => formatBrFromISO(dados.dataPagamento), [dados.dataPagamento]);

  const gerarPDF = () => {
    const doc = new jsPDF();

    // fallback seguro se usuário apagar data
    const dataBR = dataPagamentoBR || "__/__/____";
    const cidade = (dados.cidade || "____________").trim();

    const desenharRecibo = (yStart: number, via: string) => {
      // Borda
      doc.setLineWidth(0.5);
      doc.rect(10, yStart, 190, 120);

      // Cabeçalho
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text("RECIBO DE PAGAMENTO", 105, yStart + 15, { align: "center" });
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.text(`(${via})`, 105, yStart + 20, { align: "center" });

      // Dados Empresa
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text((dados.empresaNome || "________________________").toUpperCase(), 15, yStart + 35);
      doc.setFont("helvetica", "normal");
      doc.text(`CNPJ/CPF: ${dados.empresaCNPJ || "____________"}`, 150, yStart + 35);

      // Linha Divisória
      doc.line(10, yStart + 40, 200, yStart + 40);

      // Dados Funcionário e Valor
      doc.text(`Funcionário: ${(dados.funcNome || "________________________").toUpperCase()}`, 15, yStart + 50);
      doc.text(`CPF: ${dados.funcCPF || "____________"}`, 150, yStart + 50);
      doc.text(`Cargo/Função: ${dados.funcCargo || "____________"}`, 15, yStart + 58);

      // Caixa de Valor
      doc.setFillColor(240, 240, 240);
      doc.rect(140, yStart + 65, 50, 10, "F");
      doc.setFont("helvetica", "bold");
      doc.text(`Valor Líquido: R$ ${dados.valor || "0,00"}`, 145, yStart + 71);

      // Corpo do Texto
      doc.setFont("helvetica", "normal");
      const texto = `Recebi a importância supramencionada de R$ ${dados.valor || "0,00"} (${dados.valorExtenso || "________________"}), referente ao pagamento de ${String(
        dados.tipoPagamento || ""
      ).toUpperCase()} do mês de ${dados.referencia || "__/____"}.`;
      const linhas = doc.splitTextToSize(texto, 180);
      doc.text(linhas, 15, yStart + 85);

      // Assinatura
      doc.text(`Local e Data: ${cidade}, ${dataBR}`, 15, yStart + 105);

      doc.line(100, yStart + 115, 190, yStart + 115);
      doc.setFontSize(8);
      doc.text("Assinatura do Recebedor (Funcionário)", 145, yStart + 119, { align: "center" });
    };

    desenharRecibo(10, "Via do Empregador");

    // Linha de corte pontilhada
    doc.setLineDashPattern([3, 3], 0);
    doc.line(0, 140, 210, 140);
    doc.setLineDashPattern([], 0);

    desenharRecibo(150, "Via do Funcionário");

    doc.save("recibo_salario.pdf");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      {/* --- GERADOR --- */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden mb-12">
        <div className="bg-blue-800 text-white p-6 text-center">
          <h1 className="text-2xl font-bold">
            <i className="fa-solid fa-money-check-dollar"></i> Recibo de Salário / Diarista
          </h1>
          <p className="text-blue-200 text-sm">Gera 2 vias automaticamente (Empregador e Funcionário).</p>
        </div>

        <div className="p-8 grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-slate-700 border-b pb-2">1. Quem Paga (Empregador)</h3>
            <input
              name="empresaNome"
              placeholder="Nome do Empregador/Empresa"
              value={dados.empresaNome}
              onChange={handleChange}
              className="w-full p-3 border rounded bg-gray-50"
            />
            <input
              name="empresaCNPJ"
              placeholder="CPF ou CNPJ"
              value={dados.empresaCNPJ}
              onChange={handleChange}
              className="w-full p-3 border rounded bg-gray-50"
            />

            <h3 className="font-bold text-slate-700 border-b pb-2 mt-6">2. Detalhes do Pagamento</h3>
            <div className="grid grid-cols-2 gap-2">
              <input
                name="valor"
                type="number"
                placeholder="Valor R$"
                value={dados.valor}
                onChange={handleChange}
                className="p-3 border rounded font-bold text-green-700"
              />
              <input
                name="referencia"
                placeholder="Ref. (Ex: 01/2025)"
                value={dados.referencia}
                onChange={handleChange}
                className="p-3 border rounded"
              />
            </div>
            <input
              name="valorExtenso"
              placeholder="Valor por Extenso (Ex: Mil reais)"
              value={dados.valorExtenso}
              onChange={handleChange}
              className="w-full p-3 border rounded"
            />

            <label className="block text-xs font-bold text-slate-500 mt-2">Tipo de Pagamento</label>
            <select
              name="tipoPagamento"
              value={dados.tipoPagamento}
              onChange={handleChange}
              className="w-full p-3 border rounded bg-white"
            >
              <option>Salário Mensal</option>
              <option>Adiantamento Salarial (Vale)</option>
              <option>Pagamento de Diária</option>
              <option>13º Salário</option>
              <option>Férias</option>
            </select>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-blue-700 border-b pb-2">3. Quem Recebe (Funcionário)</h3>
            <input
              name="funcNome"
              placeholder="Nome do Funcionário/Diarista"
              value={dados.funcNome}
              onChange={handleChange}
              className="w-full p-3 border rounded"
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                name="funcCPF"
                placeholder="CPF"
                value={dados.funcCPF}
                onChange={handleChange}
                className="p-3 border rounded"
              />
              <input
                name="funcCargo"
                placeholder="Cargo (Ex: Doméstica)"
                value={dados.funcCargo}
                onChange={handleChange}
                className="p-3 border rounded"
              />
            </div>

            <h3 className="font-bold text-slate-700 border-b pb-2 mt-6">4. Finalização</h3>
            <div className="grid grid-cols-2 gap-2">
              <input
                name="cidade"
                placeholder="Cidade"
                value={dados.cidade}
                onChange={handleChange}
                className="p-3 border rounded"
              />
              <input
                name="dataPagamento"
                type="date"
                value={dados.dataPagamento}
                onChange={handleChange}
                className="p-3 border rounded"
              />
            </div>

            <button
              onClick={gerarPDF}
              className="w-full mt-8 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-print"></i> IMPRIMIR RECIBO (2 VIAS)
            </button>
          </div>
        </div>
      </div>

      {/* --- TEXTO DE SEO --- */}
      <section className="max-w-4xl mx-auto prose prose-slate">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Tudo sobre Recibo de Pagamento de Salário</h2>

        <p className="text-slate-600 mb-4 leading-relaxed">
          O <strong>Recibo de Pagamento de Salário</strong> (também conhecido como holerite simplificado) é o documento
          essencial que comprova que a empresa ou empregador doméstico realizou a remuneração do funcionário. Para o
          trabalhador, ele serve como comprovante de renda para abertura de contas, empréstimos e financiamentos.
        </p>

        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100 my-8">
          <h3 className="text-xl font-bold text-yellow-800 mb-3">
            <i className="fa-solid fa-triangle-exclamation"></i> Atenção: Diarista vs. Mensalista
          </h3>
          <p className="text-sm text-yellow-900 mb-2">
            <strong>Diarista:</strong> Presta serviço até 2 dias por semana na mesma casa. O pagamento deve ser feito no
            mesmo dia, e este recibo serve como prova de quitação da diária.
          </p>
          <p className="text-sm text-yellow-900">
            <strong>Empregada Doméstica (Mensalista):</strong> Trabalha 3 dias ou mais. É obrigatório o registro em
            carteira (eSocial) e o recibo deve ser assinado mensalmente até o 5º dia útil.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">O que deve constar no recibo?</h3>
        <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
          <li className="bg-white p-4 rounded shadow-sm border border-gray-100 flex items-start gap-3">
            <i className="fa-solid fa-check text-green-500 mt-1"></i>
            <div>
              <strong>Identificação das Partes:</strong> Nome e CPF/CNPJ de quem paga e de quem recebe.
            </div>
          </li>
          <li className="bg-white p-4 rounded shadow-sm border border-gray-100 flex items-start gap-3">
            <i className="fa-solid fa-check text-green-500 mt-1"></i>
            <div>
              <strong>Valor Líquido:</strong> O valor exato que foi entregue em dinheiro ou depositado.
            </div>
          </li>
          <li className="bg-white p-4 rounded shadow-sm border border-gray-100 flex items-start gap-3">
            <i className="fa-solid fa-check text-green-500 mt-1"></i>
            <div>
              <strong>Referência:</strong> A qual mês ou serviço aquele pagamento se refere (Ex: Salário de Janeiro/2025).
            </div>
          </li>
          <li className="bg-white p-4 rounded shadow-sm border border-gray-100 flex items-start gap-3">
            <i className="fa-solid fa-check text-green-500 mt-1"></i>
            <div>
              <strong>Assinatura:</strong> Indispensável para o documento ter validade jurídica.
            </div>
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Dúvidas Frequentes</h3>

        <div className="space-y-4">
          <details className="bg-white p-4 rounded-lg border border-gray-200 cursor-pointer group">
            <summary className="font-bold text-slate-800 flex justify-between items-center">
              Posso usar esse recibo para adiantamento salarial (Vale)?
              <i className="fa-solid fa-chevron-down text-slate-400 group-open:rotate-180 transition"></i>
            </summary>
            <p className="text-slate-600 mt-2 text-sm">
              Sim! Basta selecionar a opção "Adiantamento Salarial" no nosso gerador. Lembre-se de descontar esse valor no
              pagamento final do mês.
            </p>
          </details>

          <details className="bg-white p-4 rounded-lg border border-gray-200 cursor-pointer group">
            <summary className="font-bold text-slate-800 flex justify-between items-center">
              Quantas vias devo imprimir?
              <i className="fa-solid fa-chevron-down text-slate-400 group-open:rotate-180 transition"></i>
            </summary>
            <p className="text-slate-600 mt-2 text-sm">
              Sempre imprima 2 vias. Uma fica com o patrão (assinada pelo funcionário) e a outra fica com o funcionário
              (assinada pelo patrão). Nosso gerador já cria as duas vias automaticamente em uma folha.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}
