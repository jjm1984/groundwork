---
name: mirror-then-integrate
description: Before integrating anything into an existing project, build a complete, verified inventory of what's actually there first — every file, every pending item, not a sample of the convenient ones — and only then decide what to change. Use before any restructure, retrofit, or backlog-processing pass, and re-run whenever a "quick check" is tempting to substitute for the real one.
grounded-in: []
---

# Mirror, Then Integrate

Adapted from prior methodology work's own "mirror first" staging discipline (see `skills/process-a-backlog-safely`), generalized past batch-processing to any restructure or integration. **Named directly from this kit's own build history, not a hypothetical:** the extraction work that produced this kit's skills library was corrected several separate times in one session for checking only the source already open, or only the categories a request happened to name, and presenting that as the full job — see `lessons.md` for the actual record. This skill exists so the kit's own restructure/setup flow doesn't repeat that on someone's real project.

## Phase 1 — Mirror: capture everything, completely, before deciding anything

1. **Enumerate everything, not a sample.** Every file in the project being restructured, every item in a backlog, every candidate in a source being extracted from — the actual count, checked, not an impression of "the important ones."
2. **State the total found**, as a number that can be checked — "47 files across 12 folders," not "found the main files."
3. **Categorize all of it, including the boring or obviously-irrelevant parts.** A thing correctly marked "not relevant, here's why" is a completed check. A thing never looked at is an unfinished one — and the two must not read the same in the report.
4. **Say explicitly what you're unsure about**, rather than silently omitting it because it didn't fit neatly into a category.

## Phase 2 — Integrate: only after Phase 1 is actually complete

5. Only now decide what to change, build, or wire in — against the complete picture from Phase 1, never against whichever parts were easiest to reason about.
6. **If Phase 2 turns up something Phase 1 should have caught, that's a signal Phase 1 wasn't actually complete.** Go back and finish it; don't patch around the gap in Phase 2.

## The test that catches this failing

Before calling Phase 1 done, ask: would someone reviewing only "what was checked" conclude the whole thing was covered — or would they later say "you only looked at the parts that were easy to categorize"? If there's real doubt, the mirror isn't finished yet.

## What this does not do

It doesn't decide what to change — that's Phase 2, and a genuinely complete Phase 1 doesn't predetermine any particular Phase 2 decision. It also doesn't mean re-reading everything from scratch every time something merely touches the project — see `skills/check-repo-sync` for the cheaper, narrower check when the real question is just "has anything changed since last time."
