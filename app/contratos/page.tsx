"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, Home, Briefcase, FileSignature, Users, CheckCircle, AlertTriangle, BookOpen, HelpCircle } from "lucide-react";
import LeadModal from "../components/LeadModal";

const faqItems = [
  {
    question: "O contrato gerado online tem validade jurídica?",
    answer: "Sim, desde que assinado pelas partes (e testemunhas, se aplicável), o contrato tem validade jurídica para a maioria dos atos da vida civil. Para alguns casos específicos, a lei exige reconhecimento de firma ou registro em cartório."
  },
  {
    question: "Preciso de testemunhas no contrato?",
    answer: "A presença de duas testemunhas que assinam o contrato junto com as partes confere a ele força de título executivo extrajudicial. Isso significa que, em caso de descumprimento, o processo de cobrança na justiça é muito mais rápido."
  },
  {
    question: "O que é um 'título executivo extrajudicial'?",
    answer: "É um documento que a lei reconhece como prova de uma dívida, permitindo que o credor inicie um processo de execução (cobrança forçada) sem a necessidade de um longo processo de conhecimento para provar que a dívida existe."
  },
  {
    question: "Posso usar o gerador para qualquer tipo de contrato?",
    answer: "Nossas ferramentas são focadas em contratos de menor complexidade, como prestação de serviços, aluguel e outros. Para operações complexas, como compra e venda de imóveis de alto valor ou questões societárias, é indispensável a consulta a um advogado."
  },
  {
    question: "Qual a diferença entre assinatura digital e eletrônica?",
    answer: "A assinatura eletrônica é um gênero amplo que inclui senhas, biometria e aceite de termos online. A assinatura digital é uma espécie mais segura, que utiliza um certificado digital (como o e-CPF) para garantir a autenticidade e integridade do documento, tendo a mesma validade de uma assinatura com firma reconhecida."
  },
  {
    question: "O que acontece se uma das partes não cumprir o contrato?",
    answer: "A parte prejudicada pode notificar a outra para que cumpra sua obrigação. Se não houver acordo, pode-se recorrer ao Poder Judiciário para exigir o cumprimento forçado, o pagamento de multas ou uma indenização por perdas e danos."
  },
  {
    question: "É seguro colocar meus dados no gerador de contratos?",
    answer: "Sim. Seguimos as melhores práticas de segurança e privacidade. Seus dados são utilizados apenas para a geração do documento e não são compartilhados. Consulte nossa Política de Privacidade para mais detalhes."
  },
  {
    question: "Contrato precisa ser registrado em cartório?",
    answer: "Na maioria dos casos, não. O registro em Cartório de Títulos e Documentos é necessário principalmente para que o contrato tenha validade perante terceiros (publicidade), não para ter validade entre as partes que o assinaram."
  }
];

export default function ContratosPage() {
  const [showLeadModal, setShowLeadModal] = useState(false);

  return (
    <main className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-6xl">
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-900 text-white mb-4">
            <FileSignature className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Hub de Contratos Editáveis
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Modelos padronizados de contratos para diversas finalidades. Preencha online, personalize e gere documentos com validade jurídica.
          </p>
        </header>

        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6 mb-12">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-900 mb-2">Importante: Consulte um Advogado</h3>
              <p className="text-sm text-slate-700">
                Estes modelos são <strong>ferramentas educativas</strong> para contratos de menor complexidade. Para operações de alto valor, questões societárias ou situações específicas, <strong>é indispensável a consulta a um advogado</strong>. Use os campos como placeholders (ex: [NOME_COMPLETO]) e preencha com seus dados reais.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Link
            href="/contrato-locacao"
            className="bg-white border-2 border-blue-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Home className="w-6 h-6 text-blue-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Contrato de Aluguel</h3>
                <p className="text-sm text-blue-700">Locação Residencial e Comercial</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              Modelo completo e editável de contrato de locação conforme a Lei do Inquilinato (Lei 8.245/91). Inclui cláusulas de reajuste, multa, caução e rescisão.
            </p>
            <div className="flex items-center gap-2 text-blue-900 font-medium text-sm">
              <span>Criar Contrato</span>
              <span>→</span>
            </div>
          </Link>

          <div className="bg-white border-2 border-green-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition-all group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <FileText className="w-6 h-6 text-green-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Compra e Venda de Imóvel</h3>
                <p className="text-sm text-green-700">Modelo Padrão Brasileiro</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              Contrato particular de promessa de compra e venda de imóvel. Adequado à legislação brasileira com cláusulas de preço, prazo, forma de pagamento e condições de entrega.
            </p>
            <button
              onClick={() => setShowLeadModal(true)}
              className="flex items-center gap-2 text-green-700 font-medium text-sm hover:text-green-600"
            >
              <span>Em desenvolvimento - Solicitar</span>
              <span>→</span>
            </button>
          </div>

          <Link
            href="/ferramentas/procuracao"
            className="bg-white border-2 border-purple-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg transition-all group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                <Users className="w-6 h-6 text-purple-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Procuração Simples</h3>
                <p className="text-sm text-purple-700">Poderes Específicos</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              Modelo de procuração particular para poderes específicos. Permite que você nomeie um representante para realizar atos em seu nome.
            </p>
            <div className="flex items-center gap-2 text-purple-700 font-medium text-sm">
              <span>Gerar Procuração</span>
              <span>→</span>
            </div>
          </Link>

          <Link
            href="/ferramentas/contrato-completo"
            className="bg-white border-2 border-amber-200 rounded-xl p-6 hover:border-amber-400 hover:shadow-lg transition-all group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                <Briefcase className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Prestação de Serviços</h3>
                <p className="text-sm text-amber-700">Profissionais e Empresas</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              Contrato completo para prestação de serviços profissionais. Ideal para freelancers, consultores e prestadores de serviços diversos.
            </p>
            <div className="flex items-center gap-2 text-amber-700 font-medium text-sm">
              <span>Criar Contrato</span>
              <span>→</span>
            </div>
          </Link>
        </div>

        <section className="mb-12 bg-slate-50 p-8 rounded-xl border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <BookOpen className="w-7 h-7 text-blue-900" />
            Estrutura de um Contrato Seguro
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg border border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-slate-900">1. Qualificação das Partes</h3>
              </div>
              <p className="text-sm text-slate-600">Identificação completa de todos os envolvidos (nome, CPF/CNPJ, endereço, etc).</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-slate-900">2. Objeto do Contrato</h3>
              </div>
              <p className="text-sm text-slate-600">Descrição clara e detalhada do que está sendo contratado (serviço, produto, aluguel).</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-slate-900">3. Preço e Pagamento</h3>
              </div>
              <p className="text-sm text-slate-600">Valor, forma de pagamento, vencimento e eventuais correções.</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-slate-900">4. Prazos e Vigência</h3>
              </div>
              <p className="text-sm text-slate-600">Datas de início e término do contrato e dos serviços/entregas.</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-slate-900">5. Multa e Rescisão</h3>
              </div>
              <p className="text-sm text-slate-600">Penalidades por atraso ou descumprimento e regras para encerrar o acordo.</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-slate-900">6. Foro</h3>
              </div>
              <p className="text-sm text-slate-600">Cidade onde eventuais disputas judiciais deverão ser resolvidas.</p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-blue-50 p-8 rounded-xl border-2 border-blue-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Contrato vs. Recibo vs. Nota Fiscal
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            É importante não confundir esses documentos. Cada um tem uma finalidade específica.
          </p>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-900 mt-0.5">•</span>
              <div>
                <span className="font-bold">Contrato:</span> Formaliza o acordo e as regras ANTES ou DURANTE a negociação.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-900 mt-0.5">•</span>
              <div>
                <span className="font-bold">Recibo:</span> Comprova o pagamento DEPOIS que ele foi realizado. Veja nossos <Link href="/recibos" className="text-blue-900 hover:underline font-medium">modelos de recibo</Link>.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-900 mt-0.5">•</span>
              <div>
                <span className="font-bold">Nota Fiscal:</span> Documento fiscal que comprova a venda de um produto ou prestação de um serviço, usado para o recolhimento de impostos.
              </div>
            </li>
          </ul>
          <p className="text-sm text-slate-600 mt-4">
            Explore todas as nossas <Link href="/ferramentas" className="text-blue-900 hover:underline font-medium">ferramentas gratuitas</Link> para encontrar o documento certo para sua necessidade.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8 flex items-center justify-center gap-3">
            <HelpCircle className="w-8 h-8 text-blue-900" />
            Perguntas Frequentes (FAQ)
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <details key={index} className="group bg-white p-5 rounded-lg border-2 border-slate-200 hover:border-blue-300 transition-colors">
                  <summary className="flex justify-between items-center font-semibold text-slate-900 cursor-pointer list-none">
                    <span>{item.question}</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-slate-600 mt-3 leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-3">Precisa de Assessoria Jurídica?</h3>
          <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
            Para contratos complexos, operações de alto valor ou situações específicas, recomendamos consultar um advogado especializado. Podemos indicar profissionais de confiança.
          </p>
          <button
            onClick={() => setShowLeadModal(true)}
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors shadow-lg"
          >
            Solicitar Indicação de Advogados
          </button>
        </div>
      </div>

      {showLeadModal && (
        <LeadModal onClose={() => setShowLeadModal(false)} />
      )}
    </main>
  );
}
