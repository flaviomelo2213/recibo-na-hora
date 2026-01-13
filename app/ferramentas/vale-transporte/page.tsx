
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calculadora de Vale-Transporte (VT) | ReciboNaHora',
  description: 'Calcule o desconto do vale-transporte (6%) sobre o salário bruto e veja o valor final a ser pago ou descontado. Ferramenta online e gratuita.',
  alternates: {
    canonical: '/ferramentas/vale-transporte'
  }
};

// Placeholder content. This will be replaced by a proper implementation.
export default function ValeTransportePage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Calculadora de Vale-Transporte</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Esta ferramenta está em desenvolvimento e estará disponível em breve. 
            Nosso objetivo é fornecer uma calculadora precisa para que você possa simular o desconto de 6% do VT sobre o salário bruto.
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-xl">
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 text-center">
            <i className="fa-solid fa-person-digging text-5xl text-amber-500"></i>
            <h2 className="mt-6 text-2xl font-bold text-slate-800">Página em Construção</h2>
            <p className="mt-4 text-slate-600">
              Estamos trabalhando para finalizar esta funcionalidade. Volte em breve para conferir!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
