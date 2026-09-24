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
