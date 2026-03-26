---
applyTo: "**"
---

# Security Instructions

## Purpose
Security is a foundational requirement for this repository.
All code, configuration, and infrastructure changes must consider security implications.

The goal is to prevent:
- accidental exposure of secrets
- insecure dependencies
- injection vulnerabilities
- data leaks
- privilege escalation

Security should be treated as part of the design, not a later audit.

## Non-Negotiable Rules

The following rules must never be violated:

- Never commit secrets (API keys, tokens, private keys, passwords).
- Never log secrets or sensitive credentials.
- Never embed credentials directly in code.
- Never bypass authentication or authorization checks.

If secrets are required, use:
- environment variables
- secret managers
- secure configuration systems

## Secrets Management

Secrets must be handled securely.

Allowed methods:
- environment variables
- external secret managers
- encrypted configuration stores

Never store secrets in:
- source files
- configuration files committed to the repository
- test fixtures

Example of unsafe behavior:

API_KEY = "abcd1234"

## Input Validation

All external inputs must be treated as untrusted.

Validate inputs from:
- HTTP requests
- CLI arguments
- environment variables
- files
- message queues
- databases
- external APIs

Recommended practices:
- strict validation
- schema validation
- allowlists instead of blocklists

## Injection Protection

Prevent common injection attacks:

- SQL injection
- command injection
- path traversal
- template injection
- deserialization attacks

Guidelines:
- never construct SQL with string concatenation
- use parameterized queries
- avoid building shell commands from user input
- sanitize file paths

## Dependency Security

Dependencies introduce risk.

Guidelines:
- prefer well-maintained libraries
- avoid unnecessary dependencies
- monitor for security advisories
- pin versions where appropriate

New dependencies must align with docs/tech_stack.md.

## Authentication and Authorization

Security boundaries must be explicit.

Guidelines:
- enforce authentication for protected operations
- enforce authorization checks
- follow least-privilege principles
- never assume trusted clients

## Data Protection

Sensitive data must be protected.

Guidelines:
- encrypt sensitive data at rest when appropriate
- encrypt data in transit using secure protocols
- avoid storing unnecessary personal or sensitive data

Data should be classified as:
- public
- internal
- sensitive

Sensitive data requires additional protection.

## Secure Defaults

Systems should fail safely.

Prefer:
- default-deny network policies
- explicit allow rules
- bounded retries and timeouts
- minimal service exposure

Avoid:
- open network ports by default
- overly permissive permissions

## Logging and Observability

Logging must support security monitoring.

Guidelines:
- log important security events
- avoid logging sensitive data
- include enough context for debugging incidents

Examples:
- authentication failures
- permission violations
- unusual activity patterns

## Secure Coding Practices

Follow defensive coding principles:

- validate assumptions
- fail safely
- avoid unsafe language features
- handle errors explicitly

Prefer:
- explicit error handling
- safe library functions
- immutable data where possible

## Alignment with Documentation

Security decisions should align with:
- docs/architecture.md
- docs/tech_stack.md
- docs/project_brief.md

If security requirements change architecture, update docs/architecture.md.

## Output Format When Responding

When suggesting changes include:
- security risks introduced
- mitigation strategies
- dependency risk considerations
- configuration hardening recommendations
