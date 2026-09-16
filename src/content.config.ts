import { defineCollection, z } from "astro:content";
import { glob, type Loader } from "astro/loaders";

/**
 * glob() warns and returns when a folder has zero matches, so it never
 * deletes cached entries. Cloudflare restores `node_modules/.astro` (the
 * production data store) between builds, which left a stale
 * `s1-bitwise.mdx` import in `.astro/content-modules.mjs`.
 */
function globAllowEmpty(options: Parameters<typeof glob>[0]): Loader {
  const inner = glob(options);
  return {
    name: inner.name,
    load: async (context) => {
      context.store.clear();
      await inner.load(context);
    },
  };
}

const notes = defineCollection({
  loader: globAllowEmpty({ pattern: "**/*.{md,mdx}", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    season: z.number(),
    seasonTitle: z.string(),
    topic: z.string(),
    episodeIds: z.array(z.string()),
    level: z.string(),
    nextTopic: z.string().optional(),
    nextHref: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    status: z.enum(["shipped", "in-development"]),
    featured: z.boolean().default(false),
    kind: z.enum(["engine", "cli", "saas"]),
    stack: z.array(z.string()),
    github: z.string(),
    githubLabel: z.string().optional(),
    interfaceNote: z.string().optional(),
  }),
});

export const collections = { notes, projects };
