// Checks that every internal link/asset reference in dist/ resolves to a file.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { siteConfig } from '../site.config.ts';

const DIST = 'dist';
const base = siteConfig.base.replace(/\/$/, '');
const siteOrigin = new URL(siteConfig.site).origin;
const broken = [];

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      return htmlFiles(full);
    }
    return full.endsWith('.html') ? [full] : [];
  });
}

function resolves(pathname) {
  let p = decodeURIComponent(pathname);
  if (base && p.startsWith(base)) {
    p = p.slice(base.length) || '/';
  }
  const candidates = [p, `${p}.html`, join(p, 'index.html')];
  return candidates.some((c) => {
    const file = join(DIST, c);
    return existsSync(file) && statSync(file).isFile();
  });
}

for (const file of htmlFiles(DIST)) {
  const html = readFileSync(file, 'utf8');
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  for (const match of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const raw = match[1];
    if (/^(mailto:|tel:|data:|javascript:)/.test(raw)) {
      continue;
    }
    if (raw.startsWith('#')) {
      if (raw.length > 1 && !ids.has(raw.slice(1))) {
        broken.push(`${file}: missing anchor ${raw}`);
      }
      continue;
    }
    let url;
    try {
      url = new URL(raw, `${siteOrigin}/`);
    } catch {
      broken.push(`${file}: invalid URL ${raw}`);
      continue;
    }
    if (url.origin !== siteOrigin) {
      continue; // external links are not checked
    }
    if (!resolves(url.pathname)) {
      broken.push(`${file}: broken link ${raw}`);
    }
  }
}

if (broken.length > 0) {
  console.error(`\n${broken.length} broken internal link(s):\n`);
  for (const b of broken) {
    console.error(`  - ${b}`);
  }
  process.exit(1);
}
console.log('check-links: all internal links resolve.');
