import assert from 'node:assert/strict';
// The pinned release's main points to a missing .cjs file. Use its shipped CommonJS entry explicitly.
import format from '@x12i/graphenix-format/dist/index.js';
const { addNode, getNode, validateGraph } = format;
const original = { formatVersion: '1.0.0', id: 'fixture-graph', graph: { nodes: [], edges: [], inputs: [], outputs: [] } };
const draft = addNode(original, { id: 'review', kind: 'task', name: 'Review example' });
assert.equal(original.graph.nodes.length, 0);
assert.equal(getNode(draft, 'review').name, 'Review example');
const result = validateGraph(draft);
assert.equal(result.valid, true, JSON.stringify(result.errors));
assert.equal(validateGraph({ invalid: true }).valid, false);
console.log(draft);
