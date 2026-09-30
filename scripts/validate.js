#!/usr/bin/env node
/**
 * validate.js — checks frontmatter shape, not content, across the repo.
 * Adapted (heavily simplified) from prior methodology work.
 * Run: npm run validate
 */

const fs = require('fs');
const path = require('path');

function parseFrontmatter(content) {
  // \r?\n tolerates both LF and CRLF -- see .gitattributes / extraction-register.md row 22
  // for why this matters and is checked, not assumed.
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  const result = {};
  match[1].split('\n').forEach(line => {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1 || line.startsWith(' ')) return;
    const key = line.slice(0, colonIdx).trim();
    const val = line.slice(colonIdx + 1).trim();
    if (!key) return;
    result[key] = (val.startsWith('[') && val.endsWith(']'))
      ? val.slice(1, -1).split(',').map(s => s.trim()).filter(Boolean)
      : val;
  });
  return result;
}

function walkDir(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const skip = new Set(['node_modules', '.git', 'examples']); // examples/ has its own deliberately-messy fixtures, not real content
  fs.readdirSync(dir).forEach(file => {
    if (skip.has(file)) return;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) walkDir(filePath, fileList);
    else if (file.endsWith('.md') && file !== 'README.md') fileList.push(filePath);
  });
  return fileList;
}

const VALID_STATES = ['open', 'decided', 'superseded'];
const SKILL_NAME_PATTERN = /^[a-z0-9-]{1,64}$/;
const SKILL_RESERVED_WORDS = ['anthropic', 'claude'];

function validate() {
  const repoRoot = path.join(__dirname, '..');
  const files = walkDir(repoRoot);
  const issues = [];
  const ids = new Set();

  files.forEach(filePath => {
    const rel = path.relative(repoRoot, filePath);
    const content = fs.readFileSync(filePath, 'utf8');
    const fm = parseFrontmatter(content);
    if (!fm) return; // not every .md file is a tracked node (e.g. this repo's own README.md, skill reference.md files)

    if (path.basename(filePath) === 'SKILL.md') {
      if (!fm.name) issues.push({ file: rel, issue: 'Missing required field: name' });
      else if (!SKILL_NAME_PATTERN.test(fm.name)) issues.push({ file: rel, issue: `Invalid name: "${fm.name}" (lowercase letters/digits/hyphens, max 64 chars)` });
      else if (SKILL_RESERVED_WORDS.some(w => fm.name.toLowerCase().includes(w))) issues.push({ file: rel, issue: `Invalid name: "${fm.name}" (cannot contain a reserved word)` });
      if (fm.description === undefined) issues.push({ file: rel, issue: 'Missing required field: description' });
      else if (fm.description.length === 0 || fm.description.length > 1024) issues.push({ file: rel, issue: `Invalid description length: ${fm.description.length} (must be 1-1024 chars)` });
      return;
    }

    // Templates describe the format; they are not themselves tracked content.
    if (rel.startsWith('templates' + path.sep)) return;

    if (fm.id === undefined) issues.push({ file: rel, issue: 'Missing required field: id' });
    if (fm.state === undefined) issues.push({ file: rel, issue: 'Missing required field: state' });
    else if (!VALID_STATES.includes(fm.state)) issues.push({ file: rel, issue: `Invalid state: "${fm.state}"` });
    if (fm['last-updated'] && !/^\d{4}-\d{2}-\d{2}$/.test(fm['last-updated'])) {
      issues.push({ file: rel, issue: `Invalid date format for last-updated: "${fm['last-updated']}"` });
    }
    if (fm.id) {
      if (ids.has(fm.id)) issues.push({ file: rel, issue: `Duplicate id: "${fm.id}"` });
      ids.add(fm.id);
    }
  });

  if (issues.length === 0) {
    console.log(`✓ All ${files.length} files valid`);
    return;
  }
  console.error(`✗ ${issues.length} issue(s) found:\n`);
  issues.forEach(({ file, issue }) => console.error(`  ${file}\n    → ${issue}`));
  process.exit(1);
}

validate();
