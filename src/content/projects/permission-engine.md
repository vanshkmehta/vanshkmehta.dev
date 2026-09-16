---
title: "Permission engine (bitmask RBAC)"
description: "Roles and actions as bits. Check is AND. Grant is OR. Revoke is AND-NOT. No UI. Curl and a terminal."
pubDate: 2026-09-10
status: shipped
featured: true
kind: engine
stack:
  - Java 17
  - bitmasks
  - HTTP
  - curl
github: "https://github.com/vanshkmehta"
githubLabel: "Source not public yet"
interfaceNote: "No UI. Curl and a terminal."
---

## Problem

Access control often grows a table: users, roles, permissions, join rows, a cache, then a mismatch. For a small, closed set of actions, that is the wrong shape. The question is binary. The set is tiny. Store it as bits.

This is the Season 1 build for bitwise manipulation. Take the whiteboard algebra and put a process around it.

## Decisions

- **Bits, not rows.** Each named action is a bit position. A principal holds a `long` (or `long[]`) per resource class. The check is `(granted & required) == required`.
- **Names at the edge.** HTTP bodies speak `READ` / `WRITE` / `ADMIN`. The process maps names to bits with an explicit table. Reordering that table is a breaking change. Document it.
- **Deny by default.** Unknown principal: deny. Zero mask: deny. If ADMIN implies other bits, expand that *before* the AND so the check path stays one expression.
- **Idempotent mutations.** Grant twice is still grant. Revoke of an unset bit is still revoke. PUT-shaped, even if the verb is POST.
- **No UI.** If you cannot `curl` it, it is not done. The test suite is a shell script.

```bash
# illustrative endpoints
curl -s localhost:8080/check \
  -H 'content-type: application/json' \
  -d '{"principal":"ada","resource":"orders","need":["READ","AUDIT"]}'
```

## Status

Curriculum build. Code is not public yet.
