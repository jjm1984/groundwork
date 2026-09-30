---
name: write-a-decision-record
description: Turn a choice that's just been made into a permanent, findable decision record instead of letting it sit only in conversation. Use immediately after any decision with real consequences is reached — before moving on to the next thing, not at session end.
grounded-in: []
---

# Write a Decision Record

## The failure this prevents

A decision reached in conversation is not real until it's written down. Left only in chat memory, it gets re-litigated later by someone (or some session) that never saw it — wasting time re-arguing something already settled, or worse, landing on a different, quietly incompatible answer the second time.

## When to run this

Right after a decision closes — not batched at the end of a session. If several decisions close in one session, that's several decision records, not one summary covering all of them.

## Steps

1. Use `templates/decision-record.md` — Context, Options considered, Decision, Why, Outcome (left blank).
2. Check `decisions/` first for a similar prior decision — extend or supersede it explicitly (`supersedes:` + new `version:`) rather than writing a second, competing record on the same question.
3. State the decision plainly, in a sentence someone could quote without reading the rest.
4. Update `STATE.md` if this decision changes what's next or unblocks something.

## What NOT to do

Don't write a decision record for something still genuinely open — that belongs in `STATE.md` or `docs/open-questions.md` (see `AGENTS.md`'s decided-vs-open rule). A decision record with unresolved questions embedded in it is a misfile, not a shortcut.
