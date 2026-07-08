# Estado Atual do Projeto — ReciboNaHora

Auditoria de arquitetura, código, SEO e AdSense. Nenhum arquivo do repositório foi alterado — apenas leitura, `tsc --noEmit`, `next lint` (abortado por falta de config) e `next build` local (read-only, gera artefatos em `.next/`, não versionado).

> **Data da auditoria**: 2026-07-07. Snapshot do estado do projeto no branch `main`, commit `fe200fa` ("fix: affiliate links"). Este documento é um registro histórico do estado nesse momento — não é atualizado automaticamente conforme o código evolui.

## Arquitetura

- **Stack**: Next.js 14.2.35 (App Router) + TypeScript + Tailwind CSS + React 18.2, hospedado na Netlify (`netlify.toml` + `@netlify/plugin-nextjs`).
- **Modelo de produto**: gerador de documentos (recibos, contratos, procurações, requerimentos, currículo, orçamento) — geração de PDF 100% client-side via `jspdf`/`jspdf-autotable`, sem persistência de dados do usuário.
- **Backend mínimo**: 3 API routes — `app/api/leads` (grava lead no Supabase), `app/api/ai/lai` (usa SDK `openai` apontando para outro provedor/gateway), `app/api/ai/rewrite` (chama a API do Gemini via `fetch` direto, sem SDK). As duas rotas de IA usam abordagens diferentes para o "mesmo" tipo de funcionalidade.
- **IA opcional (BYOK)**: usuário cola sua própria chave Gemini, guardada em `localStorage`, usada para reescrever textos em alguns formulários. Existe um `AiProvider`/`useAi` global (montado em `app/layout.tsx`) mas metade das ferramentas não o usa — cada uma reimplementa o acesso ao `localStorage` isoladamente.
- **Monetização**: Google AdSense (`ca-pub-4754892182690500`, script + `ads.txt` + meta tag consistentes) e afiliados (Kiwify, Monetizze) via `app/_data/affiliateProducts.ts`.
- **SEO programático em larga escala**: motor central é a combinação de `generateStaticParams` + arquivos de dados em `app/_data/*.ts` (cidades, profissões, tipos de documento, perguntas, guias, comparações) que multiplicam poucos templates em **2002 páginas estáticas** no build.
- **Schema.org centralizado** em `app/lib/schema.ts` (`buildHowTo`, `buildFAQPage`, `buildArticle`, `buildBreadcrumb`, `buildSpeakablePage`, e dois exports não usados: `buildWebPage`, `buildSoftwareApplication`).
- **Sem testes automatizados** (nenhum framework configurado) e **sem ESLint configurado** (`next lint` pede setup interativo — nunca foi rodado no projeto).

## Estrutura de Pastas

```
app/
├─ _data/           # 9 arquivos: fonte de dados para todas as páginas programáticas
├─ api/              # 3 route handlers (leads, ai/lai, ai/rewrite)
├─ components/       # ai/, icons/, layout/, ui/ + componentes soltos (Header, MobileMenu, CookieBanner...)
├─ blog/, guias/, perguntas/, comparacoes/, profissoes/, modelo/   # conteúdo/SEO programático
├─ ferramentas/      # ~19 geradores, padrão page.tsx (metadata) + _components/*Client.tsx
├─ gerar/            # geradores legados (recibo-salario, venda-veiculo/venda_veiculo)
├─ requerimentos/, contratos/, recibos/, orcamentos/, mei/         # páginas hub/categoria
├─ sobre/, contato/, politica-privacidade/, termos-uso/,
│  como-ganhamos-dinheiro/, parcerias/, recursos/, apoio-corretor/,
│  educacao-financeira/, consultoria-credito/ (redirect)           # institucionais
├─ layout.tsx, sitemap.ts, robots.ts, opengraph-image.tsx, page.tsx
public/
├─ ads.txt, robots.txt (legado!), sitemap.xml (legado!), verificação Google
```

156 arquivos `.ts`/`.tsx` em `app/` geram, via rotas dinâmicas, as 2002 páginas do build.

## Funcionalidades Concluídas

- Build de produção **passa limpo**: 0 erros TypeScript, compila e gera as 2002 páginas estáticas sem warnings de conflito.
- ~19 geradores de documentos funcionais: recibo simples, recibo PIX, recibo RPA, vale-transporte, nota promissória, 6 variantes de procuração, autorização de viagem, contrato completo, contrato de locação, currículo profissional, orçamento, 3 requerimentos (declaração de endereço, ITBI, LAI), calculadora de rescisão, MEI relatório, recibo de salário, venda de veículo.
- SEO programático amplo e tecnicamente correto por página: metadata único, `alternates.canonical`, JSON-LD apropriado ao tipo de conteúdo (HowTo/FAQ/Breadcrumb para ferramentas e modelos; Article/FAQ/Breadcrumb/Speakable para blog, guias, perguntas, comparações).
- AdSense corretamente instrumentado (script + `ads.txt` + meta tag todos com o mesmo publisher ID).
- Captura de leads funcional via Supabase.
- Política de privacidade **substantiva**, cita explicitamente Google AdSense e cookies/DART (não é boilerplate genérico).
- Security headers configurados em `next.config.js` (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy).
- Sitemap dinâmico (`app/sitemap.ts`) e `robots.ts` cobrindo todas as rotas com `priority`/`changeFrequency` bem pensados.

## Funcionalidades Incompletas

- **Contrato de Compra e Venda de Imóvel**: card com CTA "Em desenvolvimento - Solicitar" que abre um modal de lead em vez de gerar o documento (`app/contratos/_components/ContratosClient.tsx:109-115`) — captura de demanda antes de construir, intencional mas incompleto.
- TODO explícito não implementado: filtro por categoria em `app/requerimentos/page.tsx:100`.
- Fluxo de IA (BYOK Gemini) parcialmente unificado: `AiProvider`/`useAi` existe e está montado globalmente, mas `curriculo-profissional`, `prefeitura`, `procuracao-profissional`, `recibo-simples` e `lai-pedido` ignoram o contexto e reimplementam acesso direto ao `localStorage` — refatoração que ficou pela metade.
- Cookie banner não gate a carga do AdSense — consentimento é decorativo (ver Problemas).
- OG image única e genérica para o site inteiro — nenhuma página de blog/modelo/profissões tem imagem social própria.

## Problemas Encontrados

### 🔴 Críticos

1. **robots.txt / sitemap.xml duplicados e conflitantes.** Existem simultaneamente arquivos estáticos legados (`public/robots.txt`, `public/sitemap.xml` com apenas ~20 URLs e domínio `www.recibonahora.com.br`) **e** as versões dinâmicas corretas (`app/robots.ts`, `app/sitemap.ts`, 2002 URLs, domínio `recibonahora.com.br` sem www). O `next build` local não acusa erro e prioriza as rotas dinâmicas — mas esse comportamento de precedência entre arquivo estático em `public/` e rota do App Router pode variar na Netlify em produção. Se o estático "vencer" na prática, o Google estaria enxergando só ~20 páginas em vez de 2002, além do sinal conflitante www vs non-www prejudicar a canonicalização. **Precisa ser validado diretamente em produção** (não é verificável só localmente).
2. **Link quebrado dentro do próprio banner de cookies**: `app/components/CookieBanner.tsx:43` aponta para `/politica-de-privacidade`, rota que não existe — a real é `/politica-privacidade`. Irônico por ser justamente o link de compliance.
3. **Risco de thin/duplicate content em ~1.850 páginas.** As páginas cruzadas `modelo/[tipo]/[cidade]` (~1040) e `profissoes/[profissao]/[cidade]` (810) diferem entre si em apenas 2–3 frases com o nome da cidade trocado; o restante (o que é, quando usar, campos obrigatórios, FAQ, parágrafo de "validade") é idêntico entre todas as variantes de cidade. É um padrão clássico de *doorway pages*, alvo tanto do Helpful Content System do Google quanto da política de "conteúdo de valor" do AdSense — risco real de limitação/rejeição de aprovação ou queda de rankings.

### 🟠 Importantes

4. AdSense carrega incondicionalmente (`strategy="afterInteractive"`) independente da resposta do usuário no `CookieBanner` — o banner grava a escolha no `localStorage` mas nada no `layout.tsx` gate a tag `adsbygoogle` a esse consentimento. Não bloqueia aprovação para público majoritariamente brasileiro, mas é risco de compliance se houver tráfego EU/UK.
5. Duplicidade de rota `/gerar/venda-veiculo` (canônica) vs `/gerar/venda_veiculo` (stub `permanentRedirect`) — funciona, mas o componente real (`ReciboVeiculo.tsx`) ainda mora fisicamente na pasta antiga (`venda_veiculo/_components/`), sendo importado pela rota nova. Cheiro de organização.
6. Branch remoto com nome malformado: `origin/ss--lptn-'sport-=--9002'-||-true` (1 commit "BYOK Gemini", mesmo autor, conteúdo legítimo — não é malicioso, mas é artefato de higiene de repositório a limpar).

### 🟡 Código morto / duplicado

7. `app/components/ToolShell.tsx` (raiz) — 0 importadores; superado por `app/components/layout/ToolShell.tsx` (usado em 8 páginas).
8. `app/components/ai/AiContext.tsx` — implementação de contexto de IA abandonada/duplicada; `AiProvider.tsx` é o canônico (montado em `layout.tsx`).
9. `app/components/ui/Badge.tsx` — 0 importadores.
10. `app/ferramentas/recibo-simples/_components/PreviewReciboSimples.tsx` e `FerramentaReciboSimples.tsx` — par abandonado, substituído por `ReciboSimplesGenerator.tsx` monolítico.
11. `app/lib/schema.ts`: `buildWebPage` e `buildSoftwareApplication` exportados mas nunca usados.
12. `app/_data/documentTypes.ts` — arquivo inteiro sem importadores.
13. `app/_data/affiliateProducts.ts`: `FEATURED_PRODUCTS` exportado mas não usado.

### ⚪ Qualidade / processo

14. **Sem ESLint configurado** — não existe `.eslintrc*`; `npm run lint` pede setup interativo e nunca rodou (nem localmente, nem em CI, presumivelmente).
15. **Sem testes automatizados** de nenhum tipo, nem para os geradores de PDF que são o core do produto.
16. `openai` (SDK) é usado em apenas uma das duas rotas de IA (`ai/lai`); a outra (`ai/rewrite`) chama a API do Gemini via `fetch` cru — inconsistência arquitetural leve, não é dependência morta (ambos os pacotes são usados).

## Melhorias Recomendadas

- Remover `public/robots.txt` e `public/sitemap.xml` estáticos, manter só as versões dinâmicas de `app/`, e padronizar o domínio (escolher www **ou** non-www em `metadataBase`, sitemap, robots e canonical — hoje há mistura).
- Nas páginas geo (`modelo/[tipo]/[cidade]`, `profissoes/[profissao]/[cidade]`), decidir entre (a) enriquecer com dado realmente específico por cidade/estado quando existir (ex.: alíquota de ITBI varia por município) ou (b) reduzir o cross-product às combinações com demanda de busca real (validar via Search Console antes de podar).
- Unificar o fluxo de BYOK Gemini num único hook (`useAi()`) em vez de cada ferramenta reimplementar acesso a `localStorage`.
- Configurar ESLint (`next lint --strict`) e rodar uma vez para levantar débito técnico oculto; integrar em CI.
- Adicionar ao menos smoke tests para os geradores de PDF.
- Implementar Google Consent Mode v2 / gate do AdSense atrás do consentimento de cookies, se houver qualquer chance de tráfego EU/UK.
- Adicionar OG image dinâmica por categoria de conteúdo (blog, modelo, profissões) usando `opengraph-image.tsx` parametrizado.
- Aproveitar `buildSoftwareApplication` (já existe, não é usado) na home/ferramentas, com `AggregateRating` se houver dados reais de avaliação.
- Remover o código morto listado (seção "Código morto / duplicado" acima).
- Corrigir o link `/politica-de-privacidade` → `/politica-privacidade` no `CookieBanner`.
- Mover `ReciboVeiculo.tsx` para a pasta da rota canônica (`venda-veiculo/_components/`).
- Limpar o branch remoto de nome malformado.

## Prioridade Alta

1. Validar em produção (Netlify) qual `robots.txt`/`sitemap.xml` está de fato sendo servido hoje — e depois remover os estáticos legados de `public/`, padronizando o domínio.
2. Corrigir o link quebrado no `CookieBanner` (`/politica-de-privacidade`).
3. Definir e executar plano para o risco de thin content nas ~1.850 páginas cidade×tipo (é o maior risco estrutural para SEO e para aprovação/manutenção do AdSense).

## Prioridade Média

4. Configurar ESLint e rodar a primeira varredura.
5. Unificar o fluxo de API key Gemini (`useAi`) entre todos os formulários.
6. Implementar gate de consentimento para o AdSense.
7. Remover o código morto listado (componentes e exports não utilizados).
8. Mover `ReciboVeiculo.tsx` para a pasta correta.

## Prioridade Baixa

9. OG image dinâmica por categoria de conteúdo.
10. Aproveitar o schema `SoftwareApplication` hoje não utilizado.
11. Limpar o branch remoto de nome malformado.
12. Adicionar testes automatizados básicos (smoke tests nos geradores).
13. Padronizar o provedor de IA usado nas duas rotas (`openai` SDK vs `fetch` cru ao Gemini).

## Roadmap Sugerido

- **Sprint 1 — Higiene crítica**: validar/corrigir sitemap-robots em produção, corrigir link quebrado do CookieBanner, remover código morto listado, limpar branch remoto.
- **Sprint 2 — SEO/conteúdo**: decidir (via dados do Search Console) quais combinações tipo×cidade merecem enriquecimento vs poda; implementar OG images dinâmicas por categoria.
- **Sprint 3 — Compliance/qualidade**: configurar ESLint + primeira rodada de correções, Consent Mode para AdSense, smoke tests para os geradores de PDF.
- **Sprint 4 — Arquitetura**: unificar fluxo de IA (`useAi` único em todas as ferramentas), padronizar provedor de IA, ativar `SoftwareApplication` schema com dados reais de avaliação se disponíveis.

## Nota de estratégia (decisão do time, pós-auditoria)

A auditoria original classificou as ~1.850 páginas programáticas como risco de *thin content* e sugeriu considerar reduzi-las. Decisão do time: volume programático não é o problema em si (há sites de grande porte com esse modelo funcionando bem) — o problema é a baixa diferenciação entre variantes de cidade. Estratégia adotada: identificar páginas com potencial real de busca, enriquecê-las com conteúdo específico, e manter as demais apenas quando fizerem sentido para SEO/usuário, em vez de poda genérica. Essa decisão será detalhada no Plano Mestre de Execução (fases 1–4) a ser produzido separadamente.
