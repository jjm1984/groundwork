---
name: set-up-collaboration-channel
description: Help the owner choose where feedback and collaboration actually happen (a repo inbox, GitHub Issues, a Drive folder, a shared doc, an in-product widget), then act on the choice — including connecting a Drive folder and sending back its real URL if that's what's picked. Use during initial project setup, or whenever asked to set up a feedback/collaboration channel.
grounded-in: [ability-release-readiness]
---

# Set Up a Collaboration Channel

Pairs with `docs/collaboration-and-hosting-options.md` (the menu) and `docs/open-questions.md`/`decisions/` (where the choice gets recorded). Run this once at setup, not per feature — see `AGENTS.md`'s general rule against re-litigating a settled decision.

## 1. Present the recommendation and the real menu, not a guess

State plainly: a feedback loop should exist — the kit's whole learning-loop mechanism depends on corrections and requests actually reaching it. Then present the options from `docs/collaboration-and-hosting-options.md` § A, ranked cheapest-first, with the one-line "good if" for each. This is a genuinely bounded set, so a forced-choice question is the right tool here (see `AGENTS.md` § "Asking vs. proceeding") — don't turn it into an open essay question.

## 2. Act on the choice

- **Repo inbox or GitHub Issues** — nothing to connect. Record the choice as a decision record and point `skills/feedback-to-fix` at it.
- **Shared doc/Notion** — ask for the link once created, record it in the decision.
- **A Drive folder** — this is the one that needs real setup:
  1. **Ask before connecting anything** — connecting a new external account is "touches an outside system," one of `AGENTS.md`'s ask-first flags, even though creating a folder itself is easily reversible.
  2. Create two subfolders: `raw-drop/` and `ready-to-action/` (see `docs/collaboration-and-hosting-options.md` § A for what each holds — this is the kit's own decided-vs-open split, applied externally).
  3. **Send back the real, live URL** — not a description of what you did. The owner needs the actual link to bookmark and use, and anyone helping them (a chat-only AI tool with no repo access) needs it too.
  4. Record the folder URLs in a decision record (`decisions/`) — this is exactly the kind of thing that gets re-asked-for later if it's only ever mentioned in chat, per this kit's own append-only/decided rule.
  5. Note plainly in the decision which tool reads which folder — the chat-only tool writes decided items into `ready-to-action/`; the repo-access tool reads from `ready-to-action/` only, never interprets `raw-drop/` directly (that's still-open material, per the closed-thinking test).
- **In-product widget** — this is a real feature, not a setup step. Write it as a `feature-brief.md` (see `templates/feature-brief.md`) and route it through the normal shipping pipeline (`AGENTS.md` § "Shipping a change"), not built ad hoc during setup.

## 3. Record it

One decision record covering: which channel was chosen, why (which "good if" applied), and any real URLs/links involved. This is what a future session reads instead of re-asking the owner where feedback goes.

## What this does not do

It doesn't decide hosting — that's `docs/collaboration-and-hosting-options.md` § B, a separate decision, usually made once and rarely revisited. It doesn't build the in-product widget option itself — that's ordinary feature work once chosen.
