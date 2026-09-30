---
name: session-handoff
description: Close out a working session so the next one (any tool, any person) can pick up without re-deriving what just happened. Use at the end of any session that changed something — code, a decision, or a plan — not just when explicitly asked to wrap up.
grounded-in: []
---

# Session Handoff

## When this runs

At the end of any session that changed something, whether or not anyone asked for a wrap-up. This is the fix for a specific, common failure: a real working session happens, real decisions get made, and nothing gets written down because nobody explicitly said "now write the handoff."

## Steps

1. Update `STATE.md` — move finished items to Done, add anything new to Next or Blocked.
2. Write `HANDOFF.md` for this session (see `templates/HANDOFF.md`): what happened, what's unfinished, what the next session should double-check before trusting it.
3. Check `lessons.md` — did anything get corrected this session, or confirmed as working? Log it now; see `AGENTS.md` § "The learning loop" for the forced-tripwire rule this feeds.
4. If this session was a real milestone (not every session), add one plain-language entry to `AS-BUILT.md` (`templates/as-built.md`) — the story a non-developer owner can actually read later, pointing at the full decision record rather than repeating it.
5. Say plainly whether anything's been pushed. Don't push unless asked, or unless the project's own conventions (once `docs/conventions/deploy.md` is filled in) say otherwise.

## The check that actually catches staleness

Does `STATE.md`/`HANDOFF.md` say anything different from what it said last time, or has real work happened that never made it in? If a substantial session ends and nothing here changed, that's the signal this step got skipped, not evidence nothing happened.
