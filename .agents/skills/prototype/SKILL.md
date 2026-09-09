---
name: prototype
description: Explore several genuinely different UI directions in isolation, let the user compare them, and only promote the selected variant to production.
disable-model-invocation: true
---

# Prototype

Project-local adaptation of Emil Kowalski's `prototype` skill (MIT). Upstream: https://github.com/emilkowalski/skills/tree/main/skills/prototype

## Workflow

1. Scope one UI piece at a time.
2. Recon the project's stack, tokens, personality, context and breakpoints.
3. Create 3 genuinely different directions by default. Each must diverge on a named axis such as layout, density, personality, motion or interaction model—not just color/shadow.
4. Build them in an isolated prototype route/surface. Do not touch production UI during exploration.
5. Every variant must be fully functional with realistic content and must meet the same accessibility/motion quality bar as production.
6. Switching between variants should be instant because comparison is a high-frequency action.
7. Present each option with the axis it explores, when it wins and its tradeoff.
8. Stop for user selection.
9. Only after selection, integrate the chosen variant and remove the prototype surface unless asked to keep it.

For PortfolioSRD, use this skill before significant redesigns of the hero, mobile project showcase, project cards, navigation or other visually sensitive components. This is specifically intended to reduce the cycle of shipping a design directly to production and then replacing it after visual review.
