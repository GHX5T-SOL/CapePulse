# Theme

Repository audit date: 2026-04-10

## Source Of Truth

- visual system spec: `/.superdesign/design-system.md`
- implementation tokens and utilities: `/src/app/globals.css`
- font loading: `/src/app/layout.tsx`

## Active Fonts

- display: `Sora`
- body/UI: `Instrument Sans`
- utility/metrics: `IBM Plex Mono`

## Core Runtime Tokens

Defined in `src/app/globals.css`:

- `--background: #f6fbff`
- `--foreground: #08141f`
- `--primary: #08141f`
- `--primary-foreground: #f6fbff`
- `--accent: rgba(0, 163, 230, 0.12)`
- `--ring: rgba(0, 163, 230, 0.44)`
- `--radius: 1.25rem`
- `--shadow-soft: 0 24px 90px rgba(8, 20, 31, 0.12)`
- `--shadow-glass: 0 20px 70px rgba(8, 20, 31, 0.08)`

## Key Utility Classes

- `.page-shell`
- `.page-grid`
- `.glass-panel`
- `.glass-strong`
- `.hero-mesh`
- `.section-tag`
- `.chapter-card`
- `.metric-chip`
- `.refractive-border`
- `.bg-grid-soft`
- `.map-pulse`

## Notes

- Tailwind v4 is used through CSS `@theme inline`.
- shadcn base-nova styles are imported through `@import "shadcn/tailwind.css";`
- Leaflet styles are imported globally through `@import "leaflet/dist/leaflet.css";`
- The theme is light-first and intentionally avoids dark-mode-only presentation.
