# 🎬 CineLite

Aplicação web de catálogo de filmes que consome a API pública do [TMDB](https://www.themoviedb.org/).  
Permite listar, buscar e visualizar detalhes de filmes em uma interface moderna, responsiva e acessível.

## 🚀 Stack

- **React + TypeScript + Vite** — SPA moderna e leve
- **Redux Toolkit + RTK Query** — gerenciamento de estado e cache de API
- **React Router** — controle de rotas entre listagem e detalhes
- **TailwindCSS** — estilização rápida e responsiva

## 🧱 Estrutura do projeto
```
front-end/
  └── src/ 
    ├── api/                    # Integrações com APIs externas
    ├── assets/                 # Recursos estáticos
    ├── components/             # Componentes reutilizáveis e genéricos
    ├── layouts/                # Estruturas de layout que envolvem páginas
    ├── pages/                  # Páginas completas da aplicação
    ├── routes/                 # Definição central das rotas e organização da navegação
    ├── store/                  # Configuração global do Redux Toolkit e middlewares do RTK Query
    ├── types/                  # Tipagens TypeScript compartilhadas
    └── utils/                  # Funções auxiliares e utilitárias
```

## 💻 Executando localmente
1 - Pré-requisitos
- **Node.js** (versão 18 ou superior)

- **npm** (geralmente instalado junto com Node.js) ou **yarn**

- **Git** (para clonar o repositório)

- **Editor de código:** VS Code ou outro de sua preferência

2 - Clone o repositório:
   ```bash
   git clone https://github.com/alysonfumagalli/hit-cinelite-app.git
   cd hit-cinelite-app
  ```

3 - Instale as dependências usando ```npm install``` ou ```yarn install```

4 - Crie uma conta no [TMDB](https://developer.themoviedb.org/docs/getting-started) para obter uma chave da API e crie o arquivo ```.env``` no diretório ```/front-end``` com sua chave da API:
  ```
  VITE_TMDB_API_KEY=<<sua_chave_aqui>>
  ```

5 - Rode o projeto com ```npm run dev```

6 - Acesse no navegador: ```http://localhost:5173```

## 🌐 Deploy

Aplicação disponível em: https://hit-cinelite.vercel.app

## 🧠 Decisões técnicas

- **RTK Query**: escolhido por centralizar a comunicação com a API e gerenciar cache.
- **Debounce na busca**: melhora a performance e evita múltiplas requisições desnecessárias.
- **TailwindCSS**: acelera o desenvolvimento visual e garante responsividade com baixo acoplamento ao JSX.
- **React Router**: estrutura simples e eficaz para SPA, permitindo navegação fluida entre listagem e detalhes.

## 🔧 Pontos de melhoria
- Adicionar testes
- Adicionar seções/páginas específicas (para filmes populares, em cartaz, futuros)
- Adicionar _light mode_
- Alterar arquitetura para FSD
