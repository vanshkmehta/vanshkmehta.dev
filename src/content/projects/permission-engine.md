---
title: "Permission engine (bitmask RBAC)"
description: "Roles and actions as bits. Check is AND. Grant is OR. Revoke is AND-NOT. No UI — curl and a terminal."
pubDate: 2026-09-10
status: shipped
featured: true
kind: engine
stack:
  - Java 17
  - bitmasks
  - HTTP
  - curl
github: "https://github.com/vanshkmehta/TODO-S1-E1"
githubLabel: "TODO: S1/E1 folder"
interfaceNote: "No UI — curl + terminal"
---

## Problem

Access control grows a table: users, roles, permissions, join rows, a cache, a mismatch. For a small, closed set of actions on a resource class, that is the wrong shape. The question is binary and the set is tiny. Store it as bits.

This is the Season 1 Build for Bitwise Manipulation: take the whiteboard algebra and put a process around it.

## Decisions

- **Bits, not rows.** Each named action is a bit position. A principal holds a `long` (or `long[]`) per resource class. The check is `(granted & required) == required`.
- **Names at the edge.** HTTP bodies speak `READ` / `WRITE` / `ADMIN`. The process maps names to bits with an explicit table. Reordering that table is a breaking change; document it.
- **Deny by default.** Unknown principal → deny. Zero mask → deny. ADMIN, if it implies other bits, is expanded *before* the AND so the check path stays one expression.
- **Idempotent mutations.** Grant twice is still grant. Revoke of an unset bit is still revoke. PUT-shaped, even if the verb is POST.
- **No UI.** If you cannot `curl` it, it is not done. The test suite is a shell script.

```bash
# shape of the interface — endpoints are illustrative
curl -s localhost:8080/check \
  -H 'content-type: application/json' \
  -d '{"principal":"ada","resource":"orders","need":["READ","AUDIT"]}'
```

## Status

Curriculum build. Code folder is not public yet.

> **TODO:** Point `github` at `https://github.com/vanshkmehta/…/S1/E1/` when the repo exists. Until then the link is a placeholder.

Companion note: [Bitwise Manipulation](/notes/s1-bitwise).
