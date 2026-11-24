// Fails the production build if any "TODO:" placeholder is left in published output.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const hits = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      walk(full);
    } else if (/\.(html|xml|txt)$/.test(name)) {
      const text = readFileSync(full, 'utf8');
      if (text.includes('TODO:')) {
        hits.push(full);
      }
    }
  }
}

walk(DIST);

if (hits.length > 0) {
  console.error('\nBuild failed: unresolved TODO: placeholders in published pages:\n');
  for (const file of hits) {
    console.error(`  - ${file}`);
  }
  console.error('\nFill them in (or mark the content draft: true) and rebuild.\n');
  process.exit(1);
}
console.log('check-todos: no TODO placeholders in published output.');
