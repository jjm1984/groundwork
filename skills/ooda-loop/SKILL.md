---
name: ooda-loop
description: A generic, domain-agnostic Observe-Orient-Decide-Act cycle for breaking analysis-paralysis when execution has stalled waiting for more certainty than the situation will ever provide. Use when the same ground is being re-analyzed without new information changing the picture, or a decision needs to move rather than be perfected.
grounded-in: []
---

# The OODA Loop — Breaking Stalled Execution

Adapted from prior methodology work — generic and domain-agnostic in the source material, kept that way here.

## When to use this

- Execution has stalled because a decision is being held for more certainty than the situation will provide.
- The same ground is being re-analyzed without new information actually changing the picture.
- A decision needs to move, not be perfected.

## The procedure

1. **Observe** — the current, specific state of things, not the state assumed yesterday.
2. **Orient** — the step most shortcuts skip, and the one that matters most: filter the observation through what's already known, and explicitly ask whether this observation breaks an existing assumption rather than just fitting neatly into it.
3. **Decide** — commit to the smallest reversible next action, not the largest plan that sounds correct.
4. **Act** — execute, then immediately re-enter Observe on the result. The loop's speed matters more than any single iteration being perfectly right.

## What this is not

Not a license to act without thinking — Orient carries the thinking, compressed to fit inside a fast loop, not skipped entirely. Not a replacement for `AGENTS.md`'s "ask before proceeding" rule — an irreversible or externally-exposed action still needs a human, regardless of how stalled the analysis feels.
