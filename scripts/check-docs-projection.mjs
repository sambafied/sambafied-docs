import {createHash} from 'node:crypto';
import {readFileSync, readdirSync, lstatSync} from 'node:fs';
import {dirname, join, parse, resolve} from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';

const denied = new Set(['private','review','reviews','config','secret','secrets','.git','.governance','.env']);
function noLinks(path) {
  for (let current = resolve(path); ; current = dirname(current)) {
    if (lstatSync(current).isSymbolicLink()) throw new Error('Linked projection path denied');
    if (current === parse(current).root) break;
  }
}
function safeName(name) {
  if (typeof name !== 'string' || !name.endsWith('.md') || /[\\:]/.test(name)) throw new Error('Invalid projection path');
  const parts = name.split('/');
  if (parts.some(p => !p || p === '.' || p === '..' || denied.has(p.toLowerCase()) || denied.has(p.replace(/\.md$/, '').toLowerCase()))) throw new Error('Private or traversal path denied');
}
export function checkProjection(root) {
  const statePath = join(root, 'public-docs-source.json');
  noLinks(statePath);
  const state = JSON.parse(readFileSync(statePath, 'utf8'));
  if (Object.keys(state).sort().join(',') !== 'files,generator,schema,source_revision' ||
      state.schema !== 1 || state.generator !== 'sambafied-public-docs/v1' ||
      !/^[a-f0-9]{40,64}$/.test(state.source_revision) ||
      !state.files || Array.isArray(state.files) || typeof state.files !== 'object' ||
      !Object.keys(state.files).length) throw new Error('Invalid projection state');
  const docs = join(root, 'docs');
  noLinks(docs);
  const actual = [];
  function visit(directory, prefix = '') {
    for (const entry of readdirSync(directory, {withFileTypes: true})) {
      if (entry.isSymbolicLink()) throw new Error('Linked projection path denied');
      const name = prefix + entry.name;
      if (entry.isDirectory()) visit(join(directory, entry.name), name + '/');
      else if (entry.isFile()) actual.push(name);
      else throw new Error('Nonregular projection entry');
    }
  }
  visit(docs);
  if (JSON.stringify(actual.sort()) !== JSON.stringify(Object.keys(state.files).sort())) throw new Error('Unexpected or missing generated docs');
  for (const [name, sha] of Object.entries(state.files)) {
    safeName(name);
    if (!/^[a-f0-9]{64}$/.test(sha)) throw new Error('Invalid projection hash');
    const page = join(docs, name);
    noLinks(page);
    const bytes = readFileSync(page);
    if (createHash('sha256').update(bytes).digest('hex') !== sha) throw new Error('Generated docs drift: ' + name);
    if (!bytes.toString('utf8').startsWith('---\npublication: public\n')) throw new Error('Public marker missing: ' + name);
  }
  return actual.length;
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
  console.log('Verified ' + checkProjection(root) + ' generated public pages');
}
