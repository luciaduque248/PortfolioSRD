---
name: animate
description: Build web animations from scratch only after deciding whether motion is justified. Chooses tool, properties, easing, duration, interruptibility and reduced-motion behavior.
---

# Animate

Project-local adaptation of Emil Kowalski's `animate` skill (MIT). Upstream: https://github.com/emilkowalski/skills/tree/main/skills/animate

## Gate

1. Decide whether the interaction should animate at all.
2. Name the purpose: feedback, spatial consistency, state indication, preventing a jarring change, explanation, or rare delight.
3. Use the cheapest correct tool: CSS transition for simple state changes; CSS entry animation for predetermined motion; WAAPI for programmatic CSS; Motion/springs for gesture-driven or interruptible motion.
4. Prefer `transform` and `opacity`; avoid animating layout properties when a composited alternative exists.
5. Never use `scale(0)` entrances. Start around `.95` plus opacity.
6. Never use `ease-in` for UI entrances. Prefer strong ease-out `cubic-bezier(0.23, 1, 0.32, 1)` and ease-in-out `cubic-bezier(0.77, 0, 0.175, 1)` for movement already on screen.
7. UI motion normally stays under 300 ms. Press feedback 100–160 ms; small popovers 125–200 ms; dropdowns 150–250 ms.
8. Gesture-driven motion uses velocity-aware springs and must be interruptible.
9. Enter and exit along coherent paths.
10. Ship reduced-motion behavior and gate hover-only motion behind `(hover: hover) and (pointer: fine)`.

## Never ship

- `transition: all`
- `ease-in` on UI
- long UI animation with no functional reason
- layout-thrashing animation when transform/opacity can do the job
- hover motion on touch devices
- autonomous animation simply because it looks impressive

For this portfolio, preserve restraint: motion should explain state, input or spatial relationship—not compete with project content.
