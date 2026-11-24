import type { APIRoute } from "astro";
import { SITE } from "../data/site";

// AI and search crawlers are welcome: the goal is to be cited accurately.
const BOTS = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Google-Extended", "Applebot-Extended", "CCBot"];

export const GET: APIRoute = () => {
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    ...BOTS.flatMap((b) => [`User-agent: ${b}`, "Allow: /", ""]),
    `Sitemap: ${new URL("sitemap-index.xml", SITE.url).href}`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
