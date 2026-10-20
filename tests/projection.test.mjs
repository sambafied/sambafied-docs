import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {mkdtempSync, mkdirSync, writeFileSync, rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {dirname, join, resolve} from 'node:path';
import {checkProjection} from '../scripts/check-docs-projection.mjs';

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'sambafied-projection-'));
  t.after(() => { assert.equal(dirname(resolve(root)), resolve(tmpdir())); rmSync(root, {recursive: true, force: true}); });
  mkdirSync(join(root, 'docs'));
  const page = '---\npublication: public\ntitle: Example\n---\n# Example\n';
  writeFileSync(join(root, 'docs/index.md'), page);
  const state = {schema: 1, generator: 'sambafied-public-docs/v1', source_revision: 'a'.repeat(40), files: {'index.md': createHash('sha256').update(page).digest('hex')}};
  writeFileSync(join(root, 'public-docs-source.json'), JSON.stringify(state));
  return {root, state};
}
test('exact generated projection passes', t => {
  const {root} = fixture(t);
  assert.equal(checkProjection(root), 1);
});
test('edited generated content fails', t => {
  const {root} = fixture(t);
  writeFileSync(join(root, 'docs/index.md'), 'local changes');
  assert.throws(() => checkProjection(root), /drift/);
});
test('unexpected private page fails', t => {
  const {root} = fixture(t);
  writeFileSync(join(root, 'docs/private.md'), 'private note');
  assert.throws(() => checkProjection(root), /Unexpected/);
});
test('forged traversal state fails', t => {
  const {root, state} = fixture(t);
  state.files = {'../outside.md': 'a'.repeat(64)};
  writeFileSync(join(root, 'public-docs-source.json'), JSON.stringify(state));
  assert.throws(() => checkProjection(root));
});
test('missing generated page fails', t => {
  const {root} = fixture(t);
  rmSync(join(root, 'docs/index.md'));
  assert.throws(() => checkProjection(root), /missing/);
});
test('unknown generator fails', t => {
  const {root, state} = fixture(t);
  state.generator = 'unapproved';
  writeFileSync(join(root, 'public-docs-source.json'), JSON.stringify(state));
  assert.throws(() => checkProjection(root), /Invalid/);
});
