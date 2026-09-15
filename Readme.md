# vanshkmehta.dev

Personal site for **Vanshit Mehta** — backend engineer at Jio Platforms, Mumbai. Home for CS-curriculum notes and builds. The class is on [YouTube](https://www.youtube.com/@vanshkmehta).

- Site: https://vanshkmehta.dev
- YouTube: https://www.youtube.com/@vanshkmehta
- LinkedIn: https://www.linkedin.com/in/vanshkmehta/
- GitHub: https://github.com/vanshkmehta
- Email: vanshitkalpeshmehta4@gmail.com

Stack: Astro (static), TypeScript, Markdown/MDX content collections, Tailwind CSS v4. Deployed as static files on Cloudflare Pages.

## Local run

Requires Node 22+.

```bash
npm install
npm run dev
```

Open http://localhost:4321.

```bash
npm run build
npm run preview
```

`npm run build` writes static HTML to `dist/`.

## How to add a note

Notes are a content collection. One post per **topic** (not per video).

1. Copy `src/content/notes/s1-bitwise.mdx` (or start from the frontmatter below).
2. Drop a new `.md` or `.mdx` file in `src/content/notes/`.
3. The filename becomes the slug: `s1-integers.md` → `/notes/s1-integers`.

```md
---
title: "Integer Representation — Whiteboard, Interview Problems & Build"
description: "Two's complement, endianness, overflow."
pubDate: 2026-09-20
season: 1
seasonTitle: "Memory & Low-Level"
topic: "Integer Representation"
episodeIds: ["S1E2.1", "S1E2.2", "S1E2.3"]
level: beginner systems
---
```

Projects live in `src/content/projects/` with the same idea. Season copy (the 16-season index) is in `src/data/seasons.ts`.

Episode URLs and GitHub build folders are marked **TODO** in the sample content until those assets exist.

## Cloudflare Pages + custom domain

This repo is static. You do **not** need the Cloudflare SSR adapter.

1. In Cloudflare Pages, create a project from `https://github.com/vanshkmehta/vanshkmehta.dev`.
2. Build settings:
   - **Framework preset:** Astro (or None)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** `22` (set env var `NODE_VERSION=22` if the preset does not)
3. `wrangler.toml` sets `pages_build_output_dir = "./dist"` for local `wrangler pages` use. Optional.

### DNS for vanshkmehta.dev

In Cloudflare (domain on Cloudflare nameservers):

1. Pages project → **Custom domains** → add `vanshkmehta.dev` and `www.vanshkmehta.dev`.
2. Cloudflare will create the CNAME/ALIAS records. Typical shape:
   - Apex `vanshkmehta.dev` → CNAME flattened to the Pages target (`*.pages.dev`)
   - `www` → CNAME to `vanshkmehta.dev` or the same Pages target
3. SSL: **Full (strict)**. Wait for the certificate to issue.
4. Redirect `www` → apex (or the reverse) with a single 301 rule so canonical URLs stay `https://vanshkmehta.dev`.

If the domain's nameservers are not on Cloudflare, create a CNAME for `www` to `your-project.pages.dev` and follow Cloudflare's apex instructions (CNAME flattening or A/AAAA they provide). Do not point random A records at IPs you have not been given.

`site` in `astro.config.ts` is `https://vanshkmehta.dev`. Sitemap and canonical tags use that origin.

## Theme

Dark navy + cyan + white is the default. A toggle switches to a sparse light theme (off-white `#F1F3F5`, teal `#17A2B8`). Preference is stored in `localStorage`.
