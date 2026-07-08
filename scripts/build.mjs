import { cp, copyFile, mkdir, readdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

const entries = await readdir(root);
const htmlFiles = entries.filter((entry) => entry.endsWith('.html'));
let copiedPages = htmlFiles.length;

for (const file of htmlFiles) {
  await copyFile(path.join(root, file), path.join(dist, file));
}

for (const dir of ['privacy-policy', 'terms-of-service', 'data-deletion']) {
  const source = path.join(root, dir);
  if (existsSync(source)) {
    await cp(source, path.join(dist, dir), { recursive: true });
    copiedPages += 1;
  }
}

for (const dir of ['en', 'es']) {
  const source = path.join(root, dir);
  if (existsSync(source)) {
    await cp(source, path.join(dist, dir), { recursive: true });
    const localizedEntries = await readdir(source);
    copiedPages += localizedEntries.filter((entry) => entry.endsWith('.html')).length;
  }
}

await cp(path.join(root, 'assets'), path.join(dist, 'assets'), { recursive: true });

for (const file of ['robots.txt', 'sitemap.xml']) {
  const source = path.join(root, file);
  if (existsSync(source)) {
    await copyFile(source, path.join(dist, file));
  }
}

console.log(`Build concluido: ${copiedPages} paginas copiadas para dist/`);
