# Lucca Milano — Portfólio

Portfólio em português, com tema grafite e verde-lima, fontes locais Space Grotesk e Manrope e escultura orbital 3D interativa.

## Executar

```sh
npm ci
npm run dev
```

Abra http://localhost:3000. Para produção: `npm run build` e `npm start`. Validação: `npm run lint`.

## Organização

- `src/components/Portfolio.tsx`: conteúdo, navegação, filtros, experiências e contato.
- `src/components/OrbitScene.tsx`: Three.js + React Three Fiber + Drei, com iluminação local.
- `src/app/globals.css`: identidade visual, layout e breakpoints.
- `CONTENT.md`: fontes das informações e datas ainda não confirmadas.

A cena é carregada sob demanda, limita a resolução de renderização e pausa fora da tela ou com a aba oculta. A animação 3D inicia automaticamente, sem botão de reprodução, conforme solicitado. Oferece fallback sem WebGL.

As capas dos projetos são ilustrações. Contato usa e-mail e links diretos, sem serviço externo de envio. Não são necessárias variáveis de ambiente.

React permanece na série 19.2 por compatibilidade com React Three Fiber 9.7.

## Dependências

O Next.js foi atualizado para 15.5.25 e React para 19.2.8. A auditoria de produção ainda aponta quatro alertas transitivos (Next/PostCSS, nanoid e sharp). A migração de versão principal do Next.js não faz parte desta reformulação; revisar os alertas antes da publicação.

