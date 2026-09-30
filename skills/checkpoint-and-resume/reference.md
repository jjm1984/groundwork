# Checkpoint and Resume — reference

## The incidents this came from (generalised from prior methodology work)

- A background write job was cut off mid-run by an external quota limit. Its writes *were* already chunked incrementally — but exactly what had completed wasn't tracked clearly enough, so recovering meant re-auditing state from scratch instead of simply resuming from a known point. The lesson: chunked writes without a legible progress record are only half the fix.
- An import job in a scheduled script had a single end-of-run write — a platform execution-time limit could kill the whole run with nothing committed at all. Fixed by writing after each unit of work, with a saved resume position.
- A batch reclassification job wrote once per invocation rather than once per unit — re-running it after a timeout re-did the same work instead of continuing past it, because there was no record of what had already been processed. Fixed by flushing a real write after each unit within one run, so a limit stops it safely *between* units, never mid-unit, and nothing already written is lost.

Same underlying shape every time: the checkpoint unit was either too large, or real but illegible (nothing recorded what it actually covered), or both.

## Why this generalises past subagents specifically

The source material named this for delegated/background work specifically, because that's where it was actually caught. The same failure shape applies to any long task run directly in one session too — a context or session limit doesn't announce itself in advance any more than a quota limit does. The fix (small checkpoint unit, write after each one, make the write legible) doesn't depend on whether the work is delegated.

## Sizing the checkpoint unit

Too large: you're back to the original failure, just with a slightly bigger acceptable loss. Too small: the overhead of checkpointing swamps the actual work. There's no universal number — the test is the one stated in the SKILL.md: is losing everything since the last checkpoint an acceptable cost? If the honest answer is no, the unit's too big.
