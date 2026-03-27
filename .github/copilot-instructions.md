# Project Guidelines

## Overview

Engineering portfolio and consulting platform at **mc-harris.dev**. This is a content-driven Astro static site with implemented pages, components, content collections, and GitHub Pages deployment. There is no backend and no runtime data mutation.

## Source of Truth

All work must align with these canonical documents:

| Document | Defines |
|----------|---------|
| [project_brief.md](../docs/project_brief.md) | Why the system exists |
| [architecture.md](../docs/architecture.md) | How the system works |
| [tech_stack.md](../docs/tech_stack.md) | Approved technologies |
| [roadmap.md](../docs/roadmap.md) | How the project evolves |

If implementation conflicts with these docs, stop and flag the mismatch. Update docs only when the system specification actually changes.

## Stack

TypeScript · Astro · Tailwind CSS · Markdown/MDX · GitHub Pages · GitHub Actions

Do not introduce technologies outside [tech_stack.md](../docs/tech_stack.md) without explicit approval.

The current project uses Astro content collections, Tailwind v4 via the Vite plugin, and the strict Astro TypeScript config.

## Development Workflow

Follow the operational loop in [copilot_workflow.md](../docs/copilot_workflow.md):

```
/plan → /implement → /test → /review
```

Use `/docs` only when the system spec changes. Use `/security` before production or sensitive features.

## Build And Validation

Use these commands from the repository root:

```sh
npm install
npm run dev
npm run build
npm run preview
```

There is currently no dedicated test script. For implementation changes, at minimum run `npm run build` unless the user asks otherwise.

## Architecture

- `src/pages/` contains route entry points.
- `src/layouts/` contains shared page shells such as [BaseLayout.astro](../src/layouts/BaseLayout.astro).
- `src/components/` contains small reusable Astro UI pieces such as [ProjectCard.astro](../src/components/ProjectCard.astro).
- `src/content/` contains Markdown content, and [content.config.ts](../src/content.config.ts) defines the collection schema.
- `src/styles/global.css` defines theme tokens and global utilities; prefer shared tokens plus Tailwind utilities over page-specific ad hoc styling.
- `.github/workflows/astro.yml` is the deployment path to GitHub Pages.

## Conventions

- **Docs-first**: Documentation is the specification. Code follows docs, not the other way around.
- **Minimal changes**: Only make changes that are directly requested or clearly necessary.
- **Link, don't duplicate**: Reference existing docs rather than restating their content.
- **Content-driven structure**: Prefer updating Markdown content and collection schemas over hardcoding project data into page files.
- **Small Astro components**: Keep components composable and low-complexity, consistent with [tech_stack.md](../docs/tech_stack.md).
- **Respect strict typing**: Keep TypeScript explicit and compatible with [tsconfig.json](../tsconfig.json).
- **Security by default**: Follow `.github/instructions/security.instructions.md` for all changes.

## Pitfalls

- Do not reintroduce the old pre-implementation assumption. The site already has live source files in `src/` and deployment automation.
- Do not add a backend, runtime data mutation, or unapproved integrations without updating the canonical docs first.
- Do not add new dependencies or analytics casually; they must align with [tech_stack.md](../docs/tech_stack.md) and security guidance.
- Project entries can be hidden with `draft: true`; account for that when checking rendered project lists.

## Scoped Instructions

Detailed rules for specific areas are in `.github/instructions/`:

- `architecture.instructions.md` → editing `docs/architecture.md`
- `backend.instructions.md` → `src/**`
- `docs.instructions.md` → `docs/**`
- `infra.instructions.md` → `infra/**`
- `testing.instructions.md` → `tests/**`
- `security.instructions.md` → all files
