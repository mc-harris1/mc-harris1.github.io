---
applyTo: "src/**"
---

# Backend Copilot Instructions

## Source of truth
- Follow: docs/project_brief.md, docs/architecture.md, docs/roadmap.md
- If implementation conflicts with docs, call it out and propose a doc update.

## Design & implementation rules
- Prefer small, composable modules over “god files”.
- Use explicit types and clear interfaces; keep boundaries clean.
- Don’t introduce new dependencies, services, or patterns unless:
  1) already listed in docs/architecture.md or docs/tech_stack.md, or
  2) you propose the change and explain why it belongs.

## API & contracts
- Treat any API/interface as a contract:
  - version carefully
  - validate inputs
  - return structured errors
- If you add or change a public interface, update docs/architecture.md accordingly.

## Data & persistence
- Prefer explicit schemas/migrations (if applicable).
- Keep DB access behind a repository/data-access layer.
- Avoid leaking persistence models into domain logic.

## Reliability & safety
- Add guardrails: timeouts, retries (bounded), and sane defaults.
- Be defensive around I/O and parsing.
- Avoid global state; prefer dependency injection / explicit wiring.

## Observability
- Every new “unit of work” should have:
  - structured logs (key/value)
  - metrics hooks if the project has a metrics pattern
  - trace-friendly boundaries where appropriate
- If observability standards exist in docs/architecture.md, follow them.

## Testing
- Add/adjust tests for all behavior changes.
- Prefer:
  - unit tests for pure logic
  - integration tests for DB/network boundaries
- Tests must be deterministic and fast.

## Output format when responding
- Provide a short plan, then concrete edits:
  - file paths
  - patches/snippets
  - commands to run (tests, format, lint)