---
name: merge-safely
description: Take every open PR (or branch waiting to merge) to a resolved state — list them all, separate dependency-stacked chains from independent ones, byte-verify any cross-branch overlap before trusting a green "mergeable" status, close broken/superseded ones with a stated reason, and re-verify after every merge. Use whenever a session ends with a PR still open, or when asked to clean up/merge outstanding work.
grounded-in: [ability-release-readiness]
---

# Merge Safely

Adapted from prior methodology work, extracted after a single real incident (8 open PRs left behind after a working pass). Read `reference.md` for why each step exists.

## 1. List every open PR, not just the one you just created

A PR opened three sessions ago and never merged is exactly as much this pass's problem as the one just opened.

## 2. Separate stacked chains from independent PRs

A PR based on another PR's branch (not the main branch) is stacked — it depends on that branch merging first. A PR based directly on the main branch is independent, even if it happens to touch overlapping files.

## 3. Merge stacked chains in order, retargeting as you go

Merging a PR does **not** automatically retarget PRs based on its now-merged branch. Retarget each one to the main branch after the merge it depended on, then wait for the merge tool to actually recompute mergeability before merging the next one in the chain — it's not instant.

## 4. Before merging anything that overlaps another branch's changed files, diff the actual bytes

A clean "mergeable"/no-conflict status confirms no conflict *marker* exists — it does not confirm two branches that both added something at the same path agree on its content. Where two branches touch the same path, diff both sides directly. If they're not identical, stop and resolve deliberately rather than letting the merge tool pick a strategy silently.

## 5. Close broken or clearly-superseded PRs, don't leave them

A PR with failing checks, or one whose entire content is a strict subset of another PR already being merged, gets closed with a stated reason — not left open for someone else to puzzle over, and not merged just because it exists.

## 6. Re-verify after every merge, not just at the end

Mergeability is recomputed against the *new* main branch after each merge — a PR that was clean before an earlier merge can conflict after it if they touched the same region.

## 7. Sync the local checkout

Pull the merged main branch locally once the queue is clear. Working against a stale local tree for the rest of a session is a real, avoidable failure mode.

## What this skill does not do

It doesn't decide what belongs in a PR or write the content. It doesn't replace `skills/session-handoff` — merging outstanding work and writing up what happened are two different steps; do both.
