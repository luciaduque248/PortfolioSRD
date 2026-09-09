---
name: pick-ui-library
description: Choose a suitable frontend library for a UI task instead of hand-rolling complex accessible components. Invoke explicitly before adding dependencies.
disable-model-invocation: true
---

# Pick UI Library

Project-local adaptation of Emil Kowalski's `pick-ui-library` skill (MIT). Upstream: https://github.com/emilkowalski/skills/tree/main/skills/pick-ui-library

Before recommending anything, inspect `package.json` and prefer an already-installed suitable library. Do not churn dependencies without a clear reason.

Curated task mapping:
- Accessible unstyled UI primitives: Base UI.
- Command menus: cmdk.
- Toasts: Sonner.
- OTP inputs: input-otp.
- General springs/layout/gesture animation: Motion.
- Drag and drop: dnd-kit.
- Large-list virtualization: Virtuoso.
- State management: zustand.
- Conditional class strings: clsx.
- Variant-driven Tailwind APIs: cva.
- Theme switching: next-themes where framework/runtime fit.
- Static/general charts: Recharts.

Use plain CSS for simple hover, press, color or fade transitions; do not install a motion library for trivial effects. For this portfolio, preserve the existing stack unless a new component has a real accessibility, interaction or maintenance need that an established library solves better.
