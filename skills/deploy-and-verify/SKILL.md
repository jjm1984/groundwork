---
name: deploy-and-verify
description: Push a locally-verified change, confirm the deploy actually picked it up, and verify the live result over a real request (and visually, where possible) before calling the work shipped. Use whenever asked to "push it," "deploy," or to check the live/production site — never on your own initiative.
grounded-in: [ability-release-readiness]
---

# Push, Deploy, and Verify Remote

Adapted from a companion project's own proven skill. The second half of the loop `skills/feedback-to-fix` starts — this is what runs once someone actually says to ship it, not before.

**Do not start this skill on your own initiative** — pushing, and especially force-pushing or deploying, needs explicit go-ahead each time (see `AGENTS.md` § "Asking vs. proceeding"). `feedback-to-fix` ends with a report and stops; this is what runs after the go-ahead.

## 1. Confirm local verification actually happened

Don't push on the strength of "I wrote the code." Be able to point to what actually ran (tests, a build, a real local check of the changed behavior) — see `skills/verify-locally-and-remotely`. If it wasn't run first, run it now.

## 2. Rebuild whatever needs rebuilding, before staging anything

If this project has a build step and the change touched anything the build step reads, run it and let it finish clean before staging a single file. Re-run even if it ran earlier in the session — the very last edit is the easiest one to forget to rebuild for.

## 3. Review the diff before committing

Check specifically for: anything that looks like a secret, line-ending-only noise from a different OS's checkout, and that a rebuild's output actually got staged alongside the source change that required it.

## 4. Commit and push

New commit, not amend. No skipped hooks. Push only when asked. Review `git status` after a broad add for anything that could carry a secret.

## 5. Confirm the deploy actually landed

Deploys are usually not instant — give it real time before concluding something's wrong. Use whatever this project's real "what's currently live" signal is — and confirm that signal itself is actually reachable (a status page can sit behind auth that a plain request can't get past) before trusting its silence as a pass.

## 6. Verify over a real request — don't stop at "the page loads"

Test the actual behavior directly: a specific status/response, not just reachability. Test edge-case paths specifically (special characters, a brand-new never-cached URL/state) — these are exactly where an encoding or caching bug hides.

## 7. Visual check, where possible

Open the deployed result and actually look. If the tool you're using to check genuinely can't render it (confirmed by reproducing the same failure on something trivial with no real app code involved), say so plainly and lean on step 6's evidence instead of guessing.

## 8. Report

State clearly: what was pushed, what commit, what was verified with actual results (not "it worked"), and what still needs a human's own eyes.

## Common mistakes (found the hard way, in the source project)

- A shared cache can serve whichever request shape hit a URL *first* to everyone after, regardless of what the next request actually asked for.
- A static-asset layer can intercept a path meant for your own server-side code, before that code ever runs, with no error pointing at the cause.
- A URL path containing a space or special character can arrive still encoded — looking it up against a literal, decoded name silently fails.
- Never put a real credential/token in chat, a command's visible arguments, or tool output — read it from its own file via shell substitution, never echo it back.
