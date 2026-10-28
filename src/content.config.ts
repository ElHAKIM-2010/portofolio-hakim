import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    order: z.number().int().positive(),
    category: z.string(),
    summary: z.string(),
    status: z.enum(["concept", "ongoing", "complete"]),
    statusLabel: z.string(),
    statusNote: z.string(),
    role: z.string(),
    year: z.string(),
    technologies: z.array(z.string()).default([]),
    preview: z.object({
      kind: z.enum(["commerce", "records"]),
      caption: z.string(),
      image: z
        .object({
          src: z.string(),
          srcSmall: z.string(),
          width: z.number().int().positive(),
          height: z.number().int().positive(),
          alt: z.string(),
        })
        .optional(),
    }),
    gallery: z
      .array(
        z.object({
          src: z.string(),
          srcSmall: z.string(),
          width: z.number().int().positive(),
          height: z.number().int().positive(),
          alt: z.string(),
          caption: z.string(),
        }),
      )
      .default([]),
    links: z
      .object({
        demo: z.url().optional(),
        source: z.url().optional(),
      })
      .default({}),
  }),
});

export const collections = { projects };
