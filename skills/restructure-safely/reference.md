# Restructure Safely — reference

## Why "never delete" instead of "delete carefully"

A careful delete is still an irreversible action taken on the strength of an agent's own judgment about what's safe to remove. The kit's working rule (`AGENTS.md`) treats irreversibility itself as a reason to ask — not a reason to be extra careful and proceed anyway. An `archive/` move gets the same practical outcome (the file's out of the way) without foreclosing the option to be wrong about it.

## On a genuinely messy export (Lovable/Bolt/Replit/v0)

Expect: no README, inconsistent naming, duplicate near-identical files (`Component.jsx`, `Component-copy.jsx`, `Component-old.jsx`), secrets or API keys sometimes committed directly in source rather than an env file, and no clear separation between what's live and what's abandoned mid-experiment.

Do not assume a file is dead just because it's not imported anywhere you can see — say "not referenced from anything I found, but I didn't trace every dynamic import" rather than asserting it's unused.

## What the before/after map should actually contain

A markdown table: `current path | proposed path | reason | confidence (certain / probable / guess)`. The confidence column matters — it's what lets the owner spend their approval attention on the guesses, not re-review every certain move.
