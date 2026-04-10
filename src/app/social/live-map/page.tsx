import Image from "next/image";
import Link from "next/link";

import { LiveMapFrame } from "@/components/cape/live-map-frame";
import { feedPosts, heatZones } from "@/lib/site-data";

export default function LiveMapPage() {
  const liveFeed = [...feedPosts, ...feedPosts];

  return (
    <div className="page-shell space-y-8 py-8">
      <div className="chapter-card">
        <p className="section-tag">CapePulse Live Map</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">See where Cape Town is on fire right now.</h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
          Check the hottest zones, watch the crowd commentary roll in, and turn the vibe into a booking instantly, whether that means a dinner
          table, a club entry, a luxury transfer, or a full night plan.
        </p>
      </div>
      <div className="grid gap-4 xl:grid-cols-[1.15fr_0.48fr_0.52fr]">
        <div className="chapter-card overflow-hidden p-0">
          <LiveMapFrame />
        </div>
        <div className="space-y-4">
          {heatZones.map((zone) => (
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
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{zone.headline}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">{zone.topSpots.join(" · ")}</p>
            </div>
          ))}
          <Link className="metric-chip w-fit hover:text-foreground" href="/book">
            Book from the map
          </Link>
        </div>
        <div className="chapter-card p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="section-tag">Live commentary</p>
            <span className="metric-chip">Tweet-style feed</span>
          </div>
          <div className="feed-marquee h-[38rem]">
            <div className="feed-marquee-track">
              {liveFeed.map((post, index) => (
                <div key={`${post.id}-${index}`} className="rounded-[1.35rem] border border-foreground/8 bg-white/74 p-3">
                  <div className="flex gap-3">
                    <div className="relative h-[4.5rem] w-[4.5rem] overflow-hidden rounded-[1rem]">
                      <Image alt={post.location} className="object-cover" fill sizes="72px" src={post.media} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="font-medium">{post.location}</p>
                        <span className="text-xs text-muted-foreground">{post.timestamp}</span>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{post.caption}</p>
                      <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
                        <span>{post.reactions} likes</span>
                        <span>{post.comments} comments</span>
                        <span>{post.checkIns} check-ins</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
