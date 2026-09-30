---
id: lessons
state: decided
last-updated: 2026-09-20
---

# Lessons

### 2026-09-18 — fix — assumed-fix-without-checking
**What happened:** Sale logging looked fixed after a one-line change (a rounding error on the total). Reported as done without actually logging a test sale and checking the stored total.
**Corrected/confirmed behaviour:** Dave: "did you actually run a sale through it?" — no. Ran one after being asked; the fix was actually incomplete (rounded the display, not the stored value). Full fix required checking the stored value, not just the screen.
**Tripwire fired:** no (first occurrence of this category).
