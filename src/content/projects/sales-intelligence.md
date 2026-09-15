---
title: "B2B Sales Intelligence Platform"
description: "Solo, in development: company intelligence reports over Telegram. Spring Boot, Postgres, Redis, Quartz, Spring AI + Claude. Not a course build."
pubDate: 2026-03-01
status: in-development
featured: false
kind: saas
stack:
  - Java 17
  - Spring Boot
  - Spring AI
  - PostgreSQL
  - Redis
  - Quartz
  - Telegram
github: "https://github.com/vanshkmehta"
githubLabel: "Private / in development"
interfaceNote: "In development — not a course build"
---

## Problem

Salespeople collect company context by hand: news, hiring, filings, the last round. That work is repetitive and stale by the next morning. The product is a watchlist plus a scheduled report, delivered where the user already is (Telegram), not another dashboard login.

This is independent of the CS curriculum. It is listed here because it is the system I am building outside Jio, and because the architecture is the kind of backend the later seasons are aiming at.

## Decisions

- **Backend first.** Spring Boot, PostgreSQL for principals and watchlists, Redis for hot state, Quartz for report schedules. No public web UI in v1.
- **Ingest, then score, then write.** NewsAPI and Google RSS are sources. Deduplicate, relevance-score, filter, then ask Claude (via Spring AI) for a structured report — M&A, hiring, financial notes — not a raw dump of headlines.
- **Telegram is the application surface.** Onboarding, watchlist, delivery. If the bot is down, the product is down; treat it as a first-class API.
- **Own the architecture.** One person. Every queue, every prompt, every failure mode is a choice I can defend.

## Status

In development. Not a Season 1 build. Source is not a public curriculum folder.

> **TODO:** Add a public repo link if/when a sanitized snapshot exists. Until then GitHub points at the profile.
