import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pages } from './legal/pages.mjs';
import { SITE_URL, socialMeta } from './seo-config.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function footLegal(locale) {
  const labels = {
    pt: ['Política de Privacidade', 'Termos de Serviço', 'Eliminação de Dados'],
    en: ['Privacy Policy', 'Terms of Service', 'Data Deletion'],
    es: ['Política de Privacidad', 'Términos de Servicio', 'Eliminación de Datos'],
  };
  const rights = {
    pt: '© 2026 · TODOS OS DIREITOS RESERVADOS',
    en: '© 2026 · ALL RIGHTS RESERVED',
    es: '© 2026 · TODOS LOS DERECHOS RESERVADOS',
  };
  const aria = { pt: 'Informação legal', en: 'Legal information', es: 'Información legal' };
  const address = {
    pt: 'PINGSALES AI SOLUTIONS, LDA · NIF 519518128<br>RUA FRANCISCO COSTA GOMES, EDIFÍCIO CIBT NERBE, N.º 2 · 7800-591 BEJA · PT',
    en: 'PINGSALES AI SOLUTIONS, LDA · VAT/NIF 519518128<br>RUA FRANCISCO COSTA GOMES, CIBT NERBE BUILDING, NO. 2 · 7800-591 BEJA · PT',
    es: 'PINGSALES AI SOLUTIONS, LDA · NIF 519518128<br>RUA FRANCISCO COSTA GOMES, EDIFICIO CIBT NERBE, N.º 2 · 7800-591 BEJA · PT',
  };
  const [privacy, terms, deletion] = labels[locale];
  return `<footer class="foot">
  <span>${address[locale]}</span>
  <span class="text-right">
    <nav class="foot-legal" aria-label="${aria[locale]}">
      <a href="../privacy-policy/">${privacy}</a>
      <a href="../terms-of-service/">${terms}</a>
      <a href="../data-deletion/">${deletion}</a>
    </nav>
    ${rights[locale]}<br><a href="https://pingsales.ai" rel="noopener">PINGSALES.AI ↗</a>
  </span>
</footer>`;
}

function localePaths(locale) {
  if (locale === 'pt') {
    return { asset: '../assets', home: '../index.html', canonicalPrefix: '' };
  }
  return { asset: '../../assets', home: '../index.html', canonicalPrefix: `${locale}/` };
}

function shell(locale, meta, slug) {
  const { asset, home, canonicalPrefix } = localePaths(locale);
  const lang = { pt: 'pt-PT', en: 'en', es: 'es' };
  const menu = meta.menu;
  const menuLabel = { pt: 'Menu principal', en: 'Main menu', es: 'Menú principal' };
  const langAria = { pt: 'Idioma', en: 'Language', es: 'Idioma' };
  const close = { pt: 'FECHAR', en: 'CLOSE', es: 'CERRAR' };
  const brandAria = {
    pt: 'PingSales — início',
    en: 'PingSales — home',
    es: 'PingSales — inicio',
  };
  const langLinks = meta.langLinks;

  const canonical = `${SITE_URL}/${canonicalPrefix}${slug}/`;
  const social = socialMeta({
    locale,
    canonical,
    title: meta.ogTitle || meta.title,
    description: meta.description,
    type: 'article',
  });
  const webPageLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: meta.title,
    description: meta.description,
    url: canonical,
    dateModified: '2026-07-08',
    inLanguage: lang[locale],
    isPartOf: { '@type': 'WebSite', name: 'PingSales', url: SITE_URL },
  });

  return `<!DOCTYPE html>
<html lang="${lang[locale]}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>${meta.title}</title>
<meta name="description" content="${meta.description}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="pt-PT" href="__SITE_URL__/__SLUG_PT__">
<link rel="alternate" hreflang="en" href="__SITE_URL__/en/__SLUG_EN__">
<link rel="alternate" hreflang="es" href="__SITE_URL__/es/__SLUG_ES__">
<link rel="alternate" hreflang="x-default" href="__SITE_URL__/__SLUG_PT__">
${social}
<meta name="theme-color" content="#060410">
<link rel="icon" type="image/png" href="${asset}/img/favicon.png">
<link rel="apple-touch-icon" href="${asset}/img/favicon.png">
<script type="application/ld+json">${webPageLd}</script>
<link rel="stylesheet" href="${asset}/css/styles.css">
</head>
<body data-field="grid">

<canvas id="field" aria-hidden="true"></canvas>

<header class="topbar">
  <a class="brand" href="${home}" aria-label="${brandAria[locale]}">
    <img src="${asset}/img/logo.png" alt="PingSales">
    <small>AI&nbsp;Solutions,&nbsp;Lda</small>
  </a>
  <div class="topbar-actions">
    <nav class="lang-switch" aria-label="${langAria[locale]}">
      ${langLinks}
    </nav>
    <button class="menu-toggle" id="menuToggle" aria-expanded="false" aria-controls="menu" data-open-label="MENU" data-close-label="${close[locale]}">
      <span class="menu-label">MENU</span>
      <span class="burger"><i></i><i></i></span>
    </button>
  </div>
</header>

<nav id="menu" aria-label="${menuLabel[locale]}">
  <div class="menu-inner">
    <div class="menu-nav">
      ${menu.map((item) => `<a href="${item.href}"><i>${item.num}</i> ${item.label}</a>`).join('\n      ')}
    </div>
    <div class="menu-meta">
      <b>PINGSALES AI SOLUTIONS, LDA</b><br>
      ${meta.menuMeta}
      <a href="https://pingsales.ai" rel="noopener">PINGSALES.AI ↗</a>
    </div>
  </div>
</nav>

<main class="page">
  <header class="page-head">
    <p class="kicker">${meta.kicker}</p>
    <h1 class="giga">
      <span class="row"><span class="no-transform">${meta.heading}</span></span>
    </h1>
  </header>

  <article class="legal-doc">
    <p class="legal-updated">${meta.updatedLabel}: ${meta.updated}</p>
    ${meta.intro ? `<p class="legal-intro">${meta.intro}</p>` : ''}
    ${meta.sections.map((section) => `<section>
      <h2>${section.title}</h2>
      ${section.body}
    </section>`).join('\n    ')}
  </article>
</main>

${footLegal(locale)}
<script src="${asset}/js/main.js" defer></script>
</body>
</html>`;
}

function fixAlternates(html, slug) {
  return html
    .replaceAll('__SITE_URL__', SITE_URL)
    .replaceAll('__SLUG_PT__', `${slug}/`)
    .replaceAll('__SLUG_EN__', `${slug}/`)
    .replaceAll('__SLUG_ES__', `${slug}/`);
}

for (const page of pages) {
  for (const locale of ['pt', 'en', 'es']) {
    const data = page[locale];
    const outDir = locale === 'pt'
      ? path.join(root, page.slug)
      : path.join(root, locale, page.slug);
    await mkdir(outDir, { recursive: true });
    const html = fixAlternates(shell(locale, { ...data, slug: page.slug }, page.slug), page.slug);
    await writeFile(path.join(outDir, 'index.html'), html, 'utf8');
  }
}

console.log(`Geradas ${pages.length * 3} paginas legais.`);
