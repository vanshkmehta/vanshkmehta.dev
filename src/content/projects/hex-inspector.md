---
title: "Hex inspector CLI"
description: "A small command that prints a byte as hex, binary, signed/unsigned, and flags. Built to make representation visible — not a hex editor."
pubDate: 2026-09-12
status: shipped
featured: false
kind: cli
stack:
  - Java 17
  - CLI
  - stdin
github: "https://github.com/vanshkmehta/TODO-S1-hexinspect"
githubLabel: "TODO: hex inspector folder"
interfaceNote: "No UI — curl + terminal"
---

## Problem

People say “it’s just hex” and then lose a nibble. Endianness, sign extension, and ASCII sit in the same byte and interviews expect you to see all three. A GUI hex editor hides the conversion. A CLI that prints the conversion is the lesson.

This sits next to S1 (Memory & Low-Level): bitwise masks on one side, integer representation on the other. The inspector is the instrument.

## Decisions

- **One value in, a table out.** `hexinspect 0x4B` prints offset-style hex, grouped binary, signed i8/i32, unsigned, ASCII if printable, and which bit indexes are set.
- **Endianness is a flag, not a guess.** `--le` / `--be` for multi-byte inputs. Default is explicit in `--help`, not implicit in the host CPU.
- **Stdin for dumps.** Pipe a few bytes; get rows. Not a paging viewer. If you need `xxd`, use `xxd`.
- **No color unless requested.** `--color=auto` is enough. The default output should be copy-pasteable into notes.
- **Java 17, no framework.** `main`, a parser, tests as golden files. The point is the printout.

```bash
$ hexinspect 0x4B
byte     4B
bits     0100 1011
i8       75
u8       75
ascii    K
set      0 1 3 6
```

## Status

Curriculum-adjacent CLI. Same “no UI” rule as the permission engine.

> **TODO:** Point `github` at the real folder when it exists. Placeholder: `https://github.com/vanshkmehta/TODO-S1-hexinspect`.
