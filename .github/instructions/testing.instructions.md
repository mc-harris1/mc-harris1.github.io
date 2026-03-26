---
applyTo: "tests/**"
---

# Testing Instructions

## Purpose
Tests validate system behavior and protect against regressions.  
All meaningful behavior changes must include tests or updates to existing tests.

Tests are a first-class part of the system, not an afterthought.

## Testing Philosophy

Follow these principles:

- prefer deterministic tests
- tests should validate behavior, not implementation details
- tests should run quickly
- avoid external dependencies whenever possible
- keep tests readable and maintainable

Tests should help engineers understand what the system guarantees.

## Test Categories

### Unit Tests

Unit tests verify isolated logic.

Characteristics:

- no network calls
- no real database connections
- dependencies mocked or stubbed

Use unit tests for:

- business logic
- algorithms
- data transformations
- validation rules

### Integration Tests

Integration tests validate interaction between components.

Examples:

- database interactions
- API layer + service layer
- messaging systems
- serialization/deserialization boundaries

Rules:

- keep tests focused on the boundary being validated
- avoid unnecessary system complexity

### End-to-End Tests

End-to-end tests verify complete system workflows.

Use them sparingly for:

- critical user journeys
- production-critical flows

E2E tests should not replace unit or integration tests.

## Test Structure

Tests should follow the pattern:

Arrange  
Act  
Assert

Example:

Arrange → prepare inputs and environment  
Act → execute behavior  
Assert → verify expected outcomes

## Test Naming

Use descriptive names that capture behavior.

Examples:

test_user_creation_returns_valid_id  
test_invalid_email_rejected  
test_retry_occurs_on_timeout

Avoid vague names like:

test_function  
test_case_1

## Determinism Rules

Tests must:

- produce the same result every run
- not rely on system clock without control
- not depend on network availability
- avoid random values unless seeded

## Performance Expectations

Guidelines:

- unit tests: milliseconds
- integration tests: seconds
- full test suite: fast enough for local development

Avoid long setup phases or unnecessary resource usage.

## Coverage Priorities

Coverage should prioritize:

- core business logic
- edge cases
- error handling
- data transformations

Avoid writing tests purely to increase coverage numbers.

## Observability in Tests

Failures should clearly indicate:

- expected behavior
- actual result
- context of failure

Readable failures speed debugging.

## Alignment with Documentation

If new behavior is introduced:

- update tests
- ensure alignment with docs/project_brief.md
- confirm architecture expectations in docs/architecture.md

## Output Format When Responding

When generating tests provide:

- test file path
- test functions
- setup code or fixtures
- commands to run tests locally
