---
name: log-a-correction
description: Write a lessons.md entry the moment a correction is received or a working pattern is confirmed — not at session end — tagged to the specific Role/Ability/Skill it concerns, then run the same-category tripwire check as a forced step in the same turn. Use whenever someone corrects the work, or confirms something worth keeping.
grounded-in: []
---

# Log a Correction So the Next Run Actually Reads It

Adapted from prior methodology work. This is `AGENTS.md`'s "learning loop" section, as an invocable procedure rather than just a paragraph — reach for this file when you want the exact entry shape, not just the rule.

## When

The moment it happens. Not at session end — a session has no reliable end signal to wait for.

## The entry

```
### YYYY-MM-DD — fix|reinforce — category — <role/ability/skill this concerns>
**What happened:** what was actually done wrong, with the correction quoted verbatim
**Corrected/confirmed behaviour:** the rule going forward, stated as a rule
**Tripwire fired:** yes/no — and if yes, what changed as a result
```

**Quote the correction verbatim.** A paraphrase drifts toward what was comfortable to hear — the exact words are the evidence.

## The tag is the whole point

An untagged entry tells you *that* something was corrected. A tagged one tells the next person or session invoking that Role/Ability/Skill what to do differently. Tag to a Role when the failure is sequencing or judgment; tag to a Skill or Ability when the failure is inside one capability's execution. If you can't tell which, that ambiguity is itself worth writing down.

## The tripwire — a forced step, not a judgment call

Immediately after writing any `fix` entry, before doing anything else: scan prior entries for the same or a closely-matching category.

- **No match** → first occurrence. Say so explicitly, so the next one has something to count against.
- **Match** → the tripwire has fired. State it, and make the resulting edit — to `AGENTS.md`, or the relevant `roles/`/`abilities/`/`skills/` file — **in the same turn**, not a later one.

Categories match by judgment, not string equality.

## `reinforce` entries

Same format, no forced action. Log them even when nothing went wrong — a log that only ever records failure teaches you what breaks and never what merely costs too much to keep doing differently.

## Never

Never edit or trim an existing entry. Append-only. A log that can be quietly revised is not evidence of anything.
