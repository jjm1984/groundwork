# Review Before Shipping — reference

## Where this came from

Adapted from prior methodology work. Two incidents drove its shape, both worth keeping in mind:

- **A green "mergeable" status is not proof two branches' content agrees.** Diff the actual bytes before merging anything two branches both touched — see `skills/merge-safely` for the full procedure.
- **A keyword/pattern match is not verification.** When checking whether an issue exists elsewhere in a codebase, verify every hit in context — a naive regex or an unescaped alternation can produce false confidence in either direction.

## Why this never merges/pushes itself

Keeping review and shipping as two separate, explicit steps means a "pass" recommendation is never accidentally treated as permission — someone (a person, or a separate skill invocation the person triggered) still has to actually say "ship it."

## Sizing the review to what changed

A one-line copy fix doesn't need the full four-dimension pass narrated out loud — but skipping a dimension should be a stated decision ("no stack-fit concern, no dependency changed here"), not a silent omission.
