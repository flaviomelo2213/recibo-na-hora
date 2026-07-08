# AdSlot — Correção de Segurança (pré-aprovação AdSense)

Nenhum commit, nenhum push. Branch `feature/adsense-low-value-fix`, working tree com 1 arquivo modificado (`app/components/ads/AdSlot.tsx`).

## Arquivos com placeholders

| Slot | Arquivo |
|---|---|
| `0000000001` | `app/ferramentas/calculadora-rescisao/page.tsx:208` |
| `0000000002` | `app/ferramentas/imobiliario/page.tsx:214` |
| `0000000003` | `app/ferramentas/recibo-simples/page.tsx:187` |
| `0000000004` | `app/ferramentas/curriculo-profissional/_components/CurriculoProfissionalPageClient.tsx:155` |
| `0000000005` | `app/ferramentas/recibo-pix/page.tsx:168` |

Nenhum desses 5 arquivos precisou ser alterado — o `slot="000000000X"` continua exatamente como está. Toda a correção foi centralizada em um único lugar: `app/components/ads/AdSlot.tsx`.

## Existia `push({})`? Sim — e era o problema

Antes da correção, `AdSlot.tsx` chamava `window.adsbygoogle.push({})` **incondicionalmente** em todo mount do componente, e sempre renderizava a tag `<ins class="adsbygoogle" data-ad-slot={slot}>` — inclusive com o slot placeholder. Ou seja: assim que essas 5 páginas fossem ao ar, o navegador dispararia uma solicitação de anúncio real para o Google com um `data-ad-slot` que não existe.

**Correção aplicada** (`app/components/ads/AdSlot.tsx`):
- Adicionado `PLACEHOLDER_SLOT_PATTERN = /^0{9}\d$/` — reconhece especificamente o formato dos nossos placeholders (9 zeros + 1 dígito). Um Slot ID real do AdSense nunca tem esse formato.
- Quando o `slot` bate com esse padrão: o componente retorna `null` — **nenhuma tag `<ins>`, nenhuma chamada `push()`, nada renderizado**. Sem espaço reservado, sem "caixa fantasma", zero pegada visual ou de rede.
- Quando o `slot` é um valor real (não bate com o padrão): comportamento original mantido — `<ins>` renderizada + `push({})` chamado normalmente.

Não altera layout: como o componente já não ocupava espaço fixo além do próprio `<ins>` (sem `min-height` herdado de fora), remover o placeholder não desloca nenhum outro elemento — só reduz o espaçamento vertical (`my-10`) que ele mesmo trazia, o que não é uma quebra de layout.

## Recomendação final para deploy antes da aprovação

**Seguro fazer o merge/deploy agora, mesmo sem os Slot IDs reais.** Com a correção:
- Nenhuma solicitação de anúncio falsa é enviada ao Google;
- Nenhum elemento vazio ou placeholder visível aparece nas 5 páginas — elas simplesmente não mostram nenhum bloco de anúncio ali, como se o `<AdSlot>` não existisse;
- O restante da Fase 2 (correção de links, E-E-A-T, sitemap, OpenGraph, noindex das páginas geo) continua intacto e pronto.

Quando os 5 Slot IDs reais existirem, a troca é trivial: substituir o literal `slot="000000000X"` pelo ID real em cada um dos 5 arquivos listados acima — o componente ativa a exibição automaticamente, sem precisar tocar em `AdSlot.tsx` de novo.
