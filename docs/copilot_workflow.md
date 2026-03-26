# VS Code Copilot Operational Prompt Workflow

## Purpose
Defines the standard workflow for using prompts with VS Code Copilot while keeping the repository architecture-first and documentation-driven.

---

# Repository Control Layers

```
Layer 1 — System Specification
docs/

Layer 2 — Agent Guardrails
.github/

Layer 3 — Operational Prompts
VS Code Copilot prompts
```

### Canonical Documentation (Source of Truth)

```
docs/
├─ project_brief.md
├─ architecture.md
├─ roadmap.md
└─ tech_stack.md
```

These documents define:

| File | Purpose |
|-----|--------|
| project_brief.md | Why the system exists |
| architecture.md | How the system works |
| roadmap.md | How the project evolves |
| tech_stack.md | Approved technologies |

---

# Operational Prompt Set

```
/plan
/implement
/test
/review
/docs
/security
```

---

# Prompt Frequency

| Prompt | Purpose | Frequency |
|------|------|------|
| /plan | Break work into implementation steps | Once per feature |
| /implement | Write or modify code | Multiple times during development |
| /test | Generate or improve tests | After implementation steps |
| /review | Engineering review | Before commit/merge |
| /docs | Update system documentation | Only when system spec changes |
| /security | Security analysis | Rare, before production or sensitive features |

---

# Core Development Loop

Most development follows a four-step loop:

```
/plan
  ↓
/implement
  ↓
/test
  ↓
/review
```

Repeat until the feature is complete.

---

# Conditional Steps

Use these only when necessary.

### Documentation Update

```
/docs
```

Use when:

- architecture changes
- dependencies change
- roadmap changes
- infrastructure changes

---

### Security Review

```
/security
```

Use when:

- authentication is added
- APIs are exposed
- secrets are involved
- production hardening is needed

---

# Operational Model Summary

Core workflow:

```
/plan → /implement → /test → /review
```

Occasional operations:

```
/docs
/security
```

This structure keeps:

- documentation authoritative
- Copilot constrained by repository rules
- development disciplined and repeatable
