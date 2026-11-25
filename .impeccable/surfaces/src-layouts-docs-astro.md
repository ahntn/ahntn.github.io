---
version: 1
slug: "src-layouts-docs-astro"
primary_target: "src/layouts/Docs.astro"
related_targets: ["src/pages/index.astro"]
---

# Surface brief: portfolio docs site

Mode: Read (Overview first screen also persuades). Audience: recruiters/hiring managers scanning in seconds; engineers reading architecture and writing. Action: reach the LinkedIn contact button, resume, or a project page. Proof: only confirmed facts in PRODUCT.md; TODO placeholders everywhere else. Constraints: static Astro, Pagefind search, no trackers, Lighthouse 95+, light/dark with toggle, reduced motion.

## Direction contract

THESIS: The site is a pocket field guide to services; each app is a numbered plate identified by field marks, range and status. It refuses the SaaS landing page and the default docs theme.

OWN-WORLD: Spruce book-cloth rail (#17483a family), cool plate paper ground, near-black ink, one vermilion pointer (#d1431f family) used only for pointers, field-mark labels and the single primary action. Dark theme keeps the cloth and turns the paper deep green-black. Spectral for reading and headings, Spline Sans Mono only for labels, field marks and code. Status is glyph plus word. Plates are bordered paper with a hairline rule above their key list; no side-bar borders, no shadows.

STORY: A visitor learns who Anh is, what he does and that he is open to full-time remote roles, then finds a plate for each app, and can search, read an architecture page, or contact him on LinkedIn.

FIRST VIEWPORT: Desktop 1440x900: 272px spruce rail with name, "Field guide to services" and the contents; centre column with breadcrumb, 76px name, the positioning line, a full-border callout "Open to full-time remote roles." with a Contact on LinkedIn button, then the three plates; 230px right "On this page" list. Search sits in a thin top strip over the column. Primary action: the Contact on LinkedIn button in the callout.

FORM: The Field Guide to Services, chosen from the assigned roll position 6 of my grounded list. seed:6149a48ac46d3d5c

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
