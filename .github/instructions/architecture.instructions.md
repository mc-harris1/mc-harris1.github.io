---
applyTo: "docs/architecture.md"
---

# Architecture Documentation Instructions

## Purpose
`docs/architecture.md` defines the **system design specification** for the repository.

It describes the structure, behavior, and operational characteristics of the system.  
All implementation should align with the architecture described here.

If code changes conflict with this document, the architecture must be **explicitly reviewed and updated**.

---

## Architecture Principles

When editing this document:

- Prefer **clarity over completeness**
- Keep the **system model understandable at a glance**
- Use **stable section headings**
- Avoid implementation detail that belongs in source code

Architecture should describe **how the system works**, not **every line of code**.

---

## Required Sections

The architecture document should include the following sections.

### System Overview
High-level description of the system and its purpose.

Include:
- system goals
- major responsibilities
- operating environment

---

### Core Components
List the primary subsystems.

For each component include:

- name
- responsibility
- dependencies
- external interfaces

Example structure:

Component  
Responsibilities  
Dependencies  
Interfaces

---

### Interfaces / APIs
Describe how components interact.

Include:
- service boundaries
- API contracts
- messaging patterns
- external integrations

Avoid implementation details unless necessary for understanding.

---

### Data Flow
Describe how data moves through the system.

Include:
- ingestion
- processing
- storage
- output

Prefer diagrams or ordered flow descriptions.

---

### Infrastructure
Describe runtime environment and platform concerns.

Examples:

- operating systems
- container platforms
- compute resources
- networking topology
- storage layers

Infrastructure choices must align with **docs/tech_stack.md**.

---

### Non-Functional Requirements

Include the following areas when applicable:

Security  
Authentication / authorization model

Observability  
Logging, metrics, tracing

Reliability  
Fault tolerance, retries, graceful degradation

Scalability  
Horizontal vs vertical scaling strategy

Latency / performance targets

---

### Key Design Decisions

Document important architecture choices.

For each decision include:

- context
- decision
- rationale
- alternatives considered
- consequences

This functions as a lightweight **ADR log**.

---

## Alignment Rules

Architecture must remain consistent with:

- docs/project_brief.md
- docs/roadmap.md
- docs/tech_stack.md

If architecture changes:

- update affected sections
- ensure technology choices match `tech_stack.md`
- update roadmap milestones if necessary

---

## When to Update This Document

Update `architecture.md` when:

- introducing new services/components
- changing infrastructure
- modifying system boundaries
- altering data flow
- adopting new technologies

Architecture should evolve **with the system**, not lag behind it.

---

## Output Format When Responding

Provide updates as:

- exact section updates
- structured markdown edits
- cross-document changes if required