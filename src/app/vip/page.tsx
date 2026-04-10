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
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Discreet arrivals, polished movement, and premium support on request.</h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
          CapePulse handles executive airport arrivals, discreet city movement, luxury transport, private aviation, villa coordination, and guest support for people who want a higher-touch experience.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {[
          {
            title: "Executive arrival planning",
            copy: "Airport meet-and-greet, chauffeur placement, luggage handling, and a calm first move into the city.",
          },
          {
            title: "Private air and premium movement",
            copy: "Private jet requests, helicopter support, premium vehicles, and polished guest-flow coordination.",
          },
          {
            title: "Private dining and after-dark routing",
            copy: "Discreet restaurant arrivals, late-night pickups, and a more controlled evening experience.",
          },
        ].map((item) => (
          <div key={item.title} className="chapter-card">
            <p className="font-semibold">{item.title}</p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.copy}</p>
          </div>
        ))}
      </div>
      <div className="chapter-card flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-medium">Private request line</p>
          <p className="mt-1 text-sm text-muted-foreground">Start a private intake for airport movement, villa coordination, private air, or secure guest handling.</p>
        </div>
        <ActionPair primaryHref="/book" primaryLabel="Start a private request" secondaryHref="/about" secondaryLabel="See why guests trust us" />
      </div>
    </div>
  );
}
