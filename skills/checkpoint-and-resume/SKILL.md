---
name: checkpoint-and-resume
description: Persist progress incrementally during any long-running or delegated task, so a session limit, an outage, or a crash loses at most one small unit of work — and know how to resume cleanly afterward without re-deriving state from memory. Use before starting any long task, before delegating to a subagent, and at the start of any session that looks like it's picking up after an interruption.
grounded-in: []
---

# Checkpoint and Resume

Adapted from prior methodology work on subagent delegation (its incremental-write requirement) — named directly after real, repeated lost work, not a hypothetical. See `reference.md` for the incidents.

## Before starting any long task

1. **Define the checkpoint unit** — a file, a decision, a batch of N records — small enough that losing everything *since* the last checkpoint is an acceptable cost if the work is cut off mid-run.
2. **Write/commit after each unit, never accumulate for one write at the end.** "I'll write it all out once I'm done" is exactly the shape that loses everything when "done" doesn't arrive.
3. **Make the checkpoint itself legible, not just present.** Update `STATE.md` (or the task's own progress marker) with exactly what's done vs. not after each checkpoint — a commit with no record of what it completed is only half the fix; the next session (or the next resume) needs to be able to tell what happened without re-deriving it.

## Delegating to a subagent or fork

The delegation's own instructions must state the checkpoint unit and require this same incremental persistence — a subagent given "figure it out and report back at the end" will hold everything in memory for one final write, which is exactly what a quota/time/session limit can then wipe out entirely.

**An approval to delegate a task does not carry forward automatically to a fresh delegation of "the same" remaining work.** If a delegated task gets interrupted and needs re-delegating, re-confirm scope first — don't assume the original go-ahead still covers it.

## Resuming after an interruption

Don't trust a memory or summary of what happened before the cutoff — check the actual state: the last real commit, `STATE.md`, `HANDOFF.md`. If they're unclear or disagree with what you expect, say so and re-verify against the repo directly before continuing, rather than guessing and building on top of a guess.

## What this does not do

It doesn't decide whether a task should be delegated at all, or to how many subagents — that's a separate decision. It only governs how any given task (delegated or not) survives being interrupted partway through.
