---
id: as-built
state: decided
last-updated: YYYY-MM-DD
---

# As-Built — how and why this got built this way

*A living story, not a status snapshot (`STATE.md` is that) and not a one-decision-per-file log (`decisions/` is that). This is the narrative a new owner, a new developer, or the owner themselves six months from now reads to understand **why the project looks the way it does**, without reading every commit or every decision record individually.*

**Written for the owner, in plain language — not a developer's changelog.** If a technical detail matters, explain what it means, don't just name it. Update this at real milestones (a major feature shipped, a real direction change, the go-live gate) — not every commit, and not every session. A `decisions/dec-NNN.md` covers one choice in full; an entry here is a sentence or two saying *this happened, here's why, see that record for detail.*

## What this is

One or two paragraphs, written once at the start and revised only if the project's own purpose genuinely changes: what this project does, for whom, in plain terms.

## The story so far

Newest entry at the top. Each entry: a date, what changed, why in one or two plain sentences, and a pointer to the decision record if there is one.

### YYYY-MM-DD — <what happened, in a few words>

What changed, and why — plain language. If a specific decision record covers the full reasoning, name it: "see `decisions/dec-NNN-*.md`."

## What's genuinely still open

Real, unresolved questions that shape the project's direction — not a task list (that's `STATE.md`), but the kind of open question a new reader needs to know is still undecided before assuming the current shape is final.
