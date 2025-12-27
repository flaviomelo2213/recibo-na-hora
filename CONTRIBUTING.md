# Guia de Contribuição - ReciboNaHora

Agradecemos o interesse em contribuir com o projeto! Para manter nosso histórico de versões limpo, organizado e fácil de entender, seguimos um padrão para as mensagens de commit.

## Padrão de Mensagens de Commit (Conventional Commits)

Padronizar as mensagens nos ajuda a automatizar a geração de changelogs, entender rapidamente o que cada alteração fez no histórico e facilita a busca por mudanças específicas.

### Formato

A mensagem de commit deve seguir o formato:

```
<tipo>(<escopo>): <descrição>
```

-   **tipo**: Define a natureza da alteração.
-   **escopo** (opcional): Define a área do projeto que foi alterada.
-   **descrição**: Um resumo claro e conciso da alteração, em letras minúsculas.

### Tipos Aceitos

-   **feat**: Para novas funcionalidades ou páginas.
-   **fix**: Para correções de bugs.
-   **chore**: Para tarefas de manutenção, como atualização de dependências, configurações de build, etc.
-   **docs**: Para alterações na documentação (como este arquivo ou a política de privacidade).
-   **refactor**: Para alterações no código que não corrigem um bug nem adicionam uma funcionalidade.
-   **style**: Para alterações de formatação de código (espaçamento, ponto e vírgula, etc.).
-   **test**: Para adição ou correção de testes.

### Exemplos do Projeto

-   `feat: criar pagina pilar /recibos`
-   `feat: criar pagina pilar /contratos`
-   `feat: criar pagina pilar /orcamentos`
-   `feat: criar pagina pilar /mei`
-   `feat: criar pagina /parcerias`
-   `feat: criar pagina /como-ganhamos-dinheiro`
-   `fix: corrigir hydration mismatch em recibo-salario`
-   `fix(types): tipar props no FaqAccordion`
-   `chore: alinhar versoes next/react e reinstalar dependencias`
-   `docs: atualizar politica de privacidade`

### Regras do Projeto

1.  **Um commit por alteração lógica**: Agrupe alterações relacionadas em um único commit.
2.  **Evite commits gigantes**: Se você fez muitas coisas diferentes, quebre em múltiplos commits.
3.  **Teste antes de commitar**: Sempre use o ambiente de *Preview* para garantir que sua alteração não quebrou nada antes de clicar em *Sync Changes*.
