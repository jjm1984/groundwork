---
name: feedback-to-fix
description: Pull pending feedback from wherever it lands (a feedback form, an inbox, a support channel), scope it against the real current code, propose an approach, implement it, and get it fully verified locally — before anything is pushed. Use whenever asked to "check for feedback" or "work through feedback," or when pointed at a specific item.
grounded-in: [ability-release-readiness]
---

# From Feedback to a Locally-Verified Fix

Adapted from a companion project's own proven skill of the same name. Ends with a report and stops — pushing is a separate, explicit step (see `skills/deploy-and-verify`), not an assumed next move.

## 1. Find pending feedback

Check the decision record from `skills/set-up-collaboration-channel/SKILL.md` for which channel this project actually uses — a repo inbox, GitHub Issues, a Drive folder's `ready-to-action/`, or an in-product widget's own store. If no such decision exists yet, that's the gap to close first (run that skill), not something to guess around. If the user names a specific topic, search across everything pending for it rather than assuming the most recent item is the one meant.

## 2. Read and scope the item before touching code

Go look at the actual current implementation the feedback is about before deciding an approach. What looks like a simple rename or tweak can turn out to rest on a very different structure than expected once you actually read the code — don't assume from the feedback's own wording.

## 3. Surface findings and propose an approach — before writing code

If there's a genuine technical fork (two real ways to build this, with real tradeoffs), lay out the options and ask — don't silently pick one (see `AGENTS.md` § "Asking vs. proceeding"). If the item is unambiguous, a one-or-two-sentence "here's what I'm going to do" is enough — it doesn't need a question, it just shouldn't skip straight from reading the feedback to editing files.

## 4. Implement

Follow the project's existing conventions rather than inventing new ones for this one change.

## 5. Verify

Run `skills/verify-locally-and-remotely`'s local pass. Don't stop at the first success — isolate the specific thing you changed, check more than the default view, exercise the actual interaction.

## 6. Report and stop

Summarize what changed and how it was verified, and explicitly say nothing has been pushed. Don't move on to `skills/deploy-and-verify` unless asked.

## Common mistakes (found the hard way, in the source project)

- Trusting a single successful-looking check — a feature that "looks like it works" can still be missing most of its real cases.
- Using a field that "looks unique" as a join/lookup key without actually checking it's unique across the full dataset.
- Assuming a long-running dev process sees your latest source edits — it usually doesn't, for anything already loaded into its memory. Restart it.
