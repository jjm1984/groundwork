---
id: role-reviewer
state: decided
last-updated: 2026-09-20
---

# Role: Reviewer

*This is the concrete case the kit's Role/Ability tier was built to represent — see `decisions/dec-002-full-role-ability-skill-tier.md`.*

## Accountable for

Catching what self-review misses before a change that touches money (sale logging, stock counts) goes live.

## Filled by

- Dave (owner) — self-review, every change, automatic, no extra step.
- the dev partner — periodic review (monthly, per the kit's own MONTHLY tier), or on request if Dave is unsure about something between cycles.

## Escalation

If Dave and the dev partner disagree about whether something's release-ready: the dev partner's call on anything touching money-handling logic (that's what the monthly review is actually for); Dave's call on anything purely about how the counter screen looks or reads. Not yet tested against a real disagreement — revisit this line if one happens.
