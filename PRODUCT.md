# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring managers screening for remote senior full-stack roles. They scan fast, decide in seconds whether to read on, and need to see who Anh is, what he does, and that he is open to full-time remote work.

Secondary: engineers who read the writing and the project architecture pages.

## Product Purpose

A personal portfolio site for Anh Nguyen, a senior full-stack engineer (8+ years): React and TypeScript first, now deepening Node.js and Python back ends. It exists to get him a full-time remote role. Success is a recruiter or hiring manager reaching the contact link, the resume, or a project page within one visit.

Anh is also the founder of Gambasoft (https://gambasoft.com), a separate company site. This site links to it and does not copy it.

## Positioning

The portfolio is presented as software documentation: each app is a service with an architecture page, and the site itself is the docs. A neighbouring portfolio could not truthfully copy this, because the case studies are architecture write-ups backed by real project decisions, not screenshots with adjectives.

## Operating Context

- Static site on GitHub Pages (`ahntn.github.io`), Astro, content in Markdown and MDX collections.
- Gambasoft app code is private. Project pages show architecture, demos and write-ups, never code. A per-project "Code" field is optional and must disappear cleanly when empty.
- Location shown as Alberta, Canada. Canadian citizen.
- The existing site (first version, same content model) is the incumbent implementation; this request redesigns its look into a docs-style layout.

## Capabilities and Constraints

- Pages: Overview, Projects (list and detail), Writing (list, posts, RSS), Changelog, About, Resume (PDF link plus printable HTML), Contact (footer and Overview).
- Static output only. No backend, trackers or cookie banner. Static search with Pagefind.
- Contact is social links only: GitHub, LinkedIn, Gambasoft. No email address is published, no contact form. The primary contact button goes to LinkedIn. (Confirmed by Anh.)
- Project "Code" link: optional per project, hidden when empty. (Confirmed by Anh.)
- Lighthouse 95+ in all four categories. Dark and light themes following the system setting, with a toggle. Respects reduced motion.
- No invented facts, metrics, employers or projects. Unknown content is a visible `TODO:` placeholder, and a production build fails if one remains on a published page.
- Open decisions: experience dates and role titles, one personal bio sentence, the real resume PDF, and the bodies of three draft projects.

## Brand Commitments

- Voice: plain, precise, a little dry. No hype, no buzzwords.
- Concept: a software documentation site, technology-flavoured but readable in two seconds.
- Anti-references: generic SaaS landing templates, purple gradients, glassmorphism, stock hero illustrations, and a copy of any existing portfolio.
- Name: Anh Nguyen. Positioning line: "Full-stack engineer. React and TypeScript first, now deepening Node.js and Python back ends."
- Hiring line: "Open to full-time remote roles."

## Evidence on Hand

Confirmed facts, and the only ones to use:

- Led a form-system rebuild with XState: 30% faster rendering.
- Built document-processing services, real-time updates with SignalR, and an AWS and Docker deployment flow.
- Built a Next.js, GraphQL and XState wallet platform for the FLOW network at Dapper Labs.
- Consulted for fintech and medical SaaS: React upgrades, a component library, an Nx monorepo.
- Founder of Gambasoft: own products plus client work in web, cloud and AI.
- Links: GitHub https://github.com/ahntn, LinkedIn https://www.linkedin.com/in/anguyen118/, Gambasoft https://gambasoft.com.

Not on hand, so never fabricate: employer names beyond Dapper Labs, dates, role titles, metrics beyond the 30%, testimonials, screenshots or demo URLs, project descriptions for Kid video player, Unfolio and Scratch travel app, a real resume PDF, any published posts.

## Product Principles

1. Say what is true and nothing else. A visible TODO beats an invented detail.
2. Answer who, what and availability on the first screen, in plain words.
3. Show how things were built (architecture, decisions, trade-offs), because that is what a senior engineer is hired for.
4. Private code stays private; the architecture story carries the weight.
5. Fast, static and quiet: no trackers, no banners, nothing that gets in the way of reading.

## Accessibility & Inclusion

Target Lighthouse accessibility 95+ and WCAG AA contrast in both themes. Fully keyboard operable, visible focus, reduced-motion respected, usable on a phone.
