import Link from "next/link";

import { LiveMapFrame } from "@/components/cape/live-map-frame";
import { heatZones } from "@/lib/site-data";

export default function LiveMapPage() {
  return (
    <div className="page-shell space-y-8 py-8">
      <div className="chapter-card">
        <p className="section-tag">Live map</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">Cape Town, seen as heat, movement, and timing.</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
          This page borrows the emotional logic of Snapchat maps and city operations dashboards while staying within a travel product frame.
        </p>
      </div>
      <div className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="chapter-card overflow-hidden p-0">
          <LiveMapFrame />
        </div>
        <div className="space-y-4">
          {heatZones.map((zone) => (
            <div key={zone.id} className="chapter-card">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium">{zone.name}</p>
                <span className="metric-chip">{zone.activeNow} active</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{zone.headline}</p>
            </div>
          ))}
          <Link className="metric-chip w-fit hover:text-foreground" href="/social">
            Back to social hub
          </Link>
        </div>
      </div>
    </div>
  );
}
