# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added
- Criação de páginas pilar de conteúdo: `/recibos`, `/contratos`, `/orcamentos` e `/mei`.
- Criação de páginas institucionais: `/como-ganhamos-dinheiro` e `/parcerias`.
- Adicionado arquivo `CONTRIBUTING.md` com guia de commits.

### Fixed
- Correção de erro de "hydration mismatch" no gerador de Recibo de Salário, removendo `new Date()` do estado inicial dos componentes.
- Melhorias gerais de tipagem em componentes reutilizáveis, como `FaqAccordion`.
