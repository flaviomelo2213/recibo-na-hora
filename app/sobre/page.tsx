
import Link from "next/link";

export default function SobrePage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-primary-dark sm:text-4xl">Sobre Nós</h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Nascemos de uma percepção simples: o acesso a documentos essenciais do dia a dia pode ser complicado, caro e demorado. Em um mundo cada vez mais digital, por que ainda deveria ser difícil criar um recibo, um contrato simples ou uma declaração?
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-neutral-900 sm:grid-cols-2 md:flex lg:gap-x-10">
            <span className="flex gap-x-3">
              <i className="fa-solid fa-rocket text-primary-dark" aria-hidden="true"></i>
              Nossa Missão
            </span>
            <span className="flex gap-x-3">
              <i className="fa-solid fa-hand-holding-dollar text-primary-dark" aria-hidden="true"></i>
              Nosso Modelo
            </span>
            <span className="flex gap-x-3">
              <i className="fa-solid fa-lock text-primary-dark" aria-hidden="true"></i>
              Sua Privacidade
            </span>
          </div>
          <div className="mt-6 border-t border-neutral-200 pt-6">
            <div className="text-base leading-7 text-neutral-700">
              <h3 className="font-bold text-lg text-neutral-800 mb-2">Nossa Missão: Acessibilidade e Rapidez</h3>
              <p className="mb-4">
                Nossa principal missão é <strong>ajudar a população, fornecendo acesso gratuito e imediato a documentos importantes</strong>. Queremos que qualquer pessoa, seja um trabalhador autônomo, um pequeno empreendedor ou um cidadão comum, possa gerar documentos de forma rápida, sem burocracia e com a confiança de que são válidos e úteis.
              </p>
              
              <h3 className="font-bold text-lg text-neutral-800 mt-6 mb-2">Nosso Modelo: Gratuito para Todos</h3>
              <p className="mb-4">
                Para manter a plataforma 100% gratuita e acessível, nosso projeto é monetizado através de publicidade (Google AdSense). Essa é a forma que encontramos para cobrir os custos de desenvolvimento e manutenção, garantindo que o serviço continue no ar e evoluindo, sem nunca cobrar nada de nossos usuários.
              </p>

              <h3 className="font-bold text-lg text-neutral-800 mt-6 mb-2">Sua Privacidade é Prioridade</h3>
              <p>
                Não solicitamos e não armazenamos nenhuma informação pessoal que você insere nos formulários. Todos os documentos são processados e gerados diretamente no seu navegador, garantindo total segurança e confidencialidade.
              </p>

              <div className="mt-10 flex">
                <Link href="/ferramentas" className="text-base font-semibold leading-7 text-primary-dark">
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
