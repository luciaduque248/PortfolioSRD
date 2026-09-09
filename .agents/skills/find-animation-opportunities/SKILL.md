---
name: find-animation-opportunities
description: Find places where motion would genuinely improve comprehension or feedback, and explicitly reject places where animation would only decorate.
---

# Find Animation Opportunities

Project-local adaptation of Emil Kowalski's `find-animation-opportunities` skill (MIT). Upstream: https://github.com/emilkowalski/skills/tree/main/skills/find-animation-opportunities

Use restraint. Most candidates should be rejected.

Every suggestion must pass four gates:
1. Frequency — high-frequency/keyboard actions should not animate.
2. Purpose — must be feedback, spatial consistency, state indication, preventing a jarring change, explanation, or rare delight.
3. Speed — standard UI motion should fit normal sub-300 ms budgets.
4. Function — motion must help rather than distract from information the user is reading or acting on.

High-value places to inspect:
- pressables with no immediate press feedback;
- conditional content that teleports in/out;
- menus/panels with no spatial relationship to their trigger;
- gesture-driven UI that snaps without tracking or momentum;
- rare completion/empty states where delight has a clear role.

Required report: at most 5–7 opportunities, ordered by leverage, plus 2–5 rejected candidates and the reason each failed the gate. Do not turn the interface into an animation wishlist.
