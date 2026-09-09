---
name: review-animations
description: Strict review of existing web motion. Use after implementing animation or interaction changes; approval is earned.
disable-model-invocation: true
---

# Review Animations

Project-local adaptation of Emil Kowalski's `review-animations` skill (MIT). Upstream: https://github.com/emilkowalski/skills/tree/main/skills/review-animations

Review every changed animation against these standards:

1. Motion is justified by feedback, spatial consistency, state indication, explanation, or preventing a jarring change.
2. Frequency is appropriate: high-frequency actions get little or no animation.
3. Entrances/exits use responsive easing; no `ease-in` on UI.
4. UI motion normally stays below 300 ms unless there is a clear reason.
5. No `scale(0)` entrances; trigger-anchored elements use a coherent transform origin.
6. Rapid or gesture-driven interactions are interruptible.
7. Favor GPU/compositor properties (`transform`, `opacity`).
8. Reduced motion is supported; hover motion is fine-pointer gated.
9. Enter/exit paths and timing tell a coherent spatial story.
10. Motion matches the product personality; delete motion that is decorative noise.

Escalate immediately on `transition: all`, `ease-in` UI, gratuitous infinite loops, non-GPU layout animation with an easy alternative, missing reduced-motion support, or touch gestures that only react after release.

Required review output: one markdown table with `Before | After | Why`, followed by a verdict grouped by impact (feel-breaking, simplification, performance, interruptibility/timing, physicality/cohesion, accessibility). End with `Approve` or `Block`.
