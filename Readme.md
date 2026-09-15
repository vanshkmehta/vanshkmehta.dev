# vanshkmehta.dev

Personal site for **Vanshit Mehta** — backend engineer at Jio Platforms, Mumbai. Home for CS-curriculum notes and builds. The class is on [YouTube](https://www.youtube.com/@vanshkmehta).

- Site: https://vanshkmehta.dev
- YouTube: https://www.youtube.com/@vanshkmehta
- LinkedIn: https://www.linkedin.com/in/vanshkmehta/
- GitHub: https://github.com/vanshkmehta
- Email: vanshitkalpeshmehta4@gmail.com

## Local

```bash
npm install
npm run dev
npm run build   # static HTML → ./dist only
```

Astro stays `output: "static"`. There is no Worker `main` script.

## Cloudflare (Workers Git integration)

This is a **Workers** project that serves static assets from `./dist`, not classic Pages. The Git CI token has Workers permissions, so `wrangler pages deploy` fails with API 10000.

In the Cloudflare dashboard, set:

| Field | Value |
| --- | --- |
| **Build command** | `npm run build` |
| **Deploy command** | `npx wrangler deploy --assets=./dist --name=vanshkmehta-dev` |
| **Version command** | *(empty)* |

`wrangler.jsonc` names the project and points assets at `./dist`. Do not restore `wrangler.toml` — that config made Wrangler look for a Worker script.
