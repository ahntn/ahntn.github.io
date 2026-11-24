# ahntn.github.io

Personal portfolio for Anh Nguyen. Static [Astro](https://astro.build) site, TypeScript strict, Tailwind CSS, deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev        # http://localhost:4321 (drafts and TODO boxes are visible)
```

Restart the dev server if new Tailwind classes do not appear after adding new files.

| Command                                      | What it does                                           |
| -------------------------------------------- | ------------------------------------------------------ |
| `npm run build`                              | Production build, then fails if any `TODO:` is left    |
| `npm run check:links`                        | Verifies internal links and assets in `dist/`          |
| `npm run lint` / `npm run format:check`      | ESLint / Prettier                                      |
| `npm run check`                              | Astro and TypeScript type check                        |
| `npm test`                                   | Everything above, in CI order                          |

## Configuration

`site.config.ts` holds `site`, `base`, name, positioning and links. Change values there only.

**Custom domain:** set `site` to `https://your-domain`, set `base` to `'/'`, add `public/CNAME` containing the domain, and set the domain in the repo's Pages settings.

## Adding a post

Create `src/content/writing/my-post.md`:

```md
---
title: 'Post title'
description: 'One sentence for search and social cards.'
pubDate: 2026-02-01
tags: ['react']
draft: false
---
```

The file name is the URL slug. Reading time, RSS (`/rss.xml`), the social image and code highlighting are automatic. `draft: true` hides it in production.

## Adding a project

Create `src/content/projects/my-project.md`. Frontmatter: `title`, `summary`, `stack`, `order`, `featured`, `draft`, and optionally `role`, `demo`, `code`, `image` + `imageAlt` (file in `public/`), `video`. Leave `code` out for private repos; the layout handles it. The body uses the sections Problem, What I built, Architecture notes, What I learned. Set `draft: false` to publish.

## TODO placeholders

Anything unknown is written as `TODO: ...`. It renders as a red dashed box in dev, and `npm run build` fails if one remains in published output (drafts are excluded). Find them with:

```bash
grep -rn "TODO" src public site.config.ts
```

## Resume

Replace `public/resume.pdf` with the real file. The `/resume` page also has a printable HTML version (use the browser's print dialog).

## Email

No email address is published, to avoid scrapers. To add one later, prefer an obfuscated link built by a small script rather than a plain `mailto:`.

## Deploy

1. Create the repo `ahntn.github.io` on GitHub and push `main`.
2. Repo Settings → Pages → Source: **GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml` (lint, type check, build, link check, deploy). Pull requests run `ci.yml`.
