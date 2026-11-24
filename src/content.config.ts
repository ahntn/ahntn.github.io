import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().default(100),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    role: z.string().optional(),
    stack: z.array(z.string()).default([]),
    demo: z.url().optional(),
    // Optional. Private repos (e.g. Gambasoft apps) leave this empty.
    code: z.url().optional(),
    // Optional screenshot: path under /public, plus alt text.
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    // Optional video URL (mp4/webm under /public or hosted).
    video: z.string().optional(),
  }),
});

const writing = defineCollection({
  loader: glob({ base: './src/content/writing', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, writing };
