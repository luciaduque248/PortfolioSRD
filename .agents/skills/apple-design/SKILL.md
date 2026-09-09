---
name: apple-design
description: Apple's approach to interface design and fluid, physical motion, translated for the web. Use when building or reviewing gesture-driven UI, spring animations, drag/swipe interactions, momentum and interruptible transitions, translucent materials and depth, typography, reduced motion, spatial consistency, feedback, and restraint.
---

# Apple Design

Project-local installation adapted from Emil Kowalski's `apple-design` Agent Skill (MIT). Upstream: https://github.com/emilkowalski/skills/tree/main/skills/apple-design

Use this skill to review and implement web interfaces that feel direct, physical, predictable and crafted rather than merely animated.

## Core principles

1. **Response** — feedback begins on pointer/touch down, not after release. Remove avoidable input latency.
2. **Direct manipulation** — draggable/swipeable content tracks the pointer 1:1 and preserves the grab offset.
3. **Interruptibility** — users can reverse or re-grab motion at any moment. Never lock input while transitions finish.
4. **Behavior over animation** — prefer spring behavior for touch-driven interactions instead of fixed scripted timelines.
5. **Velocity handoff** — continue from the gesture's release velocity; avoid a visible seam between gesture and animation.
6. **Momentum projection** — a flick should land according to velocity and projected intent, not only release position.
7. **Spatial consistency** — enter and exit along coherent paths; popovers and panels originate from their trigger/source.
8. **Trajectory hints** — intermediate motion should communicate the destination/state change.
9. **Soft boundaries** — use progressive resistance/rubber-banding rather than dead hard stops where appropriate.
10. **Gesture craft** — immediate press feedback, sensible hysteresis, continuous tracking and low ambiguity.
11. **Frame-level smoothness** — favor transform/opacity, display-synced motion, and avoid layout thrash.
12. **Materials and depth** — translucency communicates hierarchy. Floating chrome should feel layered, not like stacked generic glass cards.
13. **Multimodal feedback** — visual/haptic/sound feedback must be causal, synchronized and used sparingly.
14. **Accessibility** — honor `prefers-reduced-motion`, reduced transparency/contrast needs, keyboard focus and sufficient target size.
15. **Typography** — size-specific tracking and leading; large display text tighter, body text comfortable; use system type unless branding justifies otherwise.
16. **Design foundations** — Purpose, Agency, Responsibility, Familiarity, Flexibility, Simplicity, Craft and Delight.
17. **Process** — prototype interactions, design motion and visuals together, and test in real device/context.

## Portfolio review lens

When auditing a portfolio, flag anything that feels machine-generated because it is:

- visually generic or composed from familiar AI-design tropes (purple/blue gradients, repeated glass cards, decorative particles, excessive pills/chips);
- decorative without communicating hierarchy, state or purpose;
- over-animated with autonomous loops that compete with content;
- dependent on fixed-duration CSS transitions for touch gestures;
- visually inconsistent between sections, cards or device breakpoints;
- using large blocks of generic marketing copy instead of concise, specific language;
- applying the same component treatment to unrelated content;
- lacking platform-aware behavior between mobile/tablet/desktop;
- missing immediate press states, clear focus states, reduced-motion behavior, or predictable navigation;
- technically responsive but not compositionally redesigned for the available space.

## Preferred motion defaults

- Non-gesture UI: critically damped spring / no overshoot, response about 0.3–0.4 s.
- Momentum-driven flicks: slight bounce only when the gesture supplies momentum.
- Swipeable cards: continuous tracking during drag, projected destination on release, interruptible spring to target.
- Reduced motion: short cross-fades/static state changes instead of parallax, floating loops or elastic motion.

## Design test

Every visible element must answer at least one of these questions:
- What does this help the visitor understand?
- What action does this enable?
- What hierarchy or state does this communicate?
- What brand-specific information does this reinforce?

If the answer is only “it looks modern”, remove or simplify it.
