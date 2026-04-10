import Link from "next/link";
import { ArrowUpRightIcon, CompassIcon, ShieldCheckIcon, SparklesIcon } from "lucide-react";

import { BookingFlow } from "@/components/cape/booking-flow";
import { ConciergeLab } from "@/components/cape/concierge-lab";
import { LiveMapFrame } from "@/components/cape/live-map-frame";
import { RemotionHero } from "@/components/cape/remotion-hero";
import { ActionPair, HighlightCard, SectionIntro } from "@/components/cape/ui";
import { feedPosts, heatZones, journalEntries, siteMetrics, tours } from "@/lib/site-data";

export default function HomePage() {
  return (
    <div className="space-y-20 pb-12">
      <RemotionHero />

      <section className="page-shell">
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="chapter-card bg-grid-soft">
            <SectionIntro
              eyebrow="Arrival"
              title="Cape Town should feel like a sequence, not a search problem."
              copy="CapePulse combines premium private touring, live city discovery, AI itinerary logic, and partner-led VIP movement into one coherent product. The experience starts the moment you land."
              actions={<ActionPair primaryHref="/discover" primaryLabel="Discover Cape" secondaryHref="/social" secondaryLabel="Watch the city live" />}
            />
          </div>
          <div className="chapter-card flex flex-col justify-between gap-4">
            <div className="flex items-center gap-3">
              <SparklesIcon className="size-5 text-[#00A3E6]" />
              <p className="font-medium">What makes CapePulse memorable</p>
            </div>
            <div className="grid gap-3">
              <div className="rounded-[1.5rem] border border-foreground/8 bg-white/70 p-4">
                <p className="section-tag">See the pulse</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">Live heat zones and check-ins turn the city into something you can feel before you book.</p>
              </div>
              <div className="rounded-[1.5rem] border border-foreground/8 bg-white/70 p-4">
                <p className="section-tag">Plan with AI</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">Quotes, itineraries, run-sheets, and review drafts all reflect the attached operator playbook.</p>
              </div>
              <div className="rounded-[1.5rem] border border-foreground/8 bg-white/70 p-4">
                <p className="section-tag">Move with confidence</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">From airport corridors to family pacing, the product treats logistics as part of the experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell space-y-8">
        <SectionIntro
          eyebrow="Choose your journey"
          title="Private routes, social energy, and a city designed around timing."
          copy="CapePulse keeps the first impression bold: no generic card dump, just a small set of high-confidence ways into Cape Town."
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
          eyebrow="Watch the city live"
          title="The map is a product surface, not decoration."
          copy="Camps Bay, the Waterfront, Sea Point, Table Mountain, Bo-Kaap, and the Winelands show up as live motion zones, creating a feeling closer to Snapchat and city operations than static travel planning."
          actions={
            <Link className="metric-chip w-fit hover:text-foreground" href="/social/live-map">
              Open the live map
            </Link>
          }
        />
        <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="chapter-card overflow-hidden p-0">
            <LiveMapFrame condensed />
          </div>
          <div className="grid gap-4">
            {heatZones.slice(0, 3).map((zone) => (
              <div key={zone.id} className="chapter-card">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium">{zone.name}</p>
                  <span className="metric-chip">{zone.activeNow} live</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{zone.headline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell">
        <BookingFlow />
      </section>

      <section className="page-shell space-y-8">
        <SectionIntro
          eyebrow="Social hub"
          title="Cape Town feels more alive when locals and travelers share the same surface."
          copy="CapePulse treats discovery like a living network: check-ins, DMs, relationship-status prompts, fitness plans, and location-driven recommendations."
        />
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="chapter-card space-y-3">
            <div className="flex items-center gap-3">
              <CompassIcon className="size-5 text-[#00A3E6]" />
              <p className="font-medium">The new hub of Cape Town</p>
            </div>
            <p className="text-sm leading-7 text-muted-foreground">
              Users don&apos;t just browse tours. They see where the city is peaking, who is at the promenade, which neighborhoods are hot tonight,
              and what to layer onto a private route.
            </p>
            <Link className="inline-flex items-center gap-2 text-sm font-medium text-foreground" href="/social">
              Open social hub
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
            <h3 className="mt-4 text-3xl font-semibold tracking-tight">VIP corridors, family pacing, and city trust signals in the same product.</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              CapePulse treats security, airport handoffs, route confidence, and live human escalation as first-class product features instead of hidden operations.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ActionPair primaryHref="/vip" primaryLabel="Explore VIP" secondaryHref="/about" secondaryLabel="See trust posture" />
            </div>
          </div>
          <div className="grid gap-4">
            {siteMetrics.map((metric) => (
              <div key={metric.label} className="chapter-card">
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
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">One product. Private routes, live city energy, and AI-powered handoff discipline.</h2>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground">
              Built to feel like the obvious next unicorn in Cape Town experiences: part concierge, part social layer, part logistics command center.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ActionPair primaryHref="/book" primaryLabel="Book the demo flow" secondaryHref="/ops-lab" secondaryLabel="Open ops lab" />
          </div>
        </div>
      </section>
    </div>
  );
}
