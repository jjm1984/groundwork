# Merge Safely — reference

## Why this exists after just one incident, not a recurring pattern

Most skills in this kit's source material were extracted after a task recurred across two or more sessions. This one is a stated exception — it was named directly after a single pass left 8 open PRs and no session record behind, because the cost of that one incident was large enough to justify writing the procedure down immediately rather than waiting to see it happen again. See `skills/promote-recurring-work-to-a-skill` for when to extract a skill from *repetition* versus from a single costly incident like this one.

## The byte-diff step, concretely

`git diff <branch-a>:<path> <branch-b>:<path>` (or your tool's equivalent) for any path both branches touched. This caught a real same-path collision where two independent processes had each written the same mirrored file — confirmed byte-identical, so the merge was genuinely safe rather than safe-by-luck. Don't skip this because the merge tool says it's fine; "no conflict marker" and "content agrees" are different claims.

## Why closing a broken PR needs a stated reason

A silently-closed PR looks identical, later, to one nobody ever looked at. Stating why (failing checks, superseded by which other PR) is what makes the close itself a decision on record rather than a disappearance.
