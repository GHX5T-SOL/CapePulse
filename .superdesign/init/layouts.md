# Layouts

Repository audit date: 2026-04-10

## Root Layout

- `src/app/layout.tsx`
  - loads Sora, Instrument Sans, and IBM Plex Mono
  - sets metadata base to `https://capepulse.vercel.app`
  - applies ambient background orbs
  - renders the shared application shell:
    - `SiteHeader`
    - page content
    - `SiteFooter`
    - `LeoLionDock`
    - `Toaster`

## Shared Layout Patterns

- `.page-shell` in `src/app/globals.css`
  - max-width route wrapper for all public pages
- `.chapter-card`
  - primary glass content container
- `.glass-panel` / `.glass-strong`
  - utility surface treatments for hero cards, panels, and overlays
- `.page-grid`
  - utility twelve-column grid for future asymmetrical layouts

No route groups or nested layouts exist yet. All top-level pages currently inherit from `src/app/layout.tsx`.
