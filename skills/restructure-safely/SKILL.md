---
name: restructure-safely
description: Reorganize an existing project's files/folders without losing history or breaking anything — map first, propose the plan, move nothing without approval, never delete. Use whenever a restructure, cleanup, or "make this legible" pass touches more than a couple of files, whether run standalone or as part of prompts/restructure-existing.md.
grounded-in: []
---

# Restructure Safely

## The rule

**Map first. Propose. Wait for approval. Then move — never delete.**

A restructure pass that starts moving files before the owner has seen a plan is the single easiest way to lose trust in an AI tool, even when every individual move was reasonable. The plan is cheap to produce and cheap to review; a botched move on a messy real project is not always cheap to undo.

This is `skills/mirror-then-integrate`'s Phase 1/Phase 2 split, applied specifically to file/folder reorganization — step 1 below is Phase 1 (mirror), steps 2-6 are Phase 2 (integrate). Read that skill first if step 1's "list what's there" is being tempted into a sample rather than a complete inventory.

## Steps

1. **Map the current state as it actually is, completely — not as it should be, and not a sample.** Every file, not just the obviously relevant ones (see `skills/mirror-then-integrate` for what "complete" actually requires — state the total count found). Note what's obviously misplaced/duplicated/dead, and say plainly what you're *not* sure about rather than guessing.
2. **Propose a before/after map** — a table or list: current path → proposed path → why. Flag anything genuinely ambiguous rather than picking silently.
3. **Wait for explicit approval** before moving anything. Not "seems fine, proceeding" — an actual yes.
4. **Move with history preserved** (`git mv`, not delete-and-recreate) so the file's prior commits stay attached to it.
5. **Never delete.** If something looks genuinely obsolete, propose moving it to an `archive/` area rather than removing it — see `AGENTS.md`'s "ask before proceeding" rule; deleting is irreversible, so it's always a flag.
6. **Record what happened** as a decision record, with the before/after map as its evidence — not just a commit message.

## Common failure this Skill exists to prevent

Treating "this file's name/location is obviously wrong" as license to fix it inline, mid-conversation, without it ever appearing in a proposed plan. Small moves compound into a restructure the owner never actually reviewed.
