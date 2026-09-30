# Retrofit this kit onto an existing project

Read `AGENTS.md`, `skills/mirror-then-integrate/SKILL.md`, and `skills/restructure-safely/SKILL.md` in full before doing anything else. This prompt is those two skills applied specifically to adopting this kit — structured as the same two phases, in the same order, and **Phase 2 does not start until Phase 1 is verifiably complete.**

**Guardrails:** Never delete — archive if something looks obsolete. Preserve git history (`git mv`). Produce a before/after map as a real, reviewable artifact, not just a description in chat. This must work even on a messy Lovable/Bolt/Replit/v0 export with no README and no clear structure — see `skills/restructure-safely/reference.md` for what "messy" typically looks like.

## Phase 1 — Mirror: a complete inventory, not a convenient one

1. **List every file in the project — the actual total, stated as a number.** Not "the main files" or "the important-looking ones." If the project has 140 files, say 140, and account for all of them below, even the boring ones.
2. **Categorize all of it**: live and in use / obviously dead or superseded / genuinely unclear. A file marked "obviously dead, here's why" counts as checked. A file never mentioned does not — and the report must make that difference visible, not blur it.
3. **Say plainly what you're unsure about.** Don't silently drop anything that didn't fit a category cleanly.
4. **Ask the same 5 business questions as `setup-new-project.md`** — an existing project usually still hasn't had them asked. Include the ownership question (who reviews changes besides you) even if the project's been solo so far.
5. **Before moving to Phase 2, state the count from step 1 again and confirm every item was categorized in step 2.** If it wasn't, Phase 1 isn't done — go back, don't carry an incomplete inventory into planning.

## Phase 2 — Integrate: only once Phase 1 is confirmed complete

6. **Propose the before/after map** for adopting this kit's structure (`AGENTS.md`, `STATE.md`, `decisions/`, `lessons.md`, `AS-BUILT.md`, `roles/`, `abilities/`, `skills/`) alongside whatever the project already has, built from the *complete* Phase 1 inventory — not re-derived from whichever parts were easiest to reason about. Don't restructure the project's own application code as part of this pass unless the owner separately asked for that.
7. **Wait for approval.**
8. **Apply it**: `git mv` for anything that moves, create the kit files from `templates/`, record the setup itself as a decision record (the Phase 1 count, what moved, what didn't). Start `AS-BUILT.md` with this retrofit as its first entry, in plain language: what existed before, what changed, why — then, if the project has any real history worth preserving (a README, old commit messages, anyone's memory of why it's shaped the way it is), add a second entry summarizing that prior history so it isn't lost the moment this kit takes over the story. If the project already has something acting as a feedback/collaboration channel (an issues tab actually being used, an existing feedback inbox), don't propose replacing it — run `skills/set-up-collaboration-channel/SKILL.md` only if nothing's currently serving that job. Note whatever hosting is already in use rather than proposing a change unless asked.
9. **Report what broke**, if anything, and what you're not certain worked — don't round up to "done" if something's unverified.

## The check that catches a shortcut here specifically

If Phase 2 turns up a file or a decision that Phase 1's inventory should have surfaced, that's not a minor miss — it's evidence Phase 1 was a sample, not a mirror. Say so plainly rather than quietly patching it into Phase 2, and go back to finish Phase 1 properly before continuing.
