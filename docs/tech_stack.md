# Tech Stack

## Purpose

This document defines the approved technologies for the engineering portfolio and consulting platform.

The stack is intentionally conservative.

It prioritizes:

- clarity
- maintainability
- strong content structure
- fast static delivery
- low operational overhead
- familiar user experience patterns

The platform is not intended to be an application-heavy system. It is a content-driven website that presents technical work, links to external systems, and supports professional positioning.

---

## Technology Selection Principles

Technology choices for this project must support the following:

- simple deployment and hosting
- strong documentation workflows
- clean integration with GitHub
- maintainable styling and layout systems
- low runtime complexity
- scalable content structure
- predictable user interaction patterns

The stack should favor stable, well-supported tools over novelty.

---

## Approved Technologies

## 1. Core Language

### TypeScript
Approved for application logic, component behavior, and type-safe site development.

Why:

- improves maintainability
- reduces avoidable runtime mistakes
- supports long-term scalability of the codebase
- integrates well with modern static site tooling

Use TypeScript for:

- component props
- config files where supported
- utility functions
- content typing

Plain JavaScript may be used only when TypeScript adds no meaningful value.

---

## 2. Site Framework

### Astro
Approved as the primary web framework.

Why:

- well-suited for content-driven websites
- supports component-based development
- works well with Markdown and MDX content
- keeps the site lightweight
- fits static hosting well

Astro is the preferred system for:

- page generation
- layout composition
- project and article rendering
- content collections
- static output builds

This project should prefer static generation by default.

---

## 3. Content Format

### Markdown
Approved as the default content format.

Use Markdown for:

- project pages
- technical write-ups
- structured documentation
- long-form content in the repository

### MDX
Approved only when embedded components are needed inside content.

MDX should be used sparingly.

Default to Markdown unless there is a clear presentation need that requires component-level composition.

---

## 4. Styling

### Tailwind CSS
Approved as the primary styling system.

Why:

- supports consistent design through utility-based composition
- helps maintain visual discipline
- reduces ad hoc CSS sprawl
- works well for responsive layout systems

Use Tailwind for:

- spacing
- typography layout
- responsive behavior
- grid and flex layouts
- visual rhythm
- state styling

### CSS
Approved for:

- global tokens
- theme variables
- reusable utility extensions
- fine-grained styling not worth expressing in utilities

Custom CSS should remain limited and intentional.

The preferred styling model is:

- Tailwind for layout and composition
- CSS variables for theme and brand values
- minimal custom stylesheet surface area

---

## 5. Design Tokens

### CSS Custom Properties
Approved for design tokens.

Use variables for:

- colors
- spacing scale exceptions
- border radius values
- shadows
- transition timings
- typography values when needed

This ensures consistency across:

- themes
- reusable components
- future redesign work

---

## 6. Components

### Astro Components
Approved for reusable UI building blocks.

Component categories should include:

- layout components
- navigation components
- section wrappers
- project cards
- content containers
- call-to-action blocks

Component design should follow these rules:

- small and composable
- content-driven
- low prop complexity
- easy to read
- easy to replace

Avoid deeply nested component hierarchies unless clearly justified.

---

## 7. Icons and Visual Assets

### SVG
Approved as the preferred icon and simple graphic format.

Why:

- lightweight
- scalable
- easy to style
- well-suited for static websites

Use SVG for:

- logos
- simple diagrams
- interface icons
- brand marks

PNG or JPG may be used for photography or screenshots only.

---

## 8. Content Organization

### Repository-Managed Content
All primary content should live in the repository.

Approved locations include:

- `src/`
- `src/content/`
- `src/components/`
- `src/layouts/`
- `public/`
- `docs/`

The repository is the source of truth.

External CMS systems are not approved for this project.

---

## 9. Hosting and Deployment

### GitHub Pages
Approved as the primary hosting target.

Why:

- aligns with repository-driven workflow
- supports static hosting well
- integrates naturally with GitHub-based development
- keeps operations simple

### GitHub Actions
Approved for deployment automation.

Use GitHub Actions for:

- build validation
- static site generation
- deployment to GitHub Pages

The deployment model should remain:

- automatic on push to the main publishing branch
- reproducible from the repository alone

### Custom Domain
Approved and expected for production use.

The public site should use the portfolio domain rather than a default GitHub Pages domain.

---

## 10. Version Control and Source Platform

### Git
Approved as the version control system.

### GitHub
Approved as the source platform.

GitHub is the system of record for:

- source code
- documentation
- issues
- deployment workflows
- public project visibility

---

## 11. Documentation Workflow

### Markdown-Based Documentation in `docs/`
Approved as the documentation strategy for project guidance and AI-assisted development.

The following files are the documentation authority:

- `project_brief.md`
- `architecture.md`
- `roadmap.md`
- `tech_stack.md`

These files define:

- project intent
- system structure
- evolution path
- approved technologies

They must remain aligned with the actual implementation.

---

## 12. UX and Interaction Best Practices

The implementation should follow these operating principles:

### Minimize choice overload
Navigation and calls to action should remain limited and clear.

### Prefer familiar patterns
Do not introduce unusual navigation behavior or experimental interaction patterns without strong justification.

### Keep visual polish high but controlled
The interface should feel deliberate and refined, but visual aesthetics must not hide structural weakness.

### Hide implementation complexity from the user
Complexity should live in the codebase and content architecture, not in the user journey.

This means:

- simple navigation
- predictable layout
- readable typography
- obvious next actions
- low-friction browsing

---

## 13. Accessibility and Responsiveness

Approved practices:

- semantic HTML
- keyboard-accessible navigation
- visible focus states
- sufficient color contrast
- responsive layout across desktop and mobile

Accessibility is required, not optional.

---

## 14. Analytics and Tracking

### Optional: Privacy-Respecting Analytics
Analytics may be added only if they are lightweight and useful.

If analytics are introduced, they should be:

- privacy-conscious
- minimal
- non-intrusive

Analytics are not required for the first implementation.

---

## 15. Contact and Conversion Mechanisms

Approved approach:

- LinkedIn as the primary contact mechanism
- direct links to external professional profiles where useful

Optional additions if they remain low-friction and clearly justified:

- scheduling link
- external form provider

Not approved for initial implementation:

- custom backend contact service
- unnecessary authentication
- complex CRM integration

The contact path should be simple, low-friction, and avoid adding standalone site complexity unless it materially improves conversion.

---

## 16. Non-Approved Technologies

The following are not approved for this project unless requirements materially change:

- full backend frameworks for the website itself
- server-rendered application stacks without a clear need
- database-backed CMS platforms
- heavy client-side state management libraries
- complex animation frameworks as a default dependency
- multi-service architectures for the portfolio site
- UI libraries that override the site’s visual identity

This project should not become more complex than its purpose requires.

---

## 17. Default Stack Summary

The default approved implementation stack is:

- **Language:** TypeScript
- **Framework:** Astro
- **Content:** Markdown, limited MDX
- **Styling:** Tailwind CSS + CSS custom properties
- **Components:** Astro components
- **Assets:** SVG, optimized raster images where necessary
- **Hosting:** GitHub Pages
- **Deployment:** GitHub Actions
- **Domain:** Custom domain
- **Version Control:** Git + GitHub

---

## 18. Final Guidance

When selecting tools or patterns for this project:

- prefer simplicity over novelty
- prefer structure over convenience hacks
- prefer static delivery over runtime complexity
- prefer content clarity over visual excess
- prefer familiar interaction models over cleverness

This stack exists to support a professional engineering presence that is:

- maintainable
- credible
- fast
- clear
- easy to extend