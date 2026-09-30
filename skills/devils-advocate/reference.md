# Devil's Advocate — reference

## Why this exists as a Skill, not just a line in AGENTS.md

A one-line caveat is cheap and easy to skip under time pressure — exactly when it matters most. Naming this as a dedicated, invocable Skill gives it a trigger condition and a stopping test, so it survives being reached for even when the quick version would have been to just agree.

## Distinguishing this from routine caution

This is not a security review, a code review, or a general "are you sure" — those are separate concerns (see `roles/role-reviewer.md` once it exists in a real project). This Skill is specifically about a *forming consensus* — a recommendation that's about to be accepted, possibly by you, possibly by whoever you're advising — before it's locked in.

## Worked shape

1. State the recommendation as it currently stands, in one sentence.
2. State the strongest reason it could be wrong — not a strawman, the real one.
3. Name what would directly confirm or refute the risk (a source document, a test, a runtime check) — cheaper than continuing to reason about it in the abstract.
4. If checking is possible now, do it. If not, say plainly that you haven't, rather than presenting the recommendation as more settled than it is.
