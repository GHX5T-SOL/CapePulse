# Components

Repository audit date: 2026-04-10

## Shared CapePulse Components

- `src/components/cape/site-header.tsx`
  - fixed liquid-glass navigation
  - desktop route pills + mobile sheet navigation
- `src/components/cape/site-footer.tsx`
  - trust footer, compliance notes, legal framing
- `src/components/cape/ui.tsx`
  - `LogoMark`
  - `SectionIntro`
  - `HighlightCard`
  - `ActionPair`
- `src/components/cape/remotion-hero.tsx`
  - homepage hero shell
  - plays pre-rendered `public/media/capepulse-hero.mp4`
- `src/components/cape/booking-flow.tsx`
  - multi-step booking demo
  - hits `/api/demo/availability`, `/api/demo/quote`, and `/api/demo/itinerary`
- `src/components/cape/concierge-lab.tsx`
  - AI concierge demo tabs
  - hits review, sentiment, run-sheet, and VIP demo endpoints
- `src/components/cape/live-map-frame.tsx`
  - client-only wrapper for the map
- `src/components/cape/live-map.tsx`
  - Leaflet map
  - OSM tiles + `leaflet.heat` + custom pulsing markers
- `src/components/cape/leo-lion.tsx`
  - floating assistant dock
  - React Three Fiber lion with concierge modal

## UI Primitives

shadcn/base-nova primitives live in `src/components/ui/` and currently include:

- `accordion.tsx`
- `avatar.tsx`
- `badge.tsx`
- `card.tsx`
- `dialog.tsx`
- `drawer.tsx`
- `input.tsx`
- `select.tsx`
- `separator.tsx`
- `sheet.tsx`
- `skeleton.tsx`
- `sonner.tsx`
- `tabs.tsx`
- `textarea.tsx`

## Data And Utilities

- `src/lib/types.ts`
  - all public demo interfaces
- `src/lib/site-data.ts`
  - seeded tours, users, heat zones, journal entries, reviews, and compliance notes
- `src/lib/demo.ts`
  - deterministic quote, itinerary, run-sheet, sentiment, and VIP helpers
- `src/lib/utils.ts`
  - shared utility helpers from shadcn bootstrap
