---
name: check-repo-sync
description: Check whether the repo is actually in the state you think it's in before starting new work — local vs. remote per branch, unmerged branches cross-referenced against open PRs, uncommitted changes, and real stash contents (not just a stash count). Run when asked whether a repo is up to date, before starting new work, or when resuming after any interruption.
grounded-in: []
---

# Check Repo Sync

Adapted from prior methodology work. Pairs directly with `skills/checkpoint-and-resume` — this is the concrete check that skill's "resuming after an interruption" step points at.

## What to actually check

1. **Local vs. remote, per branch** — not just the current branch. A branch someone else (or a prior session) pushed to that this checkout hasn't pulled is a real risk of working against stale state.
2. **Unmerged branches, cross-referenced against open PRs.** A branch with no open PR and no recent activity is either forgotten or deliberately parked — say which you think it is, don't just list it.
3. **Uncommitted changes** — what's actually modified right now, not just whether anything is.
4. **Real stash contents, not just a stash count.** "3 stashes" tells you nothing about whether any of them matter; look at what's actually in each one before deciding it's safe to ignore or drop.

## Why this matters specifically after an interruption

A session that resumes after a limit hit, crash, or outage is exactly the situation where "what I remember happening" and "what's actually committed" are most likely to disagree — see `skills/checkpoint-and-resume`. This check is what turns "I think we left off here" into a verified fact before building anything on top of it.

## What this does not do

It doesn't fix anything it finds — a stale branch, an uncommitted change, a stash worth keeping all get named, not silently resolved. Resolving what's found is a separate, explicit step (often `skills/merge-safely` for the branch side of it).
