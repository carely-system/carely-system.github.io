# 📱 Carely

Carely é uma landing page para um aplicativo de monitoramento de saúde
focado em idosos e familiares, com recursos como lembretes,
acompanhamento de atividades e alertas em tempo real.

------------------------------------------------------------------------

## 🛠️ Stack

-   React 19\
-   Vite\
-   Tailwind CSS\
-   Framer Motion\
-   i18next

------------------------------------------------------------------------

## 🚀 Como rodar o projeto

### 1. Instalar dependências

``` bash
npm install
```

------------------------------------------------------------------------

### 2. Rodar em ambiente de desenvolvimento

``` bash
npm run dev
```

A aplicação estará disponível em:

    http://localhost:3000

------------------------------------------------------------------------

### 3. Build de produção

``` bash
npm run build
```

Os arquivos serão gerados em:

    dist/

------------------------------------------------------------------------

## 🌐 Deploy com GitHub Pages (gh-pages)

### 1. Instalar dependência

``` bash
npm install gh-pages --save-dev
```

------------------------------------------------------------------------

### 2. Configurar o `package.json`

Adicione o script:

``` json
"scripts": {
  "build": "vite build",
  "deploy": "gh-pages -d dist"
}
```

------------------------------------------------------------------------

### 3. Configurar o Vite

No arquivo `vite.config.ts`, defina o base corretamente:

-   Para repo com nome diferente do usuário:

``` ts
export default defineConfig({
  base: '/nome-do-repo/',
})
```

-   Para repo na raiz (`usuario.github.io`):

``` ts
export default defineConfig({
  base: '/',
})
```

------------------------------------------------------------------------

### 4. Fazer deploy

``` bash
npm run build
npm run deploy
```

------------------------------------------------------------------------

### 5. Ativar no GitHub

-   Vá em **Settings → Pages**
-   Selecione a branch `gh-pages`

------------------------------------------------------------------------

### 6. Acessar o site

    https://carely-system.github.io/

------------------------------------------------------------------------

## 📂 Estrutura importante

-   `src/constants/content.ts` → conteúdo da aplicação\
-   `src/i18n/index.ts` → traduções (pt/en)\
-   `src/constants/themes.ts` → temas visuais
