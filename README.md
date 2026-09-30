# Foundations Kit

A project-setup kit for a vibe-coded project (built in Lovable, Bolt, Cursor, Replit, Claude Code, or a mix) — so it stays legible to *you* and to anyone else who has to work on it later, without a rebuild.

**This repo is the spec/template itself** — copy or fork it into your own project; it isn't a live, working project on its own, and doesn't expect changes pushed back here.

## Why this saves you a rebuild

The usual failure isn't bad code — it's that nothing about the project remembers why anything was decided, so every new session (yours or an AI tool's) re-guesses instead of re-reading. Six months in, nobody — including the AI that built it — can say confidently what's actually decided, what's still open, or why a given choice was made. That's what forces a rebuild: not that the code is wrong, but that it's become unreadable to everyone, including its own author.

This kit fixes that with one core mechanism: **every correction gets written down, and the same mistake happening twice forces an actual rule change, not just another note.** That's `lessons.md` plus the tripwire rule in `AGENTS.md` — the project genuinely gets easier to work on over time, instead of accumulating undocumented tribal knowledge that lives only in one person's head or one chat's memory.

Two things this kit **cannot** do by itself, stated plainly rather than oversold: it can't give you an independent review of your own work (the AI that built something is the weakest possible judge of its own mistakes), and it can't invent engineering conventions — stack, tests, deploy, security — that have to come from whoever actually maintains the project long-term. Both are real, structural gaps, not modesty.

## What's inside

- **`AGENTS.md`** — the actual rulebook, read by any AI tool at the start of every session. `CLAUDE.md`, `.cursor/rules/`, `.github/copilot-instructions.md` are thin pointers to it, not copies.
- **`STATE.md` / `HANDOFF.md`** — what's done, next, blocked; a note at the end of every session. Created by `prompts/setup-new-project.md` from `templates/`, not shipped pre-filled — this repo is the template, not an instance.
- **`decisions/`** — permanent record of choices already made, written for the owner in plain language (a "why," not just a technical note). **`docs/open-questions.md`** — the ones that aren't, kept visibly separate.
- **`lessons.md`** — the learning loop described above. **`AS-BUILT.md`** — the plain-language story of how and why the project got built this way, for whoever reads it later without wanting to read every decision record individually. Both start empty too, filled in as the actual project they belong to grows.
- **`roles/` / `abilities/` / `skills/`** — who owns what, what capability that requires, and the specific reusable playbooks (`skills/`) that get the job done. Roles and Abilities start empty; the setup prompt asks who owns what rather than assuming.
- **`prompts/`** — `setup-new-project.md` (new project) and `restructure-existing.md` (retrofit an existing one) are the two you'll actually run. `session-start.md`/`session-end.md` run every session after that.
- **`docs/collaboration-and-hosting-options.md`** — a real menu (a repo inbox, GitHub Issues, a Drive folder, Cloudflare/Vercel/Render/etc.) for two setup-time decisions: where feedback lands, and where the project runs. The setup prompt asks; it doesn't guess.
- **`docs/environment-strategy.md`** — stay on one simple environment while building; the first time real customer data or real money is about to go live, `skills/flag-go-live-readiness` stops and flags it rather than letting that slide in unnoticed.

## Getting started

Run `prompts/start-here.md` first — it's one question (new, clean project or an existing one?) that routes to the right prompt. The existing-project path (`prompts/restructure-existing.md`) requires a complete inventory of what's already there before proposing anything — never a sample of the convenient parts.

## Open question

License (MIT vs. proprietary-but-free) is genuinely undecided — see `docs/open-questions.md`. Not resolved by this kit.
