# CapePulse Design System

Status: locked for implementation on 2026-04-10.

## Product Summary

CapePulse is a premium-but-inclusive Cape Town travel and lifestyle platform for locals and international visitors. The product combines private touring, live city discovery, AI concierge demos, VIP and security logistics, and a social hub that makes Cape Town feel active, personal, and bookable.

Tagline: `Cape Town, personally orchestrated.`

## Brand Core

- Brand name: `CapePulse`
- Promise: turn Cape Town from a list of ideas into a living, coordinated journey
- Tone: premium, warm, precise, adventurous, discreet when needed, never cheesy
- Personality: intelligent local host with founder-grade operational rigor
- Audience:
  - international tourists planning high-value short stays
  - locals looking for elevated experiences and social discovery
  - couples, families, solo travelers, diplomats, and high-risk VIP travelers

## Visual Direction

- Style: bright liquid-glass travel interface with refractive surfaces and cinematic depth
- Mood: sunlit Atlantic coastline, ocean breeze, warm brass reflections, cloud-white air, fynbos green accents
- Avoid:
  - generic tourism cards on beige backgrounds
  - dark cyberpunk
  - purple AI gradients
  - generic fintech or SaaS visual language
- Core references to blend:
  - premium editorial travel
  - modern glassmorphism
  - spatial UI depth
  - cinematic scroll storytelling
  - bento layouts with asymmetry

## Logo System

- Mark: monoline orb containing a flat horizon line for Table Mountain, a descending coastal curve for Chapman’s Peak, and a pulse dot with two signal arcs
- Shape language: smooth, precise, slightly softened terminals
- Default lockup: glass orb mark + `CapePulse` wordmark
- Wordmark style: geometric sans with modest rounding, medium tracking, custom cap-height balance
- Usage:
  - full-color orb on light backgrounds
  - etched white outline on dark media
  - single-ink variant for footer/legal areas

## Color Tokens

- `--cp-cloud`: `#F6FBFF`
- `--cp-foam`: `#EAF8FF`
- `--cp-mist`: `rgba(255, 255, 255, 0.18)`
- `--cp-mist-strong`: `rgba(255, 255, 255, 0.28)`
- `--cp-atlantic`: `#00A3E6`
- `--cp-atlantic-deep`: `#0A2233`
- `--cp-seafoam`: `#7FE4C3`
- `--cp-fynbos`: `#2F6B4F`
- `--cp-sun`: `#FFB547`
- `--cp-sunset`: `#FF6B4A`
- `--cp-ink`: `#08141F`
- `--cp-ink-soft`: `#203241`
- `--cp-line`: `rgba(8, 20, 31, 0.08)`
- `--cp-shadow`: `0 24px 90px rgba(8, 20, 31, 0.12)`

## Gradient Language

- Hero glass glow: `linear-gradient(135deg, rgba(0,163,230,0.24), rgba(127,228,195,0.18) 45%, rgba(255,181,71,0.18) 100%)`
- Sunset glow: `radial-gradient(circle at top left, rgba(255,181,71,0.35), transparent 52%)`
- Ocean depth glow: `radial-gradient(circle at bottom right, rgba(0,163,230,0.22), transparent 48%)`
- Never use purple, neon magenta, or generic blue-to-purple gradients

## Typography

- Display: `Sora`
- Body and UI: `Instrument Sans`
- Utility, metrics, ops labels: `IBM Plex Mono`

### Type Scale

- Hero display: clamp `4rem` to `8.5rem`, weight `700`, line-height `0.9`
- Section display: clamp `2.4rem` to `4.8rem`, weight `650`
- Card title: `1.1rem` to `1.5rem`, weight `600`
- Body: `1rem` to `1.0625rem`, weight `400`, line-height `1.6`
- Utility label: `0.72rem`, uppercase, tracking `0.24em`, mono

## Layout Principles

- Desktop grid: 12 columns with oversized breathing room
- Section rhythm: alternate expansive media-led sections with denser bento utility bands
- Mobile rhythm: full-width vertical story chapters with reduced blur and shorter animations
- Navigation should feel like a route planner, not a docs header
- Use asymmetry intentionally, not randomly

## Motion System

- Default easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- Large reveal duration: `900ms`
- Micro interaction duration: `220ms`
- Motion motifs:
  - soft drift for floating glass badges
  - parallax lift for media cards
  - gentle refractive sheen on hover
  - section-to-section cinematic fades and masked reveals
- Reduced-motion mode:
  - disable parallax
  - replace movement with opacity changes
  - reduce blur and layered background motion

## Surfaces And Components

- Glass panel:
  - background `rgba(255,255,255,0.22)`
  - backdrop blur `22px`
  - 1px white border at low opacity
  - layered soft shadow only
- Strong glass panel:
  - background `rgba(255,255,255,0.32)`
  - blur `28px`
  - slightly stronger border
- Primary button:
  - fill `--cp-ink`
  - text `--cp-cloud`
  - subtle glow edge on hover
- Secondary button:
  - translucent glass fill
  - ink text
  - border emphasis
- Filter pills:
  - mono label
  - active state uses Atlantic blue tint with ink border
- Cards:
  - radii between `24px` and `32px`
  - large media crops
  - structured metadata rows using mono labels

## 3D And Spatial UI

- 3D mascot: `Leo the Lion`
- Leo should feel premium and slightly playful, not cartoonish
- Preferred placement: bottom-right floating assistant dock
- Behavior:
  - idle breathing loop
  - subtle head turn toward pointer
  - blink every few seconds
  - glow pulse when a concierge action is ready
- Fallback:
  - still illustration card with text prompt bubble

## Page Direction

- `/`: immersive story with chapters `Arrival`, `See the Pulse`, `Choose Your Journey`, `Watch the City Live`, `Plan with AI`, `Move with Confidence`, `Belong in Cape Town`
- `/discover`: editorial atlas and seasonal exploration
- `/tours`: filterable private touring catalogue
- `/tours/[slug]`: cinematic product detail page
- `/experiences`: activity marketplace with energy and spontaneity
- `/book`: operationally believable multi-step booking flow
- `/social`: social hub with active city signals
- `/social/live-map`: live heat map and pulsing check-ins
- `/concierge`: AI workspace and demo lab
- `/vip`: discreet premium and partner security services
- `/journal`: premium editorial content
- `/about`: brand trust and standards
- `/ops-lab`: operational intelligence showcase

## Content And Imagery Rules

- Prefer real Cape Town photography and aerial footage over synthetic imagery
- Show a mix of:
  - Table Mountain
  - Chapman’s Peak
  - Boulders penguins
  - Bo-Kaap
  - V&A Waterfront
  - Winelands
  - safari wildlife
  - Sea Point promenade
- For people imagery, diversity and realism matter
- For luxury, prioritize craft, calm, and confidence over overt wealth signaling

## Accessibility And Compliance

- Maintain strong contrast even with glass panels
- Primary actions must remain legible over moving media
- Hit targets minimum `44px`
- Every animated module must degrade cleanly
- AI/chat UI must never request full card numbers, ID numbers, or passport scans
- Always show a human handoff path in concierge and VIP flows

## Implementation Notes

- Build in Next.js 15 App Router with Tailwind CSS
- Use this file as the source of truth for colors, fonts, motion, and page personality
- Do not introduce fonts, colors, or gradients outside this system unless explicitly approved
