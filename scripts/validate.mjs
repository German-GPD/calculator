import { readFileSync } from 'node:fs';
import { Script } from 'node:vm';
import { strict as assert } from 'node:assert';

const web = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const android = readFileSync(new URL('../android/app/src/main/assets/index.html', import.meta.url), 'utf8');
assert.equal(web, android, 'Android asset must match the web calculator');
const scripts = [...web.matchAll(/<script>([\s\S]*?)<\/script>/g)];
assert.equal(scripts.length, 1, 'Expected one inline application script');
const source = scripts[0][1];
new Script(source, { filename: 'calculator-inline.js' });
assert.doesNotMatch(source, /\beval\s*\(|new\s+Function\s*\(/, 'Dynamic code execution is not allowed');
assert.doesNotMatch(source, /innerHTML\s*=/, 'Do not render user-controlled data through innerHTML');
for (const [, id] of source.matchAll(/\$\('([^']+)'\)/g)) {
  assert.ok(web.includes('id="' + id + '"') || web.includes("id='" + id + "'"), 'Missing DOM element #' + id);
}
assert.match(source, /source\.length>256/, 'Expression length limit is missing');
assert.match(source, /tokens\.length>128/, 'Token limit is missing');
assert.match(source, /depth>32/, 'Parenthesis nesting limit is missing');
assert.match(source, /function toFraction/, 'Fraction conversion is missing');
assert.match(source, /function factorial/, 'Factorial function is missing');
assert.match(source, /function calculate/, 'Scientific parser is missing');
assert.doesNotMatch(web, /GERA|Гера|🦉|owl-card|owl-avatar/i, 'The old mascot must be completely removed');
for (const feature of ['scientificRow', 'fractionMode', 'data-value="sin("', 'data-value="π"']) assert.ok(web.includes(feature), 'Missing feature: ' + feature);
console.log('Calculator validation passed: syntax, DOM IDs, parser limits, safe rendering and Android asset parity.');
