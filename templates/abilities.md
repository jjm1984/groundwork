---
id: ability-short-slug
state: decided
last-updated: YYYY-MM-DD
---

# Ability: <name, e.g. "Release readiness">

*A capability, decoupled from who executes it — the goal one or more Skills exist to serve. An Ability can serve more than one Role, and a Role can call on more than one Ability; this is many-to-many, not a strict hierarchy. See `docs/SCHEMA.md` for the field list.*

## Goal

One sentence: what this Ability is actually for. Concrete enough that someone could say whether a given change met it.

## Serves

Which `roles/*.md` this Ability's goal belongs to.

## Uses

Which `skills/*.md` this Ability calls on to actually get done. An Ability with no Skills yet is a named gap, not an error — say so rather than inventing a Skill just to fill the field.
