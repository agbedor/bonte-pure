# Code Graph
> Commit: f87ca02 | Date: 2026-10-07 | Files: 9 | Lang: js/ts
> Status: Current

## Architecture Overview
> This repository contains a Next.js App Router site for Bonte Pure. The root route renders the landing page from `src/app/landing/page.tsx`, which composes the full-screen image carousel and responsive navbar. Component styling uses Tailwind utilities, with global Tailwind and document metadata configured under `src/app`.

## Module Index

### ./

| File | Purpose | Key Exports | Used by |
|---|---|---|---|
| `eslint.config.mjs` | Configures ESLint for the Next.js project. | — | — |
| `next-env.d.ts` | Provides generated Next.js TypeScript declarations. | — | — |
| `next.config.ts` | Enables Next.js React Compiler. | `nextConfig` | — |
| `postcss.config.mjs` | Connects Tailwind CSS to PostCSS. | — | — |

### src/app/

| File | Purpose | Key Exports | Used by |
|---|---|---|---|
| `page.tsx` | Root route that forwards to the landing page. | `Home` | `/` |
| `layout.tsx` | Root HTML shell, fonts, global styles, and site metadata. | `RootLayout`, `metadata` | all routes |
| `landing/page.tsx` | Landing route that renders the hero section. | `LandingPage` | root route |

### src/components/

| File | Purpose | Key Exports | Used by |
|---|---|---|---|
| `landing/hero.tsx` | Full-screen hero carousel with rotating imagery, headline, and CTA. | `Hero` | landing page |
| `navbar/navbar.tsx` | Tailwind-styled Bonte Pure navigation and mobile menu. | `Navbar` | hero |

## Config & Schema Files

- `package.json`
- `tsconfig.json`

---
_Regenerate: `node <skill-dir>/scripts/scan.js > .claude/codegraph.draft.md`_
