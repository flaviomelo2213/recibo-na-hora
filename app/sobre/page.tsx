
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sobre Nós | ReciboNaHora",
  description: "Conheça a missão do ReciboNaHora: oferecer documentos gratuitos e acessíveis para todos, mantido por um modelo transparente de publicidade.",
  alternates: {
    canonical: "/sobre"
  }
};


export default function SobrePage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Sobre o ReciboNaHora</h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Nascemos de uma percepção simples: o acesso a documentos essenciais do dia a dia pode ser complicado, caro e demorado. Em um mundo cada vez mais digital, por que ainda deveria ser difícil criar um recibo, um contrato simples ou uma declaração?
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 text-base font-semibold leading-7 text-slate-900 sm:grid-cols-2 md:flex lg:gap-x-10">
            <span className="flex items-center gap-x-3">
              <i className="fa-solid fa-rocket text-indigo-600" aria-hidden="true"></i>
              Nossa Missão
            </span>
            <span className="flex items-center gap-x-3">
              <i className="fa-solid fa-hand-holding-dollar text-indigo-600" aria-hidden="true"></i>
              Nosso Modelo
            </span>
            <span className="flex items-center gap-x-3">
              <i className="fa-solid fa-lock text-indigo-600" aria-hidden="true"></i>
              Sua Privacidade
            </span>
            <span className="flex items-center gap-x-3">
              <i className="fa-solid fa-file-circle-check text-indigo-600" aria-hidden="true"></i>
              Validade dos Documentos
            </span>
          </div>
          <div className="mt-8 border-t border-slate-200 pt-8">
            <div className="text-lg leading-8 text-slate-700 space-y-8">
              <div>
                <h3 className="font-bold text-xl text-slate-800 mb-3">Nossa Missão: Acessibilidade e Rapidez</h3>
                <p className="mb-4">
                  Nossa principal missão é <strong>ajudar a população, fornecendo acesso gratuito e imediato a documentos importantes</strong>. Queremos que qualquer pessoa, seja um trabalhador autônomo, um pequeno empreendedor ou um cidadão comum, possa gerar documentos de forma rápida, sem burocracia e com a confiança de que são úteis.
                </p>
                <p>
                  Acreditamos que a autonomia digital é um direito e trabalhamos para que você não precise de conhecimentos técnicos ou jurídicos para resolver tarefas simples.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-xl text-slate-800 mt-6 mb-3">Nosso Modelo: Transparência e Gratuidade</h3>
                <p className="mb-4">
                  Para manter a plataforma 100% gratuita, nosso projeto é financiado por publicidade (Google AdSense) e parcerias selecionadas. Essa é a forma que encontramos para cobrir os custos de desenvolvimento, hospedagem e manutenção, garantindo que o serviço continue no ar e evoluindo, sem nunca cobrar pelos documentos gerados.
                </p>
                <p>Para mais detalhes, visite nossa página sobre <Link href="/como-ganhamos-dinheiro" className="text-indigo-700 hover:underline">como ganhamos dinheiro</Link>.</p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-slate-800 mt-6 mb-3">Sua Privacidade é Prioridade</h3>
                <p className="mb-4">
                  A maioria de nossas ferramentas opera diretamente no seu navegador. Isso significa que as informações que você insere nos formulários não são, em geral, enviadas ou armazenadas em nossos servidores. Elas ficam no seu dispositivo, garantindo total segurança e confidencialidade.
                </p>
                <p>Para entender todos os detalhes, consulte nossa <Link href="/politica-privacidade" className="text-indigo-700 hover:underline">Política de Privacidade</Link>.</p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-slate-800 mt-6 mb-3">Validade Jurídica e Responsabilidade</h3>
                <p className="mb-4">
                  Os modelos de documentos que oferecemos são desenvolvidos com base em práticas comuns e visam ser o mais úteis e corretos possível. No entanto, <strong>não fornecemos aconselhamento jurídico</strong>. A validade de um documento depende não apenas do modelo, mas também do preenchimento correto, das assinaturas e, em alguns casos, de reconhecimento em cartório.
                </p>
                <p>Recomendamos que, em situações de grande importância ou complexidade, você procure um profissional qualificado. Leia nossos <Link href="/termos-uso" className="text-indigo-700 hover:underline">Termos de Uso</Link> para mais informações.</p>
              </div>

              <div className="mt-12 flex border-t border-slate-200 pt-8">
                <Link href="/ferramentas" className="text-base font-semibold leading-7 text-indigo-700">
                  Comece a usar nossas ferramentas <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
