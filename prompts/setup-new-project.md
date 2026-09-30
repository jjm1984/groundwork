# Set up a new project with this kit

Read `AGENTS.md` in full before doing anything else — this prompt assumes it.

**Guardrails:** Don't invent the owner's business details from a guess. Don't create a Role or Ability for anyone/anything not named in an actual answer. Don't pick MIT vs. proprietary-but-free for them (see `docs/open-questions.md`) — leave it open. Report back what you set up rather than silently committing it, until the owner's seen it.

## First, confirm it's actually a clean slate

List what's already in the project directory — even a "new" project often has *something* (a starter scaffold the owner's tool generated, a `.gitignore`, a stray file). State the count found, even if it's zero. If there's real code or structure already, this is `prompts/restructure-existing.md`'s job instead, not this one — stop and say so rather than treating a non-empty project as clean.

## Ask at most 5 questions, in plain language, about the business — not the tech

One at a time, short. Pick a reasonable interpretation and state your assumption rather than stacking clarifying questions.

1. In one or two sentences, what does this project actually do, for someone who's never seen it?
2. Who's it for — who actually uses it?
3. What would be worst to get wrong here (money, a promise to a customer, something legal or embarrassing) — versus what's fine to get wrong and just fix later?
4. Besides you, does anyone else review or approve changes before they go live — a co-founder, a dev agency, nobody yet?
5. Is there anything already in this project that's known-temporary or known-wrong that you don't want "fixed" as part of this setup?

## Then, without being asked again

1. Record each answer as its own decision record in `decisions/` (`templates/decision-record.md`) — one per question, not one combined summary.
2. Create `STATE.md`, `lessons.md`, and `AS-BUILT.md` from `templates/`. `AS-BUILT.md`'s first entry: this setup itself — what the project is (from Q1/Q2, in the owner's own words where possible), in plain language.
3. Create `roles/role-owner.md` (filled by the person you just asked). If Q4 named another reviewer, create `roles/role-reviewer.md` too, with both fillers and their cadence (e.g. "self-review, every change" + "<name>, periodic"). If nobody else reviews yet, say so in that Role file rather than skipping it — an honest "nobody yet" is a real, visible state.
4. If you created `roles/role-reviewer.md`, also create `abilities/ability-release-readiness.md` (`templates/abilities.md`) — several shipped `skills/*` already point at this Ability by name (see `abilities/README.md`), so this closes the pointer rather than leaving it orphaned from day one. Otherwise, don't create an `abilities/` file yet — it emerges once a real Skill needs one to point at.
5. **Recommend a collaboration channel and a hosting choice — run `skills/set-up-collaboration-channel/SKILL.md`.** State plainly that a feedback loop should exist, then ask which channel fits (the menu in `docs/collaboration-and-hosting-options.md` § A is a genuinely bounded set, so a forced-choice question is right here — this isn't a violation of the open-prose rule). Do the same for hosting (§ B) if it's not already obvious the owner's tool has this covered. Record both as decision records.
6. **If Q1/Q3's answers mean this project will eventually handle real customer transactions or real customer data, say so now — but don't build anything for it yet.** Note it in `deferred.md` with the trigger "before going live with real customers/money, run `skills/flag-go-live-readiness/SKILL.md`" (see `docs/environment-strategy.md`). A single environment is correct for now; this is just making sure the later gate isn't forgotten.
7. Report what you created and ask the owner to confirm before your first real commit.
