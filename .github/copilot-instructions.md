# Project Guidelines

## Overview

Engineering portfolio and consulting platform at **mc-harris.dev**. Content-driven static site — no backend, no runtime data mutation. Currently in docs-first phase; implementation files do not exist yet.

## Source of Truth

All work must align with these canonical documents:

| Document | Defines |
|----------|---------|
| [project_brief.md](../docs/project_brief.md) | Why the system exists |
| [architecture.md](../docs/architecture.md) | How the system works |
| [tech_stack.md](../docs/tech_stack.md) | Approved technologies |
| [roadmap.md](../docs/roadmap.md) | How the project evolves |

If implementation conflicts with docs, **stop and flag** — do not silently diverge.

## Stack (when implementation begins)

TypeScript · Astro · Tailwind CSS · Markdown/MDX · GitHub Pages · GitHub Actions

Do not introduce technologies outside [tech_stack.md](../docs/tech_stack.md) without explicit approval.

## Development Workflow

Follow the operational loop in [copilot_workflow.md](../docs/copilot_workflow.md):

```
/plan → /implement → /test → /review
```

Use `/docs` only when the system spec changes. Use `/security` before production or sensitive features.

## Key Conventions

- **Docs-first**: Documentation is the specification. Code follows docs, not the other way around.
- **No premature implementation**: Do not create `src/`, config files, or scaffolding until intentionally directed.
- **Minimal changes**: Only make changes that are directly requested or clearly necessary.
- **Link, don't duplicate**: Reference existing docs rather than restating their content.
- **Security by default**: Follow `.github/instructions/security.instructions.md` for all changes.

## Content Structure

```
docs/           → canonical system specification
.github/        → agent guardrails and CI/CD
src/            → implementation (when introduced)
public/         → static assets (when introduced)
```

## Build & Test

No build or test commands exist yet. When introduced, they will follow standard Astro patterns:

```sh
npm install
npm run dev      # local development
npm run build    # production build
npm run preview  # preview production build
```

## Scoped Instructions

Detailed rules for specific areas are in `.github/instructions/`:

- `architecture.instructions.md` → editing `docs/architecture.md`
- `backend.instructions.md` → `src/**`
- `docs.instructions.md` → `docs/**`
- `infra.instructions.md` → `infra/**`
- `testing.instructions.md` → `tests/**`
- `security.instructions.md` → all files
