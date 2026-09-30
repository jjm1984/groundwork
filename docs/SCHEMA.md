---
id: schema
state: decided
last-updated: 2026-09-23
---

# Schema — frontmatter fields, kept small

Every file that matters (`STATE.md`, `HANDOFF.md`, anything in `decisions/`, `roles/`, `abilities/`, `lessons.md`, `deferred.md`) carries YAML frontmatter. Kept deliberately smaller than a full tree-node schema — this kit needs far fewer fields than a personal knowledge-management system does. **`skills/*/SKILL.md` is the one deliberate exception** — see its own section below, not the universal fields — because its `name`/`description` fields need to match Claude's real Agent Skills discovery format exactly, which has nothing to do with this kit's own `id`/`state` contract.

## Universal fields (every file except SKILL.md)

```yaml
id: kebab-case-unique-id
state: open | decided | superseded
last-updated: YYYY-MM-DD
```

- `open` — still being worked out. May contain unresolved questions.
- `decided` — thinking is closed. Never mixed with open questions in the same file (see `AGENTS.md`).
- `superseded` — replaced by a newer version; the file stays (never delete), `supersedes`/`version` on the newer one point back.

## Decision records (`decisions/*.md`)

Adds:

```yaml
supersedes: <id or null>
version: 1
```

## Role (`roles/*.md`)

No extra required frontmatter — the fields that matter (accountable-for, filled-by, escalation) are body sections, not frontmatter, because they're prose, not scalars. See `templates/roles.md`.

## Ability (`abilities/*.md`)

Same — body sections (goal, serves, uses), not frontmatter. See `templates/abilities.md`.

## Skill (`skills/*/SKILL.md`)

Deliberately matches Claude's real Agent Skills discovery fields, so a Skill written for this kit is usable as a real Claude skill without rewriting:

```yaml
name: lowercase-hyphenated, max 64 chars, no "claude"/"anthropic"
description: max 1024 chars, plain text, no markup
```

Plus, specific to this kit (not part of the real Agent Skills spec):

```yaml
grounded-in: [ability-id, ...]   # optional — which Ability/Abilities this Skill is known to serve. Empty is fine; a Skill without a resolved Ability yet is a legitimate, visible state, not an error.
```

## What's deliberately not here

No `layer`, `type`, `instrument`, `connections`, or graph-edge machinery — those are the source material's own content-ontology fields and have no work to do in a project that isn't a knowledge tree.
