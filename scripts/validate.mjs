import { access, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const root = process.argv[2] ? path.resolve(projectRoot, process.argv[2]) : projectRoot;
const failures = [];

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function collectHtmlFiles(dir, base = '') {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (['assets', 'dist', 'scripts', 'node_modules'].includes(entry.name) || entry.name.startsWith('.')) {
        continue;
      }
      files.push(...await collectHtmlFiles(path.join(dir, entry.name), path.join(base, entry.name)));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(path.join(base, entry.name));
    }
  }

  return files;
}

const htmlFiles = (await collectHtmlFiles(root)).sort();

if (htmlFiles.length === 0) {
  failures.push('Nenhum ficheiro HTML encontrado na raiz.');
}

for (const file of htmlFiles) {
  const htmlPath = path.join(root, file);
  const html = await readFile(htmlPath, 'utf8');

  if (!/<link rel="stylesheet" href="(?:(?:\.\.\/)+)?assets\/css\/styles\.css">/.test(html)) {
    failures.push(`${file}: falta o CSS externo assets/css/styles.css.`);
  }

  if (!/<script src="(?:(?:\.\.\/)+)?assets\/js\/main\.js" defer><\/script>/.test(html)) {
    failures.push(`${file}: falta o JavaScript externo assets/js/main.js.`);
  }

  if (/<style[\s>]/i.test(html) || /<\/style>/i.test(html)) {
    failures.push(`${file}: contem CSS inline em <style>.`);
  }

  if (/\sstyle="/i.test(html)) {
    failures.push(`${file}: contem atributos style inline.`);
  }

  if (/fonts\.googleapis|fonts\.gstatic|data:image|javascript:/i.test(html)) {
    failures.push(`${file}: contem dependencia remota de fonte, imagem base64 ou javascript: inline.`);
  }

  const scripts = html.matchAll(/<script\b([^>]*)>/gi);
  for (const match of scripts) {
    const attrs = match[1];
    const isExternal = /\ssrc="/i.test(attrs);
    const isStructuredData = /type="application\/ld\+json"/i.test(attrs);
    if (!isExternal && !isStructuredData) {
      failures.push(`${file}: contem JavaScript executavel inline.`);
    }
  }

  const assetRefs = html.matchAll(/\b(?:src|href)="((?:(?:\.\.\/)+)?assets\/[^"]+)"/g);
  for (const match of assetRefs) {
    const assetPath = path.resolve(path.dirname(htmlPath), match[1]);
    if (!(await exists(assetPath))) {
      failures.push(`${file}: asset em falta ${match[1]}.`);
    }
  }
}

for (const file of ['assets/css/styles.css', 'assets/js/main.js']) {
  if (!(await exists(path.join(root, file)))) {
    failures.push(`Asset obrigatorio em falta: ${file}.`);
  }
}

if (failures.length > 0) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Validacao concluida: ${htmlFiles.length} paginas, CSS/JS externos e assets locais.`);
