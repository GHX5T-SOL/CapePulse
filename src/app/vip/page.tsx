import { ShieldCheckIcon } from "lucide-react";

import { ActionPair } from "@/components/cape/ui";

export default function VipPage() {
  return (
    <div className="page-shell space-y-8 py-8">
      <div className="chapter-card">
        <div className="flex items-center gap-3">
          <ShieldCheckIcon className="size-5 text-[#2F6B4F]" />
          <p className="section-tag">VIP</p>
        </div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Discreet movement, premium arrivals, and partner-facilitated security overlays.</h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
          CapePulse frames VIP services as partner-led and review-gated. The UI is luxurious but careful with language: secure transfer corridors,
          airport meet-and-greet, executive transport, private aviation coordination, and rapid-response escalation.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {[
          "Black arrival corridor",
          "Private aviation and helicopter handoff",
          "Restaurant privacy and after-dark routing",
        ].map((title) => (
          <div key={title} className="chapter-card">
            <p className="font-semibold">{title}</p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Human-confirmed only. Partner availability, licensing, route windows, and insurance checks remain visible parts of the workflow.
            </p>
          </div>
        ))}
      </div>
      <div className="chapter-card flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-medium">Rapid response demo channel</p>
          <p className="mt-1 text-sm text-muted-foreground">WhatsApp is represented conceptually only. Sensitive identifiers stay out of automation.</p>
        </div>
        <ActionPair primaryHref="/book" primaryLabel="Start a private intake" secondaryHref="/about" secondaryLabel="Review trust notes" />
      </div>
    </div>
  );
}
