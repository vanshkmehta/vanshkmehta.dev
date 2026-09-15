import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const notes = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/notes" }),
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
