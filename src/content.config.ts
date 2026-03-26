import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    live: z.string().url().optional(),
    draft: z.boolean().default(false),
    // Optional project standard section fields for detailed project pages
    // Include these in project markdown when you want a full project detail page
    overview: z.string().optional(),
    problem: z.string().optional(),
    objectives: z.string().optional(),
    scope: z.string().optional(),
    architecture: z.string().optional(),
    keyDecisions: z.string().optional(),
    techStack: z.string().optional(),
    implementation: z.string().optional(),
    challenges: z.string().optional(),
    outcomes: z.string().optional(),
    nextImprovements: z.string().optional(),
    keyTakeaways: z.string().optional(),
  }),
});

export const collections = { projects };
