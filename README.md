# CineLista

Site de indicação de filmes e séries, desenvolvido como projeto de UX/UI e front-end. O usuário pode buscar títulos por gênero ou nome, visualizar detalhes (sinopse, elenco, nota), salvar filmes em uma watchlist pessoal, avaliar com estrelas e comentar.

Este repositório documenta as quatro etapas do processo de design de produto aplicadas ao projeto — **wireframe**, **mockup**, **protótipo navegável** e **plano de teste de usabilidade** — e contém a implementação funcional em **HTML, CSS e JavaScript puro** (sem frameworks).

## Sobre o projeto

O CineLista cobre cinco telas principais:

- **Home** — header com busca, watchlist e login; destaque do filme da semana; filtros por gênero; grade de cards.
- **Busca / Resultados** — reaproveita o card do grid da Home para exibir os resultados da busca.
- **Detalhe do filme** — sinopse, elenco, botão de watchlist, avaliação por estrelas e lista de comentários.
- **Watchlist** — lista dos títulos salvos pelo usuário, com opção de remoção.
- **Login** — modal simples (nome de exibição, sem senha), fictício para fins de protótipo.

## Identidade visual

O mockup aplica uma paleta escura inspirada em cinema, com dourado como cor de destaque. Os pôsteres são ilustrados por gradiente (em vez de fotos reais), para evitar uso de material protegido por direitos autorais.

| Elemento | Valor |
| --- | --- |
| Fundo | `#0F1115` |
| Superfície de cartões/inputs | `#171A21` |
| Bordas | `#2B2E37` |
| Destaque (dourado) | `#E8B563` |
| Texto principal | `#F2EFE9` |
| Texto secundário | `#8B8F98` |
| Fonte de títulos | Fraunces (serifada) |
| Fonte de interface | Inter (sem serifa) |

## Funcionalidades implementadas

- Home com filme em destaque, filtro por gênero e grid com 30 títulos.
- Busca por título, com resultados dinâmicos.
- Página de detalhe com sinopse, elenco, nota da crítica e filmes relacionados do mesmo gênero.
- Watchlist pessoal: adicionar e remover filmes com um clique.
- Login simples (nome de exibição, sem senha) para liberar as ações de comunidade.
- Avaliação por estrelas (1 a 5) feita pelo usuário, com média calculada a partir de todas as avaliações.
- Comentários por filme, associados ao nome de quem comentou.
- Persistência local dos dados via `localStorage` (watchlist, usuário, avaliações e comentários).

## Estrutura do repositório

```
CineLista/
├── CineLista_Documentacao.docx   # Documentação de UX (wireframe, mockup, protótipo, teste de usabilidade)
├── index.html                    # Estrutura da aplicação
├── style.css                     # Estilos e identidade visual
└── script.js                     # Lógica da aplicação (dados, navegação, estado, persistência)
```

## Plano de teste de usabilidade

A documentação inclui um roteiro de teste de usabilidade com 6 tarefas (buscar por gênero, abrir detalhes, adicionar à watchlist, logar e avaliar, comentar, remover da watchlist), um questionário SUS simplificado (System Usability Scale) para medir o índice de usabilidade percebida, e uma planilha de registro dos resultados por participante. Os detalhes completos do roteiro, das perguntas e dos critérios de sucesso estão em `CineLista_Documentacao.docx`.

## Como executar

1. Clone este repositório.
2. Abra o arquivo `index.html` diretamente no navegador (não é necessário servidor ou build).
3. A persistência de dados (watchlist, avaliações, comentários e login) depende do `localStorage` do navegador, então funciona normalmente ao abrir o arquivo localmente ou em qualquer hospedagem estática.

## Tecnologias

- HTML5
- CSS3 (variáveis CSS, grid e flexbox, responsividade via media queries)
- JavaScript puro (ES6+), sem frameworks ou dependências externas

## Licença

Projeto acadêmico/de estudo, sem fins comerciais. Os dados de filmes e sinopses são utilizados apenas para fins ilustrativos do protótipo.
