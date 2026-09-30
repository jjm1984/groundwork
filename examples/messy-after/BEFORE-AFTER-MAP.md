---
id: before-after-map-messy-fixture
state: decided
last-updated: 2026-09-23
---

# Before/after map — `examples/messy-before/` → `examples/messy-after/`

*Produced by `prompts/restructure-existing.md` (via `skills/restructure-safely`) against the fixture in `examples/messy-before/`. This is a worked demo, not a real client project — see this repo's own `decisions/dec-001-messy-fixture-restructure-test.md` for the outcome/report.*

| current path | proposed path | reason | confidence |
|---|---|---|---|
| `App.jsx` | `src/App.jsx` | Real entry point, actually imported by `index.html`. Moves under `src/` so app code isn't mixed with config at repo root. | certain |
| `components/Header.jsx` | `src/components/Header.jsx` | Imported by `App.jsx`. Moves alongside it under `src/`. | certain |
| `utils.js` | `src/utils.js` | Not imported by anything currently in the fixture, but plausibly a real shared helper (`formatPrice`) — kept, not archived. | probable |
| `styles.css` | `src/styles.css` | Comment in the file itself says this is the one actually linked from `index.html`, and its content (`system-ui`, `color`) reads as the more developed of the two. | probable |
| `style.css` | `archive/style.css` | Not referenced by `index.html`; `styles.css`'s own comment names this one as stale. Archived, not deleted — the comment is the only evidence, not a certainty. | guess |
| `app-OLD.jsx` | `archive/app-OLD.jsx` | File's own comment says "abandoned," and nothing imports it. | certain |
| `Untitled-2.jsx` | `archive/Untitled-2.jsx` | Placeholder name, returns `null`, nothing imports it. Genuinely unclear what it was for — archived rather than deleted specifically because of that uncertainty. | guess |
| `components/Button copy.jsx` | `archive/components/Button copy.jsx` | Editor-generated-looking duplicate name; no `Button.jsx` exists to be the "original." Nothing imports it. | probable |
| `.env` (committed, with a placeholder secret) | `.env.example` (placeholder only) + `.env` added to `.gitignore` | A real `.env` should never be committed — see `AGENTS.md`. This fixture's value is already a placeholder, but the pattern (a real export committing `.env` by mistake) is common enough to demonstrate the fix regardless. | certain |
| — | `AGENTS.md`, `STATE.md`, `decisions/`, `lessons.md`, `deferred.md`, `roles/`, `abilities/` added | The kit itself, adopted per `restructure-existing.md`. | certain |
| `index.html` | `index.html` (edited in place, not moved) | Script/stylesheet paths updated to point at the new `src/` locations. | certain |

**Not touched:** `package.json` — no reason found to move or change it for this pass.
