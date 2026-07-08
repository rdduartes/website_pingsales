# PingSales AI Solutions Website

Site estatico pronto para deploy em hosting estatico.

## Estrutura

- `*.html`: paginas do site
- `en/*.html`: versao inglesa
- `es/*.html`: versao espanhola
- `assets/css/styles.css`: estilos globais
- `assets/js/main.js`: JavaScript global
- `assets/img/`: favicon e logotipo
- `scripts/validate.mjs`: valida CSS/JS externos e referencias de assets
- `scripts/build.mjs`: gera a pasta `dist/`

## Comandos

```sh
npm run validate
npm run build
```

Depois do build, use a pasta `dist/` como artefacto de deploy.
