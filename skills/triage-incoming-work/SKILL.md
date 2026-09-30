---
name: triage-incoming-work
description: For anything landing in an inbox or backlog that isn't obviously routine and isn't obviously urgent — decide whether to handle it directly, route it now, route it later, or decline/defer it, rather than treating every leftover item the same way. Use after a first pass has cleared the obvious noise and real items remain.
grounded-in: []
---

# Triage Incoming Work

Adapted from prior methodology work. Runs after an initial pass (see `skills/feedback-to-fix` for the feedback-specific case) has cleared the obvious noise, on whatever's left that isn't obviously routine and isn't obviously urgent.

## The pass, in order

1. **Check current priorities** — what's actually in `STATE.md`'s "next," not a stale assumption from last time.
2. **For each remaining item, decide:**
   - **Handle directly** — routine, no real judgment call needed.
   - **Route now** — time-sensitive, or genuinely needs a human's judgment.
   - **Route later** — real, but not urgent; surfaces at the next natural review point.
   - **Decline or defer** — only when the right answer is already implied by stated priorities, never a guess.
3. **Log every decline or defer** — a line in `deferred.md` (with its trigger, per `AGENTS.md`), never a silent drop.
4. **State the routing plainly when reporting back** — what got handled, what's waiting on a human now, what's queued for later, what was declined and why.

## What this does not do

It doesn't re-triage what an earlier pass already resolved. It doesn't decide policy once and reapply it blindly — priorities can change, so every pass checks against what's current, not what it decided last time.
