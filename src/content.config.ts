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
    status: z
      .enum(['in-production', 'in-development', 'prototype', 'retired'])
      .optional(),
    version: z.string().optional(),
    updated: z.coerce.date().optional(),
    stack: z.array(z.string()).default([]),
    demo: z.url().optional(),
    // Optional. Private repos (e.g. Gambasoft apps) leave this empty.
    code: z.url().optional(),
    // Optional architecture diagram shown as Fig. 1: path under /public, plus alt text.
    diagram: z.string().optional(),
    diagramAlt: z.string().optional(),
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

const changelog = defineCollection({
  loader: glob({ base: './src/content/changelog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, writing, changelog };
