---
name: mine-corrections-periodically
description: The periodic, comprehensive pass — read every correction-bearing source in the repo (not just lessons.md), and turn each genuine finding into a checkable rule inside the specific Skill/Ability/Role it concerns, not just another log entry. Run when asked to review accumulated corrections, or when a periodic review calls for a full accounting rather than trusting the running log alone.
grounded-in: []
---

# Mine Every Correction Source, Bake Findings Into What They Concern

Adapted from prior methodology work. Complements `skills/log-a-correction` (one correction, in the moment) rather than replacing it — this is the wider, occasional sweep.

**The rule this exists to enforce, in full:** if a correction had to be made, that's a goal not met — and a correction that's only written down in a log is *still* not met. It's met when the specific Skill, Ability, or Role it concerns can no longer make the same mistake, because the rule is now inside it as a checkable condition, not narrated as history.

## Step 1 — read every source, not just the one that's already structured

`lessons.md` is fast to read and already shaped right, which makes it tempting to treat as complete. Also check: `decisions/` (a Context section sometimes names a correction), any HANDOFF.md history, and commit messages/PR comments if the project's own conventions keep them elsewhere. **If you skip any of these, say so explicitly before presenting results** — don't let a partial read pass as the complete one.

## Step 2 — separate content corrections from process corrections

Not everything logged is about how the work was done. A revised business decision or a retracted assumption about the world isn't what this pass mines — only something about *how the work itself was carried out* that needed fixing.

## Step 3 — check whether it's already a checkable rule anywhere

Not "is it logged" — logged and *actionable* are different states. If a corrected behaviour is only narrated in `lessons.md` and never written as a rule inside the `AGENTS.md`/`roles/`/`abilities/`/`skills/` file it actually concerns, that's the gap to close.

## Step 4 — bake it in, quoting rather than inventing

Write the correction into the relevant file as a checkpoint or rule, using the words the correction was actually made in wherever possible. This isn't new authorship — it's converting something already said into a form that gets checked rather than remembered.

## Step 5 — name what you deliberately didn't use

Some material may be sensitive or explicitly marked not for reuse. Find it, recognise it, and say plainly it was excluded and why — locating something and staying silent about finding it is not the same as never having looked.

## What this does not do

It doesn't run every session — it's too expensive for that, and most sessions have nothing new worth this level of sweep. Run it when asked, or when enough time/work has passed that trusting the running log's own completeness is itself a risk.
