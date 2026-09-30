---
name: verify-plan-against-live-state
description: Before executing any plan, instruction, or staged task written by someone (or some session) that couldn't see the project's current live state, check every file, count, and claim it references and report what's absent, stale, or already done — before a single edit is made. Use whenever instructions were authored somewhere that couldn't read the target's current state, and executing them would change that state.
grounded-in: []
---

# Verify a Plan Against Live State

Adapted from prior methodology work. Not specific to any one hand-off mechanism — applies any time a plan's author's view of the project may be out of date: a plan written in a prior session, a prompt drafted by someone without repo access, a task queued days ago.

## Treat the plan as a claim, not a fact

**The checks, in order:**

1. **Do the targets exist?** Every file/path the plan names — the exact path, not "something like it."
2. **Do referenced ids/names resolve?** A plan may cite something that was renamed, never built, or exists only in whoever wrote it's memory of an earlier state.
3. **Do the counts and lists match?** If the plan says "the three affected files" or "at least six items," count them live. A carried-over count or file list is the single most common thing to be quietly wrong.
4. **Has it already been done?** Check before doing — a plan asking to redo work that already landed is as real a failure as a plan referencing something stale, and looks identical from inside the plan itself.
5. **A keyword or file match is not verification — read the hit in context.** A search matching a term doesn't confirm the match means what you think it means; check both directions, that a hit is real and that a miss isn't a broken search.
6. **If something is described as "already decided," check how long it's been outstanding, not just whether it exists.** A decision agreed but never actually landed, discovered only incidentally, is a more urgent finding than a fresh one — say how old it is, not just that it's missing.

## Classify each finding

| Finding | Meaning | What to do |
|---|---|---|
| Absent | Target doesn't exist | Stop — find out whether it should be created, or the plan is wrong |
| Stale | Exists but changed since the plan was written | Re-read it; the plan may still be right, or may now be harmful |
| Already done | Landed in a prior pass | Record as verified no-op, not silently skipped |
| Correct | Matches | Proceed |

## The rule that makes this worth running

Scope every claim to exactly what you checked, and say plainly what you didn't. A verification that quietly generalizes ("these looked fine, so the rest is probably fine too") is worse than no verification at all — it converts an unknown into a false known.

## What this does not do

It doesn't judge whether the plan's *decision* is a good one — only whether the world it was written against still matches reality. A perfectly-verified plan can still be a bad idea; that judgment stays with whoever's accountable for it.
