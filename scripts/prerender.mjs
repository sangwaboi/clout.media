import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const { render } = await import(resolve(root, 'dist-server/entry-server.js'));

const templatePath = resolve(root, 'dist/index.html');
const template = readFileSync(templatePath, 'utf-8');
const appHtml = render();

if (!template.includes('<div id="root"></div>')) {
  throw new Error('prerender: could not find <div id="root"></div> in dist/index.html');
}

const out = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
writeFileSync(templatePath, out);
console.log(`prerender: injected ${appHtml.length} bytes of static HTML into dist/index.html`);
