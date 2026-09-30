#!/usr/bin/env node
/**
 * build-index.js — generates docs/index.json, a flat registry of every
 * tracked file's id/state/path. Consult this (or just search) before
 * writing something new — see AGENTS.md "Search before you build."
 * Adapted (simplified) from prior methodology work.
 * Run: npm run index
 */

const fs = require('fs');
const path = require('path');

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  const result = {};
  match[1].split('\n').forEach(line => {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1 || line.startsWith(' ')) return;
    const key = line.slice(0, colonIdx).trim();
    const val = line.slice(colonIdx + 1).trim();
    if (key) result[key] = val;
  });
  return result;
}

function walkDir(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const skip = new Set(['node_modules', '.git', 'templates', 'examples']);
  fs.readdirSync(dir).forEach(file => {
    if (skip.has(file)) return;
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walkDir(full, fileList);
    else if (file.endsWith('.md') && file !== 'README.md') fileList.push(full);
  });
  return fileList;
}

function main() {
  const root = path.join(__dirname, '..');
  const files = walkDir(root);
  const nodes = [];

  files.forEach(filePath => {
    const content = fs.readFileSync(filePath, 'utf8');
    const fm = parseFrontmatter(content);
    if (!fm) return;
    const rel = path.relative(root, filePath).split(path.sep).join('/');
    if (path.basename(filePath) === 'SKILL.md') {
      nodes.push({ id: fm.name, kind: 'skill', state: null, lastUpdated: null, path: rel });
      return;
    }
    if (!fm.id) return;
    nodes.push({
      id: fm.id,
      kind: rel.split('/')[0],
      state: fm.state || null,
      lastUpdated: fm['last-updated'] || null,
      path: rel
    });
  });

  nodes.sort((a, b) => a.path.localeCompare(b.path));
  const out = { count: nodes.length, nodes };
  fs.writeFileSync(path.join(root, 'docs', 'index.json'), JSON.stringify(out, null, 2) + '\n');
  console.log(`✓ docs/index.json: ${nodes.length} entries`);
}

main();
