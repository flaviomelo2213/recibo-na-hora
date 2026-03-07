import { buildHowTo } from '@/lib/schema'

const howToJsonLd = buildHowTo(
  'Como gerar um recibo online',
  'Ferramenta gratuita para gerar recibos online em PDF, sem cadastro.',
  [
    { name: 'Preencher dados do pagador', text: 'Digite o nome de quem pagou e o CPF ou dados da empresa.' },
    { name: 'Informar o valor recebido', text: 'Insira o valor recebido em reais.' },
    { name: 'Descrever o motivo do pagamento', text: 'Descreva o serviço, produto ou motivo do pagamento.' },
    { name: 'Gerar e baixar o recibo', text: 'Clique em gerar recibo e faça o download do PDF pronto para assinar.' },
  ],
  'https://recibonahora.com.br/ferramentas',
)

export default function FeramentasLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      {children}
    </>
  )
}
