---
name: emil-design-eng
description: Design-engineering taste for UI polish, component design, motion decisions and interaction details. Use as the general quality bar for interface work.
---

# Design Engineering

Project-local adaptation of Emil Kowalski's `emil-design-eng` skill (MIT). Upstream: https://github.com/emilkowalski/skills/tree/main/skills/emil-design-eng

## Operating principles

- Taste is trained. Study why strong interfaces feel right instead of copying visual trends.
- Invisible details compound: spacing, feedback, easing, hierarchy and defaults matter together.
- Beauty is leverage only when it supports usability and clarity.
- Before animating, ask: how often is this seen, what purpose does motion serve, and can it be simpler?
- High-frequency actions should be instant or nearly instant. Rare/first-time moments can carry more delight.
- Valid motion purposes: feedback, spatial consistency, state indication, explanation, preventing a jarring change.
- Prefer strong `ease-out` for entrances/exits, `ease-in-out` for movement already on screen, linear only for constant motion.
- UI motion should normally stay below 300 ms. Button press feedback: about 100–160 ms.
- Avoid `transition: all`, `ease-in` on UI, `scale(0)` entrances and gratuitous loops.
- Pressable controls need immediate active feedback (`scale(.95–.98)` where appropriate).
- Trigger-anchored popovers/menus should animate from their trigger; centered modals remain centered.
- Use `transform` and `opacity` for motion whenever possible.
- Gesture-driven interactions should be interruptible and preserve momentum/velocity.
- Respect `prefers-reduced-motion` and gate hover motion behind fine-pointer/hover media queries.
- Use custom visuals only when they reinforce product identity or function; generic glass/gradients are not a substitute for hierarchy.

## Portfolio-specific bar

For this portfolio, prefer an editorial, brand-first presentation over generic tech-dashboard aesthetics. Every section should have a distinct content model. Remove effects that exist only to make the page look "modern". Keep the accent system restrained, allow each project cover to carry its own brand identity, and favor specific copy over broad marketing language.

## Review format

When reviewing UI code, use a markdown table with `Before | After | Why`. Approval is earned: flag unnecessary motion, weak hierarchy, repeated card treatments, fake metrics, generic copy, missing accessibility states and mobile layouts that are merely scaled-down desktop designs.
