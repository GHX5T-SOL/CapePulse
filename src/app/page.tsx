import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, CompassIcon, ShieldCheckIcon, SparklesIcon } from "lucide-react";

import { BookingFlow } from "@/components/cape/booking-flow";
import { ConciergeLab } from "@/components/cape/concierge-lab";
import { LiveMapFrame } from "@/components/cape/live-map-frame";
import { RemotionHero } from "@/components/cape/remotion-hero";
import { ActionPair, HighlightCard, SectionIntro } from "@/components/cape/ui";
import { feedPosts, heatZones, journalEntries, tours } from "@/lib/site-data";

export default function HomePage() {
  const servicePillars = [
    {
      title: "Book tours and day journeys",
      copy: "Private Peninsula routes, Winelands days, safaris, city tours, and family pacing in a few taps.",
    },
    {
      title: "Move through the city easily",
      copy: "Airport transfers, hourly chauffeurs, luxury transport, pickups, drop-offs, and all-day movement.",
    },
    {
      title: "Lock in nightlife and dining",
      copy: "Use the CapePulse heat map to see where Cape Town is popping, then reserve a table, club entry, or bottle service.",
    },
    {
      title: "Go premium when needed",
      copy: "From cost-effective planning to villas, private air, executive arrivals, and discreet security overlays.",
    },
  ];

  const buzzFeed = [...feedPosts, ...feedPosts];

  return (
    <div className="space-y-20 pb-12">
      <RemotionHero />

      <section className="page-shell">
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="chapter-card bg-grid-soft">
            <SectionIntro
              eyebrow="What CapePulse does"
              title="Book the whole Cape Town experience from one surface."
              copy="CapePulse is the front door for tours, activities, airport transfers, chauffeurs, villas, nightlife, private aviation, and premium security support. Whether you want a great-value day out or an ultra-luxury arrival, it all starts here."
              actions={<ActionPair primaryHref="/book" primaryLabel="Start booking" secondaryHref="/social/live-map" secondaryLabel="See what’s hot tonight" />}
            />
          </div>
          <div className="chapter-card flex flex-col justify-between gap-4">
            <div className="flex items-center gap-3">
              <SparklesIcon className="size-5 text-[#00A3E6]" />
              <p className="font-medium">Why people use it</p>
            </div>
            <div className="grid gap-3">
              {servicePillars.map((pillar) => (
                <div key={pillar.title} className="rounded-[1.5rem] border border-foreground/8 bg-white/70 p-4">
                  <p className="section-tag">{pillar.title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{pillar.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell space-y-8">
        <SectionIntro
          eyebrow="Choose your journey"
          title="Cape Town tours designed around how people actually want to move."
          copy="Start with the icons, then layer in upgrades like wine pairings, helicopters, padel, yacht sessions, restaurant reservations, or a polished airport handoff."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {tours.slice(0, 3).map((tour) => (
            <HighlightCard
              key={tour.slug}
              detail={tour.summary}
              href={`/tours/${tour.slug}`}
              media={tour.image}
              stat={`${tour.tier} · from R ${tour.basePrice.toLocaleString()}`}
              title={tour.name}
            />
          ))}
        </div>
      </section>

      <section className="page-shell space-y-8">
        <SectionIntro
          eyebrow="Tonight’s heat"
          title="CapePulse shows where Cape Town is popping right now."
          copy="This is not a passive map. It is a live nightlife and city-energy surface that helps people discover the vibe, see the hot zones, and instantly book a table, transfer, or next move."
          actions={
            <Link className="metric-chip w-fit hover:text-foreground" href="/social/live-map">
              Open the CapePulse map
            </Link>
          }
        />
        <div className="grid gap-4 xl:grid-cols-[1.1fr_0.56fr_0.54fr]">
          <div className="chapter-card overflow-hidden p-0">
            <LiveMapFrame condensed />
          </div>
          <div className="grid gap-4">
            {heatZones.slice(0, 3).map((zone) => (
              <div key={zone.id} className="chapter-card">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{zone.emoji}</span>
                    <div>
                      <p className="font-medium">{zone.name}</p>
                      <p className="text-sm text-muted-foreground">{zone.peakWindow}</p>
                    </div>
                  </div>
                  <span className="metric-chip">{zone.activeNow} live</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{zone.crowdNote}</p>
              </div>
            ))}
          </div>
          <div className="chapter-card p-4">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="section-tag">Live commentary</p>
              <span className="metric-chip">Auto-updating</span>
            </div>
            <div className="feed-marquee h-[24rem]">
              <div className="feed-marquee-track">
                {buzzFeed.map((post, index) => (
                  <div key={`${post.id}-${index}`} className="rounded-[1.35rem] border border-foreground/8 bg-white/72 p-3">
                    <div className="flex gap-3">
                      <div className="relative h-16 w-16 overflow-hidden rounded-[1rem]">
                        <Image alt={post.location} className="object-cover" fill sizes="64px" src={post.media} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <p className="font-medium">{post.location}</p>
                          <span className="text-xs text-muted-foreground">{post.timestamp}</span>
                        </div>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">{post.caption}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell">
        <BookingFlow />
      </section>

      <section className="page-shell space-y-8">
        <SectionIntro
          eyebrow="CapePulse app"
          title="A social map, bookings hub, and city guide rolled into one."
          copy="Locals and travelers can check what is happening tonight, see where the energy is building, manage plans, and move from discovery to booking without leaving the same interface."
        />
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="chapter-card space-y-3">
            <div className="flex items-center gap-3">
              <CompassIcon className="size-5 text-[#00A3E6]" />
              <p className="font-medium">The new hub of Cape Town</p>
            </div>
            <p className="text-sm leading-7 text-muted-foreground">
              Use CapePulse to check the map, watch nightlife commentary roll in, manage your bookings, store cards, revisit past trips, and jump from a table booking into a pickup request in seconds.
            </p>
            <Link className="inline-flex items-center gap-2 text-sm font-medium text-foreground" href="/social">
              Open CapePulse app
              <ArrowUpRightIcon className="size-4" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {feedPosts.map((post) => (
              <HighlightCard key={post.id} detail={post.caption} media={post.media} stat={`${post.location} · ${post.timestamp}`} title={post.location} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell">
        <ConciergeLab />
      </section>

      <section className="page-shell space-y-8">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="chapter-card">
            <div className="flex items-center gap-3">
              <ShieldCheckIcon className="size-5 text-[#2F6B4F]" />
              <p className="font-medium">Move with confidence</p>
            </div>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight">From family arrivals to ultra-private movement, the same product adapts to the moment.</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              CapePulse is designed for couples, families, friend groups, business travelers, diplomats, and guests who need everything from a simple airport transfer to a tightly coordinated premium arrival.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ActionPair primaryHref="/vip" primaryLabel="Explore VIP" secondaryHref="/profile" secondaryLabel="See member dashboard" />
            </div>
          </div>
          <div className="grid gap-4">
            {[
              { value: "Tours", label: "Private routes, safaris, Winelands, and city icons." },
              { value: "Tables", label: "Restaurant reservations, nightlife entries, and bottle service." },
              { value: "Transfers", label: "Airport pickups, chauffeurs, premium vehicles, and all-day movement." },
              { value: "VIP", label: "Luxury arrivals, villas, private air, and discreet security support." },
            ].map((metric) => (
              <div key={metric.value} className="chapter-card">
                <p className="font-heading text-4xl">{metric.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell space-y-8">
        <SectionIntro
          eyebrow="Belong in Cape Town"
          title="Editorial depth for people who want more than the itinerary."
          copy="The journal extends discovery, not as filler SEO, but as another way to feel the city before you move through it."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {journalEntries.map((entry) => (
            <HighlightCard key={entry.slug} detail={entry.deck} href="/journal" media={entry.image} stat={entry.readTime} title={entry.title} />
          ))}
        </div>
      </section>

      <section className="page-shell">
        <div className="chapter-card flex flex-col gap-6 overflow-hidden lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <p className="section-tag">Final CTA</p>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">CapePulse is where people book Cape Town, then feel the city live.</h2>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground">
              Secure your tour, airport transfer, nightlife plan, villa stay, or VIP arrival, then use the map to keep the night moving.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ActionPair primaryHref="/book" primaryLabel="Book now" secondaryHref="/social/live-map" secondaryLabel="Watch the heat map" />
          </div>
        </div>
      </section>
    </div>
  );
}
