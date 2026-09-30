# Verify Locally and Remotely — reference

## Real incidents this shape came from (prior methodology work)

- A markdown data file (`ROUND_TABLE.md`) was reordered and reported done off a JSON grep and a unit-test run alone — no local pass — because it "looked like docs." It actually fed a real render pipeline (parser → JSON → DOM). The fix: "docs-only" is about whether a real render/execution path is touched, never about file extension.
- A deploy's own documented "what's live" signal (a build-info endpoint) turned out to sit behind an auth wall that a plain request couldn't get past — the check silently 302'd instead of confirming anything, and this was only caught because someone asked directly whether the remote had actually been checked. Test that your check mechanism itself works before trusting its silence as a pass.
- A URL-encoding bug in an object-storage lookup only showed up on paths with spaces or special characters — testing only the plain-ASCII path and calling the whole class of bug fixed was wrong twice.
- A shared edge cache poisoned a byte-range response because whichever request shape hit a URL *first* got cached and served to everyone after, regardless of what the next requester actually asked for.

## Why tiering matters

Running the full pass on every single commit is expensive enough that people stop doing it, which is worse than a well-reasoned tier. The point of tiering by "does this touch a runtime/UI-affecting path" is to keep the discipline cheap enough to actually survive contact with a real deadline.

## What "the full pass" does NOT replace

It's read-only verification against what's already there. It never pushes or deploys on its own (see `skills/deploy-and-verify` for that separate, explicit step), and it doesn't replace a real code review of the diff itself (see `skills/review-before-shipping`) — a feature can work correctly in front of you and still be badly architected underneath.
