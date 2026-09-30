---
name: promote-recurring-work-to-a-skill
description: Turn a task that keeps coming back into a real, reusable skill instead of re-doing or re-explaining it each time. Use when the same task is asked for a second time in near-identical form, when the same category of correction shows up twice in lessons.md, or immediately after finishing something reusable if told directly to build a skill from it.
grounded-in: []
---

# Promote Recurring Work to a Skill

There's no single numeric rule for this (see `reference.md` for the evidence) — but there's a real, consistent trigger, and this kit is meant to actually operate it, not just describe it.

## When to promote

Any one of these is enough:

1. **You're told to, directly** — "build a skill for what you just did." This can fire after just one run; being explicitly asked is its own sufficient trigger, no repetition required.
2. **The same task is asked for again, in near-identical form**, across two different sessions. Two is enough to act — don't wait for a third before writing it down.
3. **The same category of correction appears twice in `lessons.md`** (the tripwire in `AGENTS.md` already forces a rule edit at this point) — check whether the right fix is a new skill rather than just a longer rule in `AGENTS.md`. A rule that only makes sense as a sequence of steps belongs in a skill; a rule that's a single constraint belongs in `AGENTS.md` directly.
4. **A single incident was costly enough on its own** — not a repeated pattern, but expensive enough (a bad merge, a broken deploy, real time lost) that writing the procedure down now is worth it without waiting to see it happen twice.

## How to do it

1. Write down what was actually done, in the order it was actually done — not the idealized version, the real one, including what didn't work.
2. Pull out the parts that are genuinely reusable (would apply next time regardless of the specific task) from the parts that were specific to this one instance.
3. Create `skills/<name>/SKILL.md` — short, in-the-moment, no more preamble than someone under time pressure needs.
4. If there's real reasoning, incident history, or "why this step and not a simpler one" worth preserving, put it in a sibling `reference.md` — read in calm time, not during use.
5. Point back to it from wherever the recurring need actually shows up (an `Ability` it serves, a prompt that should invoke it) so it actually gets used next time, rather than sitting unreached-for.

## What NOT to do

Don't build a skill for something that only happened once and wasn't costly — that's premature structure for a problem that hasn't actually recurred. "Everything goes in eventually" is the wrong instinct here; a `lessons.md` entry is the right-sized artifact for a single ordinary correction.
