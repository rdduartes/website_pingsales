import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  SITE_URL,
  hreflangBlock,
  marketingPages,
  socialMeta,
} from './seo-config.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function organizationJsonLd(locale) {
  const names = {
    pt: ['Inteligência Artificial', 'Agentes Autónomos', 'Machine Learning', 'Automação Inteligente', 'SaaS', 'Investigação em IA', 'CRM', 'ERP', 'Marketing Digital', 'Formação Profissional'],
    en: ['Artificial Intelligence', 'Autonomous Agents', 'Machine Learning', 'Intelligent Automation', 'SaaS', 'AI Research', 'CRM', 'ERP', 'Digital Marketing', 'Professional Training'],
    es: ['Inteligencia Artificial', 'Agentes Autónomos', 'Machine Learning', 'Automatización Inteligente', 'SaaS', 'Investigación en IA', 'CRM', 'ERP', 'Marketing Digital', 'Formación Profesional'],
  };
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PingSales AI Solutions, Lda',
    url: SITE_URL,
    vatID: 'PT519518128',
    brand: { '@type': 'Brand', name: 'PingSales.ai' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Francisco Costa Gomes, Edifício CIBT NERBE, n.º 2',
      addressLocality: 'Beja',
      postalCode: '7800-591',
      addressCountry: 'PT',
    },
    knowsAbout: names[locale],
  });
}

function empresaJsonLd(canonical) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PingSales AI Solutions, Lda',
    url: canonical,
    vatID: 'PT519518128',
    foundingDate: '2026',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Francisco Costa Gomes, Edifício CIBT NERBE, n.º 2',
      addressLocality: 'Beja',
      postalCode: '7800-591',
      addressCountry: 'PT',
    },
  });
}

function patchHead(html, { locale, pageFile, meta, isHome, isEmpresa }) {
  const social = socialMeta({
    locale,
    canonical: meta.canonical,
    title: meta.ogTitle,
    description: meta.description,
  });

  const iconBlock = `<link rel="icon" type="image/png" href="${locale === 'pt' ? 'assets' : '../assets'}/img/favicon.png">
<link rel="apple-touch-icon" href="${locale === 'pt' ? 'assets' : '../assets'}/img/favicon.png">`;

  const jsonLd = isHome
    ? `<script type="application/ld+json">${organizationJsonLd(locale)}</script>`
    : isEmpresa
      ? `<script type="application/ld+json">${empresaJsonLd(meta.canonical)}</script>`
      : '';

  const head = `<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${meta.title}</title>
<meta name="description" content="${meta.description}">
<meta name="robots" content="index, follow">
${hreflangBlock(meta.canonical, locale, pageFile)}
${social}
<meta name="theme-color" content="#060410">
${iconBlock}
${jsonLd}
<link rel="stylesheet" href="${locale === 'pt' ? 'assets' : '../assets'}/css/styles.css">
</head>`;

  return html.replace(/<head>[\s\S]*?<\/head>/, head);
}

for (const [pageFile, locales] of Object.entries(marketingPages)) {
  for (const locale of ['pt', 'en', 'es']) {
    const meta = locales[locale];
    const filePath = locale === 'pt'
      ? path.join(root, pageFile)
      : path.join(root, locale, pageFile);
    const html = await readFile(filePath, 'utf8');
    const updated = patchHead(html, {
      locale,
      pageFile,
      meta,
      isHome: pageFile === 'index.html',
      isEmpresa: pageFile === 'empresa.html',
    });
    await writeFile(filePath, updated, 'utf8');
    console.log(`SEO: ${locale}/${pageFile}`);
  }
}

console.log('Marketing SEO atualizado.');
