---
name: verify-locally-and-remotely
description: Launch the app and actually exercise every changed interaction locally, then — after any push — verify the same behavior on the deployed site over a real request, not just "the page loads." Use after any code change before calling it done, and again after any deploy.
grounded-in: [ability-release-readiness]
---

# Verify Locally and Remotely

Adapted from prior methodology work (itself a generalization of a companion project's own proven practice). Read `reference.md` for the incidents this came from. Does not replace `skills/review-before-shipping` — a change can be interactively verified and still be badly written underneath.

## Tiering — don't run the full pass on everything

- **Every commit:** cheap checks only — build/lint/unit tests. Gives bisectability.
- **Full pass below:** gated on whether the change touches a runtime/UI-affecting path — never on file extension. A data/content file that feeds a live render path is runtime-affecting even if it's `.md`/`.json` and "looks like docs."
- **Always, once, at the point something's about to ship:** regardless of how many commits led there.

## Local pass

0. **Confirm real test coverage exists for the pure logic being changed, before anything else.** Logic with no test path isn't actually cheap to verify next time — it just looks cheap now.
1. Launch the app. **Restart if the running process predates this change** — a long-running dev server keeps stale code in memory.
2. **Isolate the specific thing that changed** — turn off/hide everything else so overlap can't mask a problem.
3. **Exercise the actual interaction** — click every button, fill every input with valid and edge-case data, submit every form, confirm every navigation path. Not just the visual. **If automating this, use a real coordinate-based click, not a synthetic one (e.g. `element.click()`).** A synthetic click invokes the handler directly and skips hit-testing entirely — a full-page invisible overlay blocking every real click has passed this exact check before, because the handler still fired.
4. **Check more than the default view** — a different data slice, not just the happy path.
5. **Know what actually re-fetches vs. what only looks like it did** — a hash-only URL change or a visibility toggle is often not a fresh load; force a real reload when you need to confirm one.

## Remote pass (after any push)

6. **Confirm the deploy actually landed** — a build marker, a version string, whatever this project's real signal is. Give it real time before concluding failure. **Don't assume the obvious check works — test that the check itself is reachable** (a status page can sit behind auth that a plain request can't get past).
7. **Test real behavior over an actual request** — a specific status code, a specific rendered result — not "the page loads." Test edge-case paths specifically (special characters, a brand-new never-cached URL).
8. **Visual check**, where possible. If the tool you're using to check genuinely can't render (confirmed by reproducing the same failure on a trivial page with no app code involved), say so and lean on step 7's evidence instead of guessing.

## Report

State what was verified, with actual results — not "it worked." State plainly what wasn't checked this pass.
