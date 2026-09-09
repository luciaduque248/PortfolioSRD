# Animation & interaction audit — 2026-09-09

Scope: PortfolioSRD web portfolio. Review bar: local `apple-design`, `emil-design-eng`, `improve-animations`, `review-animations`, `find-animation-opportunities`, `animate`, `pick-ui-library` and `prototype` skills.

## Recon

- Stack: React 19 + CRA/CRACO + Tailwind CSS.
- Interaction libraries already present: Embla Carousel, Radix UI primitives, Spline.
- Product personality: portfolio / presentation surface; motion can support orientation and identity but should not compete with project content.
- Motion policy: restrained, direct, touch-aware, reduced-motion compatible.

## Prioritized findings

| # | Severity | Area | Finding | Action |
| --- | --- | --- | --- | --- |
| 1 | HIGH | Hero / Spline | The desktop-only Spline component was hidden with CSS but still mounted on mobile/tablet, forcing unnecessary 3D/runtime work. | **Fixed.** Spline is now dynamically imported and only rendered when `(min-width: 1280px)` matches. Mobile/tablet render only the project carousel. |
| 2 | HIGH | Hero | Hero entry used `transition-all duration-700`, animating unspecified properties and feeling slower than necessary. | **Fixed.** Explicit `opacity, transform`, strong ease-out and 500 ms marketing entry. Interactive controls use 150 ms feedback. |
| 3 | MEDIUM | Accessibility | Programmatic `scrollIntoView({ behavior: 'smooth' })` ignored `prefers-reduced-motion`. | **Fixed.** Shared motion utility chooses `auto` for reduced motion and `smooth` otherwise. Used in Hero, Navbar, About and project pagination. |
| 4 | MEDIUM | Mobile navigation | Menu appeared/disappeared without a spatial story; theme/menu controls were 40 px. | **Fixed.** Origin-aware top-right materialization at 180 ms, coherent exit, closed-state focus removal, 44 px controls. |
| 5 | MEDIUM | Mobile project carousel | Inactive cards were overly dimmed/scaled (`.92`, `.45`) and arrow targets were 40 px. | **Fixed.** Subtler depth (`.96`, `.70`), 44 px controls and near-instant snap when reduced motion is enabled. |
| 6 | MEDIUM | Project demo modal | Hand-rolled dialog managed Escape/scroll but did not provide robust focus trapping/return-focus behavior. | **Fixed.** Replaced with the already-installed Radix Dialog primitive. |
| 7 | LOW | Theme motion | Duplicate/broad theme transitions and an old purple hover treatment remained from the previous design system. | **Fixed.** Shared 220 ms motion tokens, duplicate wrapper transition removed, light-mode project hover made neutral. |

## Deliberately rejected animation opportunities

- **Project-card hover zoom:** rejected. Project artwork is already the focal content; zoom would add repeated decorative motion with little information value.
- **Autoplay in the mobile project carousel:** rejected. It removes visitor agency and moves content while it is being read.
- **Ambient particles / floating loops:** rejected. They do not communicate state, hierarchy or interaction.
- **Animated section headings on scroll:** rejected for now. The portfolio already has sufficient visual hierarchy; repeated scroll reveals would add ceremony without improving comprehension.

## Remaining follow-ups

1. Migrate the light/dark theme from legacy utility overrides toward semantic tokens (`surface`, `foreground`, `muted`, `border`, `accent`) to reduce CSS `!important` debt.
2. Consider lazy-loading additional below-the-fold sections if bundle/performance profiling shows meaningful benefit.
3. Review Contact social controls and form feedback on a real mobile device; keep any additional motion limited to causal status feedback.
4. Before any major visual redesign, use the `prototype` workflow: three genuinely different isolated directions, user selection, then production promotion.

## Verdict

**Approve with follow-ups.** The highest-impact motion/performance issues are corrected. The remaining work is primarily theme-system architecture and real-device feel validation rather than adding more animation.
