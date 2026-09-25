# Parcerias contextuais — ReciboNaHora

Data: 2026-09-25
Branch: `feature/partner-hub-contextual`
Status: implementação preparada no GitHub; ainda não mesclada em `main`

## Objetivo

Separar:
- `/recursos`: Hotmart, Kiwify, Monetizze e produtos digitais;
- `/parcerias`: serviços e empresas úteis para MEIs, autônomos e pequenos negócios.

## Estrutura criada

### Fonte de dados
`app/_data/partnerOffers.ts`

Regras:
- `active`: só recebe botão externo quando existe link validado no projeto;
- `pending`: aparece como "Em avaliação", sem URL externa;
- nenhum link de afiliado é inventado.

### Componente contextual
`app/components/partners/PartnerSpotlight.tsx`

Comportamento:
- mostra um parceiro por vez;
- quando houver mais de um parceiro ativo e elegível para a página, alterna a cada 12 segundos;
- exibe disclosure de comissão;
- link externo usa `rel="sponsored noopener noreferrer"`;
- sempre oferece link interno para `/parcerias`;
- texto deixa claro que o usuário não paga nada a mais.

### Página /parcerias
Transformada em hub de parcerias:
- parceiros ativos;
- soluções em avaliação;
- transparência;
- FAQ;
- link para `/como-ganhamos-dinheiro`.

### Distribuição inicial
PartnerSpotlight adicionado a:
- `/ferramentas/recibo-simples`
- `/ferramentas/recibo-pix`
- `/ferramentas/imobiliario`
- `/ferramentas/recibo-rpa`
- `/gerar/recibo`
- `/gerar/recibo-salario`
- `/gerar/venda-veiculo`

Categorias são contextuais por página.

## Parceiro ativo atual

Foi reutilizado somente um link já existente e rastreado no projeto:
- assinatura digital: `https://indiquei.app/AOYZABK`

Não foram adicionados links genéricos de Cora, PagBank, InfinitePay, certificado digital, contabilidade ou loja online. Essas categorias ficam como "Em avaliação" até existir URL oficial/de parceria validada.

## Próximo passo

1. rodar build;
2. smoke test das 7 páginas + /parcerias;
3. validar mobile;
4. confirmar que AdsKeeper não ficou colado ao bloco de parceria;
5. confirmar que nenhum partner link foi inserido sem `rel="sponsored"`;
6. somente depois considerar merge em main.
