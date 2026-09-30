# End of session

Run `skills/session-handoff/SKILL.md`. At minimum:

1. Update `STATE.md`.
2. Write this session's `HANDOFF.md` (`templates/HANDOFF.md`).
3. Log anything corrected or confirmed this session to `lessons.md` — this is a forced check, not an if-it-comes-to-mind one. Run the tripwire check (second same-category `fix` forces an edit to `AGENTS.md` or the relevant `roles/`/`abilities/`/`skills/` file, in this same turn).
4. **If this session was a real milestone** (a feature shipped, a real direction change, a decision record landed) — not every session — add one entry to `AS-BUILT.md` (`templates/as-built.md`), in plain language, pointing at the decision record for full detail rather than repeating it.
5. Run `npm run check`.
6. Say plainly whether anything's been pushed. Don't push unless asked, or unless `docs/conventions/deploy.md` says otherwise once it's filled in.
