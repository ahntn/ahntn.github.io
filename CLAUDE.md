# ahntn.github.io — CLAUDE.md

Personal portfolio for Anh Nguyen. Astro (static) + Tailwind CSS, deployed to GitHub Pages. See `README.md` for content workflows (posts, projects, changelog) and `DESIGN.md` / `PRODUCT.md` for design and product direction.

## Monorepo notes
- Nx project `ahntn.github.io` (`project.json`) wraps the package scripts. Run through Nx from the repo root: `pnpm nx run ahntn.github.io:dev|build|lint|format:check|check|check:links|test`.
- Dependencies are pinned to exact versions (monorepo rule). Install with `pnpm add <pkg> --save-exact`, never `npm`.
- Personal site: it keeps its own design language (`DESIGN.md`) rather than the Gambasoft brand tokens/Flowbite. Styling is still Tailwind utility classes only.
- `build` fails on purpose while any `TODO:` placeholder remains in published pages (currently `about`, `resume`).
- `.github/workflows/*` target the standalone GitHub repo and still use `npm`; they do not run from inside the monorepo.
