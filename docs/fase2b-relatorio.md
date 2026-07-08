# Fase 2B — Relatório

Branch: `feature/adsense-low-value-fix` (mesma da Fase 2A, nenhum commit feito ainda).
Nenhum commit, nenhum push, nenhuma revisão solicitada ao AdSense, nenhum ID real de anúncio adicionado.

## Arquivos criados

| Arquivo | Função |
|---|---|
| `app/components/EditorialTrustBox.tsx` | Caixa de credibilidade editorial (conteúdo informativo, revisão periódica, aviso legal, links para Política Editorial e Contato) |
| `app/components/RelatedDocuments.tsx` | Lista de documentos relacionados (links internos), com fallback padrão de 7 links úteis |
| `app/components/Breadcrumb.tsx` | Breadcrumb visual + JSON-LD `BreadcrumbList` |

## Arquivos alterados

**Páginas de ferramenta (server components, edição direta):**
- `app/ferramentas/recibo-pix/page.tsx`
- `app/ferramentas/recibo-simples/page.tsx`
- `app/ferramentas/imobiliario/page.tsx`
- `app/ferramentas/orcamento/page.tsx`
- `app/ferramentas/calculadora-rescisao/page.tsx`

**Páginas hub (server components, edição direta):**
- `app/recibos/page.tsx`
- `app/orcamentos/page.tsx`
- `app/mei/page.tsx`
- `app/sobre/page.tsx`
- `app/politica-editorial/page.tsx`

**Páginas client-wrapped (padrão preservado — editado o client component, não o wrapper de metadata):**
- `app/contratos/_components/ContratosClient.tsx` (wrapper `app/contratos/page.tsx` **não foi tocado**, continua responsável só pelo `metadata` + JSON-LD de FAQ)
- `app/educacao-financeira/_components/EducacaoFinanceiraClient.tsx` (wrapper `app/educacao-financeira/page.tsx` **não foi tocado**, continua só com `metadata`)

**Correção adicional (fora do escopo original, achada durante a revisão):**
- `app/orcamentos/page.tsx`: link quebrado `/politica-de-privacidade` → `/politica-privacidade` (mesmo bug do CookieBanner corrigido na Fase 2A, mas numa página diferente).

## Páginas reforçadas

Conteúdo mínimo (o que é / quando usar / quando não usar / como preencher / erros comuns / aviso legal / FAQ / documentos relacionados / caixa editorial) verificado e completado onde faltava:

| Página | O que já existia | O que foi adicionado |
|---|---|---|
| `ferramentas/recibo-pix` | FAQ, aviso legal, sidebar de ferramentas | O que é, quando usar, quando não usar, como preencher, erros comuns, RelatedDocuments, EditorialTrustBox, Breadcrumb |
| `ferramentas/recibo-simples` | O que é, campos essenciais, como preencher, FAQ, aviso legal | Quando usar, quando não usar, erros comuns, RelatedDocuments, EditorialTrustBox, Breadcrumb |
| `ferramentas/imobiliario` | O que é, campos essenciais, como usar, FAQ, aviso legal | Quando usar, quando não usar, erros comuns, RelatedDocuments, EditorialTrustBox, Breadcrumb |
| `ferramentas/orcamento` | O que é (parcial), como valorizar o serviço, aviso legal | **FAQ inteira** (não existia), quando usar, quando não usar, erros comuns, RelatedDocuments, EditorialTrustBox, Breadcrumb |
| `ferramentas/calculadora-rescisao` | O que é, cenários por tipo de demissão, aviso legal, FAQ | Quando não usar, erros comuns, RelatedDocuments, EditorialTrustBox, Breadcrumb |
| `recibos` | Conteúdo já extenso (o que é, quando usar, o que conter, tipos, diferença NF, FAQ, relacionados) | RelatedDocuments, EditorialTrustBox, Breadcrumb — nenhum texto novo necessário |
| `contratos` | Aviso legal, cards de tipos, comparação contrato×recibo×NF, FAQ | Como preencher, erros comuns, RelatedDocuments, EditorialTrustBox, Breadcrumb |
| `orcamentos` | Conteúdo já extenso (o que é, o que conter, como apresentar, erros comuns, FAQ) | RelatedDocuments, EditorialTrustBox, Breadcrumb — nenhum texto novo necessário |
| `mei` | Conteúdo já extenso (recibo vs NF, organização mensal, erros comuns, FAQ) | RelatedDocuments, EditorialTrustBox, Breadcrumb — nenhum texto novo necessário |
| `educacao-financeira` | Aviso legal fixo (sticky), simuladores, conteúdo educativo | RelatedDocuments, EditorialTrustBox, Breadcrumb |
| `sobre` | Já reforçada na Fase 2A (responsável, finalidade, aviso legal, atualização) | Breadcrumb, RelatedDocuments — **EditorialTrustBox deliberadamente omitida** (conteúdo já é redundante com a própria página) |
| `politica-editorial` | Criada na Fase 2A com todo o conteúdo pedido | Breadcrumb, RelatedDocuments — **EditorialTrustBox deliberadamente omitida** pelo mesmo motivo |

Nenhuma legislação nova foi inventada — todo o conteúdo adicionado usa linguagem segura ("em caso de dúvida, consulte um profissional habilitado") e se apoia apenas em práticas já documentadas no código existente (ex.: campos de um recibo, diferença contrato/recibo/nota fiscal).

## Componentes adicionados

- **`EditorialTrustBox`**: aplicado em 10 das 12 páginas (omitido em `/sobre` e `/politica-editorial` por redundância de conteúdo).
- **`RelatedDocuments`**: aplicado nas 12 páginas, com o fallback padrão (7 links) usado na maioria; nenhuma página precisou de lista customizada.
- **`Breadcrumb`**: aplicado nas 12 páginas, todas com `BreadcrumbList` JSON-LD via schema.org.

## Melhorias de E-E-A-T

- Todas as 12 páginas prioritárias agora exibem, de forma visível ao usuário (não só em JSON-LD invisível): quem mantém o conteúdo, que é revisado periodicamente, e que não substitui advogado/contador/órgão público — com link direto para `/politica-editorial` e `/contato`.
- Reforça o que já foi feito em `/sobre` e `/politica-editorial` na Fase 2A, agora espalhado pelas páginas de maior tráfego esperado, não só nas páginas institucionais.

## Melhorias de links internos

- 12 páginas ganharam breadcrumb (navegação + JSON-LD) e bloco de documentos relacionados — nenhuma delas fica mais como nó "solto" na arquitetura de links.
- `ferramentas/orcamento` ganhou sua primeira seção de FAQ, antes inexistente.
- Corrigido mais um link quebrado (`orcamentos/page.tsx`) apontando para `/politica-de-privacidade`.

## Riscos restantes para AdSense

1. **AdSlot com placeholders**: os 5 slots inseridos na Fase 2A continuam com IDs fictícios (`0000000001`–`0000000005`), como instruído. Precisam ser trocados por IDs reais do painel AdSense antes de qualquer deploy — nenhuma mudança feita aqui.
2. **Font Awesome CDN**: 307 ocorrências de classes `fa-*` em 46 arquivos (incluindo `Header.tsx`, `MobileMenu.tsx` e o rodapé em `layout.tsx`). Não é seguro remover o `<link>` do CDN nesta fase — afetaria ícones na maioria do site de uma vez. Fica registrado para Fase 2C como uma migração dedicada (trocar os 307 usos por `lucide-react`, depois remover o CDN).
3. **~14 páginas de ferramenta** ainda sem `AdSlot`/Breadcrumb/RelatedDocuments/EditorialTrustBox (fora do escopo desta fase — só as 12 páginas listadas foram tratadas).
4. **Páginas geo `profissoes/[profissao]/[cidade]`** (as 210 páginas de cidades 21-27 sem link interno, identificadas na Fase 1) continuam sem tratamento — a Fase 2A/2B só cobriu `modelo/[tipo]/[cidade]`.
5. Ainda não há `public/og-image.png` estático (usa fallback dinâmico `/opengraph-image`, já funcional em produção).

## O que ainda precisa de revisão visual

Nenhuma das páginas foi verificada num navegador nesta sessão (sem acesso a servidor de dev/screenshot). Recomendo revisar visualmente, principalmente:
- `ferramentas/recibo-pix`: o `AdSlot` no sidebar ficou entre a lista de ferramentas e o fim da coluna — confirmar que não empurra conteúdo de forma estranha em telas médias (`md`, entre mobile e `lg`).
- `contratos` (ContratosClient): a nova grade "Como Preencher / Erros Comuns" foi inserida entre a comparação contrato×recibo×NF e o FAQ — checar espaçamento.
- Todas as 12 páginas: o `Breadcrumb` novo no topo, para garantir que não colide com nenhum elemento sticky/fixed já existente (ex.: o aviso legal sticky em `educacao-financeira`).

## Resultado do build

```
✓ Compiled successfully
✓ Linting and checking validity of types ... OK
✓ Generating static pages (2003/2003)
0 erros de TypeScript, 0 erros de compilação
```

Mesma contagem de páginas da Fase 2A (2003) — nenhuma rota nova criada, nenhuma removida.

## git status -sb

```
## feature/adsense-low-value-fix
```

Estado cumulativo (Fase 2A + 2B, nada commitado ainda): 68 arquivos modificados, 2 removidos (`public/robots.txt`, `public/sitemap.xml`), 7 caminhos novos (`app/components/Breadcrumb.tsx`, `app/components/EditorialTrustBox.tsx`, `app/components/RelatedDocuments.tsx`, `app/components/ads/`, `app/lib/metadata.ts`, `app/politica-editorial/`, `docs/`).

Novidades específicas desta Fase 2B: 3 componentes novos + 13 arquivos de página/client-component alterados (12 da lista + o fix extra em `orcamentos/page.tsx`).

Nenhum commit foi criado. Nenhum push foi feito. Nenhuma revisão foi solicitada ao AdSense.
