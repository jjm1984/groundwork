# AGENTS.md — how to work on this project

This file is the canonical rulebook for any AI tool working on this repo — Claude Code, Cursor, Copilot, Lovable, Bolt, Replit, whatever's driving. `CLAUDE.md`, `.cursor/rules/`, and `.github/copilot-instructions.md` are thin pointers to this file, not separate rulebooks. **If any of them ever disagrees with this file, this file wins — say so, don't silently pick one.**

The point of everything below is one thing: **this project should get easier to work on over time, not harder.** Every rule here exists to stop a specific way that goes wrong.

## Before doing anything

1. **Read `STATE.md` first.** It says what's done, what's next, what's blocked, right now.
2. **Search before you build.** Check `decisions/` and `docs/index.json` (run `npm run index` if it looks stale) before proposing something new. If a decision already exists, use it — don't re-derive or re-argue it.
3. **Read the actual file before extending it.** Not a memory of it, not a summary from earlier in this conversation — the current file, right now.
4. **If you're about to execute a plan someone else wrote (a prompt from another session, a queued task) rather than one you just derived from the live project, verify it against current state first.** `skills/verify-plan-against-live-state/SKILL.md` — check the files/counts/claims it references actually exist and aren't already done, before a single edit.
5. **Before restructuring, retrofitting, or otherwise integrating anything into what already exists, build a complete inventory first — never a sample of the convenient parts.** `skills/mirror-then-integrate/SKILL.md`: mirror completely, state the count, categorize all of it, only then decide what to change.
6. **A real, structured field beats a text-pattern guess, every time one exists.** Before writing a heuristic to infer something (a classifier, a matching rule, a parser), check whether the data already has a structured field that answers the question directly. A text-matching guess that trusts pattern over an already-populated structured field is how a real financial classifier once miscounted ~$300k of internal transfers as income.
7. **Independent convergence is a real signal — but only if it's actually independent.** Two sources agreeing is weak evidence if one carried the conclusion into both, or both trace back to the same original source. Before treating agreement as validation, ask what would have counted as *not* converging.

## Deciding vs. still open — the one rule that matters most

A thing is either **decided** (implement it, don't re-open the reasoning) or **open** (still being worked out). Never let the two mix in one file.

- Decided → `decisions/dec-NNN-*.md`, `state: decided` in its frontmatter.
- Still open → `STATE.md`'s "next" or "blocked" sections, or a note in `deferred.md`.
- **A file carrying `state: decided` never sits in an open-questions area, and a file with real open questions never carries `state: decided`.** This is checkable on sight — if you see the mismatch, that's a misfile, fix it before doing anything else.
- Unsure which one something is? Default to open. Wrongly treating an open question as decided is expensive (you build on a guess); wrongly treating a decision as still-open is cheap (you just re-confirm it).

## The learning loop — this is the actual product

Every correction gets written down, and a second instance of the same mistake **forces** a rule change, not just another log entry.

1. When you get something wrong and are corrected, or when something you tried is explicitly confirmed as working: add an entry to `lessons.md` in the same session, not later (`skills/log-a-correction/SKILL.md` has the exact entry shape). Tag it `fix` or `reinforce`, and a short free-text category.
2. **Before finishing that log entry, check `lessons.md` for a prior `fix` entry with the same or a closely-matching category.** If this is the second occurrence, that's a tripwire: edit this file (`AGENTS.md`) or the relevant `roles/`/`abilities/`/`skills/` file in the *same turn* — not "noted for later." A correction that happens twice and produces only a third log line has not actually been fixed.
3. A `reinforce` entry needs no forced action — it's evidence something's settled, useful context for later, nothing more.
4. **An existing lesson only counts if it's actually being used.** A `lessons.md` that was filled in once and never touched again is indistinguishable, at rest, from one that's genuinely operating — but it isn't. If you're starting a session and `lessons.md` hasn't been touched in a long time relative to how much work has happened, say so; don't assume silence means nothing went wrong.
5. **A recurring task or correction is a signal to build a skill, not just log it again.** See `skills/promote-recurring-work-to-a-skill/SKILL.md` for exactly when this fires — being told to directly, the same task showing up twice, or one incident costly enough to write down immediately.
6. **Periodically, do the wider sweep, not just the live logging.** `skills/mine-corrections-periodically/SKILL.md` reads every correction-bearing source (not just `lessons.md`) and turns genuine findings into checkable rules — run it when asked to review accumulated corrections, since most sessions have nothing new that needs this level of pass.
7. **Check that the mechanism is actually operating, not just present.** `skills/check-practice-not-just-presence/SKILL.md` — a `lessons.md` seeded once and never touched again looks identical, at rest, to one genuinely running. Run this when a project looks conformant on paper but still needs frequent correction in practice.
8. **Before calling anything done, ask what's missing — including from this session's own work.** `skills/name-the-gaps/SKILL.md`. Even, symmetrical-looking coverage is a thing to suspect, not evidence of completeness.

## Handing over content

- **Give the whole file, not a diff**, whenever you're handing something to the owner to use outside this chat — unless they explicitly ask for a diff. They can't reconstruct a full file from a partial edit the way a developer could.
- **Append-only for decisions and anything staged as final.** Never silently edit or delete a decided file. To change one, write a new version with `version: N+1` and `supersedes: <old id>`.
- **Every deferred item names its own trigger.** "We'll get to it when it's ready" isn't a trigger — a trigger is a condition someone else could check. `deferred.md` entries without one aren't allowed.
- **Describe what was actually checked in the same words used to describe the result — never let a narrow check read like a broad one.** "Checked two files" and "checked the project" are not interchangeable, even when the two files checked were the right ones. If a request said "all" or "every," either do the comprehensive version or say plainly, before presenting results, that a narrower check was used and name exactly what was skipped.
- **Mark an inference as unconfirmed in the artifact itself, not just as an internal caution.** A guess presented with the same confidence as a confirmed fact reads as settled to whoever sees it next. Use a visible marker (`[ASSUMPTION]`, a "needs confirmation" flag, a highlighted note) on the actual output — a decision record, a data file, a UI label — not just a mental note to be careful. This matters most exactly where getting it wrong would reach a real customer.

## Asking vs. proceeding

- **Ask before proceeding if any one of these is true:** the action is irreversible, it touches money/legal/an outside system, or it would change a rule stated in this file. Any single flag is enough — you don't need all three.
- **When the option-space itself is undecided, ask in plain prose — don't offer a multiple-choice menu.** A forced-choice question is only fair when the choices are already a genuinely bounded set; offering a menu on an open design question quietly makes the real decision for the person answering it.
- **Argue the other side before recommending anything.** One or two lines: what's the strongest reason this could be wrong? If you can't say, say that instead of proceeding as settled. `skills/devils-advocate/SKILL.md` covers when this needs a real, dedicated pass instead of just a caveat.
- **If analysis has stalled and the same ground is being re-argued with no new information, that's a different problem than genuine uncertainty — don't keep "resolving" it the same way.** `skills/ooda-loop/SKILL.md`: commit to the smallest reversible next action and re-check after, rather than holding out for a certainty the situation won't provide. This never overrides the ask-before-proceeding flags above — moving fast doesn't mean skipping a needed approval.
- **"Stop" means stop, immediately — not "finish this unit, then pause."** Scope doesn't carry forward from one approved action to the next, especially mid-batch. A paused write job that gets quietly resumed without re-confirming scope is a real, repeated incident in this kit's own source material — one case took four separate stop requests before it actually stopped.
- **Never assume write/push/deploy access to any system — test it this session, don't infer it from a config file or a prior session's memory.** A permission that existed last time, or that a settings file implies, may not actually be there now.

## Domains with real licensing exposure

If this project gives financial, legal, health, or similarly regulated information or advice: default to information, tracking, and translation only — never a binding decision or a licensed professional's judgment call. Anything beyond that boundary refers out to the actual licensed professional rather than being attempted. State this default explicitly wherever such a feature is built, rather than each one re-deriving its own version of the same boundary.

## Who owns what

`roles/` says who's accountable for a job (a person, an outside reviewer, an AI tool) and `abilities/` says what capability that job actually requires, connecting one or more `skills/` together. Both start empty on a fresh project — `prompts/setup-new-project.md` and `prompts/restructure-existing.md` ask the owner (and, separately, anyone else with a stake — a dev partner, an agency) who owns what, rather than assuming solo ownership. See `docs/SCHEMA.md` for the exact fields.

**Don't invent someone else's conventions on their behalf.** If a question belongs to a specific outside party (a dev agency's engineering conventions, a partner's integration requirements), route it to `docs/conventions/` as an open question, don't guess an answer and write it down as settled.

## Where feedback happens, and where this actually runs

Two more setup-time decisions, each made once and recorded, not re-guessed per feature: where feedback/collaboration happens, and where the project's hosted. `docs/collaboration-and-hosting-options.md` has the real menu (a repo inbox, GitHub Issues, a Drive folder, hosting options from Cloudflare to Vercel to Render, and why each fits a given shape of project); `skills/set-up-collaboration-channel/SKILL.md` is the procedure for acting on the first choice, including connecting a real Drive folder and sending back its actual URL if that's what's picked.

## Going live with real customers — the gate

Stay on a single, simple environment while building — that's correct for this stage, not a shortcut. But the first time this project is about to handle a real customer's real data, or a real transaction involving real money, in production, **stop and run `skills/flag-go-live-readiness/SKILL.md`.** See `docs/environment-strategy.md` for the recommended shape past that point (a feature/preview environment, a beta subdomain, then production) and why setting it up is the dev partner's job, not something to improvise solo right as real money is about to be involved.

## Shipping a change

The pipeline, and the skill that covers each stage — don't skip a stage because the change feels small, decide out loud that it's not needed this time:

1. **Find and scope the work** — `skills/feedback-to-fix/SKILL.md` if it started from someone's feedback; otherwise start at step 2.
2. **Review it** — `skills/review-before-shipping/SKILL.md`. Produces a recommendation only; never merges or pushes.
3. **Verify it** — `skills/verify-locally-and-remotely/SKILL.md`. Local pass always; the remote half runs after step 5.
4. **Merge it** — `skills/merge-safely/SKILL.md` if there's more than one PR/branch outstanding.
5. **Ship it** — `skills/deploy-and-verify/SKILL.md`. Only on explicit go-ahead, never on your own initiative.

This is this kit's own concrete instance of two more general skills, useful when a task doesn't map cleanly onto the five steps above: `skills/orchestrate-and-recompose/SKILL.md` (sequencing multiple skills in real dependency order for *any* multi-step task, and forcing an approach change after repeated failure rather than repeating it) and `skills/process-a-backlog-safely/SKILL.md` (working through any queue of pending items — not just code changes — without losing track of what's done). `skills/triage-incoming-work/SKILL.md` covers what to do with items that aren't obviously routine and aren't obviously urgent, once a first pass has cleared the obvious noise.

## Surviving a limit hit, an outage, or a crash

Any session can be cut off mid-task with no warning — a context/session limit, an API outage, a crash. Nothing above (the learning loop, `HANDOFF.md`) helps if it only runs at a *graceful* end. See `skills/checkpoint-and-resume/SKILL.md` in full; the two rules that matter most:

- **On any long-running or delegated task, checkpoint incrementally — write/commit after each small unit of work, never hold everything for one write at the end.** A task that only writes once at the end can lose the entire run to a cutoff that arrives one second before it was going to finish anyway.
- **Resuming after an interruption, don't trust memory of what happened — check the actual last commit, `STATE.md`, and `HANDOFF.md` for the real stopping point before continuing.** If they're unclear or disagree with each other, say so and re-verify against the repo directly rather than guessing.
- **Before starting new work, check the repo is actually in the state you think it's in.** `skills/check-repo-sync/SKILL.md` — local vs. remote per branch, unmerged branches against open PRs, uncommitted changes, real stash contents. Cheap, and exactly what tells "I think we left off here" apart from a verified fact.

## The as-built record

`AS-BUILT.md` (`templates/as-built.md`) is the plain-language story of how and why this project got built the way it is — not `decisions/`'s one-choice-per-file detail, not `STATE.md`'s current-status snapshot. Written for the owner, not a developer. Add one entry at a real milestone (a feature shipped, a real direction change, a decision record landed) — not every session — pointing at the full decision record rather than repeating it.

## Ending a session

Run `prompts/session-end.md`. At minimum: update `STATE.md`, write/update `HANDOFF.md`, and check whether anything from this session belongs in `lessons.md` (see above — this is a forced check, not a "if it comes to mind" one). Don't push anything without being asked, unless the project's own conventions say otherwise.

## Scripts

`npm run validate` checks frontmatter shape (not content) across the repo. `npm run index` rebuilds `docs/index.json` — the thing you search before building. `npm run handoff-check` flags when `STATE.md` looks stale relative to recent commits. Run `npm run check` for all three.

**If this project's CI is ever set up to regenerate a file automatically** (an index, a build output, a compiled artifact), never also commit that file yourself once CI does. Run the regenerating command locally for verification only, then discard the diff (e.g. `git checkout -- <generated-file>`) before committing. Two writers racing to commit the same generated file produces a manufactured conflict on a file that was never meant to carry your authorship.

**Generate real code to a file, never through an inline shell string.** Constructing more than a few lines of code inline through a shell command's own quoting has silently corrupted generated content before (an escaped newline became literal, a regex lost its escape) — write it with the Edit/Write tool, or to a real file a script then runs, not through nested shell escaping.

**If a scheduled/automated job exists, check that it's actually succeeding on its own schedule — not just that it's configured.** A cross-repo sync job in this kit's own source material ran daily and failed 52 consecutive times, unnoticed, because nobody had checked its actual run history, only that it existed and was scheduled. Configured and running are different claims.
