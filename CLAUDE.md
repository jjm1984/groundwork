# CLAUDE.md

This project's real rules live in **`AGENTS.md`**. Read that file first, in full, before doing anything else. This file only holds notes specific to Claude Code; it is not a second rulebook.

## Claude-Code-specific notes

- `skills/*/SKILL.md` files use the same `name`/`description` frontmatter fields Claude's real Agent Skills discovery reads — kept deliberately compatible so these can become auto-discovered skills later without a rewrite, even though nothing here currently relies on that.
- If you're reading this via a GitHub/repo connector rather than a local checkout, run `npm run index` locally before trusting `docs/index.json` — a connector-served view can be stale relative to the latest commit.

If this file and `AGENTS.md` ever disagree, `AGENTS.md` wins. Flag the mismatch rather than picking one silently.
