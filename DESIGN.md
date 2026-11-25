---
name: Anh Nguyen, Field Guide to Services
description: A pocket field guide to services. Spruce book-cloth rail, cool plate paper, one vermilion pointer.
colors:
  paper: "#eef0e9"
  plate: "#f8f9f4"
  ink: "#14201b"
  muted: "#4d6157"
  rule: "#c5ccc0"
  cloth: "#17483a"
  cloth-deep: "#0f3329"
  cloth-ink: "#dfe9e2"
  cloth-muted: "#a9cbbb"
  cloth-rule: "#2f6a57"
  pointer: "#b93a17"
  pointer-ink: "#ffffff"
  todo-line: "#d00000"
  todo-bg: "#fff3f3"
  todo-ink: "#8a0000"
  paper-night: "#0f1a16"
  plate-night: "#15231e"
  ink-night: "#e8eee9"
  muted-night: "#a3b8ac"
  rule-night: "#2a3d35"
  cloth-deep-night: "#0b2a21"
  pointer-night: "#ff7a52"
  pointer-ink-night: "#0f1a16"
typography:
  display:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(2.25rem, 5vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  hero:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(2.75rem, 8vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "1.75rem"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "1.375rem"
    fontWeight: 800
    lineHeight: 1.15
  lede:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.35
  body:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Spline Sans Mono Variable, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.1em"
  mono-ui:
    fontFamily: "Spline Sans Mono Variable, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.5
rounded:
  none: "0px"
spacing:
  xs: "0.4rem"
  sm: "0.75rem"
  md: "1.25rem"
  lg: "2rem"
  xl: "3rem"
components:
  button-primary:
    backgroundColor: "{colors.pointer}"
    textColor: "{colors.pointer-ink}"
    typography: "{typography.mono-ui}"
    rounded: "{rounded.none}"
    padding: "0.65rem 1rem"
    height: "2.75rem"
  button-primary-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.pointer}"
  button-quiet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.mono-ui}"
    rounded: "{rounded.none}"
    padding: "0.65rem 1rem"
    height: "2.75rem"
  plate:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1rem 1.1rem 1.1rem"
  callout:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1rem 1.25rem"
  rail:
    backgroundColor: "{colors.cloth}"
    textColor: "{colors.cloth-ink}"
    width: "17rem"
    padding: "2rem 1.5rem"
  search-input:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink}"
    typography: "{typography.mono-ui}"
    rounded: "{rounded.none}"
    height: "2.75rem"
---

# Design System: Anh Nguyen, Field Guide to Services

## Overview

**Creative North Star: "The Pocket Field Guide"**

The site reads as a small printed field guide to services. Each app is a numbered plate identified by field marks (stack, status, updated) rather than a screenshot card. A spruce book-cloth rail holds the name and contents; the reading column is cool plate paper with near-black ink. It is plain, precise and a little dry, which is the voice PRODUCT.md commits to.

Density is moderate and bookish: a 66ch measure, serif reading type, hairline rules, and mono only where a label or a field mark is being read like an index. It refuses the SaaS landing page, gradients, glassmorphism and the default docs theme.

**Key Characteristics:**
- Spruce cloth rail on the left, paper column beside it; dark theme keeps the cloth and turns the paper deep green-black.
- One vermilion pointer for focus, hover, the current-page arrow, field-mark labels and the single primary action.
- Square corners, 1px borders, no shadows, no side-stripe borders.
- Serif for reading and headings, mono for labels, field marks, controls and code.
- Status is always a glyph plus a word.

## Colors

A restrained green-and-paper palette with one hot accent. Light values are in the frontmatter; dark values carry a `-night` suffix and replace paper, plate, ink, muted, rule, deep cloth and the pointer.

### Primary
- **Vermilion Pointer** (#b93a17, dark #ff7a52): The only accent. Used for focus rings, link hover, the arrow marking the current rail page, the `dt` field-mark labels in a plate key, link underlines in prose, the primary button, and search match highlights. Text on it is white in light, near-black in dark (pointer-ink).

### Secondary
- **Spruce Book-Cloth** (#17483a): The rail ground and text selection. Unchanged in dark theme. Its deep edge (#0f3329, dark #0b2a21) is the rail's 6px right border. Rail text is Cloth Ink (#dfe9e2), secondary rail text Cloth Mist (#a9cbbb), dividers Cloth Seam (#2f6a57).

### Neutral
- **Plate Paper** (#eef0e9, dark #0f1a16): Page ground.
- **Plate Stock** (#f8f9f4, dark #15231e): Raised surface for plates, callout, inputs, code blocks, buttons.
- **Field Ink** (#14201b, dark #e8eee9): Text and the strong 1px borders around plates, callouts, figures.
- **Sage Gray** (#4d6157, dark #a3b8ac): Secondary text, labels, placeholder.
- **Hairline** (#c5ccc0, dark #2a3d35): Dividers, table rules, input borders.
- **Placeholder Red** (#d00000 line, #fff3f3 fill, #8a0000 ink; dark #ff6b6b / #2a1414 / #ffb3b3): Only for dashed TODO boxes, which fail the production build if present.

### Named Rules
**The One Pointer Rule.** Vermilion is the only accent and never fills a surface larger than a button. Its rarity is how the eye finds the next action.
**The Cloth Stays Rule.** The rail is spruce in both themes; only the paper changes.

## Typography

**Display and Body Font:** Spectral (400, 400 italic, 600, 800; Georgia fallback)
**Label/Mono Font:** Spline Sans Mono Variable (ui-monospace fallback)

**Character:** A warm bookish serif carries all reading and every heading in heavy 800 weight; the mono works as the index and instrument face. Old-style numerals in running text, tabular lining numerals in tables and dates.

### Hierarchy
- **Display** (800, clamp(2.25rem, 5vw, 3.25rem), 1.05): Page h1.
- **Headline** (800, 1.75rem, 1.15): Section h2 inside the doc, 3rem above.
- **Title** (800, 1.375rem plate h3, 1.25rem doc h3, 1.15): Plate and subsection titles.
- **Lede** (400, 1.5rem, 1.35, max 30ch): Positioning line under the h1.
- **Body** (400, 1.125rem, 1.6): Reading text, capped at 66ch (`--measure`).
- **Label** (mono 0.75rem, 0.1em tracking, uppercase, Sage Gray): Dates above entries, "On this page", spec table heads, figure captions. Plate field marks use the same style in the pointer color at weight 600.
- **Control** (mono 0.875rem, 600): Buttons, rail links (regular), search.

### Named Rules
**The Two Voices Rule.** Serif reads, mono indexes. Never set a paragraph in mono or a heading in anything but Spectral 800.

## Layout

A two-column shell: a sticky 272px (17rem) rail, then a page grid of reading column plus a 14.5rem sticky "On this page" list, 3rem apart, max 78rem, 2.5rem side padding. A sticky paper top strip holds the menu button, search (max 26rem) and theme toggle. Rhythm is 0.75rem, 1.25rem, 2rem, 3rem; section h2s sit 3rem below prior content. Plates sit in an auto-fill grid (min 15.5rem, 1.25rem gap).

Responsive: below 62rem the right list collapses to an inline details disclosure; below 52rem the rail becomes a fixed drawer (min(19rem, 86vw)) behind a scrim, and the search fills the strip. Touch targets are 2.75rem (44px) minimum. Motion is limited to the drawer slide (0.28s, cubic-bezier(0.22, 1, 0.36, 1)), and only when reduced motion is not requested.

## Elevation & Depth

Flat. There are no shadows. Depth is a stack of 1px borders on paper and plate stock: Field Ink borders for objects (plates, callout, figures, search results), Hairline for dividers, and the rail's 6px deep-cloth edge as the one thick line. The search panel is a bordered plate on a z-index, not a shadow.

### Named Rules
**The Flat Print Rule.** Nothing casts a shadow. Separate with a border or a tone shift.

## Shapes

Square. Every box has 0 radius: buttons, inputs, plates, pills, code, images. Borders are 1px (TODO boxes 2px dashed). The one non-rectangle is the 8px pointer arrow, a triangle clip, marking the current rail page. Placeholder figures use a 135-degree hairline hatch. A bordered callout never uses a side stripe.

## Components

### Buttons
- **Shape:** Square, 2.75rem minimum height, mono 0.875rem weight 600.
- **Primary:** Vermilion fill with pointer-ink text, 0.65rem 1rem padding, used once per view (Contact on LinkedIn).
- **Hover / Focus:** Fill empties to transparent with a vermilion label and border; focus is a 2px vermilion outline offset 3px (white on the rail).
- **Quiet:** Transparent with an ink border and ink text; hover turns the border vermilion.

### Plates
- **Style:** Plate Stock, 1px Field Ink border, 1rem 1.1rem padding. Head: "No. n" label, optional Fig. 1 figure frame, serif title, summary, then a key list.
- **Key list:** Stack, Status, Updated in a 5.5rem + 1fr grid, each row topped by a hairline (the first row by an ink line). Labels are vermilion mono caps.
- **Behavior:** The title link stretches over the whole plate; hover turns the border vermilion.

### Status mark
A 12px glyph plus a word: filled circle (In production), half-filled circle (In development), dashed circle (Prototype), cross (Retired). Never color alone.

### Callout
Full 1px ink border on Plate Stock with a mono title and an action button, max 42rem. Never a side bar.

### Navigation
- **Rail:** Mono 0.875rem links on cloth with seam dividers, 0.7rem vertical padding; muted by default, white on hover, current page bold with a vermilion triangle pointer.
- **Breadcrumbs:** Mono 0.8125rem with slash separators.
- **On this page:** Mono list with a 1px hairline left rule that turns vermilion on hover or when current.

### Inputs / Fields
Search: 2.75rem high, 1px hairline border, Plate Stock, mono 0.875rem, a kbd hint at right. Results open in an ink-bordered plate; matches are vermilion weight 600.

### Pills and spec tables
Pills are hairline-bordered mono 0.75rem tags. Spec tables use hairline row rules and uppercase mono row heads.

## Do's and Don'ts

### Do:
- **Do** keep vermilion to pointers, field-mark labels, focus and the single primary action.
- **Do** pair every status with its glyph and word.
- **Do** use plain labels: Project, Stack, Status, Updated, Fig. 1.
- **Do** separate surfaces with 1px borders and keep corners square.
- **Do** keep targets at least 2.75rem and honor reduced motion.
- **Do** render unknown facts as a visible TODO box, never as invented copy.

### Don't:
- **Don't** add shadows, gradients, glass, rounded corners or side-stripe borders.
- **Don't** use "Plate" or "Field marks" as visible words; the user chose plain labels.
- **Don't** set body copy in mono or headings in anything but Spectral 800.
- **Don't** put vermilion on large fills or use it for decoration.
- **Don't** build SaaS-landing hero patterns or stock illustration.
