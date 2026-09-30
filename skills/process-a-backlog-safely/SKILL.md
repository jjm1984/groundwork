---
name: process-a-backlog-safely
description: The standing procedure for working through any queue of pending items (feedback, tasks, staged content) without losing track of what's done — snapshot the source first, work from the snapshot, write a dated summary of where things stand, commit on a branch and open a PR, take every open PR to resolved (not just the one just opened), then close the loop with a session record. Use for any backlog-processing pass, not just once told to.
grounded-in: []
---

# Process a Backlog Safely

Adapted from prior methodology work — generalized past its original Drive-specific transport to any external queue (a feedback inbox, a task list, a support channel). Six phases, always in this order. Phase 1 here is `skills/mirror-then-integrate`'s Phase 1 applied to a queue specifically; Phases 2-6 are that skill's Phase 2, expanded into the branch/PR/close-the-loop shape a backlog pass specifically needs.

## Why snapshot first (the ordering is the point)

Whatever question the pass ends up answering downstream ("is this done?", "is this safe to clear?") should be a lookup against something already captured this session, not a judgement call made against a source that could have changed since you last looked. Snapshotting first is what turns every later question into a lookup.

## Phase 1 — snapshot the source

Capture what's currently pending, with enough detail (an id, a timestamp, a size/count) to tell later whether something changed. Verify the capture actually matches the source — don't assume a copy succeeded because the command didn't error.

## Phase 2 — execute from the snapshot, not the live source

Read the whole batch before actioning any of it — items are often not independent; a later item can supersede an earlier one in the same batch. Where an item conflicts with what's actually true in the project right now, the project's current state wins — flag the conflict, never silently pick.

## Phase 3 — write a dated summary of where things stand

What's processed, what's still pending and why, what's safe to consider closed. State plainly what was **not** checked — scope every claim to exactly what you verified.

## Phase 4 — commit on a branch, open a PR

Never commit batch work directly to the project's main branch. See `skills/deploy-and-verify` for why a direct-to-main push skips real verification.

## Phase 5 — take every open PR to resolved, not just this pass's own

See `skills/merge-safely` for the full procedure — a pass isn't done because its own PR is open; a PR from three sessions ago is exactly as much this pass's problem.

## Phase 6 — close the loop

Run `skills/session-handoff`. A pass that changed real state and didn't update `STATE.md`/`HANDOFF.md`, or log anything to `lessons.md`, is not finished — even if everything else landed cleanly.

## What NOT to do

Don't answer "is this safe to consider done" from memory of an earlier pass, or from a partial spot-check generalized to the whole batch. Don't stop at "PR opened." Don't process a batch in arrival order when one item explicitly supersedes another.
