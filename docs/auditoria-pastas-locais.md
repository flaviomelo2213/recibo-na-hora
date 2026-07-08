# Auditoria das Pastas Locais

Auditoria somente leitura — nenhum arquivo foi alterado, copiado ou apagado. Nenhum commit, nenhum push.

## Pasta oficial analisada

`D:\Git\recibo-na-hora`

## Pasta antiga analisada

`D:\OneDrive\Documentos\GitHub\recibo-na-hora`

## Status Git

Ambas as pastas são clones válidos do mesmo repositório remoto (`origin = https://github.com/flaviomelo2213/recibo-na-hora.git`) — não são projetos diferentes, são dois checkouts do mesmo histórico, que divergiram no tempo.

| | `D:\Git\recibo-na-hora` | `D:\OneDrive\...\recibo-na-hora` |
|---|---|---|
| Repositório Git válido | ✅ | ✅ |
| Remote `origin` | mesmo repo | mesmo repo |
| Branch atual | `feature/adsense-low-value-fix` | `refactor/seo-aeo-saas-2026` |
| Último commit | `b9ad073` — "fix(adsense): improve content quality, eeat, sitemap and ad readiness" | `6274eb9` — "chore(seo): document envs and harden legacy /gerar routes metadata" |
| Working tree | 1 modificado + 1 novo (ver abaixo) | 14 modificados + 7 diretórios não commitados |
| Última modificação real (`app/page.tsx`) | 2026-07-07 | **2026-03-05** (~4 meses parado) |

## Branch atual

`D:\Git\recibo-na-hora` está em `feature/adsense-low-value-fix`, que por sua vez foi criada a partir de `main` (`fe200fa`) e contém, adicionalmente, todo o histórico de `refactor/seo-aeo-saas-2026`.

Confirmado via `git merge-base --is-ancestor`: o commit `6274eb9` (topo da branch `refactor/seo-aeo-saas-2026` no OneDrive) **já é ancestral** do commit `716596b` presente em `D:\Git\recibo-na-hora`. Ou seja, tudo que existe no OneDrive (committed) já está contido no histórico de `D:\Git`, e `D:\Git` está muitos commits à frente.

## Último commit

- `D:\Git`: `b9ad073` (working tree com AdSlot.tsx modificado — correção de segurança pendente de commit, autorizada e já explicada em `docs/adslot-safety-relatorio.md`).
- OneDrive: `6274eb9`, com 14 arquivos modificados e 7 diretórios/arquivos novos **nunca commitados nem enviados ao remoto**.

## Working tree

**D:\Git\recibo-na-hora** (limpa, exceto a correção de segurança já documentada):
```
## feature/adsense-low-value-fix
 M app/components/ads/AdSlot.tsx
?? docs/adslot-safety-relatorio.md
```

**OneDrive** (suja há meses, nunca finalizada):
```
## refactor/seo-aeo-saas-2026
 M app/apoio-corretor/page.tsx, app/contato/page.tsx, app/contratos/page.tsx,
   app/educacao-financeira/page.tsx, app/ferramentas/imobiliario/page.tsx,
   app/ferramentas/page.tsx, app/ferramentas/recibo-simples/page.tsx,
   app/gerar/venda_veiculo/page.tsx, app/layout.tsx, app/mei/page.tsx,
   app/orcamentos/page.tsx, app/page.tsx, app/recibos/page.tsx, next.config.js
?? app/apoio-corretor/_components/, app/contato/_components/,
   app/contratos/_components/, app/educacao-financeira/_components/,
   app/gerar/venda-veiculo/, app/robots.ts, app/sitemap.ts
```

## Diferenças entre as pastas

Comparação recursiva completa (`diff -rq`), ignorando `.git`, `node_modules`, `.next`, `.vercel`, `dist`, `build`: **100 diferenças** no total — 1 arquivo idêntico em conteúdo mas com quebra de linha diferente (`.env.example`, CRLF vs LF), o restante são arquivos/pastas exclusivos de um lado ou conteúdo divergente.

## Arquivos exclusivos no OneDrive

Apenas **2 arquivos**, e ambos são justamente os que a Fase 2A removeu deliberadamente do projeto oficial por conflitarem com o `robots.ts`/`sitemap.ts` dinâmicos do Next.js:

- `public/robots.txt`
- `public/sitemap.xml`

Não há nenhum outro arquivo, componente, rota ou dado exclusivo do OneDrive.

## Arquivos exclusivos em D:\Git

Uma quantidade grande — o OneDrive está muitos meses atrás e nunca recebeu o trabalho de SEO programático nem as Fases 2A/2B/2C. Destaques:

- **Todo o diretório `app/_data/`** (9 arquivos: `affiliateProducts.ts`, `blogPosts.ts`, `comparacoes.ts`, `documentTypes.ts`, `guias.ts`, `modeloFormats.ts`, `perguntas.ts`, `profissoes.ts`, `seoCities.ts`) — fonte de dados de toda a geração programática de páginas.
- **Rotas inteiras ausentes no OneDrive**: `app/comparacoes/`, `app/guias/`, `app/mapa-de-perguntas/`, `app/modelo/`, `app/perguntas/`, `app/politica-editorial/`, `app/profissoes/`, `app/recursos/`, `app/opengraph-image.tsx`.
- **Componentes das Fases 2A/2B**: `app/components/Breadcrumb.tsx`, `EditorialTrustBox.tsx`, `RelatedDocuments.tsx`, `app/components/ads/` (AdSlot).
- `app/lib/metadata.ts`, `app/lib/schema.ts` (helpers de metadata/JSON-LD).
- `docs/` inteiro (relatórios das Fases 0–2C).
- `public/googledb764e40ba8b003a.html` (verificação do Google Search Console).
- `.claude/` (configuração local desta ferramenta).

## Arquivos diferentes

~55 arquivos existem nos dois lados mas com conteúdo divergente — essencialmente **todas** as páginas que passaram pelas Fases 2A/2B/2C (Open Graph, EEAT, breadcrumb, AdSlot, correções de link) mais `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`, `next.config.js`, `package.json`/`package-lock.json`. Em todos os casos verificados, a versão em `D:\Git` é a mais recente e mais completa — não há indício de conteúdo mais novo do lado do OneDrive.

## Arquivos que devem ser migrados

**Nenhum.** Não foi encontrado nenhum arquivo, commit ou trecho de código exclusivo do OneDrive com valor a recuperar:
- Os 2 arquivos exclusivos do OneDrive (`robots.txt`, `sitemap.xml` estáticos) são exatamente o que foi removido de propósito — trazê-los de volta reintroduziria o bug corrigido na Fase 2A.
- As mudanças não commitadas do OneDrive (14 arquivos modificados + 7 itens novos) são um WIP antigo e parcial do mesmo refactor de SEO/AEO que já foi finalizado, commitado e ampliado em `D:\Git` — o diff mostra o OneDrive com *menos* código nesses mesmos arquivos (ex.: `educacao-financeira/page.tsx` com 551 linhas a menos, `contratos/page.tsx` com 367 a menos), confirmando que é uma versão anterior e incompleta, não uma divergente com algo novo.
- `.env.example` é idêntico em conteúdo nas duas pastas.

## Arquivos que devem ser ignorados

- `tsconfig.tsbuildinfo` (D:\Git) — artefato de build, já está em `.gitignore`.
- `.next/`, `node_modules/`, `.vercel/` — build/dependências, corretamente fora do controle de versão nas duas pastas.
- Nenhum arquivo temporário, `*.bak`, `*copy*` ou similar foi encontrado em `D:\Git\recibo-na-hora` (busca dedicada, resultado vazio).
- `app/gerar/venda_veiculo/page.tsx` (com underscore) não é lixo — é um redirect permanente deliberado (`permanentRedirect('/gerar/venda-veiculo')`) para preservar a URL antiga com underscore.

## Riscos encontrados

- **Nenhum risco de perda de dados**: confirmado que `D:\Git` contém, como ancestral direto no histórico Git, tudo que existe commitado no OneDrive, mais ~4 meses de trabalho adicional (SEO programático, Fases 2A/2B/2C).
- **Risco de confusão operacional**: a pasta OneDrive tem 3 commits locais nunca enviados ao remoto e trabalho não commitado — se alguém abrir essa pasta e continuar trabalhando nela por engano, criará uma segunda linha de desenvolvimento divergente e desatualizada. Recomendo não editar mais nada ali.
- Nenhuma credencial, segredo ou dado sensível foi encontrado exposto em nenhuma das comparações.

## Confirmação das Fases 2A/2B/2C

Confirmado por inspeção do commit `b9ad073` e do working tree atual — todas as entregas seguem presentes e intactas em `D:\Git\recibo-na-hora`:

- **Fase 2A**: `app/robots.ts`/`app/sitemap.ts` dinâmicos (estáticos legados removidos), `app/lib/metadata.ts` (Open Graph em 26+ páginas), `AdSlot.tsx` criado, `modelo/[tipo]/[cidade]` com `noindex`, `app/politica-editorial/page.tsx`, `app/sobre/page.tsx` reforçado.
- **Fase 2B**: `Breadcrumb.tsx`, `EditorialTrustBox.tsx`, `RelatedDocuments.tsx` criados e aplicados nas páginas prioritárias.
- **Fase 2C**: correções de link em `procuracao/page.tsx` e `ApoioCorretorClient.tsx`, links `/contato` e `/sobre` no rodapé de `app/layout.tsx`.
- **Correção de segurança do AdSlot** (pós Fase 2C, ainda não commitada): `app/components/ads/AdSlot.tsx` com guarda `PLACEHOLDER_SLOT_PATTERN` — confirmada presente no arquivo atual.

## Resultado do build

```
✓ Compiled successfully
✓ Generating static pages (2003/2003)
```

Build 100% limpo, sem erros de TypeScript nem de compilação, mesma contagem de páginas das auditorias anteriores (2003).

## Recomendação final

**Podemos ignorar a pasta OneDrive?** Sim. Ela está ~4 meses desatualizada, sem nenhum trabalho exclusivo de valor, e todo o seu histórico commitado já está contido dentro de `D:\Git\recibo-na-hora`.

**Podemos seguir somente com D:\Git\recibo-na-hora?** Sim, sem ressalvas. É a única pasta com o trabalho completo e atualizado (SEO programático + Fases 2A/2B/2C + correção de segurança do AdSlot), e é a que está de fato conectada ao branch que será usado no deploy.

**Existe algo importante a recuperar antes do merge?** Não. Nenhum arquivo, commit ou trecho de código do OneDrive precisa ser migrado. A única ação seguindo o princípio de precaução (não executada aqui, pois esta auditoria é somente leitura) seria, no futuro, apagar ou arquivar a pasta OneDrive para evitar que alguém edite nela por engano — mas isso é uma decisão de limpeza, não um bloqueio para o merge/deploy.
