
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Contato | ReciboNaHora",
  description: "Entre em contato com o ReciboNaHora para tirar dúvidas, dar sugestões ou reportar um problema. Nosso canal principal é o e-mail.",
  alternates: {
    canonical: "/contato"
  }
};

export default function ContatoPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Entre em Contato</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Tem alguma dúvida, sugestão ou encontrou um problema? Adoramos ouvir nossos usuários! 
            O melhor canal para falar conosco é através do nosso e-mail.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="flex flex-col items-center gap-y-8 rounded-2xl bg-slate-50 border border-slate-200 p-8 shadow-sm">
            <div className="flex items-center gap-x-4">
                <i className="fa-solid fa-envelope-open-text text-3xl text-indigo-600"></i>
                <h2 className="text-2xl font-semibold text-slate-800">Nosso E-mail</h2>
            </div>
            <p className="text-center text-slate-600">
              Para garantir que sua mensagem seja recebida e respondida o mais rápido possível, 
              concentramos nosso suporte em um único canal.
            </p>
            <a 
              href="mailto:contato@recibonahora.com.br"
              className="rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
            >
              contato@recibonahora.com.br
            </a>
            <p className="text-sm text-center text-slate-500 mt-2">
              Respondemos em até 48 horas úteis.
            </p>
          </div>

          <div className="mt-16 text-center text-base text-slate-600">
            <p className="mb-2">Antes de enviar sua mensagem, que tal dar uma olhada em nossas páginas de ajuda?</p>
            <div className="flex items-center justify-center gap-x-6">
               <Link href="/termos-uso" className="font-semibold text-indigo-700 hover:text-indigo-800 hover:underline">
                Termos de Uso
              </Link>
              <Link href="/politica-privacidade" className="font-semibold text-indigo-700 hover:text-indigo-800 hover:underline">
                Política de Privacidade
              </Link>
              <Link href="/como-ganhamos-dinheiro" className="font-semibold text-indigo-700 hover:text-indigo-800 hover:underline">
                Transparência
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
