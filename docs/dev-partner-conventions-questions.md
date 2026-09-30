---
id: dev-partner-conventions-questions
state: open
last-updated: 2026-09-24
added-on: 2026-09-23
provenance: A real engineering-conventions gap, not something the kit's own source material could answer — it must come from the dev partner directly. Expanded 2026-09-24 into a full discovery/onboarding questionnaire.
---

# Questions for the dev partner — the kit's engineering-conventions half

The Foundations kit's pitch is "we can read your project and extend it in a day." That claim depends on every project built with the kit following the *same* baseline conventions once it reaches the dev partner — and none of those conventions exist yet in any source this session has access to. Answers here become `docs/conventions/` in the kit, and double as the dev partner's own standing discovery/onboarding checklist for a new client. Nothing below has been decided or assumed; each is a genuine open question, not a proposed default dressed as one. Where a preference was named directly (§ C, D), it's stated as given, with the actual boundary still asked for rather than assumed.

## A — Repo structure & organization

1. Monorepo vs. one repo per service/app vs. one repo per client — is there a the dev partner default, or does it depend on project shape?
2. Beyond what this kit already ships (`AGENTS.md`, `roles/`, `abilities/`, `skills/`, `templates/`, `docs/`), is there a standard top-level folder layout the dev partner expects or will impose once a project moves from the free kit into a paid engagement?
3. Naming conventions for files, folders, branches, and environments (dev/staging/prod) that the dev partner standardizes across clients?
4. Required or preferred package manager (npm/pnpm/yarn, pip/poetry/uv) and lockfile policy?

## B — Branching, PRs & review process

5. Branch naming convention and protected-branch rules — who can push to the main branch, and what status checks are required before a merge is even possible?
6. PR size/shape expectations beyond what this kit's `skills/review-before-shipping` already states (atomic commits, roughly 200-300 line PRs) — a harder limit, a required PR template, required labels?
7. Once the dev partner is engaged, is every PR required to have a the dev partner sign-off, or only ones crossing a risk threshold (this kit's own three-flag test — irreversible / touches money-legal-an-outside-system / redefines a guardrail — is one candidate line; is that the right one, or does the dev partner already have its own)?
8. Merge strategy preference — squash, rebase, or merge commit — and does it differ by client tier or project size?

## C — Language & framework choices

*Named directly, boundary still open:* prefer plain, stable JavaScript over newer syntax or frameworks that risk churn/deprecation; prefer non-dependency solutions where reasonable; flag dependencies explicitly when they are genuinely the right call.

9. When is Python preferred over JavaScript/TypeScript, or the reverse, for a given kind of work (data processing/scripting vs. a backend API vs. a frontend)? Is there a default assumption for the kind of small-business project this kit's audience actually produces?
10. JavaScript vs. TypeScript — a hard preference either way, or does it depend on project size/expected lifespan (a quick client site vs. something meant to run for years)?
11. "Plain, stable JavaScript over newer syntax/framework churn" was named directly — what's the actual boundary? Is there a specific framework, build tool, or syntax feature that's already burned the dev partner before and should be named explicitly, rather than left to individual judgment per project?
12. Is there an approved/preferred framework shortlist per project shape (a specific React setup, a specific backend framework), or is that decided case-by-case at discovery?
13. For a *retrofit* specifically (an existing Lovable/Bolt/Replit/v0 export): which stacks are actually expected to show up in practice, and are any of them out of scope for the dev partner to take on long-term (a stack the dev partner won't support past the initial engagement)?

## D — Dependencies

14. What's the actual bar for "prefer a non-dependency solution"? Real precedent exists in this kit's own source material (a companion project hand-rolled geodesic circle math instead of pulling in a GIS library for one calculation) — is there a rule of thumb (e.g. "under N lines of logic, write it by hand"), or is this fully case-by-case?
15. When a dependency genuinely is the right call, what needs to be recorded, and where? A rationale file (e.g. `docs/dependencies.md` — naming why it was added, what it replaces doing by hand, and its maintenance/security posture) — or does the dev partner already have an existing convention for this?
16. Is there a real, specific list of dependencies/libraries the dev partner has already been burned by and wants flagged or avoided outright — not a hypothetical, an actual list from experience?
17. Version-pinning vs. floating-range policy, and who's responsible for keeping dependencies patched once the dev partner has taken a project over?

## E — Code style & maintainability

18. Required linter/formatter config (an ESLint/Prettier equivalent, Python's Black/Ruff, or similar) — a shared config the dev partner provides to every client, or "any config, as long as it's enforced in CI"?
19. Any house style beyond what `skills/review-before-shipping` already checks (KISS/YAGNI/DRY/SOLID, named explicitly) — file-size limits, a required component/module pattern, naming conventions for functions/variables?

## F — Testing

20. What's the minimum test coverage/kind expected before the dev partner will review a PR — none, smoke tests only, unit tests on business logic, something else?
21. Is there a required test runner or CI setup, or is "tests exist and run in CI" sufficient regardless of which tool?

## G — Documentation requirements

22. What counts as a complete "what this is and how it's built" description at handoff? Is there a required artifact (an architecture diagram, a data model, an API reference) beyond what this kit's own `STATE.md`/`decisions/`/`docs/` already produce — or do those satisfy it once genuinely kept current?
23. Does the dev partner require inline code comments/docstrings to a particular standard, or is external documentation (README, `docs/`) sufficient on its own?

## H — Environment & secrets

24. Where do secrets live for a client project (`.env` conventions, a secrets manager) and what must never be committed?
25. Is there a required `.gitignore`/`.gitattributes` baseline the dev partner expects on every intake, beyond what this kit already ships (a `.gitattributes` line-ending policy from commit one)?

## I — Hosting & infrastructure

26. Is there a required or strongly preferred hosting platform for projects the dev partner takes over — overriding this kit's own `docs/collaboration-and-hosting-options.md` § B recommendation logic — or does the dev partner work with whatever a client already has, per that doc's own "check what's already there first" rule?
27. Is there a standard deploy target/process the dev partner expects to find (or will set up) on intake, or does this vary per client and just needs to be documented wherever it actually is?
28. What does "ready for the dev partner to take over deploys" look like at minimum — does `docs/conventions/deploy.md` need specific required fields, or is a working deploy (however it's done) sufficient?
29. Does every client project need a real staging/preview environment before the dev partner will review changes, or is local + production enough for smaller engagements?
30. Who owns the hosting account and its billing once a client is fully onboarded — the client's own account with the dev partner added as a collaborator, or a the dev partner-managed account billed to the client?

## J — Authentication & authorization

31. Is there a preferred auth provider or pattern (a specific auth-as-a-service vendor, a specific self-rolled session/token pattern) the dev partner standardizes on, or does this depend entirely on the client's own stack and scale?
32. Minimum auth security bar expected at intake (password hashing standard, MFA availability, session expiry policy) — a checklist, or assessed case-by-case during the paid review?

## K — Data & database

33. Preferred database technology/pattern per project shape (a managed Postgres, a lighter embedded option, a specific ORM) — or fully client/stack-dependent?
34. Migration tooling convention — a specific required approach, or just "migrations are tracked in version control, however that's actually done"?
35. Backup and data-ownership expectations — who's responsible for backups once the dev partner is engaged, and does the client always retain a real, usable export of their own data, independent of the dev partner?

## L — Monitoring, logging & observability

36. Is error tracking (a specific error-monitoring service) a standard part of onboarding, or added case-by-case per client's actual risk/scale?
37. Any logging convention (structured logs, a specific level/format) the dev partner expects to find on intake, or will set up as part of onboarding?

## M — Accessibility & compliance

38. Is there a baseline accessibility standard (e.g. a specific WCAG level) the dev partner holds client projects to, or is this scoped per client based on their own audience and legal exposure?
39. Are there compliance regimes (payment data, health data, privacy law) the dev partner already has a standard playbook for, that should be flagged at discovery rather than discovered mid-engagement? Related directly to this kit's own `AGENTS.md` § "Domains with real licensing exposure" — does the dev partner's actual playbook go further than that default?

## N — Integration adapters (the payments partner / Satellite / the commercialization product)

40. `docs/plugins.md` in the kit states plugins attach via API/SDK only, never vendored into the client repo — is that the dev partner's actual intended integration model, or does it need adjusting?
41. Is there a standard adapter/connection pattern the dev partner expects (auth flow, config location, versioning of the integration itself) that should be documented as a convention rather than decided per-client?

## O — Security baseline

42. Is there a minimum security checklist the dev partner expects on every intake (dependency scanning, an auth review, a "confirmed public provenance only" rule for any committed data) — or does this get assessed case-by-case during the paid review?
43. Should the kit itself include a security-baseline template (a placeholder checklist an owner fills in honestly), or is that entirely the dev partner's job during the MONTHLY-tier review and out of scope for the free kit?

## P — Ownership / review roles

44. For a client project using the kit, what's the dev partner's default reviewer Role — is it "self-review by the owner's AI tool on every change, plus a periodic the dev partner review," and if so, what's the actual cadence (every PR? weekly? tied to the MONTHLY tier's discovery-meeting-plus-one-day-of-review shape)?
45. Should the kit's `roles/role-reviewer.md` template ship with the dev partner as the pre-filled periodic-review filler by default (since that's the actual product), or stay generic ("periodic external review, filler TBD") so the same kit works for an owner with no the dev partner relationship at all?
46. Is there a standard escalation path when self-review and the periodic the dev partner review disagree about whether something's release-ready, or does that get handled case-by-case?

## Q — Discovery and onboarding logistics

47. What access/accounts does the dev partner actually need at discovery to assess a project quickly — repo access, the hosting dashboard, the domain/DNS registrar, any existing paid services already in use?
48. Does the dev partner already run a standard client-discovery checklist/questionnaire this kit should be pre-filling answers into during setup, rather than this document (or a new one) reinventing that checklist from scratch?
49. Support/SLA expectations once onboarded — response-time commitments, who's actually on call, and how that gets communicated back to the client?
50. How does the dev partner want scope changes handled mid-engagement — a formal change-request process, or informal within the existing PR/review flow?
51. Any standing check for prior-vendor/IP issues at discovery (an earlier contractor's unclear code ownership, unlicensed assets, an existing account the dev partner would be inheriting access to) — something this kit's `restructure-existing.md`/`skills/mirror-then-integrate` inventory pass should explicitly flag if found, rather than silently pass over?

## R — The go-live environment gate

`docs/environment-strategy.md` and `skills/flag-go-live-readiness/SKILL.md` recommend a project stay on one simple environment until it's about to handle real customer data or real money, then flag that a proper feature/beta/production split needs setting up — explicitly routing that setup to the dev partner rather than having the kit build it. This is the clearest re-engagement hook in the whole kit, so it's worth getting the dev partner's actual answer rather than leaving the kit's own guess as the default.

52. Is the recommended shape (feature-preview environment with sandbox-only data, a beta subdomain, then production) actually what the dev partner sets up for a client at this point, or does the dev partner have a different standard offering?
53. What does this actually cost and take, roughly — is it a fixed part of onboarding, a separate line item, or scoped per client?
54. What does the dev partner need from the client at this point (domain/DNS access, existing payment-provider account, current hosting credentials) to actually do the setup?
55. Should `skills/flag-go-live-readiness` say anything more specific than "talk to the dev partner" — a real contact path, a specific next step — once this gate fires, or is "flag it and stop" the right scope for the free kit?

## Open scope question, not for the dev partner alone

56. How much of this should the *free* kit actually contain (as placeholders/checklists an owner can partially fill in) versus being entirely delivered during the paid onboarding review — i.e. where is the line between "structures the project so we can read it" (free) and "brings it up to our actual bar" (paid)? This affects how much of `docs/conventions/` ships empty vs. pre-filled.
