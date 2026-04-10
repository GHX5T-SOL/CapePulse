# CapePulse

CapePulse is a frontend-first Cape Town experience platform demo built with Next.js 15. It combines premium private touring, live city discovery, AI concierge workflows, VIP logistics framing, and a locals-meets-travelers social layer into a single production-style interface.

Tagline: `Cape Town, personally orchestrated.`

## What’s Included

- immersive homepage with a pre-rendered Remotion hero reel
- editorial discovery surface for routes, neighborhoods, and seasonal entry points
- private tours catalogue and dynamic tour detail pages
- multi-step booking demo with availability, quote, itinerary, and handoff logic
- social hub with seeded profiles, posts, DMs, and check-ins
- live Cape Town heat map powered by Leaflet and `leaflet.heat`
- AI concierge demo with review drafting, sentiment, run-sheet, and VIP request flows
- VIP and trust surfaces with compliance-aware copy derived from the attached AI opportunities brief
- seeded mock APIs so the app feels live without depending on real vendors

## Stack

- Next.js `15.5.15` App Router
- React `19.1.0`
- Tailwind CSS v4
- shadcn/ui with the `base-nova` preset
- Framer Motion
- Zustand
- React Three Fiber + drei
- Remotion
- React Leaflet + Leaflet + `leaflet.heat`
- Zod

## Routes

### Public pages

- `/`
- `/discover`
- `/tours`
- `/tours/[slug]`
- `/experiences`
- `/book`
- `/social`
- `/social/live-map`
- `/concierge`
- `/vip`
- `/journal`
- `/about`
- `/ops-lab`

### Demo APIs

- `/api/demo/availability`
- `/api/demo/checkins`
- `/api/demo/heatmap`
- `/api/demo/itinerary`
- `/api/demo/quote`
- `/api/demo/review-response`
- `/api/demo/run-sheet`
- `/api/demo/sentiment`
- `/api/demo/vip-request`

## Local Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build And Verify

```bash
npm run lint
npm run build
```

## Remotion Media

The homepage hero uses the pre-rendered asset at `public/media/capepulse-hero.mp4`.

If you want to regenerate it:

```bash
npm run remotion:render-hero
```

If you want to iterate on the composition locally:

```bash
npm run remotion:studio
```

The composition sources live in:

- `src/remotion/capepulse-hero.tsx`
- `src/remotion/index.tsx`
- `src/remotion/root.tsx`

## Project Structure

```text
src/
  app/
    api/demo/*        Demo endpoints for quote, itinerary, run-sheet, and live data
    */page.tsx        Public route entry points
    layout.tsx        Shared shell and metadata
    globals.css       CapePulse tokens and global styles
  components/
    cape/*            Brand-specific surfaces and interactive modules
    ui/*              shadcn/base-nova primitives
  lib/
    demo.ts           Deterministic demo logic
    site-data.ts      Seeded tours, users, feed, heat zones, journal content
    types.ts          Shared TypeScript interfaces
  remotion/
    *                 Hero composition sources
public/
  media/              Pre-rendered hero video
.superdesign/
  design-system.md    Locked CapePulse design system
  init/*              Refreshed design context files
```

## Product Notes

- This is intentionally a frontend demo first. Payments, CRM sync, WhatsApp delivery, and real dispatch/security operations are mocked.
- AI flows are shaped by the attached “AI Opportunities for Private Cape Escapes” brief:
  - availability-aware quoting
  - itinerary generation
  - operator run-sheets
  - review-response drafting
  - sentiment summaries
  - human handoff discipline
  - POPIA-aware data minimization
- VIP and armed-response language is framed as partner-facilitated, not self-operated licensing claims.
- The live map defaults to OpenStreetMap tiles so the demo does not require a paid map token.

## Deployment

The repo includes `vercel.json` for a Vercel deployment with media caching and no-store demo API headers.

Typical flow:

```bash
npm run build
vercel
```

Optional environment variables:

- `MAPBOX_TOKEN`
  - only needed if you later add a Mapbox-backed map mode

## Design Source Of Truth

- `.superdesign/design-system.md`
- `.superdesign/init/components.md`
- `.superdesign/init/layouts.md`
- `.superdesign/init/pages.md`
- `.superdesign/init/routes.md`
- `.superdesign/init/theme.md`

## Verification Completed

- `npm run lint`
- `npm run build`
- `npm run remotion:render-hero`
- local dev server launch on `http://localhost:3000`

## License / Asset Notes

- Demo imagery is sourced through remote Unsplash URLs in seeded content.
- The rendered hero video is derived from the Remotion composition and those remote images.
- Review asset licensing before commercial launch and replace demo media with owned or properly licensed production assets where required.
