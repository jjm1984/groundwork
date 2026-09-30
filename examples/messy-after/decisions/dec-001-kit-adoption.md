---
id: dec-001-kit-adoption
state: decided
last-updated: 2026-09-23
supersedes: null
version: 1
---

# dec-001: Adopt the Foundations kit onto this project

## Context

Ran `prompts/restructure-existing.md` against a messy, un-structured export (see `../messy-before/` and `BEFORE-AFTER-MAP.md`).

## Options considered

1. Restructure application code and adopt the kit in one pass.
2. Adopt the kit's own files only; leave application-code cleanup for a separate, explicitly-requested pass.

## Decision

Option 2, plus the specific file moves in `BEFORE-AFTER-MAP.md` that were needed to make the code itself legible (untangling what's live from what's dead) — not a general code-quality pass.

## Why

`restructure-existing.md`'s own guardrail: this prompt is about making the project legible, not a general cleanup, unless the owner separately asks for that.

## Outcome

Pending — not yet reviewed. See the top-level `decisions/dec-001-messy-fixture-restructure-test.md` in this kit repo for the honest report on what this test did and didn't verify.
