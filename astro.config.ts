import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://vanshkmehta.dev",
  trailingSlash: "never",
  // Static HTML for Cloudflare Pages. Do not add @astrojs/cloudflare —
  // that adapter emits a Worker and makes Pages run `wrangler deploy`.
  output: "static",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.endsWith("/404"),
    }),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: "min-light",
        dark: "github-dark-dimmed",
      },
      defaultColor: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
