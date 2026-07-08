export const SITE_URL = 'https://pingsalesaisolutions.com';
export const SITE_NAME = 'PingSales AI Solutions';
export const OG_IMAGE = `${SITE_URL}/assets/img/og-image.jpg`;
export const OG_IMAGE_ALT = 'PingSales AI Solutions — Engenharia de inteligência artificial';

export const ogLocales = {
  pt: { og: 'pt_PT', alternates: ['en_US', 'es_ES'] },
  en: { og: 'en_US', alternates: ['pt_PT', 'es_ES'] },
  es: { og: 'es_ES', alternates: ['pt_PT', 'en_US'] },
};

export function socialMeta({ locale, canonical, title, description, type = 'website' }) {
  const { og, alternates } = ogLocales[locale];
  const altTags = alternates.map((value) => `<meta property="og:locale:alternate" content="${value}">`).join('\n');
  return `<meta property="og:type" content="${type}">
<meta property="og:site_name" content="${SITE_NAME}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${OG_IMAGE}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${OG_IMAGE_ALT}">
<meta property="og:locale" content="${og}">
${altTags}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${OG_IMAGE}">`;
}

export const marketingPages = {
  'index.html': {
    pt: {
      title: 'PingSales AI Solutions — Engenharia de IA | Portugal',
      description: 'Sistemas de inteligência artificial em Portugal: agentes autónomos, SaaS com IA, automação inteligente, investigação e parcerias comerciais.',
      canonical: `${SITE_URL}/`,
      ogTitle: 'PingSales AI Solutions — Construímos a inteligência que trabalha',
    },
    en: {
      title: 'PingSales AI Solutions — AI Engineering | Portugal',
      description: 'Artificial intelligence systems in Portugal: autonomous agents, AI SaaS, intelligent automation, research and commercial partnerships.',
      canonical: `${SITE_URL}/en/`,
      ogTitle: 'PingSales AI Solutions — We build intelligence that works',
    },
    es: {
      title: 'PingSales AI Solutions — Ingeniería de IA | Portugal',
      description: 'Sistemas de inteligencia artificial en Portugal: agentes autónomos, SaaS con IA, automatización inteligente, investigación y alianzas comerciales.',
      canonical: `${SITE_URL}/es/`,
      ogTitle: 'PingSales AI Solutions — Construimos la inteligencia que trabaja',
    },
  },
  'areas.html': {
    pt: {
      title: 'Áreas de atuação — PingSales AI Solutions | IA e SaaS',
      description: 'Nove áreas de atuação: sistemas de IA, software SaaS, automação, consultoria, web e mobile, CRM/ERP, marketing com IA, formação e comércio tecnológico.',
      canonical: `${SITE_URL}/areas.html`,
      ogTitle: 'Áreas de atuação — PingSales AI Solutions',
    },
    en: {
      title: 'Business areas — PingSales AI Solutions | AI & SaaS',
      description: 'Nine business areas: AI systems, SaaS software, automation, consulting, web and mobile, CRM/ERP, AI marketing, training and technology trade.',
      canonical: `${SITE_URL}/en/areas.html`,
      ogTitle: 'Business areas — PingSales AI Solutions',
    },
    es: {
      title: 'Áreas de actuación — PingSales AI Solutions | IA y SaaS',
      description: 'Nueve áreas de actuación: sistemas de IA, software SaaS, automatización, consultoría, web y móvil, CRM/ERP, marketing con IA, formación y comercio tecnológico.',
      canonical: `${SITE_URL}/es/areas.html`,
      ogTitle: 'Áreas de actuación — PingSales AI Solutions',
    },
  },
  'laboratorio.html': {
    pt: {
      title: 'Laboratório — PingSales Lab | Investigação em IA',
      description: 'O PingSales Lab investiga inteligência artificial aplicada: agentes autónomos, modelos de linguagem, automação inteligente e análise preditiva.',
      canonical: `${SITE_URL}/laboratorio.html`,
      ogTitle: 'PingSales Lab — Investigação em inteligência artificial',
    },
    en: {
      title: 'Lab — PingSales Lab | Artificial intelligence research',
      description: 'PingSales Lab researches applied artificial intelligence: autonomous agents, language models, intelligent automation and predictive analytics.',
      canonical: `${SITE_URL}/en/laboratorio.html`,
      ogTitle: 'PingSales Lab — Artificial intelligence research',
    },
    es: {
      title: 'Laboratorio — PingSales Lab | Investigación en IA',
      description: 'PingSales Lab investiga inteligencia artificial aplicada: agentes autónomos, modelos de lenguaje, automatización inteligente y análisis predictivo.',
      canonical: `${SITE_URL}/es/laboratorio.html`,
      ogTitle: 'PingSales Lab — Investigación en inteligencia artificial',
    },
  },
  'empresa.html': {
    pt: {
      title: 'A empresa — PingSales AI Solutions | Beja, Portugal',
      description: 'Sociedade portuguesa sediada em Beja, dedicada a sistemas de inteligência artificial, software e transformação digital. NIF 519518128.',
      canonical: `${SITE_URL}/empresa.html`,
      ogTitle: 'A empresa — PingSales AI Solutions',
    },
    en: {
      title: 'The company — PingSales AI Solutions | Beja, Portugal',
      description: 'Portuguese company based in Beja, dedicated to artificial intelligence systems, software and digital transformation. VAT/NIF 519518128.',
      canonical: `${SITE_URL}/en/empresa.html`,
      ogTitle: 'The company — PingSales AI Solutions',
    },
    es: {
      title: 'La empresa — PingSales AI Solutions | Beja, Portugal',
      description: 'Sociedad portuguesa con sede en Beja, dedicada a sistemas de inteligencia artificial, software y transformación digital. NIF 519518128.',
      canonical: `${SITE_URL}/es/empresa.html`,
      ogTitle: 'La empresa — PingSales AI Solutions',
    },
  },
  'contacto.html': {
    pt: {
      title: 'Contacto — PingSales AI Solutions | Beja, Portugal',
      description: 'Fale connosco sobre software, IA, websites, CRM/ERP, marketing digital ou formação. Sede no Edifício CIBT NERBE, Beja, Portugal.',
      canonical: `${SITE_URL}/contacto.html`,
      ogTitle: 'Contacto — PingSales AI Solutions',
    },
    en: {
      title: 'Contact — PingSales AI Solutions | Beja, Portugal',
      description: 'Talk to us about software, AI, websites, CRM/ERP, digital marketing or training. Head office at CIBT NERBE building, Beja, Portugal.',
      canonical: `${SITE_URL}/en/contacto.html`,
      ogTitle: 'Contact — PingSales AI Solutions',
    },
    es: {
      title: 'Contacto — PingSales AI Solutions | Beja, Portugal',
      description: 'Hable con nosotros sobre software, IA, sitios web, CRM/ERP, marketing digital o formación. Sede en el Edificio CIBT NERBE, Beja, Portugal.',
      canonical: `${SITE_URL}/es/contacto.html`,
      ogTitle: 'Contacto — PingSales AI Solutions',
    },
  },
};

export function hreflangBlock(canonical, locale, pageFile) {
  const paths = {
    pt: pageFile === 'index.html' ? `${SITE_URL}/` : `${SITE_URL}/${pageFile}`,
    en: pageFile === 'index.html' ? `${SITE_URL}/en/` : `${SITE_URL}/en/${pageFile}`,
    es: pageFile === 'index.html' ? `${SITE_URL}/es/` : `${SITE_URL}/es/${pageFile}`,
  };
  return `<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="pt-PT" href="${paths.pt}">
<link rel="alternate" hreflang="en" href="${paths.en}">
<link rel="alternate" hreflang="es" href="${paths.es}">
<link rel="alternate" hreflang="x-default" href="${paths.pt}">`;
}
