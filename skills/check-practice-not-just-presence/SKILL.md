---
name: check-practice-not-just-presence
description: Check whether this kit's own mechanisms (lessons.md, STATE.md, decisions/) are actually being operated in live work, not just present and up to date on paper — a log seeded once and never touched again looks identical, at rest, to one genuinely operating. Run periodically, or whenever a project that looks conformant on paper still needs constant correction in practice.
grounded-in: []
---

# Check Practice, Not Just Presence

Adapted from prior methodology work — built directly after a conformance audit checked that methodology files existed and were current, and still missed that one project's log had been seeded once, retroactively, and never actually operated turn-by-turn since.

## Why this is a different check from `scripts/handoff-check.js`

`handoff-check.js` catches *staleness relative to commits* — a mechanical, cheap check. This skill catches something that check structurally cannot: a file that's technically current (recently touched) but was filled in as a one-off exercise rather than genuinely operated as corrections actually happened. Run this when the mechanical check alone isn't answering the real question.

## What to check

1. **Seed-marker staleness.** If `lessons.md` (or any template-derived file) still reads like its original template content with no real entries added, and real working sessions have clearly happened since — the mechanism hasn't taken; the file is decoration.
2. **Correction-to-log gap.** Look for correction signals in recent work that never made it into `lessons.md` — direct pushback, a revert commit, a bug someone had to point out. For each one found, is there a matching entry? A correction with no matching entry is the finding — not "the log is thin," specifically "this correction didn't make it in."
3. **Stated-vs-practiced.** Pick one or two rules from `AGENTS.md` and check the most recent real work against them directly — was the rule actually followed, or silently worked around?

## What this deliberately does not try to do

It doesn't try to make this fully mechanical — there's no script that reliably reads "was a correction actually made and not logged" out of a transcript or commit history alone. State findings as judgment, sourced from real evidence (a specific commit, a specific piece of feedback), not as an automated pass/fail.

## When to run it

Not on a fixed schedule of its own — alongside whatever periodic review cadence the project already has (see `roles/role-reviewer.md` once it exists), or specifically when a project looks fine on every mechanical check but still needs frequent correction in practice. That mismatch is exactly what this check is for.
