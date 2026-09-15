# vanshkmehta.dev

Personal site for **Vanshit Mehta** — backend engineer at Jio Platforms, Mumbai. Home for CS-curriculum notes and builds. The class is on [YouTube](https://www.youtube.com/@vanshkmehta).

- Site: https://vanshkmehta.dev
- YouTube: https://www.youtube.com/@vanshkmehta
- LinkedIn: https://www.linkedin.com/in/vanshkmehta/
- GitHub: https://github.com/vanshkmehta
- Email: vanshitkalpeshmehta4@gmail.com

Stack: Astro (static HTML), TypeScript, Markdown/MDX collections, Tailwind CSS v4. Deployed as **static files on Cloudflare Pages** — not a Worker.

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

`npm run build` runs `astro build` only. It writes static files to `dist/` and does **not** call Wrangler.

## Cloudflare Pages (static)

This repo has **no `wrangler.toml`**. A Wrangler config makes Cloudflare run `wrangler deploy`, which then fails with:

> Missing entry-point to Worker script or to assets directory

Pages should upload `dist/` after the build. Wrangler is not part of deploy.

### Create a Pages project (not a Worker)

1. Cloudflare dashboard → **Workers & Pages** → **Create**.
2. Choose **Pages** → **Connect to Git** → `vanshkmehta/vanshkmehta.dev`.
3. Do **not** use **Workers** → “Start with Hello World” / a Worker git project. That path always runs `wrangler deploy` and expects a Worker `main` or `[assets]` block.

If a Worker was created by mistake, delete or ignore it and create a **Pages** project instead.

### Exact build settings

| Setting | Value |
|---|---|
| Framework preset | **None** (avoid presets that set deploy to `wrangler deploy`) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (repo root) |
| Node version | `22` — set env var `NODE_VERSION` to `22` |

Leave **Deploy command** empty. Cloudflare Pages copies `dist/` after a successful build.

`astro.config.ts` already has `output: "static"` and no Cloudflare adapter.

### Custom domain

1. Pages project → **Custom domains** → add `vanshkmehta.dev` and `www.vanshkmehta.dev`.
2. DNS: apex CNAME-flattened to the Pages `*.pages.dev` target; `www` CNAME to the same or to the apex.
3. SSL: **Full (strict)**. Redirect `www` → apex (or the reverse) so canonical URLs stay `https://vanshkmehta.dev`.
