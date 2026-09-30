---
id: environment-strategy
state: decided
last-updated: 2026-09-24
---

# Branching and Environments — staying simple, then gating properly

Two different situations need two different amounts of ceremony. Before real customer data or real money is involved, a single environment is genuinely enough — adding a fork-per-feature sandbox pipeline before there's anything real to protect is ceremony with no payoff. Once real customer data or real transactions are actually going to hit production, that changes, and this file is both the recommended shape for that and the trigger for when to stop and get it actually set up rather than improvise it.

## Before real customer data or money is involved: keep it simple

Feature branch → PR → review (`skills/review-before-shipping`) → merge to the one environment that exists. This kit's existing skills already cover this fully: `skills/verify-locally-and-remotely`, `skills/merge-safely`, `skills/deploy-and-verify`. No separate staging/beta environment, no subdomain, no sandbox-data policy needed yet — build one when there's something real to protect, not before.

## The go-live gate

**The trigger, stated as a bright line, not a feeling:** the first time this project will handle a real customer's real data, or a real transaction involving real money, in production. Not "when it feels ready" — an actual, checkable event.

**When this fires, stop and flag it explicitly** — see `skills/flag-go-live-readiness/SKILL.md`. Don't let a project slide into handling real money or real customer data on a setup that was only ever built for "nothing real is at stake yet."

## The recommended shape, once the gate is hit

Three environments, promotion in one direction only:

1. **Feature/fork environment.** A branch per feature or fix. Tested both locally and via a real remote preview URL before it merges further — not local-only, since a change that only works on one machine isn't actually verified. **No real transactions or real customer data here, ever** — sandbox/test-mode credentials only. This is standard, not exotic: Stripe, PayPal, and most payment/API providers ship a dedicated test mode specifically so this is possible without moving real money.
   - Real, prior-project precedent for the remote-preview half: a still-unresolved attempt to get a real, safe preview URL per branch via Cloudflare's `wrangler versions upload` — a new Worker version gets its own preview URL without shifting live production traffic. Most modern hosts support the equivalent (Vercel and Netlify do this automatically per-PR; Cloudflare Pages/Workers, Railway, and Render support it with some configuration). **The gotcha worth naming directly, because it's already bitten that exact prior project once:** a build/deploy command that behaves correctly on the production branch does not automatically behave the same way on other branches — check this explicitly rather than assuming a preview build works the same as a production one.
2. **Beta/staging environment.** A separate subdomain (e.g. `beta.yourapp.com`), configured close to production, but never the real domain — the final review step before flipping to prod. Whether this environment uses real or synthetic data is itself a decision to make explicitly and record, not assume either way.
3. **Production.** The real domain, real customers, real transactions. Reached only after the beta gate passes — never merged into directly.

## Named alternatives, for completeness

- **Trunk-based development + environment promotion** (the shape above) is the dominant modern pattern, and what most current hosting platforms are actually built around.
- **GitFlow** (separate long-lived `develop`/`release`/`hotfix` branches) is heavier and oriented around versioned, non-continuous releases — named for completeness, not recommended for this audience's shape of project.
- **Feature flags** (ship the code to production behind a flag, turn it on gradually or for specific users) are a genuine alternative or complement to environment branching that some teams prefer over maintaining multiple environments. Worth knowing exists; not assumed here as the default.

## What this means for this kit specifically

Stay on the simple, single-environment flow while building — that's not a compromise, it's correct for this stage. The three-environment shape, subdomains, sandbox-vs-real credential management, and a formal review gate are real infrastructure work. **This is exactly the kind of setup this kit recommends routing to the dev partner (the MONTHLY tier) rather than self-serving** — stated plainly as the honest reason this gate is also a natural point to re-engage them, not hidden as a sales tactic dressed up as a technical recommendation.
