---
name: orchestrate-and-recompose
description: Sequence multiple skills in real dependency order for a single task, check the composed result against what was actually asked (not each skill's own success signal), and recompose the approach after repeated failure rather than repeating it. Use whenever a task needs more than one skill to complete.
grounded-in: []
---

# Orchestrate and Recompose

Adapted from prior methodology work.

## Before starting a multi-skill task

1. **Identify real dependencies, not just request order.** `skills/checkpoint-and-resume`'s resume-check before anything else if this session might be picking up after an interruption. `skills/feedback-to-fix` before `skills/review-before-shipping` if the work started from feedback. `skills/review-before-shipping` before `skills/merge-safely` before `skills/deploy-and-verify` — see `AGENTS.md` § "Shipping a change" for this kit's own concrete chain.
2. **Sequence accordingly.** Where no real dependency exists, request order is fine — don't invent an ordering constraint that isn't there.

## While executing

3. Run each skill in sequence, checking its own success signal.
4. **Also check the composed result against the original ask.** A set of individually-successful skill runs can still miss the actual goal — each skill checks its own step, nothing automatically checks the whole.

## When it isn't landing

5. Retry the same approach a bounded number of times — don't keep retrying indefinitely on the assumption that persistence alone will fix it.
6. After that ceiling, **force a change of approach** — different sequencing, a different skill, a different way of scoping the task. Repeating an approach that has already failed the same way is not persistence, it's a stuck loop.
7. After a couple of forced approach-changes with no success, stop and surface to whoever's actually accountable for the task (see `roles/`) rather than continuing to adjust on your own.
8. On success, note what could be done better or faster next time — even when nothing went wrong. This is a `reinforce` candidate for `lessons.md`, not just a private observation.

## What this does not do

It doesn't decide what was actually asked — any genuine ambiguity about the goal itself gets asked about directly (see `AGENTS.md` § "Asking vs. proceeding"), never silently reinterpreted here.
