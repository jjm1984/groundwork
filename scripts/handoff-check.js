#!/usr/bin/env node
/**
 * handoff-check.js — warns when STATE.md looks stale relative to recent
 * commits, i.e. real work happened but the handoff/learning-loop discipline
 * in AGENTS.md wasn't actually followed. This is the "existence isn't the
 * same as operation" check — see docs/extraction-register.md row 21.
 * Run: npm run handoff-check
 */

const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// execFileSync (no shell) rather than execSync -- on Windows, execSync's
// default cmd.exe shell does its own %-expansion on a raw command string
// and mangles git's --format=%ct placeholders before git ever sees them
// (fails with "'%ct' is not recognized..."). Passing args as an array
// bypasses the shell entirely, which is also just safer in general.
function git(root, args) {
  return execFileSync('git', args, { cwd: root }).toString().trim();
}

function main() {
  const root = path.join(__dirname, '..');
  let lastStateCommit, recentCommits;
  try {
    lastStateCommit = git(root, ['log', '-1', '--format=%ct', '--', 'STATE.md']);
    recentCommits = git(root, ['log', '-5', '--format=%H|%ct|%s']).split('\n').filter(Boolean);
  } catch (e) {
    console.log('⚠ Not a git repo yet, or no commits — nothing to check.');
    return;
  }

  if (recentCommits.length === 0) {
    console.log('✓ No commits yet.');
    return;
  }
  if (!lastStateCommit) {
    console.log('⚠ STATE.md has never been committed. It should reflect real project state from the first real commit onward.');
    return;
  }

  const stateTime = Number(lastStateCommit);
  const staleCommits = recentCommits.filter(line => {
    const [, ts] = line.split('|');
    return Number(ts) > stateTime;
  });

  if (staleCommits.length >= 3) {
    console.log(`⚠ STATE.md hasn't been touched in the last ${staleCommits.length} commits. Real work looks like it happened without the handoff step (see AGENTS.md § "Ending a session") — check whether it's actually stale, not just quiet.`);
    process.exitCode = 1;
  } else {
    console.log('✓ STATE.md looks current relative to recent commits.');
  }

  // Existence-only check, not a substitute for actually reading them --
  // this only catches "never created at all," the same gap this kit's own
  // build had until asked directly whether these were captured. A real
  // decisions/ folder always has README.md plus at least one dec-*.md once
  // any real decision has been made across enough commits to matter.
  const totalCommits = Number(git(root, ['rev-list', '--count', 'HEAD']));
  if (totalCommits >= 5) {
    const missing = [];
    if (!fs.existsSync(path.join(root, 'lessons.md'))) missing.push('lessons.md');
    if (!fs.existsSync(path.join(root, 'AS-BUILT.md'))) missing.push('AS-BUILT.md');
    const decisionsDir = path.join(root, 'decisions');
    const realDecisions = fs.existsSync(decisionsDir)
      ? fs.readdirSync(decisionsDir).filter(f => f.startsWith('dec-') && f.endsWith('.md'))
      : [];
    if (realDecisions.length === 0) missing.push('a real decisions/dec-*.md (only the template/README exists)');
    if (missing.length > 0) {
      console.log(`⚠ ${totalCommits} commits in, but missing: ${missing.join(', ')}. Existence of a mechanism isn't the same as it being used — see AGENTS.md § "The as-built record" and "The learning loop."`);
      process.exitCode = 1;
    }
  }
}

main();
