---
id: plugins
state: decided
last-updated: 2026-09-23
---

# How plugins attach

A plugin (the commercialization product, the payments partner, Satellite, or anything else built to attach to a client's project) connects through its own **API or SDK only.** It is never vendored — copied source, forked, or otherwise pasted — into the client's own repository.

Why: a vendored copy drifts from the plugin's real source the first time either side changes, silently, and nobody notices until something breaks in a way that's hard to trace back to "which copy is this." An API/SDK boundary means the plugin can be updated, reviewed, and supported independently of any one client project.

If a specific integration needs something beyond a clean API call (a webhook, a scheduled sync, a shared auth flow), that's a real engineering-conventions question for the dev partner, not something to improvise per client — see `docs/dev-partner-conventions-questions.md` §"Integration adapters."
