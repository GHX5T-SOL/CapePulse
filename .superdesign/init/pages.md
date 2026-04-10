# Pages

Repository audit date: 2026-04-10

## Public Routes

- `src/app/page.tsx`
  - depends on:
    - `RemotionHero`
    - `BookingFlow`
    - `ConciergeLab`
    - `LiveMapFrame`
    - `ActionPair`
    - `HighlightCard`
    - `SectionIntro`
    - seeded data from `src/lib/site-data.ts`
- `src/app/discover/page.tsx`
  - depends on:
    - `SectionIntro`
    - `HighlightCard`
    - `spotlightImages`, `tours`, `journalEntries`
- `src/app/tours/page.tsx`
  - depends on:
    - `SectionIntro`
    - `HighlightCard`
    - `tours`
- `src/app/tours/[slug]/page.tsx`
  - depends on:
    - `ActionPair`
    - `Accordion`
    - `tours`
    - `notFound()` fallback
- `src/app/experiences/page.tsx`
  - depends on:
    - `SectionIntro`
    - `experiences`
- `src/app/book/page.tsx`
  - depends on:
    - `BookingFlow`
- `src/app/social/page.tsx`
  - depends on:
    - `SectionIntro`
    - `HighlightCard`
    - `feedPosts`, `users`, `dmThreads`
- `src/app/social/live-map/page.tsx`
  - depends on:
    - `LiveMapFrame`
    - `heatZones`
- `src/app/concierge/page.tsx`
  - depends on:
    - `ConciergeLab`
- `src/app/vip/page.tsx`
  - depends on:
    - `ActionPair`
- `src/app/journal/page.tsx`
  - depends on:
    - `SectionIntro`
    - `HighlightCard`
    - `journalEntries`
- `src/app/about/page.tsx`
  - depends on:
    - `complianceNotes`
- `src/app/ops-lab/page.tsx`
  - depends on:
    - `ConciergeLab`
    - `complianceNotes`

## API Routes

- `src/app/api/demo/availability/route.ts`
- `src/app/api/demo/checkins/route.ts`
- `src/app/api/demo/heatmap/route.ts`
- `src/app/api/demo/itinerary/route.ts`
- `src/app/api/demo/quote/route.ts`
- `src/app/api/demo/review-response/route.ts`
- `src/app/api/demo/run-sheet/route.ts`
- `src/app/api/demo/sentiment/route.ts`
- `src/app/api/demo/vip-request/route.ts`
