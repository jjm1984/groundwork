---
name: review-before-shipping
description: Review a PR (or a day's accumulated commits) against the real diff and produce a plain-language summary, concrete risks, and a pass/fail recommendation — never merges or pushes itself. Use per PR, or once a day where multiple commits land without individual PRs, before anything goes live.
grounded-in: [ability-release-readiness]
---

# Review Before Shipping

Adapted from prior methodology work. Read `reference.md` for the incidents this came from.

## Steps, every review

1. **Read the real diff, not the PR description or commit messages.** Note anywhere the description claims something the diff doesn't actually do.
2. **Summarise what was actually built** — plain language.
3. **Name the highs** — what's genuinely solid.
4. **Name the lows** — what's rushed, undertested, or scope-crept beyond what was asked.
5. **Check four dimensions, every time:**
   - **Maintainability** — is there unnecessary complexity, or an abstraction built for a requirement that doesn't exist yet?
   - **Security** — input validation, auth/authorization, secrets handling, error handling that doesn't leak internals.
   - **Testing** — does coverage match what the code actually does and how risky it is, not a uniform rule?
   - **Stack fit** — only if this PR adds/changes a dependency: is it justified against the alternatives, not just "it's exciting"?
6. **Name concrete risks** — specifically what could break and for whom. Weight scrutiny by risk: money, auth, external systems, and data handling get more than a copy fix.
7. **Check whether `skills/verify-locally-and-remotely` actually ran** against this change. If it hasn't, that's a named factor in the recommendation, not a silent gap.
8. **State pass/fail against these named criteria** — not a vibe.

## Commit/PR shape — check this too

Atomic commits, small PRs (quality drops hard above ~300 lines), no unrelated changes mixed together, commit messages state *why* not just *what*. Name it as a finding when a PR misses this bar.

## Hard rule

**Never merge, push, or deploy as part of this skill.** This produces a recommendation only — shipping is a separate, explicit, human-authorized step (see `skills/merge-safely` and `skills/deploy-and-verify`).

## For an AI agent running this on its own recent work

Reviewing your own work is the weakest form of independent review there is. Re-read the diff fresh — don't reason from memory of writing it — and hold it to the same bar you'd hold someone else's PR to. This is exactly why `roles/role-reviewer.md` names a periodic *outside* reviewer alongside self-review, not instead of it.
