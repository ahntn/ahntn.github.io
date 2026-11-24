// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import { unified } from '@astrojs/markdown-remark';
import { siteConfig } from './site.config.ts';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';
import { remarkTodo } from './src/plugins/remark-todo.mjs';

export default defineConfig({
  site: siteConfig.site,
  base: siteConfig.base,
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [mdx()],
  markdown: {
    processor: unified({ remarkPlugins: [remarkReadingTime, remarkTodo] }),
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: false,
    },
  },
  vite: { plugins: [tailwindcss()] },
});
