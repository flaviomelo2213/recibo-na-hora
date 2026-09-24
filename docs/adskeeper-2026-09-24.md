# AdsKeeper — integração ReciboNaHora

Data: 2026-09-24
Branch: `feature/adskeeper-recibonahora`
Status: preparada no GitHub, ainda não mesclada na `main`

## Configuração

Site ID / loader:
- `1112891`

Widget principal:
- nome: `recibonahora_BR_abaixo-do-recibo`
- widget id: `2087179`

## Alterações

### Loader global
Adicionado em:
- `app/layout.tsx`

Loader:
```html
<script src="https://jsc.adskeeper.com/site/1112891.js" async></script>
```

### Componente reutilizável
Criado:
- `app/components/ads/AdsKeeperWidget.tsx`

O componente renderiza:
- `data-type="_mgwidget"`
- `data-widget-id="2087179"`
- chamada `_mgc.load` via `useEffect`

### Posicionamento
Inserido abaixo das ações de download/geração, nunca dentro de campos do formulário:

- recibo simples
- recibo profissional
- recibo PIX
- recibo de aluguel
- recibo de salário/diarista

### ads.txt
Preservada a linha Google existente:
- `google.com, pub-4754892182690500, DIRECT, f08c47fec0942fa0`

Acrescentadas as linhas AdsKeeper/MGID e parceiros fornecidas pelo proprietário.

## Não instalado nesta etapa

Widget mobile legado ID `2087175`:
- o código completo não foi fornecido;
- não foi inventado nem inferido;
- instalar somente após copiar o snippet oficial em AdsKeeper > Widgets > `</>`.

## Validação antes do merge

1. `npm run build`
2. abrir páginas de recibo e conferir ausência de erro/hydration warning
3. conferir no HTML/source o loader `site/1112891.js`
4. conferir widget `2087179`
5. conferir `/ads.txt`
6. validar responsividade mobile
7. somente depois merge em `main`


## Hardening adicional para convivência com AdSense

Aplicado em 2026-09-24:

- `AdsKeeperWidget` agora usa `<aside role="complementary">`;
- rótulo visual explícito: **Conteúdo patrocinado**;
- separação maior do botão/ação principal;
- borda superior para diferenciar publicidade da ferramenta;
- `min-h-[250px]` para reduzir layout shift (CLS);
- mantido fora dos campos/formulários.

Para evitar mistura de duas redes na mesma página de ferramenta de recibo, os placeholders `AdSlot` foram removidos destas páginas:
- `/ferramentas/recibo-simples`
- `/ferramentas/recibo-pix`
- `/ferramentas/imobiliario`

AdSense continua disponível no restante do site e poderá ser usado em páginas editoriais/informativas, mas essas páginas de geração de recibo passam a usar AdsKeeper como monetização principal.

Cobertura AdsKeeper ampliada para:
- recibo RPA;
- recibo de compra e venda de veículo.

Antes do merge, repetir:
1. `npm run build`;
2. smoke test das 7 páginas de recibo;
3. conferir console do navegador;
4. conferir `/ads.txt`;
5. confirmar que nenhum `AdSlot` AdSense permanece nas páginas de recibo citadas acima.
