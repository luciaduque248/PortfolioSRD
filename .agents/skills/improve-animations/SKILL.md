---
name: improve-animations
description: Audit motion across a codebase and produce a prioritized, evidence-based improvement plan. Use before broad animation refactors.
---

# Improve Animations

Project-local adaptation of Emil Kowalski's `improve-animations` skill (MIT). Upstream: https://github.com/emilkowalski/skills/tree/main/skills/improve-animations

## Workflow

1. Recon: identify framework, motion libraries, easing/duration tokens, gesture handlers, product personality and interaction frequency.
2. Sweep the codebase for `transition`, `animation`, keyframes, gesture code, `transition: all`, `ease-in`, layout-property animation, missing reduced motion, autonomous loops and missing press feedback.
3. Audit eight areas: purpose/frequency, easing/duration, physicality/origin, interruptibility, performance, accessibility, cohesion/tokens and missed opportunities.
4. Re-read each cited location and reject false positives or deliberate tradeoffs.
5. Prioritize by leverage (impact divided by effort), not by novelty.
6. Produce a short plan with exact file paths, values and verification steps.

Severity:
- HIGH: feel-breaking, high-frequency gratuitous motion, obvious jank/performance issue.
- MEDIUM: wrong origin, non-interruptible dynamic UI, missing reduced motion, inconsistent motion system.
- LOW: polish, stagger, token consolidation.

For PortfolioSRD, default to restraint. The audit should usually delete or reduce more motion than it adds. Highest-value fixes include preventing unnecessary 3D/runtime loading on mobile, removing broad transitions, honoring reduced-motion in programmatic scrolling, and making touch interactions direct and sufficiently sized.
