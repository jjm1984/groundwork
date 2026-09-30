---
id: collaboration-and-hosting-options
state: decided
last-updated: 2026-09-24
---

# Collaboration Channels and Hosting — the options, and how to choose

Two separate decisions, both made once at setup and recorded as a decision record, not re-litigated per feature: **where feedback/collaboration actually happens**, and **where the project actually runs**. `skills/set-up-collaboration-channel/SKILL.md` is the procedure for acting on the first one; this file is the menu both decisions are made from.

Neither decision has a single right answer — the right one depends on the project's shape and what the owner already uses. Presenting a menu and asking is the point; picking silently isn't.

## A — Where feedback and collaboration actually happen

Ranked roughly by setup cost, cheapest first — not by "best." The cheapest option that's genuinely enough is the right one; more moving parts is a cost, not a feature.

| Option | What it is | Good if... | Cost |
|---|---|---|---|
| **A repo `feedback/` inbox** | The owner (or anyone) drops a text file, or pastes a message, directly into a folder in the project. No external service at all. | The team is small, everyone touching feedback already has repo access, and adding an account somewhere is friction with no real payoff yet. | Zero setup |
| **GitHub Issues** | The project's own git host's built-in issue tracker. | The project's already on GitHub/GitLab (it is, per this kit) and no one minds a developer-facing tool. Pairs naturally with `skills/review-before-shipping`/`skills/merge-safely` — a fix can reference the issue it closes. | Zero setup — it's already there |
| **A Google Drive folder, two subfolders** | `raw-drop/` (anything — documents, screenshots, half-formed notes, undecided) and `ready-to-action/` (decided, ready for an AI tool with repo access to actually implement) — the same decided-vs-open split this kit already uses everywhere else, applied to an external inbox. Adapted from a prior project's own Workshop/Staging pattern, simplified from three folders to two. | The owner (or a non-technical collaborator) thinks in documents, not GitHub — and especially if feedback needs to reach an AI tool that can chat and reason (Claude.ai, ChatGPT) but has no direct repo access, with a *separate* tool (Claude Code, Cursor) that does. The Drive folder is the handoff point between them — see "Why Drive specifically" below. | A few minutes to create; needs a Drive account |
| **A single shared document (Google Doc / Notion page)** | One running list, not a folder of files. | Feedback volume is genuinely low — a handful of items a week — and a whole folder structure is more ceremony than the volume justifies. | A few minutes |
| **An in-product feedback widget** | A "?" button or feedback form built into the product itself, feeding `skills/feedback-to-fix` directly. Real precedent exists for a three-tab "?" popup: what this is / what's actually on screen / how access is controlled. | The product has real end users (not just the owner), and their feedback should be captured in the moment, in context, without them having to leave the product or know what GitHub is. | Real build work — this is a feature, not a setup step |
| **Email-to-inbox via an automation connector** | Feedback sent to a dedicated address gets automatically filed into GitHub Issues or a Drive folder (a Zapier-style connector, or a native integration if the AI tool has one). | The team already lives in email/Slack and won't reliably go anywhere else to leave feedback. | Real setup — a third connector to maintain |

**Why Drive specifically, for the Claude.ai ↔ Claude Code handoff:** a chat-only AI tool (Claude.ai, ChatGPT) can reason, research, and draft with the owner in natural conversation, but often has no direct write access to the actual repo. A coding-agent tool (Claude Code, Cursor, a CI-triggered agent) has repo access but is a worse fit for open-ended back-and-forth thinking. A shared Drive folder is a neutral handoff point neither tool owns: the chat tool writes decided items into `ready-to-action/`, the coding tool reads from there (never the reverse — `raw-drop/` is not for the coding tool to interpret, that's exactly the closed-thinking test in `AGENTS.md`'s decided-vs-open rule, applied to an external folder instead of an internal one).

**Recommendation, stated plainly so it can be argued with:** start with the repo `feedback/` inbox or GitHub Issues — genuinely free, and enough for most projects at this stage. Add a Drive folder specifically once a non-technical collaborator or a chat-only AI tool needs to hand off decided items to a coding tool regularly — not before, since an unused second inbox is worse than no inbox (nothing routes anything the owner won't reliably check both). Add an in-product widget once there are real end users whose feedback matters enough to build a feature for.

## B — Where the project actually runs

**Check this first, for real:** if the project was built in Lovable, Bolt, Replit, or v0, it likely already has a one-click deploy from inside that tool. That's often the right answer by default — don't add a second hosting account on top of one that's already working, unless there's a specific reason (custom domain, a feature the built-in host doesn't support, moving off that tool entirely).

If starting fresh or moving off the built-in option:

| Option | Good if... | Notes |
|---|---|---|
| **Cloudflare Pages/Workers** | A static site or light backend (API routes, small amounts of server logic), and cost matters — generous free tier. | Real precedent in this kit's own source material: multiple companion projects run on Cloudflare Workers + Pages. If the project ever needs object storage or a small database, Cloudflare's own R2/D1/KV pair naturally with it. |
| **Vercel** | A Next.js or React-heavy frontend, and git-push-to-deploy matters most. | Extremely common default for exactly this kind of vibe-coded frontend project — if the owner's tool exported something Next.js-shaped, this is usually the path of least resistance. |
| **Netlify** | Similar shape to Vercel — a static/JAMstack site, forms and small functions. | Comparable free tier and workflow to Vercel; pick whichever the owner's already seen referenced, there's little reason to agonize between the two. |
| **Render or Railway** | The project needs a real, always-on backend server (not just edge functions) — a persistent process, a scheduled job, a traditional API. | Both are popular with exactly this audience (indie/vibe-coded projects) — simple git-based deploys, managed databases available directly. |
| **Fly.io** | The app needs specific regions, a persistent process, or a Docker-based deploy Render/Railway don't fit well. | More configuration than Render/Railway; reach for it only if one of those two genuinely doesn't fit. |
| **Firebase** | The project wants hosting + auth + a database + serverless functions from one vendor, with minimal setup. | Worth naming specifically because it's a genuinely different shape (a bundled platform, not just a host) and some vibe-coded exports are already wired to expect it. |
| **GitHub Pages** | A pure static site with no backend at all (a marketing page, docs, this kit's own future documentation site). | Free, but static-only — no serverless functions, no database. |
| **Supabase / Neon / PlanetScale** | Not hosting for the app itself — a managed database to pair with any of the above, when the app needs real persistent data and the owner doesn't want to run their own database server. | Common pairing: Vercel/Netlify/Cloudflare Pages for the app, one of these for the data. |
| **A self-hosted VPS (Hetzner, DigitalOcean, etc.)** | Named for completeness — more control, real ops overhead. | **Not recommended for this kit's audience** by default: someone has to patch, monitor, and back it up, and that's a job, not a one-time setup step. Only worth it with a specific, stated reason and someone who's actually going to own that job. |

**Recommendation, stated plainly:** if the owner's tool already deploys the project somewhere and it works, that's the answer — don't relitigate it without a reason. If starting fresh: a static/light-backend site → Cloudflare Pages or Vercel; a real backend service → Render or Railway; a bundled platform preference → Firebase. Record whichever gets chosen as a decision record, including the reason, so a later session doesn't have to re-derive why.

**This is the "where does it run" decision only — not the "how many environments" decision.** A single environment on any of the above is correct while there's nothing real at stake yet. See `docs/environment-strategy.md` for when a feature-preview/beta/production split becomes the right shape, and the gate that flags exactly when that's needed rather than left to guesswork.
